const connectDB=require('./DB/connect')
const express=require('express')
const app=express()

const cors=require('cors');
app.use(cors())

const tasks=require('./routes/tasks')
require('dotenv').config();

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks',tasks)

const PORT = process.env.PORT || 5000;

const start=async()=>
    {
    try {
        await connectDB(process.env.MONGO_URI)
        console.log('Connected to Mongo');
        app.listen(PORT,console.log(`Server is listening on ${PORT}...`))
    } catch (error) 
    {
        console.log(error);
    }
};
start()


