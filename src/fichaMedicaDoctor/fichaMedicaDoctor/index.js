var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');
var template = require('./template');
var templateHeader = require('../../headerDoctor/template');
var request = require('superagent');

var json, jsonObj, resultado;
var  flagOrdenNombre = false, flagOrdenTipo = false, flagOrdenDoctor = false, flagOrdenFecha = false;
		        

page('/fichaMedicaDoctor',load,function(ctx,next){
	var main = document.getElementById('main-container');
	var header = document.getElementById('header-container');
	var el = templateHeader('Ficha Médica');
	empty(header).appendChild(el);
	empty(main).appendChild(template);
	console.log("ficha Medica page");

	$('#btnBack').click(function(){  
	    console.log("btnBack ");
	    page('/homeDoctor');  
	}); 

	$('#fichaMedicaBtnCuestionario').click(function(){
	    console.log("btn cuestionarios");
	    page('/cuestionariosDoctor');
	});

	$('#fichaMedicaBtnHistorianIq').click(function(){
	    console.log("btn historianIq");
	    page('/historianIqDoctor');  

	});

	$('#fichaMedicoBtnCrearNota').click(function(){
	    console.log("btn crearNota");
	    page('/crearNotaDoctor'); 
	});

	$('#fichaMedicoBuscarBtnNota').click(function(){
		var buscarNota = $('#fichaMedicaBuscarNota').val();  
		var buscarClave = $('#fichaMedicaBuscarClave').val();  
	    console.log("btn Buscar Nota: "+ buscarNota);
	    console.log("btn Buscar Clave: "+ buscarClave);
	    search()
	});

	$('input:text').focus(
	    function(){
	        $(this).val('');
	});

	function search () {
	    request
	    .get('/api/fichaMedica/Notas')
	    .end(function (err, res) {
	      if (err) return console.log(err);
	      var json = JSON.stringify(res.body);
	      resultado = jQuery.parseJSON(json);	
	      console.log('data: ');
	      $("#tableResultados tbody").empty()
	      for (var i = 0 ; i <= resultado.length-1 ; i++) {
			console.log('nombre: '+resultado[i].nombre);
			console.log('tipo: '+resultado[i].tipo);
			console.log('doctor: '+resultado[i].doctor);
			console.log('fecha: '+resultado[i].fecha);
			console.log('nota: '+(resultado[i].nota).substring(0,15));
			console.log('url: '+resultado[i].url);
					
		  // var newRowContent = "<th><p><input type=\"checkbox\" id=\"checkbox"+(i+1)+"\" /><label for=\"checkbox"+(i+1)+"\"></label></p></th>";
		    
		    var newRowContent 	= "<td>"+resultado[i].nombre+"</td>" ;
		    newRowContent+= "<td>"+resultado[i].tipo+"</td>" ;
		    newRowContent+= "<td>"+resultado[i].doctor+"</td>"; 
		    newRowContent+= "<td>"+resultado[i].fecha+"</td>"; 
		    newRowContent+= "<td>"+(resultado[i].nota).substring(0,15)+" ..."+"</td>"; 
		    newRowContent+= "<td>"+"<i "+"id=\"fileDownloadIcon"+(i+1)+"\""+"class=\"material-icons\">play_for_work</i>"+"</td>"; 
            newRowContent= "<tr id=\"row"+(i+1)+"\""+">"+ newRowContent +"</tr>"; 
		   
		    $("#tableResultados tbody").append(newRowContent);	
		    

		  }

	})

	function sortAscendNombre(a, b){
	  if (a.nombre < b.nombre) return -1;
	  if (a.nombre > b.nombre) return 1;
	  return 0;
	}
	function sortDescendNombre(a, b){
	  if (a.nombre > b.nombre) return -1;
	  if (a.nombre < b.nombre) return 1;
	  return 0;
	}
	function sortAscendTipo(a, b){
	  if (a.tipo < b.tipo) return -1;
	  if (a.tipo > b.tipo) return 1;
	  return 0;
	}
	function sortDescendTipo(a, b){
	  if (a.tipo > b.tipo) return -1;
	  if (a.tipo < b.tipo) return 1;
	  return 0;
	}
	function sortAscendDoctor(a, b){
	  if (a.doctor < b.doctor) return -1;
	  if (a.doctor > b.doctor) return 1;
	  return 0;
	}
	function sortDescendDoctor(a, b){
	  if (a.doctor > b.doctor) return -1;
	  if (a.doctor < b.doctor) return 1;
	  return 0;
	}
	function sortAscendFecha(a, b){
	  if (a.fecha < b.fecha) return -1;
	  if (a.fecha > b.fecha) return 1;
	  return 0;
	}
	function sortDescendFecha(a, b){
	  if (a.fecha > b.fecha) return -1;
	  if (a.fecha < b.fecha) return 1;
	  return 0;
	}

	}

	$(document).ready(function(){
	    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
		$("#fichaNombre").text(jsonObj.name);
		$("#fichaRut").text(jsonObj.rut);
		$("#fichaNacionalidad").text(jsonObj.nationality);
		$("#fichaSexo").text(jsonObj.sexo);
		$("#fichaNacimiento").text(jsonObj.nacimiento);
		$("#fichaCelular").text(jsonObj.celular);
		$("#fichaEmail").text(jsonObj.email);
		$("#fichaTurnoTitle").text(jsonObj.turno);
		$("#fichaPabellonTitle").text(jsonObj.pabellon);
		$("#fichaRoomTitle").text(jsonObj.room);

		$('#tableResultados').on('click', 'th', function() {
	        var row = $(this).text();
	        console.log("Elemento: "+ row);
	        if ( row == null ){

	        }else {
	        	if (row == "Nombre"){
		        	if(flagOrdenNombre) {
		        	 	flagOrdenNombre = false
		        	 	resultado = resultado.sort(sortAscendNombre);
		        	}else {
		        	 	flagOrdenNombre = true
		        	 	resultado = resultado.sort(sortDescendNombre);
		        	}
		        } else  if (row == "Tipo"){
		        	if(flagOrdenTipo) {
		        	 	flagOrdenTipo = false
		        	 	resultado = resultado.sort(sortAscendTipo);
		        	}else {
		        	 	flagOrdenTipo = true
		        	 	resultado = resultado.sort(sortDescendTipo);
		        	}
		        }else  if (row == "Doctor"){
		        	if(flagOrdenDoctor) {
		        	 	flagOrdenDoctor = false
		        	 	resultado = resultado.sort(sortAscendDoctor);
		        	}else {
		        	 	flagOrdenDoctor = true
		        	 	resultado = resultado.sort(sortDescendDoctor);
		        	}
		        }else  if (row == "Fecha"){
		        	if(flagOrdenFecha) {
		        	 	flagOrdenFecha = false
		        	 	resultado = resultado.sort(sortAscendFecha);
		        	}else {
		        	 	flagOrdenFecha = true
		        	 	resultado = resultado.sort(sortDescendFecha);
		        	}
		        }
		        $("#tableResultados tbody").empty();
		        for (var i = 0 ; i <= resultado.length-1 ; i++) {
				    var newRowContent 	= "<td>"+resultado[i].nombre+"</td>" ;
				    newRowContent+= "<td>"+resultado[i].tipo+"</td>" ;
				    newRowContent+= "<td>"+resultado[i].doctor+"</td>"; 
				    newRowContent+= "<td>"+resultado[i].fecha+"</td>"; 
				    newRowContent+= "<td>"+(resultado[i].nota).substring(0,15)+" ..."+"</td>"; 
				    newRowContent+= "<td>"+"<i "+"id=\"fileDownloadIcon"+(i+1)+"\""+"class=\"material-icons\">play_for_work</i>"+"</td>"; 
		            newRowContent= "<tr id=\"row"+(i+1)+"\""+">"+ newRowContent +"</tr>"; 
				   
				    $("#tableResultados tbody").append(newRowContent);	
				}
	        }
	        

		});

	});

})

function load(ctx, next) {
    request
    .get('/api/fichaMedicaData')
    .end(function (err, res) {
      if (err) return console.log(err);
      //console.log("datos server2:"+ JSON.stringify(res.body));
      json = JSON.stringify(res.body);
      jsonObj = jQuery.parseJSON(json);
      console.log("datos server2:"+ json );
      next();
    })
}	






