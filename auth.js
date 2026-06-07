import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { neon } from "@neondatabase/serverless";
import { verifyPassword } from "./lib/password";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        try {
          const sql = neon(process.env.DATABASE_URL);
          const users = await sql`
            SELECT id, email, name, password_hash, image
            FROM users
            WHERE email = ${credentials.email}
            LIMIT 1
          `;

          if (users.length === 0) return null;

          const user = users[0];
          if (!user.password_hash) return null;

          const isValid = await verifyPassword(credentials.password, user.password_hash);
          if (!isValid) return null;

          return {
            id: String(user.id),
            email: user.email,
            name: user.name,
            image: user.image,
          };
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      // Auto-create user record for Google sign-ins
      if (account?.provider === "google") {
        try {
          const sql = neon(process.env.DATABASE_URL);
          await sql`
            INSERT INTO users (email, name, image, provider)
            VALUES (${user.email}, ${user.name}, ${user.image}, 'google')
            ON CONFLICT (email) DO UPDATE
            SET name = EXCLUDED.name, image = EXCLUDED.image
          `;
        } catch (error) {
          console.error("Error saving Google user:", error);
        }
      }
      return true;
    },
    async session({ session, token }) {
      if (token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },
  pages: {
    signIn: "/account/signin",
    error: "/account/signin",
  },
  session: {
    strategy: "jwt",
  },
});
