var yo = require('yo-yo');    

var login= yo`
<div id = "containerTipo1" >
  <div id = "containerTipo1Interno" class="container z-depth-4"">
   <div id="colFiltros" class=" col s12">
           <br><br>
              <div id = "filtros" class="row">
                  <div class="col s12">
                    <h5 class="titulo">Elija Layout</h5>
                  </div>
                  <br><br>
                  <div class="input-field col s3 m4">
                    <select id="itemPabellón" >
                      <option value="0" disabled selected>Layout</option>
                      <option value="1">Layout 1</option>
                      <option value="2">Layout 2</option>
                      <option value="3">Layout 3</option>
                    </select>
                  </div>
                  <div  class="col s9 m8">
                    <a id= "layoutVer" class="btn-floating btn-large  z-depth-4"><i class="material-icons">done</i></a>    
                  </div> 
              </div> 
         
    </div>
    <div class="row">
        <br><br>
        <div class="col s12 m8 l6 offset-m2 offset-l3">
          <div class="card">
            <div class="card-image">
              <img id="containerHistoriaIqUrl"src="https://secure.static.tumblr.com/4f9af90fe071215d877833addfd216b5/qmkxtgk/fYvn1yxra/tumblr_static_sad_panda_painting-wallpaper-1920x1080.jpg">
              <span class="card-title">Card Title</span>
            </div>
            <div id="containerHistoriaIqSubTitle" class="card-content">
              <p >I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <p >This is a link</p>
            </div>
          </div>
        </div>
    </div>

   

  </div>
</div>
`;

module.exports = login;