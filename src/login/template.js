var yo = require('yo-yo');    

var login= yo`
  <div id ="containerLogin" class="container">
    <div class="row">
      <h1>Oxyplus</h1>
      <div class="row center-align">
        <form class="col s12">
          <div class="row">
            <div id = "usernameCol" class="input-field col s10  m8 l6 offset-s1 offset-m2 offset-l3">
             <input value="Usuario" id="user_name" type="text" class="validate z-depth-2">
            </div>
          </div>
          <div class="row">
            <div id = "passwordCol" class="input-field col s10  m8 l6  offset-s1 offset-m2 offset-l3">
              <input value="*********"id="password" type="password" class="validate z-depth-2">
            </div>
          </div>
          <div class="row">
            <div>
              <a id="btnLogin" class="waves-effect waves-light btn-large col s10  m8 l6  offset-s1 offset-m2 offset-l3 z-depth-4"  >Entrar</a>
            </div>
          </div>
        </form>
      </div>
      <a  id="btnRegistro" class="col s12">Registrar</a>
      <a  id="forgetPassword" class="col s12">Recuperar Contraseña ?</a>
    </div>
  </div> 
`;

module.exports = login;


