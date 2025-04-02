import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) =>{
    if(!userId) return [];
  
    const itemsRef = collection(db, "users", userId, "items");
    const q = query(itemsRef);
    const snapshot = await getDocs(q);
    
    let items = [];
    snapshot.forEach((doc) =>{
      items.push({id: doc.id, ...doc.data()});
    });
    return items;
  };
  
  export const addItem = async(userId, item) =>{
    if(!userId) return null;
  
    const itemsRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsRef, item);
    
    return docRef.id;
  };