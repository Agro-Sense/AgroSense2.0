
    create database agroSense;
    use agroSense;


    create table informacao_do_cliente (
    id int primary key auto_increment,
    nomeCliente varchar(50) not null,
    cnpj char (18),
    cidade varchar (70) not null,
    estado char (2),
    dataCadastro date default (current_date),
    telefone varchar(20) not null,
    email varchar(50) not null,
    senha varchar(30) not null,
    fkEmpresa int unique, constraint fkEmpresaCliente foreign key (fkEmpresa) references informacao_da_empresa(id)
    );

    create table informacao_da_empresa(
    id int primary key auto_increment,
    nomeEmpresa Varchar(50)not null,
    cnpjEmpresa char(18) not null,
    emailEmpresa Varchar(50) not null
    );


    create table informacao_da_plantacao (
    id int primary key auto_increment,
    area_de_plantacao_hectares int not null,
    producao_media_hectares int not null,
    fkCliente int, constraint fkClienteInfoPlantacao foreign key (fkCliente) references informacao_do_cliente(id)
    );

    create table sensor (
    id int primary key auto_increment,
    localizacao varchar(100),
    sts varchar(20), constraint chkStatusSensor CHECK (sts in('Ativo','Inativo','Manutenção')),
    fkCliente int, constraint fkClienteSensor foreign key (fkCliente) references informacao_do_cliente(id),
    fkPlantacao int, constraint fkSensorPlantacao foreign key (fkPlantacao) references informacao_da_plantacao(id)
    );

    create table dados_dos_sensores (
    id int primary key auto_increment,
    data_horario_medicao datetime default current_timestamp(),
    porcentagem_umidade decimal (5,2), constraint chkPorcentagem check(porcentagem_umidade between 0 and 100),
    fkSensor int, constraint fkSensorDados foreign key (fkSensor) references sensor(id)
    );


    INSERT INTO informacao_do_cliente (nome, cnpj, cidade, estado, telefone, email, senha, fkCadastro) VALUES
    ('José','12.345.678/0001-00', 'Campinas', 'SP','11999999999','josédasilva@novosmorangos.com','AmoMorangos@1', 1),
    ('Carla','23.456.789/0001-11', 'Atibaia', 'SP', '11988888888','carlamoreira@familiagro.com','123FamIlia15', 2),
    ('Manoel','34.567.890/0001-22', 'Curitiba', 'PR', '41977777777','manoelcampos@camposbelos.com','Senha123', 3),
    ('Giulia','45.678.901/0001-33', 'Belo Horizonte', 'MG', '31966666666','giuliaalmeida@fazendanova.com', 'fazenda2024A', 4),
    ('Barbara','56.789.012/0001-44', 'Porto Alegre', 'RS', '51955555555','barbaragomes@agro.com','agro1256', 5);

    INSERT INTO informacao_da_empresa (nomeEmpresa, cnpjEmpresa, emailEmpresa) VALUES
    ('Novos Morangos', '45.290.600/0001-00','morangos@novosmorangos.com'),
    ('Familia Agro', '11.900.231/0001-11', 'suporte@familiagro.com'),
    ('Campos Belos', '90.591.110/0001-22', 'campo@camposbelos.com'),
    ('Fazenda Nova', '43.543.302/0001-33', 'Fazenda@fazendanova.com'),
    ('Mais Agro', '75.261.743/0001-44', 'Mais@agro.com');


    INSERT INTO informacao_da_plantacao (area_de_plantacao_hectares, producao_media_hectares, fkCadastro) VALUES
    (1, 5000,'', 1),
    (2, 8000, 2),
    (1, 4500, 3),
    (3, 12000, 4),
    (1, 6000, 5);

    INSERT INTO sensor (localizacao, sts, fkCadastro, fkPlantacao) VALUES
    ('Estufa A - Linha 1', 'Ativo', 1, 1),
    ('Estufa A - Linha 2', 'Ativo', 1, 1),
    ('Estufa B - Centro', 'Manutenção', 2, 2),
    ('Campo Aberto - Setor 1', 'Ativo', 3, 3),
    ('Estufa C - Fundo', 'Inativo', 4, 4);

    INSERT INTO dados_dos_sensores (porcentagem_umidade, fkSensor) VALUES
    (default, 1),
    (default, 2),
    (default, 3),
    (default, 4),
    (default, 5);