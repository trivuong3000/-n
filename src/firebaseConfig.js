import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    console.log("Đang thực hiện đăng nhập Google...");
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("Đăng nhập thành công:", user);
    localStorage.setItem("userName", user.displayName);
    return user;
  } catch (error) {
    console.error("Lỗi đăng nhập:", error);
    return null;
  }
};


export { auth, provider };
