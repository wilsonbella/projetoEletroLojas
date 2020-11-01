//Criando a conexão 

<?php
  $servidor = "localhost";
  $nomeUsuario = "root";
  $senha = "3005eunasci";
  $database = "eletro_lojas";

  $conn = mysqli_connect($servidor, $nomeUsuario, $senha, $database);

 if(!$conn){
    die("A conexão ao Banco de Dados falhou".mysqli_connect_error());
}

 $sql = "select idprodutos, categoria, descricao, preco, preco_atual, imagem from produtos";
 $result = $conn->query($sql);

  while($row = $result->fetch_assoc()){
     print_r($row);
     echo "<hr>";
 }

?>
 //Exibir a tabela produtos

  select * from produtos;





