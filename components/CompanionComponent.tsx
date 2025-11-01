"use client";

import { useVapi } from "@/hooks/useVapi";

import { AssistantButton } from "./AssistantButton";
import { Companion } from "@/app/companion/[id]/page";
import Image from "next/image";
import { getImage } from "@/lib/utils";
import { subjectsColors } from "@/constants";
import { keyof } from "zod";

const CompanionComponent = ({ companion }: { companion: Companion }) => {
  const { isSpeechActive } = useVapi(companion);

  return (
    <div className="h-[60vh] border rounded-2xl border-black flex justify-center items-center flex-col gap-4 w-2/3 ">
      {isSpeechActive ? (
        "saying something"
      ) : (
        <Image
          src={getImage(companion.subject)}
          width={200}
          height={200}
          alt={companion.topic}
          className="p-3 rounded-3xl"
          style={{
            backgroundColor:
              subjectsColors[companion.subject as keyof typeof subjectsColors],
          }}
        />
      )}
    </div>
  );
};

export default CompanionComponent;
