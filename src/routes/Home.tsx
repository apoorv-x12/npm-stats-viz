import { PinContainer } from '../components/ui/3d-pin';
import { BackgroundBeams } from '../components/ui/background-beams';
//import { Meteors } from '../components/ui/meteors';
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
              {/* <Meteors number={20} /> */}
      </div>
        
      <div className="rounded-3xl pt-4 pb-10 mx-[5%] bg-neutral-50 dark:bg-neutral-950 relative flex flex-wrap gap-2 items-center justify-center antialiased">
          <div className=' p-4 rounded-2xl' >
                  <h1 className="relative z-10 text-lg md:text-2xl  bg-clip-text text-transparent bg-gradient-to-b from-orange-1 to-orange-2  text-center font-sans font-bold">
                    npm search
                  </h1>
                  <p></p>
                  <p className="text-green-500 font-bold my-2 text-sm text-center relative z-10 break-words">
                    Search stats of any npm package
                  </p>
                  <input
                    type="text"
                    placeholder="Enter package name"
                    className="border text-red-500 rounded-lg border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4 p-2 text-center placeholder:text-red-500"
                  />
          </div>
          <div className=" flex items-center justify-center ">
                  <PinContainer
                    title="Link to my other projects"
                    href="https://github.com/apoorv-x12"
                    className='bg-green-100  dark:bg-dark-bgo'
                  >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[15rem] ">
                      <h3 className="!pb-2 !m-0 font-bold text-base text-red-500">
                          Go to see my other Projects
                      </h3>
                      <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500 ">
                          Hover over purple gradient
                        </span>
                      </div>
                      <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                    </div>
                  </PinContainer>
          </div>
          <BackgroundBeams />
      </div>
          
    </div>
  )
}

export default Home
