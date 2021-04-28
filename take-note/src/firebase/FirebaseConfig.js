import firebase from 'firebase/app';
import 'firebase/firestore';
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


