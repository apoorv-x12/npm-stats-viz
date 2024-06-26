import NpmLifeTotal from '../components/NpmLifeTotal';
import { useState } from 'react';
import PackageInfo from '../components/PackageInfo';
import { Separator } from '../components/ui/separator';


const Package = () => {
    const [packageName, setPackageName] = useState('')
   
  return (
    <div>
        <div className="mx-16 my-8" >
           <PackageInfo setName={setPackageName}/>
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
        
    </div>
  )
}

export default Package