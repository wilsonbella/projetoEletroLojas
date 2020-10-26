Criação da tabela produtos

CREATE TABLE `eletro_lojas`.`produtos` (
  `idprodutos` INT NOT NULL AUTO_INCREMENT,
  `categoria` VARCHAR(100) NOT NULL,
  `descricao` VARCHAR(150) NOT NULL,
  `preco` DECIMAL(8,2) NOT NULL,
  `preco_atual` DECIMAL(8,2) NOT NULL,
  `imagem` VARCHAR(130) NOT NULL,
  PRIMARY KEY (`idprodutos`));

Criação de inserções na tabela produtos

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

