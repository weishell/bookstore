// TypeError [ERR_INVALID_ARG_TYPE]: The "listener" argument must be of type function.
// Received type string ('------WebKitFormBoundary...)
var http=require('http')
var fs=require('fs')

// path是路径模块
var path=require('path')

http.createServer(function(req,res){
	// 如果请求的方法为post (在form中的method='post')
	res.writeHead(200, {
		"Access-Control-Allow-Origin": "*",
		});
if(req.method.toLowerCase()=='post'){
	console.log(req)


    if(!fs.existsSync('uploadImg')){
		fs.mkdirSync('./uploadImg');  
    }


    let postData = ''
    req.on('data',chunk=>{
        postData += chunk
    })
    req.on('end',()=>{
        let fileExtension = 'jpg'
        try {
            const fileName = path.basename(postData.split(';')[0].split('=')[1]);  
            fileExtension = path.extname(fileName); 
            console.log('fileName',fileName) 
        } catch (error) {
            console.log('error')
        }

        var time= +new Date()
	  // 随机数
		var random=parseInt(Math.random()*10000)
		// 图片拓展名 .JPG .png
			// 新的文件名=__dirname+存放上传图片的文件夹地址+时间戳+随机数+后缀名
		var filepath=__dirname + '/uploadImg/'+	time + random + fileExtension

        fs.watchFile(filepath,postData,err=>{
            if(err){
                res.end('失败')
                throw err 
            }
            console.log('成功')

        })
    })

	
}else{
	res.end("action")
}


}).listen(9000,'127.0.0.1')
