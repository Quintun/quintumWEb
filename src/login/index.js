var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');
var template = require('./template');
var templateHeader = require('../headerDoctorEmpty/template');
var templateFooter = require('../footerDoctor/template'); 
var request = require('superagent');

var usernameServer, passwordServer;

page('/',login, function(ctx,next){
	var main = document.getElementById('main-container');
	var header = document.getElementById('header-container');
	var footer = document.getElementById('footer-container');
	var el = templateHeader('');
	empty(header).appendChild(el);
	empty(main).appendChild(template);
	empty(footer).appendChild(templateFooter(''));
	console.log("login page");


	function submitForm() {
		console.log("btn Login");
	    var usernameTxt = $('#user_name').val();    
	    var passwordTxt = $('#password').val();
	    if (usernameTxt =="" || passwordTxt =="") {
	      alert("username or password required !");
	      event.preventDefault(); //prevent default submit action
	    }else {
	      if((usernameTxt == usernameServer) && (passwordTxt == passwordServer)){
	       // window.location='/home';
	       console.log("local Storage");
	       localStorage.setItem("Username",usernameTxt);
	       localStorage.setItem("Password",passwordTxt);
	       page('/homeAdmin');
	      }else if((usernameTxt == "doctor") && (passwordTxt == "doctor")){
	       // window.location='/home';
	       console.log("local Storage");
	       localStorage.setItem("Username",usernameTxt);
	       localStorage.setItem("Password",passwordTxt);
	       page('/homeDoctor');
	      }else if((usernameTxt == "adminTabla") && (passwordTxt == "adminTabla")){
	       // window.location='/home';
	       console.log("local Storage");
	       localStorage.setItem("Username",usernameTxt);
	       localStorage.setItem("Password",passwordTxt);
	       page('/verTabla');
	      }else{
	        alert("Usuario Invalido");
	      }
	    }
	}


	$(document).ready(function (){
		var usernameLocal = localStorage.Username || "Usuario"; 
		var passwordLocal = localStorage.Password || "password"; 
		console.log("user:", usernameLocal);
		console.log("password:", passwordLocal);
		$('#user_name').val(usernameLocal); 
		$('#password').val(passwordLocal);    
	});

	$('#btnLogin').on('click', submitForm);
	$('#password').on('keypress', function(e) {
	    if (e.keyCode === 13) {
	        submitForm();
	    }
	});

	$('#password').focus(
	    function(){
	        $(this).val('');
	});

	$('input:text').focus(
	    function(){
	        $(this).val('');
	});

	$('#forgetPassword').click(function(){
	   console.log("btn Recuperar Contraseña");
	   //setTimeout(function () {
	    	page('/reestablecer'); 
	    	//page('/recuperarClave'); 
	  
	   //}, 0000);
	});

	$('#btnRegistro').click(function(){
	  	console.log("btn Registro");
	  	//setTimeout(function () {
		    page('/registro');
		    
	//	}, 0000);
	});
	
});

function login (ctx, next) {
    request
    .get('/api/userPancho')
    .end(function (err, res) {
      if (err) return console.log(err);
      var json = JSON.stringify(res.body);
      var jsonObj = jQuery.parseJSON(json);
      console.log("datos server2:"+ json );
      usernameServer = jsonObj.user;
      passwordServer = jsonObj.password;
      next();
    })
}	




