import { INFURA_ID, NETWORK, NETWORKS, ALCHEMY_KEY } from "../constants/chains";
import Portis from "@portis/web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Authereum from "authereum";
import Fortmatic from "fortmatic";
import WalletLink from "walletlink";
import Web3Modal from "web3modal";
import { setGasPrice, setEthPrice, setConnection, } from '../app/ethSlice'
import { useCallback, useEffect, useState } from "react";
import { ethers } from 'ethers';


/// 📡 What chain are your contracts deployed to?
const targetNetwork = NETWORKS.mumbai; // <------- select your target frontend network (localhost, rinkeby, xdai, mainnet)

// ( ⚠️ Getting "failed to meet quorum" errors? Check your INFURA_ID
// 🏠 Your local provider is usually pointed at your local blockchain
const localProviderUrl = targetNetwork.rpcUrl;
// as you deploy to other networks you can set REACT_APP_PROVIDER=https://dai.poa.network in packages/react-app/.env
const localProviderUrlFromEnv = process.env.REACT_APP_PROVIDER ? process.env.REACT_APP_PROVIDER : localProviderUrl;
if (true) console.log("🏠 Connecting to provider:", localProviderUrlFromEnv);
const localProvider = new ethers.providers.StaticJsonRpcProvider(localProviderUrlFromEnv);

// 🔭 block explorer URL
const blockExplorer = targetNetwork.blockExplorer;

// Pack all in one 
export function getModalArgs() {
    // Portis ID: 6255fb2b-58c8-433b-a2c9-62098c05ddc9
    /*
      Web3 modal helps us "connect" external wallets:
    */
    // // Coinbase walletLink init
    // const walletLink = new WalletLink({
    //     appName: "coinbase",
    // });

    // const walletLinkProvider = walletLink.makeWeb3Provider(`https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`, 1);

    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider, // required
            options: {
                bridge: "https://polygon.bridge.walletconnect.org",
                infuraId: INFURA_ID,
                rpc: {
                    1: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`, // mainnet // For more WalletConnect providers: https://docs.walletconnect.org/quick-start/dapps/web3-provider#required
                    42: `https://kovan.infura.io/v3/${INFURA_ID}`,
                    100: "https://dai.poa.network", // xDai
                },
            },
        },
        portis: {
            display: {
                logo: "https://user-images.githubusercontent.com/9419140/128913641-d025bc0c-e059-42de-a57b-422f196867ce.png",
                name: "Portis",
                description: "Connect to Portis App",
            },
            package: Portis,
            options: {
                id: "6255fb2b-58c8-433b-a2c9-62098c05ddc9",
            },
        },
        fortmatic: {
            package: Fortmatic, // required
            options: {
                key: "pk_live_5A7C91B2FC585A17", // required
            },
        },
        // torus: {
        //   package: Torus,
        //   options: {
        //     networkParams: {
        //       host: "https://localhost:8545", // optional
        //       chainId: 1337, // optional
        //       networkId: 1337 // optional
        //     },
        //     config: {
        //       buildEnv: "development" // optional
        //     },
        //   },
        // },
        // "custom-walletlink": {
        //     display: {
        //         logo: "https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0",
        //         name: "Coinbase",
        //         description: "Connect to Coinbase Wallet (not Coinbase App)",
        //     },
        //     package: new WalletLink({
        //         appName: "coinbase",
        //     }).makeWeb3Provider(`https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`, 1),
        //     connector: async (provider, _options) => {
        //         await provider.enable();
        //         return provider;
        //     },
        // },
        authereum: {
            package: Authereum, // required
        },
    }

    const logoutOfWeb3Modal = async (web3Modal) => {
        await web3Modal.clearCachedProvider();
        setTimeout(() => {
            window?.location?.reload();
        }, .1);
    };

    const loadWeb3Modal = async (dispatch, router, web3Modal) => {
        const instance = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(instance);
        const signer = provider.getSigner();
        const acc = await signer.getAddress()
        dispatch(setConnection({ account: acc, connected: true }));
        // router.push('/form')

        // Subscribe to provider connection
        instance.on("connect", (info) => {
            console.log('Connected: ', info);
        });

        instance.on("chainChanged", chainId => {
            console.log(`chain changed to ${chainId}! updating providers`);
        });

        instance.on("accountsChanged", () => {
            const signer = provider.getSigner();
            console.log(`account changed! ${acc}`);
            dispatch(setConnection({ account: acc[0], connected: true }));
        });

        // Subscribe to session disconnection
        instance.on("disconnect", (code, reason) => {
            console.log('Dissconnected: ',code, reason);
            dispatch(setConnection({ account: null, connected: false }));
            // router.push('/')
            // logoutOfWeb3Modal();
        });
    }


    // useEffect(() => {
    //     if (web3Modal?.cachedProvider) {
    //         loadWeb3Modal();
    //     }
    // }, [loadWeb3Modal, web3Modal]);

    /* 🔥 This hook will get the price of Gas from ⛽️ EtherGasStation */
    // const gasPrice = useGasPrice(targetNetwork, "fast");
    // console.log("🚀 ~ file: useMyProvider.js ~ line 153 ~ useMyProvider ~ gasPrice", gasPrice[0])
    // dispatch(setGasPrice({ gasPrice: gasPrice || null }));
    // useEffect(() => {
    // }, [dispatch, gasPrice]);

    /* 💵 This hook will get the price of ETH from 🦄 Uniswap: */
    // const price = useExchangeEthPrice(targetNetwork, localProvider);
    // console.log("🚀 ~ file: useMyProvider.js ~ line 160 ~ useMyProvider ~ price", price)
    // dispatch(setEthPrice({ price: price || null }));
    // useEffect(() => {
    // }, [dispatch, price]);

    // // Use your injected provider from 🦊 Metamask or if you don't have it then instantly generate a 🔥 burner wallet.
    // const userProviderAndSigner = useEthersAdaptorFromProviderOrSigners(injectedProvider);
    // const userSigner = userProviderAndSigner.signer;

    // useEffect(() => {
    //     async function getAddress() {
    //         if (userSigner) {
    //             const newAddress = await userSigner.getAddress();
    //             dispatch(setConnection({ account: newAddress, connected: true }));
    //         } else {
    //             dispatch(setConnection({ account: null, connected: false }));
    //         }
    //     }
    //     getAddress();
    // }, [userSigner, dispatch]);

    return { loadWeb3Modal, providerOptions, logoutOfWeb3Modal, blockExplorer, localProvider, targetNetwork }
}
