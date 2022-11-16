-- DROP DATABASE IF EXISTS cardapio;
CREATE DATABASE IF NOT EXISTS cardapio;
USE cardapio;

CREATE TABLE categorias (
idCategoria int not null auto_increment primary key,
nomeCategoria varchar(30),
url_imagem varchar(250)
);

CREATE TABLE produtos (
idProduto int not null auto_increment primary key,
idCategoria int,
nome varchar(100),
descricao varchar(300),
imagem varchar(250),
valor decimal(5,2),
CONSTRAINT fk_cat_prod
	FOREIGN KEY (idCategoria)
    REFERENCES categorias(idCategoria)
);

CREATE TABLE clientes(
idCliente int not null auto_increment primary key,
nome varchar (50),
sobrenome varchar(100),
cpf char(11),
nrCelular char(15),
email varchar(150)
);

CREATE TABLE pedidos (
idPedido int not null auto_increment primary key,
idProduto int,
idCliente int,
quantidade int,
precoTotal decimal(10,2),
CONSTRAINT fk_ped_prod
	FOREIGN KEY (idProduto)
    REFERENCES produtos(idProduto),
CONSTRAINT fk_ped_cli
	FOREIGN KEY (idCliente)
    REFERENCES clientes(idCliente)
);

CREATE TABLE vendas(
idVendas int not null auto_increment primary key,
idPedido int,
dataAtual date,
horaAtual time,
total decimal(10,2),
CONSTRAINT fk_vendas_pedidos
	FOREIGN KEY (idPedido)
    REFERENCES pedidos (idPedido)
);

INSERT INTO categorias (nomeCategoria,url_imagem)
VALUES ('Pratos', 'https://classic.exame.com/wp-content/uploads/2016/09/size_960_16_9_prato-com-arroz-feijao-ovo-batata-frita-e-carne2.jpg?quality=70&strip=info&w=960'),
('Lanches', 'https://uploads.metropoles.com/wp-content/uploads/2022/05/26192622/Dia-do-Hamburguer-Gran-Bier-600x400.jpg'),
('Sobremesas', 'https://2.bp.blogspot.com/-RgBXSVCq8gQ/VxL8I22pgSI/AAAAAAAAGhw/ztgVDog3dEo2JxTHKHt3J76svdNYS91-wCLcB/w640-h312/sobremesas-no-pote.jpg'),
('Bebidas', 'https://conteudo.imguol.com.br/c/entretenimento/74/2022/09/13/drinques-bebida-alcoolica-tequila-cerveja-chopp-gim-martini-alcool-copos-tacas-1663094165597_v2_900x506.jpg.webp');

INSERT INTO produtos (idCategoria, nome, descricao, imagem, valor)
VALUES (1, 'Rosbife com batatas', 'Rosbife fatiado com batata e cebola. Acompanha arroz branco', 'https://conteudo.imguol.com.br/c/entretenimento/ec/2020/07/27/rosbife-ao-porto-e-tomilho-com-batatas-douradas-1595878125646_v2_900x506.jpg.webp', 85.45),
(1,  'Macarronada da Nona', 'Macarronada com molhho de carne moída. Acompanha queijo parmesão ralado', 'https://www.lopessupermercados.com.br/portalrevista/wp-content/uploads/2018/06/shutterstock_413580649-e1529706570772.jpg', 35);