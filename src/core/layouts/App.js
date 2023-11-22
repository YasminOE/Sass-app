import { useRouter } from 'next/router'
import Meta from 'src/core/components/Meta'
import Navbar from "src/core/components/Navbar"
import {motion} from "framer-motion"
import Logo from '/src/core/components/Logo.js'

const hideNavbarPages = ['/success', '/login']

export default function AppLayout({children, key}) {
  const router = useRouter();

  const hideNavbar = hideNavbarPages.includes(router.asPath)
  return <>

     <motion.div key={key}
>   
     <Meta />
    {hideNavbar ? null : <Navbar/>}
    {children}


  <motion.div
    className='slide-in'
    initial={{top: 0}}
    animate={{top: "-100vh"}}
    exit={{top: 0}}
    transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 1.5}}
    key='slide-in'
  >
    
 <div className="centered">
  <Logo/>
 </div>
  </motion.div>

  <motion.div
        className='slide-out'
        initial={{scaleY: 1}}
        animate={{scaleY: 0}}
        exit={{scaleY: 0}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1]}}

        // add content animation
        // initial={{top: 0}}
        // animate={{top: "100vh"}}
        // exit={{top: 0}}
        // transition={{ duration: 1, ease: [0.22, 1, 0.36, 1]}}
        key='slide-out'
  >
    
  </motion.div>
  </motion.div>



 

  </>
}
