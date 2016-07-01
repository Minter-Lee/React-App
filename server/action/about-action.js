//引入Action注册器
var AcReg = require('../action-register');
var AboutSev = require('../sev/about-sev');

var AboutAction = function() {

	AcReg.addPostAc("saveHelloWorld", function(req) {
		var result = AboutSev.saveHelloWorld(req.body.msg)
		return result;
	});
}

module.exports = AboutAction;