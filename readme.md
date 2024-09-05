# **Champions League API**

Este projeto é uma API que fornece informações sobre jogadores e clubes da Champions League. A arquitetura segue o padrão N-Layers para organizar o código, separando as responsabilidades em controladores, serviços, repositórios e modelos, permitindo um desenvolvimento modular e escalável.

## **Funcionalidades**

* **Listar jogadores**: Retorna uma lista com todos os jogadores registrados.  
* **Cadastrar novo jogador**: Permite adicionar um novo jogador ao sistema.  
* **Excluir jogador**: Remove um jogador do sistema pelo seu ID.  
* **Atualizar dados de jogador**: Atualiza as informações de um jogador existente, identificado pelo ID.  
* **Buscar jogador por ID**: Retorna os detalhes de um jogador específico pelo ID.  
* **Listar clubes**: Retorna uma lista com todos os clubes registrados.

## **Implementação**

### **Listar todos os jogadores**

* **Endpoint**: `GET /players`  
* **Descrição**: Retorna uma lista de todos os jogadores.

**Exemplo de resposta**:  

json  
```json
[
  {
    "id": 1,
    "name": "Lionel Messi",
    "position": "Forward",
    "club": "Paris Saint-Germain",
    "nationality": "Argentina"
  },
  {
    "id": 2,
    "name": "Cristiano Ronaldo",
    "position": "Forward",
    "club": "Al-Nassr",
    "nationality": "Portugal"
  }
]

```
* 

### **Cadastrar novo jogador**

* **Endpoint**: `POST /players`  
* **Descrição**: Adiciona um novo jogador ao sistema.

**Exemplo de payload**:  
```json  
{
  "name": "Kylian Mbappé",
  "position": "Forward",
  "club": "Paris Saint-Germain",
  "nationality": "France"
}
```
* 

### **Excluir jogador**

* **Endpoint**: `DELETE /players/:id`  
* **Descrição**: Remove um jogador do sistema pelo seu ID.

### **Atualizar dados de jogador**

* **Endpoint**: `PATCH /players/:id`  
* **Descrição**: Atualiza as informações de um jogador específico pelo ID.

### **Buscar jogador por ID**

* **Endpoint**: `GET /players/:id`  
* **Descrição**: Retorna os detalhes de um jogador específico pelo ID.

### **Listar clubes**

* **Endpoint**: `GET /clubs`  
* **Descrição**: Retorna uma lista de todos os clubes.

## **Tecnologias Utilizadas**

* **Node.js**: Ambiente de execução JavaScript para construir a API.  
* **Express.js**: Framework para a construção de servidores em Node.js.  
* **TypeScript**: Linguagem de programação utilizada para melhorar a tipagem e a manutenção do código.  
* **Postman**: Utilizado para testar as requisições da API durante o desenvolvimento.

## **Como Utilizar**

1. Clone este repositório.  
2. Instale as dependências usando `npm install`.  
3. Inicie o servidor com o comando `npm run dev`.  
4. Utilize ferramentas como Postman para fazer requisições aos endpoints e interagir com a API.

