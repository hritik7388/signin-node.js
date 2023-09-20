const http=require('http');
const data=require('./source')
//const data={email:'hritk@gmail.com',passwor:'7378737'}
 
http .createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();

}).listen(4000) 