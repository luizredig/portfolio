import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "./ui/drawer";

const Header = () => {
  return (
    <>
      <Card className="fixed flex h-[100px] w-full flex-row items-center justify-between rounded-none border-2 border-x-0 border-t-0 border-white border-white/5 bg-transparent px-4 backdrop-blur-sm sm:px-4 md:px-20 lg:px-40">
        <Drawer>
          <DrawerTrigger asChild>
            <h1 className="text-white">Romans 11:36</h1>
          </DrawerTrigger>
          <DrawerContent>
            <div className="flex items-center justify-center p-10">
              <p className="italic text-white">
                Rm. 11:36 - For from him and through him and to him are all
                things. To him be glory forever. Amen!
              </p>
            </div>
          </DrawerContent>
        </Drawer>
        <div className="flex flex-row gap-4">
          <a href="https://github.com/luizredig" target="_blank">
            <Button
              variant={"outline"}
              size={"icon"}
              className="border-none bg-transparent hover:bg-white/20"
            >
              <GithubIcon className="text-white"></GithubIcon>
            </Button>
          </a>
          <a href="https://www.instagram.com/privokies/" target="_blank">
            <Button
              variant={"outline"}
              size={"icon"}
              className="border-none bg-transparent hover:bg-white/20"
            >
              <InstagramIcon className="text-white"></InstagramIcon>
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/luiz-redig/" target="_blank">
            <Button
              variant={"outline"}
              size={"icon"}
              className="border-none bg-transparent hover:bg-white/20"
            >
              <LinkedinIcon className="text-white"></LinkedinIcon>
            </Button>
          </a>
        </div>
      </Card>
    </>
  );
};

export default Header;
