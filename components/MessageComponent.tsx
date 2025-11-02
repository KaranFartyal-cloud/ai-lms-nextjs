"use client";

import React, { useEffect, useState } from "react";
import { Companion } from "@/app/companion/[id]/page";
import { useVapi } from "@/hooks/useVapi";
import { Badge } from "./ui/badge";
import { subjectsColors } from "@/constants";

const MessageComponent = ({ companion }: { companion: Companion }) => {
  const { messages } = useVapi(companion);

  return (
    <div className="relative max-lg:flex max-lg:flex-col max-lg:w-full max-lg:items-between  mx-auto flex flex-col items-center overflow-hidden ">
      {messages.map((message, index) => {
        if ("role" in message && message.role === "assistant") {
          return (
            <div
              className="text-[20px] flex w-full gap-2 text-center"
              key={index}
            >
              <span className="capitalize flex gap-3 items-center font-semibold w-2/3">
                {companion.name}
                <Badge
                  className="text-black"
                  style={{
                    backgroundColor:
                      subjectsColors[
                        companion.subject as keyof typeof subjectsColors
                      ],
                  }}
                >
                  &nbsp;{companion.subject} teacher
                </Badge>
                :
              </span>
              <span className="max-lg:w-2/3">{message.transcript}</span>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default MessageComponent;
