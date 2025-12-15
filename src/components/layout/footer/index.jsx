import { company, help, categories, policies } from "./items";

// COMPONENT
import { HorizontalLine, Logo, Section, Social } from "@/components";
import BelowFooter from "./BelowFooter";
import Subscribe from "./Subscribe";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-56">
      <Subscribe className="absolute -top-40 left-1/2 w-full -translate-x-1/2 xl:-top-32" />

      <Section parentClassName="bg-[#f3f1f1] pt-52">
        <section className="flex max-xl:flex-col">
          {/* Info */}
          <div className="xl:w-1/3">
            <div className="flex flex-col gap-5 xl:w-2/3">
              <Logo />

              <p className="cursor-default text-base text-black/60 transition-colors hover:text-black">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>

              <Social />
            </div>
          </div>

          {/* Links */}
          <div
            className="grid grid-cols-2 gap-y-9 
            *:flex *:flex-col *:gap-6 
            max-xl:mt-9 max-xl:*:gap-4 
            xl:w-2/3 xl:grid-cols-4 xl:gap-20"
          >
            <div>
              <span className="font-bold uppercase tracking-widest">
                company
              </span>

              <ul className="flex flex-col gap-4 text-black/60 *:w-fit *:transition-colors ">
                {company.map((item) => (
                  <li
                    key={item.label}
                    className="relative overflow-hidden transition"
                  >
                    <Link
                      href={item.href}
                      className="
                        hover:text-black transition duration-500
                        before:absolute before:left-0 before:bottom-0 before:h-0.5
                        before:w-0 before:bg-black before:transition-all before:duration-500
                        hover:before:w-full
                      "
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="font-bold uppercase tracking-widest">
                categories
              </span>

              <ul className="flex flex-col gap-4 text-black/60 *:w-fit *:transition-colors ">
                {categories.map((item) => (
                  <li
                    key={item.label}
                    className="relative overflow-hidden transition"
                  >
                    <Link
                      href={item.href}
                      className="
                        hover:text-black transition duration-500
                        before:absolute before:left-0 before:bottom-0 before:h-0.5
                        before:w-0 before:bg-black before:transition-all before:duration-500
                        hover:before:w-full
                      "
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="font-bold uppercase tracking-widest">help</span>

              <ul className="flex flex-col gap-4 text-black/60 *:w-fit *:transition-colors ">
                {help.map((item) => (
                  <li
                    key={item.label}
                    className="relative overflow-hidden transition"
                  >
                    <Link
                      href={item.href}
                      className="
                        hover:text-black transition duration-500
                        before:absolute before:left-0 before:bottom-0 before:h-0.5
                        before:w-0 before:bg-black before:transition-all before:duration-500
                        hover:before:w-full
                      "
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="font-bold uppercase tracking-widest">
                policies
              </span>

              <ul className="flex flex-col gap-4 text-black/60 *:w-fit *:transition-colors ">
                {policies.map((item) => (
                  <li
                    key={item.label}
                    className="relative overflow-hidden transition"
                  >
                    <Link
                      href={item.href}
                      className="
                        hover:text-black transition duration-500
                        before:absolute before:left-0 before:bottom-0 before:h-0.5
                        before:w-0 before:bg-black before:transition-all before:duration-500
                        hover:before:w-full
                      "
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <HorizontalLine className="mt-7" />

        <BelowFooter />
      </Section>
    </footer>
  );
}
