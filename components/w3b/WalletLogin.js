import { MyButton } from "../Button/MyButton";
import { useSelector, useDispatch } from 'react-redux';
import { ethers } from "ethers";


// Component to log in and out with your wallet
export function WalletLogin({ provider, h }) {

    // to handle a login
    const handleLoginClick = () => {
        async function login() {
            const prov = await new ethers.providers.Web3Provider(window.ethereum)
            console.log("🚀 ~ file: WalletLogin.js ~ line 13 ~ login ~ prov", prov)

        }
    };


    return (
        <div>
            {(!provider) && (
                <MyButton
                    h={h}
                    text={'Login'}
                    onClick={handleLoginClick}
                />
            )}
        </div>
    )
}