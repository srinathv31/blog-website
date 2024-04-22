"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "./ui/badge";
import { ModeToggle } from "./DarkModeToggle";

/**
 * Renders the header component with navigation links based on the current pathname.
 *
 * @return {JSX.Element} The JSX for the header component.
 */
export default function Header(): JSX.Element {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <header className="flex flex-col md:flex-row items-center justify-between p-2 mb-8">
      <ModeToggle />

      <nav className="flex space-x-5">
        <Link href="/" passHref>
          <Badge
            variant={isActive("/") ? "secondary" : "outline"}
            className={cn("hover:text-primary", {
              "text-primary": isActive("/"),
            })}
          >
            Home
          </Badge>
        </Link>
        <Link href="/experience" passHref>
          <Badge
            variant={isActive("/experience") ? "secondary" : "outline"}
            className={cn("hover:text-primary", {
              "text-primary": isActive("/experience"),
            })}
          >
            Experience
          </Badge>
        </Link>
        <Link href="/blog" passHref>
          <Badge
            variant={isActive("/blog") ? "secondary" : "outline"}
            className={cn("hover:text-primary", {
              "text-primary": isActive("/blog"),
            })}
          >
            Blog
          </Badge>
        </Link>
        <Link href="/about" passHref>
          <Badge
            variant={isActive("/about") ? "secondary" : "outline"}
            className={cn(
              "hover:text-primary hover:bg-primary hover:border-primary",
              {
                "text-primary bg-primary border-primary": isActive("/about"),
              },
            )}
          >
            About
          </Badge>
        </Link>
      </nav>
    </header>
  );
}
