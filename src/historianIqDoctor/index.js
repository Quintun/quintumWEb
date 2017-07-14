var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');
var template = require('./template');
var templateHeader = require('../headerDoctor/template');
var request = require('superagent');

var url, description, title, subTitle;

var titlePlot1, titlePlot2, titlePlot3, titlePlot4;
var titleXAxisPlot1, titleXAxisPlot2, titleXAxisPlot3, titleXAxisPlot4;
var titleYAxisPlot1, titleYAxisPlot2, titleYAxisPlot3, titleYAxisPlot4;
var dataPlot1, dataPlot2, dataPlot3,  dataPlot4;

page('/historianIqDoctor',load, loadPlot, function(ctx,next){
	var main = document.getElementById('main-container');
  var header = document.getElementById('header-container');
  var el = templateHeader('Historian Iq');
	empty(header).appendChild(el);
	empty(main).appendChild(template);
	console.log("historianIq page");

	$("#containerHistoriaIqUrl").attr('src',url);
  $(".card-title").text(title);
  $("#containerHistoriaIqSubTitle").text(subTitle);
	$(".card-action").text(description);


  $('#btnBack').click(function(){  
        console.log("btnBack ");
        page('/fichaMedicaDoctor');  
  }); 
  
  $('#btnUpdateHistorianIqDoctor').click(function(){
     console.log("btn Update");
     drawBackgroundColor();
  });

  $(window).resize(function() {
    drawBackgroundColor();
  });

  google.charts.load('current', {packages: ['corechart', 'line']});
  google.charts.setOnLoadCallback(drawBackgroundColor);

  function drawBackgroundColor() {
        var data1 = new google.visualization.DataTable();
        data1.addColumn('number', 'X');
        data1.addColumn('number', titleYAxisPlot1[0]);

        data1.addRows(dataPlot1);

        var options1 = {
          hAxis: {
            title: titleXAxisPlot1
          },
          vAxis: {
            title: titleYAxisPlot1
          },
          backgroundColor: 'transparent'
        };

        var chart1 = new google.visualization.LineChart(document.getElementById('chart_div1'));

        var data2 = new google.visualization.DataTable();
        data2.addColumn('number', 'X');
        data2.addColumn('number', titleYAxisPlot2[0]);

        data2.addRows(dataPlot2);

        var options2 = {
          hAxis: {
            title: titleXAxisPlot2
          },
          vAxis: {
            title: titleYAxisPlot2
          },
          backgroundColor: 'transparent'
        };

        var chart2 = new google.visualization.LineChart(document.getElementById('chart_div2'));

        var data3 = new google.visualization.DataTable();
        data3.addColumn('number', 'X');
        data3.addColumn('number', titleYAxisPlot3[0]);

        data3.addRows(dataPlot3);

        var options3 = {
          hAxis: {
            title: titleXAxisPlot3
          },
          vAxis: {
            title: titleYAxisPlot3
          },
          backgroundColor: 'transparent'
        };

        var chart3 = new google.visualization.LineChart(document.getElementById('chart_div3'));

        var data4 = new google.visualization.DataTable();
        data4.addColumn('number', 'X');
        data4.addColumn('number', titleYAxisPlot4[0]);

        data4.addRows(dataPlot4);

        var options4 = {
          hAxis: {
            title: titleXAxisPlot4
          },
          vAxis: {
            title: titleYAxisPlot4
          },
          backgroundColor: 'transparent'
        };

        var chart4 = new google.visualization.LineChart(document.getElementById('chart_div4'));
    
        chart1.draw(data1, options1);
        chart2.draw(data2, options2);
        chart3.draw(data3, options3);
        chart4.draw(data4, options4);
  }



	
})

function load(ctx, next) {
    request
    .get('/api/historianIq')
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

function loadPlot(ctx, next) {
    request
    .get('/api/historianIqPlot')
    .end(function (err, res) {
      if (err) return console.log(err);
      var json = JSON.stringify(res.body);
      var jsonObj = jQuery.parseJSON(json);
      console.log("datos plot:"+ json );
      titlePlot1 = jsonObj[0].title; 
      titlePlot2 = jsonObj[1].title;
      titlePlot3 = jsonObj[2].title;
      titlePlot4 = jsonObj[3].title;
      titleXAxisPlot1 = jsonObj[0].titleXAxis;
      titleXAxisPlot2 = jsonObj[1].titleXAxis;
      titleXAxisPlot3 = jsonObj[2].titleXAxis;
      titleXAxisPlot4 = jsonObj[3].titleXAxis;
      titleYAxisPlot1 = jsonObj[0].titleYAxis;
      titleYAxisPlot2 = jsonObj[1].titleYAxis;
      titleYAxisPlot3 = jsonObj[2].titleYAxis;
      titleYAxisPlot4 = jsonObj[3].titleYAxis;
      dataPlot1 =  jsonObj[0].data;
      dataPlot2 =  jsonObj[1].data;
      dataPlot3 =  jsonObj[2].data;
      dataPlot4 =  jsonObj[3].data;
      
      next();

    })                                  
} 





