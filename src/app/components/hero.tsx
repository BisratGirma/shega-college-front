import Image from "next/image";
import nextFont from "next/font";

import HeroImage from "../../../public/xy college hero.svg";

function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-6xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Harmony in Learning
          </h1>
          <p className="max-w-2xl mb-6 font-extrabold font- text-primary-500 lg:mb-8 text-6xl">
            Uniting Curiosity and Knowledge
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-[#fff] rounded-lg bg-primary-500 hover:bg-primary-800 focus:ring-1 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Explore
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 rounded-lg hover:bg-gray-100 focus:ring-1 focus:ring-gray-100 shadow-md dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Watch Video
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image src={HeroImage} alt="xy college hero image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
