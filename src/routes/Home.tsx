
import { Meteors } from '../components/ui/meteors';
import { TextGenerateEffect } from '../components/ui/text-generate-effect';
import { TypewriterEffect } from '../components/ui/typewriter-effect';


const Home = () => {
    const words = [
    {
      text: "Welcome",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "to",
      className: "text-red-500 dark:text-red-500",
    },
    {
      text: "npm-stats-viz",
      className: "text-yellow-500 dark:text-yellow-500",
    },
    

  ];

  return (
    <div>
      <div className='flex flex-col justify-center items-center gap-4 m-8'>
              <TypewriterEffect words={words}/>
              <TextGenerateEffect words={"Find out the stats of any npm package !"}/>
              <Meteors number={50} className='ml-96'/>
      </div>
     
    
    </div>
  )
}

export default Home