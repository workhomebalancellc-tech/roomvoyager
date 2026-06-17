import { NextResponse } from "next/server";
import { adminStorage } from "../../../lib/firebase-admin";
import { randomUUID } from "crypto";

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

    const bucket  = adminStorage.bucket();
    const fileRef = bucket.file(filePath);

    await fileRef.save(buffer, {
      metadata: {
        contentType,
        metadata: { firebaseStorageDownloadTokens: token },
      },
    });

    const bucketName = bucket.name;
    const encoded    = encodeURIComponent(filePath);
    const url        = `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${encoded}?alt=media&token=${token}`;

    return NextResponse.json({ url });
  } catch (err) {
    console.error("Photo upload error:", err);
    return NextResponse.json({ error: err.message || "Upload failed" }, { status: 500 });
  }
}
