const serve = require('koa-static');
const fs = require('fs');
const os = require('os');
const path = require('path');
const multer = require('koa-multer');

var upload = async (ctx, next) => {
    ctx.render('upload.html', {
        title: '上传图片'
    });
};

// koa-body 文件上传
var uploadImg = async (ctx, next) => {

    const file = ctx.request.body.files.file;

    const reader = fs.createReadStream(file.path);  // 要被拷贝的源文件

    const stream = fs.createWriteStream(path.join(__dirname+'/../static/uploadImg', file.name)); // 写入数据位置，名字

    reader.pipe(stream); // 文件被添加到 uploadImg文件夹

    console.log('上传图片到', file.name, stream.path);

    ctx.redirect('/');

};

//文件上传

//配置
// var storage = multer.diskStorage({
//     //文件保存路径
//     destination: function (req, file, cb) {
//         cb(null, 'public/uploads/')
//     },
//     //修改文件名称
//     filename: function (req, file, cb) {
//         var fileFormat = (file.originalname).split(".");
//         cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
//     }
// })
//
// //加载配置
// var uploadImages = multer({ storage: storage });

var uploadMulter = async (ctx, next) => {
    const multer_upload = multer({dest: 'uploads888/'});


    //const file = ctx.request.body.files.file123456;
    //multer_upload.single(file);
    //multer_upload.single(file.name);
    multer_upload.single('file123456');
    //console.log(file)


    // ctx.redirect('/');
};

module.exports = {
    'GET /upload': upload,
    'POST /uploadImg': uploadImg,
    'POST /uploadMulter': uploadMulter
};