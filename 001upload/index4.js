// 对应index2.html
// 1. 如果不配置'Access-Control-Allow-Headers':'content-type',也会产生跨域问题,在application/json时,而application/x-www-form-urlencoded不受影响
// 2. post请求不管是form表单还是json格式,都可以去读取请求体和url中拼接的数据,两者如果同时存在也不会报错
// 3. 跨域也分不同的报错
var http=require('http')
var fs=require('fs')
const querystring=require('querystring')
const url =require('url')

// path是路径模块
var path=require('path')

http.createServer(function(req,res){
	// 如果请求的方法为post (在form中的method='post')
	res.writeHead(200, {
		// "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods":"*",
        // 'Access-Control-Allow-Headers':'content-type'
		});

    // console.log(req)
console.log(req.method)
if(req.method.toLowerCase()=='options'){
    res.end('')
}

if(req.method.toLowerCase()=='post'){
    console.log('post11111111')

    if(!fs.existsSync('uploadImg')){
		fs.mkdirSync('./uploadImg');  
    }
	console.log(req.headers['content-type'])
	
	if(req.headers['content-type'] === 'application/json'){
		var parsedUrl = url.parse(req.url, true); // true 表示将查询字符串解析为对象
		var query = parsedUrl.query; 
		console.log(query)
		let postData = ''
		req.on('data',chunk=>{
		    postData += chunk
		})
			req.on('end',()=>{
			console.log(postData)
			console.log(typeof postData)//string
			res.end('ok1')
		  
		})
	}else if(req.headers['content-type'] === 'application/x-www-form-urlencoded'){
		var parsedUrl = url.parse(req.url, true); // true 表示将查询字符串解析为对象
		var query = parsedUrl.query; 
		console.log(query)
		let postData = ''
		// 可以获取 url的参数，也可以获取请求体内的参数
		req.on('data',chunk=>{
		    postData += chunk
		})
			req.on('end',()=>{
			console.log(postData)
			console.log('222')
		  
		})
		res.end('ok2')
	}
	

    

	
}
if(req.method.toLowerCase()=='get'){
    console.log('get')
    var parsedUrl = url.parse(req.url, true); // true 表示将查询字符串解析为对象  
    var query = parsedUrl.query; // 获取查询参数对象  

    // console.log(req)
    console.log(req.url)
   
    console.log( parsedUrl,'----',query)

    console.log(req.headers)
    console.log(req.headers['content-type'])
	if(req.headers['content-type'] === 'application/json'){
		// 无法获取get 请求的body数据
		// let postData = ''
		// req.on('data',chunk=>{
		//     postData += chunk
		// })
		// req.on('end',()=>{
		// 	console.log(postData)
		// 	res.end('ok')
		// })
	}

    // res.end('ok')



}


}).listen(9000,'127.0.0.1')





