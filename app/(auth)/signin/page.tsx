"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";
import { Mail, Lock, Loader2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { login } from "@/lib/data/customer";

// Types
interface FormState {
  success?: boolean;
  error?: string;
}

// Submit Button Component with Loading State
const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="w-full bg-primary hover:bg-primary/90"
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin mr-2" />
          Signing in...
        </>
      ) : (
        "Sign In"
      )}
    </Button>
  );
};

// SignInForm Component
const SignInForm = () => {
  const router = useRouter();

  const handleSubmit = async (
    prevState: FormState | null,
    formData: FormData
  ): Promise<FormState> => {
    try {
      await login(
        formData.get("email") as string,
        formData.get("password") as string
      );
      router.push("/account");
      router.refresh();
      return { success: true };
    } catch (error) {
      return {
        error:
          error instanceof Error
            ? error.message
            : "An error occurred during sign in",
      };
    }
  };

  const [state, formAction] = useFormState(handleSubmit, null);

  return (
    <form action={formAction} className="space-y-6">
      {/* Error Message */}
      {state?.error && (
        <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 flex items-center gap-2 text-sm text-destructive">
          <AlertCircle className="w-4 h-4" />
          {state.error}
        </div>
      )}

      {/* Email Input */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground flex items-center gap-2">
          <Mail className="w-4 h-4 text-muted-foreground" />
          Email Address
        </label>
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="bg-secondary/50 border-primary/10 focus:border-primary/30 text-foreground placeholder:text-muted-foreground"
        />
      </div>

      {/* Password Input */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground flex items-center gap-2">
          <Lock className="w-4 h-4 text-muted-foreground" />
          Password
        </label>
        <Input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
          className="bg-secondary/50 border-primary/10 focus:border-primary/30 text-foreground placeholder:text-muted-foreground"
        />
      </div>

      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-muted-foreground">
          <input
            type="checkbox"
            name="remember"
            className="rounded border-primary/10"
          />
          Remember me
        </label>
        <Link
          href="/forgot-password"
          className="text-primary hover:text-primary/80 transition-colors"
        >
          Forgot password?
        </Link>
      </div>

      {/* Submit Button */}
      <SubmitButton />

      {/* Sign Up Link */}
      <p className="text-center text-muted-foreground">
        Don't have an account?{" "}
        <Link
          href="/signup"
          className="text-primary hover:text-primary/80 transition-colors"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
};

// SignIn Page Component
const SignInPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            {/* <Link href="/">
              <Image
                src="/logo.png"
                alt="Laajawab Spices"
                width={180}
                height={60}
                className="mx-auto mb-6"
              />
            </Link> */}
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Welcome Back
            </h2>
            <p className="text-muted-foreground">
              Sign in to access your account
            </p>
          </div>

          <SignInForm />
        </div>
      </div>

      {/* Image Section - Hidden on Mobile */}
      <div className="hidden lg:block relative w-1/2 bg-black">
        <Image
          src="/image5.jpg"
          alt="Spices Background"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute inset-0 flex items-center p-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              Welcome to Laajawab Spices
            </h1>
            <p className="text-lg text-white/80">
              Sign in to explore our exclusive collection of premium spices from
              Northeast India.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
