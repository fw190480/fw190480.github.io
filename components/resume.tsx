import Link from "next/link"
import {FileText} from "lucide-react"
import { cn } from "@/lib/utils";
import { RESUME_DRIVE_URL } from "@/lib/constant";

export function Resume({
  children,
  className = "",
  ...restProps
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={RESUME_DRIVE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent`,className)}
      {...restProps}
    >
      <FileText className="w-4 h-4" />
      <span>{children}</span>
    </Link>
  );
}