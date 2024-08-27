import express from 'express';
import 'dotenv/config';

const app = express();
const port = process.env.PORT;
 
app.get('/', (req,res) =>{
    res.send('hiiiiiii');
})

const data = [{"id":"cvxhjvc7", "name":'aman', "age":"100"},
    {"id":"cvxhj76rd767", "name":'appu', "age":"10"},
    {"id":"cvxhjhjfyuvc7", "name":'rahul', "age":"50"}
]

app.get('/data',(req,res)=>{
res.json(data)
})

app.listen(port,()=>{
    console.log(`Listening on => ${port}`)
});