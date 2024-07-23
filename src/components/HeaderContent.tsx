import { Link } from "react-router-dom"
import histogram from '../assets/histogram-2.svg'
import genai from '../assets/genai.svg'
import atom from '../assets/atom.svg'
import compare from '../assets/compare.svg'

const HeaderContent = () => {
  return (
    <div className="flex flex-wrap justify-evenly gap-10 items-center bg-clip-text text-transparent bg-gradient-to-r from-orange-1 to-orange-2 text-xl text font-bold">
            <div className='flex items-center  gap-2'>
                <img className='animate-spin' width={40} height={40} src={atom} alt="atom" /> 
                <Link to={'/'}  className='hover:bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent'>
                  Home
                </Link>
            </div>
            <div className='flex items-center gap-2'>
                <img className='animate-ping' width={40} height={40} src={histogram} alt="histogram" /> 
                <Link to={'/package'} className='hover:bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent'>
                  Package
                </Link>
            </div>
            <div className='flex items-center gap-2'>
                <img className='animate-ping' width={40} height={40} src={compare} alt="compare" /> 
                <Link to={'/compare'}  className='hover:bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent'>
                  Compare
                </Link>
            </div>
            <div className='flex items-center  gap-2'>
                <img className='animate-ping' width={40} height={40} src={genai} alt="genai" /> 
                <Link to={'/genAi'}  className='hover:bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent'>
                  GenAi
                </Link>
            </div>
        </div>
  )
}

export default HeaderContent