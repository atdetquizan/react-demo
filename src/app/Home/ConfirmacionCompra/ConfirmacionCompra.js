import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

export default class ConfirmacionCompra extends React.Component {
  // login() {
  //   const auth = getAuth();
  //   const provider = new GoogleAuthProvider();
    
  //   // Para salir de la sesión de un usuario, llama a signOut:
  //   signOut(auth).then(() => {
  //       // Sign-out successful.
  //       console.log('Sign-out successful.');
  //     }).catch((error) => {
  //       // An error happened.
  //       console.log('An error happened.');
  //     });

  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       // The signed-in user info.
  //       const user = result.user;

  //       console.log(result);
  //       // ...
  //     }).catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.email;
  //       // The AuthCredential type that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //       // ...
  //       console.log(error);
  //     });
  // }
  render() {
    return <div>Componente confirmacion-compra <button type="button" onClick={() => this.login()}>LOGIN</button></div>;
  }
}
