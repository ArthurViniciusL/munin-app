export async function setUpload(receivedFile: File) {

  if (!receivedFile) {
    console.error(receivedFile);
  }

  const extension = (receivedFile.name).split('.').pop();

  if (extension === "png" || extension === "jpeg" || extension === "jpg") {
    const formData = new FormData();
    formData.append('file', receivedFile);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_UPLOAD as string, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        return { upload: true, format: true };
      }

    } catch (error) {
      console.error('Upload Erro: ', error);
    }
  } else {
    return { upload: false, format: false };
  }
}