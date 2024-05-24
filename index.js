import express from "express";
// importing space 


//declaration/ initialization
const app = express();
const port = 4000;

//middleware
app.use(express.json())

app.get('/', (req,res)=>{
    //res.status(200).json({message : "hi all welcome"})
    //res.status(200).send("message recieved")
   // res.status(200).send(`<span>hi guys</span>`)
})



app.listen(port,()=>{
    console.log(`App is listening on the port =${port}`);
})