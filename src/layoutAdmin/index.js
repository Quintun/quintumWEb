var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');
var template = require('./template');
var templateHeader = require('../headerDoctor/template');
var request = require('superagent');

var url, description, title, subTitle;

page('/layoutAdmin',load, function(ctx,next){
	var main = document.getElementById('main-container');
  var header = document.getElementById('header-container');
  var el = templateHeader('Layout');
	empty(header).appendChild(el);
	empty(main).appendChild(template);
	console.log("layout Admin page");

	$("#containerHistoriaIqUrl").attr('src',url);
  $(".card-title").text(title);
  $("#containerHistoriaIqSubTitle").text(subTitle);
	$(".card-action").text(description);


  $('#btnBack').click(function(){  
        console.log("btnBack ");
        page('/homeAdmin');  
  }); 
  
  $(document).ready(function (){
    $(".dropdown-button").dropdown();
    $('select').material_select();
  })

  $('#layoutVer').click(function(){  
    console.log("btn Ver ");
    var layout = $("#itemPabellón option:selected" ).text();
    console.log("layout: ", layout);
    if (layout == "Layout 1") {
      loadImage("/api/layout1") 
    }else if (layout == "Layout 2" ){
      loadImage("/api/layout2") 
    }else if (layout == "Layout 3" ){
      loadImage("/api/layout3") 
    }

     

  }); 

  
  function loadImage(ruta) {
    request
    .get(ruta)
    .end(function (err, res) {
      if (err) return console.log(err);
      var json = JSON.stringify(res.body);
      var jsonObj = jQuery.parseJSON(json);
      console.log("datos server2:"+ json );
      url = jsonObj.url;
      description = jsonObj.description;
      title = jsonObj.titulo;
      subTitle = jsonObj.subTitulo;
      $("#containerHistoriaIqUrl").attr('src',url);
      $(".card-title").text(title);
      $("#containerHistoriaIqSubTitle").text(subTitle);
      $(".card-action").text(description);
  
    })
} 
})

function load(ctx, next) {
    request
    .get('/api/layout1')
    .end(function (err, res) {
      if (err) return console.log(err);
      var json = JSON.stringify(res.body);
      var jsonObj = jQuery.parseJSON(json);
      console.log("datos server2:"+ json );
      url = jsonObj.url;
      description = jsonObj.description;
      title = jsonObj.titulo;
      subTitle = jsonObj.subTitulo;
      next();
    })
}	










