const express = require('express');
const cors = require('cors');
const Task = require('./model/taskInfo');
require('./db/con');
const app = express();
const port = process.env.PORT || 3300;
app.use(cors());
app.use(express.json());
// app.get('/', (req, res) => {
//     res.send("welcome");
//     res.end();
// })
app.get('/', async (req, res) => {
    try {
        const data = await Task.find({});
        console.log(data);
        res.status(200).send(data);
    }
    catch (error) {
        res.status(500).json({ error: `failed` });
    }
})
app.post('/watchData', async (req, res) => {
    try {
        const data = await Task.create(req.body);
        console.log(data);
        res.status(200).json({message:"task added"});
    }
    catch(error) {
        res.status(500).json({ error: `failed` });
    }
})
app.listen(port, () => {
    console.log(`port is listening at ${port}`);
})
