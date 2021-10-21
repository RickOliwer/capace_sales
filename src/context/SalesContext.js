
import { createContext, useState } from 'react'

export const SalesContext = createContext();

const SalesProvider = ({ children }) => {
    const [sales, setSales] = useState([]);

    const refreshSales = async () => {
        try{
            const res = await fetch('/api/getData');
            const latestSales = await res.json();
            setSales(latestSales)
        }catch(err){
            console.error(err);
        }
    }


    const updateSales = async (updatedSale) => {
        try{
            const res = await fetch('/api/updateData', {
                method: 'PUT',
                body: JSON.stringify(updatedSale),
                headers: { 'content=type': 'application/json' },
            });
            await res.json();
        }catch(err){
            console.error(err);
        }
    }
    return <SalesContext.Provider value={{
        sales,
        setSales,
        refreshSales,
        updateSales,
    }}
    >
        {children}
    </SalesContext.Provider>
}

export default SalesProvider;