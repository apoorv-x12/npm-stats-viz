import { useEffect, useState } from "react"
import PackageInfo from "../components/PackageInfo"
import { EvervaultCard } from "../components/ui/ever-vault-card"
import { Separator } from "../components/ui/separator"
import { Meteors } from "../components/ui/meteors"
import ComparePackages from '../components/ComparePackages';

const Compare = () => {

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
           effect={ <EvervaultCard text="Compare Downloads of Packages:" />}
           note={'Type names of the 2 packages separated by , without spaces.BREAKNote: currently at most 2 packages can be compared.'}
           />

        </div>
        <div className='mx-16 my-8'>
           <Separator/>
        </div>

        {
          packageName === '' ?
          null : 
          <div className="m-16">
            <ComparePackages packagesNameString={packageName}/>
          </div>
        }
        
       {windowWidth > 820 ? <Meteors number={20}/> : null}
    </div>
  )
}

export default Compare