import { Button } from "./ui/button"

const Footer = () => {
  return (
    <footer className="flex justify-evenly items-center gap-8 p-10 bg-dark-bgb text-yellow-50 ">
    
           <div>
             Made by- Apoorv Shrivastava
           </div>
           <div>
             Tech Stack- React.js, TypeScript, Recharts.js, npmjs registry API, react-query, shadcn-ui, zod, llm, react-router-dom 
           </div>
      
        <div >
            <Button asChild className="bg-gradient-to-r from-blue-400 via-green-500 to-pink-600 text-yellow-100 rounded-lg shadow-md">
                <a rel='noopener' target='_blank' href="https://github.com/apoorv-x12/npm-stats-viz">
                   Github
                </a>
            </Button>
          
        </div>
    </footer>
  )
}

export default Footer