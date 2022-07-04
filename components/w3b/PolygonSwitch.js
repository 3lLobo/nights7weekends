import { MyButton } from "../Button/MyButton";
import { useSelector, useDispatch } from 'react-redux';
import { ethers } from "ethers";


// Component to log in and out with your wallet
export function PolygonSwitch({ provider }) {

    // to handle a log out
    const handleLogoutClick = (e) => {
        console.log(provider.getNetwork())
        async function switchPolygon() {
            const hexVal = ethers.utils.hexValue(80001)
            console.log("🚀 ~ file: WalletLogin.js ~ line 19 ~ logout ~ hexVal", hexVal)
            await ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: hexVal }] });
        }
        switchPolygon();
    }



    return (
        <div>
            <MyButton
                text={'Switch to Polygon'}
                onClick={(e) => handleLogoutClick(e)}
            />
        </div>
    )
}