
CREATE TABLE `eletro_lojas`.`produtos` (
  `idprodutos` INT NOT NULL AUTO_INCREMENT,
  `categoria` VARCHAR(100) NOT NULL,
  `descricao` VARCHAR(150) NOT NULL,
  `preco` DECIMAL(8,2) NOT NULL,
  `preco_atual` DECIMAL(8,2) NOT NULL,
  `imagem` VARCHAR(130) NOT NULL,
  PRIMARY KEY (`idprodutos`));


INSERT INTO `eletro_lojas`.`produtos` (`idprodutos`, `categoria`, `descricao`, `preco`, `preco_atual`, `imagem`) VALUES ('1', 'geladeira', 'Geladeira frost free', '5000.00', '4500.00', 'file://geladeira1.jpg');
INSERT INTO `eletro_lojas`.`produtos` (`idprodutos`, `categoria`, `descricao`, `preco`, `preco_atual`, `imagem`) VALUES ('2', 'geladeira', 'Geladeira cinza', '6500.00', '5200.00', 'file://geladeira1.jpg');
INSERT INTO `eletro_lojas`.`produtos` (`idprodutos`, `categoria`, `descricao`, `preco`, `preco_atual`, `imagem`) VALUES ('3', 'geladeira', 'Geladeira Branca', '5000.00', '4500.00', 'file://geladeira3.jpg');
INSERT INTO `eletro_lojas`.`produtos` (`idprodutos`, `categoria`, `descricao`, `preco`, `preco_atual`, `imagem`) VALUES ('4', 'geladeira', 'Mini Geladeira frost free', '3000.00', '2500.00', 'file://geladeira4.jpg');
INSERT INTO `eletro_lojas`.`produtos` (`idprodutos`, `categoria`, `descricao`, `preco`, `preco_atual`, `imagem`) VALUES ('5', 'microondas', 'Microondas Elegante', '3000.00', '2500.00', 'file://microondas1.jpg');
INSERT INTO `eletro_lojas`.`produtos` (`idprodutos`, `categoria`, `descricao`, `preco`, `preco_atual`, `imagem`) VALUES ('6', 'microondas', 'Microondas Compacto', '2000.00', '1500.00', 'file://microondas2.jpg');
INSERT INTO `eletro_lojas`.`produtos` (`idprodutos`, `categoria`, `descricao`, `preco`, `preco_atual`, `imagem`) VALUES ('7', 'microondas', 'Microondas Branco', '3500.00', '3200.00', 'file://microondas3.jpg');
INSERT INTO `eletro_lojas`.`produtos` (`idprodutos`, `categoria`, `descricao`, `preco`, `preco_atual`, `imagem`) VALUES ('8', 'fogao', 'Fogão Pequeno', '1000.00', '500.00', 'file://fogao1.jpg');
INSERT INTO `eletro_lojas`.`produtos` (`idprodutos`, `categoria`, `descricao`, `preco`, `preco_atual`, `imagem`) VALUES ('9', 'fogao', 'Fogão Branco', '2000.00', '1500.00', 'file://fogao2.jpg');
INSERT INTO `eletro_lojas`.`produtos` (`idprodutos`, `categoria`, `descricao`, `preco`, `preco_atual`, `imagem`) VALUES ('10', 'maquina_de_lavar', 'Maquina de Lavar Pop', '7000.00', '5500.00', 'file://maquinaDeLavar1.jpg');
INSERT INTO `eletro_lojas`.`produtos` (`idprodutos`, `categoria`, `descricao`, `preco`, `preco_atual`, `imagem`) VALUES ('11', 'maquina_de_lavar', 'Maquina de Lavar Luxo', '10000.00', '8500.00', 'file://maquinaDeLavar2.jpg');











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




CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL COMMENT 'Nome do Cliente',
  `msg` varchar(300) NOT NULL,
  `data` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `comentarios` (`id`, `nome`, `msg`, `data`) VALUES
(1, 'Wilson bella de oliveira', 'Como vocês entregam os produtos comprados?', '2020-11-12 23:24:06'),
(2, 'Bruna da silva', 'quanto custa a 1º geladeira?', '2020-11-12 23:26:44'),
(3, 'Maria do socorro', 'quero comprar algo?', '2020-11-02 23:28:07'),
(4, 'Joao martins', ' qual o horário de funcionamento?', '2020-11-12 23:43:34'),
(5, 'Pedro oliveira', 'tem algum produto em promoção?', '2020-11-12 23:43:43'),
(6, 'Carlos souza', 'como faço para devolver um produto?', '2020-11-12 23:46:51');


ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `img` (`img`);



