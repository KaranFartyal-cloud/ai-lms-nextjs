"use server";

import CompanionComponent from "@/components/CompanionComponent";
import MessageComponent from "@/components/MessageComponent";
import UserComponent from "@/components/UserComponent";
import { Badge } from "@/components/ui/badge";
import { subjectsColors } from "@/constants";
import { useVapi } from "@/hooks/useVapi";
import { getCompanion } from "@/lib/actions/companion.action";
import { getImage } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

export interface Companion {
  name: string;
  subject: string;
  topic: string;
  style: string;
  voice: string;
  duration: number;
}

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const user = await currentUser();

  if (!user) redirect("/sign-in");

  const { id } = await params;

  const data: Companion = await getCompanion(id);

  if (!data) redirect("/companion");

  const { name, subject, topic, style, voice, duration } = data;

  return (
    <div className="mt-10 w-full flex flex-col gap-10 ">
      <div className="border w-full border-black p-10 h-[75px] flex items-center justify-between rounded-lg">
        <div className="flex  gap-4 items-center">
          <div
            className="p-2 rounded-lg"
            style={{
              backgroundColor:
                subjectsColors[subject as keyof typeof subjectsColors],
            }}
          >
            <Image
              src={getImage(subject)}
              width={40}
              height={40}
              alt="subject-image"
            />
          </div>
          <div>
            <div className="flex  gap-5 items-center">
              <h1 className="text-2xl capitalize font-bold">{name}</h1>
              <Badge>{subject}</Badge>
            </div>
            <h1 className="capitalize">Topic: {topic}</h1>
          </div>
        </div>

        <h1 className="text-2xl text-gray-700">{duration} mins</h1>
      </div>
      <div className="flex gap-4">
        <CompanionComponent companion={data} />
        <UserComponent
          companion={data}
          userImg={user.imageUrl}
          userName={user?.firstName}
        />
      </div>

      <MessageComponent companion={data}/>
    </div>
  );
};

export default page;
