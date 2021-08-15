import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { config } from "./firebase.config";

// const config = {
//   apiKey: '',
//   authDomain: '',
//   projectId: '',
//   storageBucket: '',
//   messagingSenderId: '',
//   appId: '',
// };

const firebase = Firebase.initializeApp(config);

export { firebase };
