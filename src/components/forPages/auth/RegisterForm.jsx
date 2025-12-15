"use client";

import { useState } from "react";
import { Section, Button, HeroHeading, Input } from "@/components";
import Link from "next/link";
import { starIcon } from "@/public/img";
import Image from "next/image";
import {signUp} from "../auth/lib/auth";
import { useRouter } from "next/navigation";
import { signInWithDiscord, signInWithFacebook, signInWithFigma, signInWithGithub, signInWithGoogle, signInWithLinkedIn } from "./lib/auth";

export default function RegisterForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const handleChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const { error } = await signUp({
      email: formData.email,
      password: formData.password
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Account created! Check your email for verification.");
      router.push("/login");
    }
  };

  return (
    <Section  
      parentClassName="bg-[#f3f1f1] relative min-h-[calc(100vh-200px)]" 
      sectionClassName="flex h-auto flex-col items-center justify-center py-16"
    >
      {/* Decorative Star Icons */}
      <Image
        src={starIcon}
        alt="star"
        width={80}
        height={80}
        draggable={false}
        className="absolute top-12 right-8 aspect-square max-xl:w-12 max-xl:h-12 opacity-80"
      />

      <Image
        src={starIcon}
        alt="star"
        width={60}
        height={60}
        draggable={false}
        className="absolute bottom-16 left-12 aspect-square max-xl:w-10 max-xl:h-10 opacity-80"
      />

      {/* Registration Form Container */}
      <div className="w-full max-w-md bg-white rounded-[1.25rem] p-8 md:p-10 shadow-sm">
        <HeroHeading
          tag="h1"
          title="CREATE ACCOUNT"
          className="text-center text-3xl xl:text-4xl mb-3"
        />
        
        <p className="text-center text-gray-600 mb-8">
          Join us today and start your shopping journey
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <Input
              type="text"
              value={formData.fullName}
              onChange={handleChange("fullName")}
              placeholder="Enter your full name"
              className="w-full rounded-full bg-[#f3f1f1]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <Input
              type="email"
              value={formData.email}
              onChange={handleChange("email")}
              placeholder="Enter your email"
              // icon={true}
              className="w-full rounded-full bg-[#f3f1f1]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <Input
              type="text"
              value={formData.password}
              onChange={handleChange("password")}
              placeholder="Create a password"
              className="w-full rounded-full bg-[#f3f1f1]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <Input
              type="text"
              value={formData.confirmPassword}
              onChange={handleChange("confirmPassword")}
              placeholder="Confirm your password"
              className="w-full rounded-full bg-[#f3f1f1]"
            />
          </div>

          <label className="flex items-start gap-2 cursor-pointer text-sm">
            <input type="checkbox" className="w-4 h-4 mt-1 rounded border-gray-300" required />
            <span className="text-gray-600">
              I agree to the{" "}
              <Link href="#" className="text-black font-medium hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-black font-medium hover:underline">
                Privacy Policy
              </Link>
            </span>
          </label>

          <Button 
            type="submit" 
            bgColor="black" 
            className="w-full mt-2"
            py="py-4"
          >
            Create Account
          </Button>
        </form>

        <div className="mt-6 text-center">
          <span className="text-gray-600">Already have an account? </span>
          <Link href="/login" className="text-black font-bold hover:underline">
            Sign In
          </Link>
        </div>

        {/* Social Registration Options */}
        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or sign up with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
                      <Button
                        onClick={signInWithGoogle}
                        bgColor="gray" 
                        className="w-full px-4!" 
                        py="py-3"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                          </svg>
                          Google
                        </span>
                      </Button>
                      
                      <Button 
                        onClick={signInWithFacebook}
                        bgColor="gray" 
                        className="w-full px-4!" 
                        py="py-3"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                          Facebook
                        </span>
                      </Button>
                      <Button
                        onClick={signInWithGithub}
                        bgColor="gray"
                        className="w-full px-4!"
                        py="py-3"
                      >
                        <span className="flex items-center justify-center gap-2">
                          {/* GitHub Icon */}
                          <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 
                  3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
                  0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 
                  1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.304 
                  3.492.997.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.334-5.466-5.93 
                  0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 
                  0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404 
                  11.52 11.52 0 0 1 3.003.404c2.291-1.552 3.297-1.23 
                  3.297-1.23.655 1.653.243 2.874.12 3.176.77.84 
                  1.235 1.911 1.235 3.221 0 4.609-2.807 
                  5.625-5.479 5.921.43.372.823 1.102.823 2.222 
                  0 1.606-.014 2.896-.014 3.286 0 .321.216.694.825.576 
                  C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                          </svg>
                          GitHub
                        </span>
                      </Button>
          
                      
                      <Button
                        onClick={signInWithDiscord}
                        bgColor="gray"
                        className="w-full px-4!"
                        py="py-3"
                      >
                        <span className="flex items-center justify-center gap-2">
                          {/* Discord Icon */}
                          <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 
                              0 0-.079.037c-.211.375-.444.864-.608 1.249a18.27 18.27 
                              0 0 0-5.608 0c-.163-.39-.405-.874-.617-1.249a.077.077 
                              0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.07.07 
                              0 0 0-.032.027C1.02 9.093.363 13.579.76 18.016a.082.082 
                              0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 
                              0 0 .084-.027c.462-.63.874-1.295 1.226-1.994a.076.076 
                              0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.878.077.077 
                              0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 
                              0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.062 0a.074.074 
                              0 0 1 .078.009c.12.099.246.198.372.292a.077.077 0 
                              0 1-.006.128c-.599.35-1.23.637-1.873.877a.076.076 
                              0 0 0-.04.107c.36.698.772 1.362 1.225 1.993a.076.076 
                              0 0 0 .084.028 19.876 19.876 0 0 0 6.002-3.03.077.077 
                              0 0 0 .03-.055c.5-5.177-.838-9.637-3.548-13.62a.06.06 
                              0 0 0-.031-.029ZM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 
                              0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.419 
                              0 1.334-.956 2.419-2.157 2.419Zm7.975 0c-1.183 
                              0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 
                              2.157-2.419 1.21 0 2.176 1.095 2.157 2.419 
                              0 1.334-.947 2.419-2.157 2.419Z"/>
                          </svg>
                          Discord
                        </span>
                      </Button>
                      <Button
            onClick={signInWithLinkedIn}
            bgColor="gray"
            className="w-full px-4!"
            py="py-3"
          >
            <span className="flex items-center justify-center gap-2">
              {/* LinkedIn Icon */}
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 
                2.761 2.239 5 5 5h14c2.761 0 5-2.239 
                5-5v-14c0-2.761-2.239-5-5-5zm-11 
                19h-3v-10h3v10zm-1.5-11.268c-.966 
                0-1.75-.784-1.75-1.75s.784-1.75 
                1.75-1.75 1.75.784 1.75 1.75-.784 
                1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 
                0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.757 
                1.379-1.555 2.839-1.555 3.035 0 3.596 1.998 3.596 4.59v5.598z"/>
              </svg>
              LinkedIn
            </span>
          </Button>
          <Button
            onClick={signInWithFigma}
            bgColor="gray"
            className="w-full px-4!"
            py="py-3"
          >
            <span className="flex items-center justify-center gap-2">
              {/* Figma Icon */}
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM8 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm4 10a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM16 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
              </svg>
              Figma
            </span>
          </Button>
          
          
          
          
                    </div>
        </div>
      </div>
    </Section>
  );
}
