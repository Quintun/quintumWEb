var yo = require('yo-yo');    

var login= yo`
  <div id = "containerTipo2" >
    <div  class="row">
        <div id="colFiltros" class=" col s12">
          <div id = "containerTipo1Interno" class="container z-depth-4 ">
              <div id = "resultadosFormato" class="row">
                <div  class="row">
                   <div class="section col s12 m6 l3">
                      <p class="pFicha" id="fichaNombreTitle">Nombre</p>
                      <h5 class="tituloFicha" id="fichaNombre">Julio Cesar Morán</h5>
                   </div>
                    <div class="section col s12 m6 l3">
                      <p class="pFicha" id="fichaRutTitle">Rut</p>
                      <h5 class="tituloFicha" id="fichaRut">16105158-6</h5>
                   </div>
                    <div class="section col s12 m6 l3">
                      <p class="pFicha" id="fichaNacionalidadTitle">Nacionalidad</p>
                      <h5 class="tituloFicha" id="fichaNacionalidad">Chileno</h5>
                   </div>
                    <div class="section col s12 m6 l3">
                      <p class="pFicha" id="fichaSexoTitle">Sexo</p>
                      <h5 class="tituloFicha" id="fichaSexo">Masculino</h5>
                   </div>
                </div>
                <div  class="row">    
                   <div class="section col s12 m6 l3">
                      <p class="pFicha" id="fichaNacimientoTitle">Fecha de Nacimiento</p>
                      <h5 class="tituloFicha" id="fichaNacimiento">12-12-2012</h5>
                   </div>
                   <div class="section col s12 m6 l3">
                      <p class="pFicha" id="fichaCelularTitle">Celular</p>
                      <h5 class="tituloFicha" id="fichaCelular">+56 9 76340532</h5>
                   </div>
                   <div class="section col s12 m6 l6 ">
                       <p class="pFicha" id="fichaEmailTitle">e-mail</p>
                      <h5 class="tituloFicha" id="fichaEmail">ruggery@gmail.com</h5>
                   </div>
                </div> 
                <div  class="row">   
                   <div class="section col s12 m6 l3 ">
                      <p class="pFicha" id="fichaTurno">Turno</p>
                      <h5 class="tituloFicha" id="fichaTurnoTitle">Turno 1</h5>
                   </div>
                   <div class="section col s12 m6 l3">
                      <p class="pFicha" id="fichaPabellon">Pabellón </p>
                      <h5 class="tituloFicha" id="fichaPabellonTitle">Pabellón B</h5>
                   </div>
                   <div class="section col s12 m6 l6">
                      <p class="pFicha" id="fichaRoom">Room </p>
                      <h5 class="tituloFicha" id="fichaRoomTitle">Room 302</h5>
                   </div>
                </div> 
                <div id = "filtros" class="row"> 
                  <div id="itemCuestionario" class="input-field col s12 m6 l4">
                    <select>
                      <option value="" disabled selected>Cuestionario</option>
                      <option value="1">Cuestionario 1</option>
                      <option value="2">Cuestionario 2</option>
                      <option value="3">Cuestionario 3</option>
                    </select>
                   
                  </div>
                  <div id="itemTurno" class="input-field col s12 m6 l4">
                    <select>
                      <option value="" disabled selected>Perfil</option>
                      <option value="1">Perfil 1</option>
                      <option value="2">Perfil 2</option>
                      <option value="3">Perfil 3</option>
                    </select>            
                  </div>    
                  <div  class="input-field col s12 m6 l1 offset-l1 center-align">
                      <a id = "fichaMedicaBtnCuestionario" class="btn-floating btn-large"><i class="material-icons">list</i></a>
                  </div>
                  <div  class="input-field col s12  m6 l1  center-align">
                      <a  id = "fichaMedicaBtnHistorianIq" class="btn-floating btn-large"><i class="material-icons">equalizer</i></a>
                  </div>
                </div>
             </div>
          </div>
        </div>
      
        <div id="colBusqueda" class=" col s12">
          <div id = "containerBusqueda" class="container ">
            <div id = "busqueda" class="row">
                 <div id = "buscarNotaCol" class="input-field col s12 m6 l4">
                   <input value="Buscar Nota" id="fichaMedicaBuscarNota" type="text" class="validate z-depth-2">
                 </div> 
                 <div id = "buscarClaveCol" class="input-field col s12 m6 l4 ">
                   <input value="Buscar Clave" id="fichaMedicaBuscarClave" type="text" class="validate z-depth-2">
                 </div> 
                 <div class="input-field col s12 m6 l1 offset-l1 center-align">
                    <a id = "fichaMedicoBuscarBtnNota" class="btn-floating btn-large"><i class="material-icons">search</i></a>
                 </div> 
                 <div  class="input-field col s12 m6 l1 center-align">
                    <a id = "fichaMedicoBtnCrearNota" class="btn-floating btn-large" ><i class="material-icons">add</i></a>
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
            
                <div id= "tableCol" class="col s12">
                  <table class = "striped responsive-table"  id ="tableResultados">
                  <thead>
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


