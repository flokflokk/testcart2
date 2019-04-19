
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
  apiKey: "AIzaSyCT-8X8JFkPmKvjk740i0ZsbuxaOZ3Iybs",
  authDomain: "testcart-fc853.firebaseapp.com",
  databaseURL: "https://testcart-fc853.firebaseio.com",
  projectId: "testcart-fc853",
  storageBucket: "testcart-fc853.appspot.com",
  messagingSenderId: "411559883536"
} // Replace your firebase project

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const db = firebase.firestore()
const storage = firebase.storage()

db.settings({
  timestampsInSnapshots: true
})

export default {
  db,
  storage
}