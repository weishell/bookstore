var http=require('http')
var fs=require('fs')
// formidable是nodejs中用来上传图片的模块
// path是路径模块
var path=require('path')

http.createServer(function(req,res){
	// 如果请求的方法为post (在form中的method='post')
	res.writeHead(200, {
		"Access-Control-Allow-Origin": "*",
		});
		
if(req.method.toLowerCase()=='post'){
	console.log("post")
	
	let data = '';
	req.on("data",(chunk)=>{
		data+=chunk;
		console.log(1)
	})
	req.on("end",()=>{
		console.log(2)
		fs.writeFile(path.join(__dirname,'uploadImg', 'temp1.md'), data,{flag:'a'}, (err) => {
		  if (err) {
		    // 读文件是不存在报错 
		    // 意外错误
		    // 文件权限问题
		    // 文件夹找不到(不会自动创建文件夹)
		    console.log(err);
			res.end("err")
		  } else {
		    console.log('success');
			res.end("ok")
		  }
		});
	})
	

}else{
	res.end("action")
}


}).listen(9000,'127.0.0.1')
