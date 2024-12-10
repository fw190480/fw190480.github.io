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
    githubLink: "https://github.com/yourusername/online-pizza-delivery",
    liveLink: "https://your-pizza-delivery-site.com"
  },
  {
    title: "WhatsApp Message Broadcast",
    description: `A microservice for broadcasting WhatsApp messages using Meta's official WhatsApp Cloud API. It allows sending bulk messages to WhatsApp users programmatically.`,
    image: whatsappImage,
    technologies: ["Node.js", "Express", "Meta WhatsApp API", "Docker", "Redis", "AWS S3"],
    githubLink: "https://github.com/yourusername/whatsapp-message-broadcast",
    liveLink: "https://your-whatsapp-broadcast-app.com"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-none">
              <div className="relative h-48 md:h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

