## 单元测试
> 正确的测试重心：
即单元测试占最大的比重，UI 测试比重最小

![测试金字塔](https://ws3.sinaimg.cn/large/006tNc79gy1g33lr2u9c5j30dw0dwt8s.jpg)

### 第一部分 场景自动化测试
**金丝雀测试**

在正式编写测试前，要确保所有的工具都正确安装了。可以编写`金丝雀测试（canary test）`。金丝雀测试是最简单的测试。这是一种函数一次性的测试，可以快速验证开发环境是否正确安装。
`test/util_test.js` 代码如下：
```javascript
var expect = require('chai').expect;

// 金丝雀测试，验证测试环境是否正常
describe('util tests', function() {
    it('should pass this canary test', function() {
        expect(true).to.equal(true);
    });
});
```

`describe` 是 Mocha 用来定义测试套件的一个关键词。 describe 函数接收两个参数：测试套件的名称和包含测试套件中的所有测试的一个函数。
`it` 函数定义了一个个单独的测试用例。这个函数也有两个参数：测试的名称和测试的实际内容。测试的名称应该简介明了，能够充分表达出测试的目的以及期望得到的结果。


**验证函数的行为**

一个测试套件会存在多个测试用例，每个测试案例运行前可能需要进行一些环境准备,可以使用`before`、`after`、`beforeEach`、`afterEach`来进行一些操作，具体的差别如下代码所示：

```javascript
// 金丝雀测试，验证测试环境是否正常
describe('util tests', function () {
	before(function () {
		console.info('所有测试前运行一次');
	});

	beforeEach(function() {
		console.info('每个测试运行前运行');
	});

	afterEach(function() {
		console.info('每个测试运行结束后运行');
	});

	it('should pass this canary test', function () {
		expect(true).to.equal(true);
	});

	it('should pass this canary test', function () {
		expect(true).to.equal(true);
	});

	after(function() {
		console.info('所有测试结束后运行一次');
	});
});
```

**使用 3-As 模式**

一般来说，测试遵循 Arrage-Act-Assert（准备-行动-断言，3-As）模式。将这 3 个部分用空行分隔可以使代码更加清晰。Arrange部分设置测试时需要用到的数据。Act部分执行被测代码。Assert部分验证执行结果。
> 除了非常简单的测试，请遵循 Arrange-Act-Assert 模式，且每一部分用空行分隔。 

```javascript
it('should pass if f2c return 0c for 32F', function() {
    var fahrenheit = 32;
    
    var celsius = util.f2c(fahrenheit);
    
    expect(celsius).to.equal(0);
});
```