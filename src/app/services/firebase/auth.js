import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";
const auth = getAuth(app);
function login(params) {

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


export {login}
 