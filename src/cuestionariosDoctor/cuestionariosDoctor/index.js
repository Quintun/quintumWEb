var $ = require("jquery");
var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');
var template = require('./template');
var templateHeader = require('../../headerDoctor/template');
var request = require('superagent');

var resultado;

var flagOrdenNombre = false, flagOrdenDoctor = false, flagOrdenFecha = false;

page('/cuestionariosDoctor', loadCuestionarios, function(ctx,next){
	var main = document.getElementById('main-container');
    var header = document.getElementById('header-container');
	var el = templateHeader('Cuestionarios');
	empty(header).appendChild(el);
	empty(main).appendChild(template);
	console.log("perfilO2 page");

	$('#btnBack').click(function(){  
	    console.log("btnBack ");
	    page('/fichaMedicaDoctor');  
	}); 

	$("#tableResultados tbody").empty()
      for (var i = 0 ; i <= resultado.length-1 ; i++) {
		console.log('Doctor: '+resultado[i].Doctor);
		console.log('Fecha: '+resultado[i].Fecha);
		console.log('texto: '+resultado[i].Nombre);
		console.log('texto: '+resultado[i].Nota);

	    var newRowContent = "<td>"+resultado[i].Doctor+"</td>" ;
	    newRowContent+= "<td>"+resultado[i].Fecha+"</td>" ;
	    newRowContent+= "<td>"+resultado[i].Nombre+"</td>"; 
	    newRowContent+= "<td>"+resultado[i].Nota+"</td>"; 
        newRowContent= "<tr id=\"row"+(i+1)+"\""+">"+ newRowContent +"</tr>"; 
	   
	    $("#tableResultados tbody").append(newRowContent);	
	   
	  }

	 $(document).ready(function (){

        $('#tableResultados').on('click', 'td', function() { // td not tr
        	var aux = $(this).parents("tr").attr('id');
		    console.log(aux);
		    console.log(aux.substring(3));
		    page('/verCuestionarioDoctor');
 			
		});

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
		        } else  if (row == "Doctor"){
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
				    var newRowContent = "<td>"+resultado[i].Doctor+"</td>" ;
	    			newRowContent+= "<td>"+resultado[i].Fecha+"</td>" ;
	    			newRowContent+= "<td>"+resultado[i].Nombre+"</td>"; 
	    			newRowContent+= "<td>"+resultado[i].Nota+"</td>"; 
        			newRowContent= "<tr id=\"row"+(i+1)+"\""+">"+ newRowContent +"</tr>"; 
				   
				    $("#tableResultados tbody").append(newRowContent);	
				}
	        }

		});
	 })

	function sortAscendNombre(a, b){
	  if (a.Nombre < b.Nombre) return -1;
	  if (a.Nombre > b.Nombre) return 1;
	  return 0;
	}
	function sortDescendNombre(a, b){
	  if (a.Nombre > b.Nombre) return -1;
	  if (a.nombre < b.Nombre) return 1;
	  return 0;
	}
	function sortAscendDoctor(a, b){
	  if (a.Doctor < b.Doctor) return -1;
	  if (a.Doctor > b.Doctor) return 1;
	  return 0;
	}
	function sortDescendDoctor(a, b){
	  if (a.Doctor > b.Doctor) return -1;
	  if (a.Doctor < b.Doctor) return 1;
	  return 0;
	}
	function sortAscendFecha(a, b){
	  if (a.Fecha < b.Fecha) return -1;
	  if (a.Fecha > b.Fecha) return 1;
	  return 0;
	}
	function sortDescendFecha(a, b){
	  if (a.Fecha > b.Fecha) return -1;
	  if (a.Fecha < b.Fecha) return 1;
	  return 0;
	}
     
	
})

function loadCuestionarios(ctx, next ) {
    request
    .get('/api/cuestionarios')
    .end(function (err, res) {
      if (err) return console.log(err);
      var json = JSON.stringify(res.body);
      resultado = jQuery.parseJSON(json);
      next()
    })

}


