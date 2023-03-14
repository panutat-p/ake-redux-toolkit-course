import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { UserCredential } from '@firebase/auth';

import firebaseApp from '../configs/firebase';
import { ProfileDocument } from '../types/profile.type';
import { TABLE_USER } from '../configs/firestore';

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export async function registerUser(firstName: string, lastName: string, email: string, password: string): Promise<UserCredential> {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, TABLE_USER, userCredential.user.uid), {
      firstName: firstName,
      lastName: lastName,
      photoURL: 'https://codingthailand.com/site/img/nopic.png',
      role: 'member',
    });
    return userCredential;
  } catch (e) {
    throw e;
  }
}

export async function login(email: string, password: string): Promise<UserCredential> {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    throw e;
  }
}

export async function logout(): Promise<void> {
  try {
    await signOut(auth);
  } catch (e) {
    throw e;
  }
}

export async function getProfile(userID: string) {
  const accountRef = doc(db, TABLE_USER, userID);
  const docSnap = await getDoc(accountRef);
  if (!docSnap.exists()) {
    console.log('🟥 Document does not exist');
    return null;
  }

  let profile = docSnap.data() as ProfileDocument;

  return {
    userID: userID,
    ...profile,
  };
}

export async function updatePhoto(userID: string, photoURL: string): Promise<void> {
  const target = doc(db, TABLE_USER, userID);
  await updateDoc(target, { photoURL: photoURL });
}
