import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  doc,
  getDocs,
  query,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  firestore: Firestore = inject(Firestore); // firestore instanzieren
  constructor() {}

  getMenusRef() {
    return collection(this.firestore, 'menus'); // ID aus collection
  }

  getSingleMenuRef(docId: string) {
    return doc(collection(this.firestore, 'menus'), docId);
  }
}
