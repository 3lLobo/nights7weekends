import { useEffect, useState, useMemo } from 'react'
import { getNetworkInfo, useGasPrice, useBalance, useEthersAdaptorFromProviderOrSigners } from 'eth-hooks';
// import { mainnetScaffoldEthProvider } from '../../app/appConfig';
import { defaultUpdateOptions } from 'eth-hooks/models';
import { ethers } from 'ethers';
import { useSelector, useDispatch } from 'react-redux';
import { setProvider } from '../../app/ethSlice';
import { WalletLogin } from './WalletLogin';


export const BalanceComponent = () => {

  const store = useSelector((state) => state.eth);
  const dispatch = useDispatch();

  const [provider, setProvider] = useState(null);
  // A Web3Provider wraps a standard Web3 provider, which is
  // what MetaMask injects as window.ethereum into each page

  useEffect(() => {
    //  Request Metamask access
    async function initProvider() {
      const prov = new ethers.providers.Web3Provider(window.ethereum)
      // MetaMask requires requesting permission to connect users accounts
      await prov.send("eth_requestAccounts", []);
      setProvider(prov);
    }
    initProvider();
  }, [])

  const [adaptor] = useEthersAdaptorFromProviderOrSigners(provider);


  const [balance] = useBalance('0xb5dFcB9EABD2D4CB96Ae86d3Fc290a70461b4e42', defaultUpdateOptions(), {
    adaptorEnabled: true,
    adaptor,
  });

  const [gasPrice] = useGasPrice(adaptor?.chainId, 'fast');

  const result = ethers.utils.formatEther(balance);

  return (
    <div
      className='bg-snow rounded-full p-6 font-sans font-semibold text-center'
    >
      <p> {provider?._network?.chainId}</p>
      The balance of account: 0xb5dFcB9EABD2D4CB96Ae86d3Fc290a70461b4e42 is {result.toString()} ETH
      <p> Gas Price: {gasPrice || '💌'}</p>
      <WalletLogin 
      provider={provider}
      />
    </div>
  )
};
