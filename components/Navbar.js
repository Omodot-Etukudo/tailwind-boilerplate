import Head from 'next/head'
import NavLink from './NavLink'
import { HomeIcon, BriefcaseIcon, UserCircleIcon, PaperAirplaneIcon } from "@heroicons/react/solid"

export default function Navbar() {

    
    return (
      
     <div>  
        <Head>
            <title>Omodot Etukudo | Product Designer & Developer</title>
            <meta name="description" content="Portfolio website for Omodot Etukudo" />
            <meta name="viewport" content="width=device-width, initial-scale=1 viewport-fit=cover" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
            <link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@400;600;700&family=Lexend:wght@100;200;300;400&display=swap"/>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <nav className=' hidden  z-50 md:flex lg:flex xl:flex justify-between items-center lg:py-6 md:py-6 py-6 lg:px-20 md:px-14 px-6 w-full text-gray-100'>
            <div className='w-24'><a className='lg:font-semibold md:font-semibold font-normal text-yellow-400'>omodot<span className='text-blue-300 font-gray-900 text-lg'>.</span></a></div>
            <ul className='lg:flex md:flex hidden flex-row space-x-12 justify-center items-center '>


                <NavLink isActive name="home" />
                <NavLink name="work" />
                <NavLink name="about" />
                <NavLink name="resume" />
                
            
            </ul>

            <a className='lg:font-semibold md:font-semibold font-normal text-yellow-400'>hello@omodot.io</a>
        </nav>

        <nav className='flex justify-center items-center fixed py-4 px-4 z-50 bottom-0.5 left-0 w-full md:hidden lg:hidden xl:hidden '>
            <div className='flex justify-between items-center px-4 py-2 w-full rounded-full bg-gray-900 shadow-2xl border border-gray-800 border-dashed'>
                <NavLink isActive name="home" Icon={<HomeIcon/>}/><NavLink name="my work" Icon={<BriefcaseIcon/>} /><NavLink name="about me" Icon={<UserCircleIcon/>} /><NavLink name="say hello" Icon={<PaperAirplaneIcon/>} />
            </div>

        </nav>

        <div className="fixed flex top-0 left-0 w-full md:hidden lg:hidden h-10 bg-gray-900 z-50">
            
        </div>

      </div> 
      
    )
}  
    
    
    
    
    
    
    
    
    