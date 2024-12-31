import { Skill } from "@prisma/client";
import { CardBody, CardContainer, CardItem } from "../../ui/3d-card";
import Image from "next/image";

type SkillCardProps = {
  skill: Skill;
};

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <>
      <CardContainer className="inter-var">
        <CardBody className="group/card relative flex h-40 w-40 flex-col items-center justify-center rounded-xl border border-black/[0.1] bg-primary-foreground md:h-52 md:w-52">
          <CardItem
            translateZ="50"
            className="flex w-full justify-center font-semibold"
          >
            {skill.name}
          </CardItem>

          <CardItem
            translateZ="100"
            className="flex h-full max-h-[80%] w-full items-center justify-center"
          >
            <Image
              src={skill.imageUrl}
              height={0}
              width={0}
              className="h-full max-h-[80%] w-auto max-w-[80%] object-contain"
              sizes="100vw"
              alt={skill.name}
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </>
  );
};

export default SkillCard;
