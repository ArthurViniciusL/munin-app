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
       
        const { name, file } = picture;

        const collection = db.collection('pictures');

        const result = await db.collection('pictures').insertOne({
            name,
            file
        });

        console.log(result);
        return result;

    } catch (error) {
        throw new Error(error.message);
    }
}