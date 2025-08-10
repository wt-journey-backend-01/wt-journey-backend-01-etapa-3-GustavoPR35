# 🚀 Instruções de Configuração e Execução

## 📋 Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **Docker** e **Docker Compose**
- **npm** ou **yarn**

## 🐳 1. Configuração do Banco de Dados

### Subir o PostgreSQL com Docker:

```bash
# Subir APENAS o container do PostgreSQL (em background)
docker compose up postgres-db -d

# OU subir todos os serviços definidos no docker-compose.yml
docker compose up -d

# Verificar se o container está rodando
docker ps
```

**📝 Explicação:**
- **`postgres-db`** = nome do serviço definido no `docker-compose.yml`
- **`-d`** = executa em background (detached mode)

**Aguarde alguns segundos** para o PostgreSQL inicializar completamente.

## 📦 2. Instalação das Dependências

```bash
# Instalar dependências do projeto
npm install
```

## 🔧 3. Configuração do Banco

### Executar Migrations:

```bash
# Criar as tabelas no banco de dados
npx knex migrate:latest
```

### Executar Seeds:

```bash
# Inserir dados iniciais no banco
npx knex seed:run
```

## 🏁 4. Iniciar a Aplicação

```bash
# Iniciar o servidor
npm start
```

**A API estará disponível em:** `http://localhost:3000`

**Documentação Swagger:** `http://localhost:3000/docs`

## 📝 Comandos Úteis

### Verificar status do banco:
```bash
# Conectar ao PostgreSQL
docker exec -it policia_db psql -U postgres

# Listar databases
\l

# Listar tabelas (dentro de um database)
\dt

# Sair do psql
\q
```

### Reset completo do banco:
```bash
# Reverter todas as migrations
npx knex migrate:rollback --all

# Aplicar migrations novamente
npx knex migrate:latest

# Executar seeds novamente
npx knex seed:run
```

### Parar containers:
```bash
# Parar apenas o PostgreSQL
docker compose down

# Parar e remover volumes (⚠️ APAGA TODOS OS DADOS)
docker compose down -v
```

## 🆘 Solução de Problemas

### Erro de conexão com o banco:
1. Verifique se o Docker está rodando
2. Verifique se o container PostgreSQL está ativo: `docker ps`
3. Aguarde alguns segundos após `docker compose up`

### Erro "duplicate key value":
1. Execute: `npx knex migrate:rollback --all`
2. Execute: `npx knex migrate:latest`
3. Execute: `npx knex seed:run`

### Erro de porta em uso:
- Verifique se a porta 5432 não está sendo usada por outro PostgreSQL
- Ou mude a porta no `docker-compose.yml`