# Estágio de produção
FROM node:20.18-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências de produção
RUN npm install

COPY ./.env ./.env

# Copia o restante do código-fonte
COPY . .

# Expõe a porta que a API vai rodar
EXPOSE 3333

# Comando para rodar a aplicação
CMD ["npm", "start"]