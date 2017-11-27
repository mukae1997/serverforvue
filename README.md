# 学习log


## 11/27
[√]  想将work对象加入IMAGE，但是现在还不知道咋做成一个整体，先分开，学习图片的上传和retrieve，再看看如何合并。。

新增模块： multer，文件上传
数据库中只保留文件名称
> Multer adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.

DEBUG LOG：
> SyntaxError: Unexpected token # in JSON at position 0
原来是因为POSTMAN里的请求header设置成json了，怪不得一直parse error = =|||😤

上传含图片的work对象流程——0：
POST上传图片，获得图片id ImgID,
- 未得到ID前不允许提交work，是否到了该使用AJAX技术的时候？
- 得到id后返回给总表单对象newWork, newWork把含有图片数据库id的整个object再POST到服务器端

## day 3
之前做到要向数据库插入记录时不停地出错，首先发现是NodeJS版本太低了就想更换，但在这里犯了一个错误：马上更换到最新版本，没有按照教程的配置环境……
至少耽误了一天，换了各种版本，不停Npm install。。。。sigh
然后还是报错，又犯了一个错误，居然没想到先看源码，而是先重新播放视频，又看了四五次，浪费了好多时间……
今天看了下源码终于发现问题了。。

**总结：**
- 保持环境一致性
- 优先看源码
