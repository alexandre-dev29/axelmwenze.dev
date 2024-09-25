import MyImage from "./me.jpeg";
import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { LucideFileText } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Axel Mwenze | About",
};

export default function Home() {
  return (
    <div className="flex flex-col-reverse h-[80vh] lg:flex-row lg:w-11/12 xl:w-9/12 mx-auto justify-center items-center  px-6">
      <div
        className={
          "flex h-[45%] flex-col justify-around items-center lg:items-start md:mt-0 gap-4"
        }
      >
        <p
          className={
            "text-lg sm:text-2xl md:text-4xl dark:text-muted-foreground font-bold capitalize text-secondary tracking-wider default-police"
          }
        >
          welcome I am,
        </p>
        <h2
          className={
            "text-4xl sm:text-5xl text-center md:text-left lg:text-6xl capitalize text-gray-800 dark:text-gray-100 font-extrabold"
          }
        >
          Axel mwenze
        </h2>
        <p
          className={
            "text-3xl sm:text-4xl md:text-5xl 3xl:text-6xl text-center lg:text-left capitalize text-gray-900  font-bold text-secondary default-police"
          }
        >
          I Build web and mobile application
        </p>
        <p
          className={
            "tracking-widest default-police mt-0 sm:mt-8 md:mt-4 md:text-xl sm:text-2xl text-center md:text-center lg:text-left dark:text-muted-foreground"
          }
        >
          I am a software engineer,FullStack Web developer and Udemy Instructor.
          <span className="block">
            {` My main Stack are Typescript(Javascript), C# and Dart (Flutter). I'm
            also passionate about Classical music, Opera,Piano Playing,
            football, TV and I'm a big fan of Japanese anime.`}
          </span>
        </p>
        <div className="flex gap-4">
          <Link
            href={"/AxelMwenzeResume.pdf"}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              <LucideFileText className="mr-2" />
              My Resume
            </Button>
          </Link>
          <a href="mailto:example@gmail.com">
            <Button>
              <EnvelopeOpenIcon className="mr-2" />
              Contact me
            </Button>
          </a>
        </div>
        {/*<DefaultButton*/}
        {/*    textButton={'Contact Me'}*/}
        {/*    onClickAction={async () => {*/}
        {/*      await router.push('/contact');*/}
        {/*    }}*/}
        {/*    isFilled={true}*/}
        {/*    isSmall={false}*/}
        {/*    customStyle={'mt-4 sm:mt-10 md:mt-6 default-police'}*/}
        {/*/>*/}
      </div>

      <Image
        src={MyImage}
        alt={"my picture"}
        priority
        fetchPriority={"high"}
        className={
          "profile_image  mb-8  lg:mb-0 w-[100px] lg:w-[300px] lg:h-[300px] sm:w-[120px]"
        }
      />
    </div>
  );
}
