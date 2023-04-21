import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Custom404 from "../404";
import MainBlog from "@/components/BlogTemp";
import * as fs from "fs";

const Blog = ({ blogData }) => {
  const [blogsState, setBlogs] = useState(blogData);

  if (blogsState === undefined) {
    return <Custom404 />;
  } else {
    return blogsState.map((data) => {
      if (data?.error) {
        return <Custom404 key={404} />;
        // <StatusCode
      } else {
        return (
          <div key={data.mainInfo.author}>
            <Head>
              <title>{data.content.title} - BlogPost</title>
            </Head>
            {/* //* Whole Content */}
            <section className="container sm:p-8 p-4 lg:max-w-[80%] xl:max-w-[80%]">
              {/* // * Main Heading */}
              <section className="flex space-x-5">
                <div className="bg-green-500 p-0.5  rounded-full">
                  <Image
                    src={data.mainInfo.profilePic}
                    alt="Userprofile Picture"
                    height={50}
                    width={50}
                    className="rounded-full border-2 border-white"
                    sizes="100px"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xl">{data.mainInfo.author}</h3>
                  <label htmlFor="name" className="text-sm font-medium">
                    {data.mainInfo.date}
                  </label>
                </div>
              </section>
              {/* // * Contain */}
              <section className="mt-6 mb-6 relative space-y-10">
                <h1 className="font-semibold text-3xl ">
                  {data.content.title}
                </h1>
                {/* //* Hero section image */}
                <div className="relative">
                  <Image
                    src={data.content.heroImage}
                    fill
                    className="!relative xl:max-w-[70%] lg:max-w-[80%] rounded-lg"
                    alt={data.content.heroAlt}
                    priority
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  />
                  {/* <div className="w-[80%] h-[30%]"></div> */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.content?.imageOwner,
                    }}
                  ></div>
                  {/* <CodeBlock></CodeBlock> */}
                </div>

                {/* //* Main Text Content  */}
                <section className="space-y-9 text-xl">
                  {/* // * Main Content */}
                  <div
                    className="text-2xl"
                    dangerouslySetInnerHTML={{
                      __html: data.content.smallContent,
                    }}
                  ></div>
                  {/* // * Left over content */}
                  {MainBlog(data.content.blog)}
                </section>
              </section>
              <section className="space-y-5">
                {data.content?.conclusion ? (
                  <h1 className="font-bold text-3xl">Conclusion</h1>
                ) : (
                  ""
                )}
                <div
                  className="text-lg"
                  dangerouslySetInnerHTML={{ __html: data.content?.conclusion }}
                />
              </section>
            </section>
          </div>
        );
      }
    });
  }
};

// export default dynamic(() => Promise.resolve(Blog), { ssr: false });
export default Blog;
export async function getStaticPaths(context) {
  let paths = [];
  let files = await fs.promises.readFile("backend/blogs.json", "utf-8");
  files = await JSON.parse(files);
  if (files != undefined) {
    await files.map((data) => {
      paths.push({ params: { slug: data.id } });
    });
  }
  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  let blog;
  try {
    blog = await fs.promises.readFile(
      "backend/posts/" + slug + ".json",
      "utf-8"
    );
    blog = blog;
  } catch (er) {
    blog = '[{"error":"true"}]';
  }

  return {
    props: { blogData: JSON.parse(blog) },
  };
}
