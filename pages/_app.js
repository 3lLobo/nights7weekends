import '../styles/globals.css'
import { EthersAppContext } from 'eth-hooks/context';
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { store } from '../app/store'



function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <EthersAppContext >
        {/* <html
          className={`${store.mode}`}
        > */}

          <div
            className='bg-gradient-to-tr from-aqua dark:from-slate-900 dark:via-navy to-snow dark:to-navy-muted font-'
          >
            <Component {...pageProps} />
          </div>
        {/* </html> */}
      </EthersAppContext >
    </Provider>
  )
}

export default MyApp
