import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import React from "react";

const loading = () => {
  return (
    <div className="flex h-[80vh] flex-col justify-center items-center">
      <div className="flex flex-col items-center space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2 flex flex-col items-center">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />

          <Button variant="ghost" disabled size="sm">
            <Spinner />
            Please wait
          </Button>
        </div>
      </div>
    </div>
  );
};

export default loading;
