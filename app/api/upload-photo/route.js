import { NextResponse } from "next/server";
import { Storage } from "@google-cloud/storage";
import { randomUUID } from "crypto";

const BUCKET_NAME = "roomvoyager-46b98.firebasestorage.app";

function getStorage() {
  const credentials = JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIALS || "{}");
  return new Storage({
    credentials,
    projectId: credentials.project_id || "roomvoyager-46b98",
  });
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const uid  = formData.get("uid");

    if (!file || !uid) {
      return NextResponse.json({ error: "Missing file or uid" }, { status: 400 });
    }

    const buffer      = Buffer.from(await file.arrayBuffer());
    const contentType = file.type || "image/jpeg";
    const token       = randomUUID();
    const filePath    = `profile-photos/${uid}`;

    const storage = getStorage();
    const bucket  = storage.bucket(BUCKET_NAME);
    const fileRef = bucket.file(filePath);

    await fileRef.save(buffer, {
      metadata: {
        contentType,
        metadata: { firebaseStorageDownloadTokens: token },
      },
    });

    const encoded = encodeURIComponent(filePath);
    const url     = `https://firebasestorage.googleapis.com/v0/b/${BUCKET_NAME}/o/${encoded}?alt=media&token=${token}`;

    return NextResponse.json({ url });
  } catch (err) {
    console.error("Photo upload error:", err);
    return NextResponse.json({ error: err.message || "Upload failed" }, { status: 500 });
  }
}
