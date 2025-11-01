"use client";

import React, { useEffect, useState } from "react";
import { Companion } from "@/app/companion/[id]/page";
import { useVapi } from "@/hooks/useVapi";

const MessageComponent = ({ companion }: { companion: Companion }) => {
  const { messages } = useVapi(companion);

  return (
    <div className="relative w-2/3 mx-auto flex flex-col items-center overflow-hidden h-[10vh]">
      {messages.map((message, index) => {
        if ("role" in message && message.role === "assistant") {
          return (
            <p className="text-2xl text-center" key={index}>
              {companion.name}: {message.transcript}
            </p>
          );
        }
        return null;
      })}
    </div>
  );
};

export default MessageComponent;
