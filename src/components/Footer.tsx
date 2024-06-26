import { Button } from "./ui/button"

const Footer = () => {
  return (
    <footer className="flex justify-evenly items-center gap-8 p-10">
    
           <div>
             Made by- Apoorv Shrivastava
           </div>
           <div>
             Tech Stack- React.js, TypeScript, Recharts.js, npmjs registry API, react-query, llm, react-router-dom 
           </div>
      
        <div>
            <Button asChild>
                <a rel='noopener' target='_blank' href="https://github.com/apoorv-x12/npm-stats-viz">
                   Github
                </a>
            </Button>
          
        </div>
    </footer>
  )
}

export default Footer