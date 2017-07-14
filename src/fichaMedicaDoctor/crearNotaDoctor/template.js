var yo = require('yo-yo');    

var login= yo`
  <div id = "containerTipo1" class="valign-wrapper" >
    <div id = "containerTipo1Interno" class="container z-depth-4">
      <div class="row">
          <p>Datos Nota</p>
          <div id = "target1" class="row"> 
              <div id = "perfilNombreCol" class="input-field col s12 m6 ">
                 <i id="iconoPerfilDoctor" class="material-icons prefix">assignment</i>
                 <input value="" id="perfilNombre" type="text" class="validate z-depth-2">
                 <label for="icon_prefix">Nombre Perfil</label>
              </div> 
              <div id = "perfilDescripcionCol" class="input-field col s12 m6 ">
                 <i id="iconoPerfilDoctor" class="material-icons prefix">stars</i>
                 <input value="" id="perfilDescripcion" type="text" class="validate z-depth-2">
                 <label for="icon_prefix">Tipo de Nota</label>
              </div> 
          </div>
          <p>Nota</p>
          <div id= "creaNota" class="row">
            <div class="row">
              <form class="col s12">
                <div class="row">
                  <div id = "textTareaCol" class="input-field col s12">
                    <textarea id="textarea1" class="materialize-textarea" data-length="80"></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <p>Adjuntar Archivos</p>
          <div id = "resultadosFormato" class="row"> 
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
            
               <!-- Modal Trigger -->
            <a id= "btnEnviar" class="waves-effect waves-light btn-large col s6 offset-s3 z-depth-4" href="#modal1">Agregar</a>

            <!-- Modal Structure -->
            <div id="modal1" class="modal">
                <div class="modal-content">
                  <h4 id="modalTitulo">Agregar Nota</h4>
                  <p id="modalParrafo">Su nota ha sido agregada con éxito.</p>
                </div>
                <div class="modal-footer">
                  <a id="modalAceptar" href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Aceptar</a>
                </div>
            </div>
          </div>
      </div>
    </div>
  </div>
`;

module.exports = login;