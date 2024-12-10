import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, FileText } from "lucide-react";
import picture from "@/public/coder-cartoon.png";

export function Home() {
  return (
    <div className="flex flex-col px-4 items-center justify-center min-h-screen py-12 bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-8 overflow-hidden rounded-full">
          <Image
            src={picture}
            alt="Profile cartoon Picture"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h1 className="mb-4 text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
          Rahul Kumar
        </h1>
        <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-600 dark:text-gray-300">
          Highly motivated and results-driven full stack developer with a proven
          track record of success in building innovative web applications.
          Passionate about creating efficient, scalable solutions and
          continuously learning new technologies.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="https://www.linkedin.com/in/rahul-kumar-850b39232/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 transition-colors duration-300 border rounded-full dark:text-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500"
          >
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://github.com/rahulkr-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 transition-colors duration-300 border rounded-full dark:text-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500"
          >
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="/resume"
            className="p-2 text-gray-600 transition-colors duration-300 border rounded-full dark:text-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500"
          >
            <FileText className="w-6 h-6" />
            <span className="sr-only">Resume</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
