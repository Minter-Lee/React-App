/*
 * Title: Action注册器
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-04-20
 * Description: 为了统一的管理和维护action请求。在此进行了管理形式的封装。例如：POST、GET请求
 * 的分离，Upload中间件使用以及统一形式的response返回处理。同时通过express提供的方法对首页访
 * 问和监听端口进行了设定。
 */

//请求后缀
var reqSuffix = ".action";

//框架、中间件、插件等
var express = require('express');
var path = require("path");

//解析客户端请求的body中的内容
var bodyParser = require('body-parser');

//创建全局app
var app = express();
//解析请求主体使用JSON
app.use(bodyParser.json());
//POST请求参数使用
app.use(bodyParser.urlencoded({ extended: false }));

//设置静态文件集，可以访问静态文件
app.use(express.static('./app'));

//设置默认请求的主页
app.all("/", function(req, res) {
    res.sendfile(path.resolve('./app/index.html'));
});

app.listen(8080);

/*
 *	Action注册器
 *	保存添加功能等
 *	待进一步完善体系
 */
var ActionRegister = {
    /*
     *	添加新GetAction
     *	提取相关公共部分
     *	待进一步完善体系
     */
    addGetAc: function(actionName, actionFn) {
        this._addAc("get", actionName, actionFn);
    },

    /*
     *	添加新PostAction
     *	提取相关公共部分
     *	待进一步完善体系
     */
    addPostAc: function(actionName, actionFn) {
        this._addAc("post", actionName, actionFn);
    },

    /*
     *	私有添加Action监听方法
     *
     */
    _addAc: function(type, actionName, actionFn) {
        app[type]("/" + actionName + reqSuffix, function(req, res) {
            res.json(200, actionFn(req));
        });
    },
    /*
     * 	仅供上传使用
     *
     */
    addPostUpload: function(actionName, actionFn) {
        var multipart = require('connect-multiparty');
        var multipartMiddleware = multipart();
        app.post("/" + actionName + reqSuffix, multipartMiddleware, function(req, res) {
            res.json(200, actionFn(req));
        });
    }
}

module.exports = ActionRegister;
