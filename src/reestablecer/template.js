var yo = require('yo-yo');    

var login= yo`
    <div id = "containerTipo1" class="valign-wrapper" >
      <div id = "containerTipo1Interno" class="container z-depth-4">
        <div class="row">
          <p>Ingresa tu email y haz click en “Enviar”. El Sistema te enviará un mensaje, con un link para modificar tu contraseña.</p>
          <form id="reg-form">
            <div class="row">
              <div id = "recuperarEmailColA" class= "col s12">
                <div id = "recuperarEmailCol" class="input-field ">
                 <input value="Ingrese E-mail" id="recuperarEmail" type="email" class="validate" name="email">
                </div>
              </div>
              <div id = "recuperarEmailColB" class= "col s12">
                <a id= "btnEnviarReestablecer" class="waves-effect waves-light btn-large col s6 offset-s3 z-depth-4" >Enviar</a> 
              </div>
              <!-- Modal Trigger -->
              <!-- Modal Structure -->
              <div id="reestablecerModal" class="modal">
                  <div class="modal-content">
                    <h4 id="modalTitulo">Recuperación de Contraseña</h4>
                    <p id="modalParrafo" >Se le ha enviado un link de recuperación de contraseña a usuario@gmail.com. Usted dispondra de un maximo de 24 horas para ingresar al sistema y establecer una nueva contraseña.</p>
                  </div>
                  <div class="modal-footer">
                    <a id="btnAceptarReestablecer"  class="modal-action modal-close waves-effect waves-green btn-flat modalAceptar">Aceptar</a>
                  </div>
              </div>
            </div> 
          </form>
        </div>
      </div>
    </div>
`;

module.exports = login;


