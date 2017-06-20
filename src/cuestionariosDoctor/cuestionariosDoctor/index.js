var $ = require("jquery");
var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');
var template = require('./template');
var templateHeader = require('../../headerDoctor/template');
var request = require('superagent');

var resultado;

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
		console.log('texto: '+resultado[i].Texto);

	    var newRowContent = "<td>"+resultado[i].Doctor+"</td>" ;
	    newRowContent+= "<td>"+resultado[i].Fecha+"</td>" ;
	    newRowContent+= "<td>"+resultado[i].Texto+"</td>"; 
	   
        newRowContent= "<tr id=\"row"+(i+1)+"\""+">"+ newRowContent +"</tr>"; 
	   
	    $("#tableResultados tbody").append(newRowContent);	
	   
	  }

	  	$(document).ready(function (){

        $('#tableResultados').on('click', 'td', function() { // td not tr
        	var aux = $(this).parents("tr").attr('id');
		    console.log(aux);
		    console.log(aux.substring(3));
		    page('/verCuestionarioDoctor');
 			//page('/fichaMedica',function(ctx, next) {
			 // console.log("junior")
			//  next()
			//})
		   
		});
	})
     
	
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


