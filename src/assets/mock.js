const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
var data = Mock.mock("/users", "get", {
    //list是一个数组，包含5个元素
    'list|5': [{
        'id': 1,
        'name': '测试'
    }]
})