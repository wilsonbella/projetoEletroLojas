<?php
$servidor = "localhost";
$nomeUsuario = "root";
$senha = "";
$database = "eletro_lojas";

$conn = mysqli_connect($servidor, $nomeUsuario, $senha, $database);

if(!$conn){
	die("A conexão ao Banco de Dados falhou".mysqli_connect_error());
}

?>