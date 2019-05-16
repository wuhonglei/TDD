var expect = require('chai').expect;
var Util = require('../src/util.js');

// 金丝雀测试，验证测试环境是否正常
describe('util tests', function () {
	before(function () {
		console.info('运行一次');
	});

	it('should pass this canary test', function () {
		expect(true).to.equal(true);
	});

	it('should pass this canary test', function () {
		expect(true).to.equal(true);
	});

});



