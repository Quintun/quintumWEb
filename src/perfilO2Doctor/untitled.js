  <div id = "filtros" class="row"> 
     <div id = "perfilO2FechaBtnDiv" class="input-field col s12 m6">

          <i id="iconoPerfilDoctor" class="material-icons prefix">today</i>
          <input type="date" class="datepicker validate z-depth-2" id="perfilO2FechaPicker" >
          <label class="left-align" for="icon_prefix">Fecha</label>
        
     </div>  
     <div id = "perfilO2RelojBtnDiv" class="input-field col s12  m6">
      
          <i id="iconoPerfilDoctor" class="material-icons prefix">schedule</i>
          <input  id="timepicker" data-default="14:20:00" class="timepicker validate z-depth-2" type="time">
          <label class="left-align" for="timepicker"> Hora</label>

     </div>  
  </div>

  $('#perfilO2FechaPicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
  });

  $('#timepicker').pickatime({
      autoclose: false,
      twelvehour: false,
      default: '14:20:00'
  });  