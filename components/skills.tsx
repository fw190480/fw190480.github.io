"use client";

import { FileJson2, Braces, CodepenIcon as ReactLogo, Server, Database, FishIcon as Whale, MessageSquare, CloudIcon, GitBranchIcon, Cloud,Code,Terminal, List, Monitor, ServerIcon, Layers } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"

const skills = [
  {
    name: "JavaScript",
    icon: FileJson2,
    color: "text-yellow-500",
    description: "Expert in ES6+ features and async programming",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: Braces,
    color: "text-blue-600",
    description: "Strong typing and advanced TypeScript features",
    category: "Frontend",
  },
  {
    name: "React",
    icon: ReactLogo,
    color: "text-blue-400",
    description: "Advanced state management and performance optimization",
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: () => <span className="text-xl font-bold">N</span>,
    color: "text-black dark:text-white",
    description: "Server-side rendering and API routes",
    category: "Frontend",
  },
  {
    name: "Node.js",
    icon: Server,
    color: "text-green-500",
    description: "Building scalable backend services",
    category: "Backend",
  },
  {
    name: "Express",
    icon: Server,
    color: "text-gray-500",
    description: "RESTful API design and middleware development",
    category: "Backend",
  },
  {
    name: "Docker",
    icon: Whale,
    color: "text-blue-500",
    description: "Containerization and orchestration",
    category: "Other",
  },
  {
    name: "HTML",
    icon: Code,
    color: "text-orange-600",
    description: "Semantic markup and accessibility best practices",
    category: "Frontend",
  },
  {
    name: "CSS",
    icon: Code,
    color: "text-blue-500",
    description: "Responsive design and CSS preprocessors",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: Code,
    color: "text-teal-500",
    description: "Utility-first CSS framework for rapid UI development",
    category: "Frontend",
  },
  {
    name: "Linux",
    icon: Terminal,
    color: "text-purple-500",
    description: "System administration and shell scripting",
    category: "Other",
  },
  {
    name: "BullMQ",
    icon: MessageSquare,
    color: "text-yellow-500",
    description: "Robust job and message queue for Node.js",
    category: "Backend",
  },
  {
    name: "Kafka",
    icon: MessageSquare,
    color: "text-indigo-500",
    description: "Distributed streaming platform for building real-time applications",
    category: "Backend",
  },
  {
    name: "Cloudflared",
    icon: Cloud,
    color: "text-blue-300",
    description: "Secure tunneling service for exposing local servers to the internet",
    category: "Other",
  },
  {
    name: "Redis",
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 32 32" fill="currentColor">
        <path d="M32 19.1l-5-2.4-1 1.7 5 2.4 1-1.7zM22 24.2l-5-2.4-1 1.7 5 2.4 1-1.7zM11 24.2l-5-2.4-1 1.7 5 2.4 1-1.7zM6 19.1l-5-2.4-1 1.7 5 2.4 1-1.7zM17 14.1l-5-2.4-1 1.7 5 2.4 1-1.7zM28 14.1l-5-2.4-1 1.7 5 2.4 1-1.7zM17 9.1l-5-2.4-1 1.7 5 2.4 1-1.7z" />
      </svg>
    ),
    color: "text-red-500",
    description: "Caching and pub/sub messaging",
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: Database,
    color: "text-green-600",
    description: "Schema design and aggregation pipelines",
    category: "Backend",
  },
  {
    name: "PostgreSQL",
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.805 1.11c-1.614.115-2.837.703-3.695 1.702-.955 1.116-1.472 2.616-1.639 4.734-.05.637-.044 2.489.01 3.181.223 2.862.95 4.835 2.234 6.068.527.506 1.12.854 1.789 1.052.39.116.766.179 1.23.207.402.024.526.02.845-.027 1.425-.21 2.565-.878 3.451-2.022.72-.93 1.222-2.07 1.564-3.554.254-1.1.343-1.974.343-3.38 0-1.214-.076-2.06-.265-2.962-.508-2.417-1.692-4.228-3.332-5.092-.706-.372-1.562-.595-2.351-.614-.205-.005-.398.001-.584.018v-.311zm.412 1.115c1.707.196 3.058 1.244 3.753 2.91.476 1.142.714 2.338.761 3.83.022.7-.007 1.752-.07 2.582-.222 2.884-1.079 5.012-2.541 6.317-.59.526-1.324.912-2.125 1.118-.36.093-.518.11-.935.104-.415-.006-.523-.023-.88-.133-1.616-.499-2.826-1.924-3.392-3.99-.345-1.258-.508-2.63-.524-4.39-.013-1.41.098-2.533.36-3.68.334-1.46.953-2.621 1.799-3.365.517-.455 1.13-.79 1.81-.992.518-.154.989-.22 1.513-.21.21.003.421.02.634.049l-.163-.15z" />
      </svg>
    ),
    color: "text-blue-400",
    description: "Complex queries and database optimization",
    category: "Backend",
  },
  {
    name: "RabbitMQ",
    icon: MessageSquare,
    color: "text-orange-500",
    description: "Message queues and distributed systems",
    category: "Backend",
  },
  {
    name: "AWS",
    icon: CloudIcon,
    color: "text-yellow-600",
    description: "Cloud infrastructure and serverless architecture",
    category: "Other",
  },
  {
    name: "GraphQL",
    icon: GitBranchIcon,
    color: "text-pink-500",
    description: "API design and efficient data fetching",
    category: "Backend",
  },
  {
    name: "S3",
    icon: Cloud,
    color: "text-blue-500",
    description: "Efficient storage and delivery using AWS S3 and CloudFront",
    category: "Other",
  },
  {
    name: "Deployment",
    icon: Server,
    color: "text-green-600",
    description:
      "Automating application deployment pipelines and infrastructure",
    category: "Other",
  },
];

const categories = [
  { name: "All", icon: List },
  { name: "Frontend", icon: Monitor },
  { name: "Backend", icon: ServerIcon },
  { name: "Other", icon: Layers },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [containerHeight, setContainerHeight] = useState(0)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (gridRef.current) {
      setContainerHeight(Math.max(containerHeight, gridRef.current.offsetHeight))
    }
  }, [activeCategory])

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  )

  return (
    <div id="skills" className="py-12 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl text-center mb-8">
          My Skills
        </h2>
        <div className="flex overflow-auto justify-center space-x-4 mb-8 ">
          {categories.map(({ name, icon: Icon }) => (
            <Button
              variant={"ghost"}
              key={name}
              onClick={() => setActiveCategory(name)}
              className={cn("relative h-9 rounded-none")}
            >
              <Icon className="w-5 h-5" />
              <span className="ml-2">{name}</span>
              {activeCategory === name && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  layoutId="activeTab"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Button>
          ))}
        </div>
        <div 
          // style={{ minHeight: containerHeight }} 
          className={`relative transition-all`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="grid grid-cols-3 w-max  m-auto sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6"
              ref={gridRef}
            >
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  // exit={{ scale: .1, opacity: 0 }}
                  transition={{ 
                    duration: 0.3,
                    delay: index * 0.05, // Staggered animation
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.div 
                          className="flex flex-col items-center group"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div
                            className={cn(
                              "w-16 h-16 rounded-full flex items-center justify-center bg-foreground/10 cursor-pointer transition-all duration-300",
                              skill.color
                            )}
                          >
                            <skill.icon className="w-8 h-8 transition-transform group-hover:scale-110" />
                          </div>
                          <span className="mt-2 text-xs font-medium text-foreground text-center group-hover:text-primary transition-colors">
                            {skill.name}
                          </span>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{skill.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

