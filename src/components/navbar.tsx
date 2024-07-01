import { ModeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Icons } from '../components/ui/icons'; // Correct import

export function NavBar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background px-4">
      <div className="mx-auto flex h-12 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="https://live.atl5d.com" passHref>
            <a className="flex items-center gap-2">
              <Icons.eye className="h-4 w-4 text-black dark:text-black" />
              <span className="text-black font-bold dark:text-black">...</span>
                LIVE
              </span>
            </a>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href="https://twitter.com/atl5d"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                  className: "text-zinc-700 dark:text-zinc-400",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
