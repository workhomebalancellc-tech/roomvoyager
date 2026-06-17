"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { auth } from "../lib/firebase";
import { initUserDoc } from "../lib/points";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // Ensure Firestore user doc exists via server-side API (bypasses CSP)
        fetch("/api/admin/firestore", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "initUser",
            uid: firebaseUser.uid,
            name: firebaseUser.displayName || "",
            email: firebaseUser.email || "",
          }),
        }).catch(() => {});
        // Map Firebase user to a consistent shape used across the app
        setUser({
          name: firebaseUser.displayName,
          email: firebaseUser.email,
          image: firebaseUser.photoURL,
          uid: firebaseUser.uid,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result.user;
  };

  const signInWithEmail = async (email, password) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  };

  const signUpWithEmail = async (name, email, password) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    if (name) {
      await updateProfile(result.user, { displayName: name });
    }
    return result.user;
  };

  // Updates displayName in Firebase Auth + Firestore, and refreshes local user state
  const updateName = async (newName) => {
    if (!auth.currentUser || !newName?.trim()) return;
    await updateProfile(auth.currentUser, { displayName: newName.trim() });
    setUser(prev => prev ? { ...prev, name: newName.trim() } : prev);
  };

  const resetPassword = async (email) => {
    await sendPasswordResetEmail(auth, email);
  };

  const updatePhotoURL = async (url) => {
    if (!auth.currentUser) return;
    await updateProfile(auth.currentUser, { photoURL: url });
    setUser(prev => prev ? { ...prev, image: url } : prev);
  };

  const logout = async () => {
    await firebaseSignOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, signInWithEmail, signUpWithEmail, updateName, updatePhotoURL, resetPassword, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
