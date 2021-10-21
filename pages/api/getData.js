import { myAirtable, minifyRecords } from "../../utils/Airtable";



export default async (req, res) => {
    try{

        const records = await myAirtable(process.env.AIRTABLE_TABLE_NAME, process.env.AIRTABLE_API_KEY, process.env.AIRTABLE_BASE_ID).select({}).firstPage();
        const minifiedRecords = minifyRecords(records);
        res.status(200).json([...minifiedRecords]);
    }catch(err){
        res.status(500).json({ msg: 'Something went wrong'});
    }
}
