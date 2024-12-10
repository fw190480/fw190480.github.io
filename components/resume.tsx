import Link from "next/link"
import {FileText} from "lucide-react"
import { cn } from "@/lib/utils";
const googleDriveLink = `https://drive.google.com/file/d/1PDkn6IqrAUmI-cT_AX7TglaZsOLdHz0Y/view?usp=sharing`;

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
      href={googleDriveLink}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors`,className)}
      {...restProps}
    >
      <FileText className="w-4 h-4" />
      <span>{children}</span>
    </Link>
  );
}