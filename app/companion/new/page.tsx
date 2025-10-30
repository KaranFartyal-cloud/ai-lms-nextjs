import CompanionForm from "@/components/CompanionForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import React from "react";

const page = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }
  return (
    <div className="w-full h-[80vh] flex flex-col  justify-center items-center">
      <div className="w-1/3">
        <CompanionForm />
      </div>
    </div>
  );
};

export default page;
