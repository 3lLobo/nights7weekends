import Head from 'next/head'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import HomeWrapper from '../components/layout'


export default function Home() {

  const store = useSelector((state) => state.theme)
  // const [injectedProvider, setInjectedProvider] = useState();
  
  
  return (

    <HomeWrapper >
          <div
          className='mt-11'
          >
            <h1
            className='dark:text-snow text-xl '
            >
              Connect Wallet to report malicious IP.
            </h1>
            {/* <WalletLogin /> */}
            {/* <BalanceComponent /> */}
          </div>
    </HomeWrapper>
  )
}
