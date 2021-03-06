<!DOCTYPE html>
<html lang="pt-br">
<head>
	<title>Nossas lojas</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="estilos.css/menu.html">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
	<script src="funcoes.js" ></script>
	
</head>
<body>
	<div class="container-fluid">
		<!-- menu -->
		<?php require_once('menu.html') ?>
		<header>
			<h2 class="text-center">Nossas lojas</h2>
		</header>


		<hr>

		<main>

			<div class="row">
				<div class="col-sm-4">
					<H3 class="text-danger">Paraná</H3>
					<p>Avenida do comércio, 200</p>
					<p>2 &ordm; andar</p>
					<p>Zona sul</p>
					<p>(41)5642-4587</p>

				</div>

				<div class="col-sm-4">
					<H3 class="text-danger">São Paulo</H3>
					<p>Avenida pacaembú, 900</p>
					<p>5 &ordm; andar</p>
					<p>Centro</p>
					<p>(11)2352-4585</p>
				</div>

				<div class="col-sm-4">
					<H3 class="text-danger">Santa Catarina</H3>
					<p>Avenida ferraz de Abreu, 250</p>
					<p>8 &ordm; andar</p>
					<p>Zona Industrial</p>
					<p>(48)3562-4254</p>

				</div>
			</div>
			<br><br><br><br>

		</main>
		<footer id="rodape">
			<p class="text-center text-success" id="formasdepagamento"><b>Formas de pagamento<b/></p>
			<img class="img-responsive" src="forma_de_pagamento.png"> 
			<p class="text-center">	&copy; Eletro Lojas</p>
		</footer>

	</div>
</body>
</html>