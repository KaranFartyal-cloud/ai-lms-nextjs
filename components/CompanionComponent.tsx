"use client";

import { useVapi } from "@/hooks/useVapi";
import React from "react";
import { AssistantButton } from "./AssistantButton";
import { Companion } from "@/app/companion/[id]/page";

const CompanionComponent = ({ companion }: { companion: Companion }) => {
  const { toggleCall, callStatus, audioLevel } = useVapi(companion);
  return (
    <div className="user-input">
      <AssistantButton
        audioLevel={audioLevel}
        callStatus={callStatus}
        toggleCall={toggleCall}
      ></AssistantButton>
    </div>
  );
};

export default CompanionComponent;
