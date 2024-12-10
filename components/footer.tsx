import Link from 'next/link'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import {Resume} from "@/components/resume"

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-50 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-4">
            <Link href="mailto:rkrahul8181@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </Link>
            <Link href="tel:+918745983389" className="text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-6 h-6" />
              <span className="sr-only">Phone</span>
            </Link>
            <Link href="https://www.linkedin.com/in/rahul-kumar-850b39232/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://github.com/rahulkr-dev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            
          </div>
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">rkrahul8181@gmail.com</p>
            <p className="text-sm text-muted-foreground">+91 8745983389</p>
            <Resume className="justify-center"><span className='text-sm text-muted-foreground'>Resume</span></Resume>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rahul Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

