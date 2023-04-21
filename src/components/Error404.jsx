import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
const Error404 = () => {
  //   console.log(e);
  return (
    <>
      <Head>
        <title>Error page not found!</title>
      </Head>

      <div className="min-w-full h-screen bg-black text-white flex items-center justify-center p-10">
        <div className="p-6 border border-white rounded-2xl space-y-5">
          <Image
            src={"/404.png"}
            width={200}
            height={200}
            className="m-auto"
            alt="404 not found!"
          />

          <h1 className="font-bold text-2xl text-red-600">
            404{" "}
            <span className="text-white align-text-top font-extralight">|</span>{" "}
            Page Not Found
          </h1>
          <div>
            <label>
              The requested page cannot be found on this site!
              <br />
              The page might not exist or been removed by the owner!
            </label>
          </div>

          <p>
            <Link href="/" className="cursor-pointer text-green-500">
              Back to home
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Error404;
