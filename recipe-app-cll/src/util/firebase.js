import firebase from "firebase/app";
import env from "./env";

var config = {
  apiKey: env.apiKey,
  authDomain: env.authDomain,
  databaseURL: env.databaseURL,
  projectId: env.projectId,
  storageBucket: env.storageBucket,
  messagingSenderId: env.messagingSenderId
};

export const fire = firebase.initializeApp(config);
