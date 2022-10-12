import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
   apiKey: "AIzaSyCBZheqHI46QVZMxhmBBAywAfS9tzd2gg0",
   authDomain: "keep-me-on-budget.firebaseapp.com",
   projectId: "keep-me-on-budget",
   storageBucket: "keep-me-on-budget.appspot.com",
   messagingSenderId: "628866111276",
   appId: "1:628866111276:web:3314fe6d8236322e873e89"
 };

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();

export { projectFirestore }