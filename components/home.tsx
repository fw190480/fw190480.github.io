import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, FileText } from "lucide-react";
import picture from "@/public/coder-cartoon.png";
import { GITHUB_URL, LINKEDIN_URL, RESUME_DRIVE_URL } from "@/lib/constant";
import { cn } from "@/lib/utils";

export function Home() {
  return (
    <div className="flex flex-col px-4 items-center justify-center min-h-screen py-12 bg-accent ">
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-8 overflow-hidden rounded-full">
          <Image
            src={picture}
            alt="Profile cartoon Picture"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h1 className="mb-4 text-3xl lg:text-4xl font-bold">Rahul Kumar</h1>
        <p className="max-w-2xl mx-auto mb-8 text-xl text-foreground/90">
          Highly motivated and results-driven full stack developer with a proven
          track record of success in building innovative web applications.
          Passionate about creating efficient, scalable solutions and
          continuously learning new technologies.
        </p>
        <div className="flex justify-center space-x-4">
          <SocialLink href={LINKEDIN_URL}>
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </SocialLink>
          <SocialLink href={GITHUB_URL}>
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </SocialLink>
          <SocialLink href={RESUME_DRIVE_URL}>
            <FileText className="w-6 h-6" />
            <span className="sr-only">Resume</span>
          </SocialLink>
        </div>
      </div>
    </div>
  );
}

function SocialLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      className={cn(
        "p-2 transition-colors duration-300 border rounded-full text-foreground/60 border-foreground/20 hover:border-foreground",
        className
      )}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}
