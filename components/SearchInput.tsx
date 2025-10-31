"use client";

import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { useRouter, useSearchParams } from "next/navigation";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (searchQuery) {
        params.set("topic", searchQuery);
      } else {
        params.delete("topic");
      }


      router.push(`?${params.toString()}`);
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  return (
    <Input
      className="w-2/6"
      placeholder="Search topic..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchInput;
