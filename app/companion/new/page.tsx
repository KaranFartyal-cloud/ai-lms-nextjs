import CompanionForm from "@/components/CompanionForm";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-[80vh] flex flex-col  justify-center items-center">
      
      <div className="w-1/3">
        <CompanionForm />
      </div>
    </div>
  );
};

export default page;
