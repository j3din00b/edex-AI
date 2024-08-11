import { encrypt, decrypt } from "crypto-js";

const storage = {};

export async function storeData(data) {
  try {
    const encryptedData = encrypt(data, "secret_key");
    storage[data.id] = encryptedData;
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function retrieveData(id) {
  try {
    const encryptedData = storage[id];
    const decryptedData = decrypt(encryptedData, "secret_key");
    return decryptedData;
  } catch (error) {
    console.error(error);
    return null;
  }
}
