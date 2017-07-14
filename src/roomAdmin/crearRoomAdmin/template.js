var yo = require('yo-yo');    

var login= yo`
  <div id = "containerTipo1" >
    <div  class="row">
        <div id="colFiltros" class=" col s12">
          <div id = "containerTipo1Interno" class="container z-depth-4 ">
            <div id = "resultadosFormato" class="row">
              <form class="col s12">
                <div class="row">
                  <div id = "usernameCol" class="input-field col s10  m8 l6 offset-s1 offset-m2 offset-l3">
                   <input id="crearPersonaNombre" type="text" class="validate ">
                   <label for="first_name">Room ID</label>
                  </div>
                </div>
                <div class="row">
                   <div  class="input-field col s10  m8 l6 offset-s1 offset-m2 offset-l3">
                        <select id="itemTurno">
                          <option value="" disabled selected>Conectado a Oxyplus Nº</option>
                          <option value="1">Oxyplus Nº 1123 </option>
                          <option value="2">Oxyplus Nº 5323</option>
                          <option value="3">Oxyplus Nº 6123 </option>
                        </select>
                   </div>
                </div>
                <div class="row">
                  <div id = "usernameCol" class="input-field col s10  m8 l6 offset-s1 offset-m2 offset-l3">
                   <input sid="crearPersonaEmail" type="text" class="validate" >
                   <label for="first_name">Descripción</label>
                  </div>
                </div>
              </form>
              <a id="btnRegistarseRegistro" class="waves-effect waves-light btn-large col s10  m8 l6  offset-s1 offset-m2 offset-l3 z-depth-4"  >Crear</a>
              <!-- Modal Trigger -->
              <!-- Modal Structure -->
              <div id="registroModal" class="modal">
                  <div class="modal-content">
                    <h4 id="modalTitulo">Registro Exitoso</h4>
                    <p id="modalParrafo">Se ha creado el usuario</p>
                  </div>
                  <div class="modal-footer">
                    <a id="btnAceptarCrearCliente"  class="modal-action modal-close waves-effect waves-green btn-flat modalAceptar">Crear</a>
                  </div>
              </div> 
            </div>
          </div>
          <br><br>
          <div id = "containerTipo1Interno" class="container z-depth-4 ">
            <div id = "containerTipo1Interno" class="row">
              <form action="#">
                <div class="file-field input-field">
                  <div class="btn-floating btn-large" id="fileBtn">
                  <i class="material-icons">present_to_all</i>
                    <span></span>
                    <input type="file">
                  </div>
                  <div class="file-path-wrapper">
                    <input class="file-path validate" type="text" id="filePath">
                  </div>
                </div>
              </form>
              <a id="btnRoomSubir" class="waves-effect waves-light btn-large col s10  m8 l6  offset-s1 offset-m2 offset-l3 z-depth-4"  >Subir</a>
              
            </div>
          </div>
        </div>
    </div>
  </div>
`;

module.exports = login;


