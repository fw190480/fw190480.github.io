import Image, { StaticImageData } from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import pizzaImage from "@/public/pizza.png"
import whatsappImage from "@/public/whatsapp-broadcast.png"

interface Project {
  title: string
  description: string
  image: StaticImageData
  technologies: string[]
  githubLink: string
  liveLink: string
}

const projects: Project[] = [
  {
    title: "Online Pizza Delivery",
    description: `A full-stack online pizza delivery application with user authentication, product catalog, order management, payment gateway integration, and real-time updates.`,
    image: pizzaImage,
    technologies: ["ReactJS", "Next.js", "Node.js", "PostgreSQL", "MongoDB", "Kafka", "S3 Bucket", "Tailwind CSS", "Docker", "WebSocket"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "WhatsApp Message Broadcast",
    description: `A microservice for broadcasting WhatsApp messages using Meta's official WhatsApp Cloud API. It allows sending bulk messages to WhatsApp users programmatically.`,
    image: whatsappImage,
    technologies: ["Node.js", "Express", "Meta WhatsApp API", "Docker", "Redis", "AWS S3"],
    githubLink: "#",
    liveLink: "#"
  }
]

export  function Projects() {
  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          My Projects
        </h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5 relative h-64 md:h-auto">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className=""
                  />
                </div>
                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                  <CardFooter className="p-0 pt-4 flex justify-start space-x-4">
                    <Button variant="outline" asChild>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

