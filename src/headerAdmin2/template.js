var yo = require('yo-yo');    

module.exports = function headerTitle(labelTitulo, labelPath){
 return yo`
      <nav> 
      <div class="nav-wrapper">
        <ul class="left">
          <li><a><i id = "btnBack" class="material-icons">trending_flat</i></a></li>
          <li><a>${labelPath}</a></li>
        </ul>
        <a  class="brand-logo center">${labelTitulo}</a>
        <ul class="right">
         <li>
            <a id="menuMobile" href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>
          </li>
        </ul>
      </div>
     
    </nav> 
    `;
}



