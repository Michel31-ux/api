const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;

app.get("/",(req,res)=>{
    res.send('Michel Mouawad')
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
