const express = require("express");
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
	res.send("Hello world! This is Sushmitha !!");
});

app.listen(port,()=>{
	console.log(`You are in port number ${port}`);
});