let http=require("http");

console.log(http)



let app=http.createServer(function(req,res){

    res.writeHead(200,{
        "Content-Type":"text/html;charset=utf-8"
    })
    res.write("hello")
    res.end("<h1>这是自己宝店</h1>")
})

app.listen(3000,function(){
    console.log("服务器发射成功")
})