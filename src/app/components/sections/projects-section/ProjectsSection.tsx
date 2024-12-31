import { prismaClient } from "@/app/lib/prisma";
import Section from "../Section";
import { CardContainer, CardBody, CardItem } from "../../ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../ui/button";

const ProjectsSection = async () => {
  const projects = await prismaClient.project.findMany();

  return (
    <Section className="px-5 md:px-40">
      <div className="bg-dot absolute inset-0 flex h-full flex-1 opacity-20">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
      </div>

      <div className="flex w-full flex-col justify-center">
        <p className="text-3xl font-bold">Projects</p>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <CardContainer key={project.id} className="inter-var py-0">
              <CardBody className="group/card relative h-full w-full flex-1 rounded-xl border border-black/[0.1] bg-muted p-4">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-white"
                >
                  {project.name}
                </CardItem>

                <CardItem translateZ="100" className="mt-4 w-full">
                  <Image
                    src={project.imageUrl}
                    height={0}
                    width={0}
                    className="h-auto w-full rounded-xl object-cover group-hover/card:shadow-xl"
                    sizes="100vw"
                    alt={`${project.name} thumbnail`}
                  />
                </CardItem>

                <CardItem
                  as="p"
                  translateZ="60"
                  className="mt-2 max-w-sm text-sm"
                >
                  {project.description}
                </CardItem>

                <div className="flex items-center justify-end">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={project.url}
                    target="__blank"
                    className="rounded-xl py-2 text-xs font-normal"
                  >
                    <Button>Visit →</Button>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProjectsSection;
