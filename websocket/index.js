var ws = require('nodejs-websocket');
var wsPort = 3000;
var peers = [];
var server = ws.createServer(function(conn){
    peers.push(conn);
    // 事件名称为text(读取字符串时，就叫做text)，读取客户端传来的字符串
　  var count = 1;
    conn.on('text', function(str) {
　　     // 在控制台输出前端传来的消息　　
        console.log(str);
        //向前端回复消息
        //conn.sendText('服务器端收到客户端端发来的消息了！' + count++);
        //群发
        for(let i=0,len=peers.length;i<len;i++){
            if(peers[i]!=conn){
                peers[i].sendText('转发客户端的消息：'+str);
            }
        }
    });
     conn.on('close',(code, reason)=>{
        console.log("Connection closed")
    }); 
    
    conn.on("error", function (code, reason) {
            console.log("异常关闭")
        });
});
server.listen(wsPort,'0.0.0.0',()=>{
    console.log('websocket服务启动-使用端口',wsPort);
});