var express=require('express');
var app=express();
app.post('/',(req,res)=>{
res.send("hello");
});
app.post('/gallery',(req,res)=>{
    var name=req.query.getname;
    var roll =req.query.getroll;
    res.send("My Gallery Page " + name);
    res.send("Rollno " + roll);
})
app.listen(3000,()=>{
    console.log("server started");
});
