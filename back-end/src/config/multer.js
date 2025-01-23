import multer from 'fastify-multer';
import path from 'node:path';
import crypto from 'node:crypto';

const UPLOAD_PATH = path.resolve('src', 'tmp', 'uploads');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, UPLOAD_PATH);
    },
    filename: (req, file, callback) => {
        crypto.randomBytes(12, (err, hash) => {
            if (err) return callback(err);
            // const originalName = (file.filename);
            const extension = (file.mimetype).replace('image/', '');
            const fileName = `${hash.toString('hex')}.${extension}`;
            callback(null, fileName);
        });
    }
});

const limits = {
    fileSize: 8 * 1024 * 1024, // 8MB
};

const uploadMiddleware = multer({
    storage,
    limits,
});

export default uploadMiddleware;