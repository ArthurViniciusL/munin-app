import { getPictures, setPicture } from "../services/schemas.js";

// import { DataBaseMemory } from "../db-memory/db-memory.js";
// const db = new DataBaseMemory();

import uploadMiddleware from "../config/multer.js";

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

    server.post("/upload", {
        preHandler: uploadMiddleware.single('file'),
    }, async (request, reply) => {

        const file = request.file;
        if (!file) {
            return reply.status(400).send({
                error: 'No file uploaded.'
            });
        }

        try {
            const db = request.server.mongo.db;

            const result = await setPicture(db, {
                name: file.filename,
                path: file.path,
                url: `${process.env.SERVER_UPLOAD}/${file.filename}`
            });

            reply.status(201).send({
                message: 'Image uploaded successfully!',
                insertId: result.insertId
            });
        } catch (error) {
            reply.status(500).send({
                error: 'Error uploading image',
                details: error.message
            });
        }

        // post logs:
        // console.log('Request body:', request.body, '\nRequest file:', request.file);
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