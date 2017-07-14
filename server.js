var express = require('express'); // se usa para levantar un server
var app = express();

app.set('view engine','pug');     //maneja las vistas en view

app.use(express.static('public'));  // busca el css y los assests en public
//app.use('/node_modules',  express.static(__dirname + '/node_modules'));
// define las rutas de navegacion de la web lado cliente
app.get('/',function(req,res){   // busca index en view (pug)
	res.render('index', {
		title: 'Login'
	});
})

app.get('/recuperarClave',function(req,res){   // servicio para recuperar clave no debe usar page
	 res.render('index', {
		title: 'Recuperar Clave'
	});
	//res.redirect("http://www.google.cl");
	console.log("server recuperarClave");
})

app.get('/homeAdmin',function(req,res){   // busca index en view (pug)
	res.render('index', {
		title: 'home'
	});
})

app.get('/historianIqDoctor',function(req,res){
	res.render('index',{
		title: 'HistorianIq'
	});
})

/*
app.get('/clienteAdmin/crearClienteAdmin',function(req,res){   // busca index en view (pug)
	res.render('index', {
		title: 'crear'
	});
})

app.get('/historianIqDoctor',function(req,res){
	res.render('index',{
		title: 'HistorianIq'
	});
})
/*

app.get('/home',function(req,res){   // busca index en view (pug)
	 res.render('index', {
		title: 'Home'
	});console.log("home server");
})

app.get('/perfilO2',function(req,res){
	res.render('index',{ 
		title: 'Perfil O2'
	});
})
app.get('/fichaMedica',function(req,res){
	res.render('index',{
		title: 'Ficha Médica'
	});
})
app.get('/cuestionarios',function(req,res){
	res.render('index',{
		title: 'Custionarios'
	});
})
app.get('/verCuestionario',function(req,res){
	res.render('index',{
		title: 'Ver Custionario'
	});
})
app.get('/historianIq',function(req,res){
	res.render('index',{
		title: 'HistorianIq'
	});
})
app.get('/registro',function(req,res){
	res.render('index',{
		title: 'Recuperar Contraseña'
	});
})


app.get('/crearNota',function(req,res){
	res.render('index',{
		title: 'Crear Nota'
	});
})

app.get('/reestablecer',function(req,res){
	res.render('index',{
		title: 'Reestablecer Contraseña'
	});
})
*/

app.get('/api/userPancho', function (req, res, next) {
  var user = 
  {
	"id": "001",
	"user": "admin",
	"password": "admin"
  };

	//setTimeout(function () {
    res.send(user);  
    //}, 0000)
});

app.get('/api/home/pabellon', function (req, res, next) {
  var pabellon = 
    [
		{
			"id": "001",
			"pabellon": "pabellon 1"
		},
		{
			"id": "002",
			"pabellon": "pabellon 2"
		},
		{
			"id": "003",
			"pabellon": "pabellon 3"
		},
		{
			"id": "004",
			"pabellon": "pabellon 4"
		},
		{
			"id": "005",
			"pabellon": "pabellon 5"
		}
	];

	//setTimeout(function () {
    res.send(pabellon);  
    //}, 0000)
});

app.get('/api/home/turno', function (req, res, next) {
  var turno = 
    [
		{
			"id": "001",
			"turno": "turno 1"
		},
		{
			"id": "002",
			"turno": "turno 2"
		},
		{
			"id": "003",
			"turno": "turno 3"
		},
		{
			"id": "004",
			"turno": "turno 4"
		}
	];
	//setTimeout(function () {
    res.send(turno);  
    //}, 0000)
});

app.get('/api/fichaMedica/Notas', function (req, res, next) {
  var turno = 
    [
		{
			"id": "001",
			"nombre": "Tramamiento Visita 3",
			"tipo": "Normal",
			"doctor": "Juan Mesa",
			"nota": "El paciente se encuentra en optimas condiciones y no presenta efectos secundarios",
			"fecha": "12/12/17",
			"url" : "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201703170823"
		},
		{
			"id": "002",
			"nombre": "Tramamiento Visita 2",
			"tipo": "Normal",
			"doctor": "Juan Mesa",
			"nota": "Se inicia el tratamiento. La duracion es 1 (una) semana.",
			"fecha": "08/12/17",
			"url" : "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201703170823"
		},
		{
			"id": "003",
			"nombre": "Tramamiento Visita 1",
			"tipo": "Normal",
			"doctor": "Juan Mesa",
			"nota": "Segunda visita y no hay sintamas negativos",
			"fecha": "01/12/17",
			"url" : "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201703170823"
		},
		{
			"id": "004",
			"nombre": "Visita General",
			"tipo": "Visita",
			"doctor": "Juan Mesa",
			"nota": "El tratamiento es acompañado por una dosis de panadol.",
			"fecha": "28/11/17",
			"url" : "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201703170823"
		}
	];
	//setTimeout(function () {
    res.send(turno);  
    //}, 0000)
});

