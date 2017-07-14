var yo = require('yo-yo');    

var login= yo`
  <div id = "containerTipo1" >
    <div  class="row"> 
        <div id="colResultados" class=" col s12">
            <div id = "containerTipo1Interno"" class="container z-depth-4">
              <div id = "resultadosFormato" class="row">
                  <div class="col s9">
                    <h5 class="titulo">Resultados</h5>
                  </div>
                  <div  class="col s3  right-align">
                    <a id = "fichaMedicoBtnCrearNota" class="btn-floating btn-large" ><i class="material-icons">add</i></a>
                  </div>
                <div id= "tableCol" class="col s12">
                  <table class = "striped responsive-table"  id ="tableResultados">
                  <thead id ="tableResultadosHeader">
                    <tr>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Doctor</th>
                        <th>Fecha</th>
                        <th>Nota</th>
                        <th>Adjuntos</th>
                    </tr>
                  </thead>
                  <tbody id ="tableResultadoBody">
                    <tr>
                      <td>Visita1</td>
                      <td>Normal</td>
                      <td>Doctor</td>
                      <td>14-12-12</td>
                      <td>El paciente ...</td>
                      <td><i id="fileDownloadIcon1" class="material-icons">play_for_work</i></td>
                    </tr>
                     <tr>
                      <td>Visita2</td>
                      <td>Normal</td>
                      <td>Doctor</td>
                      <td>13-12-12</td>
                      <td>El paciente 2 ...</td>
                      <td><i id="fileDownloadIcon2" class="material-icons">play_for_work</i></td>
                    </tr>
                     <tr>
                      <td>Visita3</td>
                      <td>Normal</td>
                      <td>Doctor</td>
                      <td>21-12-12</td>
                      <td>El paciente 3 ...</td>
                      <td><i id="fileDownloadIcon3" class="material-icons">play_for_work</i></td>
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


