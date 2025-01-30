import fs from 'node:fs';
import path from 'node:path';

export default async function deleteUploads() {
    const uploadsDir = 'src/tmp/uploads';

    fs.readdir(uploadsDir,(error, files) => {
        if(error) {
            console.error('Error accessing directory: ', error);
            return;
        }
        files.forEach(file => {
            const filePath = path.join(uploadsDir, file);

            fs.stat(filePath, (error, stats) => {
                if(error) {
                    return console.log('Error reading file:  ', error);
                }
                if(stats.isFile()) {
                    fs.unlink(filePath, error => {
                        if(error) {
                            return console.error('Error when deleting file: ', error);
                        } else {
                            console.error('File deleted: ', filePath);
                        }
                    })
                }
            })
        })
    })
}