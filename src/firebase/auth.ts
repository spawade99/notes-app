import { auth } from "./auth/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updatePassword,
} from "firebase/auth";

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);

  return result;
};

export const createNewUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const logInWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const logOut = async () => {
  return await auth.signOut();
};

export const passwordReset = async (email: string) => {
  return await sendPasswordResetEmail(auth, email);
};

export const passwordUpdate = async (password: string) => {
  if (auth.currentUser === null) return;
  return await updatePassword(auth.currentUser, password);
};

export const sendUserEmailVerification = async () => {
  if (auth.currentUser === null) return;
  return await sendEmailVerification(auth.currentUser, {
    url: "http://localhost:3000",
  });
};
