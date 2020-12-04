<?php

require "Connection.php";

class Produto {
    public $idprodutos;
    public $categoria;
    public $imagem;
    public $descricao;
    public $preco;
    public $preco+atual;
    public static function getAll() {
        $connection = Connection::getDb();
        $stmt = $connection->query("SELECT `id` , produtos.categoria, categoria ,`descricao` , `imagem` , `preco` , `preco_atual` FROM `produtos`  JOIN categoria on produtos.categoria = categoria.categoria ORDER by id");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
