"use client";

import { Companion } from "@/app/companion/[id]/page";
import { useVapi } from "@/hooks/useVapi";
import Image from "next/image";
import React from "react";
import { AssistantButton } from "./AssistantButton";

const UserComponent = ({
  companion,
  userImg,
  userName,
}: {
  companion: Companion;
  userImg: string;
  userName: string | null;
}) => {
  const { toggleCall, callStatus, audioLevel } = useVapi(companion);

  return (
    <>
      <div className="border flex flex-col h-[40vh] gap-3 justify-center items-center border-black w-1/3 rounded-2xl">
        <Image
          src={userImg}
          height={150}
          width={150}
          alt="profile-pic"
          className="rounded-lg max-lg:hidden"
        />
        <h1 className="text-2xl font-semibold">{userName}</h1>

        <div className="user-input">
          <AssistantButton
            audioLevel={audioLevel}
            callStatus={callStatus}
            toggleCall={toggleCall}
          ></AssistantButton>
        </div>
      </div>
    </>
  );
};

export default UserComponent;
