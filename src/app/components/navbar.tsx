"use client";

import Image from "next/image";
import CollegeLogo from "../../../public/college-logo.svg";
import Link from "next/link";
import classNames from "classnames";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setOpen] = useState(true);

  console.log("is open value: ", isOpen);

  const navItem = classNames({
    "text-[#6B7280] hover:bg-[#009A6A] hover:text-white active:bg-[#009A6A] active:text-white rounded-md px-3 py-2 text-sm font-medium":
      true,
  });
  const navItemMobile = classNames({
    "text-[#6B7280] hover:bg-[#009A6A] hover:text-white active:bg-[#009A6A] active:text-white block rounded-md px-3 py-2 text-base font-medium":
      true,
  });

  return (
    <nav className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* // <!-- Mobile menu button--> */}
            <button
              type="button"
              onClick={() => setOpen((openState) => !openState)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-[#6B7280] hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/*
             Icon when menu is closed.

             Menu open: "hidden", Menu closed: "block"
         */}
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/*
             Icon when menu is open.

             Menu open: "block", Menu closed: "hidden"
           */}
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link className="flex flex-shrink-0 gap-2 items-center" href="/">
              <Image
                width={10}
                height={10}
                className="h-8 w-auto"
                src={CollegeLogo}
                alt="xy college logo"
              />
              <p className="text-black font-bold">XY College</p>
            </Link>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <Link href="#" className={navItem} aria-current="page">
                  Courses
                </Link>
                <Link href="#" className={navItem}>
                  Subjects
                </Link>
                <Link href="#" className={navItem}>
                  Teachers and Students
                </Link>
                <Link href="#" className={navItem}>
                  Grades
                </Link>
                <Link href="" className={navItem}>
                  Analytics
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className="sm:hidden" id="mobile-menu">
        <div
          className={classNames({
            "space-y-1 px-2 pb-3 pt-2": true,
            hidden: isOpen,
          })}
        >
          <Link href="/courses" className={navItemMobile}>
            Courses
          </Link>
          <Link href="/subjects" className={navItemMobile}>
            Subjects
          </Link>
          <Link href="teachers-and-students" className={navItemMobile}>
            Teachers and Students
          </Link>
          <Link href="/grades" className={navItemMobile}>
            Grades
          </Link>
          <Link href="/analytics" className={navItemMobile}>
            Analytics
          </Link>
        </div>
      </div>
    </nav>
  );
}
