import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Code2Icon,
  InboxIcon,
  Mailbox,
  MenuIcon,
  User,
  WorkflowIcon,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeSwitcher from "@/portfolio/app/lib/ui/theme-switcher";
import { EnvelopeOpenIcon, Pencil2Icon } from "@radix-ui/react-icons";
import { navigationData } from "@/portfolio/app/lib/config";
import { Button } from "@/components/ui/button";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn(
        "flex items-center  py-4 w-full px-4 md:px-12 lg:px-16 gap-6 md:gap-12  border-b-2 border-gray-200 dark:border-gray-900 ",
        className,
      )}
      {...props}
    >
      <Link
        href="/"
        className="font-extrabold text-xl md:text-xl flex-1 md:flex-grow-0 min-w-[200px]"
      >
        Axel <span className="text-secondary">Mwenze</span>
      </Link>
      <div className="gap-12 flex-1 hidden md:flex items-center">
        {navigationData.map((value, index) => (
          <Link
            key={index}
            href={value.href}
            target={value.target}
            className="md:text-[0.9rem] font-medium  text-muted-foreground transition-colors hover:text-primary"
          >
            {value.title}
          </Link>
        ))}
        <a href="mailto:example@gmail.com">
          <Button>
            <EnvelopeOpenIcon className="mr-2" />
            Contact me
          </Button>
        </a>
      </div>

      <div className="md:pr-12 flex items-center ">
        <ThemeSwitcher />
        <div className="block md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <MenuIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Portfolio links</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <Link href={"/about"}>About</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <WorkflowIcon className="mr-2 h-4 w-4" />
                  <Link href={"/works"}>Works</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Code2Icon className="mr-2 h-4 w-4" />
                  <Link href={"/skills"}>Skills</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Pencil2Icon className="mr-2 h-4 w-4" />
                  <span>Blog</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <InboxIcon className="mr-2 h-4 w-4" />
                  <Link href={"/contacts"}>Contact me</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
