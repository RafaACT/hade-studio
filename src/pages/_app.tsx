import '@/styles/globals.sass'
import '@/styles/mobile.sass'
import type { AppProps } from 'next/app'
import { Main } from '@/components/main_layout.tsx/main'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Main>
      <Component {...pageProps} />
    </Main>
  )
}
