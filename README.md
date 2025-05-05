# Munin

## Sobre o Projeto

> O Munin é uma plataforma desenvolvida para facilitar o compartilhamento de imagens entre os visitantes e a loja do Museu de Arte e Ciência (MAC) de Campina Grande. Inspirado no corvo de Odin, símbolo do conhecimento e da memória, o Munin permite que os visitantes enviem as artes criadas durante a exposição, promovendo uma conexão interativa entre o público e o museu. Além disso, o Munin oferece à loja do MAC uma solução integrada para comercializar produtos personalizados, criados a partir das artes elaboradas pelos visitantes.

O Munin foi construído com as seguintes tecnologias:
- Front-end: Next.js
- Back-end: Node.js com Fastify
- Banco de Dados: MongoDB

---

## Como rodar?

### 0. Clone o repositório
```
git clone https://github.com/seu-usuario/munin.git
```

### 1. Através do Docker
> A aplicação pode ser excutada através do Docker compose, mas para facilitar a excução eu recomendo que utilize o shell script `run-app.sh` com o comando:
```
chmod +x run-app.sh && ./run-app.sh
```

### 2. Através do npm:

#### 2.2. Instale as dependências:

##### Front-end:
```
cd front-end
```

```
npm install
```

```
npm run dev
```

##### Back-end:
```
cd back-end
```

```
npm install
```

```
npm run dev
```

ou:

```
./run.sh
```
> Para quando você já tiver configurado o banco de dados.

--- 

## 4. Sobre o banco de dados:
Eu utilizei mongodb dentro de uma imagem docker e você pode baixá-la através do docker hub: .

