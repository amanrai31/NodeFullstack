 import express from 'express';
import 'dotenv/config';

const app = express();
const port = process.env.PORT;
 
app.get('/api', (req,res) =>{
    res.send('hiiiiiii');
})

app.get('/api/h1', (req,res) =>{
    res.send('<h1>hello</h1>');
})
const users = [{"id":1, "name":'aman', "age":"100"},
    {"id":2, "name":'appu', "age":"10"},
    {"id":3, "name":'rahul', "age":"50"}
]

app.get('/api/users',(req,res)=>{
res.json(users)
})

app.listen(port,()=>{
    console.log(`Listening on => ${port}`)
});
