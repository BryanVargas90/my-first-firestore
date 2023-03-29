//Import the tools we need from firebase-admin
import { initializeApp, cert } from "firebase-admin/app"// We use to connect to our firebase project;
import {getFirestore } from "firebase-admin/firestore"// we use to connnect to firestore

//Import our credentials from a secret file
import { credentials } from "./credentials.js";

//Connect to our firebase project
initializeApp({
    credential: cert(credentials)
});

//Connect to Firestore DB
const db = getFirestore();

//Add a product to our product collection
const candy2 = {
    name: "Twixt",
    unitPrice: 2.99,
    size: "12 oz",
    color: "green",
    productNumber: "2",
    inventory: 288,
}
// //How to add a document to firestore:
//  db.collection('products').add(candy2) // Returns promise
//     .then((doc) => {
//       console.log('added doc: ' + doc.id)
//       // I can be sure inside .then() that the first process was completed successfully
//      return db.collection('products').get()
//     })
//     .then()
//     .catch(err => console.log(err))

// How to read a document from Firestore(how to get specific document):
db.collection('products').doc('QV6A2mxuLe0TqQAM06Jv').get()
.then(doc => {
console.log(doc.data())    
})
.catch(console.log)

//How to get a whole collection:
db.collection('products').get()
.then(collection => {
    const productlist = collection.docs.map(doc => ({ ...doc.data(), id: doc.id}))
    console.log(productlist)
})
.catch(console.log)

//how to update a document in FireStore:
db.collection('products').doc('QV6A2mxuLe0TqQAM06Jv').update({
inventory: 555,
costumerFavorite: true
})