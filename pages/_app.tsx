import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ContextUIProvider } from '../context/ContextUI/ContextUIProvider'


export default function App({ Component, pageProps }: AppProps) {
  return <ContextUIProvider>
    <Component {...pageProps} />
  </ContextUIProvider>

}
