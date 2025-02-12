import { Picture } from "@/components/PicturesForDownload";

export async function getDownload(picture: Picture) {
    // event.preventDefault();
    if (picture) {
        try {
            const responseFile = await fetch(picture.url);
            const convertFile = await responseFile.blob();

            const createBlobFile = URL.createObjectURL(convertFile);

            const linkComponent = document.createElement("a");
            linkComponent.href = createBlobFile;
            linkComponent.download = picture.name || "picture";
            document.body.appendChild(linkComponent);

            linkComponent.click();

            document.body.removeChild(linkComponent);

            URL.revokeObjectURL(createBlobFile);

        } catch (error) {
            console.error("Download error: ", error);
        }
    }
}