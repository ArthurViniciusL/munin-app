import 'dotenv/config';

export async function getPictures(db) {
    try {
        const collection = db.collection('pictures');

        return await collection.find().sort({_id:-1}).toArray(); // L.I.F.O
    } catch (error) {
        throw new Error(error.message);
    }
};

export async function setPicture(db, picture) {
    try {
        // const { filename, path } = fileData;

        const { name, path, url } = picture;

        // const collection = db.collection('pictures');
        const date = new Date();

        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let monthCode = date.getMonth();

        let day = `${date.getDate()} ${monthNames[monthCode]}`;
        let time = `${date.getHours()}:${date.getMinutes()}`;

        const data = `${day} - ${time}`;
        const timestamp = new Date().getTime();

        // talvez adicionar um id aleatório 

        const result = await db.collection('pictures').insertOne({
            name,
            path,
            url,
            data,
            timestamp
        });

        // await createUrl(name)

        // console.log(result);
        return result;

    } catch (error) {
        throw new Error(error.message);
    }
}

export async function deltePictures(db) {
    try {
        const collection = db.collection('pictures');
        return await collection.deleteMany()
    } catch (error) {
        throw new Error(error.message);
    }
}

/*
async function createUrl(file) {
    // const url = `${process.env.SERVER_DOWNLOAD}/tmp/uploads/${file}`
    return console.log("http://localhost:3333/download/src/tmp/uploads/39264bdd7bf6babe11e6dabd025c7ee1.png")
}
*/