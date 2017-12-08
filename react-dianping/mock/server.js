/*
 * @Author: breathfish.xiebangjian 
 * @Date: 2017-12-01 16:34:02 
 * @Last Modified by: breathfish.xiebangjian
 * @Last Modified time: 2017-12-08 20:28:56
 */

var app = require('koa')();
var router = require('koa-router')();

router.get('/', function *(next) {
    this.body = 'hello koa !'
});

// router.get('/api', function *(next) {
//     this.body = 'test data'
// });

// 首页 —— 广告（超值特惠）
var homeAdData = require('./home/ad.js')
router.get('/api/homead', function *(next) {
    this.body = homeAdData
});

// 首页 —— 推荐列表（猜你喜欢）
var homeListData = require('./home/list.js')
router.get('/api/homelist/:city/:page', function *(next) {
    // 参数
    const params = this.params
    const paramsCity = params.city
    const paramsPage = params.page

    console.log('当前城市：' + paramsCity)
    console.log('当前页数：' + paramsPage)

    this.body = homeListData
});

// 详情页 - 商户信息
const detailInfo = require('./detail/info.js')
router.get('/api/detail/info/:id', function *(next) {
    console.log('详情页 - 商户信息')

    const params = this.params
    const id = params.id

    console.log('商户id: ' + id)

    this.body = detailInfo
})


// 开始服务并生成路由
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3000,function(){
    console.log('server mock port 30000')
});
