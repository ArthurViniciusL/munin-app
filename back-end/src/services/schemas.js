export async function getPictures(db) {
    try {
        const collection = db.collection('pictures');
        const pictures = await collection.find().toArray();
        
        return pictures;
    } catch (error) {
            throw new Error("Deu ruim aqui: " + error.message);
    }
}