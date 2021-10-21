import Head from 'next/head'
import { minifyRecords, myAirtable } from '../utils/Airtable'
import useSWR from 'swr'
import { Fetcher } from '../lib/api'
import Link from 'next/link'
import { signOut } from '@firebase/auth'
import { auth } from '../src/config/firebase.config'
import Confetti from 'react-confetti'
import {useWindowSize} from 'react-use';

export default function Home() {


  const {width, height} = useWindowSize();

  const { data: minifiedRecords, error } = useSWR('/api/getData', Fetcher, { refreshInterval: 5000 })
  

  if (error) return <div>Failed to load</div>
  if (!minifiedRecords) return <div>Loading...</div>



  const amount = parseFloat(minifiedRecords[0].fields.goal) - parseFloat(minifiedRecords[0].fields.sales)
  
  const money = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'SEK', notation: 'compact' }).format(Math.floor(amount))

  const exMoney = new Intl.NumberFormat('sv-SV', { style: 'currency', currency: 'SEK' }).format(amount)
  console.log('data', minifiedRecords);
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full min-h-screen gap-4 py-2 bg-gray-900">
      {amount <= 0 ?  <Confetti width={width} height={height} /> : ''}
          
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute top-0 left-0 flex flex-col justify-center w-1/2 p-4 text-white">
        <h2>Capace media <span className="text-2xl ">sales</span></h2>
      </div>
      <div className="flex flex-col items-center justify-center w-1/2 p-8 text-5xl text-white bg-gray-800 rounded ">
      
        <div>
        { amount <= 0 ? 'Gratz' : exMoney}
        </div>
      </div>


    </div>
  )
}
