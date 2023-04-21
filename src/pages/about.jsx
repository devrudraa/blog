import Head from "next/head";
import React from "react";
import Image from "next/image";

function about() {
  return (
    <>
      <Head>
        <title>About Page - Code Blog</title>
      </Head>
      <section className="p-8 flex justify-evenly bg-[#f2e6dd] flex-wrap-reverse text-black">
        <div className="xl:w-1/2 lg:w-1/2 p-5 space-y-5">
          <h1 className="text-red-500 text-5xl font-bold underline">
            About Me
          </h1>
          <p>
            <span className="font-semibold text-2xl">Welcome</span> to my web
            development page! My name is <b> Dev Rudra</b>, and I am a
            passionate web developer with over 3 years of experience in building
            and designing websites. I have a strong technical background and a
            deep understanding of web technologies, including HTML, CSS,
            JavaScript, and various frameworks and libraries such as React and
            Next.js. I keep myself up-to-date with the latest web development
            trends and technologies, and I am always eager to learn and improve
            my skills.
          </p>
          <div>
            <h3 className="font-bold text-2xl text-red-500">Professionalism</h3>
            <ol className="m-auto px-8 list-decimal">
              <li>Next JS</li>
              <li>Python</li>
              <li>Tailwind Css</li>
              <li>Java Script</li>
            </ol>
          </div>
        </div>
        {/* <div className="min-w-max relative bg-red-700"> */}
        <Image
          src="/aboutme.webp"
          // fill
          width={500}
          height={400}
          className="rounded-md"
          alt=""
        />
        {/* </div> */}
      </section>
    </>
  );
}

export default about;
