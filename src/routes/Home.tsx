import { useEffect, useState } from 'react';
import { PinContainer } from '../components/ui/3d-pin';
import { Button } from '../components/ui/button';
import { TextGenerateEffect } from '../components/ui/text-generate-effect';
import { TypewriterEffect } from '../components/ui/typewriter-effect';
import {getPackagesSearch} from '../ApiService';
import { useQuery } from '@tanstack/react-query';
import { useToast } from '../components/ui/use-toast';
import Loader from '../components/ui/loader';
import { Meteors } from '../components/ui/meteors';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion"

type objectType = {
  dependents:number,
  package: {
     name: string,
     maintainers: object[],
     description: string,
     license: string,
     links:
       { 
        npm: string,
        homepage:string
       }
    },
  searchScore: number,
  updated:string
}

const Home = () => {
    const [packageName, setPackageName] = useState('');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [supportsHoverCard, setSupportsHoverCard] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

    const {toast} = useToast();
    
    const npmQuery = useQuery(
      {
       queryKey: ['npmData'],
       queryFn: () => getPackagesSearch(packageName),
       enabled: false , 
    });

    const packageSetter = () => {
      setCurrentPage(1);
      npmQuery.refetch();
    }

    const allObjects: objectType[] = npmQuery?.data?.objects || [];
    const totalPages = Math.max(1, Math.ceil(allObjects.length / itemsPerPage));
    const currentStartIndex = (currentPage - 1) * itemsPerPage;
    const paginatedObjects = allObjects.slice(currentStartIndex, currentStartIndex + itemsPerPage);

    const numToStars = (num: number) => {
      let stars = '';
      const star='⭐';
      const iterations = 10
      let starCount= Math.round(num-100)
      if(starCount===0)
        return '⓿';
      for (let i = 0; i < iterations; i++){
           stars += star;
           starCount-=100
           if(starCount<0){
            break
           }
      }
        
      return stars;
    };

   // console.log(npmQuery?.data)

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

  useEffect(() => {
    
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    if(!npmQuery?.isLoading){

      if(npmQuery?.isSuccess){
        toast({
          title: 'Success',
          description: 'Data fetched successfully',
          variant: 'success',
          duration: 6000,
        })
      }
      else if(npmQuery?.isError){
        toast({
           title: 'Error  fetching data',
           description: 'Wrong package name, Type again',
           variant: 'destructive',
           duration: 6000
          })
      }
    } 
  
    return () => window.removeEventListener('resize', handleResize);

  },
  [npmQuery?.isLoading,npmQuery?.isError,npmQuery?.isSuccess,toast]
)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const updateCapability = () => setSupportsHoverCard(mediaQuery.matches);

    updateCapability();
    mediaQuery.addEventListener('change', updateCapability);

    return () => mediaQuery.removeEventListener('change', updateCapability);
  }, [])

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    packageSetter();
  }

  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  }

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  }

  return (
    <div>
      <div className='flex flex-col justify-center items-center gap-4 m-8'>
              <TypewriterEffect words={words}/>
              <TextGenerateEffect words={"Find out the stats of any npm package !"}/>
              {/* <BackgroundBeams/> */}
               {windowWidth > 820 ? <Meteors number={20}/> : null}
      </div>
        
      <div className="rounded-3xl pt-4 pb-10 mx-[10%] sm:bg-blue-50 sm:dark:bg-dark-bgb relative flex flex-wrap gap-2 items-center justify-center antialiased">
          <div className=' p-4 rounded-2xl ' >
                  <h1 className="relative z-10 text-lg md:text-2xl  bg-clip-text text-transparent bg-gradient-to-b from-orange-1 to-orange-2  text-center font-sans font-bold">
                    npm search
                  </h1>
                  <p></p>
                  <p className="text-green-500 font-bold my-2 text-sm text-center relative z-10 break-words">
                    Search stats of any npm package
                  </p>
                  <form onSubmit={handleSearchSubmit}>
                    <input
                      type="text"
                      value={packageName}
                      onChange={(e) => setPackageName(e.target.value)}
                      placeholder="Enter package name"
                      className="border text-red-500 rounded-lg border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4 p-2 text-center placeholder:text-red-500"
                    />
                    <div className=' flex items-center justify-center'>
                      <Button type='submit' className="mt-4 hover:bg-yellow-500 bg-gradient-to-r from-blue-400 to-pink-600 text-whitw rounded-lg shadow-2xl">
                        Search
                      </Button>
                    </div>
                  </form>
          </div>
          {supportsHoverCard ? (
          <div className="flex items-center justify-center">
                  <PinContainer
                    title="Link to my other projects"
                    href="https://github.com/apoorv-x12"
                    className='bg-green-100 dark:bg-dark-bgo p-4 rounded-2xl'
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
                  ) : null}
         
      </div>

      <div>
        { 
          npmQuery?.isLoading ?
                <div className="w-full h-1/5 flex justify-center items-center">
                  <Loader/>
                </div>
                :
                null
        }
        
        { 
          npmQuery?.isError  ?
                 <div className="text-red-500 flex flex-col items-center">
                    Error: {npmQuery?.error?.message}
                  <div>
                    The typed package name doesn't exist, Give an existing package name and try again!
                  </div>
                </div>
                 : 
                null
        }
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
            {
              npmQuery?.data?.total > 0 ?
              paginatedObjects?.map((item: objectType,index:number)=>{
                return (
                  <div className="flex flex-col border-2 p-6 justify-between rounded-lg antialiased bg-pal-21 text-yellow-200" key={index}>
                    <div className="flex gap-2 flex-col items-start justify-start">

                      <div className='my-4 font-bold text-ellipsis break-all'>
                        {item?.package?.name}
                      </div>

                      <div className='my-2 font-medium text-ellipsis break-all'>
                            {item?.package?.description}
                      </div>
                      <div>
                         Maintainers: {item?.package?.maintainers?.length}
                      </div>
                      <div>
                         Dependents: {item?.dependents}
                      </div>
                      <div>
                         Last updated: {((dateString) => new Date(dateString).toLocaleString())(item?.updated)}
                      </div>
                      <div>
                        License: {item?.package?.license}
                      </div>
                      <div>
                         Search Score: {numToStars(item?.searchScore)}
                      </div>

                      
                    </div>
                    <div className='flex gap-20 justify-center items-center mt-8 border-t-2 border-yellow-500'>
                              <a target='_blank' href={item?.package?.links?.npm} className='font-medium underline'>
                                  npm link
                              </a>
                              <a target='_blank' href={item?.package?.links?.homepage} className='font-medium underline'>
                                  homepage
                              </a>
                    </div>
                  </div>
                 
                )
              })
              :
              null
            }
        </div>
        {allObjects.length > itemsPerPage ? (
          <div className='mb-4 flex flex-wrap items-center justify-center gap-3'>
            <Button onClick={goToPrevPage} disabled={currentPage === 1} variant="outline">
              Previous
              
            </Button>
            <span className='text-sm font-medium text-gray-700 dark:text-gray-200'>
              Page {currentPage} of {totalPages}
            </span>
            <Button onClick={goToNextPage} disabled={currentPage === totalPages} variant="outline">
              Next
            </Button>
          </div>
        ) : null}
      </div>

      <div className='mx-40 my-6 flex flex-col items-center '>
        <div className='font-bold text-2xl mb-2'>FAQs</div>
        <Accordion type="single" collapsible className="sm:w-full space-y-1">
          <AccordionItem className='bg-gradient-to-r from-red-500 to-orange-500 rounded-md p-4 text-white' value="item-1">
            <AccordionTrigger>Are deprecated packages displayed?</AccordionTrigger>
            <AccordionContent>
              No. npmjs APIs don't return information about packages which are deprecated.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className='bg-gradient-to-r from-pink-500 to-amber-500 rounded-md p-4 text-white' value="item-2">
            <AccordionTrigger>Is there any limitation to data?</AccordionTrigger>
            <AccordionContent>
              Yes. Data returned from the registry is at most 18 months.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className='bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-md p-4 text-white' value="item-3">
            <AccordionTrigger>Any plans for Future enhancements?</AccordionTrigger>
            <AccordionContent>
              Yes. Integration of GenAi for various features.
            </AccordionContent>
          </AccordionItem>
           <AccordionItem className='bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-md p-4 text-white' value="item-4">
            <AccordionTrigger>What about scoped packages?</AccordionTrigger>
            <AccordionContent>
              Except compare page, scoped packages are supported.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
       
    </div>
  )
}

export default Home

 