app.get('/api/home/perfil', function (req, res, next) {
  var turno = 
    [
		{
			"id": "001",
			"perfil": "perfil 1"
		},
		{
			"id": "002",
			"perfil": "perfil 2"
		},
		{
			"id": "003",
			"perfil": "perfil 3"
		},
		{
			"id": "004",
			"perfil": "perfil 4"
		}
	];
	//setTimeout(function () {
    res.send(turno);  
    //}, 0000)
});

app.get('/api/home/resultado', function (req, res, next) {
  var perfil = 
    [
		{
			"id": 			"001",
			"nombre": 		"jose Manuel",
			"apellido": 	"Osandon",
			"rut": 			"12105158-6",
			"turno": 		"Turno 1",
			"oxigenacion": 	"Perfil B",
			"pabellon":   	"Pabellón A",
			"room": 		"Room 201" 

		},
		{
			"id": 			"002",
			"nombre": 		"Manolito",
			"apellido": 	"Neuer",
			"rut": 			"19105158-6",
			"turno": 		"Turno 3",
			"oxigenacion": 	"Perfil A",
			"pabellon":   	"Pabellón B",
			"room": 		"Room 101" 

		},
		{
			"id": 			"003",
			"nombre": 		"Cristiano",
			"apellido": 	"Ronaldo",
			"rut": 			"18305158-6",
			"turno": 		"Turno 2",
			"oxigenacion": 	"Perfil A",
			"pabellon":   	"Pabellón C",
			"room": 		"Room 501" 

		},
		{
			"id": 			"004",
			"nombre": 		"Nikola",
			"apellido": 	"Tesla",
			"rut": 			"16105158-6",
			"turno": 		"Turno 1",
			"oxigenacion": 	"Perfil A",
			"pabellon":   	"Pabellón D",
			"room": 		"Room 701" 

		},
		{
			"id": 			"005",
			"nombre": 		"Vicente",
			"apellido": 	"Barrios",
			"rut": 			"26105158-6",
			"turno": 		"Turno 2",
			"oxigenacion": 	"Perfil B",
			"pabellon":   	"Pabellón A",
			"room": 		"Room 301" 

		}
	];
	//setTimeout(function () {
    res.send(perfil);  
    //}, 0000)
});


app.get('/api/home/cuestionario', function (req, res, next) {
  var cuestionario = 
    [
		{
			"id": "001",
			"cuestionario": "cuestionario 1"
		},
		{
			"id": "002",
			"cuestionario": "cuestionario 2"
		},
		{
			"id": "003",
			"cuestionario": "cuestionario 3"
		},
		{
			"id": "004",
			"cuestionario": "cuestionario 4"
		}
	];
	//setTimeout(function () {
    res.send(cuestionario);  
    //}, 0000)
});

app.get('/api/verCuestionario', function (req, res, next) {
  var resultado = 
    [
		{
			"id": 		    "0001",
			"nombre": 		"Cuestionario Nº2",
			"fecha": 	  	"12-12-12",
			"nota": 		"85", 
			"preguntas":    [
				{
					"id": "0001",
					"pregunta": "¿Contenido de Pregunta Nº 1 ?",
					"alternativas": [
						{
							"id": "0001",
							"Alternativa": "Alternativa A)" 
						},
						{
							"id": "0002",
							"Alternativa": "Alternativa B)" 
						},
						{
							"id": "0003",
							"Alternativa": "Alternativa C)" 
						},
						{
							"id": "0004",
							"Alternativa": "Alternativa D)" 
						}
					],
					"respuesta": 
						{
							"id": "0001",
							"respuesta": "Alternativa B)" 
						}
				},
				{
					"id": "0002",
					"pregunta": "¿Contenido de Pregunta Nº 2 ?",
					"alternativas": [
						{
							"id": "0005",
							"Alternativa": "Alternativa E)" 
						},
						{
							"id": "0006",
							"Alternativa": "Alternativa F)" 
						},
						{
							"id": "0007",
							"Alternativa": "Alternativa G)" 
						},
						{
							"id": "0008",
							"Alternativa": "Alternativa H)" 
						}
					],
					"respuesta": 
						{
							"id": "0004",
							"respuesta": "Alternativa G)" 
						}

				}
			]	
		}
	];
	//setTimeout(function () {
    res.send(resultado);  
    //}, 0000)
});


