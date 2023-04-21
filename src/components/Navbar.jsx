import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Nav.module.css";

function Navbar() {
  const router = useRouter();
  const [burger, setBurger] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setBurger(false);
    });
  }, [router]);

  useEffect(() => {
    if (!burger) {
      window.document.body.classList.remove("overflow-hidden");
    } else {
      window.document.body.classList.add("overflow-hidden");
    }
  }, [burger]);

  return (
    <>
      <nav
        className={`w-full p-3 flex items-center bg-gray-200 dark:bg-gray-900 dark:text-white shadow-sm dark:shadow-white shadow-black `}
      >
        {/* <div> */}
        <Image src={"/Logo.png"} width={40} height={40} alt="Code Blog Logo" />
        <div className="hidden sm:block mx-auto">
          <ul className="flex space-x-4 font-semibold text-lg lg:text-xl">
            <li className="dark:hover:bg-gray-600 hover:bg-gray-400 p-1 px-2 rounded-md">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="dark:hover:bg-gray-600 hover:bg-gray-400 p-1 px-2 rounded-md">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="dark:hover:bg-gray-600 hover:bg-gray-400 p-1 px-2 rounded-md">
              <Link href={"/blog"}>Blog</Link>
            </li>
            <li className="dark:hover:bg-gray-600 hover:bg-gray-400 p-1 px-2 rounded-md">
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>

        <div
          onClick={() => {
            setBurger(!burger);
          }}
          className="ml-auto block sm:hidden"
        >
          <div
            className={`${styles.burg} ${styles.lines}  ${
              burger ? styles.cross : ""
            }`}
          />
        </div>
      </nav>
      <div
        id={styles.mobiList}
        className={`bg-gray-200 dark:bg-gray-900 dark:text-white absolute w-full z-40 -top-[500%] h-screen sm:hidden ${
          burger ? styles.move : ""
        }`}
      >
        <ul className="p-4 flex flex-col items-center space-y-4 font-semibold ">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
        <div
          id="remove"
          onClick={() => {
            setBurger(!burger);
          }}
          className="h-full bg-gray-200 dark:bg-gray-900"
        />
      </div>
    </>
  );
}

export default Navbar;
