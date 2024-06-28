
import { ModeToggle } from './mode-toggle';
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {Link} from 'react-router-dom'

import npm from '../assets/npm.svg'

const Header = () => {
  return (
    <header className="flex p-4 justify-between gap-16 ">
        
        <ModeToggle/>
        <div className="flex flex-wrap justify-evenly gap-16 items-center bg-clip-text text-transparent bg-gradient-to-r from-orange-1 to-orange-2 text-xl text font-bold">
            <div className='hover:bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent'>
                <Link to={'/home'}>
                  Home
                </Link>
            </div>
            <div className='hover:bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent'>
                <Link to={'/package'}>
                  Package
                </Link>
            </div>
            <div className='hover:bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent'>
                <Link to={'/compare'}>
                  Compare
                </Link>
            </div>
            <div className='hover:bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent'>
                <Link to={'/genAi'}>
                  GenAi
                </Link>
            </div>
        </div>
        <a className='animate-pulse bg-blue-500 dark:bg-red-500 rounded-md' rel='noopener' target='_blank' href="http://www.npmjs.com">
        <Avatar>
            <AvatarImage src={npm} />
            <AvatarFallback>NPM</AvatarFallback>
        </Avatar>
        </a>
        
    </header>
  )
}

export default Header