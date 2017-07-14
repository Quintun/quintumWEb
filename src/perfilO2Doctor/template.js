var yo = require('yo-yo');    

var login= yo`
 <div id = "containerTipo1" class="valign-wrapper" >
      <div id = "containerTipo1Interno" class="container z-depth-4">
        <div class="row">
          <p>Perfiles de O2</p>
                <div id = "target1" class="row"> 
                    <div id = "perfilNombreCol" class="input-field col s12 m6 ">
                       <i id="iconoPerfilDoctor" class="material-icons prefix">assignment</i>
                       <input value="" id="perfilNombre" type="text" class="validate z-depth-2">
                       <label for="icon_prefix">Nombre Perfil</label>
                    </div> 
                    <div id = "perfilDescripcionCol" class="input-field col s12 m6 ">
                       <i id="iconoPerfilDoctor" class="material-icons prefix">comment</i>
                       <input value="" id="perfilDescripcion" type="text" class="validate z-depth-2">
                       <label for="icon_prefix">Descripción</label>
                    </div> 
                </div>
                <div id = "target1" class="row">
                    <div id = "perfilNombreCol" class="input-field col s12 m6 ">
                       <i id="iconoPerfilDoctor" class="material-icons prefix">assessment</i>
                       <input value="" id="perfilQMax" type="text" class="validate z-depth-2">
                       <label for="icon_prefix">Q Máx.</label>
                    </div> 
                    <div id = "perfilDescripcionCol" class="input-field col s12 m6 ">
                       <i id="iconoPerfilDoctor" class="material-icons prefix">assignment_late</i>
                       <input value="" id="perfilTMax" type="text" class="validate z-depth-2">
                       <label for="icon_prefix">T Máx.</label>
                    </div> 
                </div>
                <div id = "target1" class="row">
                    <div id = "perfilNombreCol" class="input-field col s12 m6 ">
                       <i id="iconoPerfilDoctor" class="material-icons prefix">assessment</i>
                       <input value="" id="perfilQFinal" type="text" class="validate z-depth-2">
                       <label for="icon_prefix">Q Final.</label>
                    </div> 
                    <div id = "perfilDescripcionCol" class="input-field col s12 m6 ">
                       <i id="iconoPerfilDoctor" class="material-icons prefix">stars</i>
                       <input value="" id="perfilColorPerfil" type="text" class="validate z-depth-2">
                       <label for="icon_prefix">Color Perfil.</label>
                    </div> 
                </div>
                <div id = "target1" class="row"> 
                   <div id = "perfilO2CrearBtn" class="input-field col s12 center-align">
                        <a id="btnCrearPerfilO2" class="waves-effect waves-light btn-large col s12 m6 offset-m3 z-depth-4">Crear</a>
                   </div>   
                </div>
        </div>
    </div>
  </div> 
`;

module.exports = login;




