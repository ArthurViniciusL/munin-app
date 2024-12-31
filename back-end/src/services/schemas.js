export async function getPictures(db) {
    try {
        const collection = db.collection('pictures');
        return await collection.find().toArray();
    } catch (error) {
        throw new Error(error.message);
    }
};

export async function setPicture(db, picture) {
    try {
        const collection = db.collection('pictures');
        return await collection.insertOne(picture);
    } catch (error) {
        throw new Error(error.message);
    }
}