//Formulário envio de pedidos

<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <title>Formulário de envio dos pedidos</title>
  </head>
  <body>
    <H2>Pedido</H2>
     <form method='post' name='pedidos' action="">
       Nome: <br>
       <input type="text" name="nome"><br>
       Endereço: <br>
       <input type="text" name="endereco"><br>
       Telefone: <br>
       <input type="number" name="telefone"><br>	
       Nome do produto: <br>
       <input type="text" name="nomep_roduto"><br>
       Quantidade: <br>
       <input type="number" name="quantidade"><br><br>
       <input type="submit" name="submit" value="Enviar"> 
     </form>

     <?php
      $servidor = "localhost";
      $nomeUsuario = "root";
      $senha = "3005eunasci";
      $database = "eletro_lojas";

      $conn = mysqli_connect($servidor, $nomeUsuario, $senha, $database);

      if(isset($_POST['nome']) && isset($_POST['endereco']) && isset($_POST['telefone']) && isset($_POST['nome_produto']) && isset($_POST['quantidade'])){
  
    echo "Dados recebidos com sucesso!" <br>;

    $nome = $_POST['nome'];
    $endereco = $_POST['endereco'];
    $telefone = $_POST['telefone'];
    $nomeproduto = $_POST['nome_produto'];
    $quantidade = $_POST['quantidade'];

    $sql = "insert into pedidos (nome, endereco, telefone, nome_produto, quantidade) values ('$nome','$endereco', '$telefone', '$nome_produto', '$quantidade')";

   $result = $conn->query($sql);

  if($result){
   echo "Dados inseridos com sucesso!";
   header("Refresh:5;connect.php");
}else{
   echo "Dados não inseridos, verifique e tente novamente";
}

}


  </body>
</html>
