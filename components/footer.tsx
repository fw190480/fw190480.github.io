import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Resume } from "@/components/resume";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/constant";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer id="contact" className="bg-accent py-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-4">
            <FooterSocialLink href="mailto:rkrahul8181@gmail.com">
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </FooterSocialLink>
            <FooterSocialLink href="tel:+918745983389">
              <Phone className="w-6 h-6" />
              <span className="sr-only">Phone</span>
            </FooterSocialLink>
            <FooterSocialLink
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </FooterSocialLink>
            <FooterSocialLink
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </FooterSocialLink>
          </div>
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              rkrahul8181@gmail.com
            </p>
            <p className="text-sm text-muted-foreground">+91 8745983389</p>
            <Resume className="justify-center">
              <span className="text-sm text-muted-foreground">Resume</span>
            </Resume>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rahul Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


type SocialLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?:string,
  rel?:string
}

function FooterSocialLink({
  href,
  children,
  className,
  ...rest
}: SocialLinkProps) {
  return (
    <Link
      href={href}
      {...rest}
      className={cn(
        "text-muted-foreground hover:text-foreground transition-colors",
        className
      )}
    >
      {children}
    </Link>
  );
}
