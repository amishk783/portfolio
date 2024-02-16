import { About } from "./About";
import { ContactForm } from "./ContactForm";
import { Education } from "./Education";
import { Hero } from "./Hero";
import { Portfolio } from "./Portfolio";
import { Service } from "./Service";
import { Tools } from "./Tools";

export function Slider() {
  return (
    <section className=" md:max-xl:w-[767px] xl:custom-container  xl:relative z-10">
      <div className="flex flex-col xl:pl-16  md:ml-20 lg:ml-[180px] max-md:pl-3 xl:ml-auto  xl:max-w-[770px] w-full">
        <Hero />
        <About />
        <Education />
        <Service />
        <Tools />
        <Portfolio />
        <ContactForm />
      </div>
    </section>
  );
}
