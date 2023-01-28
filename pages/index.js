import GradientBg from "@/src/components/gradient/gradient-bg";
import Image from "next/image";
import React from "react";
import Logo from "src/assets/svg/logo.svg";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3  h-screen">
      <div className=" flex flex-col justify-center items-center ">
        <Image
          src={Logo}
          alt="Logo"
          className=" justify-center items-center h-2/4 lg:h-2/4 "
        />
        <div className="hidden lg:block ">
          <div className="px-20">
            <p
              className="text-3xl text-center font-sans font-bold"
              style={{
                color: "#775169",
              }}
            >
              Lorem Ipsum is simply dummy text.
            </p>
            <p className="text-sm text-center font-meduim">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              eius, nostrum deserunt perspiciatis eligendi nulla alias laborum
              nisi beatae nemo, sunt dolorum id atque vitae. Architecto autem
              odit excepturi sequi?
            </p>
          </div>
        </div>
      </div>

      <GradientBg>
        <div className=" p-10 flex flex-col justify-center">
          <div className="flex flex-col">
            <div className="text-5xl text-left font-black">
              Hello Guys!
              <br />
              We are coming soon...
            </div>
            <div className="text-2xl pt-5 text-left font-extrabold">
              Our website is currently under development
              <br />
              We'll be here soon with our new awesome site.
            </div>
            <div className="grid w-10 lg:grid-cols-2 gap-4 min-w-max pt-5">
              <a href="https://www.facebook.com/bashnepal">
                {" "}
                <button
                  className="text-white text-lg items-center font-bold py-2 px-4 rounded border-b-0 hover:border-b-4 flex flex-row gap-3"
                  style={{
                    backgroundColor: "#775169",
                    borderBottomColor: "#472E3E",
                  }}
                >
                  <AiFillFacebook
                    className="col-span-1"
                    style={{
                      fontSize: "2em",
                    }}
                  ></AiFillFacebook>
                  Follow us on Facebook
                </button>
              </a>

              <a href="https://www.instagram.com/bashnepal/">
                <button
                  class="text-white text-lg items-center font-bold py-2 px-4 border-b-0 hover:border-b-4 rounded flex flex-row gap-3"
                  style={{
                    backgroundColor: "#775169",
                    borderBottomColor: "#472E3E",
                  }}
                >
                  <AiFillInstagram
                    className="col-span-1"
                    style={{
                      fontSize: "2em",
                    }}
                  ></AiFillInstagram>
                  Follow us on Instagram
                </button>
              </a>
            </div>
          </div>
        </div>
      </GradientBg>
    </div>
  );
}

export default Home;
