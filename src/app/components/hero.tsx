import Image from "next/image";
import { Inter } from "next/font/google";

import HeroImage from "../../../public/xy college hero.svg";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "800", "900"],
});

function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div
          className={`mr-auto place-self-center lg:col-span-7 ${inter.className}`}
        >
          <h1 className="max-w-2xl mb-4 text-6xl font-black tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Harmony in Learning
          </h1>
          <p className="max-w-2xl mb-3 font-extrabold text-primary-500 text-6xl">
            Uniting Curiosity and Knowledge
          </p>
          <p className="max-w-2xl mb-9 text-[#6B7280] text-xl font-normal">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
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
