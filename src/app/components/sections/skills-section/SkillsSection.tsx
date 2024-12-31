import { prismaClient } from "@/app/lib/prisma";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import Section from "../Section";
import SkillCard from "./SkillCard";

const SkillsSection = async () => {
  const skills = await prismaClient.skill.findMany({
    orderBy: { name: "asc" },
  });

  return (
    <>
      <Section>
        <div className="bg-dot absolute inset-0 flex h-full flex-1 opacity-20">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
        </div>

        <div className="flex w-full flex-col px-16 md:px-40">
          <p className="text-3xl font-bold">Skills</p>

          <div className="flex w-full justify-center">
            <Carousel orientation="horizontal" className="w-full">
              <CarouselContent className="w-full">
                {skills &&
                  skills.map((skill) => (
                    <CarouselItem
                      key={skill.id}
                      className="basis-full lg:basis-1/4"
                    >
                      <SkillCard skill={skill} />
                    </CarouselItem>
                  ))}
              </CarouselContent>

              <CarouselPrevious />

              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </Section>
    </>
  );
};

export default SkillsSection;
