import 'dotenv/config';

// imports:
import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { fastifyMultipart } from "@fastify/multipart";
import { fastifyStatic } from "@fastify/static";
import { fastifyRateLimit } from "@fastify/rate-limit";

import path from "path";

import mongodb from "@fastify/mongodb";

import { routes } from "./routes/routes.js";
import deleteData from './scripts/deleteData.js';

import cron from "node-cron";

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
server.register((fastifyStatic), {
    root: path.join(__dirname, 'tmp/uploads'),
    prefix: '/uploads/', // URL pública para acessar as imagens
});

/* await server.register(fastifyRateLimit, {
    max: 100,
    timeWindow: '1 minute',
    allowList: ['127.0.0.1', '10.100.2.9'],
}); */

server.register(routes);

// start server:
server.listen({
    port: 3333,
}, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server running`); //on: ${address}
});

/* Cron job agendado para ser executado todos os dias às 20h e 10 minutos */
const _10min = 10;
const _20hrs = 20;
cron.schedule(`${_10min} ${_20hrs} * * *`, () => { deleteData(server.mongo.db) });
