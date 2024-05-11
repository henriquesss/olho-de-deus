"use client";

import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../../contexts/AuthContext";

interface AuthComponentParams {
  type: string;
}

interface IErrors {
  email?: string;
  password?: string;
}

export const Auth = ({ type }: AuthComponentParams) => {
  const ValidAuthContext = useContext(AuthContext);
  let signIn: (email: string, password: string) => Promise<void>;

  if (ValidAuthContext !== null) {
    // const { signIn } = useContext(AuthContext);
    signIn = ValidAuthContext.signIn;
  }

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<IErrors>();

  const router = useRouter();

  const handleAuth = async () => {
    try {
      // Validate form fields
      const newErrors: IErrors = {};
      if (!email) newErrors.email = "Fill the email";

      if (!password) newErrors.password = "Fill the password";
      // If there are errors, set them in the state
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
      } else {
        // Everything is ok
        const usersCollectionRef = collection(db, "users");

        if (type == "signin") {
          await signIn(email, password);
        } else {
          const createdFirebaseAuth = await createUserWithEmailAndPassword(
            auth,
            email,
            password,
          );
          await addDoc(usersCollectionRef, {
            email,
            firebase_uid: createdFirebaseAuth.user.uid,
            createdAt: new Date(),
          });
        }

        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col flex-wrap">
      {errors?.email && <p className="text-red-500">{errors.email}</p>}
      <input
        type="text"
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}
      />

      {errors?.password && <p className="text-red-500">{errors.password}</p>}
      <input
        type="password"
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
      />

      <button
        onClick={() => handleAuth()}
        className="bg-black text-white p-1 rounded mt-3"
      >
        {type == "signin" ? "Signin" : "Create account"}
      </button>
    </div>
  );
};
