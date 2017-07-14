var yo = require('yo-yo');    

var login= yo`
  <div id = "containerTipo2">
    <div  class="row">
        <div id="colBusqueda" class=" col s12">
          <div id = "containerBusqueda" class="container ">
            <div id = "busqueda" class="row">
                 <div id = "usernameCol2" class="col s12  m4 offset-m4">
                   <div id = "usernameCol" class="input-field ">
                     <input value="Buscar Personas" id="buscarInput" type="text" class="validate z-depth-2">
                   </div>
                 </div> 
                 <div  class="col s6 m2 center-align">
                    <a id = "buscarBtnHome" class="btn-floating btn-large"><i class="material-icons">search</i></a>
                 </div> 
                  <div class="col s6 m2 center-align">
                    <a id = "perfilO2BtnHome" class="btn-floating btn-large"><i class="material-icons">assignment_ind</i></a>
                 </div>  
            </div>
          </div>
        </div>
        <div id="colFiltros" class=" col s12">
            <div id = "containerTipo1Interno" class="container z-depth-4"> 
              <div id = "filtros" class="row">
                  <div class="col s12">
                    <h5 class="titulo">Filtros</h5>
                  </div>
                  <div class="input-field col s6 m4">
                    <select id="itemPabellón" >
                      <option value="0" disabled selected>Pabellón</option>
                      <option value="1">Pabellón 1</option>
                      <option value="2">Pabellón 2</option>
                      <option value="3">Pabellón 3</option>
                    </select>
                   
                  </div>
                  <div  class="input-field col s6 m4">
                    <select id="itemTurno">
                      <option value="" disabled selected>Turno</option>
                      <option value="1">Turno 1 </option>
                      <option value="2">Turno 2 </option>
                      <option value="3">Turno 3 </option>
                    </select>
                   
                  </div>
                  <div  class="col s10 m3 offset-s1 offset-m1">
                    <a id= "filtrarBtnHome" class="btn-large  z-depth-4">Filtar</a>    
                  </div>  
              </div> 
            </div>
        </div>
        <div id="colResultados" class=" col s12">
            <div id = "containerTipo1Interno" class="container z-depth-4">
              <div id = "resultadosFormato" class="row">
                <div class="col s12">
                  <h5 class="titulo">Resultados</h5>
                </div>
                <div class="col s12 ">
                  <h6>Asignar:</h6>
                </div>
                <div  class="input-field col s12 m6 l4 offset-l4">
                  <select id="itemPerfil">
                    <option value="" disabled selected>Perfil</option>
                    <option value="1">Perfil 1</option>
                    <option value="2">Perfil 2</option>
                    <option value="3">Perfil 3</option>
                  </select>
                 
                </div>
                <div  class="input-field col s12 m6 l4">
                  <select id="itemCuestionario">
                    <option value="" disabled selected>Cuestionario</option>
                    <option value="1">Cuestionario 1</option>
                    <option value="2">Cuestionario 2</option>
                    <option value="3">Cuestionario 3</option>
                  </select>
                 
                </div>
                <div id= "tableCol" class="col s12">
                  <table class = "striped responsive-table"  id ="tableResultados">
                  <thead>
                    <tr id="row0">
                        <th>
                          <p>
                            <input type="checkbox" id="checkboxAll" />
                            <label for="checkboxAll"></label>
                          </p>
                        </th>
                        <th>Nombre<i id="sortImg" class="material-icons">swap_vert</i></th>
                        <th>Rut<i id="sortImg" class="material-icons">swap_vert</i></th>
                        <th>Turno<i id="sortImg" class="material-icons">swap_vert</i></th>
                        <th>Oxigenación<i id="sortImg" class="material-icons">swap_vert</i></th>
                        <th>Pabellón<i id="sortImg" class="material-icons">swap_vert</i></th>
                        <th>Room<i id="sortImg" class="material-icons">swap_vert</i></th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                    <td> 
                        <p>
                          <input type="checkbox" id="checkbox1" />
                          <label for="checkbox1"></label>
                        </p>
                    </td>
                      <td>Jose Manuel Berrios</td>
                      <td>16.105.158-6</td>
                      <td>Turno A</td>
                      <td>Perfil A</td>
                      <td>Pabellon C</td>
                      <td>233-2</td>
                    </tr>
                    <tr>
                      <td> 
                        <p>
                          <input type="checkbox" id="checkbox2" />
                          <label for="checkbox2"></label>
                        </p>
                     </td>
                      <td>Alan Barrios</td>
                      <td>14.125.158-6</td>
                      <td>Turno A</td>
                      <td>Perfil A</td>
                      <td>Pabellon B</td>
                      <td>231-4</td>
                    </tr>
                    <tr>
                      <td> 
                        <p>
                          <input type="checkbox" id="checkbox3" />
                          <label for="checkbox3"></label>
                        </p>
                     </td>
                      <td>Rene Rios</td>
                      <td>24.625.858-6</td>
                      <td>Turno B</td>
                      <td>Perfil B</td>
                      <td>Pabellon C</td>
                      <td>653-9</td>
                    </tr>
                  </tbody>
                </table> 
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