app.get('/api/fichaMedicaData', function (req, res, next) {
  var user = 
    {
      id: '0001',
      name: 'Jonas Baddly Hunt',
      rut: '16105158-6',
      nationality: 'Chileno',
      sexo: 'masculino',
      nacimiento: '12-12-2012',
      celular: '+56 976345032',
      email: 'cr7@madrid.com',
      turno: 'Turno 1',
      pabellon: 'Pabellon B',
      room: 'Room 302'
    };

	//setTimeout(function () {
    res.send(user);  
    //}, 0000)
});


app.get('/api/historianIq', function (req, res, next) {
  var user = 
    {
      titulo: 'Planta Quintum.',
      subTitulo: 'III Región Chile.',
      url: 'https://cdn.forbes.com.mx/2015/05/Internet-mineras-canada.jpg',
      description: 'Imagen de internet, solo referencia.'
    };

	//setTimeout(function () {
    res.send(user);  
    //}, 0000)
});

app.get('/api/historianIqPlot', function (req, res, next) {
  var user = 
   [{
 		"title": "Grafico 1",
 		"titleXAxis": "Tiempo",
 		"titleYAxis": "O2",
 		"data": [
 			[0, 0],[1, 10],[2, 23],[3, 17],[4, 18],[5, 9],[6, 11],[7, 27],[8, 33],[9, 40],
 			[10, 32],[11, 35],[12, 30],[13, 40],[14, 42],[15, 47],[16, 44],[17, 48],[18, 52],[19, 54],
 			[20, 42],[21, 55],[22, 56],[23, 57],[24, 60],[25, 50],[26, 52],[27, 51],[28, 49],[29, 53],
 			[30, 55],[31, 60],[32, 61],[33, 59],[34, 62],[35, 65],[36, 62],[37, 58],[38, 55],[39, 61],
 			[40, 64],[41, 65],[42, 63],[43, 66],[44, 67],[45, 69],[46, 69],[47, 70],[48, 72],[49, 68],
 			[50, 66],[51, 65],[52, 67],[53, 70],[54, 71],[55, 72],[56, 73],[57, 75],[58, 70],[59, 68],
 			[60, 64],[61, 60],[62, 65],[63, 67],[64, 68],[65, 69],[66, 70],[67, 72],[68, 75],[69, 80]
 		    ]
 	},
 	{
 		"title": "Grafico 2",
 		"titleXAxis": "Tiempo",
 		"titleYAxis": "CO2",
 		"data": [
 			[0, 10],[1, 10],[2, 10],[3, 10],[4, 10],[5, 10],[6, 10],[7, 10],[8, 10],[9, 10],
 			[10, 50],[11, 50],[12, 50],[13, 50],[14, 50],[15, 50],[16, 50],[17, 50],[18, 50],[19, 50],
 			[20, 50],[21, 50],[22, 50],[23, 50],[24, 50],[25, 50],[26, 50],[27, 50],[28, 50],[29, 50],
 			[30, 50],[31, 50],[32, 50],[33, 50],[34, 50],[35, 50],[36, 50],[37, 50],[38, 50],[39, 50],
 			[40, 10],[41, 10],[42, 10],[43, 10],[44, 10],[45, 10],[46, 10],[47, 10],[48, 10],[49, 10],
 			[50, 10],[51, 10],[52, 10],[53, 10],[54, 10],[55, 10],[56, 10],[57, 10],[58, 10],[59, 10],
 			[60, 10],[61, 10],[62, 10],[63, 10],[64, 10],[65, 10],[66, 10],[67, 10],[68, 10],[69, 10]
 		    ]
 	},
 	{
 		"title": "Grafico 3",
 		"titleXAxis": "Tiempo",
 		"titleYAxis": "H Relativa",
 		"data": [
 			[0, 10],[1, 10],[2, 10],[3, 10],[4, 10],[5, 10],[6, 10],[7, 10],[8, 10],[9, 10],
 			[10, 10],[11, 10],[12, 10],[13, 10],[14, 10],[15, 10],[16, 10],[17, 10],[18, 10],[19, 10],
 			[20, 10],[21, 10],[22, 10],[23, 10],[24, 10],[25, 10],[26, 10],[27, 10],[28, 10],[29, 10],
 			[30, 10],[31, 10],[32, 10],[33, 10],[34, 10],[35, 10],[36, 10],[37, 10],[38, 10],[39, 10],
 			[40, 30],[41, 30],[42, 30],[43, 30],[44, 30],[45, 30],[46, 30],[47, 30],[48, 30],[49, 30],
 			[50, 30],[51, 30],[52, 30],[53, 30],[54, 30],[55, 30],[56, 30],[57, 30],[58, 30],[59, 30],
 			[60, 30],[61, 30],[62, 30],[63, 30],[64, 30],[65, 30],[66, 30],[67, 30],[68, 30],[69, 30]
 		    ]
 	},
 	{
 		"title": "Grafico 4",
 		"titleXAxis": "Tiempo",
 		"titleYAxis": "Temperatura",
 		"data": [
 			[0, 45],[1, 45],[2, 45],[3, 45],[4, 45],[5, 45],[6, 45],[7, 45],[8, 10],[9, 45],
 			[10, 45],[11, 45],[12, 45],[13, 45],[14, 45],[15, 45],[16, 45],[17, 45],[18, 45],[19, 45],
 			[20, 10],[21, 10],[22, 10],[23, 10],[24, 10],[25, 10],[26, 10],[27, 10],[28, 10],[29, 10],
 			[30, 10],[31, 10],[32, 10],[33, 10],[34, 10],[35, 10],[36, 10],[37, 10],[38, 10],[39, 10],
 			[40, 30],[41, 30],[42, 30],[43, 30],[44, 30],[45, 30],[46, 30],[47, 30],[48, 30],[49, 30],
 			[50, 60],[51, 60],[52, 60],[53, 60],[54, 60],[55, 60],[56, 60],[57, 60],[58, 60],[59, 60],
 			[60, 10],[61, 10],[62, 10],[63, 10],[64, 10],[65, 10],[66, 10],[67, 10],[68, 10],[69, 10]
 		    ]
 	}
 ];

    res.send(user);  
 
});

