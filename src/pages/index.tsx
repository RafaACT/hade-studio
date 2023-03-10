import Head from 'next/head'
import { Inter } from '@next/font/google'
import Landing from '@/components/landing-page/landing'
import { Main, MainData } from '@/interfaces/interfaces'

const inter = Inter({ subsets: ['latin'] })

export default function Home({job, studio}:Main) {
  return (
    <>
      <Head>
        <title> Hade Studio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Landing job={job} studio={studio} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const {job, studio } = await import('../data/data.json')

  return{
      props:{
          job: job[0],
          studio: studio[0]
      }
  }
}