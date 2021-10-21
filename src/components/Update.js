import { useState } from "react";
import { Fetcher } from '../../lib/api'


const Update = ({sale}) => {
    const [sales, setSales] = useState(sale[0].fields.sales)
    const [goal, setGoal] = useState(sale[0].fields.goal)



    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const json = await fetch('/api/updateData', {
                method: 'PUT',
                body: JSON.stringify({sales: parseFloat(sales), goal: parseFloat(goal), id: sale[0].id}),
                
            });
        }catch(err){
            console.error(err);
        }
    }

    return ( 

            <div className="w-1/2 p-8 bg-white rounded shadow-2xl">

                <form onSubmit={(e) => handleSubmit(e)} className="space-y-8">

                    <h2 className="mb-10 text-3xl font-bold text-brand-oranges">Update Sales</h2>
                    <div className="mb-3">
                        <label htmlFor="" className="block mb-2 font-bold text-gray-500" for="sales">Sales</label>

                        <input type="text" id="sales" value={sales} className="w-full p-3 border border-gray-400 rounded outline-none focus:border-brand-oranges" onChange={(e) => setSales(e.target.value)}/>
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="" className="block mb-2 font-bold text-gray-500" for="goal">Goal</label>
                        <input type="text" id="goal" value={goal} className="w-full p-3 border border-gray-400 rounded outline-none focus:border-brand-oranges" onChange={(e) => setGoal(e.target.value)}/>
                    </div>
                    
                    <div>
                        <input className="block w-full p-4 font-bold text-gray-800 transition duration-500 rounded bg-brand-oranges hover:text-brand-oranges hover:bg-gray-800" type="submit" value="Update" />

                    </div>
                </form>
            </div>
  
     );
}
 
export default Update;