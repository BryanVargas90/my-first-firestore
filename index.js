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
const candy = {
    name: "Skittles",
    unitPrice: 3.99,
    size: "16 oz",
    color: "green",
    productNumber: "7",
    inventory: 144,
}

db.collection('products').add(candy)
.then(doc =>console.log("added doc: " + doc.id))
.catch(err => console.log(err))