// criar o server.js
// add "type": "module", no packge.json

// import:
import { fastify } from "fastify";

// import db
import { DataBaseMemory } from "./db-memory.js";

// criando o "server"
const server = fastify();

// add db:
const db = new DataBaseMemory();

// rotas:

server.get("/pictures", (request) => {
    /** query params node js:
     *  const search = request.query.search;
     *  console.log(search)
     *  const pictures = db.list(search);
    **/

    const pictures = db.list();


    return pictures;
});

server.post("/pictures", (request, reply) => {

    const {
        title,
        about,
        infos
    } = request.body

    db.create(
        {
            title: title,
            about: about,
            infos: infos
        }
    )
    console.log(db.list());
    return reply.status(201).send();
});

server.put("/pictures/:id", (request, reply) => {

    const id = request.params.id;
    const {
        title,
        about,
        infos
    } = request.body


    db.update(id, {
        title: title,
        about: about,
        infos: infos
    });

    return reply.status(204).send()
});

server.delete("/pictures/:id", (request, reply) => {

    const id = request.params.id;
    db.delete(id)

    return reply.status(204).send()
});

// porta do servidor
server.listen({
    port: 3333,
});

