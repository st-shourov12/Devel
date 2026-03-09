
// "use server"

// import { dbConnect } from "@/lib/dbConnect";
// import bcryptjs from "bcryptjs";
// import Swal from "sweetalert2";

// export const postUser = async (payload) => {
//     const { email, password, name } = payload;

//     if (!email || !password) return null;

//     const usersCollection = dbConnect("users");

//     // ✅ Convert to plain object with .lean() equivalent — use projection
//     const isExist = await usersCollection.findOne(
//         { email },
//         { projection: { _id: 1 } } // only fetch _id, minimal data
//     );

//     if (isExist) return { error: "Email already exists" };

//     const newUser = {
//         providerId: "credentials",
//         name,
//         email,
//         password: await bcryptjs.hash(password, 14),
//         role: "user",
//     };

//     //   await bcryptjs.hash(password, 14)

//     const result = await usersCollection.insertOne(newUser);

//     if (result.acknowledged) {
//         // ✅ Return only plain serializable data — never return raw MongoDB objects
//         return {
//             acknowledged: true,
//             insertedId: result.insertedId.toString(), // convert ObjectId to string
//         };
//     }

//     return null;
// };



// export const loginUser = async (payload) => {
//   const { email, password } = payload;

//   if (!email || !password) return null;

//   const usersCollection = dbConnect("users");

//   const user = await usersCollection.findOne(
//     { email },
//     { projection: { _id: 1, name: 1, email: 1, password: 1, role: 1 } }
//   );

//   if (!user) return null;

//   const isMatched = await bcryptjs.compare(password, user.password);



//   if (!isMatched) return null;

//   // ✅ Return plain object — no alert, no BSON
//   return {
//     id: user._id.toString(),
//     name: user.name,
//     email: user.email,
//     role: user.role,
//   };
// };

"use server"

import { dbConnect } from "@/lib/dbConnect";
import bcryptjs from "bcryptjs";

export const loginUser = async (credentials) => {
  try {
    const { email, password } = credentials;

    if (!email || !password) return null;

    const user = await dbConnect("users").findOne(
      { email },
      { projection: { _id: 1, name: 1, email: 1, password: 1, role: 1 } }
    );

    if (!user) return null;

    const isMatched = await bcryptjs.compare(password, user.password);

    if (!isMatched) return null;

    // ✅ Return plain object only
    return {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
    };

  } catch (error) {
    console.error("loginUser error:", error);
    return null;
  }
};

export const postUser = async (payload) => {
  try {
    const { email, password, name } = payload;

    if (!email || !password) return null;

    const usersCollection = dbConnect("users");

    const isExist = await usersCollection.findOne(
      { email },
      { projection: { _id: 1 } }
    );

    if (isExist) return { error: "Email already exists" };

    const newUser = {
      providerId: "credentials",
      name,
      email,
      password: await bcryptjs.hash(password, 14),
      role: "user",
    };

    const result = await usersCollection.insertOne(newUser);

    if (result.acknowledged) {
      return {
        acknowledged: true,
        insertedId: result.insertedId.toString(),
      };
    }

    return null;

  } catch (error) {
    console.error("postUser error:", error);
    return null;
  }
};