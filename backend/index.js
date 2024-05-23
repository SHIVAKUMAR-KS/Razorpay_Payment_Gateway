const express =require('express');
const bodyParser = require('body-parser')
const cors =require('cors');

const app = express();
const port=5000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})