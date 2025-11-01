import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import { subjectsColors } from "@/constants";
import {
  getCompanions,
  getRecentSessions,
} from "@/lib/actions/companion.action";

export default async function Home() {
  const data = await getRecentSessions();
  const companionsArray = data?.map((item) => item.companions);

  const myCompanions = await getCompanions();

  console.log("in clinet components= ", myCompanions);

  return (
    <>
      <div className="mt-7">
        <section className="flex justify-between">
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
        <section className="flex gap-10  justify-between">
          <CompanionList
            title="Recently Completed Lessons"
            companions={companionsArray}
          />
          <CTA />
        </section>
      </div>
    </>
  );
}
