import React, { createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../Config";

export const ContextProvider = createContext();

const ContextFun = (props) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const [allMsg, setAllMsg] = useState([]);
  const register = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(result);
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const logout = () => {
    auth.signOut().then(() => {
      setUser(null);
    });
  };
  const sendMessage = async (msg) => {
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        msg,
        username: user.displayName,
        email: user.email,
        photo: user.photoURL,
        currentTime: new Date(),
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoader(false);
    });
    const getMsg = () => {
      const q = query(
        collection(db, "messages"),
        orderBy("currentTime", "asc")
      );
      onSnapshot(q, (querySnapshot) => {
        const messages = [];

        querySnapshot.forEach((doc) => {
          messages.push(doc.data());
        });
        setAllMsg(messages);
      });
    };

    getMsg();
  }, []);
  console.log(allMsg);
  return (
    <ContextProvider.Provider
      value={{ register, user, loader, logout, sendMessage, allMsg }}
    >
      {props.children}
    </ContextProvider.Provider>
  );
};

export default ContextFun;
