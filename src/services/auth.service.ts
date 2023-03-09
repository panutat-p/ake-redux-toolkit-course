import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import firebaseApp from '../configs/firebase';
import { UserCredential } from '@firebase/auth';

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export async function registerUser(firstName: string, lastName: string, email: string, password: string): Promise<UserCredential> {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, 'user', userCredential.user.uid), {
      firstName: firstName,
      lastName: lastName,
      photoUrl: 'https://codingthailand.com/site/img/nopic.png',
      role: 'member',
    });

    return userCredential;
  } catch (e) {
    throw e;
  }
}
