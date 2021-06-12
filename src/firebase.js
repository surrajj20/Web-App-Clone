import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAdyelUPvCNdtChHqQZNNwY6g4nV3U93vI",
    authDomain: "netflix-clone-16164.firebaseapp.com",
    projectId: "netflix-clone-16164",
    storageBucket: "netflix-clone-16164.appspot.com",
    messagingSenderId: "348278297728",
    appId: "1:348278297728:web:c52d0fec855509e0200265",
    measurementId: "G-EW02G0K1PN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()

export { auth };
export default db;