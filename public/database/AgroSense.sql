create database agroSense;
use agroSense;

create table empresa(
id int primary key auto_increment,
nome Varchar(50)not null, 
cnpj char(18) not null,
email Varchar(50) not null
);

create table cliente (
id int primary key auto_increment,
nome varchar(50) not null,
cpf char (15),
cidade varchar (70) not null,
estado char (2),
telefone varchar(20) not null,
email varchar(50) not null,
senha varchar(30) not null,
fkEmpresa int unique, constraint fkEmpresaCliente foreign key (fkEmpresa) references empresa(id)
);


create table plantacao (
id int primary key auto_increment,
tamanho_hectares int not null,
producao_media_hectares int not null,
fkCliente int, constraint fkClientePlantacao foreign key (fkCliente) references cliente(id)
);


create table sensor (
id int primary key auto_increment,
localizacao varchar(100),
sts varchar(20), constraint chkStatusSensor CHECK (sts in('Ativo','Inativo','Manutenção')),
fkPlantacao int, constraint fkSensorPlantacao foreign key (fkPlantacao) references plantacao(id)
);

create table capturaDoSensorUmidade (
id int primary key auto_increment,
data_horario_medicao datetime default current_timestamp(),
porcentagem decimal (5,2), constraint chkPorcentagem check(porcentagem between 0 and 100),
fkSensor int, constraint fkSensorDados foreign key (fkSensor) references sensor(id)
);


INSERT INTO empresa (nome, cnpj, email) VALUES
('Novos Morangos', '45.290.600/0001-00','morangos@novosmorangos.com'),
('Familia Agro', '11.900.231/0001-11', 'suporte@familiagro.com'),
('Campos Belos', '90.591.110/0001-22', 'campo@camposbelos.com'),
('Fazenda Nova', '43.543.302/0001-33', 'Fazenda@fazendanova.com'),
('Mais Agro', '75.261.743/0001-44', 'Mais@agro.com');

INSERT INTO cliente (nome, cpf, cidade, estado, telefone, email, senha, fkEmpresa) VALUES
('José','123.345.678-40', 'Campinas', 'SP','11999999999','josédasilva@novosmorangos.com','AmoMorangos@1', 1),
('Carla','231.456.789-11', 'Atibaia', 'SP', '11988888888','carlamoreira@familiagro.com','123FamIlia15', 2),
('Manoel','343.567.890/-22', 'Curitiba', 'PR', '41977777777','manoelcampos@camposbelos.com','Senha123', 3),
('Giulia','454.678.901-33', 'Belo Horizonte', 'MG', '31966666666','giuliaalmeida@fazendanova.com', 'fazenda2024A', 4),
('Barbara','567.789.012-44', 'Porto Alegre', 'RS', '51955555555','barbaragomes@agro.com','agro1256', 5);

INSERT INTO plantacao (tamanho_hectares, producao_media_hectares) VALUES
(1,55000),
(1,50000),
(1,60000),
(1,57000),
(1,55000);

INSERT INTO sensor (localizacao, sts, fkCliente, fkPlantacao) VALUES
('Estufa A - Linha 1', 'Ativo', 1, 1),
('Estufa A - Linha 2', 'Ativo', 1, 1),
('Estufa B - Centro', 'Manutenção', 2, 2),
('Campo Aberto - Setor 1', 'Ativo', 3, 3),
('Estufa C - Fundo', 'Inativo', 4, 4);

INSERT INTO capturaDoSensorUmidade (porcentagem, fkSensor) VALUES
(default, 1),
(default, 2),
(default, 3),
(default, 4),
(default, 5);


select*from capturaDoSensorUmidade;