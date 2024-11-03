import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  onValue,
  push,
  update,
  remove,
} from "firebase/database";
import firebaseConfig from "../firebaseConfig.json";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export function getData(path) {
  const dataRef = ref(database, "/" + path);
  return new Promise((resolve, reject) => {
    onValue(
      dataRef,
      (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      },
      (error) => reject(error)
    );
  });
}
// export function addCart(item) {
//   return set(ref(database, "/cart"), [item]);
// }
export function updateCart(item) {
  const dataRef = ref(database, "/cart");
  const refKey = push(dataRef).key;
  return push(dataRef, { ...item, key: refKey });
}

export function changeItemCart(item, key) {
  const dataRef = ref(database, "/cart/" + key);
  return update(dataRef, item);
}

export function deleteItemCart(key) {
  const dataRef = ref(database, "/cart/" + key);
  return remove(dataRef);
}
