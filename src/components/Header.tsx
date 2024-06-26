
import { ModeToggle } from './mode-toggle';
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {Link} from 'react-router-dom'

import npm from '../assets/npm.svg'

const Header = () => {
  return (
    <header className="flex p-4 justify-between gap-16">
        
        <ModeToggle/>
        <div className="flex justify-evenly gap-16 items-center">
            <div>
                <Link to={'/home'}>
                  home
                </Link>
            </div>
            <div>
                <Link to={'/package'}>
                  package
                </Link>
            </div>
            <div>
                <Link to={'/compare'}>
                  compare
                </Link>
            </div>
            <div >
                <Link to={'/genAi'}>
                  genAi
                </Link>
            </div>
        </div>
        <a className='animate-bounce' rel='noopener' target='_blank' href="http://www.npmjs.com">
        <Avatar>
            <AvatarImage src={npm} />
            <AvatarFallback>NPM</AvatarFallback>
        </Avatar>
        </a>

    </header>
  )
}

export default Header