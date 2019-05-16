const expect = require('chai').expect;
const Util = require('../src/util.js');

describe('util tests', function() {
    let util;

    beforeEach(function() {
        util = new Util();
    });

    // 金丝雀测试
    it('should pass this canary test', function() {
        expect(true).to.equal(true);
    });

    // 3-As 模式
    it('should pass if f2c return 0c for 32F', function() {
        var fahrenheit = 32;

        var celsius = util.f2c(fahrenheit);

        expect(celsius).to.equal(0);
    });

    // 构建复杂的测试案例
    it('should pass if f2c return 10c for 50F', function() {
        var fahrenheit = 50;

        var celsius = util.f2c(fahrenheit);

        expect(celsius).to.equal(10);
    });
});