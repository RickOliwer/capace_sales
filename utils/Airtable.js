
const myAirtable = (name, api, baseID) =>{
    
    const Airtable = require('airtable');
    const base = new Airtable({apiKey: api}).base(baseID);

    const table = base(name);

    return table;

}

const minifyRecords = (records) => {
    return records.map(record => getMinifiedRecord(record));
}
const getMinifiedRecord = (record) => {
    if(!record.fields.completed){
        record.fields.completed = false;
    }
    return {
        id: record.id,
        fields: record.fields,
    }
}


export {myAirtable, getMinifiedRecord, minifyRecords};