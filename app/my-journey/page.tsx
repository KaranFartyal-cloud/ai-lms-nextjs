import CompanionList from "@/components/CompanionList";
import {
  getCompanions,
  getRecentSessions,
} from "@/lib/actions/companion.action";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const Profile = async () => {
  const user = await currentUser();

  const email = user?.emailAddresses[0].emailAddress;
  const data = (await getRecentSessions(5)) as {
    companions: any[];
  }[];
  const companionsArray = data?.map((item) => item.companions);

  const totalSessiongs = (await getRecentSessions(10, true)) as number;

  const myCompanions = await getCompanions();

  if (!user) redirect("/sign-in");

  return (
    <div className="flex flex-col h-[80vh] justify-between w-full">
      <div className="flex max-lg:flex-col max-lg:items-center max-lg:gap-5 justify-between">
        <div className="flex max-lg:justify-center  gap-3">
          <Image
            className="rounded-lg"
            src={user.imageUrl!}
            width={150}
            height={150}
            alt={user?.firstName + " profile image"}
          />
          <div className="flex flex-col pt-5 gap-2">
            <p className="font-bold text-2xl">
              {user.firstName + " " + user.lastName}
            </p>
            <p className=" text-gray-500">{email}</p>
          </div>
        </div>

        {/* side tthings */}
        <div className="flex max-lg:w-2/3 max-lg:flex max-lg:items-center gap-10">
          <div className="border max-lg:w-full border-[#FE5933]  flex flex-col max-lg:justify-center gap-3 items-center p-3 rounded-lg h-[100px] max-lg:h-[200px]">
            <p>Total number of session created:</p>
            <span>{totalSessiongs}</span>
          </div>

          <div className="border max-lg:w-full border-[#FE5933] flex flex-col gap-3 items-center  max-lg:justify-center p-3 rounded-lg h-[100px] max-lg:h-[200px]">
            <p>Total number of companions created:</p>
            <span>{myCompanions.length}</span>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <CompanionList companions={companionsArray} />
      </div>
    </div>
  );
};

export default Profile;
