import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB7V5ZjMGiVr1uTfOQFRA2Ve1h8SgeB5mU",
  authDomain: "take-notes-3639f.firebaseapp.com",
  projectId: "take-notes-3639f",
  storageBucket: "take-notes-3639f.appspot.com",
  messagingSenderId: "239230630700",
  appId: "1:239230630700:web:ded5fe2d5a76bdc27bca89",
  measurementId: "G-ND0VDLD0WV"
};
const fireb = firebase.initializeApp(config);
export const db = fireb.firestore();

  export const collectionNotes = () => {
    return  db.collection('notas').get();
  }
  
  export const deleteNotes = (id) => {
    return db.collection('notas').doc(id).delete();
  }

  export const auth = fireb.auth();

  /**export const Login = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => { 
      alert('Ve a tu correo electronico y verifica tu cuenta para poder ingresar');

      result.user.updateProfile({
    
      })
      const configuracion = { //Redirije al usuario después de verificar su email
        url: 'http://localhost:3000'
      }
      result.user.sendEmailVerification(configuracion) //Enviar correo al usuario para verficar su email
      .catch((error) => {
        
      })
    })
    .catch((error) => {
      if( email === '' || password ==='')
      {
        const errorMessage = error.message;
        alert('Llena todos los campos para completar tu registro', errorMessage);
      }
      else{
      const errorCode = error.code;
      alert('Usuario ya existente, intente con otro', errorCode);
      }
    }) 
}**/

