// 要修改您提供的代码以实现文件上传功能，同时不使用任何额外的插件，
// 我们可以利用Node.js原生模块来处理multipart/form-data格式的数据。
// 但是，手动解析multipart/form-data是一个相对复杂的过程，因为它涉及到处理不同的数据段和边界。

// 由于您要求不使用额外的插件，我将提供一个简化的示例，
// 该示例假设您知道上传文件的字段名称，并且只处理单个文件上传。
// 这个示例并不完全健壮，因为它没有处理所有可能的边界情况和错误，但它可以作为一个起点：
var http = require('http');  
var fs = require('fs');  
var querystring = require('querystring');  
  
http.createServer(function(req, res) {  
    if (req.method.toLowerCase() === 'post') {  
        var contentType = req.headers['content-type'] || '';  
        var boundary = contentType.split('; ')[1].replace('boundary=', '');  
        var remainingBytes = req.headers['content-length'];  
        var fileData = '';  
        var fileName;  
  
        req.on('data', function(chunk) {  
            remainingBytes -= chunk.length;  
            fileData += chunk.toString();  
        });  
  
        req.on('end', function() {  
            // 查找文件名的开始和结束位置  
            var startIndex = fileData.indexOf('\r\n\r\n') + 4;  
            var endIndex = fileData.indexOf('\r\n--' + boundary);  
            var fileContent = fileData.substring(startIndex, endIndex);  
  
            // 这里我们假设文件名在Content-Disposition头中，并且格式是固定的  
            var contentDisposition = fileData.match(/name="file"; filename="(.*?)"/)[1];  
            fileName = contentDisposition;  
  
            // 将文件保存到磁盘  
            fs.writeFile('./uploadImg/' + fileName, fileContent, 'binary', function(err) {  
                if (err) {  
                    res.writeHead(500, "Internal Server Error");  
                    res.end(err);  
                } else {  
                    res.writeHead(200, "OK");  
                    res.end("File uploaded successfully!");  
                }  
            });  
        });  
    } else {  
        res.end("Action not supported");  
    }  
}).listen(9000, '127.0.0.1');

// 注意：这个代码示例非常简化，并且有很多局限性。它假设：

// 上传文件的字段名称是file。
// 文件名在Content-Disposition头中，并且格式是固定的。
// 没有处理文件名中可能存在的特殊字符或路径遍历攻击。
// 没有处理多部分表单中可能存在的多个文件或字段。
// 没有正确处理字符编码。
// 在实际应用中，强烈建议使用像multer或formidable这样的成熟库来处理文件上传，
// 它们提供了更好的安全性、错误处理和更多的功能。如果您不想添加额外的依赖，
// 至少应该对上述代码进行大量的改进和错误处理。