app.get('/api/cuestionarios', function (req, res, next) {
  var resultado = 
    [
		{
			"id": 		    "0004",
			"Doctor": 		"J. Bartha",
			"Fecha": 	    "12-12-17",
			"Nombre":  		"Custionario Tipo A.",
			"Nota": 		"85"
		},
		{
			"id": 		    "0003",
			"Doctor": 		"J. Bartha",
			"Fecha": 	    "10-12-17",
			"Nombre":  		"Custionario Tipo B.",
			"Nota": 		"95"
		},
		{
			"id": 		    "0002",
			"Doctor": 		"J. Bartha",
			"Fecha": 	    "07-12-17",
			"Nombre":  		"Custionario Tipo A.",
			"Nota": 		"75"
		},
		{
			"id": 		    "0001",
			"Doctor": 		"J.Quiroz",
			"Fecha": 	    "24-11-17",
			"Nombre":  		"Custionario Tipo c.",
			"Nota": 		"90"
		}
		
	];
	//setTimeout(function () {
    res.send(resultado);  
    //}, 0000)
});



//levanta el puerto para run server

app.listen(8080, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1);

  console.log('Quintun projetc escuchando en el puerto 8080');
}) 

app.get('/api/layout1', function (req, res, next) {
  var user = 
    {
      titulo: 'Planta Quintum.',
      subTitulo: 'III Región Chile.',
      url: 'https://cdn.forbes.com.mx/2015/05/Internet-mineras-canada.jpg',
      description: 'Imagen 1 de internet, solo referencia.'
    };

	//setTimeout(function () {
    res.send(user);  
    //}, 0000)
});

app.get('/api/layout2', function (req, res, next) {
  var user = 
    {
      titulo: 'Planta Quintum 2.',
      subTitulo: 'IV Región Chile.',
      url: 'http://www.ccmss.org.mx/wp-content/uploads/2017/06/mineria-operaciones-extractivas-mexico.png',
      description: 'Imagen 2 de internet, solo referencia.'
    };

	//setTimeout(function () {
    res.send(user);  
    //}, 0000)
});

