var yo = require('yo-yo');    

var login= yo`
    <div id = "containerTipo2" >
      <div id = "containerTipo1Interno" class="container z-depth-4"">
         <div id="tableCuestionarios" class="row">
           <h5 id="verCuestionarioTitulo" class= "titulo" >Cuestionario 2 (12-12-12)</h5>
           <h5 id="verCuestionarioNota" class="right-align notaCuestionario">Nota:85</h5> 
            <ul id="dataCuestionario" class="collapsible" data-collapsible="expandable">
              <li>
                <div class="collapsible-header active pregCuestionario">1: ¿Contenido de Pregunta numero 1?</div>
                <div class="collapsible-body">
                  <span><h6 class="altCuestionario">Alternativas:</h6>
                        <h6 class="altCuestionario">a) Alternativa A</h6> 
                        <h6 class="altCuestionario">b) Alternativa B</h6> 
                        <h6 class="altCuestionario">c) Alternativa C</h6> 
                        <h6 class="altCuestionario">d) Alternativa D</h6>
                        <h4 class="respCuestionario">Respuesta: a.</h4>
                  </span>
                </div>
              </li>
              <li>
                <div class="collapsible-header pregCuestionario">2:  ¿Contenido de Pregunta numero 2?</div>
                <div class="collapsible-body">
                  <span><h6 class="altCuestionario">Alternativas:</h6>
                        <h6 class="altCuestionario">a) Alternativa A</h6> 
                        <h6 class="altCuestionario">b) Alternativa B</h6> 
                        <h6 class="altCuestionario">c) Alternativa C</h6> 
                        <h6 class="altCuestionario">d) Alternativa D</h6>
                        <h4 class="respCuestionario">Respuesta: b.</h4>
                  </span>
                </div>
              </li>
              <li>
                <div class="collapsible-header pregCuestionario">3:  ¿Contenido de Pregunta numero 3?</div>
                <div class="collapsible-body">
                  <span><h6 class="altCuestionario">Alternativas:</h6>
                        <h6 class="altCuestionario">a) Alternativa A</h6> 
                        <h6 class="altCuestionario">b) Alternativa B</h6> 
                        <h6 class="altCuestionario">c) Alternativa C</h6> 
                        <h6 class="altCuestionario">d) Alternativa D</h6>
                        <h4 class="respCuestionario">Respuesta: c.</h4>
                  </span>
                </div>
              </li>
              <li>
                <div class="collapsible-header pregCuestionario">4:  ¿Contenido de Pregunta numero 4?</div>
                <div class="collapsible-body">
                  <span><h6 class="altCuestionario">Alternativas:</h6>
                        <h6 class="altCuestionario">a) Alternativa A</h6> 
                        <h6 class="altCuestionario">b) Alternativa B</h6> 
                        <h6 class="altCuestionario">c) Alternativa C</h6> 
                        <h6 class="altCuestionario">d) Alternativa D</h6>
                        <h4 class="respCuestionario">Respuesta: d.</h4>
                  </span>
                </div>
              </li>
              <li>
                <div class="collapsible-header pregCuestionario">5:  ¿Contenido de Pregunta numero 5?</div>
                <div class="collapsible-body">
                  <span><h6 class="altCuestionario">Alternativas:</h6>
                        <h6 class="altCuestionario">a) Alternativa A</h6> 
                        <h6 class="altCuestionario">b) Alternativa B</h6> 
                        <h6 class="altCuestionario">c) Alternativa C</h6> 
                        <h6 class="altCuestionario">d) Alternativa D</h6>
                        <h4 class="respCuestionario">Respuesta: a.</h4>
                  </span>
                </div>
              </li>
              <li>
                <div class="collapsible-header pregCuestionario">6:  ¿Contenido de Pregunta numero 6?</div>
                <div class="collapsible-body">
                  <span><h6 class="altCuestionario">Alternativas:</h6>
                        <h6 class="altCuestionario">a) Alternativa A</h6> 
                        <h6 class="altCuestionario">b) Alternativa B</h6> 
                        <h6 class="altCuestionario">c) Alternativa C</h6> 
                        <h6 class="altCuestionario">d) Alternativa D</h6>
                        <h4 class="respCuestionario">Respuesta: a.</h4>
                  </span>
                </div>
              </li>
              <li>
                <div class="collapsible-header pregCuestionario">7:  ¿Contenido de Pregunta numero 7?</div>
                <div class="collapsible-body">
                  <span><h6 class="altCuestionario">Alternativas:</h6>
                        <h6 class="altCuestionario">a) Alternativa A</h6> 
                        <h6 class="altCuestionario">b) Alternativa B</h6> 
                        <h6 class="altCuestionario">c) Alternativa C</h6> 
                        <h6 class="altCuestionario">d) Alternativa D</h6>
                        <h4 class="respCuestionario">Respuesta: a.</h4>
                  </span>
                </div>
              </li>
              <li>
                <div class="collapsible-header pregCuestionario">8:  ¿Contenido de Pregunta numero 8?</div>
                <div class="collapsible-body">
                  <span><h6 class="altCuestionario">Alternativas:</h6>
                        <h6 class="altCuestionario">a) Alternativa A</h6> 
                        <h6 class="altCuestionario">b) Alternativa B</h6> 
                        <h6 class="altCuestionario">c) Alternativa C</h6> 
                        <h6 class="altCuestionario">d) Alternativa D</h6>
                        <h4 class="respCuestionario">Respuesta: a.</h4>
                  </span>
                </div>
              </li>
              <li>
                <div class="collapsible-header pregCuestionario">9:  ¿Contenido de Pregunta numero 9?</div>
                <div class="collapsible-body">
                  <span><h6 class="altCuestionario">Alternativas:</h6>
                        <h6 class="altCuestionario">a) Alternativa A</h6> 
                        <h6 class="altCuestionario">b) Alternativa B</h6> 
                        <h6 class="altCuestionario">c) Alternativa C</h6> 
                        <h6 class="altCuestionario">d) Alternativa D</h6>
                        <h4 class="respCuestionario">Respuesta: a.</h4>
                  </span>
                </div>
              </li>
              <li>
                <div class="collapsible-header pregCuestionario">10:  ¿Contenido de Pregunta numero 10?</div>
                <div class="collapsible-body">
                  <span><h6 class="altCuestionario">Alternativas:</h6>
                        <h6 class="altCuestionario">a) Alternativa A</h6> 
                        <h6 class="altCuestionario">b) Alternativa B</h6> 
                        <h6 class="altCuestionario">c) Alternativa C</h6> 
                        <h6 class="altCuestionario">d) Alternativa D</h6>
                        <h4 class="respCuestionario">Respuesta: a.</h4>
                  </span>
                </div>
              </li>
            </ul>
         </div>
         
      </div>
      <script>
      $(document).ready(function(){
          $('.collapsible').collapsible();
        });
      </script>

    </div>



`;

module.exports = login;


