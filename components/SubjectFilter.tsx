"use client";

import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { subjects } from "@/constants";
import { useRouter, useSearchParams } from "next/navigation";

const SubjectFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [subjectQuery, setSubjectQuery] = useState("");

  useEffect(() => {
    if (subjectQuery === "all") {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("subject");
      router.push(`?${params.toString()}`);

      return;
    }
    const delayDebounce = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (subjectQuery) {
        params.set("subject", subjectQuery);
      }

      router.push(`?${params.toString()}`);
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [subjectQuery]);

  return (
    <Select value={subjectQuery} onValueChange={setSubjectQuery}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="All subject" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All subjects</SelectItem>
        {subjects.map((subject) => (
          <SelectItem key={subject} value={subject}>
            {subject}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SubjectFilter;
