import React, { useContext, useEffect, useState } from "react";
import { auth, firestore } from "../firebase_config";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  async function signup(email, password, name) {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    return await res.user.updateProfile({
      displayName: name,
    });
  }

  function addPhotoURL(photoURL) {
    return auth.currentUser.updateProfile({ photoURL });
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, [currentUser]);

  useEffect(() => {
    const unsubscribe =
      currentUser &&
      firestore
        .collection("users")
        .doc(currentUser.uid)
        .onSnapshot((snap) => {
          setUser(snap.data());
        });
    return unsubscribe;
  }, [currentUser]);

  const value = {
    currentUser,
    user,
    signup,
    login,
    logout,
    addPhotoURL,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
