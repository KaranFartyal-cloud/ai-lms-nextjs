import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";

export default function Home() {
  return (
    <>
      <div className="mt-7">
        <section className="flex justify-between">
          <CompanionCard
            id="1"
            subject="science"
            name="Neura the brainy Explorer"
            topic="Neural Network of the brain"
            duration={45}
            color="#E5D0FF"
          />
          <CompanionCard
            id="2"
            subject="maths"
            name="Countsy the Number wizard"
            topic="Derivatives and angles"
            duration={30}
            color="#FFDA6E"
          />
          <CompanionCard
            id="3"
            subject="language"
            name="Verba the vocabulary builder"
            topic="English literature"
            duration={30}
            color="#BDE7FF"
          />
        </section>
        <section className="flex gap-10  justify-between">
          <CompanionList
            title="Recently Completed Lessons"
            companions={recentSessions}
          />
          <CTA />
        </section>
      </div>
    </>
  );
}
