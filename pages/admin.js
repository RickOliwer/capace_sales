import Update from '../src/components/Update';
import { Fetcher } from '../lib/api'
import useSWR from 'swr'
import { auth } from '../src/config/firebase.config'
import { signOut } from '@firebase/auth'
const Admin = () => {

    const { data: sales, error } = useSWR('/api/getData', Fetcher)

    if (error) return <div>Failed to load</div>
    if (!sales) return <div>Loading...</div>

    return (

            <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-600">
                <Update sale={sales}/>
                <button onClick={() => signOut(auth)} className="block p-4 m-4 font-bold text-gray-800 transition duration-500 bg-yellow-600 rounded hover:text-yellow-600 hover:bg-gray-800">Logga ut</button>
            </div> 

            
    );
}
 
export default Admin;