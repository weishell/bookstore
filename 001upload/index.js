var http=require('http')
var fs=require('fs')
// formidable是nodejs中用来上传图片的模块
var {formidable}=require('formidable')
// path是路径模块
var path=require('path')

http.createServer(function(req,res){
	// 如果请求的方法为post (在form中的method='post')
	res.writeHead(200, {
		"Access-Control-Allow-Origin": "*",
		});
if(req.method.toLowerCase()=='post'){
     const test1 = path.join(__dirname,'./test1')
     const test2 = path.join(__dirname,'./test2')
     const test3 = 'test1'

    if(!fs.existsSync('uploadImg')){
		fs.mkdirSync('./uploadImg');  
    }


	var form= formidable({
		uploadDir:'./uploadImg'
	});
	// 设置上传之后图片的地址 这个文件夹要提前创好,否则报错
	// form.uploadDir='./uploadImg'
	form.parse(req,function(err,fields,files){
		// 图片的所有信息都在这个 files 中,console.log可以查看
		console.log(files)


		if(err){
			throw err
		}
			// 原名字
			// __dirname 是node的一个全局变量，获得当前文件所在目录的完整目录名
		var oldpath= files.files[0].filepath
		// 时间戳
		var time= +new Date()
	  // 随机数
		var random=parseInt(Math.random()*10000)
		// 图片拓展名 .JPG .png
		var extname=path.extname(files.files[0].originalFilename)
			// 新的文件名=__dirname+存放上传图片的文件夹地址+时间戳+随机数+后缀名
		var newpath=__dirname + '/uploadImg/'+	time + random +extname
		// console.log(newpath)
		fs.rename(oldpath,newpath,function(err){
			if(err){
				console.log(err)
				throw Error("false")

			}
			console.log("success")
			let obj={img:newpath}
			res.end(JSON.stringify(obj))
		})

	})
}else{
	res.end("action")
}


}).listen(9000,'127.0.0.1')
