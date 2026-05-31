create database agroSense;
use agroSense;


create table cliente (
id int primary key auto_increment,
nome varchar(50) not null,
cnpj char (14) not null,
cep char(8) not null,
complemento varchar(45) not null
);

create table usuario(
id int primary key auto_increment,
nome varchar(50)not null, 
cpf char(11) not null,
telefone char(11) not null,
email varchar(50) not null,
senha varchar(30),
data_cadastro datetime default current_timestamp(),
fkCliente int,
constraint fk_usu_cliente foreign key (fkCliente)
  references cliente(id)
);

create table plantacao (
id int primary key auto_increment,
tamanho_hectares int not null,
fkCliente int, constraint fkClienteInfoPlantacao foreign key (fkCliente) references cliente(id)
);

create table sensor (
id int primary key auto_increment,
localizacao varchar(100),
sts bool,
fkPlantacao int, constraint fkPlantacaoSensor foreign key (fkPlantacao) references plantacao(id)
);

create table captura (
id int auto_increment,
data_horario_medicao datetime default current_timestamp(),
valor decimal (5,2),
fkSensor int, 
constraint pksensor_captura primary key (id, fkSensor),
constraint fkSensorDados foreign key (fkSensor) references sensor(id)
);

create table fale_conosco (
id_fale_conosco int auto_increment primary key,
nome varchar(100) not null,
email varchar(150) not null,
mensagem text not null
);

-- inserts para testes

INSERT INTO cliente (nome, cnpj, cep, complemento) VALUES
('Novos Morangos', '45290600000100', '13010000', 'Galpão A'),
('Familia Agro', '11900231000111', '12940000', 'Sede'),
('Campos Belos', '90591110000122', '80010000', 'Fazenda Principal'),
('Fazenda Nova', '43543302000133', '30110000', 'Setor Administrativo'),
('Mais Agro', '75261743000144', '90010000', 'Bloco B');


INSERT INTO usuario (nome, cpf, telefone, email, senha, fkCliente) VALUES
('José da Silva', '12334567840', '11999999999','jose@novosmorangos.com', 'AmoMorangos@1', 1),
('Carla Moreira', '23145678911', '11988888888','carla@familiagro.com', '123Familia15', 2),
('Manoel Campos', '34356789022', '41977777777','manoel@camposbelos.com', 'Senha123', 3),
('Lorena Almeida', '45467890133', '31966666666','Lorena@fazendanova.com', 'Fazenda2024A', 4),
('Barbara Rocha', '56778901244', '51955555555','barbara@maisagro.com', 'Agro1256', 5);
 
INSERT INTO plantacao (tamanho_hectares, fkCliente) VALUES
(10, 1),
(15, 2),
(8, 3),
(20, 4),
(12, 5);

INSERT INTO sensor (localizacao, sts, fkPlantacao) VALUES
('Estufa A - Linha 1', TRUE, 1),
('Estufa A - Linha 2', TRUE, 1),
('Estufa B - Centro', FALSE, 2),
('Campo Aberto - Setor 1', TRUE, 3),
('Estufa C - Fundo', FALSE, 4);

INSERT INTO captura (data_horario_medicao, valor, fkSensor) VALUES
('2026-05-30 06:12:45', 72.50, 1),
('2026-05-30 08:37:19', 68.30, 2),
('2026-05-30 11:05:52', 55.10, 3),
('2026-05-30 14:48:27', 80.00, 4),
('2026-05-30 17:23:11', 61.75, 5);


--select do grafico 1
SELECT
    HOUR(c.data_horario_medicao) AS horario,
    c.valor
  FROM captura c
    JOIN sensor s ON c.fkSensor = s.id
    JOIN plantacao p ON s.fkPlantacao = p.id
    ORDER BY c.data_horario_medicao;

 -- select do grafico 2
SELECT
    SUM(CASE WHEN c.valor < 65 THEN 1 ELSE 0 END) AS seco,
    SUM(CASE WHEN c.valor BETWEEN 65 AND 75 THEN 1 ELSE 0 END) AS ideal,
    SUM(CASE WHEN c.valor > 75 THEN 1 ELSE 0 END) AS umido
	FROM captura c
	JOIN sensor s ON c.fkSensor = s.id
	JOIN plantacao p ON s.fkPlantacao = p.id;

-- select do grafico 3
SELECT 
 SUM(CASE WHEN s.sts= TRUE THEN 1 ELSE 0 END) AS ativos,
 SUM(CASE WHEN s.sts = FALSE THEN 1 ELSE 0 END) AS inativos
  FROM sensor s 
  JOIN plantacao p ON s.fkPlantacao = p.id;
 

-- select da kpi1
SELECT
    MAX(valor) AS maiorUmidade,
    MIN(valor) AS menorUmidade
  FROM captura;
    
-- select da kpi2
SELECT COUNT(*) AS totalBaixas
  FROM captura
    WHERE valor < 65;
    
-- select da kpi3
SELECT id
  FROM sensor
    WHERE sts = FALSE;
    
