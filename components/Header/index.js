// import { Disclosure } from '@chakra-ui/react'
import { HiMenu, HiX } from 'react-icons/hi'
import { ColorModeToggle } from './colorModeToggle'
import Image from 'next/image'
import { WalletLogin } from '../w3b/WalletLogin'
import { ConnectButton } from '../Buttons/ConnectButton'
import { useSelector, useDispatch } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'



export default function Header({ provider }) {

  const store = useSelector((state) => state.eth);
  console.log("🚀 ~ file: index.js ~ line 14 ~ Header ~ store", store.account)

  return (
    <>
      <div
        as="nav"
        className={`bg-gradient-to-b from-slate-800 via-slate-900 to-neutral-900 shadow-2xl z-30 opacity-100 sticky top-0`}
      >
        <div className=" mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <ConnectButton />
            <motion.div
              initial={false}
              animate={(store.account ) ? 'visible' : 'hidden'}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut", duration: .5 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 500 },
              }}
              className="ml-3 px-3 py-1 bg-indigo-100 bg-opacity-10 hidden sm:flex rounded-tr-xl rounded-bl-xl text-indigo-400 hover:text-snow transition-colors duration-300"
            >
              {store.account}
            </motion.div>
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
