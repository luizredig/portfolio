import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

const Header = () => {
  return (
    <>
      <Card className="z-10 flex max-h-20 min-h-20 w-full items-center rounded-none border-x-0 border-t-0">
        <CardContent className="flex h-full w-full flex-row items-center justify-between p-0 px-5 md:px-40">
          <div className="flex flex-row gap-2">
            {/* GitHub logo */}
            <Link
              href={"https://github.com/luizredig"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/logos/github-logo.svg"
                alt="GitHub Logo"
                width={0}
                height={0}
                className="h-[24px] w-[24px] object-contain lg:h-[20px] lg:w-[20px]"
              />
            </Link>

            {/* LinkedIn logo */}
            <Link
              href={"https://www.linkedin.com/in/luiz-redig/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/logos/linkedin-logo.svg"
                alt="LinkedIn Logo"
                width={0}
                height={0}
                className="h-[24px] w-[24px] object-contain lg:h-[20px] lg:w-[20px]"
              />
            </Link>
          </div>

          <Drawer>
            <DrawerTrigger className="absolute left-1/2 flex min-w-80 -translate-x-1/2 justify-center">
              <span>Romans 11:36</span>
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="text-center">Romans 11:36</DrawerTitle>

                <DrawerDescription className="py-3 text-center sm:text-lg">
                  "For from Him and through Him and to Him are all things. To
                  Him be the glory forever! Amen."
                </DrawerDescription>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        </CardContent>
      </Card>
    </>
  );
};

export default Header;
