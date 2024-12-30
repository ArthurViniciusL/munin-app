import { getPictures, setPicture } from "../services/schemas.js";

// import { DataBaseMemory } from "../db-memory/db-memory.js";
// const db = new DataBaseMemory();

export async function routes(server, options) {
    server.get("/pictures", async (request, reply) => {
        try {
            const db = server.mongo.db;
            const pictures = await getPictures(db);
            // return pictures
            reply.send({
                message: "Connection successful!",
                data: pictures

            })
        } catch (error) {
            reply.status(500).send({
                error: 'Error establishing connection :(',
                details: error.message
            })
        }
    });

    server.post("/pictures", async (request, reply) => {
        const body = request.body;
        try {
            const db = request.server.mongo.db;
            const result = await setPicture(db, body);

            reply.status(201).send({
                message: 'Image sent successfully!',
                insertId: result.insertId
            })
        } catch (error) {
            reply.status(500).send({
                error: 'Error sending image',
                details: error.message
            })
        }
    });

    /*
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
    */
};