import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../services/firebase";
const auth = getAuth(app);
function Login(params) {

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

export {Login}
 