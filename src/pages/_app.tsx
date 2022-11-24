import type { AppProps } from 'next/app'
import { trpc } from '../utils/trpc';

import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default trpc.withTRPC(MyApp);
