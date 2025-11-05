import React from "react";
import { Button } from "./ui/button";

import Image from "next/image";
import Link from "next/link";

//this is a Call to Action component

const CTA = () => {
  return (
    <div className="border-2 bg-[#2C2C2C] items-center text-white mt-3 rounded-2xl flex flex-col justify-center gap-10 h-[600px] w-[450px]">
      <h1
        className="text-black py-1 px-3  text-sm rounded-lg"
        style={{ backgroundColor: "#FCCC41" }}
      >
        Start learning your way
      </h1>
      <h1 className="text-2xl w-2/3 text-center font-semibold">
        Build a Personalize Learning Companion
      </h1>
      <p className="w-2/3  text-center">
        Pick a name, subject, voice, & personality — and start learning through
        voice conversations that feel natural and fun.
      </p>
      <Image src={"/banner.png"} alt={"banner"} height={250} width={250} />
      <div className="w-2/3">
        <Link href={"/companion/new"}>
          <Button className="w-full cursor-pointer hover:bg-[#ec5331] bg-[#FE5933] rounded-lg h-10 text-white">
            Build new companion
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CTA;
