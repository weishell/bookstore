// fibonacci-worker.js  

// 定义斐波那契函数  
function fibonacci(n) {  
  if (n <= 1) return n;  
  return fibonacci(n - 1) + fibonacci(n - 2);  
}  

// 监听主线程发送的消息  
self.onmessage = function(e) {  
  console.log('Worker: Message received from main script', e.data);  

  var n = e.data;  
  var result = fibonacci(n);  

  // 将结果发送回主线程  
  self.postMessage(result);  
};