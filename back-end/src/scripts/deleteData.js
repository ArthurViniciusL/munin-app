import { deltePictures } from "../services/schemas.js";
import deleteUploads from "./deleteUploads.js";

export default async function deleteData(db) {
    //const db = server.mongo.db;
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const clock = `${hours}:${minutes}:${seconds}`;
    const scheduling = "20:10:0";

    if (hours >= 20 && clock === scheduling) {
        await deltePictures(db);
        await deleteUploads();
        console.log(`🗑️ Data deleted at ${date}`);
    }
    //console.log(`${date} - ${clock}:`);
}