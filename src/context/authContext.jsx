import { auth } from "../firebase/firebase.config";
import { createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    console.log("error creating auth context");
  }
  return context;
};

export function AuthProvider({ children }) {
  const register = async (email, password) => {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(response);
  };
  const login = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    const { uid: uidToken, email: emailToken } = response.user; // Obtener el uid y el email del usuario
  
    // Almacenar el uid y el email en el almacenamiento local
    localStorage.setItem('uidToken', uidToken);
    localStorage.setItem('emailToken', emailToken);
  
    console.log(response);
  };
  
  
  const loginWithGoogle = async () => {
    const responseGoogle = new GoogleAuthProvider();
    return await signInWithPopup(auth, responseGoogle);
  };
  const logout = async () => {
    const response = await signOut(auth)
    console.log(response);
  };
  return (
    <authContext.Provider
      value={{
        register,
        login,
        loginWithGoogle,
        logout
      }}
    >
      {children}
    </authContext.Provider>
  );
}
