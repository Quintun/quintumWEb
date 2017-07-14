var yo = require('yo-yo');    

module.exports = function headerTitle(label){
 return yo`
      <nav> 
      <div class="nav-wrapper">
        <ul class="left hide-on-med-and-up">
          <li>
            <a id="menuMobile" href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>
          </li>
        </ul>
        <ul class="left hide-on-small-only">
           <li>
            <a id="menuWeb" href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>
          </li>
          <li><a>HABITACIONES</a></li>
          <li><a>PAVELLONES</a></li>
        </ul>
        <a  class="brand-logo center">${label}</a>
        <ul class="right hide-on-small-only">
          <li><a class="dropdown-button"  data-activates="dropdown1">HISTORY<i class="material-icons right">arrow_drop_down</i></a></li>
          <li><a class="dropdown-button"  data-activates="dropdown2">MONITORING<i class="material-icons right">arrow_drop_down</i></a></li>
        </ul>
      </div>
      <ul id="dropdown1" class="dropdown-content">
        <li><a>Planta</a></li>
        <li><a>IQ</a></li>
      </ul> 
      <ul id="dropdown2" class="dropdown-content">
        <li><a>Plantas</a></li>
        <li><a>Layouts</a></li>
        <li><a>Rooms</a></li>
      </ul>

      <ul id="slide-out" class="side-nav">
        <li>
          <div class="userView">
            <div class="background">
              <img src="header.png">
            </div>
            <a href="#!"><img  id= "btnExit" src="btnExit.png"></a>
            <a><img class="circle" src="adminIcon.png"></a>
            <a><span class="white-text name">Admin</span></a> 
            <a><span class="white-text email">admin@gmail.com</span></a>
          </div>
        </li>
        <li id="itemMenuTitulo">
          <a id="itemMenuTituloLabel" href="#">MENU</a>
        </li>
        <li id="itemMenuListPlantas">
          <a>PLANTAS</a>
        </li>
        <li id="itemMenuListFaenas">
          <a>FAENAS</a>
        </li>
        <li id="itemMenuListPlantaPlants">
          <a>PLANTA PLANTS</a>
        </li>
        <li id="itemMenuListPabellonLayout">
          <a>PABELLON LAYOUTS</a>
        </li>
        <li id="itemMenuListConfigurar">
          <a>CONFIGURAR PLANTA</a>
        </li>
        <li id="itemMenuListSubSistema">
          <a>SUB-SISTEMA GENERACIÓN</a>
        </li>
        <li id="itemMenuListIq">
          <a>IQ</a>
        </li>
        <li id="itemMenuListQuiz">
          <a>QUIZ REQUEST</a>
        </li>
        <li id="itemMenuListCuestionario">
          <a>RESULTADO CUESTIONARIO</a>
        </li>
        <li id="itemMenuListRoom">
          <a>Piezas</a>
        </li>
      </ul>
    </nav> 
    `;
}



