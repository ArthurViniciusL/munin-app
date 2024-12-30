import 'dotenv/config';

// imports:
import { fastify } from "fastify";
import { routes } from "./routes/routes.js";
import { fastifyCors } from "@fastify/cors";
import mongodb from "@fastify/mongodb";


// create "server":
const server = fastify();

// mongodb:
server.register(mongodb, {
    forceClose: true,
    url: process.env.MONGO_URL
});

// rotas:
server.register(fastifyCors, { origin: '*' });
server.register(routes);

// start server:
server.listen({
    port: 3333,
}, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server running!`); //on: ${address}
});

