<?php 
require_once('conexao.php');
$sql = "select * from produtos";
$result_div = $conn->query($sql);
$result_ul = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
	<title>Produtos</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="estilos.css/menu.html/conexao.php">
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
			<h2 class="text-center">Produtos</h2>
		</header>

		<hr>

		<main class="container-fluid">
            <h2>Produtos</h2>
            <hr>
            <div class="d-flex">
                <aside class="categorias">
                    <h3>Categorias</h3>
                    <ul class="list-group ml-2">
                        <li class="list-item list-group-item-action" id="produto" onclick="selecionar(`produto`)">Todos</li>
                        <?php
                            while ($rows2 = $result_ul->fetch_assoc()) {
                                $categorias[] = $rows2['categoria'];
                                $categorias = array_unique($categorias);
                            }
                            foreach ($categorias as $categoria) { ?>
                                <li class="list-item list-group-item-action" id="<?php echo str_replace(' ', '', $categoria); ?>" onclick="selecionar(`<?php echo str_replace(' ', '', $categoria) ?>`)"><?php echo $categoria ?></li><?php
                            }
                            unset($categoria);      
                        ?>
                    </ul>
                </aside>
                <div class="container row mx-auto">
                    <?php 
                        while ($rows = $result_div->fetch_assoc()) { ?>
                            <div class="col-sm-12 col-lg-4  flex-column justify-content-end align-items-center produto <?php echo str_replace(' ', '', $rows['categoria']);?> text-center">
                                <img class="w-45" src="<?php echo $rows['img']; ?>" alt="<?php echo $rows['categoria']; ?>" onclick="aumentaImg(this)"><br>
                                <p><?php echo $rows['descricao']; ?></p>
                                <hr>
                                <del class="preco">R$ <?php echo number_format($rows['preco'],2, ',', '.'); ?></del>
                                <p class="preco_atual text-danger font-weight-bold text-monospace">R$ <?php echo number_format($rows['preco'],2, ',', '.'); ?></p>
                                <br><br>
                            </div><?php
                        }
                    ?>
                </div>
            </div>
        </main>
     
        
        <script>
            quantidade(`produto`);
            <?php foreach ($categorias as $categoria) { ?>
                quantidade(`<?php echo str_replace(' ', '', $categoria); ?>`);<?php
            }?>
        </script>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>    
    </body>
</html>