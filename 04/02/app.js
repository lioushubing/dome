const fs=require('fs')
const path=require('path')
const mime=require('mime')
const template=require('art-template')
const url=require('url')
const queryString=require('querystring')
const http=require('http')

const server=http.createServer()

server.on('request',(req,res)=>{
    console.log(req.url);
    console.log(req.method);
    
    if (req.url==='/' && )


})





server.listen(9999,()=>{
     console.log('http://localhost:9999','服务器已响应')


})



















// 读取data.json中的数据
function readData(callback) {
    fs.readFile(path.join(__dirname,'data','data.json'),(err,data)=>{
        if (err){
            console.log(err);
            return
        }
        data=JSON.parse(data)
        callback||callback(data)


    })


}




// 写入data.json数据方法

function writeData(data,callback) {
    fs.writeFile(path.join(__dirname,'data','data.json'),data,err=>{
        if (err){
            console.log(err);
            return
        }

        callback||callback()

    })




}