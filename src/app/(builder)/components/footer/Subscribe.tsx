"use client";

import { FC, useCallback, useState, JSX } from "react";
// import { email } from "@/utils/yup/email";
import email from "@/utils/yup/email";
import { toast } from "react-toastify";
// COMPONENT
import { Section, Button, Input } from "@/components";

type TProps = {
   className?: string;
};

const Subscribe: FC<TProps> = ({ className }): JSX.Element => {
   const [inputValue, setInputValue] = useState<string>("");
   const [isButtonDisable, setIsButtonDisable] = useState<boolean>(true);

   // onClick for button
   const buttonClickHandler = (ev: React.MouseEvent<HTMLElement>) => {
      ev.preventDefault();

      setInputValue("");
      setIsButtonDisable(true);
      toast.success("Subscribe Successfully");
   };

   // onChange for input
   const inputOnChangeHandler = useCallback(
      async (ev: React.ChangeEvent<HTMLInputElement>) => {
         setInputValue(ev.target.value);

         let isValid: { email: string } | null = null;

         try {
            isValid = await email().validate(
               {
                  email: ev.target.value,
               },
               { abortEarly: false },
            );
         } catch (err: any) {
            setIsButtonDisable(true);
         }

         isValid && setIsButtonDisable(false);
      },
      [],
   );

   return (
      <Section parentClassName={className} sectionClassName="">
         <div className="flex flex-col gap-8 items-start justify-between rounded-2xl bg-black px-6 py-9 xl:flex-row xl:gap-0 xl:px-16 xl:py-12 xl:items-center">
            <div className="flex w-full flex-col justify-center xl:w-2/3">
               <p className="text-left font-integralCF text-3xl leading-tighter text-white xl:mt-0 xl:w-5/6 xl:text-5xl">
                  STAY UPTO DATE ABOUT OUR LATEST OFFERS
               </p>
            </div>

            <form className="flex w-full flex-col justify-center  gap-3 xl:w-1/3">
               <Input
                  type="email"
                  placeholder="Enter your email address"
                  icon
                  value={inputValue}
                  onChange={inputOnChangeHandler}
                  className="px-8 py-3.5 bg-white mx-auto"
               />
               <Button
                  type="submit"
                  bgColor="white"
                  borderColor="white"
                  className="font-extrabold text-base mx-auto"
                  disable={isButtonDisable}
                  onClick={buttonClickHandler}
               >
                  Subscribe to Newsletter
               </Button>
            </form>
         </div>
      </Section>
   );
};

export default Subscribe;
