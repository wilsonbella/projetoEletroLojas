CREATE DATABASE IF NOT EXISTS `produtosepedidos` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `produtosepedidos`;

-- Criando a tabela categorias
DROP TABLE IF EXISTS `categorias`;
CREATE TABLE IF NOT EXISTS `categorias` (
  `idcategoria` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(100) NOT NULL,
  PRIMARY KEY (`idcategoria`)
) ENGINE=InnoDB AUTO_INCREMENT DEFAULT CHARSET=utf8;

-- Inserindo valores na tabela categorias
INSERT INTO `categorias` (`idcategoria`, `categoria`) VALUES
(1, 'Geladeira'),
(2, 'Microondas'),
(3, 'Fogao'),
(4, 'Lava-loucas'),
(5, 'Lava-roupas'),
(6, 'Adega'),
(7, 'Ar-condicionado'),
(8, 'Filtro'),
(9, 'Cafeteira');

-- Criando a tabela comentarios
DROP TABLE IF EXISTS `comentarios`;
CREATE TABLE IF NOT EXISTS `comentarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(80) NOT NULL,
  `msg` varchar(300) NOT NULL,
  `data` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT DEFAULT CHARSET=utf8;

-- Inserindo valores na tabela comentarios
INSERT INTO `comentarios` (`id`, `nome`, `email`, `msg`, `data`) VALUES
(1, 'Olivia Dunham', 'olivia@fringe.com', 'Melhor site de compras da internet !!!!!', '2020-12-03 23:14:44'),
(2, 'Michael Scofield', 'michael@prisonbreak.com', 'Comprei presentes para a minha família toda e ainda sobrou dinheiro para a cervejinha do final de semana !!!! Esse site é melhor do que o AliExpress =DDD', '2020-12-03 23:15:25'),
(3, 'Dexter Morgan', 'dexter@morgan.com', 'Muito bom mesmo. Frete baixo, entrega de produtos muito bem embalados e dentro do prazo. Com certeza voltarei a fazer compras aqui. Obrigada Meteoro Eletro s2', '2020-12-03 23:31:30'),
(4, 'Mussum', 'mussum@trapalhoes.com', 'Aqui vende meteoris?', '2020-12-03 23:32:00'),
(5, 'undefined', 'undefined', 'undefined', '2021-01-16 16:06:13'),
(6, 'Gabs', 'gabs@meteorit.com', 'Vem Meteoro!', '2021-01-16 16:15:53'),
(7, 'Chaves', 'chaves@vila.com', 'Não tem biscoito', '2021-01-16 16:21:51'),
(8, 'undefined', 'undefined', 'undefined', '2021-01-21 13:08:17'),
(9, 'Kiko', 'kiko@vila.com', 'Quem é filho do seu pai e da sua mãe e não é o seu irmão ?', '2021-01-21 13:13:59');

-- Criando a tabela produtos
DROP TABLE IF EXISTS `produtos`;
CREATE TABLE IF NOT EXISTS `produtos` (
  `idproduto` int(11) NOT NULL AUTO_INCREMENT,
  `idcategoria` int(11) NOT NULL,
  `descricao` varchar(150) NOT NULL,
  `preco_antigo` decimal(8,2) NOT NULL,
  `preco` decimal(8,2) NOT NULL,
  `imagem` varchar(255) NOT NULL,
  PRIMARY KEY (`idproduto`),
  KEY `fk_categoria` (`idcategoria`)
) ENGINE=InnoDB AUTO_INCREMENT DEFAULT CHARSET=utf8;

ALTER TABLE `produtos`
  ADD CONSTRAINT `fk_categoria` FOREIGN KEY (`idcategoria`) REFERENCES `categorias` (`idcategoria`);


-- Inserindo valores na tabela produtos
INSERT INTO `produtos` (`idproduto`, `idcategoria`, `descricao`, `preco_antigo`, `preco`, `imagem`) VALUES
(1, 1, 'Geladeira/Refrigerador Side By Side Frost Free Inox 504L Electrolux', '9789.05', '7789.05', './img/geladeira-eletrolux.png'),
(2, 2, 'Micro-Ondas 34L Preto Pro Series Electrolux', '4799.00', '4399.00', './img/microondas-eletrolux.png'),
(3, 2, 'Micro-ondas Branco com Função Tira Odor e Manter Aquecido 34L', '1039.10', '539.10', './img/microondas-eletrolux2.png'),
(4, 3, 'Fogão 5 Bocas Electrolux Prata Aut.com Mesa de Vidro e Tripla Chama', '2189.05', '2089.05', './img/fogao-eletrolux1.png'),
(5, 4, 'Lava-Louças Electrolux 8 Serviços e 5 velocidades Cinza', '2949.10', '2249.10', './img/lava-lou%C3%A7as1.png'),
(6, 1, 'Geladeira/Refrigerador Frost Free 310 Litros Branco Electrolux', '2299.10', '1799.10', './img/geladeira-eletrolux2.png'),
(7, 5, 'Lava e Seca 11Kg/7Kg Electrolux Prata com Wi-fI e Água Quente/Vapor', '4999.05', '4084.05', './img/lava-roupas.png'),
(8, 3, 'Fogão 4 Bocas Electrolux Branco Aut. com Timer Digital e Forno de 70L', '1249.55', '1186.55', './img/fogao-eletrolux2.png'),
(9, 6, 'Adega 8 Garrafas Com Acabamento Em Alumínio Escovado', '929.00', '674.10', './img/adega.png'),
(10, 7, 'Ar-Condicionado Inverter Split 9000 BTUs Electrolux Frio com Wi-fi - 220V', '1949.00', '1851.55', './img/ar-condicionado.png'),
(11, 8, 'Purificador de Água Prata com Painel Touch Bivolt', '729.00', '559.55', './img/purificador-agua.png'),
(12, 9, 'Cafeteira Expressionist Display LCD Programável Electrolux', '849.90', '599.90', './img/cafeteira.png');