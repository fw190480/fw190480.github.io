"use client"
import { useState } from 'react'
import { Heading5Icon as Html5, CodepenIcon as Css3, FileJson2, Braces, CodepenIcon as ReactLogo, Palette, Server, Database, FishIcon as Whale, MessageSquare } from 'lucide-react'

const skills = [
  { name: 'HTML', icon: Html5, color: 'text-orange-500' },
  { name: 'CSS', icon: Css3, color: 'text-blue-500' },
  { name: 'JavaScript', icon: FileJson2, color: 'text-yellow-500' },
  { name: 'TypeScript', icon: Braces, color: 'text-blue-600' },
  { name: 'React', icon: ReactLogo, color: 'text-blue-400' },
  { name: 'Tailwind', icon: Palette, color: 'text-teal-500' },
  { name: 'Node.js', icon: Server, color: 'text-green-500' },
  { name: 'Express', icon: Server, color: 'text-gray-500' },
  { name: 'Docker', icon: Whale, color: 'text-blue-500' },
  { name: 'Redis', 
    icon: () => (
      <svg className="w-6 h-6" viewBox="0 0 32 32" fill="currentColor">
        <path d="M32 19.1l-5-2.4-1 1.7 5 2.4 1-1.7zM22 24.2l-5-2.4-1 1.7 5 2.4 1-1.7zM11 24.2l-5-2.4-1 1.7 5 2.4 1-1.7zM6 19.1l-5-2.4-1 1.7 5 2.4 1-1.7zM17 14.1l-5-2.4-1 1.7 5 2.4 1-1.7zM28 14.1l-5-2.4-1 1.7 5 2.4 1-1.7zM17 9.1l-5-2.4-1 1.7 5 2.4 1-1.7z"/>
      </svg>
    ),
    color: 'text-red-500'
  },
  { name: 'MongoDB', icon: Database, color: 'text-green-600' },
  { name: 'PostgreSQL', 
    icon: () => (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.805 1.11c-1.614.115-2.837.703-3.695 1.702-.955 1.116-1.472 2.616-1.639 4.734-.05.637-.044 2.489.01 3.181.223 2.862.95 4.835 2.234 6.068.527.506 1.12.854 1.789 1.052.39.116.766.179 1.23.207.402.024.526.02.845-.027 1.425-.21 2.565-.878 3.451-2.022.72-.93 1.222-2.07 1.564-3.554.254-1.1.343-1.974.343-3.38 0-1.214-.076-2.06-.265-2.962-.508-2.417-1.692-4.228-3.332-5.092-.706-.372-1.562-.595-2.351-.614-.205-.005-.398.001-.584.018v-.311zm.412 1.115c1.707.196 3.058 1.244 3.753 2.91.476 1.142.714 2.338.761 3.83.022.7-.007 1.752-.07 2.582-.222 2.884-1.079 5.012-2.541 6.317-.59.526-1.324.912-2.125 1.118-.36.093-.518.11-.935.104-.415-.006-.523-.023-.88-.133-1.616-.499-2.826-1.924-3.392-3.99-.345-1.258-.508-2.63-.524-4.39-.013-1.41.098-2.533.36-3.68.334-1.46.953-2.621 1.799-3.365.517-.455 1.13-.79 1.81-.992.518-.154.989-.22 1.513-.21.21.003.421.02.634.049l-.163-.15zM2.105 9.094c-.118.034-.14.057-.203.208-.037.09-.04.26-.037 2.218l.003 2.12.095.097c.069.07.116.1.185.116.1.024.132.024.232 0 .069-.016.116-.045.185-.116l.095-.097.003-2.12c.003-1.958 0-2.128-.037-2.218-.063-.151-.084-.174-.203-.208-.116-.034-.202-.034-.318 0zm3.85 1.45c-.09.026-.208.116-.269.208-.05.074-.05.076-.05 1.768v1.694l.058.087c.034.05.108.116.169.15.095.055.116.058.366.058s.271-.003.366-.058c.06-.034.135-.1.169-.15l.058-.087V12.52c0-1.692 0-1.694-.05-1.768-.092-.14-.274-.237-.445-.24-.066 0-.158.013-.203.031h-.169zm-1.964.713c-.106.034-.216.129-.274.237-.045.084-.047.129-.047 1.352v1.265l.061.095c.034.053.108.121.166.153.092.05.116.055.34.055.229 0 .245-.003.34-.06.158-.095.224-.19.241-.348.011-.095.016-.626.011-1.178-.008-.87-.013-.992-.05-1.07-.05-.103-.161-.214-.253-.253-.069-.029-.108-.034-.282-.037-.116-.003-.232 0-.253.008v-.219zm5.773.7c-.069.021-.161.074-.205.119-.076.076-.076.079-.084 1.565-.005.962.003 1.52.021 1.583.034.113.132.232.245.298.087.05.108.053.355.053s.269-.003.355-.053c.113-.066.211-.185.245-.298.018-.063.026-.62.021-1.583-.008-1.486-.008-1.489-.084-1.565-.108-.108-.253-.16-.458-.16-.108 0-.232.016-.274.034h-.137zm3.85.7c-.092.026-.224.113-.282.185-.05.061-.055.129-.055.75v.684l.061.095c.034.053.108.121.166.153.092.05.116.055.34.055.229 0 .245-.003.34-.06.158-.095.224-.19.241-.348.011-.098.016-.41.011-.697-.008-.46-.013-.523-.06-.62-.063-.129-.182-.232-.319-.274-.095-.029-.292-.034-.393-.008v.084zm-1.925.716c-.103.034-.224.142-.274.245-.034.074-.037.166-.037.649 0 .565.003.565.061.678.034.066.098.14.14.166.061.037.129.045.319.045.203 0 .256-.008.324-.05.142-.087.211-.219.211-.402 0-.084-.008-.287-.016-.45-.013-.219-.029-.321-.066-.387-.076-.132-.185-.224-.306-.259-.108-.029-.274-.029-.382 0l.026-.234z"/>
      </svg>
    ),
    color: 'text-blue-400'
  },
  { name: 'RabbitMQ', 
    icon: MessageSquare, 
    color: 'text-orange-500'
  },
]

export  function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <div id="skills" className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl text-center mb-8">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <skill.icon className={`w-12 h-12 ${skill.color} mb-2`} />
              <span className={`text-sm font-medium ${
                hoveredSkill === skill.name ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'
              }`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

