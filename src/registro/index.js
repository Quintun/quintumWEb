var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');
var template = require('./template');
var templateHeader = require('../headerDoctor/template');
var request = require('superagent');

page('/registro',function(ctx,next){
	var main = document.getElementById('main-container');
	var header = document.getElementById('header-container');
	var el = templateHeader('Registro');
	empty(header).appendChild(el);
	empty(main).appendChild(template);
	console.log("registro page");
	
	function submitForm() {
		var usernameTxt 	= $('#user_nameRegistro').val();    
    	var passwordTxt 	= $('#passwordRegistro').val();
    	var usernameFullTxt = $('#user_nameFullRegistro').val();
    	var emailTxt 		= $('#emailRegistro').val();
		console.log("btn Registrarse");
	    if (usernameTxt =="" || passwordTxt =="" || usernameFullTxt =="" || emailTxt =="") {
	      alert("faltan campos por completar !");
	      event.preventDefault(); //prevent default submit action
	    }else {
	      console.log("Registrarse");
	      console.log("Nombre:"+usernameFullTxt);
	      console.log("Email:" +emailTxt);
	      console.log("user:"+usernameTxt);
	      console.log("Password:"+passwordTxt);

	      $('#registroModal').modal('open');
	    }
	}

	$('#btnBack').click(function(){  
	    console.log("btnBack ");
	    page('/');  
	}); 

	$('#btnRegistarseRegistro').on('click', submitForm);
	$('#passwordRegistro').on('keypress', function(e) {
	    if (e.keyCode === 13) {
	        submitForm();
	    }
	});

	$('#passwordRegistro').focus(
	    function(){
	        $(this).val('');
	});
	$('#emailRegistro').focus(
	    function(){
	        $(this).val('');
	});
	$('#user_nameFullRegistro').focus(
	    function(){
	        $(this).val('');
	});

	$('#user_nameRegistro').focus(
	    function(){
	        $(this).val('');
	});

	$('input:text').focus(
	    function(){
	        $(this).val('');
	});

	$('#registroModal').modal({
	      dismissible: true, // Modal can be dismissed by clicking outside of the modal
	      opacity: .5, // Opacity of modal background
	      inDuration: 300, // Transition in duration
	      outDuration: 200, // Transition out duration
	      startingTop: '4%', // Starting top style attribute
	      endingTop: '10%', // Ending top style attribute
	      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available
	        console.log("Open Modal");
	        console.log("email: "+ email);
	      },
	      complete: function() {   
			page('/');
	      } // Callback for Modal close
	    }
	);


});

	




