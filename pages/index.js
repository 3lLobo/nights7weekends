import Head from 'next/head'
import Image from 'next/image'
import { BalanceComponent } from '../components/w3b/BalanceComponent'
import { useSelector, useDispatch } from 'react-redux'
import HomeWrapper from '../components/layout'
import { WalletLogin } from '../components/w3b/WalletLogin'
// import { WalletLogin } from '../components/w3b/WalletLogin'


export default function Home() {

  const store = useSelector((state) => state.theme)


  return (

    <HomeWrapper >
          <div>
            <h1
            className='dark:text-snow'
            >
              Connect Wallet to report malicious IP.
            </h1>
            {/* <WalletLogin /> */}
            {/* <BalanceComponent /> */}
          </div>
    </HomeWrapper>
  )
}
