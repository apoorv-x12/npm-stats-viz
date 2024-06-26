import NpmLifeTotal from '../components/NpmLifeTotal';
import Areachart from "../components/AreaChart"
import { useState } from 'react';
import PackageInfo from '../components/PackageInfo';

const Home = () => {
    const [packageName, setPackageName] = useState('')
  return (
    <div>
        <div className="m-16" >
           <PackageInfo setName={setPackageName}/>
        </div>
        {packageName === '' ?
        null : 
        <div className="m-16">
            <NpmLifeTotal name={packageName}/>
        </div>
        }
        <div className="flex items-center justify-center">
            <Areachart/>
        </div>
        
    </div>
  )
}

export default Home