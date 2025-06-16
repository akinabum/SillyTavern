import { db } from './firebase.js';
import { collection, doc, setDoc, getDoc } from "firebase/firestore";

// Сохраняем персонажа
export async function saveCharacter(userId, characterData) {
  await setDoc(doc(collection(db, "users", userId, "characters"), characterData.id), characterData);
}

// Загружаем персонажа
export async function loadCharacter(userId, characterId) {
  const docRef = doc(db, "users", userId, "characters", characterId);
  const snapshot = await getDoc(docRef);
  return snapshot.exists() ? snapshot.data() : null;
}
