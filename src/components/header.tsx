import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <Card className="fixed flex h-[100px] w-full flex-row items-center justify-between rounded-none border-2 border-x-0 border-t-0 border-white border-white/5 bg-transparent px-4 backdrop-blur-sm sm:px-4 md:px-20 lg:px-40">
        <h1 className="text-white">Romans 11:36</h1>
        <div className="flex flex-row gap-4">
          <Button
            variant={"outline"}
            size={"icon"}
            className="border-none bg-transparent hover:bg-white/20"
          >
            <GithubIcon className="text-white"></GithubIcon>
          </Button>
          <Button
            variant={"outline"}
            size={"icon"}
            className="border-none bg-transparent hover:bg-white/20"
          >
            <InstagramIcon className="text-white"></InstagramIcon>
          </Button>
          <Button
            variant={"outline"}
            size={"icon"}
            className="border-none bg-transparent hover:bg-white/20"
          >
            <LinkedinIcon className="text-white"></LinkedinIcon>
          </Button>
        </div>
      </Card>
    </>
  );
};

export default Header;
