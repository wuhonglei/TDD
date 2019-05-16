const expect = require('chai').expect;
const Util = require('../src/util.js');

// 金丝雀测试，验证测试环境是否正常
describe('util tests', function() {
    let util;

    beforeEach(function() {
        util = new Util();
    });

    it('should pass this canary test', function() {
        expect(true).to.equal(true);
    });

    it('should pass if f2c return 0c for 32F', function() {
        var fahrenheit = 32;

        var celsius = util.f2c(fahrenheit);

        expect(celsius).to.equal(0);
    });

    it('should pass if f2c return 10c for 50F', function() {
        var fahrenheit = 50;

        var celsius = util.f2c(fahrenheit);

        expect(celsius).to.equal(10);
    });
});