
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="css/style.css">
	<title>Proyecto Integrador</title>
</head>
<body>
	<header class="principal">
		<h1>Web</h1>
		<nav>
			<a href="templates/productos.html">Productos</a>
			|
			<a href="templates/crear-cuenta.html">Crear Cuenta</a>
			|
			<a href="templates/usuarios.html">Usuarios</a>
		</nav>
	</header>

	<main class="principal">
		
	</main>

	<footer class="principal">
		<p>Mi Web Fantastica &copy 2021 | Todos los derechos reservados</p>
	</footer>

	<script>
	<?php
		if( isset($_GET) && isset($GET['modulo']) ){
			$modulo = $_GET["modulo"];
			$url = "templates/$modulo.html";

			echo "
			const xhr = new XMLHttpRequest();
        	xhr.open('GET', '$url');
        	xhr.send();

        	xhr.addEventListener('load', evLoad =>{
            	// Carga del HTML
            	main.innerHTML = evLoad.target.response;
            	// Carga del JS asociado
            	cargarModulos('$modulo');
            	// Carga del title
            	document.title = `\${titleBase} | $modulo`;
            	// History
            	const objetoSate =  {
                	url: '$url',
                	html: evLoad.target.response,
                	modulo: '$modulo'
            	}
            	history.pushState(objetoSate, null, '$modulo');
        	})
			";
		}
	?>
	</script>
	<script src="js/index.js"></script>
</body>
</html>