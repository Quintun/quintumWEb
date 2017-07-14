var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');
var template= require('./template');
var templateHeader = require('../headerDoctor/template');

page('/perfilO2Doctor',function(ctx,next){
	var main = document.getElementById('main-container');
	var header = document.getElementById('header-container');
	var el = templateHeader('Perfil O2');
	empty(header).appendChild(el);
	empty(main).appendChild(template);
	console.log("perfilO2 page");

	$('#btnCrearPerfilO2').click(function(){
	    var nombre 		= $('#perfilNombre').val();  
	    var descripcion = $('#perfilDescripcion').val();   
	  
	    console.log("Crear perfilO2");
	    console.log("nombre: "+ nombre);
	    console.log("descripcion:"+descripcion);
	
	   	
	});

	

	$('#btnBack').click(function(){  
	    console.log("btnBack ");
	    page('/homeDoctor');  
	});    

})




