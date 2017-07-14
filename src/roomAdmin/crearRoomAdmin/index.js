var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');
var template = require('./template');
var templateHeader = require('../../headerDoctor/template');
var request = require('superagent');

var json, jsonObj;

page('/crearRoomAdmin',function(ctx,next){
	var main = document.getElementById('main-container');
	var header = document.getElementById('header-container');
	var el = templateHeader('Crear Pieza');
	empty(header).appendChild(el);
	empty(main).appendChild(template);
	console.log("ficha Medica page");

	$('#btnBack').click(function(){  
	    console.log("btnBack ");
	    page('/homeAdmin');  
	}); 

	$(document).ready(function(){
		$('select').material_select();
	});

	/*
	$('#fichaMedicaBtnCuestionario').click(function(){
	    console.log("btn cuestionarios");
	    setTimeout(function () {
	    	page('/cuestionarios');
	  	}, 3000);
	});

	$('#fichaMedicaBtnHistorianIq').click(function(){
	    console.log("btn historianIq");
	    setTimeout(function () {
	    	page('/historianIq');  
	  	}, 3000);
	    
	});

	$('#fichaMedicoBtnCrearNota').click(function(){
	    console.log("btn crearNota");
	    setTimeout(function () {
	    	page('/crearNota'); 
	  	}, 3000);
	    
	});

	$('#fichaMedicoBuscarBtnNota').click(function(){
		var buscarNota = $('#fichaMedicaBuscarNota').val();  
		var buscarClave = $('#fichaMedicaBuscarClave').val();  
	    console.log("btn Buscar Nota: "+ buscarNota);
	    console.log("btn Buscar Clave: "+ buscarClave);
	});

	$('input:text').focus(
	    function(){
	        $(this).val('');
	});



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

	});
	*/

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





