import { randomUUID } from "node:crypto";

export class DataBaseMemory {
    #pictures = new Map();

    // para query params node js
    //  list(search) {
    list() {
        return Array.from(this.#pictures.entries()).map((pictureArray) => {
            const id = pictureArray[0]
            const data = pictureArray[1]

            return {
                id,
                ...data,
            }
        })/*.filter(picture => {
            if (search) {
                return picture.title.includes(search)
            }
            return true;
        })*/
    }

    create(picture) {
        const imgId = randomUUID();
        this.#pictures.set(imgId, picture);
    }

    update(id, picture) {
        this.#pictures.set(id, picture);
    }

    delete(id) {
        this.#pictures.delete(id);
    }
}