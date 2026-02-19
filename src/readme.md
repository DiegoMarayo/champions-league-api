# ⚽ Champions League Players API

API REST desenvolvida com **Node.js + Express + TypeScript** para gerenciamento de jogadores e clubes de futebol europeu.

Este projeto foi criado como parte dos meus estudos em backend durante o bootcamp da DIO, com o objetivo de aprender na prática como funciona a construção de uma API estruturada em camadas, tratamento de erros, validação de dados e boas práticas REST.

---

## 🚀 Tecnologias utilizadas

* Node.js
* Express
* TypeScript
* Zod (validação de dados)
* CORS
* TSX (execução em ambiente de desenvolvimento)

---

## 📚 Objetivos do projeto

Este projeto foi desenvolvido com foco em aprender:

* Criação de APIs REST
* Arquitetura em camadas (Controller → Service → Repository)
* Validação de dados de entrada
* Tratamento global de erros
* Semântica correta de status HTTP
* Organização de código backend

---

## 🏗️ Arquitetura

A aplicação foi estruturada em camadas para separar responsabilidades:

```
src/
 ├── controllers   → recebe as requisições HTTP
 ├── services      → regras de negócio
 ├── repositories  → acesso aos dados
 ├── middlewares   → validação e tratamento de erros
 ├── schemas       → validação com Zod
 ├── models        → interfaces TypeScript
 └── data          → dados simulando banco de dados
```

Fluxo da requisição:

```
Request → Routes → Middleware → Controller → Service → Repository → Response
```

---

## 🔍 Funcionalidades

### Players

* Listar todos os jogadores
* Buscar jogador por ID
* Criar jogador
* Atualizar estatísticas do jogador
* Remover jogador

### Clubs

* Listar todos os clubes

---

## 📡 Endpoints

### Players

| Método | Rota             | Descrição                |
| ------ | ---------------- | ------------------------ |
| GET    | /api/players     | Lista todos os jogadores |
| GET    | /api/players/:id | Busca jogador por ID     |
| POST   | /api/players     | Cria um novo jogador     |
| PATCH  | /api/players/:id | Atualiza estatísticas    |
| DELETE | /api/players/:id | Remove jogador           |

### Clubs

| Método | Rota       | Descrição             |
| ------ | ---------- | --------------------- |
| GET    | /api/clubs | Lista todos os clubes |

---

## 🧪 Exemplo de criação de jogador (POST)

```
POST /api/players
Content-Type: application/json
```

```json
{
  "name": "Ronaldo Fenômeno",
  "club": "Real Madrid",
  "nationality": "Brazil",
  "position": "Forward",
  "statistics": {
    "Overall": 95,
    "Pace": 90,
    "Shooting": 96,
    "Passing": 80,
    "Dribbling": 94,
    "Defending": 40,
    "Physical": 92
  }
}
```

---

## ⚠️ Validação de dados

A API utiliza **Zod** para validar os dados recebidos.
Requisições inválidas retornam:

```
400 Bad Request
```

Isso evita que dados incorretos sejam inseridos no sistema.

---

## ❌ Tratamento de erros

A aplicação possui um **middleware global de erros**, garantindo que falhas internas não derrubem o servidor.

Erros inesperados retornam:

```
500 Internal Server Error
```

---

## 📊 Status HTTP utilizados

| Status | Significado                     |
| ------ | ------------------------------- |
| 200    | Sucesso                         |
| 201    | Recurso criado                  |
| 204    | Recurso removido (sem conteúdo) |
| 400    | Requisição inválida             |
| 404    | Recurso não encontrado          |
| 500    | Erro interno do servidor        |

---

## ▶️ Como executar o projeto

### 1) Clonar o repositório

```
git clone https://github.com/DiegoMarayo/champions-league-api.git
```

### 2) Instalar dependências

```
npm install
```

### 3) Rodar em modo desenvolvimento

```
npm run start:watch
```

Servidor iniciará em:

```
http://localhost:3333
```

---

## 🧠 Aprendizados

Durante o desenvolvimento deste projeto aprendi na prática:

* Diferença entre tipagem TypeScript e validação em runtime
* Por que não confiar nos dados do cliente
* Uso correto dos códigos de status HTTP
* Separação de responsabilidades no backend
* Tratamento centralizado de erros

---

## 📌 Observação

Este projeto utiliza um **banco de dados em memória** (array) apenas para fins educacionais.
O próximo passo será integrar com um banco de dados real (ex: PostgreSQL).

---

## 👨‍💻 Autor

Desenvolvido por **Diego Marayo**

Em transição de carreira para a área de desenvolvimento backend.
