import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

if (!getApps().length) {
  const credentials = JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIALS || "{}");
  initializeApp({
    credential: cert(credentials),
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  });
}

export const adminDb = getFirestore();
export const adminStorage = getStorage();
