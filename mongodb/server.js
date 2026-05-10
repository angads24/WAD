const express = require('express');
const dbConnect = require('./mongodb')
const app=express();
app.use(express.json())

//GET API
app.get('/', async (req, res) => {
    let result = await dbConnect();
    result = await result.find().toArray();
    res.send(result);
})

//POST API
app.post('/', async (req, res) => {
    let result = await dbConnect();
    result = await result.insertOne(req.body);
    res.send("Data succesfully inserted");
})

//UPDATE API
app.put('/:Name', async (req, res) => {
    let result = await dbConnect();
    result = await result.updateOne({Name: req.params.Name}, {$set:req.body});
    res.send("Database succesfully inserted");
})


//DELETE API
app.delete('/:Name', async (req, res) => {
    let result = await dbConnect();
    result = await result.deleteOne({Name:req.params.Name});
    res.send("Data succesfully deleted");
})


const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
