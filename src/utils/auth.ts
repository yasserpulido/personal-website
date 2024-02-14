import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updatePassword,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { get, ref, set } from "firebase/database";

export const doCreateUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const uid = user.uid;

    const userRef = ref(db, `users/${uid}`);

    await set(userRef, {
      email: email,
      role: "admin",
    });

    return {
      status: "success",
      message: "User has been created successfully.",
    };
  } catch (error) {
    if (error instanceof Error) {
      return { status: "error", message: error.message };
    } else {
      return { status: "error", message: "An unknown error occurred" };
    }
  }
};

export const doSignInWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    if (user) {
      return {
        error: false,
        message: "User authenticated successfully.",
      };
    } else {
      return {
        error: true,
        message: "Unexpected error. Please try again.",
      };
    }
  } catch (error) {
    if (typeof error === "object" && error !== null && "code" in error) {
      const errorCode = (error as { code: string }).code;

      console.log(errorCode);

      if (errorCode === "auth/invalid-credential") {
        return {
          error: true,
          message: "Invalid credentials. Please verify and try again.",
        };
      } else {
        return {
          error: true,
          message: "Unknown error. Please try again later.",
        };
      }
    } else {
      return {
        error: true,
        message: "Unexpected error. Please try again.",
      };
    }
  }
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
};

export const doSignOut = async () => {
  return await auth.signOut();
};

export const doPasswordReset = async (email: string) => {
  return await sendPasswordResetEmail(auth, email);
};

export const doPasswordUpdate = async (password: string) => {
  if (!auth.currentUser) return null;

  return await updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = async () => {
  if (!auth.currentUser) return null;

  return await sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};

export const getUserRole = async (uid: string) => {
  const userRef = ref(db, `users/${uid}`);

  try {
    const snapshot = await get(userRef);
    const userInfo = snapshot.val();
    if (userInfo && userInfo.role) {
      return userInfo.role;
    }

    return null;
  } catch (error) {
    console.error("Error fetching user role:", error);
    return null;
  }
};
