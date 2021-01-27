import firebase from 'firebase/app';
import 'firebase/auth';



var firebaseConfig = {
    apiKey: "AIzaSyDjybG99kqyAUv33qeE_P31KAywusUI4K0",
    authDomain: "blog-react-fd1c8.firebaseapp.com",
    projectId: "blog-react-fd1c8",
    storageBucket: "blog-react-fd1c8.appspot.com",
    messagingSenderId: "651666577679",
    appId: "1:651666577679:web:ca6d6e3c23adc58335067a"
};

const app  =  firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export default app;