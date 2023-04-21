import { Html, Head, Main, NextScript } from "next/document";

export default function Document(prop) {
  // console.log(prop);
  // const page = prop["__NEXT_DATA__"].page;

  return (
    <Html lang="en" className="max-w-[1700px] mx-auto">
      <Head>
        <link rel="shortcut icon" href="/Logo.png" type="image/x-icon" />
      </Head>
      {/* <body className="dark:bg-[#0f0f0f] dark:text-white"> */}
      <body className="sm:overflow-auto dark:text-gray-200 dark:bg-slate-800  ">
        {/* {page != "/404" ? <Navbar /> : ""} */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
