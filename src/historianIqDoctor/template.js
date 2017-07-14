var yo = require('yo-yo');    

var login= yo`
 <div id = "containerTipo2" class="valign-wrapper" >
    <div id = "containerTipo1Interno" class="container z-depth-4">
      <div class="row">
        <div id="chart_div1"></div>
        <div id="chart_div2"></div>
        <div id="chart_div3"></div>
        <div id="chart_div4"></div>
        <div class="row">
              <div>
                <a id="btnUpdateHistorianIqDoctor" class="waves-effect waves-light btn-large col s8  m4 offset-s2 offset-m4 "  >Update</a>
              </div>
        </div>
      </div>       
  </div>
</div>
`;

module.exports = login;