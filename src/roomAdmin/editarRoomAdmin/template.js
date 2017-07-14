var yo = require('yo-yo');    

var login= yo`
  <div id = "containerFichaMedicaContent" >
    <div  class="row">
        <div id="colFiltros" class=" col s12">
          <div id = "containerResultados" class="container z-depth-4 ">
              <div id = "resultadosFormato" class="row">
             
              <form class="col s12">
            <div class="row">
              <div id = "usernameCol" class="input-field col s10  m8 l6 offset-s1 offset-m2 offset-l3">
               <input placeholder="Nombre Completo" id="crearClienteNombre" type="text" class="validate ">
               <label for="first_name">Nombre</label>
              </div>
            </div>
            <div class="row">
              <div id = "usernameCol" class="input-field col s10  m8 l6 offset-s1 offset-m2 offset-l3">
               <input placeholder="Ingrese el rut" id="crearClienteRut" type="text" class="validate ">
               <label for="first_name">Rut</label>
              </div>
            </div>
            <div class="row">
              <div id = "usernameCol" class="input-field col s10  m8 l6 offset-s1 offset-m2 offset-l3">
               <input placeholder="Ingrese una descripción" id="crearClienteDescrip" type="text" class="validate" >
               <label for="first_name">Descripción</label>
              </div>
            </div>
            <div class="row">
              <div id = "usernameCol" class="input-field col s10  m8 l6 offset-s1 offset-m2 offset-l3">
               <input placeholder="Ingrese una dirección" id="crearClienteDireccion" type="text" class="validate ">
               <label for="first_name">Dirección</label>
              </div>
            </div>
          </form>
          <a id="btnRegistarseRegistro" class="waves-effect waves-light btn-large col s10  m8 l6  offset-s1 offset-m2 offset-l3 z-depth-4"  >Registarse</a>
          <!-- Modal Trigger -->
          <!-- Modal Structure -->
          <div id="registroModal" class="modal">
              <div class="modal-content">
                <h4 id="modalTitulo">Registro Exitoso</h4>
                <p id="modalParrafo">Se ha creado el usuario</p>
              </div>
              <div class="modal-footer">
                <a id="btnAceptarCrearCliente"  class="modal-action modal-close waves-effect waves-green btn-flat modalAceptar">Guardar</a>
              </div>
          </div>
                
             </div>
          </div>
        </div>
    </div>
  </div>
`;

module.exports = login;