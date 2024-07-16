import NpmLifeTotal from '../components/NpmLifeTotal';
import { useEffect, useState } from 'react';
import PackageInfo from '../components/PackageInfo';
import { Separator } from '../components/ui/separator';
import { EvervaultCard } from '../components/ui/ever-vault-card';
import { Meteors } from '../components/ui/meteors';
//import { BackgroundBeams } from '../components/ui/background-beams';

const Package = () => {
    const [packageName, setPackageName] = useState('')
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
   
  return (
    <div >    
        <div className="mx-16 my-8" >
           <PackageInfo setName={setPackageName} 
           effect={ <EvervaultCard text="Package Downloads : " />}
           />

        </div>
        <div className='mx-16 my-8'>
           <Separator/>
        </div>
        {packageName === '' ?
        null : 
        <div className="m-16">
            <NpmLifeTotal name={packageName}/>
        </div>
        }
        
       {windowWidth > 820 ? <Meteors number={20}/> : null}
    </div>
  )
}

export default Package