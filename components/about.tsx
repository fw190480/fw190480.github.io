import Image from "next/image";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import profileImage from "@/public/profile-image.jpeg";

export function About() {
  return (
    <div id="about" className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold sm:text-4xl">About Me</h2>
        <div className="mt-6 space-y-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex-shrink-0">
              <Image
                className="h-48 w-48 rounded-full object-cover"
                src={profileImage}
                alt="Profile picture"
                width={192}
                height={192}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold">Rahul kumar</h3>
              <p className="mt-1 text-lg text-foreground/60">
                Full Stack Developer
              </p>
              <div className="mt-3 flex items-center text-foreground/60">
                <MapPin className="flex-shrink-0 mr-1.5 h-5 w-5" />
                <span>Delhi , India</span>
              </div>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <p>
              {` I'm a passionate full stack developer with over 2 years of experience in creating robust and scalable web applications. My journey in tech started with a curiosity about how things work on the internet, which led me to dive deep into both front-end and back-end technologies.`}
            </p>
            <p>
              I thrive in collaborative environments where I can contribute my
              skills to solve complex problems and create user-centric
              solutions. My approach to development is rooted in clean code
              practices, test-driven development, and continuous learning.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold ">Experience</h3>
            <div className="mt-4 space-y-4">
              <div className="flex">
                <Briefcase className="flex-shrink-0 mt-1 mr-3 h-5 w-5 text-foreground/60" />
                <div className="text-foreground/60">
                  <h4 className="text-lg font-medium text-foreground">
                    Full Stack Developer
                  </h4>
                  <p className="">Veblika · Full-time</p>
                  <div className="flex items-center text-sm ">
                    <Calendar className="flex-shrink-0 mr-1.5 h-4 w-4" />
                    <span>Aug 2023 - Present · 1 yr 5 mos</span>
                  </div>
                  <p>
                    I work on building automation tools to optimize workflows
                    and improve efficiency. My role involves developing scalable
                    applications using Node.js, Next.js, and TypeScript,
                    deploying containerized solutions with Docker, and managing
                    infrastructure on AWS.
                  </p>
                  <p>Skills: TypeScript, React.js, AWS, Docker, Node.js</p>
                </div>
              </div>

              <div className="flex text-foreground/60">
                <Briefcase className="flex-shrink-0 mt-1 mr-3 h-5 w-5 " />
                <div>
                  <h4 className="text-lg font-medium text-foreground ">MERN Stack Developer</h4>
                  <p>CNS Web Technologies Pvt Ltd · Full-time</p>
                  <div className="flex items-center text-sm ">
                    <Calendar className="flex-shrink-0 mr-1.5 h-4 w-4" />
                    <span>Jan 2023 - Aug 2023 · 8 mos</span>
                  </div>
                  <p>
                    I developed and maintained web applications using the MERN
                    stack, focusing on REST APIs and UI development with
                    React.js. I collaborated with cross-functional teams to
                    ensure smooth deployment and integration of features.
                  </p>
                  <p>Skills: React.js, Node.js, Express, MongoDB, REST APIs</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mt-8">Certificates</h3>
            <div className="mt-4 flex">
              <Briefcase className="flex-shrink-0 mt-1 mr-3 h-5 w-5 text-foreground/60" />
              <div className="text-foreground/60">
                <h4 className="text-lg font-medium text-foreground">
                  Full Stack Development
                </h4>
                <p>Masai School</p>
                <div className="flex items-center text-sm">
                  <Calendar className="flex-shrink-0 mr-1.5 h-4 w-4" />
                  <span>April 2022 - June 2023</span>
                </div>
                <p>
                  Completed intensive full stack development program covering MERN stack, 
                  data structures, algorithms, and web development best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
