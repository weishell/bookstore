var ports = [];  
var timer = null
self.onconnect = function(e) {  
  let ff= e
  var port = e.ports[0];  

  // 将新端口添加到数组中  
  ports.push(port);  

  port.onmessage = function(e) {  
    var data = e.data;  
    console.log('Received message from port: ', data);  

    // 广播消息给所有端口（除了发送者）  
    ports.forEach(function(otherPort) {  
      if (otherPort !== port) {  
        otherPort.postMessage('sharedworkerjs接收到了信息并广播: ' + data);  
		otherPort.postMessage('sharedworkerjs接收到了信息并广播: ' + JSON.stringify(ff));
      }  
    });  
  };  

  // 当端口关闭时，从数组中移除它  
  port.onclose = function() {  
    var index = ports.indexOf(port);  
    if (index !== -1) {  
      ports.splice(index, 1);  
    }  
  };  
 clearInterval(timer)
  // 示例：向所有端口发送消息  
  timer = setInterval(function() {  
    ports.forEach(function(p) {  
      p.postMessage('Hello from the shared worker!');  
    });  
  }, 1000);  
};