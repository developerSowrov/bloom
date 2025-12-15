import Section from "../Section"
import HeroHeading from "./HeroHeading"
import CTA from "./CTA"
import Image from "next/image"
import { starIcon } from "@/public/img";

export default function HeroContent({ data }) {
    const { background, title, cta, description, heroImage,  } = data || {}
    console.log(background.color)
  return (
    <Section  parentClassName={`${ background.type==='color' && `bg-[${background.color}]`} relative `} 
             sectionClassName="flex h-auto flex-col md:flex-row">
          {/* LEFT */}
          <div className="mt-9 flex flex-col items-start gap-6 md:w-1/2 ">

            <h2 id={title.id} className={"text-center font-integralCF text-3xl max-xl:leading-8 xl:text-5xl font-black text-left text-4xl xl:text-7xl"}>
              {title.text}
            </h2>

            <p className="max-xl:leading-5 xl:w-11/12" id={description.id}> { description.text } </p>
            <CTA data={cta}/>

            <div className="mb-16 mt-9 md:mt-0 lg:mt-9 grid grid-cols-2 gap-3 child:grid child:gap-1 max-xl:mx-auto text-center md:text-start md:flex md:grid-cols-3 md:gap-2 xl:gap-5 @media(min-width:1280px):child:px-6">
              <div className="flex flex-col max-xl:border-r md:border-hidden pr-5 md:pr-0 md:pl-0 text-center">
                <span className="text-2xl font-extrabold xl:text-4xl xl:font-bold">200+</span>
                <span className="max-xl:text-xs">International Brands</span>
              </div>
              <div className="flex flex-col md:border-x border-gray-300 px-6 md:px-2 lg:px-6 text-center">
                <span className="text-2xl font-extrabold xl:text-4xl xl:font-bold">2,000+</span>
                <span className="max-xl:text-xs">High-Quality Products</span>
              </div>
              <div className="flex flex-col max-xl:col-span-2 max-xl:justify-center text-center">
                <span className="text-2xl font-extrabold xl:text-4xl xl:font-bold">30,000+</span>
                <span className="max-xl:text-xs">Happy Customers</span>
              </div>
            </div>
            
          </div>
    
          {/* RIGHT */}
          <div className="relative flex justify-end max-xl:-mt-10 md:mt-0 md:w-1/2">
            {/* BANNER */}
            {
                (heroImage && heroImage.image) 
                    && <Image
                            id={heroImage.id}
                            src={heroImage.image.url}
                            alt={heroImage.image.alt}
                            width={999}
                            height={999}
                            draggable={false}
                            className="-bottom-[9.5px] xl:absolute xl:w-[600px] xl:h-[600px] object-contain"
                        />
            }
            
    
            {/* STAR ICONS */}
            <Image
              src={starIcon}
              alt="star"
              width={100}
              height={100}
              draggable={false}
              className="absolute top-7 aspect-square max-xl:right-4 max-xl:w-16 max-xl:h-16 xl:top-24" />
    
            <Image
              src={starIcon}
              alt="star"
              width={50}
              height={50}
              draggable={false}
              className="absolute left-6 top-28 aspect-square max-xl:w-9 max-xl:h-9 xl:left-20 xl:top-72"
            />
          </div>
        </Section>
  )
}
