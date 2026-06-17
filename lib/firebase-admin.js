import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

if (!getApps().length) {
  const credentials = JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIALS || "{}");
  initializeApp({ credential: cert(credentials) });
}

export const adminDb = getFirestore();
