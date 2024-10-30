import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import firebaseConfig from "../firebaseConfig.json";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
console.log(app);
console.log(database);

export function getData(path) {
  const startCountRef = ref(database, "/" + path);
  return new Promise((resolve, reject) => {
    onValue(
      startCountRef,
      (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        resolve(data);
      },
      (error) => reject(error)
    );
  });
}
