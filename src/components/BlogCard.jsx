import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowForward } from "@mui/icons-material";

function BlogCard(blogData, Heading) {
  return (
    <section className="p-5">
      <div className="mb-5 w-fit">
        <h1 id="blogs" className="font-semibold text-4xl mb-1">
          {Heading}
        </h1>
        <hr className="bg-red-500 h-0.5" />
      </div>

      <div className="grid place-items-center lg:grid-cols-3 md:grid-cols-2 gap-5 ">
        {blogData.map((blog, i) => {
          return (
            <div
              key={i}
              className="max-w-sm border border-gray-500 rounded-md p-3 h-full flex flex-col justify-evenly shadow-sm dark:shadow-white shadow-black"
            >
              <div className="relative w-full mb-3 ">
                <Image
                  src={blog.thumbnil}
                  className="!relative rounded-md"
                  fill
                  alt="alt"
                />
              </div>
              <div className="space-y-3">
                <div>
                  <h1 className="font-semibold text-2xl">{blog.title}</h1>
                  <label className="title-font font-medium text-sm text-gray-400">
                    By: {blog.author}
                  </label>
                </div>
                <p>{blog.shortdec.slice(0, 150)}...</p>

                <Link href={`/posts/${blog.id}`} className="text-red-500">
                  <button className="mt-5">
                    Read More <ArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const Card = (blogData, heading) => {
  return (
    <section className="p-5">
      <div>
        <h1 id="blogs" className="font-semibold text-4xl mb-9">
          {Heading}
        </h1>
        <hr className="w-full bg-red-500 h-1" />
      </div>

      <div className="grid place-items-center lg:grid-cols-3 md:grid-cols-2 gap-5 ">
        {blogData.map((blog, i) => {
          <div
            key={i}
            className="max-w-sm border border-gray-500 rounded-md p-3"
          >
            <div className="relative w-full mb-3">
              <Image
                src={blog.thumbnil}
                className="!relative rounded-md"
                fill
                alt="alt"
              />
            </div>
            <div className="space-y-3">
              <div>
                <h1 className="font-semibold text-2xl">{blog.title}</h1>
                <label className="title-font font-medium text-sm text-gray-400">
                  By: {blog.author}
                </label>
              </div>
              <p>{blog.shortdec.slice(0, 150)}...</p>

              <Link href={`/posts/${blog.id}`} className="text-red-500">
                <button className="mt-5">
                  Read More <ArrowForward />
                </button>
              </Link>
            </div>
          </div>;
        })}
      </div>
    </section>
  );
};

export default BlogCard;
