// import { Disclosure } from '@chakra-ui/react'
import { HiMenu, HiX } from 'react-icons/hi'
import { ColorModeToggle } from './colorModeToggle'
import { motion } from "framer-motion"
import Image from 'next/image'
import { WalletLogin } from '../w3b/WalletLogin'


export default function Header({ provider }) {

  
  return (
    <>
      <div
        as="nav"
        className={`bg-gradient-to-b from-slate-800 via-slate-900 to-neutral-900 shadow-2xl z-30 opacity-100 sticky top-0`}
      >
        <div className=" mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* <WalletLogin
              provider={provider}
              h={3} /> */}
            {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div> */}
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="relative flex-shrink-0 flex items-center text-white mr-6">
                <motion.div
                  animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 360, 360, 360],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                  }}
                  transition={{ duration: 3 }}
                >
                  <Image layout='fill' src="/ethereum-eth-logo-animated.gif" alt="CORTXsvg" />

                </motion.div>
              </div>
              {/* <div className="flex-shrink-0 items-center text-white hidden sm:flex ">

              </div> */}
              <div className="hidden sm:block sm:ml-6"></div>
            </div>
            <div className="sm:inset-auto sm:ml-6 ">
              {/** notifications */}
              {/* {AuthUser() ? <MenuLogado user={user} /> : <MenuNotLogado />} */}
              <ColorModeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
