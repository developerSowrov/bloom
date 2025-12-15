"use client";

import { useState } from "react";
import { Section, Button, HeroHeading, Input } from "@/components";
import { resetPass } from "./lib/auth";
import { useRouter } from "next/navigation";

export default function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter()
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const { error } = resetPass(password)
    if (error) {
      alert(error.message);
      return;
    }

    setSuccess(true);
    router.push("/")
  };

  return (
    <Section
      parentClassName="bg-[#f3f1f1] relative min-h-[calc(100vh-200px)]"
      sectionClassName="flex h-auto flex-col items-center justify-center py-16"
    >
      <div className="w-full max-w-md bg-white rounded-[1.25rem] p-8 md:p-10 shadow-sm">
        <HeroHeading
          tag="h1"
          title="RESET PASSWORD"
          className="text-center text-3xl xl:text-4xl mb-3"
        />

        {success ? (
          <div className="text-center text-green-600 font-medium">
            Your password has been reset successfully!  
            <br />
            You can now login with your new password.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                New Password
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter new password"
                className="w-full rounded-full bg-[#f3f1f1]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                className="w-full rounded-full bg-[#f3f1f1]"
              />
            </div>

            <Button
              type="submit"
              bgColor="black"
              className="w-full mt-2 cursor-pointer"
              py="py-4"
            >
              Reset Password
            </Button>
          </form>
        )}
      </div>
    </Section>
  );
}
