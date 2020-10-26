Criação da tabela pedidos

CREATE TABLE `eletro_lojas`.`pedidos` (
  `idpedidos` INT NOT NULL AUTO_INCREMENT,
  `nome_cliente` VARCHAR(100) NOT NULL,
  `endereco` VARCHAR(150) NOT NULL,
  `telefone` BIGINT(9) NOT NULL,
  `nome_produto` VARCHAR(120) NOT NULL,
  `valor_unico` DECIMAL(8,2) NOT NULL,
  `quantidade` INT NOT NULL,
  `valor_total` DECIMAL(8,2) NOT NULL,
  PRIMARY KEY (`idpedidos`));


Inserções na tabela pedidos

INSERT INTO `eletro_lojas`.`pedido` (`idpedido`, `nome_cliente`, `endereco`, `telefone`, `nome_produto`, `valor_unico`, `quantidade`, `valor_total`) VALUES ('1', 'Andre', 'rua A', '562421454', 'Geladeira frost free', '4500.00', '2', '9000.00');
INSERT INTO `eletro_lojas`.`pedido` (`idpedido`, `nome_cliente`, `endereco`, `telefone`, `nome_produto`, `valor_unico`, `quantidade`, `valor_total`) VALUES ('2', 'Ana', 'rua B', '547821489', 'Fogão Pequeno', '500.00', '3', '1500.00');
INSERT INTO `eletro_lojas`.`pedido` (`idpedido`, `nome_cliente`, `endereco`, `telefone`, `nome_produto`, `valor_unico`, `quantidade`, `valor_total`) VALUES ('3', 'Bruna', 'rua C', '854632149', 'Microondas Compacto', '1500.00', '1', '1500.00');
INSERT INTO `eletro_lojas`.`pedido` (`idpedido`, `nome_cliente`, `endereco`, `telefone`, `nome_produto`, `valor_unico`, `quantidade`, `valor_total`) VALUES ('4', 'Beto', 'rua D', '954876321', 'Mini Geladeira frost free', '2500.00', '2', '5000.00');
INSERT INTO `eletro_lojas`.`pedido` (`idpedido`, `nome_cliente`, `endereco`, `telefone`, `nome_produto`, `valor_unico`, `quantidade`, `valor_total`) VALUES ('5', 'Claudia', 'rua E', '754216984', 'Maquina de Lavar Luxo', '8500.00', '2', '17000.00');
INSERT INTO `eletro_lojas`.`pedido` (`idpedido`, `nome_cliente`, `endereco`, `telefone`, `nome_produto`, `valor_unico`, `quantidade`, `valor_total`) VALUES ('6', 'Diego', 'rua F', '652314897', 'Microondas Branco', '3200.00', '3', '9600.00');
INSERT INTO `eletro_lojas`.`pedido` (`idpedido`, `nome_cliente`, `endereco`, `telefone`, `nome_produto`, `valor_unico`, `quantidade`, `valor_total`) VALUES ('7', 'Eliane', 'rua G', '587412695', 'Maquina de Lavar Pop', '5500.00', '1', '5500.00');
INSERT INTO `eletro_lojas`.`pedido` (`idpedido`, `nome_cliente`, `endereco`, `telefone`, `nome_produto`, `valor_unico`, `quantidade`, `valor_total`) VALUES ('8', 'Flavio', 'rua H', '478512369', 'Fogão Branco', '1500.00', '2', '3000.00');
INSERT INTO `eletro_lojas`.`pedido` (`idpedido`, `nome_cliente`, `endereco`, `telefone`, `nome_produto`, `valor_unico`, `quantidade`, `valor_total`) VALUES ('9', 'Gabriela', 'rua I', '865478965', 'Maquina de Lavar Luxo', '8500.00', '1', '8500.00');
INSERT INTO `eletro_lojas`.`pedido` (`idpedido`, `nome_cliente`, `endereco`, `telefone`, `nome_produto`, `valor_unico`, `quantidade`, `valor_total`) VALUES ('10', 'Helio', 'rua J', '256314895', 'Geladeira Branca', '4500.00', '2', '9000.00');

