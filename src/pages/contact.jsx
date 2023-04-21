import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

function Conatct() {
  console.log("render");
  const [modal, setModal] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  let inpStyle = "p-2 rounded-lg border shadow-md font-semibold text-black";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmited = (data) => {
    setSending(true);

    fetch("/api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((data) => {
        // console.log(JSON.parse(data));
        if (data.ok) {
          setSent(true);
        }
        setModal(true);
        setSending(false);
      })
      .catch((error) => {
        setSent(false);
        setModal(true);
        setSending(false);
        console.log("Error: ", error);
      });
    // console.log(respoce);
  };

  return (
    <>
      <Head>
        <title>Contact Page - Blog Post</title>
      </Head>
      {modal ? Modal(sent, setModal) : ""}
      {/* <Modal state={setModal}></Modal>
       */}
      {/* {Modal(setModal)} */}
      <section className="flex justify-center px-8 py-10 ">
        <section className="space-x-5 lg:w-[30%] sm:w-[50%] w-full shadow-xl">
          <div className="p-5 w-full rounded-xl  bg-gray-200 dark:bg-slate-700 shadow-sm dark:shadow-white shadow-black ">
            <div>
              <h1 className="font-semibold text-4xl underline py-3">
                Reach out to me
              </h1>
              <label htmlFor="h1">
                If you have any questions or concerns, don&#39;t hesitate to
                reach out to me.
              </label>
            </div>
            <form
              onSubmit={handleSubmit(formSubmited)}
              className="space-y-5 flex flex-col mt-7"
            >
              <div>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  className={`${inpStyle} w-full ${
                    errors.name?.message
                      ? "border-red-500 border-2 error outline-red-500"
                      : ""
                  }`}
                  placeholder="Name"
                />
                <p className="text-red-500 text-sm">{errors.name?.message}</p>
              </div>
              <div>
                <input
                  type="text"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "This doesn&#39;t look like an email!",
                    },
                  })}
                  className={`${inpStyle} w-full ${
                    errors.email?.message
                      ? "border-red-500 border-2 error outline-red-500"
                      : ""
                  }`}
                  placeholder="Email"
                />
                <p className="text-red-500 text-sm">{errors.email?.message}</p>
              </div>
              <div>
                <textarea
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 50,
                      message: "Message can not less than 50 letters",
                    },
                    maxLength: {
                      value: 1000,
                      message: "Message can not less than 1000 letters",
                    },
                  })}
                  placeholder="Message"
                  className={`${inpStyle} h-[8em] w-full ${
                    errors.message?.message
                      ? "border-red-500 border-2 error outline-red-500"
                      : ""
                  }`}
                />
                <p className="text-red-500 text-sm">
                  {errors.message?.message}
                </p>
              </div>

              <button
                disabled={sending}
                type="submit"
                className="w-full disabled:bg-gray-500 bg-black text-white  p-2 font-semibold text-xl rounded-full shadow-lg"
              >
                {sending ? (
                  <Image
                    src={"/loading.gif"}
                    width={30}
                    height={30}
                    className="mx-auto"
                    alt="Loading Gif"
                  />
                ) : (
                  "Send"
                )}
              </button>
            </form>
          </div>
        </section>
      </section>
    </>
  );
}

const Modal = (state, setModal) => {
  return state ? (
    <section className="fixed px-5 flex items-center justify-center bg-gray-300 bg-opacity-50 backdrop-blur-sm w-full h-full top-0 right-0 z-50">
      <div className=" space-y-4 py-5 px-3 border border-green-700 rounded-lg dark:bg-gray-800 bg-slate-400">
        <Image
          src="/mail_sent.png"
          width={200}
          height={200}
          className="mx-auto"
          alt="success image"
        />
        <h1 className="font-semibold text-2xl text-green-500">
          Mail sucessfully sent!
        </h1>
        <p className="w-80">
          Thank you for contacting me! I got your mail and I will try to
          responce soon!
        </p>
        <Link href="/">
          <button className="bg-green-400 px-3 py-2 rounded text-black font-semibold mt-3">
            Close
          </button>
        </Link>
      </div>
    </section>
  ) : (
    <section className="fixed px-5 flex items-center justify-center bg-gray-300 bg-opacity-50 backdrop-blur-sm w-full h-full top-0 right-0 z-50">
      <div className=" space-y-4 py-5 px-3 border border-red-700 rounded-lg dark:bg-gray-800 bg-slate-400">
        <Image
          src="/mail_error.png"
          width={200}
          height={200}
          className="mx-auto"
          alt="error image"
        />
        <h1 className="font-semibold text-2xl text-red-600">Mail not sent!</h1>
        <p className="w-80">
          <label className="font-semibold">Srooy for the inconvenience! </label>
          <br /> Your mail/message was not sent make sure that the email you
          entered is spelled correctly and is working!
        </p>
        <button
          onClick={() => {
            setModal(false);
            // console.log(error);
          }}
          className="bg-red-400 px-3 py-2 rounded text-black font-semibold"
        >
          Close
        </button>
      </div>
    </section>
  );
};

export default Conatct;
