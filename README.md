### CLEAN ARCHITECTURE

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://www.lambdatest.com/blog/wp-content/uploads/2024/03/Architecture-1.png" width="500" alt="Brain-ag logo" /></a>
</p>

---

### Descrição

O kafka-course-subscription é um microsserviço que utiliza Kafka para integrar dois serviços principais:

- Purchase (Producer): Responsável pelo processamento de compras. Sempre que um usuário realiza uma compra, o serviço publica um evento no Kafka.

- Classroom (Consumer): Consome os eventos de compra e automaticamente matricula o cliente no curso adquirido.

Esse fluxo garante que, ao realizar uma compra, o usuário seja imediatamente inscrito no curso correspondente.

### Tecnologias usadas

- Node.js
- Express
- Postgres
- Prisma
- Docker
- Kafka
- Typescript

### Estrutura do Projeto

### Purchase:

<pre style="overflow-x: auto; max-width: 1000px; white-space: pre;">
purchase/
│── prisma/                     # Definição do esquema do banco (Prisma)
│   ├── schema.prisma
│── src/
│   ├── application/            # Camada de aplicação
│   │   ├── adapters/           # Adaptadores para comunicação externa
│   │   │   ├── messaging-adapter.ts
│   │   ├── controllers/        # Controllers das rotas HTTP
│   │   │   ├── purchase-product-controller.ts
│   │   ├── repositories/       # Repositórios de acesso ao banco
│   │   │   ├── customer-repository.ts
│   │   │   ├── product-repository.ts
│   │   │   ├── purchase-repository.ts
│   │   ├── usecases/           # Casos de uso da aplicação
│   │   │   ├── purchase-product.ts
│   ├── domain/                 # Entidades e regras de negócio
│   │   ├── customer.ts
│   │   ├── product.ts
│   │   ├── purchase.ts
│   ├── infra/                  # Infraestrutura do sistema
│   │   ├── database/prisma/    # Configuração do Prisma e banco de dados
│   │   │   ├── prisma.ts
│   │   ├── factories/          # Fábricas para instanciar dependências
│   │   │   ├── purchase-product-factory.ts
│   │   ├── http/               # Configuração do servidor HTTP
│   │   │   ├── routes/
│   │   │   ├── index.ts
│   │   ├── messaging/kafka/    # Integração com Kafka
│   │   │   ├── adapters/
│   │   │   │   ├── kafka-messaging-adapter.ts
│   │   │   ├── kafka.ts
│   │   │   ├── producer.ts
│── docker-compose.yml          # Configuração dos containers (PostgreSQL, Kafka, Zookeeper)
│── package.json                # Dependências do projeto
│── tsconfig.json               # Configuração do TypeScript
</pre>

### Classroom:

<pre style="overflow-x: auto; max-width: 1000px; white-space: pre;">
classroom/
│── prisma/                     # Definição do esquema do banco (Prisma)
│   ├── migrations/
│   ├── schema.prisma
│── src/
│   ├── application/            # Camada de aplicação
│   │   ├── repositories/       # Repositórios de acesso ao banco
│   │   │   ├── courses-repository.ts
│   │   │   ├── enrollments-repository.ts
│   │   │   ├── students-repository.ts
│   │   ├── usecases/           # Casos de uso da aplicação
│   │   │   ├── enroll-course-to-student.ts
│   ├── core/logic/             # Implementação de lógica auxiliar
│   │   ├── Maybe.ts
│   ├── domain/                 # Entidades e regras de negócio
│   │   ├── course.ts
│   │   ├── enrollment.ts
│   │   ├── student.ts
│   ├── infra/                  # Infraestrutura do sistema
│   │   ├── database/prisma/    # Configuração do Prisma e banco de dados
│   │   │   ├── repositories/
│   │   │   │   ├── prisma-courses-repository.ts
│   │   │   │   ├── prisma-enrollments-repository.ts
│   │   │   │   ├── prisma-students-repository.ts
│   │   │   ├── prisma.ts
│   │   ├── http/               # Configuração do servidor HTTP
│   │   │   ├── index.ts
│   │   ├── messaging/kafka/    # Integração com Kafka
│   │   │   ├── kafka.ts
│── docker-compose.yml          # Configuração dos containers (PostgreSQL, Kafka, Zookeeper)
│── package.json                # Dependências do projeto
│── tsconfig.json               # Configuração do TypeScript
</pre>
