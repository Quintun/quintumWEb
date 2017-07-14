var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');
var template = require('./template');
var templateHeader = require('../../headerAdmin2/template');
var templateFooter = require('../../footerAdmin2/template'); 
var request = require('superagent');

var jsonMeta, jsonObjMeta, resultadoMeta;
var json, jsonObj, resultado;
var  flagOrdenNombre = false, flagOrdenTipo = false, flagOrdenDoctor = false, flagOrdenFecha = false;
var items = ["Item1","Item2","Item3","Item4","Item5","Item6"];   

page('/verTabla',function(ctx,next){
	var main = document.getElementById('main-container');
	var header = document.getElementById('header-container');
	var footer = document.getElementById('footer-container');
	var el = templateHeader('Header','PathName' );
	empty(header).appendChild(el);
	empty(main).appendChild(template);
	empty(footer).appendChild(templateFooter("Item1","Item2","Item3",items));
	console.log("ficha Medica page");

	$('#btnBack').click(function(){  
	    console.log("btnBack ");
	    page('/homeDoctor');  
	}); 

	$('input:text').focus(
	    function(){
	        $(this).val('');
	});

 	function loadTablaMeta () {
	    request
	    .get('/api/tablaMetaData1')
	    .end(function (err, res) {  
	      if (err) return console.log(err);
	      var json = JSON.stringify(res.body);
	      resultadoMeta = jQuery.parseJSON(json);
	      resultadoMeta = Object.keys(resultadoMeta).map(function(key) { return resultadoMeta[key]; }) // de objeto a array
	      console.log('resultado: ', resultadoMeta);
	      console.log('rlength: ', resultadoMeta.length);
	      var newRowContent="";
	 	  $("#tableResultados thead").empty();
	 	  for (var i = 0 ; i <= resultadoMeta.length-2 ; i++) {
			 newRowContent += "<th>"+resultadoMeta[i]+"</th>" ;
		  }   
		  console.log('data: ',newRowContent);
		  newRowContent= "<tr id=\"row"+(i+1)+"\""+">"+ newRowContent +"</tr>";    
		  $("#tableResultados thead").append(newRowContent);
	      
	    })

	}

	function loadTabla () {
	    request
	    .get('/api/tablaData1')
	    .end(function (err, res) {
	      if (err) return console.log(err);
	      var json = JSON.stringify(res.body);
	      resultado = jQuery.parseJSON(json);
	      console.log('data Tabla: ',resultado);
	      console.log('resultado Header: ', resultadoMeta);
	      $("#tableResultados tbody").empty()
	      for (var i = 0 ; i <= resultado.length-1 ; i++) {
			var newRowContent=""
			for (var j = 0 ; j <= resultadoMeta.length-2 ; j++) {
				newRowContent+= "<td>"+resultado[i][resultadoMeta[j]]+"</td>" ;
			}
            newRowContent= "<tr id=\"row"+(i+1)+"\""+">"+ newRowContent +"</tr>"; 
		    $("#tableResultados tbody").append(newRowContent);	
		  }
	    })

	}

	$(document).ready(function(){
	 	$('select').material_select();

		loadTablaMeta();
		loadTabla();


	});

})





