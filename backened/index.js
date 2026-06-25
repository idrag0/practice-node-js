

import express from "express";

const app = express();


app.get('/', (req, res)=>{

    res.send({
        message : "hello",
        success : true

    })
})


app.listen(3200, ()=>{
    console.log("running on 3200")
})