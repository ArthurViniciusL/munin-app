import multer from 'fastify-multer';
import path from 'node:path';
import crypto from 'node:crypto';

const UPLOAD_PATH = path.resolve('src','tmp', 'uploads');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, UPLOAD_PATH);
    },
    filename: (req, file, callback) => {
        crypto.randomBytes(16, (err, hash) => {
            if (err) return callback(err);
            const fileName = `${hash.toString('hex')}-${file.originalname}`;
            callback(null, fileName);
        });
    }
});

const limits = {
    fileSize: 10 * 1024 * 1024, // 10MB
};

const uploadMiddleware = multer({
    storage,
    limits,
});

export default uploadMiddleware;