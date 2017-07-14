var page = require('page');
var yo = require('yo-yo')
var empty = require('empty-element')
var template= require('./template')
var templateHeader = require('../headerDoctor/template');
//window.jQuery = window.$ = require('jquery');
//window.$.velocity = require('velocity-animate/velocity.js')

page('/reestablecer',function(ctx,next){
	var main = document.getElementById('main-container');
	var header = document.getElementById('header-container');
	var el = templateHeader('Reestablecer Contraseña');
	empty(header).appendChild(el);
	empty(main).appendChild(template);
	console.log("reestablecer page");
    var email = $('#recuperarEmail').val(); 
	
	$('#recuperarEmail').focus(
	    function(){
	        $(this).val('');
	});

	$('#btnBack').click(function(){  
	    console.log("btnBack ");
	    page('/');  
	}); 

	$(document).ready(function(){
	    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	   // $('#reestablecerModal').modal();

     });
     

	$('#reestablecerModal').modal({
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


	function submitForm() {
    	var emailTxt = $('#recuperarEmail').val(); 
        var msnPop   = "Se le ha enviado un link para recuperación de contraseña a "+ emailTxt +". Usted dispondrá de un máximo de 24 horas para ingresar al sistema y establecer una nueva contraseña.";
		console.log("btnEnviarReestablecer:");
		
		if (emailTxt =="" || !(validateEmail(emailTxt)) ) {
	      alert("Debe Ingresar un email válido");
	      event.preventDefault(); //prevent default submit action
	    }else if( validateEmail(emailTxt)) {
	      console.log("Email:" +emailTxt);
	      $("#modalParrafo").text(msnPop);
	      $('#reestablecerModal').modal('open');
	    }
	}

	$('#btnEnviarReestablecer').on('click', submitForm);
	$('#btnEnviarReestablecer').on('keypress', function(e) {
		var emailTxt 		= $('#recuperarEmail').val(); 
	    if (e.keyCode === 13 && emailTxt === undefinedl) {
	      console.log("aqui");
	    }
	});

	function validateEmail($email) {
	  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	  return emailReg.test( $email );
	}

})



