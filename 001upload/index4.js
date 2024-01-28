// 对应index2.html

var http=require('http')
var fs=require('fs')
const querystring=require('querystring')
const url =require('url')

// path是路径模块
var path=require('path')

http.createServer(function(req,res){
	// 如果请求的方法为post (在form中的method='post')
	res.writeHead(200, {
		"Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":"*",
        'Access-Control-Allow-Headers':'content-type'
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


    let postData = ''
    req.on('data',chunk=>{
        postData += chunk
    })
    req.on('end',()=>{
    res.end('ok')
      
    })

	
}
if(req.method.toLowerCase()=='get'){
    console.log('get')
    var parsedUrl = url.parse(req.url, true); // true 表示将查询字符串解析为对象  
    var query = parsedUrl.query; // 获取查询参数对象  

    // console.log(req)
    console.log(req.url)
   
    console.log( parsedUrl,'----',query)



    // console.log(req.query.k1)
    // console.log(req.query.k2)
    // console.log(req.query.k3)
    // console.log(req.query.k4)
    // console.log(req.query.k5)
    // console.log(req.query.k6)

    console.log(req.headers)
    console.log(req.headers['content-type'])


    res.end('ok')



}


}).listen(9000,'127.0.0.1')
