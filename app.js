const express = require('express');
const app = express();
const XLSX = require('xlsx');

const PORT = process.env.PORT || 3030;

app.get("/",(req,res)=>{
    res.send('Michel Mouawad')
})
app.get("/informations",(req,res)=>{

// Read the Excel file
const workbook = XLSX.readFile('./info.xlsx');

// Get the first sheet's name
const sheetName = "info" //workbook.SheetNames[0];

// Get the content of the first sheet
const sheet = workbook.Sheets[sheetName];

// Convert the sheet to JSON format
const data = XLSX.utils.sheet_to_json(sheet);

// Print the data
    res.json(data)
})
app.get("/students",(req,res)=>{
    let data = [
        {id:10,name:'Marwan'},
        {id:11,name:'Antoine'}
    ]
    res.send(data)
})
app.listen(PORT, ()=>{
    console.log(`server started on port ${PORT}`);
})
