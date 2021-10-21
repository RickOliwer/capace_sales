import Update from '../src/components/Update';
import { Fetcher } from '../lib/api'
import useSWR from 'swr'
import { auth } from '../src/config/firebase.config'
import { signOut } from '@firebase/auth'
import Link from 'next/link'
const Admin = () => {

    const { data: sales, error } = useSWR('/api/getData', Fetcher)

    if (error) return <div>Failed to load</div>
    if (!sales) return <div>Loading...</div>

    return (

            <div className="relative flex flex-col items-center justify-center min-h-screen bg-brand-oranges">
                <Update sale={sales}/>
                <div className="absolute top-0 right-0 flex">
                <Link href="/"><button className="block p-4 m-4 font-bold transition duration-500 rounded text-brand-light bg-brand-dark hover:text-brand-dark hover:bg-brand-light">Back</button></Link>

                    <button onClick={() => signOut(auth)} className="block p-4 m-4 font-bold transition duration-500 rounded text-brand-light bg-brand-dark hover:text-brand-dark hover:bg-brand-light">Logga ut</button>

                </div>
            </div> 

            
    );
}
 
export default Admin;