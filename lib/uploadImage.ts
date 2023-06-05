import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "647ca808cc7c55ce1e9d",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;