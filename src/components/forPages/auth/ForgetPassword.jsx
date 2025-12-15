"use client";

import { useState } from "react";
import { Section, Button, HeroHeading, Input } from "@/components";
import Link from "next/link";
import { starIcon } from "@/public/img";
import Image from "next/image";
import { forgetPass } from "../auth/lib/auth"

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {data, error} = forgetPass(email)
    console.log(data, error)

    if (error) {
      alert(error.message);
      return;
    }

    setSuccess(true);
  };

  return (
    <Section
      parentClassName="bg-[#f3f1f1] relative min-h-[calc(100vh-200px)]"
      sectionClassName="flex h-auto flex-col items-center justify-center py-16"
    >
      {/* Decorative Stars */}
      <Image
        src={starIcon}
        alt="star"
        width={80}
        height={80}
        draggable={false}
        className="absolute top-12 right-8 opacity-80 max-xl:w-12 max-xl:h-12"
      />
      <Image
        src={starIcon}
        alt="star"
        width={60}
        height={60}
        draggable={false}
        className="absolute bottom-16 left-12 opacity-80 max-xl:w-10 max-xl:h-10"
      />

      <div className="w-full max-w-md bg-white rounded-[1.25rem] p-8 md:p-10 shadow-sm">
        <HeroHeading
          tag="h1"
          title="RESET PASSWORD"
          className="text-center text-3xl xl:text-4xl mb-3"
        />

        <p className="text-center text-gray-600 mb-8">
          Enter your email and we will send you a reset link
        </p>

        {success ? (
          <div className="text-center text-green-600 font-medium">
            Password reset link has been sent!  
            <br />
            Check your email inbox.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-full bg-[#f3f1f1]"
              />
            </div>

            <Button
              type="submit"
              bgColor="black"
              className="w-full mt-2 cursor-pointer"
              py="py-4"
            >
              Send Reset Link
            </Button>
          </form>
        )}

        <div className="mt-6 text-center">
          <Link href="/login" className="text-black font-bold hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </Section>
  );
}
