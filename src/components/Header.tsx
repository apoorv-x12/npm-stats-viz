
import { ModeToggle } from './mode-toggle';
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import npm from '../assets/npm.svg'
import { useEffect, useState } from 'react';
import HeaderContent from './HeaderContent';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "../components/ui/drawer"
import { Button } from './ui/button';

const Header = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
       const handleResize= () => setWindowWidth(window.innerWidth);
       window.addEventListener('resize', handleResize);
       return () => window.removeEventListener('resize', handleResize);
  })

  return (
    <header className="flex p-4 justify-between gap-8 ">
        <div className='animate-pulse '>
          <ModeToggle />
        </div>

    {
      windowWidth >768 ?
      <HeaderContent />
      :
      <Drawer>
        <DrawerTrigger>
          <Button variant="outline">Open Navigation</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
              <HeaderContent />
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose>
               <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

    }
        <div>
          <a rel='noopener' target='_blank' href="http://www.npmjs.com">
          <Avatar>
              <AvatarImage src={npm} />
              <AvatarFallback>NPM</AvatarFallback>
          </Avatar>
          </a>
        </div>
        
        
    </header>
  )
}

export default Header