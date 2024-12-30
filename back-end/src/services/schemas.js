export async function getPictures(db) {
    try {
        const collection = db.collection('pictures');
        const pictures = await collection.find().toArray();

        return pictures;
    } catch (error) {
        throw new Error(error.message);
    }
};

export async function setPicture(db, data) {
    try {
        const collection = db.collection('pictures');
        const picture = await collection.insertOne(data);
        return picture;
    } catch (error) {
        throw new Error(error.message);
    }
}