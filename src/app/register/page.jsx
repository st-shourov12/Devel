// src/app/register/page.jsx
"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { postUser } from "@/actions/server/auth";
import { useRouter } from "next/navigation";


const RegisterPage = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const payload = {
    email: form.email,
    password: form.password,
    name: form.name,
  };

  const result = await postUser(payload);
  setLoading(false);

  if (result?.error) {
    alert(result.error); // "Email already exists"
    return;
  }

  if (result?.acknowledged) {
    alert("Registration successful!");
    router.push('/login');
  } else {
    alert("Something went wrong. Please try again.");
  }
};

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="card bg-base-100 shadow-xl w-full max-w-md">
        <div className="card-body gap-5 p-8">

          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold">
              Join <span className="text-primary">Devel</span>
            </h1>
            <p className="text-base-content/50 text-sm mt-1">
              Create your free account
            </p>
          </div>

          {/* Google */}
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="btn btn-outline btn-block gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          <div className="divider text-base-content/30 text-xs">OR</div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="form-control gap-1">
              <label className="label py-0">
                <span className="label-text text-sm font-medium">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="input input-bordered w-full"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-control gap-1">
              <label className="label py-0">
                <span className="label-text text-sm font-medium">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="input input-bordered w-full"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-control gap-1">
              <label className="label py-0">
                <span className="label-text text-sm font-medium">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
                value={form.password}
                onChange={handleChange}
                required
                minLength={6}
              />
            </div>

            <button
              type="submit"
              className={`btn btn-primary btn-block mt-1 ${loading ? "loading" : ""}`}
              disabled={loading}
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-sm text-base-content/50">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-semibold hover:underline">
              Sign In
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default RegisterPage;