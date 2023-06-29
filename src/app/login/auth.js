export default app; 

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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

  
function goToDashboard(params) {
  
}  
function login(email, password, callback) {
  //Toda mi ejecucion 
  callback()
}

login ("ejemplo@ejemplo.com", "pitudo23", )