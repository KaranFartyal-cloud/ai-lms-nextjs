import CompanionCard from "@/components/CompanionCard";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";
import { subjectsColors } from "@/constants";
import { getAllCompanions } from "@/lib/actions/companion.action";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const user = await currentUser();

  if (!user) redirect("/sign-in");

  const filters = await searchParams;

  const subject = filters.subject ? filters.subject : "";
  const topic = filters.topic ? filters.topic : "";

  const companions = await getAllCompanions({ subject, topic });

  return (
    <>
      <main className="mt-8 w-full max-lg:flex max-lg:flex-col max-lg:items-center">
        <div className=" w-full flex justify-between items-center max-lg:px-3">
          <h1 className="text-2xl font-bold max-lg:hidden">
            Companions Library
          </h1>
          <div className="flex w-full max-sm:justify-center justify-end items-center gap-8">
            <SearchInput />
            <SubjectFilter />
          </div>
        </div>

        <section className="mt-7 grid grid-cols-3 max-lg:w-2/3 gap-4 max-lg:flex max-lg:flex-col max-lg:items-center">
          {companions.map((companion) => (
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
