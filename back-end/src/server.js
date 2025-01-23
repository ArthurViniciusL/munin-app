import 'dotenv/config';

// imports:
import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { fastifyMultipart } from "@fastify/multipart";
import { fastifyStatic } from "@fastify/static"

import path from "path";

import mongodb from "@fastify/mongodb";

import { routes } from "./routes/routes.js";

const server = fastify({ logger: false });

const __dirname = path.dirname(new URL(import.meta.url).pathname);

// mongodb:
server.register(mongodb, {
    forceClose: true,
    url: process.env.MONGO_URL
});

// registers:
server.register(fastifyCors, { origin: '*' });
server.register(fastifyMultipart);
server.register(routes);
server.register((fastifyStatic), {
    root: path.join(__dirname, 'tmp/uploads'),
    prefix: '/uploads/', // URL pública para acessar as imagens
});

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