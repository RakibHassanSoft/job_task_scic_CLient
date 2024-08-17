import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword, signOut, GoogleAuthProvider } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

// Creating context
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Initialize with true

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .finally(() => setLoading(false)); // Ensure loading is set to false after operation
  };

  const signIN = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .finally(() => setLoading(false)); // Ensure loading is set to false after operation
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth)
      .finally(() => setLoading(false)); // Ensure loading is set to false after operation
  };

  const provider = new GoogleAuthProvider();
  const signInByGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider)
      .finally(() => setLoading(false)); // Ensure loading is set to false after operation
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false); // Ensure loading is set to false after user state is determined
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading, // Fix the typo here
    createUser,
    signIN, // Fix the typo here
    logOut,
    signInByGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
