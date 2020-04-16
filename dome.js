let {URL}=require("url");
let cc=require("url")

let aa=new URL("https://www.baidu.com/s?ie=UTF-8&wd=node");
let bb=aa.searchParams

console.log(bb.get("ie"));
let xx=cc.parse("https://www.baidu.com/s?ie=UTF-8&wd=node")
console.log(xx)




