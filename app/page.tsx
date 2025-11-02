import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import { subjectsColors } from "@/constants";
import {
  getCompanions,
  getRecentSessions,
} from "@/lib/actions/companion.action";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const data = (await getRecentSessions(7)) as {
    companions: any[];
  }[];
  const companionsArray = data?.map((item) => item.companions);

  const myCompanions = await getCompanions();

  const user = await currentUser();
  console.log(user);

  return (
    <>
      {/* Display ui for non signed user */}
      <div className="mt-7 max-sm:flex max-sm:flex-col max-sm:items-center">
        <section className="flex justify-between max-sm:flex-col max-sm:items-center max-sm:w-2/3 max-sm:gap-4">
          {myCompanions.map((item) => (
            <CompanionCard
              key={item.id}
              id={item.id}
              subject={item.subject}
              name={item.name}
              topic={item.topic}
              duration={item.duration}
              color={
                subjectsColors[item.subject as keyof typeof subjectsColors]
              }
            />
          ))}
        </section>
        <section className="flex gap-10 max-sm:flex max-sm:justify-center justify-between">
          <CompanionList companions={companionsArray} />
          <CTA />
        </section>
      </div>
    </>
  );
}
