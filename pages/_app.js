import '../styles/globals.css'
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { store } from '../app/store'



function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <div
        className='bg-gradient-to-tr from-aqua dark:from-slate-900 dark:via-indigo-800 to-snow dark:to-indigo-500 font-'
      >
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}

export default MyApp
