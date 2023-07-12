import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";
import {doc, setDoc} from "firebase/firestore"
import db from "./database";
const auth = getAuth(app);

function login(email, password) {

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorCode,errorMessage);
    
    // ..
  });
}

function register(params) {
const {email, password, displayName} = params;
  const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;

  setDoc(
    doc(db, "profiles", user.uid),
    {
      email, 
      uid: user.uid,
      displayName
    }
  )
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  // ..
});
  
}
export {login, register}
 