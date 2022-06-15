import type { AppProps } from 'next/app'
import { createContext, useEffect, useState } from 'react'
import { HomePage } from 'components/Homepage';
import "../styles/main.scss"
import { useLanyardWs } from 'use-lanyard';
import { CONFIG } from '@libs/config';


export const AppContext = createContext<ReturnType<typeof useLanyardWs> | null>(
  null
)

function MyApp({ Component, pageProps }: AppProps) {
  const [homePage, setHomePage] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setHomePage(false)
    }, 4500)
  })
  const lanyard = useLanyardWs(CONFIG.USER_ID)
  return (
  <> 
    {!homePage ? (
      <AppContext.Provider value={lanyard}>
        <Component {...pageProps} />  
      </AppContext.Provider>
    ) : (
      <>
        <HomePage />
      </>
    )}
  </>
  )
}

export default MyApp
