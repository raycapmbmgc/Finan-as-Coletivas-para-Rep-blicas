# Finanças Coletivas

## Configuração do Banco de Dados

1. Crie um banco de dados chamado:

```sql
CREATE DATABASE financas_coletivas;
```

2. Importe o arquivo `financas_coletivas.sql` disponibilizado junto ao projeto.

---

## Configuração do Ambiente

1. Copie o arquivo `.env.example`.
2. Renomeie para `.env`.
3. Configure as credenciais do MySQL:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=financas_coletivas
DB_PORT=3306
```

---

## Instalação das Dependências

Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

---

## Execução do Sistema

Execute:


```bash
node app.js
```


## Funcionalidades

* Cadastro de usuários
* Criação de grupos
* Gerenciamento de participantes
* Cadastro de metas financeiras
* Registro de despesas
* Registro de movimentações financeiras
* Controle de entradas e saídas

---

## Observações

* O MySQL deve estar em execução antes de iniciar o sistema.
* O banco de dados utilizado é `financas_coletivas`.
* Todos os valores podem ser inseridos livremente durante os testes.
* Caso ocorra erro de conexão, verifique as informações configuradas no arquivo `.env`.
