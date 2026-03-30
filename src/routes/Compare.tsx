import { useEffect, useState } from "react"
import { Separator } from "../components/ui/separator"
import { Meteors } from "../components/ui/meteors"
import ComparePackages from '../components/ComparePackages';
import { Button } from "../components/ui/button";
import { useToast } from "../components/ui/use-toast";
import stats from "../assets/stats.svg";
import { EvervaultCard } from "../components/ui/ever-vault-card";

const Compare = () => {

  const [leftPackageName, setLeftPackageName] = useState('')
  const [rightPackageName, setRightPackageName] = useState('')
  const [packageName, setPackageName] = useState('')
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { toast } = useToast();
   
  useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

  const handleCompareSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const first = leftPackageName.trim();
    const second = rightPackageName.trim();

    if (!first || !second) {
      toast({
        title: 'Both package names are required',
        description: 'Please enter two package names to compare.',
        variant: 'destructive',
        duration: 4000,
      })
      return;
    }

    if (first === second) {
      toast({
        title: 'Enter two different packages',
        description: 'Package names should not be the same.',
        variant: 'destructive',
        duration: 4000,
      })
      return;
    }

    setPackageName(`${first},${second}`);
  }
      
  return (
    <div >    
        <div className="mx-4 my-8 sm:mx-16" >
          <form onSubmit={handleCompareSubmit} className="flex flex-col items-center gap-5 rounded-md border-2 bg-blue-200 p-4 text-center sm:bg-gradient-to-r sm:from-blue-100 sm:via-card-light-blue sm:to-blue-100 dark:bg-gradient-to-r dark:from-dark-bgb dark:via-card-dark-blue dark:to-dark-bgb">
            <div className="border bg-white dark:bg-black border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative rounded-lg h-[10rem]">
              <EvervaultCard text="Compare Downloads of Packages:" />
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-200">
              Enter two package names. We handle the compare format for you.
            </p>

            <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                value={leftPackageName}
                onChange={(e) => setLeftPackageName(e.target.value)}
                placeholder="First package (e.g. react)"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-center text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                value={rightPackageName}
                onChange={(e) => setRightPackageName(e.target.value)}
                placeholder="Second package (e.g. vue)"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-center text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <Button
              className="flex items-center justify-center gap-2"
              style={{
                borderRadius: '50%',
                marginTop: '8vh',
                marginBottom: '4vh',
                backgroundImage: `
                  linear-gradient(to bottom, rgba(255, 242, 9, 0.5), transparent 50%, transparent 90%,rgba(255, 5, 150, 0.5) ),
                  repeating-linear-gradient(60deg, rgba(255, 12, 19, 0.8) 0, rgba(255, 12, 19, 0.8) 10px , transparent 10px, transparent 20px, rgba(255, 5, 180, 0.5) 20px),
                  linear-gradient(to bottom,  rgba(255, 1, 203, 0.8), rgba(255, 242, 9, 0.5))
                `,
                boxShadow: "0px 4px 0px rgba(255, 50, 199, 0.5) ,0px 5px 0px rgba(1, 1, 1, 1),0px 4px 0px 8px rgba(255, 255, 192, 1),0px 4px 30px 20px rgba(255, 2, 25, 0.7)",
              }}
              type="submit"
            >
              <img className="animate-bounce" src={stats} width={50} height={50} alt="stats"/>
              <span>Compare Stats</span>
            </Button>
          </form>
        </div>
        <div className='mx-4 my-8 sm:mx-16'>
           <Separator/>
        </div>

        {
          packageName === '' ?
          null : 
          <div className="m-4 sm:m-16">
            <ComparePackages packagesNameString={packageName}/>
          </div>
        }
        
       {windowWidth > 820 ? <Meteors number={20}/> : null}
    </div>
  )
}

export default Compare