# Usar a imagem do Node.js na versão 20.18-alpine
FROM node:20.18-alpine

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos necessários para instalar as dependências
COPY package*.json ./

# Instalar as dependências sem pacotes de desenvolvimento
RUN npm install --omit=dev

# Copiar todo o código do projeto para dentro do container
COPY . .

# Copiar o arquivo .env para garantir as variáveis de ambiente no container
COPY .env .env

# Expor a porta que a aplicação irá rodar
EXPOSE 3333

# Comando para rodar a aplicação no modo de produção
CMD ["npm", "run", "start"]