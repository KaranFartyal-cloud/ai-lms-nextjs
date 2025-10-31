import CompanionCard from "@/components/CompanionCard";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";
import { subjectsColors } from "@/constants";
import { getAllCompanions } from "@/lib/actions/companion.action";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const filters = await searchParams;

  const subject = filters.subject ? filters.subject : "";
  const topic = filters.topic ? filters.topic : "";

  const companions = await getAllCompanions({ subject, topic });

  return (
    <>
      <main className="mt-8 w-full">
        <div className=" w-full flex justify-between items-center">
          <h1 className="text-2xl font-bold">Companions Library</h1>
          <div className="flex w-full justify-end items-center gap-8">
            <SearchInput />
            <SubjectFilter />
          </div>
        </div>

        <section className="mt-7 grid grid-cols-3">
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
