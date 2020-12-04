 <?php
  $servidor = "localhost";
  $nomeUsuario = "root";
  $senha = "";
  $database = "eletro_lojas";

  $tabela = $_GET['table'];

  $conn = mysqli_connect($servidor, $nomeUsuario, $senha, $database);

 if(!$conn){
    die("A conexão ao Banco de Dados falhou".mysqli_connect_error());
}
 setlocale(LC_MONETARY, 'pt_BR');

 $sql = "select * from $tabela";
 $result = $conn->query($sql);

  print_r(json_encode($result->fetch_all(MYSQLI_ASSOC)));

  mysql_close($conn);
  ?>