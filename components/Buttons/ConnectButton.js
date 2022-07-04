import { getModalArgs } from "../../utils/getModalArgs";
import { useSelector, useDispatch } from 'react-redux'
import { default as HeadContainer } from 'next/head'
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useRouter } from 'next/router';
import Web3Modal from "web3modal";




export function ConnectButton() {
  const store = useSelector((state) => state.eth);
  const themeStore = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const router = useRouter()

  // const modal = new EthersModalConnector({
  //   web3modalOptions,
  // config: { reloadOnNetworkChange: false, immutableProvider: false },
  // debug: true
  // })

  const { loadWeb3Modal, providerOptions, logoutOfWeb3Modal, blockExplorer, localProvider, targetNetwork } = getModalArgs()



  // const [modalArgs, setModalArgs] = useState(null);
  // { loadWeb3Modal, logoutOfWeb3Modal, web3Modal, blockExplorer, localProvider, }

  // useEffect(() => {
  //   if (!modalArgs) {
  //     const newArgs = getModalArgs()
  //     setModalArgs(() => newArgs)
  //   }
  // }, [modalArgs])

  // // Login listener
  // useEffect(() => {
  //   if (store.connected) {
  //     router.push('/form')
  //   }
  // }, [store.connected, router])


  function handleClick() {
    const web3Modal = new Web3Modal({
      // network: targetNetwork, // optional
      // cacheProvider: false,
      // theme: themeStore.mode,
      // config: { reloadOnNetworkChange: false, immutableProvider: false },
      // debug: true,
      // providerOptions // required
    });

    if (!store.connected) {
      loadWeb3Modal(dispatch, router, web3Modal)
    } else {
      logoutOfWeb3Modal(web3Modal)
    }
  }

  const primaryStyle = "px-4 py-2 bg-indigo-500 outline-none rounded text-white shadow-indigo-200 shadow-lg font-medium hover:bg-indigo-600 transition-colors duration-200"

  const secondaryStyle = "px-3 py-0 bg-indigo-100 bg-opacity-10 border-2 border-indigo-400 rounded-xl text-indigo-400 font-semibold  hover:bg-indigo-400 hover:text-snow transition-colors duration-300"


  return (
    <div
    // className="my-6"
    >
      {!store.connected
        ? <button className={secondaryStyle}
          onClick={handleClick}
        >
          Connect Wallet
        </button>
        : <button className={secondaryStyle}
          onClick={handleClick}
        >
          Disconnect Wallet
        </button>
      }
    </div>
  )
}