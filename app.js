var ex=require('express');
var parse=require('body-parser');
var host=ex();
host.use(parse.urlencoded({extended:false}));
host.get('/',(req,res)=>{
    var n=200;
    var i;
    for (i = 1; i <= n; i++) {
        if (i % 2 != 0) {
        res.json({"res":i+"odd numbers"});
    }
 }
})
host.listen(process.env.PORT || 3000,()=>{
    console.log("server started");
});