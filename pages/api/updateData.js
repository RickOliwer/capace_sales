import { myAirtable, getMinifiedRecord } from "../../utils/Airtable";
export default async (req, res) => {
    const {sales, goal, id} = JSON.parse(req.body);
    console.log(JSON.parse(req.body));
    res.status(200)
    try {

        const updatedRecords = await myAirtable(process.env.AIRTABLE_TABLE_NAME, process.env.AIRTABLE_API_KEY, process.env.AIRTABLE_BASE_ID).update([{ id, fields: {sales, goal} }]);

        res.status(200).json(getMinifiedRecord(updatedRecords[0]));
    }catch(err){
        console.log(err);
        res.status(500).json({ msg: err});
    }
}
  