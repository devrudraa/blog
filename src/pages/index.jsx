import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import React from "react";
import * as fs from "fs";

const Home = (props) => {
  return (
    <React.Fragment>
      <section className="space-y-5">
        <Head>
          <title>Home Page - Blog Post</title>
          <meta
            name="description"
            content="Welcome to our coding blog! Here, you&#39;ll find the latest insights and tips on all things coding, from beginner-level tutorials to advanced coding techniques. Our team of experienced coders is dedicated to bringing you informative and engaging content on a range of topics, including programming languages, software development, web development, and more. Whether you&#39;re just starting out or you&#39;re a seasoned pro, our blog is the perfect resource for staying up-to-date on the latest trends and best practices in the coding world. So, grab a cup of coffee, settle in, and join us on our journey to becoming the best coders we can be!"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* //!Hero Section */}
        <section className="flex gap-5 items-center justify-around p-5 pt-20 relative ">
          <Image
            src="/topMain.png"
            width={500}
            height={500}
            className="absolute left-0 top-0 select-none"
            draggable={false}
            alt="waves for top left side of a hero section gray color"
          />

          <div className="xl:w-3/4 lg:w-3/4 space-y-5 z-10 p-5">
            <h1 className="text-5xl md:text-7xl font-bold tracking-wider text-red-400 ">
              Code Blog
            </h1>
            <p className="tracking-wide">
              Welcome to our coding blog! Here, you&#39;ll find the latest
              insights and tips on all things coding, from beginner-level
              tutorials to advanced coding techniques. Our team of experienced
              coders is dedicated to bringing you informative and engaging
              content on a range of topics, including programming languages,
              software development, web development, and more. Whether
              you&#39;re just starting out or you&#39;re a seasoned pro, our
              blog is the perfect resource for staying up-to-date on the latest
              trends and best practices in the coding world. So, grab a cup of
              coffee, settle in, and join us on our journey to becoming the best
              coders we can be!
            </p>

            <Link href={"#blogs"}>
              <button className="p-2.5 mt-8  border  dark:bg-transparent bg-red-500 rounded-full px-5 font-semibold dark:border-white border-black dark:hover:bg-slate-700 hover:scale-105 transition-all">
                Explor Blogs
              </button>
            </Link>
          </div>
          <div className="lg:block hidden  w-[40%]">
            <Image
              src={"/homeArt.png"}
              fill
              className="!relative"
              alt="red color lliustration of mobile and a laptop for development"
            />
          </div>
        </section>

        {/*  //! Cards Of blog*/}
        {BlogCard(props.topBlogs, "Popular Blogs")}
      </section>
    </React.Fragment>
  );
};

export async function getStaticProps() {
  let topBlogs = await fs.promises.readFile("backend/blogs.json", "utf-8");
  topBlogs = await JSON.parse(topBlogs);
  return {
    props: { topBlogs },
  };
}

export default Home;
