import { Button } from "./ui/button"

const Footer = () => {
  return (
    <footer className="flex justify-evenly items-center gap-8 p-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-1 to-orange-700 text-md font-bold">
           <div className="flex flex-col gap-2 flex-wrap items-start">
            <div>
              Made by - Apoorv Shrivastava
            </div>
            <div>
              Tech Stack - React.js + TypeScript, npmjs APIs, @tanstack/react-query + axios, Tailwind.css, Recharts, Radix UI, shadcn/ui, Acceternity UI, nginx, docker, gh-pages, github actions, zod
            </div> 
           </div>
      
        <div >
            <Button asChild className="bg-gradient-to-r from-blue-400 via-green-500 to-pink-600 text-black rounded-lg shadow-md">
                <a rel='noopener' target='_blank' href="https://github.com/apoorv-x12/npm-stats-viz">
                   Github
                </a>
            </Button>
          
        </div>
    </footer>
  )
}

export default Footer