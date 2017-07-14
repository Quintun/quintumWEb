var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');
var template = require('./template');
var templateHeader = require('../headerDoctor/template');
var request = require('superagent');

var turno, pabellon, perfil, cuestionario, resultado;

var flagOrdenNombre = false, flagOrdenRut= false, flagOrdenTurno= false, flagOrdenOxigenacion= false, flagOrdenPabellon = false, flagOrdenRoom= false;

$.fn.center = function () {
	   this.css("position","absolute");
	   this.css("top", ( $(window).height() - this.height() ) / 2  + "px");
	   this.css("left", ( $(window).width() - this.width() ) / 2 + "px");
	   return this;
	}

page('/homeDoctor',loadPerfil,loadTurno,loadPabellon,loadCuestionario,function(ctx,next){
	var header = document.getElementById('header-container');
	var main = document.getElementById('main-container');
	var el = templateHeader('Home');
	empty(header).appendChild(el);
	empty(main).appendChild(template);
	console.log("home page");

	$('#buscarBtnHome').click(function(){
	    var valor = $('#buscarInput').val();   
	    console.log("buscando: "+ valor);
	    search();	
	});

	$('#btnBack').click(function(){  
	    console.log("btnBack ");
	    page('/');  
	});

    function search () {
	    request
	    .get('/api/home/resultado')
	    .end(function (err, res) {
	      var aux="paro";
	      if (err) return console.log(err);
	      var json = JSON.stringify(res.body);
	      resultado = jQuery.parseJSON(json);
	      console.log('search:'+aux);	
	      console.log('data: ');
	      $("#tableResultados tbody").empty()
	      for (var i = 0 ; i <= resultado.length-1 ; i++) {
			console.log('nombre: '+resultado[i].nombre + resultado[i].apellido);
			console.log('rut: '+resultado[i].rut);
			console.log('turno: '+resultado[i].turno);
			console.log('oxigenacion: '+resultado[i].oxigenacion);
			console.log('pabellon: '+resultado[i].pabellon);
			console.log('room: '+resultado[i].room);

		    var newRowContent = "<th><p><input type=\"checkbox\" id=\"checkbox"+(i+1)+"\" /><label for=\"checkbox"+(i+1)+"\"></label></p></th>";
		    newRowContent+= "<td>"+resultado[i].nombre +" "+resultado[i].apellido +"</td>" ;
		    newRowContent+= "<td>"+resultado[i].rut+"</td>" ;
		    newRowContent+= "<td>"+resultado[i].turno+"</td>"; 
		    newRowContent+= "<td>"+resultado[i].oxigenacion+"</td>"; 
		    newRowContent+= "<td>"+resultado[i].pabellon+"</td>";
		    newRowContent+= "<td>"+resultado[i].room+"</td>";  

            newRowContent= "<tr id=\"row"+(i+1)+"\""+">"+ newRowContent +"</tr>"; 
		   
		    $("#tableResultados tbody").append(newRowContent);	
		  }
	      show();
	    })

	}

	$('#checkboxAll').click(function(event) {
	  if(this.checked) {
	      // Iterate each checkbox
	      $(':checkbox').each(function() {
	          this.checked = true;
	      });
	  }
	  else {
	    $(':checkbox').each(function() {
	          this.checked = false;
	      });
	  }
	});


	$('#perfilO2BtnHome').click(function(){
	    console.log("btn perfilO2");
	   //setTimeout(function () {
	    page('/perfilO2Doctor');  
	  	//}, 3000);
	});

	$('#filtrarBtnHome').click(function(){
		var filtro1 = $("#itemPabellón option:selected" ).text();
		var filtro2 = $("#itemTurno option:selected" ).text();
	    console.log("btn Filtrar:"+ filtro1 +" & "+filtro2 );
	    //setTimeout(function () {
	    page('/fichaMedicaDoctor');  
	  	//}, 3000);    
	});

	$('input:text').focus(
	    function(){
	        $(this).val('');
	});

	$(document).ready(function (){
		$('input:text')
		$('#filtrarBtnHome')
		$('#perfilO2BtnHome')
		$('#buscarBtnHome')
		hide ();
		loadData();
        $('select').material_select();

       $('#tableResultados').on('click', 'td', function() { // td not tr
        	var row = $(this).parents("tr").attr('id');
        	row = row.substring(3);
		    var id = resultado[row-1].id;
		    var nombre = resultado[row-1].nombre;
		    console.log("row: "+ row);
		    console.log('id: '+ id);
		    console.log('nombre: '+nombre);
		    
		    //localStorage.setItem("BuscarPersonaId",id);
		  	//  page('/fichaMedicaDoctor');

		});
		
       $('#tableResultados').on('click', 'th', function() {
        var row = $(this).text();
        console.log("Elemento: "+ row);
        console.log("length:"+row.length)
        if ( row == null ){

        }else {
        	if (row == "Nombreswap_vert"){
	        	if(flagOrdenNombre) {
	        	 	flagOrdenNombre = false
	        	 	resultado = resultado.sort(sortAscendApellido);
	        	}else {
	        	 	flagOrdenNombre = true
	        	 	resultado = resultado.sort(sortDescendApellido);
	        	}
	        } else  if (row == "Rutswap_vert"){
	        	if(flagOrdenRut) {
	        	 	flagOrdenRut = false
	        	 	resultado = resultado.sort(sortAscendRut);
	        	}else {
	        	 	flagOrdenRut = true
	        	 	resultado = resultado.sort(sortDescendRut);
	        	}
	        }else  if (row == "Turnoswap_vert"){
	        	if(flagOrdenTurno) {
	        	 	flagOrdenTurno = false
	        	 	resultado = resultado.sort(sortAscendTurno);
	        	}else {
	        	 	flagOrdenTurno = true
	        	 	resultado = resultado.sort(sortDescendTurno);
	        	}
	        }else  if (row == "Oxigenaciónswap_vert"){
	        	if(flagOrdenOxigenacion) {
	        	 	flagOrdenOxigenacion = false
	        	 	resultado = resultado.sort(sortAscendOxigenacion);
	        	}else {
	        	 	flagOrdenOxigenacion = true
	        	 	resultado = resultado.sort(sortDescendOxigenacion);
	        	}
	        }else  if (row == "Pabellónswap_vert"){
	        	if(flagOrdenPabellon) {
	        	 	flagOrdenPabellon = false
	        	 	resultado = resultado.sort(sortAscendPabellon);
	        	}else {
	        	 	flagOrdenPabellon = true
	        	 	resultado = resultado.sort(sortDescendPabellon);
	        	}
	        }else  if (row == "Roomswap_vert"){
	        	if(flagOrdenRoom) {
	        	 	flagOrdenRoom = false
	        	 	resultado = resultado.sort(sortAscendRoom);
	        	}else {
	        	 	flagOrdenRoom = true
	        	 	resultado = resultado.sort(sortDescendRoom);
	        	}
			  
	        }
	        $("#tableResultados tbody").empty();
	        for (var i = 0 ; i <= resultado.length-1 ; i++) {
			    var newRowContent = "<th><p><input type=\"checkbox\" id=\"checkbox"+(i+1)+"\" /><label for=\"checkbox"+(i+1)+"\"></label></p></th>";
			    newRowContent+= "<td>"+resultado[i].nombre +" "+resultado[i].apellido +"</td>" ;
			    newRowContent+= "<td>"+resultado[i].rut+"</td>" ;
			    newRowContent+= "<td>"+resultado[i].turno+"</td>"; 
			    newRowContent+= "<td>"+resultado[i].oxigenacion+"</td>"; 
			    newRowContent+= "<td>"+resultado[i].pabellon+"</td>";
			    newRowContent+= "<td>"+resultado[i].room+"</td>";  

	            newRowContent= "<tr id=\"row"+(i+1)+"\""+">"+ newRowContent +"</tr>"; 
			   
			    $("#tableResultados tbody").append(newRowContent);	
			  }
        }
        

		});

		// $('#colBusqueda').center();
	});

	function hide (){
		$("#colFiltros").hide();
		$("#colResultados").hide();
	}
	
	function show(){
		$("#colFiltros").show();
		$("#colResultados").show();
	}

	function loadData(){
		$("#itemCuestionario").empty().html(' ');
		$("#itemCuestionario").append($("<option></option>").attr("value",0).text("Cuestionario"));
		$("#itemCuestionario option[value = 0]").attr("selected", false).text("Cuestionario");  // change text
	
		for (var i = 0 ; i <= cuestionario.length-1 ; i++) {
			console.log("cuestionario:"+ cuestionario[i].cuestionario );
			$("#itemCuestionario").append($("<option></option>").attr("value",i+1).text(cuestionario[i].cuestionario))
		}
     	
     	$("#itemPabellón").empty().html(' ');
		$("#itemPabellón").append($("<option></option>").attr("value",0).text("Pabellón"));
		$("#itemPabellón option[value = 0]").attr("selected", false).text("Pabellón");  // change text
	
		for (var i = 0 ; i <= pabellon.length-1 ; i++) {
			console.log("turno:"+ pabellon[i].pabellon );
			$("#itemPabellón").append($("<option></option>").attr("value",i+1).text(pabellon[i].pabellon))
		}

		$("#itemTurno").empty().html(' ');
		$("#itemTurno").append($("<option></option>").attr("value",0).text("Turno"));
		$("#itemTurno option[value = 0]").attr("selected", false).text("Turno");  // change text
	
		for (var i = 0 ; i <= turno.length-1 ; i++) {
			console.log("turno:"+ turno[i].turno );
			$("#itemTurno").append($("<option></option>").attr("value",i+1).text(turno[i].turno))
		}

		$("#itemPerfil").empty().html(' ');
		$("#itemPerfil").append($("<option></option>").attr("value",0).text("Perfil"));
		$("#itemPerfil option[value = 0]").attr("selected", false).text("Perfil");  // change text
	
		for (var i = 0 ; i <= perfil.length-1 ; i++) {
			console.log("perfil:"+ perfil[i].perfil );
			$("#itemPerfil").append($("<option></option>").attr("value",i+1).text(perfil[i].perfil))
		}	
	}

	function sortAscendApellido(a, b){
	  if (a.apellido < b.apellido) return -1;
	  if (a.apellido > b.apellido) return 1;
	  return 0;
	}
	function sortDescendApellido(a, b){
	  if (a.apellido > b.apellido) return -1;
	  if (a.apellido < b.apellido) return 1;
	  return 0;
	}
	function sortAscendTurno(a, b){
	  if (a.turno < b.turno) return -1;
	  if (a.turno > b.turno) return 1;
	  return 0;
	}
	function sortDescendTurno(a, b){
	  if (a.turno > b.turno) return -1;
	  if (a.turno < b.turno) return 1;
	  return 0;
	}
	function sortAscendRut(a, b){
	  if (a.rut < b.rut) return -1;
	  if (a.rut > b.rut) return 1;
	  return 0;
	}
	function sortDescendRut(a, b){
	  if (a.rut > b.rut) return -1;
	  if (a.rut < b.rut) return 1;
	  return 0;
	}
	function sortAscendTurno(a, b){
	  if (a.turno < b.turno) return -1;
	  if (a.turno > b.turno) return 1;
	  return 0;
	}
	function sortDescendTurno(a, b){
	  if (a.turno > b.turno) return -1;
	  if (a.turno < b.turno) return 1;
	  return 0;
	}
	function sortAscendOxigenacion(a, b){
	  if (a.oxigenacion < b.oxigenacion) return -1;
	  if (a.oxigenacion > b.oxigenacion) return 1;
	  return 0;
	}
	function sortDescendOxigenacion(a, b){
	  if (a.oxigenacion > b.oxigenacion) return -1;
	  if (a.oxigenacion < b.oxigenacion) return 1;
	  return 0;
	}
	function sortAscendPabellon(a, b){
	  if (a.pabellon < b.pabellon) return -1;
	  if (a.pabellon > b.pabellon) return 1;
	  return 0;
	}
	function sortDescendPabellon(a, b){
	  if (a.pabellon > b.pabellon) return -1;
	  if (a.pabellon < b.pabellon) return 1;
	  return 0;
	}
	function sortAscendRoom(a, b){
	  if (a.room < b.room) return -1;
	  if (a.room > b.room) return 1;
	  return 0;
	}
	function sortDescendRoom(a, b){
	  if (a.room > b.room) return -1;
	  if (a.room < b.room) return 1;
	  return 0;
	}

})

function loadTurno (ctx, next) {
    request
    .get('/api/home/turno')
    .end(function (err, res) {
      if (err) return console.log(err);
      var json = JSON.stringify(res.body);
      turno = jQuery.parseJSON(json);
      next();
    })
}	

function loadPabellon (ctx, next) {
    request
    .get('/api/home/pabellon')
    .end(function (err, res) {
      if (err) return console.log(err);
      var json = JSON.stringify(res.body);
      pabellon = jQuery.parseJSON(json);
      next();
    })
}	
function loadCuestionario (ctx, next) {
    request
    .get('/api/home/cuestionario')
    .end(function (err, res) {
      if (err) return console.log(err);
      var json = JSON.stringify(res.body);
      cuestionario = jQuery.parseJSON(json);
      next();
    })
}

function loadPerfil (ctx, next) {
    request
    .get('/api/home/perfil')
    .end(function (err, res) {
      if (err) return console.log(err);
      var json = JSON.stringify(res.body);
      perfil = jQuery.parseJSON(json);
      next();
    })
}

	





