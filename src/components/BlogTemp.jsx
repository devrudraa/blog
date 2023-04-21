"use clint";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Image from "next/image";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import CheckIcon from "@mui/icons-material/Check";

const MainHeading = (heading) => {
  return <h1 className="text-3xl font-bold my-3">{heading}</h1>;
};

const Heading = (heading) => {
  return <h1 className="text-2xl font-semibold my-3">{heading}</h1>;
};

const Img = (src, alt) => {
  return (
    <div className="relative">
      <Image
        className="!relative rounded-md !w-full sm:!w-[80%] my-3"
        src={src}
        fill
        alt={alt}
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
    </div>
  );
};

const CodeBlock = (code, lang) => {
  const [copy, setCopy] = useState(false);
  return (
    <div className="my-5">
      <div className="flex justify-between py-1 px-3 items-center bg-gray-700 rounded-t-md">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-white">
          <button
            className="text-base"
            onClick={() => {
              navigator.clipboard.writeText(code);
              setCopy(true);
              setTimeout(() => {
                setCopy(false);
              }, 1000);
            }}
          >
            {copy ? (
              <>
                <CheckIcon fontSize="small" /> Copied!
              </>
            ) : (
              <>
                <ContentPasteIcon fontSize="small" /> Copy
              </>
            )}
          </button>
        </div>
      </div>
      <SyntaxHighlighter
        language={lang}
        style={atomOneDark}
        wrapLongLines
        wrapLines
        customStyle={{ borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

const StepBlog = (steps, stepHeading) => {
  // console.log(steps, stepHeading);
  return (
    <section className="text-lg">
      {/* // * Left over content */}
      <h1 className="font-bold text-2xl mb-5">{stepHeading}</h1>
      {steps.map((step, index) => {
        return (
          <React.Fragment key={index}>
            <div className="flex">
              <div>
                <div className="rounded-full  bg-red-500 p-1 w-8 h-8 flex items-center justify-center text-white">
                  {index + 1}
                </div>
                <div className="bg-red-500 w-1 h-full mx-auto"></div>
              </div>
              <div className="sm:p-8 p-4 space-y-3">
                <header className="font-bold text-2xl">{step.topic} </header>
                <div>
                  {step.desc.map((data, id) => {
                    return data.type === "code" ? (
                      <CodeBlock key={id} code={data.code} lang={data.lang} />
                    ) : data.type === "image" ? (
                      Img(data.src, data.alt)
                    ) : (
                      <div
                        key={id}
                        dangerouslySetInnerHTML={{ __html: data.desc }}
                      ></div>
                    );
                  })}
                </div>
              </div>
            </div>
            {index + 1 === steps.length ? (
              <div className="rounded-full mx-1.5 mt-3 bg-red-500 p-1 w-5 h-5 flex items-center justify-center text-white"></div>
            ) : (
              ""
            )}
          </React.Fragment>
        );
      })}
    </section>
  );
};

const MainBlog = (blog) => {
  return blog.map((data, index) => {
    if (data.type === "code") {
      return (
        <React.Fragment key={index}>
          {CodeBlock(data.code, data.lang)}
        </React.Fragment>
      );
    } else if (data.type === "mainHeading") {
      return (
        <React.Fragment key={index}>{MainHeading(data.text)}</React.Fragment>
      );
    } else if (data.type === "heading") {
      return <React.Fragment key={index}>{Heading(data.text)}</React.Fragment>;
    } else if (data.type === "steps") {
      return (
        <React.Fragment key={index}>{StepBlog(data.steps)}</React.Fragment>
      );
    } else if (data.type === "image") {
      return (
        <React.Fragment key={index}>{Img(data.src, data.alt)}</React.Fragment>
      );
    } else if (data.type === "para") {
      return (
        <p key={index} dangerouslySetInnerHTML={{ __html: data.text }}></p>
      );
    } else if (data.type === "html") {
      return (
        <div key={index} dangerouslySetInnerHTML={{ __html: data.html }}></div>
      );
    }
  });
};

export default MainBlog;
