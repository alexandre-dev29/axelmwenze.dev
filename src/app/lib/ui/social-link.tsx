import Link from "next/link";
import {
  LucideGithub,
  LucideLinkedin,
  LucideYoutube,
  TwitterIcon,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import UdemyLogo from "../../udemy-logo.png";
import Image from "next/image";

export function SocialLinks() {
  return (
    <div className={"absolute top-1/2 right-10 flex flex-col gap-5"}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link
              href={"https://www.youtube.com/channel/UChTsPe6FZBxyozw5M-gE76g"}
              target={"_blank"}
              aria-label={"Youtube"}
            >
              <LucideYoutube
                className={
                  "text-3xl  text-gray-800 cursor-pointer transition-all duration-200 hover:scale-125 hover:text-red-600 dark:text-gray-400"
                }
              />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Youtube</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Link
              href={"https://linkedin.com/axel-mwenze"}
              target={"_blank"}
              aria-label={"Linkedin"}
            >
              <LucideLinkedin
                className={
                  "text-3xl text-gray-800 cursor-pointer transition-all  duration-200 hover:scale-125 hover:text-blue-500 dark:text-gray-400"
                }
              />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Linkedin</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Link
              href={"https://github.com/alexandre-dev29"}
              target={"_blank"}
              aria-label={"Github"}
            >
              <LucideGithub
                className={
                  "text-3xl text-gray-800 cursor-pointer transition-all  duration-200 hover:scale-125 dark:text-gray-400"
                }
              />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Github</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Link
              href={"https://twitter.com/MwenzeAxel"}
              target={"_blank"}
              aria-label={"Twitter"}
            >
              <TwitterIcon
                className={
                  "text-3xl text-gray-800 cursor-pointer transition-all duration-200 hover:scale-125 hover:text-blue-800 dark:text-gray-400"
                }
              />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Twitter</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Link
              href={"https://www.udemy.com/user/axel-mwenze-2/"}
              target={"_blank"}
              aria-label={"Udemy"}
            >
              <Image
                src={UdemyLogo}
                alt={"Udemy Logo"}
                className="mr-6 h-[30px] w-[60px] right-[-5px] fixed transition-all duration-200 hover:scale-125 hover:text-red-600 dark:text-gray-400"
                fetchPriority={"low"}
                priority={true}
              />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Udemy</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default SocialLinks;