app.get('/api/layout3', function (req, res, next) {
  var user = 
    {
      titulo: 'Planta Quintum 3.',
      subTitulo: 'VI Región Chile.',
      url: 'https://www.changemakers.com/sites/default/files/tajo_abierto_en_la_ciudad_de_cerro_de_pasco.jpg',
      description: 'Imagen 3 de internet, solo referencia.'
    };

	//setTimeout(function () {
    res.send(user);  
    //}, 0000)
});

app.get('/api/tablaMetaData1', function (req, res, next) {
  var resultado = 
		{
			item0: 		"Nombre",
			item1: 		"Tipo",
			item2: 	    "Doctor",
			item3:  	"Fecha",
			item4: 		"Nota",
			item5: 		"Adjunto",
			edit: 		"True"
		};
	//setTimeout(function () {
    res.send(resultado);  
    //}, 0000)
});

app.get('/api/tablaData1', function (req, res, next) {
  var turno = 
    [
		{
			id: "001",
			Nombre: "Tramamiento Visita 3",
			Tipo: "Normal",
			Doctor: "Juan Mesa",
			Nota: "El paciente se encuentra en optimas condiciones y no presenta efectos secundarios",
			Fecha: "12/12/17",
			Adjunto : "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201703170823"
		},
		{
			id: "002",
			Nombre: "Tramamiento Visita 2",
			Tipo: "Normal",
			Doctor: "Juan Mesa",
			Nota: "Se inicia el tratamiento. La duracion es 1 (una) semana.",
			Fecha: "08/12/17",
			Adjunto : "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201703170823"
		},
		{
			id: "003",
			Nombre: "Tramamiento Visita 1",
			Tipo: "Normal",
			Doctor: "Juan Mesa",
			Nota: "Segunda visita y no hay sintamas negativos",
			Fecha: "01/12/17",
			Adjunto : "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201703170823"
		},
		{
			id: "004",
			Nombre: "Visita General",
			Tipo: "Visita",
			Doctor: "Juan Mesa",
			Nota: "El tratamiento es acompañado por una dosis de panadol.",
			Fecha: "28/11/17",
			Adjunto : "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201703170823"
		}
	];
	//setTimeout(function () {
    res.send(turno);  
    //}, 0000)
});

app.get('/api/tablaMetaData2', function (req, res, next) {
  var resultado = 
		{
			item0: 	"Nombre",
			item1: 	"Apellido",
			item2: 	"Rut",
			item3:  "Turno",
			item4: 	"Oxigenacion",
			item5: 	"Pabellon",
			item6: 	"Room",
			edit: 	"False"
		};
	//setTimeout(function () {
    res.send(resultado);  
    //}, 0000)
});

app.get('/api/tablaData2', function (req, res, next) {
  var perfil = 
    [
		{
			id: 			"001",
			Nombre: 		"jose Manuel",
			Apellido: 	"Osandon",
			Rut: 			"12105158-6",
			Turno: 		"Turno 1",
			Oxigenacion: 	"Perfil B",
			Pabellon:   	"Pabellón A",
			Room: 		"Room 201" 

		},
		{
			id: 			"002",
			Nombre: 		"Manolito",
			Apellido: 	"Neuer",
			Rut: 			"19105158-6",
			Turno: 		"Turno 3",
			Oxigenacion: 	"Perfil A",
			Pabellon:   	"Pabellón B",
			Room: 		"Room 101" 

		},
		{
			id: 			"003",
			Nombre: 		"Cristiano",
			Apellido: 	"Ronaldo",
			Rut: 			"18305158-6",
			Turno: 		"Turno 2",
			Oxigenacion: 	"Perfil A",
			Pabellon:   	"Pabellón C",
			Room: 		"Room 501" 

		},
		{
			id: 			"004",
			Nombre: 		"Nikola",
			Apellido: 	"Tesla",
			Rut: 			"16105158-6",
			Turno: 		"Turno 1",
			Oxigenacion: 	"Perfil A",
			Pabellon:   	"Pabellón D",
			Room: 		"Room 701" 

		},
		{
			id: 			"005",
			Nombre: 		"Vicente",
			Apellido: 	"Barrios",
			Rut: 			"26105158-6",
			Turno: 		"Turno 2",
			Oxigenacion: 	"Perfil B",
			Pabellon:   	"Pabellón A",
			Room: 		"Room 301" 

		}
	];
	//setTimeout(function () {
    res.send(perfil);  
    //}, 0000)
});

