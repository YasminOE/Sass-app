import { useRouter } from 'next/router'
import Meta from 'src/core/components/Meta'
import Navbar from "src/core/components/Navbar"
import {motion , AnimatePresence} from "framer-motion"
import Logo from '/src/core/components/Logo.js'

const hideNavbarPages = ['/success', '/login']

export default function AppLayout({children}) {
  const router = useRouter();

  const hideNavbar = hideNavbarPages.includes(router.asPath)
  return <>

    {/* <AnimatePresence mood="wait"> */}
     {/* <motion.div key={router.pathname}> */}
     <Meta />
    {hideNavbar ? null : <Navbar/>}
    {children}
  {/* </motion.div> */}

  <motion.div
    className='slide-in'
    initial={{scaleY: 0}}
    animate={{scaleY: 0}}
    exit={{scaleY: 1}}
    transition={{ duration: 3, ease: [0.7, 0, 0.3, 1]}}
    // transition={{ duration: 1, ease: [0.7, 0, 0.3, 1]}}
    key='slide-in'
  >
    
 
  </motion.div>

  <motion.div
        className='slide-out'
        initial={{scaleY: 1}}
        animate={{scaleY: 0}}
        exit={{scaleY: 0}}
        transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1]}}
        key='slide-out'
  >
     
  </motion.div>

  {/* </AnimatePresence> */}

  </>
}
