var expect = require('chai').expect;
var isPalindrome = require('../src/palindrome');

describe('palindrome_test', function() {
    // 金丝雀测试
    it('should pass this canary test', function() {
        expect(true).to.equal(true);
    });

    // 正向测试
    it('should return true for argument mom', function() {
        var aWord = 'mom'; // Arrange

        var result = isPalindrome(aWord); // Act

        expect(result).to.equal(true); // Assert
    });

    it('should return false for argument dude', function() {
        var aWord = 'dude';

        var result = isPalindrome(aWord);

        expect(result).to.equal(false);
    });

    it('should return true for argument mom mom', function() {
        var aWord = 'mom mom';

        var result = isPalindrome(aWord);

        expect(result).to.equal(true);
    });

    it('should return false for argument mom dude', function() {
        var aWord = 'mom dude';

        var result = isPalindrome(aWord);

        expect(result).to.equal(false);
    });


    // 反向测试
    it('should return false when argument is an empty string', function() {
        var aWord = '';

        var result = isPalindrome(aWord);

        expect(result).to.be.equal(false);
    });

    it('should return false for argument with only two spaces', function() {
        var aWord = ' ';

        var result = isPalindrome(aWord);

        expect(result).to.be.equal(false);
    });

    // 异常测试
    it('should throw an exception if argument is missing', function() {
        var call = function() { isPalindrome() }; // 使用函数包裹，避免 isPalindrome 抛出的异常中断测试的执行

        expect(call).to.throw(Error, /Invalid argument/i);
    });
});