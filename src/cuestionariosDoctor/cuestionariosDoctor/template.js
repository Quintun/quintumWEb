var yo = require('yo-yo');    

var login= yo`
 <div id = "containerTipo2" class="">
    <div  class="row">   
        <div id="colResultados" class=" col s12">
            <div id = "containerTipo1Interno" class="container z-depth-4">
              <div id = "resultadosFormato" class="row">
             <div class="col s12">
                   <h5 class="titulo"> Cuestionarios</h5>
                </div>
            
                <div id= "tableCol" class="col s12 ">
                  <table class = "striped responsive-table"  id ="tableResultados">
                  <thead>
                    <tr>
                        <th>Doctor</th>
                        <th>Fecha</th>
                        <th>Nombre</th>
                        <th>Nota</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Jose Manuel<br>Berrios</td>
                      <td>12-12-12</td>
                      <td>fasdfdsfaklfjds<br>fjadsfds</td>
                      <td>80</td>
                    </tr>
                     <tr>
                      <td>Alissa<br>L</td>
                      <td>12-12-12</td>
                      <td>fasdfdsfaklfjds<br>fjadsfds</td>
                      <td>80</td>
                    </tr>
                    <tr>
                      <td>Javiera<br>Quiroz</td>
                      <td>12-12-12</td>
                      <td>fasdfdsfaklfjds<br>fjadsfds</td>
                      <td>80</td>
                    </tr>
                    <tr>
                      <td>Monserrat<br>Barrios</td>
                      <td>12-12-12</td>
                      <td>fasdfdsfaklfjds<br>fjadsfds</td>
                      <td>80</td>
                    </tr>
                    <tr>
                      <td>Cristiano<br>Guajardo</td>
                      <td>12-12-12</td>
                      <td>fasdfdsfaklfjds<br>fjadsfds</td>
                      <td>80</td>
                    </tr>
                    <tr>
                      <td>Vicente<br>Roncero</td>
                      <td>12-12-12</td>
                      <td>fasdfdsfaklfjds<br>fjadsfds</td>
                      <td>80</td>
                    </tr>
                    <tr>
                      <td>Javiera<br>Quiroz</td>
                      <td>12-12-12</td>
                      <td>fasdfdsfaklfjds<br>fjadsfds</td>
                      <td>80</td>
                    </tr>
                  </tbody>
                </tablme> 
                </div>
                 <div class="col s12">
                  <ul class="pagination">
                    <li class="waves-effect"><a href="#!">1-10 of 100</a></li>
                    <li class="disabled"><a href="#!"><i id = "chvLeft" class="material-icons">chevron_left</i></a></li>
                    <li class="waves-effect"><a href="#!"><i id = "chvRight" class="material-icons">chevron_right</i></a></li>
                  </ul>
                </div> 
            </div> 
        </div> 

    </div>
  </div>

`;

module.exports = login;


