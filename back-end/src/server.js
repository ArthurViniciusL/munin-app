// criar o server.js
// add "type": "module", no packge.json

// import:
import { fastify } from "fastify";
import { routes } from "./routes/routes.js";

// criando o "server"
const server = fastify();

// rotas:
server.register(routes);

// porta do servidor
server.listen({
    port: 3333,
}, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server running!`); //on: ${address}
});

