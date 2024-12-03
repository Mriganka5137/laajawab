"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";
import { User, Mail, Lock, Phone, Loader2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signup } from "@/lib/data/customer";

// Types
interface FormState {
  success?: boolean;
  error?: string;
}

interface SignUpData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;
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
          Creating Account...
        </>
      ) : (
        "Create Account"
      )}
    </Button>
  );
};

// Form Input Component
const FormInput = ({
  icon: Icon,
  label,
  type,
  name,
  placeholder,
  required = true,
}: {
  icon: React.ElementType;
  label: string;
  type: string;
  name: string;
  placeholder: string;
  required?: boolean;
}) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-foreground flex items-center gap-2">
      <Icon className="w-4 h-4 text-muted-foreground" />
      {label}
    </label>
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className="bg-secondary/50 border-primary/10 focus:border-primary/30 text-foreground placeholder:text-muted-foreground"
    />
  </div>
);

// SignUpForm Component
const SignUpForm = () => {
  const router = useRouter();

  const handleSubmit = async (
    prevState: FormState | null,
    formData: FormData
  ): Promise<FormState> => {
    try {
      const signupData: SignUpData = {
        first_name: formData.get("first_name") as string,
        last_name: formData.get("last_name") as string,
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        phone: formData.get("phone") as string,
      };

      //   console.log(signupData);

      await signup(signupData);
      router.push("/account");
      router.refresh();
      return { success: true };
    } catch (error) {
      return {
        error:
          error instanceof Error
            ? error.message
            : "An error occurred during sign up",
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

      {/* Name Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormInput
          icon={User}
          label="First Name"
          type="text"
          name="first_name"
          placeholder="Enter first name"
        />
        <FormInput
          icon={User}
          label="Last Name"
          type="text"
          name="last_name"
          placeholder="Enter last name"
        />
      </div>

      {/* Email Field */}
      <FormInput
        icon={Mail}
        label="Email Address"
        type="email"
        name="email"
        placeholder="Enter your email"
      />

      {/* Phone Field */}
      <FormInput
        icon={Phone}
        label="Phone Number"
        type="tel"
        name="phone"
        placeholder="Enter phone number"
      />

      {/* Password Field */}
      <FormInput
        icon={Lock}
        label="Password"
        type="password"
        name="password"
        placeholder="Create a strong password"
      />

      {/* Terms and Conditions */}
      <div className="space-y-4">
        <label className="flex items-start gap-2 text-sm text-muted-foreground">
          <input
            type="checkbox"
            name="terms"
            required
            className="mt-1 rounded border-primary/10"
          />
          <span>
            I agree to the{" "}
            <Link href="/terms" className="text-primary hover:text-primary/80">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="text-primary hover:text-primary/80"
            >
              Privacy Policy
            </Link>
          </span>
        </label>

        <SubmitButton />

        {/* Sign In Link */}
        <p className="text-center text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            Sign in
          </Link>
        </p>
      </div>
    </form>
  );
};

// SignUp Page Component
const SignUpPage: React.FC = () => {
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
              Create Account
            </h2>
            <p className="text-muted-foreground">
              Join us and start your flavorful journey
            </p>
          </div>

          <SignUpForm />
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
              Join Laajawab Spices
            </h1>
            <p className="text-lg text-white/80">
              Create your account to discover our premium spice collections and
              exclusive offers.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
