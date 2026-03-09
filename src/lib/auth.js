


import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginUser } from "@/actions/server/auth";

export const authOptions = {
  providers: [
    // ✅ Google provider added
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        const user = await loginUser(credentials);
        return user; // null = failed, object = success
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async redirect() {
      return "/";
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

// src/app/api/auth/[...nextauth]/route.js
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { loginUser } from "@/actions/server/auth";

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {},
//       async authorize(credentials) {
//         const user = await loginUser(credentials);
//         return user;
//       },
//     }),
//   ],
//   // ✅ Required for credentials provider
//   session: {
//     strategy: "jwt",
//   },
//   pages: {
//     signIn: "/login",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//         token.role = user.role;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (token) {
//         session.user.id = token.id;
//         session.user.role = token.role;
//       }
//       return session;
//     },
//     async redirect() {
//       return "/";
//     },
//   },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };