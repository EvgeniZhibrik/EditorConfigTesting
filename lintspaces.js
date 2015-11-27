/**
 * Created by yzhybryk on 27.11.2015.
 */
var Validator = require('lintspaces');

var validator = new Validator({
	editorconfig: '.editorconfig'
});

validator.validate('Gruntfile.js');
validator.validate('app/app.js');

var results = validator.getInvalidFiles();

console.log(results);