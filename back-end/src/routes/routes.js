// import db
import { DataBaseMemory } from "../db-memory/db-memory.js";
import { getPictures } from "../services/schemas.js";

// const db = new DataBaseMemory();

export async function routes(server, options) {

    server.get("/pictures", async (request, reply) => {
        try {
            const db = server.mongo.db;
            const pictures = await getPictures(db)

            reply.send({
                data: pictures
            })
        } catch (err) {
            reply.status(500).send({
                error: 'no connection!'
            })
        }


        return pictures;
    });

    server.post("/pictures", async (request, reply) => {
        const {
            picture,
            url,
            timestamp
        } = request.body
    
        db.create(
            {
                picture,
                url,
                timestamp
            }
        )
        console.log(db.list());
        return reply.status(201).send();

        /*

        try {
            const db = server.mongo.db;
            const collection = db.collection('test');
            const result = await collection.insertOne(req.body); // Insere o objeto enviado no corpo da requisição
            reply.send({ message: 'Objeto inserido com sucesso!', result });
        } catch (err) {
            reply.status(500).send({ error: 'Erro ao inserir o objeto' });
        }
            */
    });

    server.put("/pictures/:id", (request, reply) => {

        const id = request.params.id;
        const {
            picture,
            url,
            timestamp
        } = request.body


        db.update(id, {
            picture: picture,
            url: url,
            timestamp: timestamp
        });

        return reply.status(204).send()
    });

    server.delete("/pictures/:id", (request, reply) => {

        const id = request.params.id;
        db.delete(id)

        return reply.status(200).send()
    });
};