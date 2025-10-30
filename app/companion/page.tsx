import CompanionCard from "@/components/CompanionCard";
import { subjectsColors } from "@/constants";
import { getAllCompanions } from "@/lib/actions/companion.action";
import { SearchParams } from "next/dist/server/request/search-params";
import React from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const filters = await searchParams;

  const subject = filters.subject ? filters.subject : "";
  const topic = filters.topic ? filters.topic : "";

  const companions = await getAllCompanions({ subject, topic });

  console.log(companions);
  return (
    <>
      <main className="mt-8">
        <section className="flex justify-between">
          <h1 className="text-2xl font-bold">Companions Library</h1>
          <div>Filters</div>
        </section>

        <section className="mt-7 grid grid-cols-3">
          {companions.map((companion, index) => (
            <CompanionCard
              key={companion.id}
              {...companion}
              color={
                subjectsColors[companion.subject as keyof typeof subjectsColors]
              }
            />
          ))}
        </section>
      </main>
    </>
  );
}
