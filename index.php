<?php

require "Produto.php";


header("Access-Control-Allow-Origin:*");    
header("Content-type: application/json");    

$produto = Produto::getAll();

echo json_encode($produto);

