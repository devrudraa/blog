import React, { useEffect, useState } from "react";
import Head from "next/head";
import BlogCard from "@/components/BlogCard";
import * as fs from "fs";

function Blog({ allBlogs }) {
  const [blogsState, setBlogs] = useState(allBlogs);

  return (
    <>
      <Head>
        <title>Blogs - Blog Post</title>
      </Head>
      {BlogCard(blogsState, "Explore Blogs")}
    </>
  );
}

export default Blog;

export async function getStaticProps(context) {
  let allBlogs = await fs.promises.readFile("backend/blogs.json", "utf-8");
  allBlogs = await JSON.parse(allBlogs);
  return {
    props: { allBlogs },
  };
}
