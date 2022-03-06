import { doc, setDoc, getDoc, collection } from "firebase/firestore";
import firebase from "./firebase";

export const collections = {
  users: "users",
  categories: "buckets-categories",
};

class FirestoreUtils {
  async getUser(id) {
    const docRef = doc(firebase.getDb(), collections.users, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  }
  async createUser(data, id) {
    try {
      const isExistingUser = await this.getUser(id);
      if (isExistingUser) {
        return isExistingUser;
      } else {
        const response = await setDoc(
          doc(firebase.getDb(), collections.users, id),
          data
        );
        return response;
      }
    } catch (error) {
      console.log("err", error);
      return null;
    }
  }
  async createCategory(data, id) {
    try {
      const response = await setDoc(
        doc(firebase.getDb(), collections.categories, id),
        data
      );
      return response;
    } catch (error) {
      console.log("err", error);
      return null;
    }
  }
  useCategories() {
    return (
      collection(firebase.getDb(), collections.categories),
      {
        snapshotListenOptions: { includeMetadataChanges: true },
      }
    );
  }
}
export default new FirestoreUtils();
