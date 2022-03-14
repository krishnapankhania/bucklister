import { collection } from "firebase/firestore";
import { useMemo } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../firebase/firebase";
import { collections } from "../firebase/firestore";
import { docToObject } from "../helper";

export default function useCategories() {
  const [value, loading, error] = useCollection(
    collection(firebase.getDb(), collections.categories),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const categories = useMemo(() => {
    if (value) {
      const data = docToObject(value);
      return data.sort((a, b) => a.position - b.position);
    }
  }, [loading]);

  return { categories, loading, error };
}
