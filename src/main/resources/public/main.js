(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./_mock/_api.ts":
/*!***********************!*\
  !*** ./_mock/_api.ts ***!
  \***********************/
/*! exports provided: APIS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return APIS; });
// region: mock data
var titles = [
    'Alipay',
    'Angular',
    'Ant Design',
    'Ant Design Pro',
    'Bootstrap',
    'React',
    'Vue',
    'Webpack',
];
var avatars = [
    'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
    'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
    'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
    'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
    'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
    'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
    'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
];
var covers = [
    'https://gw.alipayobjects.com/zos/rmsportal/HrxcVbrKnCJOZvtzSqjN.png',
    'https://gw.alipayobjects.com/zos/rmsportal/alaPpKWajEbIYEUvvVNf.png',
    'https://gw.alipayobjects.com/zos/rmsportal/RLwlKSYGSXGHuWSojyvp.png',
    'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
];
var desc = [
    '那是一种内在的东西， 他们到达不了，也无法触及的',
    '希望是一个好东西，也许是最好的，好东西是不会消亡的',
    '生命就像一盒巧克力，结果往往出人意料',
    '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
    '那时候我只会想自己想要什么，从不想自己拥有什么',
];
var user = [
    '卡色',
    'cipchk',
    '付小小',
    '曲丽丽',
    '林东东',
    '周星星',
    '吴加好',
    '朱偏右',
    '鱼酱',
    '乐哥',
    '谭小仪',
    '仲尼',
];
// endregion
function getFakeList(count) {
    if (count === void 0) { count = 20; }
    console.log(count);
    var list = [];
    for (var i = 0; i < count; i += 1) {
        list.push({
            id: "fake-list-" + i,
            owner: user[i % 10],
            title: titles[i % 8],
            avatar: avatars[i % 8],
            cover: parseInt((i / 4).toString(), 10) % 2 === 0
                ? covers[i % 4]
                : covers[3 - i % 4],
            status: ['active', 'exception', 'normal'][i % 3],
            percent: Math.ceil(Math.random() * 50) + 50,
            logo: avatars[i % 8],
            href: 'https://ant.design',
            updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
            createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
            subDescription: desc[i % 5],
            description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
            activeUser: Math.ceil(Math.random() * 100000) + 100000,
            newUser: Math.ceil(Math.random() * 1000) + 1000,
            star: Math.ceil(Math.random() * 100) + 100,
            like: Math.ceil(Math.random() * 100) + 100,
            message: Math.ceil(Math.random() * 10) + 10,
            content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
            members: [
                {
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
                    name: '曲丽丽',
                },
                {
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
                    name: '王昭君',
                },
                {
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
                    name: '董娜娜',
                },
            ],
        });
    }
    return list;
}
function getNotice() {
    return [
        {
            id: 'xxx1',
            title: titles[0],
            logo: avatars[0],
            description: '那是一种内在的东西， 他们到达不了，也无法触及的',
            updatedAt: new Date(),
            member: '科学搬砖组',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx2',
            title: titles[1],
            logo: avatars[1],
            description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
            updatedAt: new Date('2017-07-24'),
            member: '全组都是吴彦祖',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx3',
            title: titles[2],
            logo: avatars[2],
            description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
            updatedAt: new Date(),
            member: '中二少女团',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx4',
            title: titles[3],
            logo: avatars[3],
            description: '那时候我只会想自己想要什么，从不想自己拥有什么',
            updatedAt: new Date('2017-07-23'),
            member: '程序员日常',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx5',
            title: titles[4],
            logo: avatars[4],
            description: '凛冬将至',
            updatedAt: new Date('2017-07-23'),
            member: '高逼格设计天团',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx6',
            title: titles[5],
            logo: avatars[5],
            description: '生命就像一盒巧克力，结果往往出人意料',
            updatedAt: new Date('2017-07-23'),
            member: '骗你来学计算机',
            href: '',
            memberLink: '',
        },
    ];
}
function getActivities() {
    return [
        {
            id: 'trend-1',
            updatedAt: new Date(),
            user: {
                name: '林东东',
                avatar: avatars[0],
            },
            group: {
                name: '高逼格设计天团',
                link: 'http://github.com/',
            },
            project: {
                name: '六月迭代',
                link: 'http://github.com/',
            },
            template: '在 @{group} 新建项目 @{project}',
        },
        {
            id: 'trend-2',
            updatedAt: new Date(),
            user: {
                name: '付小小',
                avatar: avatars[1],
            },
            group: {
                name: '高逼格设计天团',
                link: 'http://github.com/',
            },
            project: {
                name: '六月迭代',
                link: 'http://github.com/',
            },
            template: '在 @{group} 新建项目 @{project}',
        },
        {
            id: 'trend-3',
            updatedAt: new Date(),
            user: {
                name: '曲丽丽',
                avatar: avatars[2],
            },
            group: {
                name: '中二少女团',
                link: 'http://github.com/',
            },
            project: {
                name: '六月迭代',
                link: 'http://github.com/',
            },
            template: '在 @{group} 新建项目 @{project}',
        },
        {
            id: 'trend-4',
            updatedAt: new Date(),
            user: {
                name: '周星星',
                avatar: avatars[3],
            },
            project: {
                name: '5 月日常迭代',
                link: 'http://github.com/',
            },
            template: '将 @{project} 更新至已发布状态',
        },
        {
            id: 'trend-5',
            updatedAt: new Date(),
            user: {
                name: '朱偏右',
                avatar: avatars[4],
            },
            project: {
                name: '工程效能',
                link: 'http://github.com/',
            },
            comment: {
                name: '留言',
                link: 'http://github.com/',
            },
            template: '在 @{project} 发布了 @{comment}',
        },
        {
            id: 'trend-6',
            updatedAt: new Date(),
            user: {
                name: '乐哥',
                avatar: avatars[5],
            },
            group: {
                name: '程序员日常',
                link: 'http://github.com/',
            },
            project: {
                name: '品牌迭代',
                link: 'http://github.com/',
            },
            template: '在 @{group} 新建项目 @{project}',
        },
    ];
}
var APIS = {
    '/api/list': function (req) { return getFakeList(req.queryString.count); },
    '/api/notice': function () { return getNotice(); },
    '/api/activities': function () { return getActivities(); },
};


/***/ }),

/***/ "./_mock/_chart.ts":
/*!*************************!*\
  !*** ./_mock/_chart.ts ***!
  \*************************/
/*! exports provided: CHARTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHARTS", function() { return CHARTS; });
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mockjs */ "./node_modules/mockjs/dist/mock.js");
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/util */ "./node_modules/@delon/util/fesm5/util.js");
// tslint:disable



// region: mock data
var visitData = [];
var beginDay = new Date().getTime();
var fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
for (var i = 0; i < fakeY.length; i += 1) {
    visitData.push({
        x: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'YYYY-MM-DD'),
        y: fakeY[i],
    });
}
var visitData2 = [];
var fakeY2 = [1, 6, 4, 8, 3, 7, 2];
for (var i = 0; i < fakeY2.length; i += 1) {
    visitData2.push({
        x: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'YYYY-MM-DD'),
        y: fakeY2[i],
    });
}
var salesData = [];
for (var i = 0; i < 12; i += 1) {
    salesData.push({
        x: i + 1 + "\u6708",
        y: Math.floor(Math.random() * 1000) + 200,
    });
}
var searchData = [];
for (var i = 0; i < 50; i += 1) {
    searchData.push({
        index: i + 1,
        keyword: "\u641C\u7D22\u5173\u952E\u8BCD-" + i,
        count: Math.floor(Math.random() * 1000),
        range: Math.floor(Math.random() * 100),
        status: Math.floor((Math.random() * 10) % 2),
    });
}
var salesTypeData = [
    {
        x: '家用电器',
        y: 4544,
    },
    {
        x: '食用酒水',
        y: 3321,
    },
    {
        x: '个护健康',
        y: 3113,
    },
    {
        x: '服饰箱包',
        y: 2341,
    },
    {
        x: '母婴产品',
        y: 1231,
    },
    {
        x: '其他',
        y: 1231,
    },
];
var salesTypeDataOnline = [
    {
        x: '家用电器',
        y: 244,
    },
    {
        x: '食用酒水',
        y: 321,
    },
    {
        x: '个护健康',
        y: 311,
    },
    {
        x: '服饰箱包',
        y: 41,
    },
    {
        x: '母婴产品',
        y: 121,
    },
    {
        x: '其他',
        y: 111,
    },
];
var salesTypeDataOffline = [
    {
        x: '家用电器',
        y: 99,
    },
    {
        x: '个护健康',
        y: 188,
    },
    {
        x: '服饰箱包',
        y: 344,
    },
    {
        x: '母婴产品',
        y: 255,
    },
    {
        x: '其他',
        y: 65,
    },
];
var offlineData = [];
for (var i = 0; i < 10; i += 1) {
    offlineData.push({
        name: "\u95E8\u5E97" + i,
        cvr: Math.ceil(Math.random() * 9) / 10,
    });
}
var offlineChartData = [];
for (var i = 0; i < 20; i += 1) {
    offlineChartData.push({
        x: new Date().getTime() + 1000 * 60 * 30 * i,
        y1: Math.floor(Math.random() * 100) + 10,
        y2: Math.floor(Math.random() * 100) + 10,
    });
}
var radarOriginData = [
    {
        name: '个人',
        ref: 10,
        koubei: 8,
        output: 4,
        contribute: 5,
        hot: 7,
    },
    {
        name: '团队',
        ref: 3,
        koubei: 9,
        output: 6,
        contribute: 3,
        hot: 1,
    },
    {
        name: '部门',
        ref: 4,
        koubei: 1,
        output: 6,
        contribute: 5,
        hot: 7,
    },
];
//
var radarData = [];
var radarTitleMap = {
    ref: '引用',
    koubei: '口碑',
    output: '产量',
    contribute: '贡献',
    hot: '热度',
};
radarOriginData.forEach(function (item) {
    Object.keys(item).forEach(function (key) {
        if (key !== 'name') {
            radarData.push({
                name: item.name,
                label: radarTitleMap[key],
                value: item[key],
            });
        }
    });
});
// endregion
var CHARTS = {
    '/chart': Object(_delon_util__WEBPACK_IMPORTED_MODULE_2__["deepCopy"])({
        visitData: visitData,
        visitData2: visitData2,
        salesData: salesData,
        searchData: searchData,
        offlineData: offlineData,
        offlineChartData: offlineChartData,
        salesTypeData: salesTypeData,
        salesTypeDataOnline: salesTypeDataOnline,
        salesTypeDataOffline: salesTypeDataOffline,
        radarData: radarData,
    }),
    '/chart/visit': Object(_delon_util__WEBPACK_IMPORTED_MODULE_2__["deepCopy"])(visitData),
    '/chart/tags': mockjs__WEBPACK_IMPORTED_MODULE_0__["mock"]({
        'list|100': [{ x: '@city', 'value|1-100': 150, 'category|0-2': 1 }],
    }),
};


/***/ }),

/***/ "./_mock/_geo.ts":
/*!***********************!*\
  !*** ./_mock/_geo.ts ***!
  \***********************/
/*! exports provided: GEOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GEOS", function() { return GEOS; });
var DATA = [
    {
        name: '上海',
        id: '310000',
    },
    {
        name: '市辖区',
        id: '310100',
    },
    {
        name: '北京',
        id: '110000',
    },
    {
        name: '市辖区',
        id: '110100',
    },
    {
        name: '浙江省',
        id: '330000',
    },
    {
        name: '杭州市',
        id: '330100',
    },
    {
        name: '宁波市',
        id: '330200',
    },
    {
        name: '温州市',
        id: '330300',
    },
    {
        name: '嘉兴市',
        id: '330400',
    },
    {
        name: '湖州市',
        id: '330500',
    },
    {
        name: '绍兴市',
        id: '330600',
    },
    {
        name: '金华市',
        id: '330700',
    },
    {
        name: '衢州市',
        id: '330800',
    },
    {
        name: '舟山市',
        id: '330900',
    },
    {
        name: '台州市',
        id: '331000',
    },
    {
        name: '丽水市',
        id: '331100',
    },
];
var GEOS = {
    '/geo/province': function () { return DATA.filter(function (w) { return w.id.endsWith('0000'); }); },
    '/geo/:id': function (req) {
        var pid = (req.params.id || '310000').slice(0, 2);
        return DATA.filter(function (w) { return w.id.slice(0, 2) === pid && !w.id.endsWith('0000'); });
    },
};


/***/ }),

/***/ "./_mock/_pois.ts":
/*!************************!*\
  !*** ./_mock/_pois.ts ***!
  \************************/
/*! exports provided: POIS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POIS", function() { return POIS; });
var POIS = {
    '/pois': {
        total: 2,
        list: [
            {
                id: 10000,
                user_id: 1,
                name: '测试品牌',
                branch_name: '测试分店',
                geo: 310105,
                country: '中国',
                province: '上海',
                city: '上海市',
                district: '长宁区',
                address: '中山公园',
                tel: '15900000000',
                categories: '美食,粤菜,湛江菜',
                lng: 121.41707989151003,
                lat: 31.218656214644792,
                recommend: '推荐品',
                special: '特色服务',
                introduction: '商户简介',
                open_time: '营业时间',
                avg_price: 260,
                reason: null,
                status: 1,
                status_str: '待审核',
                status_wx: 1,
                modified: 1505826527288,
                created: 1505826527288,
            },
            {
                id: 10001,
                user_id: 2,
                name: '测试品牌2',
                branch_name: '测试分店2',
                geo: 310105,
                country: '中国',
                province: '上海',
                city: '上海市',
                district: '长宁区',
                address: '中山公园',
                tel: '15900000000',
                categories: '美食,粤菜,湛江菜',
                lng: 121.41707989151003,
                lat: 31.218656214644792,
                recommend: '推荐品',
                special: '特色服务',
                introduction: '商户简介',
                open_time: '营业时间',
                avg_price: 260,
                reason: null,
                status: 1,
                status_str: '待审核',
                status_wx: 1,
                modified: 1505826527288,
                created: 1505826527288,
            },
        ],
    },
};


/***/ }),

/***/ "./_mock/_profile.ts":
/*!***************************!*\
  !*** ./_mock/_profile.ts ***!
  \***************************/
/*! exports provided: PROFILES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILES", function() { return PROFILES; });
var basicGoods = [
    {
        id: '1234561',
        name: '矿泉水 550ml',
        barcode: '12421432143214321',
        price: '2.00',
        num: '1',
        amount: '2.00',
    },
    {
        id: '1234562',
        name: '凉茶 300ml',
        barcode: '12421432143214322',
        price: '3.00',
        num: '2',
        amount: '6.00',
    },
    {
        id: '1234563',
        name: '好吃的薯片',
        barcode: '12421432143214323',
        price: '7.00',
        num: '4',
        amount: '28.00',
    },
    {
        id: '1234564',
        name: '特别好吃的蛋卷',
        barcode: '12421432143214324',
        price: '8.50',
        num: '3',
        amount: '25.50',
    },
    {
        id: '1234564',
        name: '特别好吃的蛋卷',
        barcode: '12421432143214324',
        price: '8.50',
        num: '3',
        amount: '25.50',
    },
    {
        id: '1234564',
        name: '特别好吃的蛋卷',
        barcode: '12421432143214324',
        price: '8.50',
        num: '3',
        amount: '25.50',
    },
    {
        id: '1234564',
        name: '特别好吃的蛋卷',
        barcode: '12421432143214324',
        price: '8.50',
        num: '3',
        amount: '25.50',
    },
    {
        id: '1234564',
        name: '特别好吃的蛋卷',
        barcode: '12421432143214324',
        price: '8.50',
        num: '3',
        amount: '25.50',
    },
    {
        id: '1234564',
        name: '特别好吃的蛋卷',
        barcode: '12421432143214324',
        price: '8.50',
        num: '3',
        amount: '25.50',
    },
    {
        id: '1234564',
        name: '特别好吃的蛋卷',
        barcode: '12421432143214324',
        price: '8.50',
        num: '3',
        amount: '25.50',
    },
    {
        id: '1234564',
        name: '特别好吃的蛋卷',
        barcode: '12421432143214324',
        price: '8.50',
        num: '3',
        amount: '25.50',
    },
    {
        id: '1234564',
        name: '特别好吃的蛋卷',
        barcode: '12421432143214324',
        price: '8.50',
        num: '3',
        amount: '25.50',
    },
    {
        id: '1234564',
        name: '特别好吃的蛋卷',
        barcode: '12421432143214324',
        price: '8.50',
        num: '3',
        amount: '25.50',
    },
    {
        id: '1234564',
        name: '特别好吃的蛋卷',
        barcode: '12421432143214324',
        price: '8.50',
        num: '3',
        amount: '25.50',
    },
    {
        id: '1234564',
        name: '特别好吃的蛋卷',
        barcode: '12421432143214324',
        price: '8.50',
        num: '3',
        amount: '25.50',
    },
];
var basicProgress = [
    {
        key: '1',
        time: '2017-10-01 14:10',
        rate: '联系客户',
        status: 'processing',
        operator: '取货员 ID1234',
        cost: '5mins',
    },
    {
        key: '2',
        time: '2017-10-01 14:05',
        rate: '取货员出发',
        status: 'success',
        operator: '取货员 ID1234',
        cost: '1h',
    },
    {
        key: '3',
        time: '2017-10-01 13:05',
        rate: '取货员接单',
        status: 'success',
        operator: '取货员 ID1234',
        cost: '5mins',
    },
    {
        key: '4',
        time: '2017-10-01 13:00',
        rate: '申请审批通过',
        status: 'success',
        operator: '系统',
        cost: '1h',
    },
    {
        key: '5',
        time: '2017-10-01 12:00',
        rate: '发起退货申请',
        status: 'success',
        operator: '用户',
        cost: '5mins',
    },
];
var advancedOperation1 = [
    {
        key: 'op1',
        type: '订购关系生效',
        name: '曲丽丽',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
    {
        key: 'op2',
        type: '财务复审',
        name: '付小小',
        status: 'reject',
        updatedAt: '2017-10-03  19:23:12',
        memo: '不通过原因',
    },
    {
        key: 'op3',
        type: '部门初审',
        name: '周毛毛',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
    {
        key: 'op4',
        type: '提交订单',
        name: '林东东',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '很棒',
    },
    {
        key: 'op5',
        type: '创建订单',
        name: '汗牙牙',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
];
var advancedOperation2 = [
    {
        key: 'op1',
        type: '订购关系生效',
        name: '曲丽丽',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
];
var advancedOperation3 = [
    {
        key: 'op1',
        type: '创建订单',
        name: '汗牙牙',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
];
var PROFILES = {
    'GET /profile/progress': basicProgress,
    'GET /profile/goods': basicGoods,
    'GET /profile/advanced': {
        advancedOperation1: advancedOperation1,
        advancedOperation2: advancedOperation2,
        advancedOperation3: advancedOperation3,
    },
};


/***/ }),

/***/ "./_mock/_rule.ts":
/*!************************!*\
  !*** ./_mock/_rule.ts ***!
  \************************/
/*! exports provided: RULES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RULES", function() { return RULES; });
var list = [];
for (var i = 0; i < 46; i += 1) {
    list.push({
        key: i,
        disabled: i % 6 === 0,
        href: 'https://ant.design',
        avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        ][i % 2],
        no: "TradeCode " + i,
        title: "\u4E00\u4E2A\u4EFB\u52A1\u540D\u79F0 " + i,
        owner: '曲丽丽',
        description: '这是一段描述',
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 4,
        updatedAt: new Date("2017-07-" + (i < 18 ? '0' + (Math.floor(i / 2) + 1) : (Math.floor(i / 2) + 1))),
        createdAt: new Date("2017-07-" + (i < 18 ? '0' + (Math.floor(i / 2) + 1) : (Math.floor(i / 2) + 1))),
        progress: Math.ceil(Math.random() * 100),
    });
}
function getRule(params) {
    var ret = list.slice();
    if (params.sorter) {
        var s_1 = params.sorter.split('_');
        ret = ret.sort(function (prev, next) {
            if (s_1[1] === 'descend') {
                return next[s_1[0]] - prev[s_1[0]];
            }
            return prev[s_1[0]] - next[s_1[0]];
        });
    }
    if (params.statusList && params.statusList.length > 0) {
        ret = ret.filter(function (data) { return params.statusList.indexOf(data.status) > -1; });
    }
    if (params.no) {
        ret = ret.filter(function (data) { return data.no.indexOf(params.no) > -1; });
    }
    return ret;
}
function removeRule(nos) {
    nos.split(',').forEach(function (no) {
        var idx = list.findIndex(function (w) { return w.no === no; });
        if (idx !== -1)
            list.splice(idx, 1);
    });
    return true;
}
function saveRule(description) {
    var i = Math.ceil(Math.random() * 10000);
    list.unshift({
        key: i,
        href: 'https://ant.design',
        avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        ][i % 2],
        no: "TradeCode " + i,
        title: "\u4E00\u4E2A\u4EFB\u52A1\u540D\u79F0 " + i,
        owner: '曲丽丽',
        description: description,
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 2,
        updatedAt: new Date(),
        createdAt: new Date(),
        progress: Math.ceil(Math.random() * 100),
    });
}
var RULES = {
    '/rule': function (req) { return getRule(req.queryString); },
    'DELETE /rule': function (req) { return removeRule(req.queryString.nos); },
    'POST /rule': function (req) { return saveRule(req.body.description); },
};


/***/ }),

/***/ "./_mock/_user.ts":
/*!************************!*\
  !*** ./_mock/_user.ts ***!
  \************************/
/*! exports provided: USERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return USERS; });
var list = [];
var total = 50;
for (var i = 0; i < total; i += 1) {
    list.push({
        id: i + 1,
        disabled: i % 6 === 0,
        href: 'https://ant.design',
        avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        ][i % 2],
        no: "TradeCode " + i,
        title: "\u4E00\u4E2A\u4EFB\u52A1\u540D\u79F0 " + i,
        owner: '曲丽丽',
        description: '这是一段描述',
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 4,
        updatedAt: new Date("2017-07-" + (Math.floor(i / 2) + 1)),
        createdAt: new Date("2017-07-" + (Math.floor(i / 2) + 1)),
        progress: Math.ceil(Math.random() * 100),
    });
}
function genData(params) {
    var ret = list.slice();
    var pi = +params.pi, ps = +params.ps, start = (pi - 1) * ps;
    if (params.no) {
        ret = ret.filter(function (data) { return data.no.indexOf(params.no) > -1; });
    }
    return { total: ret.length, list: ret.slice(start, ps * pi) };
}
function saveData(id, value) {
    var item = list.find(function (w) { return w.id === id; });
    if (!item)
        return { msg: '无效用户信息' };
    Object.assign(item, value);
    return { msg: 'ok' };
}
var USERS = {
    '/user': function (req) { return genData(req.queryString); },
    '/user/:id': function (req) { return list.find(function (w) { return w.id === +req.params.id; }); },
    'POST /user/:id': function (req) { return saveData(+req.params.id, req.body); },
    '/user/current': {
        name: 'Cipchk',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
        userid: '00000001',
        email: 'cipchk@qq.com',
        signature: '海纳百川，有容乃大',
        title: '交互专家',
        group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
        tags: [
            {
                key: '0',
                label: '很有想法的',
            },
            {
                key: '1',
                label: '专注撩妹',
            },
            {
                key: '2',
                label: '帅~',
            },
            {
                key: '3',
                label: '通吃',
            },
            {
                key: '4',
                label: '专职后端',
            },
            {
                key: '5',
                label: '海纳百川',
            },
        ],
        notifyCount: 12,
        country: 'China',
        geographic: {
            province: {
                label: '上海',
                key: '330000',
            },
            city: {
                label: '市辖区',
                key: '330100',
            },
        },
        address: 'XX区XXX路 XX 号',
        phone: '你猜-你猜你猜猜猜',
    },
    'POST /user/avatar': 'ok',
    'POST /login/account': function (req) {
        var data = req.body;
        if (!(data.userName === 'admin' || data.userName === 'user') ||
            data.password !== 'admin') {
            return { msg: "Invalid username or password\uFF08admin/ng-alain.com\uFF09" };
        }
        return {
            msg: 'ok',
            user: {
                token: '123456789',
                name: data.userName,
                email: data.userName + "@qq.com",
                id: 10000,
                time: +new Date(),
            },
        };
    },
    'POST /register': {
        msg: 'ok',
    },
};


/***/ }),

/***/ "./_mock/index.ts":
/*!************************!*\
  !*** ./_mock/index.ts ***!
  \************************/
/*! exports provided: PROFILES, RULES, APIS, CHARTS, POIS, USERS, GEOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_profile */ "./_mock/_profile.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PROFILES", function() { return _profile__WEBPACK_IMPORTED_MODULE_0__["PROFILES"]; });

/* harmony import */ var _rule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_rule */ "./_mock/_rule.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RULES", function() { return _rule__WEBPACK_IMPORTED_MODULE_1__["RULES"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_api */ "./_mock/_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return _api__WEBPACK_IMPORTED_MODULE_2__["APIS"]; });

/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_chart */ "./_mock/_chart.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHARTS", function() { return _chart__WEBPACK_IMPORTED_MODULE_3__["CHARTS"]; });

/* harmony import */ var _pois__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_pois */ "./_mock/_pois.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "POIS", function() { return _pois__WEBPACK_IMPORTED_MODULE_4__["POIS"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_user */ "./_mock/_user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return _user__WEBPACK_IMPORTED_MODULE_5__["USERS"]; });

/* harmony import */ var _geo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_geo */ "./_mock/_geo.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GEOS", function() { return _geo__WEBPACK_IMPORTED_MODULE_6__["GEOS"]; });










/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./data-v/data-v.module": [
		"./src/app/routes/data-v/data-v.module.ts",
		"data-v-data-v-module"
	],
	"./delon/delon.module": [
		"./src/app/routes/delon/delon.module.ts",
		"delon-delon-module"
	],
	"./extras/extras.module": [
		"./src/app/routes/extras/extras.module.ts",
		"extras-extras-module"
	],
	"./pro/pro.module": [
		"./src/app/routes/pro/pro.module.ts",
		"pro-pro-module"
	],
	"./style/style.module": [
		"./src/app/routes/style/style.module.ts",
		"style-style-module"
	],
	"./widgets/widgets.module": [
		"./src/app/routes/widgets/widgets.module.ts",
		"widgets-widgets-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(el, renderer, router, titleSrv, modalSrv) {
        this.router = router;
        this.titleSrv = titleSrv;
        this.modalSrv = modalSrv;
        renderer.setAttribute(el.nativeElement, 'ng-alain-version', _delon_theme__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full);
        renderer.setAttribute(el.nativeElement, 'ng-zorro-version', ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["VERSION"].full);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (evt) { return evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
            .subscribe(function () {
            _this.titleSrv.setTitle();
            _this.modalSrv.closeAll();
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "<router-outlet></router-outlet>",
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_3__["TitleService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: I18nHttpLoaderFactory, StartupServiceFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nHttpLoaderFactory", function() { return I18nHttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupServiceFactory", function() { return StartupServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _core_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/i18n/i18n.service */ "./src/app/core/i18n/i18n.service.ts");
/* harmony import */ var ngx_ueditor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-ueditor */ "./node_modules/ngx-ueditor/fesm5/ngx-ueditor.js");
/* harmony import */ var ngx_tinymce__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-tinymce */ "./node_modules/ngx-tinymce/fesm5/ngx-tinymce.js");
/* harmony import */ var _shared_json_schema_json_schema_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/json-schema/json-schema.module */ "./src/app/shared/json-schema/json-schema.module.ts");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/fesm5/auth.js");
/* harmony import */ var _core_net_default_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @core/net/default.interceptor */ "./src/app/core/net/default.interceptor.ts");
/* harmony import */ var _core_startup_startup_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @core/startup/startup.service */ "./src/app/core/startup/startup.service.ts");
/* harmony import */ var _delon_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./delon.module */ "./src/app/delon.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _routes_routes_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./routes/routes.module */ "./src/app/routes/routes.module.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// #region default language
// 参考：https://ng-alain.com/docs/i18n



var LANG = {
    abbr: 'zh',
    ng: _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4___default.a,
    zorro: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["zh_CN"],
    delon: _delon_theme__WEBPACK_IMPORTED_MODULE_6__["zh_CN"],
};
// register angular

Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["registerLocaleData"])(LANG.ng, LANG.abbr);
var LANG_PROVIDES = [
    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], useValue: LANG.abbr },
    { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NZ_I18N"], useValue: LANG.zorro },
    { provide: _delon_theme__WEBPACK_IMPORTED_MODULE_6__["DELON_LOCALE"], useValue: LANG.delon },
];
// #endregion
// #region i18n services




// 加载i18n语言文件
function I18nHttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, "assets/tmp/i18n/", '.json');
}
var I18NSERVICE_MODULES = [
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
        loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
            useFactory: I18nHttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]],
        },
    }),
];
var I18NSERVICE_PROVIDES = [
    { provide: _delon_theme__WEBPACK_IMPORTED_MODULE_6__["ALAIN_I18N_TOKEN"], useClass: _core_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_10__["I18NService"], multi: false },
];
// #endregion
// #region global third module


var GLOBAL_THIRD_MODULES = [
    ngx_ueditor__WEBPACK_IMPORTED_MODULE_11__["UEditorModule"].forRoot({
        // **注：** 建议使用本地路径；以下为了减少 ng-alain 脚手架的包体大小引用了CDN，可能会有部分功能受影响
        js: [
            "//apps.bdimg.com/libs/ueditor/1.4.3.1/ueditor.config.js",
            "//apps.bdimg.com/libs/ueditor/1.4.3.1/ueditor.all.min.js",
        ],
        options: {
            UEDITOR_HOME_URL: "//apps.bdimg.com/libs/ueditor/1.4.3.1/",
        },
    }),
    ngx_tinymce__WEBPACK_IMPORTED_MODULE_12__["NgxTinymceModule"].forRoot({
        baseURL: '//cdn.bootcss.com/tinymce/4.7.4/',
    }),
];
// #endregion
// #region JSON Schema form (using @delon/form)

var FORM_MODULES = [_shared_json_schema_json_schema_module__WEBPACK_IMPORTED_MODULE_13__["JsonSchemaModule"]];
// #endregion
// #region Http Interceptors



var INTERCEPTOR_PROVIDES = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _delon_auth__WEBPACK_IMPORTED_MODULE_14__["SimpleInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _core_net_default_interceptor__WEBPACK_IMPORTED_MODULE_15__["DefaultInterceptor"], multi: true },
];
// #endregion
// #region Startup Service

function StartupServiceFactory(startupService) {
    return function () { return startupService.load(); };
}
var APPINIT_PROVIDES = [
    _core_startup_startup_service__WEBPACK_IMPORTED_MODULE_16__["StartupService"],
    {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
        useFactory: StartupServiceFactory,
        deps: [_core_startup_startup_service__WEBPACK_IMPORTED_MODULE_16__["StartupService"]],
        multi: true,
    },
];
// #endregion






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _delon_module__WEBPACK_IMPORTED_MODULE_17__["DelonModule"].forRoot(),
                _core_core_module__WEBPACK_IMPORTED_MODULE_18__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_22__["LayoutModule"],
                _routes_routes_module__WEBPACK_IMPORTED_MODULE_21__["RoutesModule"]
            ].concat(I18NSERVICE_MODULES, GLOBAL_THIRD_MODULES, FORM_MODULES),
            providers: LANG_PROVIDES.concat(INTERCEPTOR_PROVIDES, I18NSERVICE_PROVIDES, APPINIT_PROVIDES),
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-import-guard */ "./src/app/core/module-import-guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_1__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [],
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/i18n/i18n.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/i18n/i18n.service.ts ***!
  \*******************************************/
/*! exports provided: I18NService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18NService", function() { return I18NService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_locales_zh_Hant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/zh-Hant */ "./node_modules/@angular/common/locales/zh-Hant.js");
/* harmony import */ var _angular_common_locales_zh_Hant__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh_Hant__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var date_fns_locale_en__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns/locale/en */ "./node_modules/date-fns/locale/en/index.js");
/* harmony import */ var date_fns_locale_en__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_en__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var date_fns_locale_zh_cn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns/locale/zh_cn */ "./node_modules/date-fns/locale/zh_cn/index.js");
/* harmony import */ var date_fns_locale_zh_cn__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_zh_cn__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var date_fns_locale_zh_tw__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns/locale/zh_tw */ "./node_modules/date-fns/locale/zh_tw/index.js");
/* harmony import */ var date_fns_locale_zh_tw__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_zh_tw__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// 请参考：https://ng-alain.com/docs/i18n













var DEFAULT = 'zh-CN';
var LANGS = {
    'zh-CN': {
        text: '简体中文',
        ng: _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4___default.a,
        zorro: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["zh_CN"],
        dateFns: date_fns_locale_zh_cn__WEBPACK_IMPORTED_MODULE_9__,
        delon: _delon_theme__WEBPACK_IMPORTED_MODULE_12__["zh_CN"],
    },
    'zh-TW': {
        text: '繁体中文',
        ng: _angular_common_locales_zh_Hant__WEBPACK_IMPORTED_MODULE_6___default.a,
        zorro: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["zh_TW"],
        dateFns: date_fns_locale_zh_tw__WEBPACK_IMPORTED_MODULE_10__,
        delon: _delon_theme__WEBPACK_IMPORTED_MODULE_12__["zh_TW"],
    },
    'en-US': {
        text: 'English',
        ng: _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_5___default.a,
        zorro: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["en_US"],
        dateFns: date_fns_locale_en__WEBPACK_IMPORTED_MODULE_8__,
        delon: _delon_theme__WEBPACK_IMPORTED_MODULE_12__["en_US"],
    },
};
var I18NService = /** @class */ (function () {
    function I18NService(settings, nzI18nService, delonLocaleService, translate) {
        this.nzI18nService = nzI18nService;
        this.delonLocaleService = delonLocaleService;
        this.translate = translate;
        this._default = DEFAULT;
        this.change$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._langs = Object.keys(LANGS).map(function (code) {
            return { code: code, text: LANGS[code].text };
        });
        var defaultLan = settings.layout.lang || translate.getBrowserLang();
        // `@ngx-translate/core` 预先知道支持哪些语言
        var lans = this._langs.map(function (item) { return item.code; });
        translate.addLangs(lans);
        this._default = lans.includes(defaultLan) ? defaultLan : lans[0];
        this.updateLangData(this._default);
    }
    I18NService.prototype.updateLangData = function (lang) {
        var item = LANGS[lang];
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(item.ng);
        this.nzI18nService.setLocale(item.zorro);
        window.__locale__ = item.dateFns;
        this.delonLocaleService.setLocale(item.delon);
    };
    Object.defineProperty(I18NService.prototype, "change", {
        get: function () {
            return this.change$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (w) { return w != null; }));
        },
        enumerable: true,
        configurable: true
    });
    I18NService.prototype.use = function (lang) {
        var _this = this;
        lang = lang || this.translate.getDefaultLang();
        if (this.currentLang === lang)
            return;
        this.updateLangData(lang);
        this.translate.use(lang).subscribe(function () { return _this.change$.next(lang); });
    };
    /** 获取语言列表 */
    I18NService.prototype.getLangs = function () {
        return this._langs;
    };
    /** 翻译 */
    I18NService.prototype.fanyi = function (key, interpolateParams) {
        return this.translate.instant(key, interpolateParams);
    };
    Object.defineProperty(I18NService.prototype, "defaultLang", {
        /** 默认语言 */
        get: function () {
            return this._default;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(I18NService.prototype, "currentLang", {
        /** 当前语言 */
        get: function () {
            return (this.translate.currentLang ||
                this.translate.getDefaultLang() ||
                this._default);
        },
        enumerable: true,
        configurable: true
    });
    I18NService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_12__["SettingsService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzI18nService"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_12__["DelonLocaleService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]])
    ], I18NService);
    return I18NService;
}());



/***/ }),

/***/ "./src/app/core/module-import-guard.ts":
/*!*********************************************!*\
  !*** ./src/app/core/module-import-guard.ts ***!
  \*********************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
// https://angular.io/guide/styleguide#style-04-12
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "./src/app/core/net/default.interceptor.ts":
/*!*************************************************!*\
  !*** ./src/app/core/net/default.interceptor.ts ***!
  \*************************************************/
/*! exports provided: DefaultInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultInterceptor", function() { return DefaultInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * 默认HTTP拦截器，其注册细节见 `app.module.ts`
 */
var DefaultInterceptor = /** @class */ (function () {
    function DefaultInterceptor(injector) {
        this.injector = injector;
    }
    Object.defineProperty(DefaultInterceptor.prototype, "msg", {
        get: function () {
            return this.injector.get(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"]);
        },
        enumerable: true,
        configurable: true
    });
    DefaultInterceptor.prototype.goTo = function (url) {
        var _this = this;
        setTimeout(function () { return _this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]).navigateByUrl(url); });
    };
    DefaultInterceptor.prototype.handleData = function (event) {
        // 可能会因为 `throw` 导出无法执行 `_HttpClient` 的 `end()` 操作
        this.injector.get(_delon_theme__WEBPACK_IMPORTED_MODULE_6__["_HttpClient"]).end();
        // 业务处理：一些通用操作
        switch (event.status) {
            case 200:
                // 业务层级错误处理，以下是假定restful有一套统一输出格式（指不管成功与否都有相应的数据格式）情况下进行处理
                // 例如响应内容：
                //  错误内容：{ status: 1, msg: '非法参数' }
                //  正确内容：{ status: 0, response: {  } }
                // 则以下代码片断可直接适用
                // if (event instanceof HttpResponse) {
                //     const body: any = event.body;
                //     if (body && body.status !== 0) {
                //         this.msg.error(body.msg);
                //         // 继续抛出错误中断后续所有 Pipe、subscribe 操作，因此：
                //         // this.http.get('/').subscribe() 并不会触发
                //         return throwError({});
                //     } else {
                //         // 重新修改 `body` 内容为 `response` 内容，对于绝大多数场景已经无须再关心业务状态码
                //         return of(new HttpResponse(Object.assign(event, { body: body.response })));
                //         // 或者依然保持完整的格式
                //         return of(event);
                //     }
                // }
                break;
            case 401: // 未登录状态码
                this.goTo('/passport/login');
                break;
            case 403:
            case 404:
            case 500:
                this.goTo("/" + event.status);
                break;
            default:
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                    console.warn('未可知错误，大部分是由于后端不支持CORS或无效配置引起', event);
                    this.msg.error(event.message);
                }
                break;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(event);
    };
    DefaultInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        // 统一加上服务端前缀
        var url = req.url;
        if (!url.startsWith('https://') && !url.startsWith('http://')) {
            url = _env_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].SERVER_URL + url;
        }
        var newReq = req.clone({
            url: url,
        });
        return next.handle(newReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (event) {
            // 允许统一对请求错误处理，这是因为一个请求若是业务上错误的情况下其HTTP请求的状态是200的情况下需要
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"] && event.status === 200)
                return _this.handleData(event);
            // 若一切都正常，则后续操作
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(event);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return _this.handleData(err); }));
    };
    DefaultInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], DefaultInterceptor);
    return DefaultInterceptor;
}());



/***/ }),

/***/ "./src/app/core/startup/startup.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/startup/startup.service.ts ***!
  \*************************************************/
/*! exports provided: StartupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupService", function() { return StartupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/acl */ "./node_modules/@delon/acl/fesm5/acl.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _i18n_i18n_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../i18n/i18n.service */ "./src/app/core/i18n/i18n.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _style_icons_auto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../style-icons-auto */ "./src/style-icons-auto.ts");
/* harmony import */ var _style_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../style-icons */ "./src/style-icons.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};











/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
var StartupService = /** @class */ (function () {
    function StartupService(iconSrv, menuService, translate, i18n, settingService, aclService, titleService, httpClient) {
        this.menuService = menuService;
        this.translate = translate;
        this.i18n = i18n;
        this.settingService = settingService;
        this.aclService = aclService;
        this.titleService = titleService;
        this.httpClient = httpClient;
        iconSrv.addIcon.apply(iconSrv, _style_icons_auto__WEBPACK_IMPORTED_MODULE_9__["ICONS_AUTO"].concat(_style_icons__WEBPACK_IMPORTED_MODULE_10__["ICONS"]));
    }
    StartupService.prototype.load = function () {
        var _this = this;
        // only works with promises
        // https://github.com/angular/angular/issues/15088
        return new Promise(function (resolve, reject) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["zip"])(_this.httpClient.get("assets/tmp/i18n/" + _this.i18n.defaultLang + ".json"), _this.httpClient.get('assets/tmp/app-data.json'))
                .pipe(
            // 接收其他拦截器后产生的异常消息
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (_a) {
                var langData = _a[0], appData = _a[1];
                resolve(null);
                return [langData, appData];
            }))
                .subscribe(function (_a) {
                var langData = _a[0], appData = _a[1];
                // setting language data
                _this.translate.setTranslation(_this.i18n.defaultLang, langData);
                _this.translate.setDefaultLang(_this.i18n.defaultLang);
                // application data
                var res = appData;
                // 应用信息：包括站点名、描述、年份
                _this.settingService.setApp(res.app);
                // 用户信息：包括姓名、头像、邮箱地址
                _this.settingService.setUser(res.user);
                // ACL：设置权限为全量
                _this.aclService.setFull(true);
                // 初始化菜单
                _this.menuService.add(res.menu);
                // 设置页面标题的后缀
                _this.titleService.suffix = res.app.name;
            }, function () { }, function () {
                resolve(null);
            });
        });
    };
    StartupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_delon_theme__WEBPACK_IMPORTED_MODULE_4__["ALAIN_I18N_TOKEN"])),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzIconService"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_4__["MenuService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _i18n_i18n_service__WEBPACK_IMPORTED_MODULE_7__["I18NService"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_4__["SettingsService"],
            _delon_acl__WEBPACK_IMPORTED_MODULE_5__["ACLService"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_4__["TitleService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StartupService);
    return StartupService;
}());



/***/ }),

/***/ "./src/app/delon.module.ts":
/*!*********************************!*\
  !*** ./src/app/delon.module.ts ***!
  \*********************************/
/*! exports provided: fnPageHeaderConfig, fnDelonAuthConfig, fnSTConfig, DelonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnPageHeaderConfig", function() { return fnPageHeaderConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnDelonAuthConfig", function() { return fnDelonAuthConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnSTConfig", function() { return fnSTConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelonModule", function() { return DelonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_module_import_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/module-import-guard */ "./src/app/core/module-import-guard.ts");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _delon_abc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/abc */ "./node_modules/@delon/abc/fesm5/abc.js");
/* harmony import */ var _delon_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/chart */ "./node_modules/@delon/chart/fesm5/chart.js");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/fesm5/auth.js");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/acl */ "./node_modules/@delon/acl/fesm5/acl.js");
/* harmony import */ var _delon_cache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/cache */ "./node_modules/@delon/cache/fesm5/cache.js");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @delon/util */ "./node_modules/@delon/util/fesm5/util.js");
/* harmony import */ var _delon_mock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @delon/mock */ "./node_modules/@delon/mock/fesm5/mock.js");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../_mock */ "./_mock/index.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * 进一步对基础模块的导入提炼
 * 有关模块注册指导原则请参考：https://github.com/ng-alain/ng-alain/issues/180
 */









// #region mock



var MOCK_MODULES = !_env_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production
    ? [_delon_mock__WEBPACK_IMPORTED_MODULE_9__["DelonMockModule"].forRoot({ data: _mock__WEBPACK_IMPORTED_MODULE_10__ })]
    : [];
var REUSETAB_PROVIDES = [
// {
//   provide: RouteReuseStrategy,
//   useClass: ReuseTabStrategy,
//   deps: [ReuseTabService],
// },
];
// #endregion
// #region global config functions

function fnPageHeaderConfig() {
    return Object.assign(new _delon_abc__WEBPACK_IMPORTED_MODULE_3__["PageHeaderConfig"](), { homeI18n: 'home' });
}

function fnDelonAuthConfig() {
    return Object.assign(new _delon_auth__WEBPACK_IMPORTED_MODULE_5__["DelonAuthConfig"](), {
        login_url: '/passport/login',
    });
}
function fnSTConfig() {
    return Object.assign(new _delon_abc__WEBPACK_IMPORTED_MODULE_3__["STConfig"](), {
        modal: { size: 'lg' },
    });
}
var GLOBAL_CONFIG_PROVIDES = [
    // TIPS：@delon/abc 有大量的全局配置信息，例如设置所有 `st` 的页码默认为 `20` 行
    { provide: _delon_abc__WEBPACK_IMPORTED_MODULE_3__["STConfig"], useFactory: fnSTConfig },
    { provide: _delon_abc__WEBPACK_IMPORTED_MODULE_3__["PageHeaderConfig"], useFactory: fnPageHeaderConfig },
    { provide: _delon_auth__WEBPACK_IMPORTED_MODULE_5__["DelonAuthConfig"], useFactory: fnDelonAuthConfig },
];
// #endregion
var DelonModule = /** @class */ (function () {
    function DelonModule(parentModule) {
        Object(_core_module_import_guard__WEBPACK_IMPORTED_MODULE_1__["throwIfAlreadyLoaded"])(parentModule, 'DelonModule');
    }
    DelonModule_1 = DelonModule;
    DelonModule.forRoot = function () {
        return {
            ngModule: DelonModule_1,
            providers: REUSETAB_PROVIDES.concat(GLOBAL_CONFIG_PROVIDES),
        };
    };
    var DelonModule_1;
    DelonModule = DelonModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _delon_theme__WEBPACK_IMPORTED_MODULE_2__["AlainThemeModule"].forRoot(),
                _delon_abc__WEBPACK_IMPORTED_MODULE_3__["DelonABCModule"].forRoot(),
                _delon_chart__WEBPACK_IMPORTED_MODULE_4__["DelonChartModule"].forRoot(),
                _delon_auth__WEBPACK_IMPORTED_MODULE_5__["DelonAuthModule"].forRoot(),
                _delon_acl__WEBPACK_IMPORTED_MODULE_6__["DelonACLModule"].forRoot(),
                _delon_cache__WEBPACK_IMPORTED_MODULE_7__["DelonCacheModule"].forRoot(),
                _delon_util__WEBPACK_IMPORTED_MODULE_8__["DelonUtilModule"].forRoot()
            ].concat(MOCK_MODULES),
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [DelonModule])
    ], DelonModule);
    return DelonModule;
}());



/***/ }),

/***/ "./src/app/layout/default/default.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/default/default.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__progress-bar\" *ngIf=\"isFetching\"></div>\r\n<layout-header class=\"alain-default__header\"></layout-header>\r\n<layout-sidebar class=\"alain-default__aside\"></layout-sidebar>\r\n<section class=\"alain-default__content\">\r\n  <router-outlet></router-outlet>\r\n</section>\r\n<ng-template #settingHost></ng-template>\r\n"

/***/ }),

/***/ "./src/app/layout/default/default.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/default/default.component.ts ***!
  \*****************************************************/
/*! exports provided: LayoutDefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutDefaultComponent", function() { return LayoutDefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/util */ "./node_modules/@delon/util/fesm5/util.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/fesm5/ant-design-icons-angular-icons.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _setting_drawer_setting_drawer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./setting-drawer/setting-drawer.component */ "./src/app/layout/default/setting-drawer/setting-drawer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






// #region icons

var ICONS = [
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["MenuFoldOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["MenuUnfoldOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["SearchOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["SettingOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["FullscreenOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["FullscreenExitOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["BellOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["LockOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["PlusOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["UserOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["LogoutOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["EllipsisOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["GlobalOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["ArrowDownOutline"],
    // Optional
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["GithubOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["AppstoreOutline"],
];
// #endregion


var LayoutDefaultComponent = /** @class */ (function () {
    function LayoutDefaultComponent(iconSrv, router, scroll, _message, resolver, menuSrv, settings, el, renderer, doc) {
        var _this = this;
        this.resolver = resolver;
        this.menuSrv = menuSrv;
        this.settings = settings;
        this.el = el;
        this.renderer = renderer;
        this.doc = doc;
        this.isFetching = false;
        iconSrv.addIcon.apply(iconSrv, ICONS);
        // scroll to top in change page
        router.events.subscribe(function (evt) {
            if (!_this.isFetching && evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteConfigLoadStart"]) {
                _this.isFetching = true;
            }
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"] || evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]) {
                _this.isFetching = false;
                if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                    _message.error("\u65E0\u6CD5\u52A0\u8F7D" + evt.url + "\u8DEF\u7531", { nzDuration: 1000 * 3 });
                }
                return;
            }
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            setTimeout(function () {
                scroll.scrollToTop();
                _this.isFetching = false;
            }, 100);
        });
    }
    LayoutDefaultComponent.prototype.setClass = function () {
        var _a;
        var _b = this, el = _b.el, renderer = _b.renderer, settings = _b.settings;
        var layout = settings.layout;
        Object(_delon_util__WEBPACK_IMPORTED_MODULE_4__["updateHostClass"])(el.nativeElement, renderer, (_a = {},
            _a['alain-default'] = true,
            _a["alain-default__fixed"] = layout.fixed,
            _a["alain-default__boxed"] = layout.boxed,
            _a["alain-default__collapsed"] = layout.collapsed,
            _a), true);
        this.doc.body.classList[layout.colorWeak ? 'add' : 'remove']('color-weak');
    };
    LayoutDefaultComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Setting componet for only developer
        if (!_env_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production) {
            setTimeout(function () {
                var settingFactory = _this.resolver.resolveComponentFactory(_setting_drawer_setting_drawer_component__WEBPACK_IMPORTED_MODULE_8__["SettingDrawerComponent"]);
                _this.settingHost.createComponent(settingFactory);
            }, 22);
        }
    };
    LayoutDefaultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notify$ = this.settings.notify.subscribe(function () { return _this.setClass(); });
        this.setClass();
    };
    LayoutDefaultComponent.prototype.ngOnDestroy = function () {
        this.notify$.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('settingHost', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], LayoutDefaultComponent.prototype, "settingHost", void 0);
    LayoutDefaultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'layout-default',
            template: __webpack_require__(/*! ./default.component.html */ "./src/app/layout/default/default.component.html"),
            preserveWhitespaces: false,
            host: {
                '[class.alain-default]': 'true',
            },
        }),
        __param(9, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzIconService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_5__["ScrollService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_5__["MenuService"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_5__["SettingsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], Object])
    ], LayoutDefaultComponent);
    return LayoutDefaultComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/components/fullscreen.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/default/header/components/fullscreen.component.ts ***!
  \**************************************************************************/
/*! exports provided: HeaderFullScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFullScreenComponent", function() { return HeaderFullScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderFullScreenComponent = /** @class */ (function () {
    function HeaderFullScreenComponent() {
        this.status = false;
    }
    HeaderFullScreenComponent.prototype._resize = function () {
        this.status = screenfull__WEBPACK_IMPORTED_MODULE_1__["isFullscreen"];
    };
    HeaderFullScreenComponent.prototype._click = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_1__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_1__["toggle"]();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderFullScreenComponent.prototype, "_resize", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderFullScreenComponent.prototype, "_click", null);
    HeaderFullScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header-fullscreen',
            template: "\n    <i nz-icon [type]=\"status ? 'fullscreen' : 'fullscreen-exit'\"></i>\n    {{(status ? 'menu.fullscreen.exit' : 'menu.fullscreen') | translate }}\n  ",
            host: {
                '[class.d-block]': 'true',
            },
        })
    ], HeaderFullScreenComponent);
    return HeaderFullScreenComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/components/i18n.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/default/header/components/i18n.component.ts ***!
  \********************************************************************/
/*! exports provided: HeaderI18nComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderI18nComponent", function() { return HeaderI18nComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _core_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/i18n/i18n.service */ "./src/app/core/i18n/i18n.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var HeaderI18nComponent = /** @class */ (function () {
    function HeaderI18nComponent(settings, i18n, doc) {
        this.settings = settings;
        this.i18n = i18n;
        this.doc = doc;
        this.showLang = true;
        this.langs = this.i18n.getLangs();
    }
    HeaderI18nComponent.prototype.change = function (lang) {
        var _this = this;
        var spinEl = this.doc.createElement('div');
        spinEl.setAttribute('class', "page-loading ant-spin ant-spin-lg ant-spin-spinning");
        spinEl.innerHTML = "<span class=\"ant-spin-dot ant-spin-dot-spin\"><i></i><i></i><i></i><i></i></span>";
        this.doc.body.appendChild(spinEl);
        this.i18n.use(lang);
        this.settings.setLayout('lang', lang);
        setTimeout(function () { return _this.doc.location.reload(); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderI18nComponent.prototype, "showLang", void 0);
    HeaderI18nComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header-i18n',
            template: "\n  <nz-dropdown nzPlacement=\"bottomRight\">\n    <div *ngIf=\"showLang\" nz-dropdown>\n      <i nz-icon type=\"global\"></i>\n      {{ 'menu.lang' | translate}}\n      <i nz-icon type=\"down\"></i>\n    </div>\n    <i *ngIf=\"!showLang\" nz-dropdown nz-icon type=\"global\"></i>\n    <ul nz-menu>\n      <li nz-menu-item *ngFor=\"let item of langs\"\n        [nzSelected]=\"item.code === settings.layout.lang\"\n        (click)=\"change(item.code)\">{{item.text}}</li>\n    </ul>\n  </nz-dropdown>\n  ",
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_delon_theme__WEBPACK_IMPORTED_MODULE_2__["ALAIN_I18N_TOKEN"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
            _core_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_3__["I18NService"], Object])
    ], HeaderI18nComponent);
    return HeaderI18nComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/components/icon.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/default/header/components/icon.component.ts ***!
  \********************************************************************/
/*! exports provided: HeaderIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderIconComponent", function() { return HeaderIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderIconComponent = /** @class */ (function () {
    function HeaderIconComponent() {
        this.loading = true;
    }
    HeaderIconComponent.prototype.change = function () {
        var _this = this;
        setTimeout(function () { return (_this.loading = false); }, 500);
    };
    HeaderIconComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header-icon',
            template: "\n  <nz-dropdown nzTrigger=\"click\" nzPlacement=\"bottomRight\" (nzVisibleChange)=\"change()\">\n    <div class=\"alain-default__nav-item\" nz-dropdown>\n      <i class=\"anticon anticon-appstore-o\"></i>\n    </div>\n    <div nz-menu class=\"wd-xl animated jello\">\n      <nz-spin [nzSpinning]=\"loading\" [nzTip]=\"'\u6B63\u5728\u8BFB\u53D6\u6570\u636E...'\">\n        <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"app-icons\">\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-calendar bg-error text-white\"></i>\n            <small>Calendar</small>\n          </div>\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-file bg-geekblue text-white\"></i>\n            <small>Files</small>\n          </div>\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-cloud bg-success text-white\"></i>\n            <small>Cloud</small>\n          </div>\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-star-o bg-magenta text-white\"></i>\n            <small>Star</small>\n          </div>\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-team bg-purple text-white\"></i>\n            <small>Team</small>\n          </div>\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-scan bg-warning text-white\"></i>\n            <small>QR</small>\n          </div>\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-pay-circle-o bg-cyan text-white\"></i>\n            <small>Pay</small>\n          </div>\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-printer bg-grey text-white\"></i>\n            <small>Print</small>\n          </div>\n        </div>\n      </nz-spin>\n    </div>\n  </nz-dropdown>\n  ",
        })
    ], HeaderIconComponent);
    return HeaderIconComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/components/notify.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/default/header/components/notify.component.ts ***!
  \**********************************************************************/
/*! exports provided: HeaderNotifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNotifyComponent", function() { return HeaderNotifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/distance_in_words_to_now */ "./node_modules/date-fns/distance_in_words_to_now/index.js");
/* harmony import */ var date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * 菜单通知
 */
var HeaderNotifyComponent = /** @class */ (function () {
    function HeaderNotifyComponent(msg) {
        this.msg = msg;
        this.data = [
            {
                title: '通知',
                list: [],
                emptyText: '你已查看所有通知',
                emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg',
                clearText: '清空通知',
            },
            {
                title: '消息',
                list: [],
                emptyText: '您已读完所有消息',
                emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg',
                clearText: '清空消息',
            },
            {
                title: '待办',
                list: [],
                emptyText: '你已完成所有待办',
                emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg',
                clearText: '清空待办',
            },
        ];
        this.count = 5;
        this.loading = false;
    }
    HeaderNotifyComponent.prototype.updateNoticeData = function (notices) {
        var data = this.data.slice();
        data.forEach(function (i) { return (i.list = []); });
        notices.forEach(function (item) {
            var newItem = __assign({}, item);
            if (newItem.datetime)
                newItem.datetime = date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_1__(item.datetime, {
                    locale: window.__locale__,
                });
            if (newItem.extra && newItem.status) {
                newItem.color = {
                    todo: undefined,
                    processing: 'blue',
                    urgent: 'red',
                    doing: 'gold',
                }[newItem.status];
            }
            data.find(function (w) { return w.title === newItem.type; }).list.push(newItem);
        });
        return data;
    };
    HeaderNotifyComponent.prototype.loadData = function () {
        var _this = this;
        if (this.loading)
            return;
        this.loading = true;
        setTimeout(function () {
            _this.data = _this.updateNoticeData([
                {
                    id: '000000001',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
                    title: '你收到了 14 份新周报',
                    datetime: '2017-08-09',
                    type: '通知',
                },
                {
                    id: '000000002',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
                    title: '你推荐的 曲妮妮 已通过第三轮面试',
                    datetime: '2017-08-08',
                    type: '通知',
                },
                {
                    id: '000000003',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
                    title: '这种模板可以区分多种通知类型',
                    datetime: '2017-08-07',
                    read: true,
                    type: '通知',
                },
                {
                    id: '000000004',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
                    title: '左侧图标用于区分不同的类型',
                    datetime: '2017-08-07',
                    type: '通知',
                },
                {
                    id: '000000005',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
                    title: '内容不要超过两行字，超出时自动截断',
                    datetime: '2017-08-07',
                    type: '通知',
                },
                {
                    id: '000000006',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                    title: '曲丽丽 评论了你',
                    description: '描述信息描述信息描述信息',
                    datetime: '2017-08-07',
                    type: '消息',
                },
                {
                    id: '000000007',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                    title: '朱偏右 回复了你',
                    description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
                    datetime: '2017-08-07',
                    type: '消息',
                },
                {
                    id: '000000008',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                    title: '标题',
                    description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
                    datetime: '2017-08-07',
                    type: '消息',
                },
                {
                    id: '000000009',
                    title: '任务名称',
                    description: '任务需要在 2017-01-12 20:00 前启动',
                    extra: '未开始',
                    status: 'todo',
                    type: '待办',
                },
                {
                    id: '000000010',
                    title: '第三方紧急代码变更',
                    description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
                    extra: '马上到期',
                    status: 'urgent',
                    type: '待办',
                },
                {
                    id: '000000011',
                    title: '信息安全考试',
                    description: '指派竹尔于 2017-01-09 前完成更新并发布',
                    extra: '已耗时 8 天',
                    status: 'doing',
                    type: '待办',
                },
                {
                    id: '000000012',
                    title: 'ABCD 版本发布',
                    description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
                    extra: '进行中',
                    status: 'processing',
                    type: '待办',
                },
            ]);
            _this.loading = false;
        }, 1000);
    };
    HeaderNotifyComponent.prototype.clear = function (type) {
        this.msg.success("\u6E05\u7A7A\u4E86 " + type);
    };
    HeaderNotifyComponent.prototype.select = function (res) {
        this.msg.success("\u70B9\u51FB\u4E86 " + res.title + " \u7684 " + res.item.title);
    };
    HeaderNotifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header-notify',
            template: "\n  <notice-icon\n    [data]=\"data\"\n    [count]=\"count\"\n    [loading]=\"loading\"\n    (select)=\"select($event)\"\n    (clear)=\"clear($event)\"\n    (popoverVisibleChange)=\"loadData()\"></notice-icon>\n  ",
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]])
    ], HeaderNotifyComponent);
    return HeaderNotifyComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/components/search.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/default/header/components/search.component.ts ***!
  \**********************************************************************/
/*! exports provided: HeaderSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSearchComponent", function() { return HeaderSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderSearchComponent = /** @class */ (function () {
    function HeaderSearchComponent(el) {
        this.el = el;
        this.focus = false;
        this.searchToggled = false;
    }
    Object.defineProperty(HeaderSearchComponent.prototype, "toggleChange", {
        set: function (value) {
            var _this = this;
            if (typeof value === 'undefined')
                return;
            this.searchToggled = true;
            this.focus = true;
            setTimeout(function () { return _this.qIpt.focus(); }, 300);
        },
        enumerable: true,
        configurable: true
    });
    HeaderSearchComponent.prototype.ngAfterViewInit = function () {
        this.qIpt = this.el.nativeElement.querySelector('.ant-input');
    };
    HeaderSearchComponent.prototype.qFocus = function () {
        this.focus = true;
    };
    HeaderSearchComponent.prototype.qBlur = function () {
        this.focus = false;
        this.searchToggled = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.alain-default__search-focus'),
        __metadata("design:type", Object)
    ], HeaderSearchComponent.prototype, "focus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.alain-default__search-toggled'),
        __metadata("design:type", Object)
    ], HeaderSearchComponent.prototype, "searchToggled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], HeaderSearchComponent.prototype, "toggleChange", null);
    HeaderSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header-search',
            template: "\n  <nz-input-group [nzAddOnBeforeIcon]=\"focus ? 'anticon anticon-arrow-down' : 'anticon anticon-search'\">\n    <input nz-input [(ngModel)]=\"q\" (focus)=\"qFocus()\" (blur)=\"qBlur()\"\n      [placeholder]=\"'menu.search.placeholder' | translate\">\n  </nz-input-group>\n  ",
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HeaderSearchComponent);
    return HeaderSearchComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/components/storage.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/default/header/components/storage.component.ts ***!
  \***********************************************************************/
/*! exports provided: HeaderStorageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderStorageComponent", function() { return HeaderStorageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderStorageComponent = /** @class */ (function () {
    function HeaderStorageComponent(confirmServ, messageServ) {
        this.confirmServ = confirmServ;
        this.messageServ = messageServ;
    }
    HeaderStorageComponent.prototype._click = function () {
        var _this = this;
        this.confirmServ.confirm({
            nzTitle: 'Make sure clear all local storage?',
            nzOnOk: function () {
                localStorage.clear();
                _this.messageServ.success('Clear Finished!');
            },
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderStorageComponent.prototype, "_click", null);
    HeaderStorageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header-storage',
            template: "\n  <i nz-icon type=\"tool\"></i>\n  {{ 'menu.clear.local.storage' | translate}}\n  ",
            host: {
                '[class.d-block]': 'true',
            },
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzModalService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], HeaderStorageComponent);
    return HeaderStorageComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/components/task.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/default/header/components/task.component.ts ***!
  \********************************************************************/
/*! exports provided: HeaderTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTaskComponent", function() { return HeaderTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderTaskComponent = /** @class */ (function () {
    function HeaderTaskComponent() {
        this.loading = true;
    }
    HeaderTaskComponent.prototype.change = function () {
        var _this = this;
        setTimeout(function () { return (_this.loading = false); }, 500);
    };
    HeaderTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header-task',
            template: "\n  <nz-dropdown nzTrigger=\"click\" nzPlacement=\"bottomRight\" (nzVisibleChange)=\"change()\">\n    <div class=\"alain-default__nav-item\" nz-dropdown>\n      <nz-badge [nzDot]=\"true\">\n        <i nz-icon type=\"bell\" class=\"alain-default__nav-item-icon\"></i>\n      </nz-badge>\n    </div>\n    <div nz-menu class=\"wd-lg\">\n      <nz-card nzTitle=\"Notifications\" [nzLoading]=\"loading\" nzBordered=\"false\" class=\"ant-card__body-nopadding\">\n        <ng-template #extra><i nz-icon type=\"plus\"></i></ng-template>\n        <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\">\n          <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n            <nz-avatar [nzSrc]=\"'./assets/tmp/img/1.png'\"></nz-avatar>\n          </div>\n          <div nz-col [nzSpan]=\"20\">\n            <strong>cipchk</strong>\n            <p class=\"mb0\">Please tell me what happened in a few words, don't go into details.</p>\n          </div>\n        </div>\n        <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\">\n          <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n            <nz-avatar [nzSrc]=\"'./assets/tmp/img/2.png'\"></nz-avatar>\n          </div>\n          <div nz-col [nzSpan]=\"20\">\n            <strong>\u306F\u306A\u3055\u304D</strong>\n            <p class=\"mb0\">\u30CF\u30EB\u30AB\u30BD\u30E9\u30C8\u30AD\u30D8\u30C0\u30C4\u30D2\u30AB\u30EA </p>\n          </div>\n        </div>\n        <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\">\n          <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n            <nz-avatar [nzSrc]=\"'./assets/tmp/img/3.png'\"></nz-avatar>\n          </div>\n          <div nz-col [nzSpan]=\"20\">\n            <strong>\u82CF\u5148\u751F</strong>\n            <p class=\"mb0\">\u8BF7\u544A\u8BC9\u6211\uFF0C\u6211\u5E94\u8BE5\u8BF4\u70B9\u4EC0\u4E48\u597D\uFF1F</p>\n          </div>\n        </div>\n        <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\">\n          <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n            <nz-avatar [nzSrc]=\"'./assets/tmp/img/4.png'\"></nz-avatar>\n          </div>\n          <div nz-col [nzSpan]=\"20\">\n            <strong>Kent</strong>\n            <p class=\"mb0\">Please tell me what happened in a few words, don't go into details.</p>\n          </div>\n        </div>\n        <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\">\n          <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n            <nz-avatar [nzSrc]=\"'./assets/tmp/img/5.png'\"></nz-avatar>\n          </div>\n          <div nz-col [nzSpan]=\"20\">\n            <strong>Jefferson</strong>\n            <p class=\"mb0\">Please tell me what happened in a few words, don't go into details.</p>\n          </div>\n        </div>\n        <div nz-row>\n          <div nz-col [nzSpan]=\"24\" class=\"pt-md border-top-1 text-center text-grey point\">\n            See All\n          </div>\n        </div>\n      </nz-card>\n    </div>\n  </nz-dropdown>\n  ",
        })
    ], HeaderTaskComponent);
    return HeaderTaskComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/components/user.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/default/header/components/user.component.ts ***!
  \********************************************************************/
/*! exports provided: HeaderUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderUserComponent", function() { return HeaderUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/fesm5/auth.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var HeaderUserComponent = /** @class */ (function () {
    function HeaderUserComponent(settings, router, tokenService) {
        this.settings = settings;
        this.router = router;
        this.tokenService = tokenService;
    }
    HeaderUserComponent.prototype.logout = function () {
        this.tokenService.clear();
        this.router.navigateByUrl(this.tokenService.login_url);
    };
    HeaderUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header-user',
            template: "\n  <nz-dropdown nzPlacement=\"bottomRight\">\n    <div class=\"alain-default__nav-item d-flex align-items-center px-sm\" nz-dropdown>\n      <nz-avatar [nzSrc]=\"settings.user.avatar\" nzSize=\"small\" class=\"mr-sm\"></nz-avatar>\n      {{settings.user.name}}\n    </div>\n    <div nz-menu class=\"width-sm\">\n      <div nz-menu-item routerLink=\"/pro/account/center\"><i nz-icon type=\"user\" class=\"mr-sm\"></i>\n        {{ 'menu.account.center' | translate }}\n      </div>\n      <div nz-menu-item routerLink=\"/pro/account/settings\"><i nz-icon type=\"setting\" class=\"mr-sm\"></i>\n        {{ 'menu.account.settings' | translate }}\n      </div>\n      <li nz-menu-divider></li>\n      <div nz-menu-item (click)=\"logout()\"><i nz-icon type=\"logout\" class=\"mr-sm\"></i>\n        {{ 'menu.account.logout' | translate }}\n      </div>\n    </div>\n  </nz-dropdown>\n  ",
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_delon_auth__WEBPACK_IMPORTED_MODULE_3__["DA_SERVICE_TOKEN"])),
        __metadata("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object])
    ], HeaderUserComponent);
    return HeaderUserComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/header.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/default/header/header.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__header-logo\">\r\n  <a [routerLink]=\"['/']\" class=\"alain-default__header-logo-link\">\r\n    <img class=\"alain-default__header-logo-expanded\" src=\"./assets/logo-full.svg\" alt=\"{{settings.app.name}}\" style=\"max-height:40px;\" />\r\n    <img class=\"alain-default__header-logo-collapsed\" src=\"./assets/logo.svg\" alt=\"{{settings.app.name}}\" style=\"max-height:30px;\" />\r\n  </a>\r\n</div>\r\n<div class=\"alain-default__nav-wrap\">\r\n  <ul class=\"alain-default__nav\">\r\n    <!-- Menu -->\r\n    <li>\r\n      <div class=\"alain-default__nav-item\" (click)=\"toggleCollapsedSidebar()\">\r\n        <i nz-icon type=\"menu-{{settings.layout.collapsed ? 'unfold' : 'fold'}}\"></i>\r\n      </div>\r\n    </li>\r\n    <!-- Github Page -->\r\n    <li>\r\n      <a class=\"alain-default__nav-item\" href=\"//github.com/ng-alain/ng-alain\" target=\"_blank\">\r\n        <i nz-icon type=\"github\"></i>\r\n      </a>\r\n    </li>\r\n    <!-- Lock Page -->\r\n    <li class=\"hidden-mobile\">\r\n      <div class=\"alain-default__nav-item\" routerLink=\"/passport/lock\">\r\n        <i nz-icon type=\"lock\"></i>\r\n      </div>\r\n    </li>\r\n    <!-- Search Button -->\r\n    <li class=\"hidden-pc\" (click)=\"searchToggleChange()\">\r\n      <div class=\"alain-default__nav-item\">\r\n        <i nz-icon type=\"search\"></i>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n  <header-search class=\"alain-default__search\" [toggleChange]=\"searchToggleStatus\"></header-search>\r\n  <ul class=\"alain-default__nav\">\r\n    <!-- Notify -->\r\n    <li>\r\n      <header-notify></header-notify>\r\n    </li>\r\n    <!-- Task -->\r\n    <li class=\"hidden-mobile\">\r\n      <header-task></header-task>\r\n    </li>\r\n    <!-- App Icons -->\r\n    <li class=\"hidden-mobile\">\r\n      <header-icon></header-icon>\r\n    </li>\r\n    <!-- Settings -->\r\n    <li class=\"hidden-mobile\">\r\n      <nz-dropdown nzTrigger=\"click\" nzPlacement=\"bottomRight\">\r\n        <div class=\"alain-default__nav-item\" nz-dropdown>\r\n          <i nz-icon type=\"setting\"></i>\r\n        </div>\r\n        <div nz-menu style=\"width:200px;\">\r\n          <div nz-menu-item>\r\n            <header-fullscreen></header-fullscreen>\r\n          </div>\r\n          <div nz-menu-item>\r\n            <header-storage></header-storage>\r\n          </div>\r\n          <div nz-menu-item>\r\n            <header-i18n></header-i18n>\r\n          </div>\r\n        </div>\r\n      </nz-dropdown>\r\n    </li>\r\n    <li class=\"hidden-mobile\">\r\n      <header-user></header-user>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/default/header/header.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/default/header/header.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(settings) {
        this.settings = settings;
    }
    HeaderComponent.prototype.toggleCollapsedSidebar = function () {
        this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
    };
    HeaderComponent.prototype.searchToggleChange = function () {
        this.searchToggleStatus = !this.searchToggleStatus;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'layout-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/default/header/header.component.html"),
        }),
        __metadata("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_1__["SettingsService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/setting-drawer/setting-drawer-item.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/default/setting-drawer/setting-drawer-item.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>{{i.label}}<span class=\"pl-sm text-grey\">{{i.tip}}</span></span>\r\n<div [ngSwitch]=\"i.type\">\r\n  <ng-container *ngSwitchCase=\"'color'\">\r\n    <input nz-input type=\"color\" style=\"min-width: 88px\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{standalone: true}\">\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"'input'\">\r\n    <input nz-input style=\"min-width: 88px\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{standalone: true}\">\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"'px'\">\r\n    <nz-input-number [(ngModel)]=\"pxVal\" (ngModelChange)=\"pxChange($event)\" [nzMin]=\"i.min\" [nzMax]=\"i.max\"\r\n                     [nzStep]=\"i.step || 2\" [nzFormatter]=\"format\"></nz-input-number>\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"'switch'\">\r\n    <nz-switch nzSize=\"small\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{standalone: true}\"></nz-switch>\r\n  </ng-container>\r\n  <ng-container *ngSwitchDefault>\r\n    <ng-content></ng-content>\r\n  </ng-container>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/default/setting-drawer/setting-drawer-item.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/default/setting-drawer/setting-drawer-item.component.ts ***!
  \********************************************************************************/
/*! exports provided: SettingDrawerItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingDrawerItemComponent", function() { return SettingDrawerItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingDrawerItemComponent = /** @class */ (function () {
    function SettingDrawerItemComponent() {
        this.i = {};
        this.format = function (value) { return value + " px"; };
    }
    Object.defineProperty(SettingDrawerItemComponent.prototype, "data", {
        set: function (val) {
            this.i = val;
            if (val.type === 'px') {
                this.pxVal = +val.value.replace('px', '');
            }
        },
        enumerable: true,
        configurable: true
    });
    SettingDrawerItemComponent.prototype.pxChange = function (val) {
        this.i.value = val + "px";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SettingDrawerItemComponent.prototype, "data", null);
    SettingDrawerItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'setting-drawer-item',
            template: __webpack_require__(/*! ./setting-drawer-item.component.html */ "./src/app/layout/default/setting-drawer/setting-drawer-item.component.html"),
            preserveWhitespaces: false,
            host: {
                '[class.setting-drawer__body-item]': 'true',
            },
        })
    ], SettingDrawerItemComponent);
    return SettingDrawerItemComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/setting-drawer/setting-drawer.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/default/setting-drawer/setting-drawer.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-drawer [(nzVisible)]=\"collapse\" [nzWidth]=\"500\" (nzOnClose)=\"toggle()\">\r\n  <div class=\"setting-drawer__content\">\r\n    <div class=\"setting-drawer__body setting-drawer__theme\">\r\n      <h3 class=\"setting-drawer__title\">主题色</h3>\r\n      <span *ngFor=\"let c of colors\" nz-tooltip [ngStyle]=\"{ 'background-color': c.color }\" (click)=\"changeColor(c.color)\"\r\n            nz-tooltip [nzTitle]=\"c.key\" class=\"setting-drawer__theme-tag\"><i *ngIf=\"color === c.color\"\r\n           class=\"anticon anticon-check\"></i></span>\r\n    </div>\r\n    <nz-divider></nz-divider>\r\n    <div class=\"setting-drawer__body\">\r\n      <h3 class=\"setting-drawer__title\">设置</h3>\r\n      <nz-tabset>\r\n        <nz-tab nzTitle=\"顶部\">\r\n          <div class=\"setting-drawer__body\">\r\n            <setting-drawer-item [data]=\"data['alain-default-header-hg']\"></setting-drawer-item>\r\n            <setting-drawer-item [data]=\"data['alain-default-header-bg']\"></setting-drawer-item>\r\n            <setting-drawer-item [data]=\"data['alain-default-header-padding']\"></setting-drawer-item>\r\n          </div>\r\n        </nz-tab>\r\n        <nz-tab nzTitle=\"侧边栏\">\r\n          <setting-drawer-item [data]=\"data['alain-default-aside-wd']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-aside-bg']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-aside-collapsed-wd']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-aside-nav-padding-top-bottom']\"></setting-drawer-item>\r\n        </nz-tab>\r\n        <nz-tab nzTitle=\"内容\">\r\n          <setting-drawer-item [data]=\"data['alain-default-content-bg']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-bg']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-border']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-content-padding']\"></setting-drawer-item>\r\n        </nz-tab>\r\n        <nz-tab nzTitle=\"其它\">\r\n          <setting-drawer-item [data]=\"data['form-state-visual-feedback-enabled']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['preserve-white-spaces-enabled']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['nz-table-img-radius']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['nz-table-img-margin-right']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['nz-table-img-max-width']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['nz-table-img-max-height']\"></setting-drawer-item>\r\n        </nz-tab>\r\n      </nz-tabset>\r\n    </div>\r\n    <nz-divider></nz-divider>\r\n    <div class=\"setting-drawer__body\">\r\n      <div class=\"setting-drawer__body-item\">\r\n        固定头和侧边栏\r\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"layout.fixed\" (ngModelChange)=\"setLayout('fixed', layout.fixed)\"></nz-switch>\r\n      </div>\r\n      <div class=\"setting-drawer__body-item\">\r\n        色弱模式\r\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"layout.colorWeak\" (ngModelChange)=\"setLayout('colorWeak', layout.colorWeak)\"></nz-switch>\r\n      </div>\r\n    </div>\r\n    <nz-divider></nz-divider>\r\n    <button (click)=\"apply()\" type=\"button\" nz-button nzType=\"primary\">预览</button>\r\n    <button (click)=\"reset()\" type=\"button\" nz-button>重置</button>\r\n    <button (click)=\"copyVar()\" type=\"button\" nz-button>拷贝</button>\r\n    <nz-alert class=\"mt-md\" nzType=\"warning\" nzMessage=\"配置栏只在开发环境用于预览，生产环境不会展现，请拷贝后手动修改参数配置文件 src/styles/theme.less\"></nz-alert>\r\n  </div>\r\n</nz-drawer>\r\n<div class=\"setting-drawer__handle\" [ngClass]=\"{'setting-drawer__handle-opened': collapse}\" (click)=\"toggle()\">\r\n  <i class=\"anticon anticon-{{!collapse ? 'setting' : 'close'}} setting-drawer__handle-icon\"></i>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/default/setting-drawer/setting-drawer.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/default/setting-drawer/setting-drawer.component.ts ***!
  \***************************************************************************/
/*! exports provided: SettingDrawerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingDrawerComponent", function() { return SettingDrawerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/util */ "./node_modules/@delon/util/fesm5/util.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ALAINDEFAULTVAR = 'alain-default-vars';
var DEFAULT_COLORS = [
    {
        key: 'dust',
        color: '#F5222D',
    },
    {
        key: 'volcano',
        color: '#FA541C',
    },
    {
        key: 'sunset',
        color: '#FAAD14',
    },
    {
        key: 'cyan',
        color: '#13C2C2',
    },
    {
        key: 'green',
        color: '#52C41A',
    },
    {
        key: 'daybreak',
        color: '#1890ff',
    },
    {
        key: 'geekblue',
        color: '#2F54EB',
    },
    {
        key: 'purple',
        color: '#722ED1',
    },
];
var DEFAULT_VARS = {
    'primary-color': { label: '主颜色', type: 'color', default: '#1890ff' },
    'alain-default-header-hg': {
        label: '高',
        type: 'px',
        default: '64px',
        max: 300,
        min: 24,
    },
    'alain-default-header-bg': {
        label: '背景色',
        type: 'color',
        default: '@primary-color',
        tip: '默认同主色系',
    },
    'alain-default-header-padding': {
        label: '顶部左右内边距',
        type: 'px',
        default: '16px',
    },
    // 侧边栏
    'alain-default-aside-wd': { label: '宽度', type: 'px', default: '200px' },
    'alain-default-aside-bg': {
        label: '背景',
        type: 'color',
        default: '#ffffff',
    },
    'alain-default-aside-collapsed-wd': {
        label: '收缩宽度',
        type: 'px',
        default: '64px',
    },
    'alain-default-aside-nav-padding-top-bottom': {
        label: '项上下内边距',
        type: 'px',
        default: '8px',
        step: 8,
    },
    // 主菜单
    'alain-default-aside-nav-fs': {
        label: '菜单字号',
        type: 'px',
        default: '14px',
        min: 14,
        max: 30,
    },
    'alain-default-aside-collapsed-nav-fs': {
        label: '收缩菜单字号',
        type: 'px',
        default: '24px',
        min: 24,
        max: 32,
    },
    'alain-default-aside-nav-item-height': {
        label: '菜单项高度',
        type: 'px',
        default: '38px',
        min: 24,
        max: 64,
    },
    'alain-default-aside-nav-text-color': {
        label: '菜单文本颜色',
        type: 'color',
        default: 'rgba(0, 0, 0, 0.65)',
        rgba: true,
    },
    'alain-default-aside-nav-text-hover-color': {
        label: '菜单文本悬停颜色',
        type: 'color',
        default: '@primary-color',
        tip: '默认同主色系',
    },
    'alain-default-aside-nav-group-text-color': {
        label: '菜单分组文本颜色',
        type: 'color',
        default: 'rgba(0, 0, 0, 0.43)',
        rgba: true,
    },
    'alain-default-aside-nav-selected-text-color': {
        label: '菜单激活时文本颜色',
        type: 'color',
        default: '@primary-color',
        tip: '默认同主色系',
    },
    'alain-default-aside-nav-selected-bg': {
        label: '菜单激活时背景颜色',
        type: 'color',
        default: '#fcfcfc',
    },
    // 内容
    'alain-default-content-bg': {
        label: '背景色',
        type: 'color',
        default: '#f5f7fa',
    },
    'alain-default-content-heading-bg': {
        label: '标题背景色',
        type: 'color',
        default: '#fafbfc',
    },
    'alain-default-content-heading-border': {
        label: '标题底部边框色',
        type: 'color',
        default: '#efe3e5',
    },
    'alain-default-content-padding': {
        label: '内边距',
        type: 'px',
        default: '24px',
        min: 0,
        max: 128,
        step: 8,
    },
    // zorro组件修正
    'form-state-visual-feedback-enabled': {
        label: '开启表单元素的视觉反馈',
        type: 'switch',
        default: true,
    },
    'preserve-white-spaces-enabled': {
        label: '开启 preserveWhitespaces',
        type: 'switch',
        default: true,
    },
    'nz-table-img-radius': {
        label: '表格中：图片圆角',
        type: 'px',
        default: '4px',
        min: 0,
        max: 128,
    },
    'nz-table-img-margin-right': {
        label: '表格中：图片右外边距',
        type: 'px',
        default: '4px',
        min: 0,
        max: 128,
    },
    'nz-table-img-max-width': {
        label: '表格中：图片最大宽度',
        type: 'px',
        default: '32px',
        min: 8,
        max: 128,
    },
    'nz-table-img-max-height': {
        label: '表格中：图片最大高度',
        type: 'px',
        default: '32px',
        min: 8,
        max: 128,
    },
};
var SettingDrawerComponent = /** @class */ (function () {
    function SettingDrawerComponent(cd, msg, settingSrv, lazy, zone, doc) {
        this.cd = cd;
        this.msg = msg;
        this.settingSrv = settingSrv;
        this.lazy = lazy;
        this.zone = zone;
        this.doc = doc;
        this.loadedLess = false;
        this.collapse = false;
        this.data = {};
        this.colors = DEFAULT_COLORS;
        this.color = this.cachedData['@primary-color'] || this.DEFAULT_PRIMARY;
        this.resetData(this.cachedData, false);
    }
    Object.defineProperty(SettingDrawerComponent.prototype, "layout", {
        get: function () {
            return this.settingSrv.layout;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingDrawerComponent.prototype, "cachedData", {
        get: function () {
            return this.settingSrv.layout[ALAINDEFAULTVAR] || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingDrawerComponent.prototype, "DEFAULT_PRIMARY", {
        get: function () {
            return DEFAULT_VARS['primary-color'].default;
        },
        enumerable: true,
        configurable: true
    });
    SettingDrawerComponent.prototype.loadLess = function () {
        var _this = this;
        if (this.loadedLess)
            return Promise.resolve();
        return this.lazy
            .loadStyle('./assets/alain-default.less', 'stylesheet/less')
            .then(function () {
            var lessConfigNode = _this.doc.createElement('script');
            lessConfigNode.innerHTML = "\n          window.less = {\n            async: true,\n            env: 'production',\n            javascriptEnabled: true\n          };\n        ";
            _this.doc.body.appendChild(lessConfigNode);
        })
            .then(function () {
            return _this.lazy.loadScript('https://gw.alipayobjects.com/os/lib/less.js/3.8.1/less.min.js');
        })
            .then(function () {
            _this.loadedLess = true;
        });
    };
    SettingDrawerComponent.prototype.genVars = function () {
        var _a;
        var _b = this, data = _b.data, color = _b.color, validKeys = _b.validKeys;
        var vars = (_a = {},
            _a["@primary-color"] = color,
            _a);
        validKeys
            .filter(function (key) { return key !== 'primary-color'; })
            .forEach(function (key) { return (vars["@" + key] = data[key].value); });
        this.setLayout(ALAINDEFAULTVAR, vars);
        return vars;
    };
    SettingDrawerComponent.prototype.runLess = function () {
        var _this = this;
        var _a = this, zone = _a.zone, msg = _a.msg, cd = _a.cd;
        var msgId = msg.loading("\u6B63\u5728\u7F16\u8BD1\u4E3B\u9898\uFF01", { nzDuration: 0 }).messageId;
        setTimeout(function () {
            zone.runOutsideAngular(function () {
                _this.loadLess().then(function () {
                    window.less.modifyVars(_this.genVars()).then(function () {
                        msg.success('成功');
                        msg.remove(msgId);
                        zone.run(function () { return cd.detectChanges(); });
                    });
                });
            });
        }, 200);
    };
    SettingDrawerComponent.prototype.toggle = function () {
        this.collapse = !this.collapse;
    };
    SettingDrawerComponent.prototype.changeColor = function (color) {
        var _this = this;
        this.color = color;
        Object.keys(DEFAULT_VARS)
            .filter(function (key) { return DEFAULT_VARS[key].default === '@primary-color'; })
            .forEach(function (key) { return delete _this.cachedData["@" + key]; });
        this.resetData(this.cachedData, false);
    };
    SettingDrawerComponent.prototype.setLayout = function (name, value) {
        this.settingSrv.setLayout(name, value);
    };
    SettingDrawerComponent.prototype.resetData = function (nowData, run) {
        var _this = this;
        if (run === void 0) { run = true; }
        nowData = nowData || {};
        var data = Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["deepCopy"])(DEFAULT_VARS);
        Object.keys(data).forEach(function (key) {
            var value = nowData["@" + key] || data[key].default || '';
            data[key].value = value === "@primary-color" ? _this.color : value;
        });
        this.data = data;
        if (run) {
            this.cd.detectChanges();
            this.runLess();
        }
    };
    Object.defineProperty(SettingDrawerComponent.prototype, "validKeys", {
        get: function () {
            var _this = this;
            return Object.keys(this.data).filter(function (key) { return _this.data[key].value !== _this.data[key].default; });
        },
        enumerable: true,
        configurable: true
    });
    SettingDrawerComponent.prototype.apply = function () {
        this.runLess();
    };
    SettingDrawerComponent.prototype.reset = function () {
        this.color = this.DEFAULT_PRIMARY;
        this.settingSrv.setLayout(ALAINDEFAULTVAR, {});
        this.resetData({});
    };
    SettingDrawerComponent.prototype.copyVar = function () {
        var vars = this.genVars();
        var copyContent = Object.keys(vars)
            .map(function (key) { return key + ": " + vars[key] + ";"; })
            .join('\n');
        Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["copy"])(copyContent);
        this.msg.success('Copy success');
    };
    SettingDrawerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'setting-drawer',
            template: __webpack_require__(/*! ./setting-drawer.component.html */ "./src/app/layout/default/setting-drawer/setting-drawer.component.html"),
            preserveWhitespaces: false,
            host: {
                '[class.setting-drawer]': 'true',
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_4__["SettingsService"],
            _delon_util__WEBPACK_IMPORTED_MODULE_3__["LazyService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], Object])
    ], SettingDrawerComponent);
    return SettingDrawerComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/sidebar/sidebar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/default/sidebar/sidebar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__aside-inner\">\r\n  <nz-dropdown nzTrigger=\"click\" class=\"alain-default__aside-user\">\r\n    <div nz-dropdown class=\"user-block-dropdown\">\r\n      <nz-avatar class=\"alain-default__aside-user-avatar\" [nzSrc]=\"settings.user.avatar\"></nz-avatar>\r\n      <div class=\"alain-default__aside-user-info\">\r\n        <strong>{{settings.user.name}}</strong>\r\n        <p class=\"text-truncate mb0\">{{settings.user.email}}</p>\r\n      </div>\r\n    </div>\r\n    <ul nz-menu>\r\n      <li nz-menu-item routerLink=\"/pro/account/center\">{{ 'menu.account.center' | translate }}</li>\r\n      <li nz-menu-item routerLink=\"/pro/account/settings\">{{ 'menu.account.settings' | translate }}</li>\r\n    </ul>\r\n  </nz-dropdown>\r\n  <sidebar-nav class=\"d-block py-lg\"></sidebar-nav>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/default/sidebar/sidebar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/default/sidebar/sidebar.component.ts ***!
  \*************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(settings, msgSrv) {
        this.settings = settings;
        this.msgSrv = msgSrv;
    }
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'layout-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/layout/default/sidebar/sidebar.component.html"),
        }),
        __metadata("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layout/fullscreen/fullscreen.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/fullscreen/fullscreen.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/layout/fullscreen/fullscreen.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/fullscreen/fullscreen.component.ts ***!
  \***********************************************************/
/*! exports provided: LayoutFullScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutFullScreenComponent", function() { return LayoutFullScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LayoutFullScreenComponent = /** @class */ (function () {
    function LayoutFullScreenComponent() {
    }
    LayoutFullScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'layout-fullscreen',
            template: __webpack_require__(/*! ./fullscreen.component.html */ "./src/app/layout/fullscreen/fullscreen.component.html"),
            host: {
                '[class.alain-fullscreen]': 'true',
            },
        })
    ], LayoutFullScreenComponent);
    return LayoutFullScreenComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default/default.component */ "./src/app/layout/default/default.component.ts");
/* harmony import */ var _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fullscreen/fullscreen.component */ "./src/app/layout/fullscreen/fullscreen.component.ts");
/* harmony import */ var _default_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default/header/header.component */ "./src/app/layout/default/header/header.component.ts");
/* harmony import */ var _default_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./default/sidebar/sidebar.component */ "./src/app/layout/default/sidebar/sidebar.component.ts");
/* harmony import */ var _default_header_components_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default/header/components/search.component */ "./src/app/layout/default/header/components/search.component.ts");
/* harmony import */ var _default_header_components_notify_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./default/header/components/notify.component */ "./src/app/layout/default/header/components/notify.component.ts");
/* harmony import */ var _default_header_components_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./default/header/components/task.component */ "./src/app/layout/default/header/components/task.component.ts");
/* harmony import */ var _default_header_components_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./default/header/components/icon.component */ "./src/app/layout/default/header/components/icon.component.ts");
/* harmony import */ var _default_header_components_fullscreen_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./default/header/components/fullscreen.component */ "./src/app/layout/default/header/components/fullscreen.component.ts");
/* harmony import */ var _default_header_components_i18n_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./default/header/components/i18n.component */ "./src/app/layout/default/header/components/i18n.component.ts");
/* harmony import */ var _default_header_components_storage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./default/header/components/storage.component */ "./src/app/layout/default/header/components/storage.component.ts");
/* harmony import */ var _default_header_components_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./default/header/components/user.component */ "./src/app/layout/default/header/components/user.component.ts");
/* harmony import */ var _default_setting_drawer_setting_drawer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./default/setting-drawer/setting-drawer.component */ "./src/app/layout/default/setting-drawer/setting-drawer.component.ts");
/* harmony import */ var _default_setting_drawer_setting_drawer_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./default/setting-drawer/setting-drawer-item.component */ "./src/app/layout/default/setting-drawer/setting-drawer-item.component.ts");
/* harmony import */ var _passport_passport_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./passport/passport.component */ "./src/app/layout/passport/passport.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var SETTINGDRAWER = [_default_setting_drawer_setting_drawer_component__WEBPACK_IMPORTED_MODULE_14__["SettingDrawerComponent"], _default_setting_drawer_setting_drawer_item_component__WEBPACK_IMPORTED_MODULE_15__["SettingDrawerItemComponent"]];
var COMPONENTS = [
    _default_default_component__WEBPACK_IMPORTED_MODULE_2__["LayoutDefaultComponent"],
    _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_3__["LayoutFullScreenComponent"],
    _default_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
    _default_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
].concat(SETTINGDRAWER);
var HEADERCOMPONENTS = [
    _default_header_components_search_component__WEBPACK_IMPORTED_MODULE_6__["HeaderSearchComponent"],
    _default_header_components_notify_component__WEBPACK_IMPORTED_MODULE_7__["HeaderNotifyComponent"],
    _default_header_components_task_component__WEBPACK_IMPORTED_MODULE_8__["HeaderTaskComponent"],
    _default_header_components_icon_component__WEBPACK_IMPORTED_MODULE_9__["HeaderIconComponent"],
    _default_header_components_fullscreen_component__WEBPACK_IMPORTED_MODULE_10__["HeaderFullScreenComponent"],
    _default_header_components_i18n_component__WEBPACK_IMPORTED_MODULE_11__["HeaderI18nComponent"],
    _default_header_components_storage_component__WEBPACK_IMPORTED_MODULE_12__["HeaderStorageComponent"],
    _default_header_components_user_component__WEBPACK_IMPORTED_MODULE_13__["HeaderUserComponent"],
];
// passport

var PASSPORT = [_passport_passport_component__WEBPACK_IMPORTED_MODULE_16__["LayoutPassportComponent"]];
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]],
            entryComponents: SETTINGDRAWER,
            declarations: COMPONENTS.concat(HEADERCOMPONENTS, PASSPORT),
            exports: COMPONENTS.concat(PASSPORT),
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/passport/passport.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/passport/passport.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <header-i18n [showLang]=\"false\" class=\"langs\"></header-i18n>\r\n  <div class=\"wrap\">\r\n    <div class=\"top\">\r\n      <div class=\"head\">\r\n        <img class=\"logo\" src=\"./assets/logo-color.svg\">\r\n        <span class=\"title\">ng-alain</span>\r\n      </div>\r\n      <div class=\"desc\">武林中最有影响力的《葵花宝典》；欲练神功，挥刀自宫</div>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n    <global-footer [links]=\"links\">\r\n      Copyright\r\n      <i class=\"anticon anticon-copyright\"></i> 2017\r\n      <a href=\"//github.com/cipchk\" target=\"_blank\">卡色</a>出品\r\n    </global-footer>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/passport/passport.component.less":
/*!*********************************************************!*\
  !*** ./src/app/layout/passport/passport.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n:host ::ng-deep .container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  background: #f0f2f5;\n}\n:host ::ng-deep .langs {\n  text-align: right;\n  width: 100%;\n  height: 40px;\n  line-height: 44px;\n}\n:host ::ng-deep .langs .anticon {\n  margin-top: 24px;\n  margin-right: 24px;\n  font-size: 14px;\n  vertical-align: top;\n  cursor: pointer;\n}\n:host ::ng-deep .wrap {\n  padding: 32px 0;\n  flex: 1;\n}\n:host ::ng-deep .ant-form-item {\n  margin-bottom: 24px;\n}\n@media (min-width: 768px) {\n  :host ::ng-deep .container {\n    background-image: url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg');\n    background-repeat: no-repeat;\n    background-position: center 110px;\n    background-size: 100%;\n  }\n  :host ::ng-deep .wrap {\n    padding: 32px 0 24px;\n  }\n}\n:host ::ng-deep .top {\n  text-align: center;\n}\n:host ::ng-deep .header {\n  height: 44px;\n  line-height: 44px;\n}\n:host ::ng-deep .header a {\n  text-decoration: none;\n}\n:host ::ng-deep .logo {\n  height: 44px;\n  margin-right: 16px;\n}\n:host ::ng-deep .title {\n  font-size: 33px;\n  color: rgba(0, 0, 0, 0.85);\n  font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;\n  font-weight: 600;\n  position: relative;\n  vertical-align: middle;\n}\n:host ::ng-deep .desc {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.45);\n  margin-top: 12px;\n  margin-bottom: 40px;\n}\n"

/***/ }),

/***/ "./src/app/layout/passport/passport.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/passport/passport.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutPassportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutPassportComponent", function() { return LayoutPassportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LayoutPassportComponent = /** @class */ (function () {
    function LayoutPassportComponent() {
        this.links = [
            {
                title: '帮助',
                href: '',
            },
            {
                title: '隐私',
                href: '',
            },
            {
                title: '条款',
                href: '',
            },
        ];
    }
    LayoutPassportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'layout-passport',
            template: __webpack_require__(/*! ./passport.component.html */ "./src/app/layout/passport/passport.component.html"),
            styles: [__webpack_require__(/*! ./passport.component.less */ "./src/app/layout/passport/passport.component.less")],
        })
    ], LayoutPassportComponent);
    return LayoutPassportComponent;
}());



/***/ }),

/***/ "./src/app/routes/callback/callback.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/routes/callback/callback.component.ts ***!
  \*******************************************************/
/*! exports provided: CallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackComponent", function() { return CallbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/fesm5/auth.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CallbackComponent = /** @class */ (function () {
    function CallbackComponent(socialService, route) {
        this.socialService = socialService;
        this.route = route;
    }
    CallbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router$ = this.route.params.subscribe(function (params) {
            _this.type = params['type'];
            _this.mockModel();
        });
    };
    CallbackComponent.prototype.mockModel = function () {
        this.socialService.callback({
            token: '123456789',
            name: 'cipchk',
            email: this.type + "@" + this.type + ".com",
            id: 10000,
            time: +new Date(),
        });
    };
    CallbackComponent.prototype.ngOnDestroy = function () {
        this.router$.unsubscribe();
    };
    CallbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-callback',
            template: "",
            providers: [_delon_auth__WEBPACK_IMPORTED_MODULE_2__["SocialService"]],
        }),
        __metadata("design:paramtypes", [_delon_auth__WEBPACK_IMPORTED_MODULE_2__["SocialService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "./src/app/routes/dashboard/analysis/analysis.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/routes/dashboard/analysis/analysis.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row [nzGutter]=\"24\" class=\"pt-lg\">\r\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"12\" nzLg=\"6\">\r\n    <g2-card [title]=\"'app.analysis.total-sales' | translate\" total=\"¥ 126,560\" contentHeight=\"44px\" [action]=\"action1\"\r\n      [footer]=\"footer1\">\r\n      <ng-template #action1>\r\n        <nz-tooltip [nzTitle]=\"'app.analysis.introduce' | translate\">\r\n          <i nz-tooltip nz-icon type=\"info-circle\"></i>\r\n        </nz-tooltip>\r\n      </ng-template>\r\n      <trend flag=\"up\" style=\"display:block; margin-top:2px;\">\r\n        {{'app.analysis.week' | translate}}\r\n        <span class=\"pl-sm\">12%</span>\r\n      </trend>\r\n      <trend flag=\"down\">\r\n        {{'app.analysis.day' | translate}}\r\n        <span class=\"pl-sm\">11%</span>\r\n      </trend>\r\n      <ng-template #footer1>\r\n        <p class=\"text-truncate mb0\">\r\n          {{'app.analysis.day-sales' | translate}}\r\n          <span class=\"ml-sm\">￥12,423</span>\r\n        </p>\r\n      </ng-template>\r\n    </g2-card>\r\n  </div>\r\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"12\" nzLg=\"6\">\r\n    <g2-card [title]=\"'app.analysis.visits' | translate\" total=\"8,848\" contentHeight=\"46px\" [action]=\"action2\" [footer]=\"footer2\">\r\n      <ng-template #action2>\r\n        <nz-tooltip [nzTitle]=\"'app.analysis.introduce' | translate\">\r\n          <i nz-tooltip nz-icon type=\"info-circle\"></i>\r\n        </nz-tooltip>\r\n      </ng-template>\r\n      <g2-mini-area color=\"#975FE4\" height=\"46\" [data]=\"data.visitData\"></g2-mini-area>\r\n      <ng-template #footer2>\r\n        <p class=\"text-truncate mb0\">\r\n          {{'app.analysis.day-visits' | translate}}\r\n          <span class=\"ml-sm\">1,234</span>\r\n        </p>\r\n      </ng-template>\r\n    </g2-card>\r\n  </div>\r\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"12\" nzLg=\"6\">\r\n    <g2-card [title]=\"'app.analysis.payments' | translate\" total=\"6,560\" contentHeight=\"46px\" [action]=\"action3\"\r\n      [footer]=\"footer3\">\r\n      <ng-template #action3>\r\n        <nz-tooltip [nzTitle]=\"'app.analysis.introduce' | translate\">\r\n          <i nz-tooltip nz-icon type=\"info-circle\"></i>\r\n        </nz-tooltip>\r\n      </ng-template>\r\n      <g2-mini-bar height=\"46\" [data]=\"data.visitData\"></g2-mini-bar>\r\n      <ng-template #footer3>\r\n        <p class=\"text-truncate mb0\">\r\n          {{'app.analysis.conversion-rate' | translate}}\r\n          <span class=\"ml-sm\">60%</span>\r\n        </p>\r\n      </ng-template>\r\n    </g2-card>\r\n  </div>\r\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"12\" nzLg=\"6\">\r\n    <g2-card [title]=\"'app.analysis.operational-effect' | translate\" total=\"78%\" contentHeight=\"46px\" [action]=\"action4\"\r\n      [footer]=\"footer4\">\r\n      <ng-template #action4>\r\n        <nz-tooltip [nzTitle]=\"'app.analysis.introduce' | translate\">\r\n          <i nz-tooltip nz-icon type=\"info-circle\"></i>\r\n        </nz-tooltip>\r\n      </ng-template>\r\n      <g2-mini-progress height=\"46\" percent=\"78\" strokeWidth=\"8\" target=\"80\" color=\"#13C2C2\"></g2-mini-progress>\r\n      <ng-template #footer4>\r\n        <div class=\"d-flex justify-content-between text-truncate\">\r\n          <trend flag=\"up\">\r\n            {{'app.analysis.week' | translate}}\r\n            <span class=\"pl-sm\">12%</span>\r\n          </trend>\r\n          <trend flag=\"down\">\r\n            {{'app.analysis.day' | translate}}\r\n            <span class=\"pl-sm\">11%</span>\r\n          </trend>\r\n        </div>\r\n      </ng-template>\r\n    </g2-card>\r\n  </div>\r\n</div>\r\n<nz-card [nzLoading]=\"loading\" [nzBordered]=\"false\" class=\"ant-card__body-nopadding sales-card\">\r\n  <nz-tabset [nzTabBarExtraContent]=\"extraTemplate\">\r\n    <nz-tab [nzTitle]=\"'app.analysis.sales' | translate\">\r\n      <div nz-row>\r\n        <div nz-col nzXs=\"24\" nzSm=\"24\" nzMd=\"12\" nzLg=\"16\">\r\n          <div class=\"bar\">\r\n            <g2-bar height=\"295\" [title]=\"'app.analysis.sales-trend' | translate\" [data]=\"data.salesData\"></g2-bar>\r\n          </div>\r\n        </div>\r\n        <div nz-col nzXs=\"24\" nzSm=\"24\" nzMd=\"12\" nzLg=\"8\">\r\n          <div class=\"rank\">\r\n            <h4 class=\"ranking-title\">{{ 'app.analysis.sales-ranking' | translate}}</h4>\r\n            <ul class=\"rank-list\">\r\n              <li *ngFor=\"let i of rankingListData; let idx = index\">\r\n                <span class=\"number\" [ngClass]=\"{'active': idx < 3}\">{{idx+1}}</span>\r\n                <span class=\"title\">{{i.title}}</span>\r\n                <span class=\"value\">{{i.total | number: '3.0'}}</span>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </nz-tab>\r\n    <nz-tab [nzTitle]=\"'app.analysis.visits' | translate\">\r\n      <div nz-row>\r\n        <div nz-col nzXs=\"24\" nzSm=\"24\" nzMd=\"12\" nzLg=\"16\">\r\n          <div class=\"bar\">\r\n            <g2-bar height=\"295\" [title]=\"'app.analysis.visits-trend' | translate\" [data]=\"data.salesData\"></g2-bar>\r\n          </div>\r\n        </div>\r\n        <div nz-col nzXs=\"24\" nzSm=\"24\" nzMd=\"12\" nzLg=\"8\">\r\n          <div class=\"rank\">\r\n            <h4 class=\"ranking-title\">{{ 'app.analysis.visits-ranking' | translate}}</h4>\r\n            <ul class=\"rank-list\">\r\n              <li *ngFor=\"let i of rankingListData; let idx = index\">\r\n                <span class=\"number\" [ngClass]=\"{'active': idx < 3}\">{{idx+1}}</span>\r\n                <span class=\"title\">{{i.title}}</span>\r\n                <span class=\"value\">{{i.total | number: '3.0'}}</span>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </nz-tab>\r\n    <ng-template #extraTemplate>\r\n      <div class=\"sales-extra-wrap\">\r\n        <div class=\"sales-extra\">\r\n          <a (click)=\"setDate('today')\">{{'app.analysis.all-day' | translate}}</a>\r\n          <a (click)=\"setDate('week')\">{{'app.analysis.all-week' | translate}}</a>\r\n          <a (click)=\"setDate('month')\">{{'app.analysis.all-month' | translate}}</a>\r\n          <a (click)=\"setDate('year')\">{{'app.analysis.all-year' | translate}}</a>\r\n        </div>\r\n        <nz-range-picker [(ngModel)]=\"date_range\" style=\"display:inline-block; width: 256px;\"></nz-range-picker>\r\n      </div>\r\n    </ng-template>\r\n  </nz-tabset>\r\n</nz-card>\r\n<div nz-row [nzGutter]=\"24\">\r\n  <div nz-col nzXs=\"24\" nzSm=\"24\" nzMd=\"24\" nzLg=\"12\">\r\n    <nz-card [nzLoading]=\"loading\" [nzBordered]=\"false\" [nzTitle]=\"'app.analysis.online-top-search' | translate\" [nzExtra]=\"extraOp\" class=\"mb-0\">\r\n      <ng-template #extraOp>\r\n        <nz-dropdown class=\"icon-group\">\r\n          <i nz-dropdown nz-icon type=\"ellipsis\"></i>\r\n          <ul nz-menu>\r\n            <li nz-menu-item>操作一</li>\r\n            <li nz-menu-item>操作二</li>\r\n          </ul>\r\n        </nz-dropdown>\r\n      </ng-template>\r\n      <div nz-row [nzGutter]=\"64\">\r\n        <div nz-col nzXs=\"24\" nzSm=\"12\" class=\"mb-md\">\r\n          <number-info total=\"12,321\" subTotal=\"17.1\" status=\"up\" [subTitle]=\"subTitle\">\r\n            <ng-template #subTitle>\r\n              {{'app.analysis.search-users' | translate}}\r\n              <nz-tooltip [nzTitle]=\"'app.analysis.introduce' | translate\">\r\n                <i nz-tooltip nz-icon type=\"info-circle\" class=\"ml-sm\"></i>\r\n              </nz-tooltip>\r\n            </ng-template>\r\n          </number-info>\r\n          <g2-mini-area [line]=\"true\" height=\"45\" [data]=\"data.visitData2\"></g2-mini-area>\r\n        </div>\r\n        <div nz-col nzXs=\"24\" nzSm=\"12\" class=\"mb-md\">\r\n          <number-info [subTitle]=\"'app.analysis.per-capita-search' | translate\" total=\"2.7\" subTotal=\"26.2\" status=\"down\"></number-info>\r\n          <g2-mini-area [line]=\"true\" height=\"45\" [data]=\"data.visitData2\"></g2-mini-area>\r\n        </div>\r\n      </div>\r\n      <st [data]=\"data.searchData\" [columns]=\"searchColumn\" size=\"small\" ps=\"5\" [page]=\"{toTopInChange:false}\">\r\n        <ng-template st-row=\"range\" let-i>\r\n          <trend [flag]=\"i.status === 1 ? 'down' : 'up'\">\r\n            <span>{{i.range}}%</span>\r\n          </trend>\r\n        </ng-template>\r\n      </st>\r\n    </nz-card>\r\n  </div>\r\n  <div nz-col nzXs=\"24\" nzSm=\"24\" nzMd=\"24\" nzLg=\"12\">\r\n    <nz-card [nzLoading]=\"loading\" [nzBordered]=\"false\" [nzTitle]=\"'app.analysis.the-proportion-of-sales' | translate\" [nzBodyStyle]=\"{'padding.px': 24}\" [nzExtra]=\"extra\"\r\n      class=\"sales-card mb-0\" style=\"min-height: 502.5px\">\r\n      <ng-template #extra>\r\n        <div class=\"sales-card-extra\">\r\n          <nz-dropdown class=\"icon-group\">\r\n            <i nz-dropdown nz-icon type=\"ellipsis\"></i>\r\n            <ul nz-menu>\r\n              <li nz-menu-item>操作一</li>\r\n              <li nz-menu-item>操作二</li>\r\n            </ul>\r\n          </nz-dropdown>\r\n          <div class=\"sales-type-radio\">\r\n            <nz-radio-group [(ngModel)]=\"salesType\" (ngModelChange)=\"changeSaleType()\">\r\n              <label nz-radio-button [nzValue]=\"'all'\">\r\n                {{ 'app.analysis.channel.all' | translate }}\r\n              </label>\r\n              <label nz-radio-button [nzValue]=\"'online'\">\r\n                {{ 'app.analysis.channel.online' | translate }}\r\n              </label>\r\n              <label nz-radio-button [nzValue]=\"'offline'\">\r\n                {{ 'app.analysis.channel.stores' | translate }}\r\n              </label>\r\n            </nz-radio-group>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n      <h4 class=\"margin:8px 0 32px 0;\">{{'app.analysis.sales' | translate}}</h4>\r\n      <g2-pie [hasLegend]=\"true\" [subTitle]=\"'app.analysis.sales' | translate\" [height]=\"248\" [lineWidth]=\"4\" [total]=\"salesTotal\" [data]=\"salesPieData\"\r\n        [valueFormat]=\"handlePieValueFormat\">\r\n      </g2-pie>\r\n    </nz-card>\r\n  </div>\r\n</div>\r\n<nz-card [nzLoading]=\"loading\" [nzBordered]=\"false\" [nzBodyStyle]=\"{'padding': '0 0 32px'}\" class=\"offline-card mt-lg\">\r\n  <nz-tabset [(nzSelectedIndex)]=\"_activeTab\" (nzSelectChange)=\"_tabChange($event)\">\r\n    <nz-tab *ngFor=\"let tab of data.offlineData; let i = index;\" [nzTitle]=\"nzTabHeading\">\r\n      <ng-template #nzTabHeading>\r\n        <div nz-row [nzGutter]=\"8\" style=\"width: 138px; margin: 8px 0;\">\r\n          <div nz-col [nzSpan]=\"12\">\r\n            <number-info [title]=\"tab.name\" [subTitle]=\"'app.analysis.conversion-rate' | translate\" gap=\"2\" [total]=\"(tab.cvr * 100) + '%'\" [theme]=\"i !== _activeTab && 'light'\"></number-info>\r\n          </div>\r\n          <div nz-col [nzSpan]=\"12\" style=\"padding-top: 36px;\">\r\n            <g2-pie [animate]=\"false\" [color]=\"i !== _activeTab && '#BDE4FF'\"\r\n              [inner]=\"0.55\" [tooltip]=\"false\"\r\n              [padding]=\"[0, 0, 0, 0]\" [percent]=\"tab.cvr * 100\" [height]=\"64\">\r\n            </g2-pie>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n      <div class=\"px-lg\">\r\n        <g2-timeline [data]=\"tab.chart\" [titleMap]=\"titleMap\"></g2-timeline>\r\n      </div>\r\n    </nz-tab>\r\n  </nz-tabset>\r\n</nz-card>\r\n"

/***/ }),

/***/ "./src/app/routes/dashboard/analysis/analysis.component.less":
/*!*******************************************************************!*\
  !*** ./src/app/routes/dashboard/analysis/analysis.component.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n:host ::ng-deep .icon-group i {\n  transition: color 0.32s;\n  color: rgba(0, 0, 0, 0.45);\n  cursor: pointer;\n  margin-left: 16px;\n}\n:host ::ng-deep .icon-group i:hover {\n  color: rgba(0, 0, 0, 0.65);\n}\n:host ::ng-deep .rank-list {\n  margin: 25px 0 0;\n  padding: 0;\n  list-style: none;\n}\n:host ::ng-deep .rank-list li {\n  zoom: 1;\n  margin-top: 16px;\n  display: flex;\n  align-items: center;\n}\n:host ::ng-deep .rank-list li:before,\n:host ::ng-deep .rank-list li:after {\n  content: \"\";\n  display: table;\n}\n:host ::ng-deep .rank-list li:after {\n  clear: both;\n}\n:host ::ng-deep .rank-list li span {\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  line-height: 22px;\n}\n:host ::ng-deep .rank-list li .number {\n  background-color: #f5f5f5;\n  border-radius: 20px;\n  display: inline-block;\n  font-size: 12px;\n  font-weight: 600;\n  margin-right: 16px;\n  height: 20px;\n  line-height: 20px;\n  width: 20px;\n  text-align: center;\n  margin-top: 1.5px;\n}\n:host ::ng-deep .rank-list li .number.active {\n  background-color: #314659;\n  color: #fff;\n}\n:host ::ng-deep .rank-list li .title {\n  flex: 1;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin-right: 8px;\n}\n:host ::ng-deep .sales-extra {\n  display: inline-block;\n  margin-right: 24px;\n}\n:host ::ng-deep .sales-extra a {\n  color: rgba(0, 0, 0, 0.65);\n  margin-left: 24px;\n}\n:host ::ng-deep .sales-extra a:hover {\n  color: #1890ff;\n}\n:host ::ng-deep .sales-extra a.currentDate {\n  color: #1890ff;\n}\n:host ::ng-deep .sales-card .bar {\n  padding: 0 0 32px 32px;\n}\n:host ::ng-deep .sales-card .rank {\n  padding: 0 32px 32px 72px;\n}\n:host ::ng-deep .sales-card .ant-tabs-bar {\n  padding-left: 16px;\n}\n:host ::ng-deep .sales-card .ant-tabs-bar .ant-tabs-nav .ant-tabs-tab {\n  padding-top: 16px;\n  padding-bottom: 14px;\n  line-height: 24px;\n}\n:host ::ng-deep .sales-card .ant-tabs-extra-content {\n  padding-right: 24px;\n  line-height: 55px;\n}\n:host ::ng-deep .sales-card .ant-card-head {\n  position: relative;\n}\n:host ::ng-deep .sales-card .ant-card-head-title {\n  align-items: normal;\n}\n:host ::ng-deep .sales-card-extra {\n  height: 68px;\n}\n:host ::ng-deep .sales-type-radio {\n  position: absolute;\n  left: 24px;\n  bottom: 15px;\n}\n:host ::ng-deep .offline-card .ant-tabs-ink-bar {\n  bottom: auto;\n}\n:host ::ng-deep .offline-card .ant-tabs-bar {\n  border-bottom: none;\n}\n:host ::ng-deep .offline-card .ant-tabs-nav-container-scrolling {\n  padding-left: 40px;\n  padding-right: 40px;\n}\n:host ::ng-deep .offline-card .ant-tabs-tab-prev-icon:before {\n  position: relative;\n  left: 6px;\n}\n:host ::ng-deep .offline-card .ant-tabs-tab-next-icon:before {\n  position: relative;\n  right: 6px;\n}\n:host ::ng-deep .offline-card .ant-tabs-tab-active h4 {\n  color: #1890ff;\n}\n:host ::ng-deep .trend-text {\n  margin-left: 8px;\n  color: rgba(0, 0, 0, 0.85);\n}\n@media screen and (max-width: 992px) {\n  :host ::ng-deep .sales-extra {\n    display: none;\n  }\n  :host ::ng-deep .rank-list li span:first-child {\n    margin-right: 8px;\n  }\n}\n@media screen and (max-width: 768px) {\n  :host ::ng-deep .rank-title {\n    margin-top: 16px;\n  }\n  :host ::ng-deep .sales-card .bar {\n    padding: 16px;\n  }\n}\n@media screen and (max-width: 576px) {\n  :host ::ng-deep .sales-extra-wrap {\n    display: none;\n  }\n  :host ::ng-deep .sales-card .ant-tabs-content {\n    padding-top: 30px;\n  }\n}\n:host ::ng-deep .ant-table-pagination {\n  margin-bottom: 0;\n}\n:host ::ng-deep .g2-pie__legend-block .g2-pie__chart {\n  margin: 0;\n}\n"

/***/ }),

/***/ "./src/app/routes/dashboard/analysis/analysis.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/routes/dashboard/analysis/analysis.component.ts ***!
  \*****************************************************************/
/*! exports provided: DashboardAnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardAnalysisComponent", function() { return DashboardAnalysisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/util */ "./node_modules/@delon/util/fesm5/util.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _core_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/i18n/i18n.service */ "./src/app/core/i18n/i18n.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardAnalysisComponent = /** @class */ (function () {
    function DashboardAnalysisComponent(http, msg, i18n, cd) {
        var _this = this;
        this.http = http;
        this.msg = msg;
        this.i18n = i18n;
        this.cd = cd;
        this.data = {
            salesData: [],
            offlineData: [],
        };
        this.loading = true;
        this.date_range = [];
        this.rankingListData = Array(7)
            .fill({})
            .map(function (item, i) {
            return {
                title: _this.i18n.fanyi('app.analysis.test', { no: i }),
                total: 323234,
            };
        });
        this.titleMap = {
            y1: this.i18n.fanyi('app.analysis.traffic'),
            y2: this.i18n.fanyi('app.analysis.payments'),
        };
        this.searchColumn = [
            { title: '排名', i18n: 'app.analysis.table.rank', index: 'index' },
            {
                title: '搜索关键词',
                i18n: 'app.analysis.table.search-keyword',
                index: 'keyword',
                click: function (item) { return _this.msg.success(item.keyword); },
            },
            {
                type: 'number',
                title: '用户数',
                i18n: 'app.analysis.table.users',
                index: 'count',
                sorter: function (a, b) { return a.count - b.count; },
            },
            {
                type: 'number',
                title: '周涨幅',
                i18n: 'app.analysis.table.weekly-range',
                index: 'range',
                render: 'range',
                sorter: function (a, b) { return a.range - b.range; },
            },
        ];
        this.salesType = 'all';
        this.salesTotal = 0;
        this._activeTab = 0;
    }
    DashboardAnalysisComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/chart').subscribe(function (res) {
            console.log("res is " + JSON.stringify(res));
            res.offlineData.forEach(function (item) {
                item.chart = Object.assign([], res.offlineChartData);
            });
            _this.data = res;
            _this.loading = false;
            _this.changeSaleType();
        });
    };
    DashboardAnalysisComponent.prototype.setDate = function (type) {
        var _this = this;
        this.date_range = Object(_delon_util__WEBPACK_IMPORTED_MODULE_2__["getTimeDistance"])(type);
        setTimeout(function () { return _this.cd.detectChanges(); });
    };
    DashboardAnalysisComponent.prototype.changeSaleType = function () {
        this.salesPieData =
            this.salesType === 'all'
                ? this.data.salesTypeData
                : this.salesType === 'online'
                    ? this.data.salesTypeDataOnline
                    : this.data.salesTypeDataOffline;
        if (this.salesPieData) {
            this.salesTotal = this.salesPieData.reduce(function (pre, now) { return now.y + pre; }, 0);
        }
        this.cd.detectChanges();
    };
    DashboardAnalysisComponent.prototype.handlePieValueFormat = function (value) {
        return Object(_delon_util__WEBPACK_IMPORTED_MODULE_2__["yuan"])(value);
    };
    DashboardAnalysisComponent.prototype._tabChange = function (value) {
    };
    DashboardAnalysisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-analysis',
            template: __webpack_require__(/*! ./analysis.component.html */ "./src/app/routes/dashboard/analysis/analysis.component.html"),
            styles: [__webpack_require__(/*! ./analysis.component.less */ "./src/app/routes/dashboard/analysis/analysis.component.less")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        }),
        __metadata("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_3__["_HttpClient"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"],
            _core_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_4__["I18NService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], DashboardAnalysisComponent);
    return DashboardAnalysisComponent;
}());



/***/ }),

/***/ "./src/app/routes/dashboard/monitor/monitor.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/routes/dashboard/monitor/monitor.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row [nzGutter]=\"24\" class=\"pt-lg\">\n  <div nz-col nzXs=\"24\" nzSm=\"24\" nzMd=\"24\" nzLg=\"18\">\n    <nz-card [nzTitle]=\"'app.monitor.trading-activity' | translate\" [nzBordered]=\"false\" class=\"mb-lg\">\n      <div nz-row>\n        <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\">\n          <number-info [subTitle]=\"'app.monitor.total-transactions' | translate\" [total]=\"'124,543,233'\" suffix=\"元\"></number-info>\n        </div>\n        <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\">\n          <number-info [subTitle]=\"'app.monitor.sales-target' | translate\" [total]=\"'92%'\"></number-info>\n        </div>\n        <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\">\n          <number-info [subTitle]=\"'app.monitor.remaining-time' | translate\" [total]=\"lastTotalTime\">\n            <ng-template #lastTotalTime>\n              <count-down [target]=\"30\"></count-down>\n            </ng-template>\n          </number-info>\n        </div>\n        <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\">\n          <number-info [subTitle]=\"'app.monitor.total-transactions-per-second' | translate\" [total]=\"234\" suffix=\"元\"></number-info>\n        </div>\n      </div>\n      <div class=\"map-chart\">\n        <nz-tooltip [nzTitle]=\"'app.monitor.waiting-for-implementation' | translate\">\n          <img nz-tooltip nzPlacement=\"top\" src=\"https://gw.alipayobjects.com/zos/rmsportal/HBWnDEUXCnGnGrRfrpKa.png\" alt=\"map\" />\n        </nz-tooltip>\n      </div>\n    </nz-card>\n  </div>\n  <div nz-col nzXs=\"24\" nzSm=\"24\" nzMd=\"24\" nzLg=\"6\">\n    <nz-card [nzTitle]=\"'app.monitor.activity-forecast' | translate\" [nzBordered]=\"false\" class=\"mb-lg\">\n      <div class=\"active-chart\">\n        <number-info subTitle=\"目标评估\" total=\"有望达到预期\"></number-info>\n        <g2-mini-area [animate]=\"false\" [line]=\"true\" [borderWidth]=\"2\" [height]=\"84\" [yAxis]=\"activeYAxis\" [data]=\"activeData\"></g2-mini-area>\n        <ng-container *ngIf=\"activeData?.length > 0\">\n          <div class=\"active-grid\">\n            <p>{{activeStat.max}} 亿元</p>\n            <p>{{activeStat.min}} 亿元</p>\n          </div>\n          <div class=\"active-legend\">\n            <span>00:00</span>\n            <span>{{activeStat.t1}}</span>\n            <span>{{activeStat.t2}}</span>\n          </div>\n        </ng-container>\n      </div>\n    </nz-card>\n    <nz-card [nzTitle]=\"'app.monitor.efficiency' | translate\" [nzBordered]=\"false\" [nzBodyStyle]=\"{'text-align': 'center'}\" class=\"mb-lg\">\n      <g2-gauge [title]=\"'app.monitor.ratio' | translate\" [height]=\"180\" [percent]=\"87\" [format]=\"couponFormat\"></g2-gauge>\n    </nz-card>\n  </div>\n</div>\n<div nz-row [nzGutter]=\"24\">\n  <div nz-col nzXs=\"24\" nzSm=\"24\" nzLg=\"12\" class=\"mb-lg\">\n    <nz-card [nzTitle]=\"'app.monitor.proportion-per-category' | translate\" [nzBordered]=\"false\" class=\"pie-card\">\n      <div nz-row [nzGutter]=\"4\" style=\"padding:16px 0\">\n        <div nz-col [nzSpan]=\"8\">\n          <g2-pie [animate]=\"false\" [percent]=\"28\" [subTitle]=\"'app.monitor.fast-food' | translate\" total=\"28%\" [height]=\"128\" [lineWidth]=\"2\"></g2-pie>\n        </div>\n        <div nz-col [nzSpan]=\"8\">\n          <g2-pie [animate]=\"false\" color=\"#5DDECF\" [percent]=\"22\" [subTitle]=\"'app.monitor.western-food' | translate\" total=\"22%\" [height]=\"128\" [lineWidth]=\"2\"></g2-pie>\n        </div>\n        <div nz-col [nzSpan]=\"8\">\n          <g2-pie [animate]=\"false\" color=\"#2FC25B\" [percent]=\"32\" [subTitle]=\"'app.monitor.hot-pot' | translate\" total=\"32%\" [height]=\"128\" [lineWidth]=\"2\"></g2-pie>\n        </div>\n      </div>\n    </nz-card>\n  </div>\n  <div nz-col nzXs=\"24\" nzSm=\"24\" nzLg=\"6\" class=\"mb-lg\">\n    <nz-card [nzTitle]=\"'app.monitor.popular-searches' | translate\" [nzBordered]=\"false\" [nzBodyStyle]=\"{'overflow': 'hidden'}\">\n      <g2-tag-cloud [data]=\"tags\" [height]=\"165\"></g2-tag-cloud>\n    </nz-card>\n  </div>\n  <div nz-col nzXs=\"24\" nzSm=\"24\" nzLg=\"6\" class=\"mb-lg\">\n    <nz-card [nzTitle]=\"'app.monitor.resource-surplus' | translate\" [nzBordered]=\"false\" [nzBodyStyle]=\"{'overflow': 'hidden'}\">\n      <g2-water-wave [title]=\"'app.monitor.fund-surplus' | translate\" [percent]=\"34\" [height]=\"165\"></g2-water-wave>\n    </nz-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/dashboard/monitor/monitor.component.less":
/*!*****************************************************************!*\
  !*** ./src/app/routes/dashboard/monitor/monitor.component.less ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n:host ::ng-deep .map-chart {\n  padding-top: 24px;\n  height: 457px;\n  text-align: center;\n}\n:host ::ng-deep .map-chart img {\n  display: inline-block;\n  max-width: 100%;\n  max-height: 437px;\n}\n:host ::ng-deep .pie-card .pie-stat {\n  font-size: 24px !important;\n}\n:host ::ng-deep .active-chart {\n  position: relative;\n}\n:host ::ng-deep .active-chart g2-mini-area {\n  margin-top: 32px;\n}\n:host ::ng-deep .active-chart .active-grid p {\n  position: absolute;\n  top: 80px;\n}\n:host ::ng-deep .active-chart .active-grid p:last-child {\n  top: 115px;\n}\n:host ::ng-deep .active-chart .active-legend {\n  position: relative;\n  font-size: 0;\n  margin-top: 8px;\n  height: 20px;\n  line-height: 20px;\n}\n:host ::ng-deep .active-chart .active-legend span {\n  display: inline-block;\n  font-size: 12px;\n  text-align: center;\n  width: 33.33%;\n}\n:host ::ng-deep .active-chart .active-legend span:first-child {\n  text-align: left;\n}\n:host ::ng-deep .active-chart .active-legend span:last-child {\n  text-align: right;\n}\n@media screen and (max-width: 992px) {\n  :host ::ng-deep .map-chart {\n    height: auto;\n  }\n}\n"

/***/ }),

/***/ "./src/app/routes/dashboard/monitor/monitor.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/routes/dashboard/monitor/monitor.component.ts ***!
  \***************************************************************/
/*! exports provided: DashboardMonitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardMonitorComponent", function() { return DashboardMonitorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardMonitorComponent = /** @class */ (function () {
    function DashboardMonitorComponent(http, msg, cd) {
        this.http = http;
        this.msg = msg;
        this.cd = cd;
        this.data = {};
        this.tags = [];
        this.loading = true;
        this.q = {
            start: null,
            end: null,
        };
        this.activeYAxis = {
            tickCount: 3,
            tickLine: false,
            labels: false,
            title: false,
            line: false,
        };
        this.activeData = [];
        this.activeStat = {
            max: 0,
            min: 0,
            t1: '',
            t2: '',
        };
    }
    DashboardMonitorComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["zip"])(this.http.get('/chart'), this.http.get('/chart/tags')).subscribe(function (_a) {
            var res = _a[0], tags = _a[1];
            console.log("tags length " + (Math.floor(Math.random() * tags.list.length) + 1));
            _this.data = res;
            tags.list[Math.floor(Math.random() * tags.list.length) + 1].value = 1000;
            _this.tags = tags.list;
            _this.loading = false;
            _this.cd.detectChanges();
        });
        // active chart
        this.genActiveData();
        this.activeTime$ = setInterval(function () { return _this.genActiveData(); }, 1000 * 2);
    };
    DashboardMonitorComponent.prototype.genActiveData = function () {
        var activeData = [];
        for (var i = 0; i < 24; i += 1) {
            activeData.push({
                x: i.toString().padStart(2, '0') + ":00",
                y: i * 50 + Math.floor(Math.random() * 200),
            });
        }
        this.activeData = activeData;
        // stat
        this.activeStat.max = activeData.slice().sort()[activeData.length - 1].y + 200;
        this.activeStat.min = activeData.slice().sort()[Math.floor(activeData.length / 2)].y;
        this.activeStat.t1 = activeData[Math.floor(activeData.length / 2)].x;
        this.activeStat.t2 = activeData[activeData.length - 1].x;
        this.cd.detectChanges();
    };
    // endregion
    DashboardMonitorComponent.prototype.couponFormat = function (val) {
        switch (parseInt(val, 10)) {
            case 20:
                return '差';
            case 40:
                return '中';
            case 60:
                return '良';
            case 80:
                return '优';
            default:
                return '';
        }
    };
    DashboardMonitorComponent.prototype.ngOnDestroy = function () {
        if (this.activeTime$)
            clearInterval(this.activeTime$);
    };
    DashboardMonitorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-monitor',
            template: __webpack_require__(/*! ./monitor.component.html */ "./src/app/routes/dashboard/monitor/monitor.component.html"),
            styles: [__webpack_require__(/*! ./monitor.component.less */ "./src/app/routes/dashboard/monitor/monitor.component.less")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        }),
        __metadata("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_3__["_HttpClient"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], DashboardMonitorComponent);
    return DashboardMonitorComponent;
}());



/***/ }),

/***/ "./src/app/routes/dashboard/v1/v1.component.html":
/*!*******************************************************!*\
  !*** ./src/app/routes/dashboard/v1/v1.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__content-title\">\r\n  <h1>\r\n    Dashboard\r\n    <small>Welcome !</small>\r\n  </h1>\r\n</div>\r\n<quick-menu>\r\n  <nz-list [nzBordered]=\"false\" [nzSplit]=\"false\">\r\n    <nz-list-item>\r\n      <a routerLink=\"/\">Home</a>\r\n    </nz-list-item>\r\n    <nz-list-item>\r\n      <a routerLink=\"/widgets\">Widgets</a>\r\n    </nz-list-item>\r\n    <nz-list-item>\r\n      <a routerLink=\"/style/typography\">typography</a>\r\n    </nz-list-item>\r\n    <nz-list-item>\r\n      <a routerLink=\"/style/gridmasonry\">gridmasonry</a>\r\n    </nz-list-item>\r\n    <nz-list-item>\r\n      <a routerLink=\"/pro/result/success\">success result</a>\r\n    </nz-list-item>\r\n  </nz-list>\r\n</quick-menu>\r\n<div nz-row nzGutter=\"16\">\r\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\" class=\"mb-md\">\r\n    <div nz-row nzType=\"flex\" nzAlign=\"middle\" class=\"bg-primary rounded-md\">\r\n      <div nz-col nzSpan=\"12\" class=\"p-md text-white\">\r\n        <div class=\"h2 mt0\">123,456</div>\r\n        <p class=\"text-nowrap mb0\">Website Traffics</p>\r\n      </div>\r\n      <div nz-col nzSpan=\"12\">\r\n        <g2-mini-bar height=\"35\" color=\"#fff\" borderWidth=\"3\" [padding]=\"[36, 30, 30, 30]\" [data]=\"webSite\"></g2-mini-bar>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\" class=\"mb-md\">\r\n    <div nz-row nzType=\"flex\" nzAlign=\"middle\" class=\"bg-success rounded-md\">\r\n      <div nz-col nzSpan=\"12\" class=\"p-md text-white\">\r\n        <div class=\"h2 mt0\">234,567K</div>\r\n        <p class=\"text-nowrap mb0\">Website Impressions</p>\r\n      </div>\r\n      <div nz-col nzSpan=\"12\">\r\n        <g2-mini-bar height=\"35\" color=\"#fff\" borderWidth=\"3\" [padding]=\"[36, 30, 30, 30]\" [data]=\"webSite\"></g2-mini-bar>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\" class=\"mb-md\">\r\n    <div nz-row nzType=\"flex\" nzAlign=\"middle\" class=\"bg-orange rounded-md\">\r\n      <div nz-col nzSpan=\"12\" class=\"p-md text-white\">\r\n        <div class=\"h2 mt0\">$458,778</div>\r\n        <p class=\"text-nowrap mb0\">Total Sales</p>\r\n      </div>\r\n      <div nz-col nzSpan=\"12\">\r\n        <g2-mini-bar height=\"35\" color=\"#fff\" borderWidth=\"3\" [padding]=\"[36, 30, 30, 30]\" [data]=\"webSite\"></g2-mini-bar>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\" class=\"mb-md\">\r\n    <div nz-row nzType=\"flex\" nzAlign=\"middle\" class=\"bg-magenta rounded-md\">\r\n      <div nz-col nzSpan=\"12\" class=\"p-md text-white\">\r\n        <div class=\"h2 mt0\">456</div>\r\n        <p class=\"text-nowrap mb0\">Support Tickets</p>\r\n      </div>\r\n      <div nz-col nzSpan=\"12\">\r\n        <g2-mini-bar height=\"35\" color=\"#fff\" borderWidth=\"3\" [padding]=\"[36, 30, 30, 30]\" [data]=\"webSite\"></g2-mini-bar>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div nz-row nzGutter=\"16\">\r\n  <div nz-col nzXs=\"24\" nzMd=\"12\">\r\n    <nz-card [nzBordered]=\"false\" [nzTitle]=\"salesTitle\">\r\n      <ng-template #salesTitle>\r\n        Sales Statistics\r\n        <small class=\"text-sm font-weight-normal\">Business Expectations & Retail Sales Statistics</small>\r\n      </ng-template>\r\n      <g2-bar height=\"275\" [data]=\"salesData\"></g2-bar>\r\n    </nz-card>\r\n  </div>\r\n  <div nz-col nzXs=\"24\" nzMd=\"12\">\r\n    <nz-card [nzTitle]=\"growthTitle\" [nzBordered]=\"false\">\r\n      <ng-template #growthTitle>\r\n        Growth Rate\r\n        <small class=\"text-sm font-weight-normal\">Business Expectations & Retail Sales Statistics</small>\r\n      </ng-template>\r\n      <g2-timeline [data]=\"offlineChartData\" [height]=\"239\" [padding]=\"[0, 0, 0, 0]\" [titleMap]=\"{ y1: '客流量', y2: '支付笔数' }\"></g2-timeline>\r\n    </nz-card>\r\n  </div>\r\n</div>\r\n<div nz-row nzGutter=\"16\">\r\n  <div nz-col nzXs=\"24\" nzMd=\"12\">\r\n    <nz-card [nzBordered]=\"false\" [nzCover]=\"coverTpl\">\r\n      <ng-template #coverTpl>\r\n        <img class=\"img\" src=\"//os.alipayobjects.com/rmsportal/GhjqstwSgxBXrZS.png\">\r\n      </ng-template>\r\n      <h3>ANT DESIGN</h3>\r\n      <p class=\"text-grey\">A UI Design Language</p>\r\n      <ol class=\"list-styled text-lg pt-md\">\r\n        <li>Designed by experienced team, and showcase dozens of inspiring projects.</li>\r\n        <li>Provide solutions for usual problems that may be encountered while developing enterprise-like complex UIs.</li>\r\n        <li>Dozens of flexible and practical reusable components that increase your productivity.</li>\r\n      </ol>\r\n      <p class=\"pt-md mb0\">\r\n        <a class=\"text-grey\" href=\"//ng.ant.design\" target=\"_blank\">View Site...</a>\r\n      </p>\r\n    </nz-card>\r\n  </div>\r\n  <div nz-col nzXs=\"24\" nzMd=\"12\">\r\n    <nz-card [nzTitle]=\"recentTitle\" [nzBordered]=\"false\" class=\"ant-card__body-nopadding\">\r\n      <ng-template #recentTitle>\r\n        Recent Posts\r\n        <small class=\"text-sm font-weight-normal\">Venenatis portauam Inceptos ameteiam</small>\r\n      </ng-template>\r\n      <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\" *ngFor=\"let item of todoData\">\r\n        <div nz-col [nzSpan]=\"4\" class=\"text-center\">\r\n          <nz-avatar [nzSrc]=\"'./assets/tmp/img/' + item.avatar + '.png'\"></nz-avatar>\r\n        </div>\r\n        <div nz-col [nzSpan]=\"20\">\r\n          <strong>{{item.name}}</strong>\r\n          <p class=\"mb0\">{{item.content}}</p>\r\n        </div>\r\n      </div>\r\n    </nz-card>\r\n  </div>\r\n  <div nz-col nzXs=\"24\" nzMd=\"12\">\r\n    <nz-card nzTitle=\"Todo lists\" [nzBordered]=\"false\" class=\"ant-card__body-nopadding\">\r\n      <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\" *ngFor=\"let item of todoData\">\r\n        <div nz-col [nzSpan]=\"4\" class=\"text-center\">\r\n          <nz-avatar [nzSrc]=\"'./assets/tmp/img/' + item.avatar + '.png'\"></nz-avatar>\r\n        </div>\r\n        <div nz-col [nzSpan]=\"18\">\r\n          <strong>{{item.name}}</strong>\r\n          <p [class.text-deleted]=\"item.completed\" class=\"mb0\">{{item.content}}</p>\r\n        </div>\r\n        <div nz-col [nzSpan]=\"2\" class=\"text-right pr-md\">\r\n          <nz-dropdown [nzPlacement]=\"'topRight'\">\r\n            <i nz-dropdown nz-icon type=\"ellipsis\" class=\"rotate-90\"></i>\r\n            <ul nz-menu>\r\n              <li nz-menu-item *ngIf=\"item.completed\" (click)=\"item.completed=false\">Active</li>\r\n              <li nz-menu-item *ngIf=\"!item.completed\" (click)=\"item.completed=true\">Completed</li>\r\n              <li nz-menu-item (click)=\"todoData.splice(todoData.indexOf(item), 1)\">Delted</li>\r\n            </ul>\r\n          </nz-dropdown>\r\n        </div>\r\n      </div>\r\n    </nz-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/dashboard/v1/v1.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/routes/dashboard/v1/v1.component.ts ***!
  \*****************************************************/
/*! exports provided: DashboardV1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardV1Component", function() { return DashboardV1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardV1Component = /** @class */ (function () {
    function DashboardV1Component(http, cd) {
        this.http = http;
        this.cd = cd;
        this.todoData = [
            {
                completed: true,
                avatar: '1',
                name: '苏先生',
                content: "\u8BF7\u544A\u8BC9\u6211\uFF0C\u6211\u5E94\u8BE5\u8BF4\u70B9\u4EC0\u4E48\u597D\uFF1F",
            },
            {
                completed: false,
                avatar: '2',
                name: 'はなさき',
                content: "\u30CF\u30EB\u30AB\u30BD\u30E9\u30C8\u30AD\u30D8\u30C0\u30C4\u30D2\u30AB\u30EA",
            },
            {
                completed: false,
                avatar: '3',
                name: 'cipchk',
                content: "this world was never meant for one as beautiful as you.",
            },
            {
                completed: false,
                avatar: '4',
                name: 'Kent',
                content: "my heart is beating with hers",
            },
            {
                completed: false,
                avatar: '5',
                name: 'Are you',
                content: "They always said that I love beautiful girl than my friends",
            },
            {
                completed: false,
                avatar: '6',
                name: 'Forever',
                content: "Walking through green fields \uFF0Csunshine in my eyes.",
            },
        ];
        this.webSite = [];
        this.salesData = [];
        this.offlineChartData = [];
    }
    DashboardV1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/chart').subscribe(function (res) {
            _this.webSite = res.visitData.slice(0, 10);
            _this.salesData = res.salesData;
            _this.offlineChartData = res.offlineChartData;
            _this.cd.detectChanges();
        });
    };
    DashboardV1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-v1',
            template: __webpack_require__(/*! ./v1.component.html */ "./src/app/routes/dashboard/v1/v1.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        }),
        __metadata("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_1__["_HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], DashboardV1Component);
    return DashboardV1Component;
}());



/***/ }),

/***/ "./src/app/routes/dashboard/workplace/workplace.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/routes/dashboard/workplace/workplace.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<page-header [breadcrumb]=\"breadcrumb\" [content]=\"content\" [extra]=\"extra\">\r\n  <ng-template #breadcrumb>\r\n    <nz-breadcrumb>\r\n      <nz-breadcrumb-item>\r\n        <a [routerLink]=\"['/']\">首页</a>\r\n      </nz-breadcrumb-item>\r\n      <nz-breadcrumb-item>\r\n        <a [routerLink]=\"['/']\">Dashboard</a>\r\n      </nz-breadcrumb-item>\r\n      <nz-breadcrumb-item>工作台</nz-breadcrumb-item>\r\n    </nz-breadcrumb>\r\n  </ng-template>\r\n  <ng-template #content>\r\n    <div class=\"content\">\r\n      <div class=\"avatar\">\r\n        <nz-avatar nzSrc=\"https://gw.alipayobjects.com/zos/rmsportal/lctvVCLfRpYCkYxAsiVQ.png\"></nz-avatar>\r\n      </div>\r\n      <div class=\"desc\">\r\n        <div class=\"desc-title\">早安，山治，我要吃肉！</div>\r\n        <div>假砖家 | 地球－伟大航道－黄金梅丽号－厨房－小强部门</div>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template #extra>\r\n    <div class=\"page-extra\">\r\n      <div>\r\n        <p>项目数</p>\r\n        <p>56</p>\r\n      </div>\r\n      <div>\r\n        <p>团队内排名</p>\r\n        <p>8\r\n          <span> / 24</span>\r\n        </p>\r\n      </div>\r\n      <div>\r\n        <p>项目访问</p>\r\n        <p>2,223</p>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</page-header>\r\n<div nz-row [nzGutter]=\"24\">\r\n  <div nz-col nzXs=\"24\" nzSm=\"24\" nzMd=\"16\">\r\n    <nz-card nzTitle=\"进行中的项目\" [nzExtra]=\"ingExtra\" [nzBordered]=\"false\" [nzLoading]=\"loading\" class=\"ant-card__body-nopadding mb-lg project-list\">\r\n      <ng-template #ingExtra>\r\n        <a (click)=\"msg.success('to')\">全部项目</a>\r\n      </ng-template>\r\n      <div *ngFor=\"let item of notice\" nz-card-grid class=\"project-grid\">\r\n        <nz-card [nzBordered]=\"false\" class=\"ant-card__body-nopadding mb0\">\r\n          <nz-card-meta [nzTitle]=\"noticeTitle\" [nzDescription]=\"item.description\">\r\n            <ng-template #noticeTitle>\r\n              <div class=\"card-title\">\r\n                <nz-avatar [nzSrc]=\"item.logo\" [nzSize]=\"'small'\"></nz-avatar>\r\n                <a (click)=\"msg.info('to' + item.href)\">{{item.title}}</a>\r\n              </div>\r\n            </ng-template>\r\n          </nz-card-meta>\r\n          <div class=\"project-item\">\r\n            <a (click)=\"msg.info('show user: ' + item.member)\">{{item.member}}</a>\r\n            <span *ngIf=\"item.updatedAt\" class=\"datetime\" title=\"{{item.updatedAt}}\">\r\n              {{item.updatedAt | _date: 'fn' }}\r\n            </span>\r\n          </div>\r\n        </nz-card>\r\n      </div>\r\n    </nz-card>\r\n    <nz-card nzTitle=\"动态\" [nzBordered]=\"false\" [nzLoading]=\"loading\" class=\"ant-card__body-nopadding mb-lg active-card\">\r\n      <nz-list nzSize=\"large\" class=\"activities\">\r\n        <nz-list-item *ngFor=\"let item of activities\">\r\n          <nz-list-item-meta [nzAvatar]=\"item.user.avatar\" [nzTitle]=\"activeTitle\" [nzDescription]=\"activeDescription\">\r\n            <ng-template #activeTitle>\r\n              <a (click)=\"msg.success(item.user.name)\" class=\"username\">{{item.user.name}}</a>\r\n              &nbsp;\r\n              <span class=\"event\" [innerHTML]=\"item.template\"></span>\r\n            </ng-template>\r\n            <ng-template #activeDescription>\r\n              <span class=\"datetime\" title=\"{{item.updatedAt}}\">{{item.updatedAt | _date: 'fn'}}</span>\r\n            </ng-template>\r\n          </nz-list-item-meta>\r\n        </nz-list-item>\r\n      </nz-list>\r\n    </nz-card>\r\n  </div>\r\n  <div nz-col nzXs=\"24\" nzSm=\"24\" nzMd=\"8\">\r\n    <nz-card nzTitle=\"快速开始 / 便捷导航\" [nzBordered]=\"false\" class=\"ant-card__body-nopadding mb-lg\">\r\n      <div class=\"links\">\r\n        <a *ngFor=\"let item of links\" (click)=\"msg.success(item.title)\">{{item.title}}</a>\r\n        <button nz-button (click)=\"links.push({title: 'new titel', href: 'href'})\" [nzType]=\"'dashed'\" [nzSize]=\"'small'\">\r\n          <i nz-icon type=\"plus\"></i>\r\n          <span>添加</span>\r\n        </button>\r\n      </div>\r\n    </nz-card>\r\n    <nz-card nzTitle=\"XX 指数\" [nzBordered]=\"false\" [nzLoading]=\"loading\" class=\"mb-lg\">\r\n      <g2-radar [data]=\"radarData\" [height]=\"343\" [hasLegend]=\"true\"></g2-radar>\r\n    </nz-card>\r\n    <nz-card nzTitle=\"团队\" [nzBordered]=\"false\" [nzBodyStyle]=\"{'padding-top.px': 12, 'padding-bottom.px': 12 }\" class=\"mb-lg\">\r\n      <div class=\"members\">\r\n        <div nz-row [nzGutter]=\"48\">\r\n          <div nz-col [nzSpan]=\"12\" *ngFor=\"let i of members\">\r\n            <a (click)=\"msg.success(i.title)\">\r\n              <nz-avatar [nzSrc]=\"i.logo\" [nzSize]=\"'small'\"></nz-avatar>\r\n              <span class=\"member\">{{i.title}}</span>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </nz-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/dashboard/workplace/workplace.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/routes/dashboard/workplace/workplace.component.less ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n:host ::ng-deep .content {\n  display: flex;\n}\n:host ::ng-deep .content .avatar {\n  flex: 0 1 72px;\n  margin-bottom: 8px;\n}\n:host ::ng-deep .content .avatar .ant-avatar {\n  border-radius: 72px;\n  display: block;\n  width: 72px;\n  height: 72px;\n}\n:host ::ng-deep .content .desc {\n  position: relative;\n  top: 4px;\n  margin-left: 24px;\n  flex: 1 1 auto;\n  color: rgba(0, 0, 0, 0.45);\n  line-height: 22px;\n}\n:host ::ng-deep .content .desc .desc-title {\n  font-size: 20px;\n  line-height: 28px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.85);\n  margin-bottom: 12px;\n}\n:host ::ng-deep .page-extra {\n  zoom: 1;\n  float: right;\n  white-space: nowrap;\n}\n:host ::ng-deep .page-extra:before,\n:host ::ng-deep .page-extra:after {\n  content: \"\";\n  display: table;\n}\n:host ::ng-deep .page-extra:after {\n  clear: both;\n}\n:host ::ng-deep .page-extra > div {\n  padding: 0 32px;\n  position: relative;\n  display: inline-block;\n}\n:host ::ng-deep .page-extra > div > p:first-child {\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 14px;\n  line-height: 22px;\n  margin-bottom: 4px;\n}\n:host ::ng-deep .page-extra > div > p {\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 30px;\n  line-height: 38px;\n  margin: 0;\n}\n:host ::ng-deep .page-extra > div > p > span {\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 20px;\n}\n:host ::ng-deep .page-extra > div:after {\n  background-color: #e8e8e8;\n  position: absolute;\n  top: 8px;\n  right: 0;\n  width: 1px;\n  height: 40px;\n  content: '';\n}\n:host ::ng-deep .page-extra > div:last-child {\n  padding-right: 0;\n}\n:host ::ng-deep .page-extra > div:last-child:after {\n  display: none;\n}\n:host ::ng-deep .project-list .ant-card-meta-description {\n  color: rgba(0, 0, 0, 0.45);\n  height: 44px;\n  line-height: 22px;\n  overflow: hidden;\n}\n:host ::ng-deep .project-list .card-title {\n  font-size: 0;\n}\n:host ::ng-deep .project-list .card-title a {\n  color: rgba(0, 0, 0, 0.85);\n  margin-left: 12px;\n  line-height: 24px;\n  height: 24px;\n  display: inline-block;\n  vertical-align: top;\n  font-size: 14px;\n}\n:host ::ng-deep .project-list .card-title a:hover {\n  color: #1890ff;\n}\n:host ::ng-deep .project-list .project-grid {\n  width: 33.33%;\n}\n:host ::ng-deep .project-list .project-item {\n  display: flex;\n  margin-top: 8px;\n  font-size: 12px;\n  height: 20px;\n  line-height: 20px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-break: break-all;\n  white-space: nowrap;\n}\n:host ::ng-deep .project-list .project-item a {\n  color: rgba(0, 0, 0, 0.45);\n  display: inline-block;\n  flex: 1 1 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-break: break-all;\n  white-space: nowrap;\n}\n:host ::ng-deep .project-list .project-item a:hover {\n  color: #1890ff;\n}\n:host ::ng-deep .project-list .project-item .datetime {\n  color: rgba(0, 0, 0, 0.25);\n  flex: 0 0 auto;\n  float: right;\n}\n:host ::ng-deep .activities {\n  padding: 0 24px 8px;\n}\n:host ::ng-deep .activities .username {\n  color: rgba(0, 0, 0, 0.65);\n}\n:host ::ng-deep .activities .event {\n  font-weight: normal;\n}\n:host ::ng-deep .members a {\n  display: block;\n  margin: 12px 0;\n  line-height: 24px;\n  height: 24px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-break: break-all;\n  white-space: nowrap;\n}\n:host ::ng-deep .members a .member {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.65);\n  line-height: 24px;\n  max-width: 100px;\n  vertical-align: top;\n  margin-left: 12px;\n  transition: all 0.3s;\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-break: break-all;\n  white-space: nowrap;\n}\n:host ::ng-deep .members a:hover span {\n  color: #1890ff;\n}\n:host ::ng-deep .datetime {\n  color: rgba(0, 0, 0, 0.25);\n}\n:host ::ng-deep .links {\n  padding: 20px 0 8px 24px;\n  font-size: 0;\n}\n:host ::ng-deep .links > a {\n  color: rgba(0, 0, 0, 0.65);\n  display: inline-block;\n  font-size: 14px;\n  margin-bottom: 13px;\n  width: 25%;\n}\n:host ::ng-deep .links > a:hover {\n  color: #1890ff;\n}\n@media screen and (max-width: 1200px) and (min-width: 992px) {\n  :host ::ng-deep .active-card {\n    margin-bottom: 24px;\n  }\n  :host ::ng-deep .members {\n    margin-bottom: 0;\n  }\n  :host ::ng-deep .page-extra {\n    margin-left: -44px;\n  }\n  :host ::ng-deep .page-extra > div {\n    padding: 0 16px;\n  }\n}\n@media screen and (max-width: 992px) {\n  :host ::ng-deep .active-card {\n    margin-bottom: 24px;\n  }\n  :host ::ng-deep .members {\n    margin-bottom: 0;\n  }\n  :host ::ng-deep .page-extra {\n    float: none;\n    margin-right: 0;\n  }\n  :host ::ng-deep .page-extra > div {\n    padding: 0 16px;\n    text-align: left;\n  }\n  :host ::ng-deep .page-extra > div:after {\n    display: none;\n  }\n}\n@media screen and (max-width: 768px) {\n  :host ::ng-deep .page-extra {\n    margin-left: -16px;\n  }\n  :host ::ng-deep .project-list .project-grid {\n    width: 50%;\n  }\n}\n@media screen and (max-width: 576px) {\n  :host ::ng-deep .content {\n    display: block;\n  }\n  :host ::ng-deep .content .desc {\n    margin-left: 0;\n  }\n  :host ::ng-deep .page-extra > div {\n    float: none;\n  }\n}\n@media screen and (max-width: 480px) {\n  :host ::ng-deep .project-list .project-grid {\n    width: 100%;\n  }\n}\n"

/***/ }),

/***/ "./src/app/routes/dashboard/workplace/workplace.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/routes/dashboard/workplace/workplace.component.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardWorkplaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardWorkplaceComponent", function() { return DashboardWorkplaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardWorkplaceComponent = /** @class */ (function () {
    // endregion
    function DashboardWorkplaceComponent(http, msg, cd) {
        this.http = http;
        this.msg = msg;
        this.cd = cd;
        this.notice = [];
        this.activities = [];
        this.radarData = [];
        this.loading = true;
        // region: mock data
        this.links = [
            {
                title: '操作一',
                href: '',
            },
            {
                title: '操作二',
                href: '',
            },
            {
                title: '操作三',
                href: '',
            },
            {
                title: '操作四',
                href: '',
            },
            {
                title: '操作五',
                href: '',
            },
            {
                title: '操作六',
                href: '',
            },
        ];
        this.members = [
            {
                id: 'members-1',
                title: '科学搬砖组',
                logo: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
                link: '',
            },
            {
                id: 'members-2',
                title: '程序员日常',
                logo: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
                link: '',
            },
            {
                id: 'members-3',
                title: '设计天团',
                logo: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
                link: '',
            },
            {
                id: 'members-4',
                title: '中二少女团',
                logo: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
                link: '',
            },
            {
                id: 'members-5',
                title: '骗你学计算机',
                logo: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
                link: '',
            },
        ];
    }
    DashboardWorkplaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["zip"])(this.http.get('/chart'), this.http.get('/api/notice'), this.http.get('/api/activities')).subscribe(function (_a) {
            var chart = _a[0], notice = _a[1], activities = _a[2];
            _this.radarData = chart.radarData;
            _this.notice = notice;
            _this.activities = activities.map(function (item) {
                item.template = item.template
                    .split(/@\{([^{}]*)\}/gi)
                    .map(function (key) {
                    if (item[key])
                        return "<a>" + item[key].name + "</a>";
                    return key;
                });
                return item;
            });
            _this.loading = false;
            _this.cd.detectChanges();
        });
    };
    DashboardWorkplaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-workplace',
            template: __webpack_require__(/*! ./workplace.component.html */ "./src/app/routes/dashboard/workplace/workplace.component.html"),
            styles: [__webpack_require__(/*! ./workplace.component.less */ "./src/app/routes/dashboard/workplace/workplace.component.less")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        }),
        __metadata("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_3__["_HttpClient"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], DashboardWorkplaceComponent);
    return DashboardWorkplaceComponent;
}());



/***/ }),

/***/ "./src/app/routes/exception/403.component.ts":
/*!***************************************************!*\
  !*** ./src/app/routes/exception/403.component.ts ***!
  \***************************************************/
/*! exports provided: Exception403Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exception403Component", function() { return Exception403Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Exception403Component = /** @class */ (function () {
    function Exception403Component(modalSrv) {
        modalSrv.closeAll();
    }
    Exception403Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'exception-403',
            template: "<exception type=\"403\" style=\"min-height: 500px; height: 80%;\"></exception>",
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzModalService"]])
    ], Exception403Component);
    return Exception403Component;
}());



/***/ }),

/***/ "./src/app/routes/exception/404.component.ts":
/*!***************************************************!*\
  !*** ./src/app/routes/exception/404.component.ts ***!
  \***************************************************/
/*! exports provided: Exception404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exception404Component", function() { return Exception404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Exception404Component = /** @class */ (function () {
    function Exception404Component(modalSrv) {
        modalSrv.closeAll();
    }
    Exception404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'exception-404',
            template: "<exception type=\"404\" style=\"min-height: 500px; height: 80%;\"></exception>",
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzModalService"]])
    ], Exception404Component);
    return Exception404Component;
}());



/***/ }),

/***/ "./src/app/routes/exception/500.component.ts":
/*!***************************************************!*\
  !*** ./src/app/routes/exception/500.component.ts ***!
  \***************************************************/
/*! exports provided: Exception500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exception500Component", function() { return Exception500Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Exception500Component = /** @class */ (function () {
    function Exception500Component(modalSrv) {
        modalSrv.closeAll();
    }
    Exception500Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'exception-500',
            template: "<exception type=\"500\" style=\"min-height: 500px; height: 80%;\"></exception>",
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzModalService"]])
    ], Exception500Component);
    return Exception500Component;
}());



/***/ }),

/***/ "./src/app/routes/passport/lock/lock.component.html":
/*!**********************************************************!*\
  !*** ./src/app/routes/passport/lock/lock.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ant-card width-lg\" style=\"margin: 0 auto;\">\r\n  <div class=\"ant-card-body\">\r\n    <div class=\"avatar\">\r\n      <nz-avatar\r\n        [nzSrc]=\"settings.user.avatar\"\r\n        nzIcon=\"anticon anticon-user\"\r\n        nzSize=\"large\"\r\n      ></nz-avatar>\r\n    </div>\r\n    <form nz-form [formGroup]=\"f\" (ngSubmit)=\"submit()\" role=\"form\" class=\"mt-md\">\r\n      <nz-form-item>\r\n        <nz-form-control>\r\n          <nz-input-group nzSuffixIcon=\"anticon anticon-lock\">\r\n            <input type=\"password\" nz-input formControlName=\"password\" />\r\n          </nz-input-group>\r\n          <nz-form-explain *ngIf=\"f.get('password').dirty && f.get('password').errors\">\r\n            {{ 'validation.password.required' | translate }}\r\n          </nz-form-explain>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-row nzType=\"flex\" nzAlign=\"middle\">\r\n        <nz-col [nzOffset]=\"12\" [nzSpan]=\"12\" style=\"text-align:right;\">\r\n          <button nz-button [disabled]=\"!f.valid\" nzType=\"primary\">{{ 'app.lock' | translate }}</button>\r\n        </nz-col>\r\n      </nz-row>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/passport/lock/lock.component.less":
/*!**********************************************************!*\
  !*** ./src/app/routes/passport/lock/lock.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .ant-card-body {\n  position: relative;\n  margin-top: 80px;\n}\n:host ::ng-deep .avatar {\n  position: absolute;\n  top: -20px;\n  left: 50%;\n  margin-left: -20px;\n}\n"

/***/ }),

/***/ "./src/app/routes/passport/lock/lock.component.ts":
/*!********************************************************!*\
  !*** ./src/app/routes/passport/lock/lock.component.ts ***!
  \********************************************************/
/*! exports provided: UserLockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLockComponent", function() { return UserLockComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserLockComponent = /** @class */ (function () {
    function UserLockComponent(fb, settings, router) {
        this.settings = settings;
        this.router = router;
        this.f = fb.group({
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    UserLockComponent.prototype.submit = function () {
        // tslint:disable-next-line:forin
        for (var i in this.f.controls) {
            this.f.controls[i].markAsDirty();
            this.f.controls[i].updateValueAndValidity();
        }
        if (this.f.valid) {
            console.log('Valid!');
            console.log(this.f.value);
            this.router.navigate(['dashboard']);
        }
    };
    UserLockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'passport-lock',
            template: __webpack_require__(/*! ./lock.component.html */ "./src/app/routes/passport/lock/lock.component.html"),
            styles: [__webpack_require__(/*! ./lock.component.less */ "./src/app/routes/passport/lock/lock.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_3__["SettingsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], UserLockComponent);
    return UserLockComponent;
}());



/***/ }),

/***/ "./src/app/routes/passport/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/routes/passport/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"form\" (ngSubmit)=\"submit()\" role=\"form\">\r\n  <nz-tabset [nzAnimated]=\"false\" class=\"tabs\" (nzSelectChange)=\"switch($event)\">\r\n    <nz-tab [nzTitle]=\"'app.login.tab-login-credentials' | translate\">\r\n      <nz-alert *ngIf=\"error\" [nzType]=\"'error'\" [nzMessage]=\"error\" [nzShowIcon]=\"true\" class=\"mb-lg\"></nz-alert>\r\n      <nz-form-item>\r\n        <nz-form-control>\r\n          <nz-input-group nzSize=\"large\" nzPrefixIcon=\"anticon anticon-user\">\r\n            <input nz-input formControlName=\"userName\" placeholder=\"username: admin or user\">\r\n          </nz-input-group>\r\n          <nz-form-explain *ngIf=\"userName.dirty && userName.errors\">\r\n            {{ 'Please enter mobile number!' | translate }}\r\n          </nz-form-explain>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-control>\r\n          <nz-input-group nzSize=\"large\" nzPrefixIcon=\"anticon anticon-lock\">\r\n            <input nz-input type=\"password\" formControlName=\"password\" placeholder=\"password: ng-alain.com\">\r\n          </nz-input-group>\r\n          <nz-form-explain *ngIf=\"password.dirty && password.errors\">\r\n            {{ 'Please enter password!' | translate }}\r\n          </nz-form-explain>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n    </nz-tab>\r\n    <nz-tab [nzTitle]=\"'app.login.tab-login-mobile' | translate\">\r\n      <nz-form-item>\r\n        <nz-form-control>\r\n          <nz-input-group nzSize=\"large\" nzPrefixIcon=\"anticon anticon-user\">\r\n            <input nz-input formControlName=\"mobile\" placeholder=\"mobile number\">\r\n          </nz-input-group>\r\n          <nz-form-explain *ngIf=\"mobile.dirty && mobile.errors\">\r\n            <ng-container *ngIf=\"mobile.errors.required\">\r\n              {{ 'validation.phone-number.required' | translate }}\r\n            </ng-container>\r\n            <ng-container *ngIf=\"mobile.errors.pattern\">\r\n              {{ 'validation.phone-number.wrong-format' | translate }}\r\n            </ng-container>\r\n          </nz-form-explain>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-control>\r\n          <nz-row [nzGutter]=\"8\">\r\n            <nz-col [nzSpan]=\"16\">\r\n              <nz-input-group nzSize=\"large\" nzPrefixIcon=\"anticon anticon-mail\">\r\n                <input nz-input formControlName=\"captcha\" placeholder=\"captcha\">\r\n              </nz-input-group>\r\n              <nz-form-explain *ngIf=\"captcha.dirty && captcha.errors\">\r\n                {{ 'validation.verification-code.required' | translate }}\r\n              </nz-form-explain>\r\n            </nz-col>\r\n            <nz-col [nzSpan]=\"8\">\r\n              <button type=\"button\" nz-button nzSize=\"large\" (click)=\"getCaptcha()\" [disabled]=\"count\" nzBlock [nzLoading]=\"http.loading\">\r\n                {{ count ? count + 's' : 'app.register.get-verification-code' | translate }}\r\n              </button>\r\n            </nz-col>\r\n          </nz-row>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n    </nz-tab>\r\n  </nz-tabset>\r\n  <nz-form-item>\r\n    <nz-col [nzSpan]=\"12\">\r\n      <label nz-checkbox formControlName=\"remember\">{{ 'app.login.remember-me' | translate }}</label>\r\n    </nz-col>\r\n    <nz-col [nzSpan]=\"12\" class=\"text-right\">\r\n      <a class=\"forgot\" (click)=\"msg.error('请找欧阳锋')\">{{ 'app.login.forgot-password' | translate }}</a>\r\n    </nz-col>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <button nz-button type=\"submit\" nzType=\"primary\" nzSize=\"large\" [nzLoading]=\"http.loading\" nzBlock>\r\n      {{ 'app.login.login' | translate }}\r\n    </button>\r\n  </nz-form-item>\r\n</form>\r\n<div class=\"other\">\r\n  {{ 'app.login.sign-in-with' | translate }}\r\n  <i title=\"in fact Auth0 via window\" (click)=\"open('auth0', 'window')\" nz-icon type=\"alipay-circle\" class=\"icon\"></i>\r\n  <i title=\"in fact Github via redirect\" (click)=\"open('taobao')\" nz-icon type=\"taobao-circle\" class=\"icon\"></i>\r\n  <i title=\"真的是微博\" (click)=\"open('weibo', 'window')\" nz-icon type=\"weibo-circle\" class=\"icon\"></i>\r\n  <a class=\"register\" routerLink=\"/passport/register\">{{ 'app.login.signup' | translate }}</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/passport/login/login.component.less":
/*!************************************************************!*\
  !*** ./src/app/routes/passport/login/login.component.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n:host {\n  display: block;\n  width: 368px;\n  margin: 0 auto;\n}\n:host ::ng-deep .ant-tabs .ant-tabs-bar {\n  border-bottom: 0;\n  margin-bottom: 24px;\n  text-align: center;\n}\n:host ::ng-deep .ant-tabs-tab {\n  font-size: 16px;\n  line-height: 24px;\n}\n:host ::ng-deep .ant-input-affix-wrapper .ant-input:not(:first-child) {\n  padding-left: 34px;\n}\n:host ::ng-deep .icon {\n  font-size: 24px;\n  color: rgba(0, 0, 0, 0.2);\n  margin-left: 16px;\n  vertical-align: middle;\n  cursor: pointer;\n  transition: color 0.3s;\n}\n:host ::ng-deep .icon:hover {\n  color: #1890ff;\n}\n:host ::ng-deep .other {\n  text-align: left;\n  margin-top: 24px;\n  line-height: 22px;\n}\n:host ::ng-deep .other nz-tooltip {\n  vertical-align: middle;\n}\n:host ::ng-deep .other .register {\n  float: right;\n}\n"

/***/ }),

/***/ "./src/app/routes/passport/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/routes/passport/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/fesm5/auth.js");
/* harmony import */ var _delon_abc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/abc */ "./node_modules/@delon/abc/fesm5/abc.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_startup_startup_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/startup/startup.service */ "./src/app/core/startup/startup.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(fb, modalSrv, msg, router, settingsService, socialService, reuseTabService, tokenService, startupSrv, http) {
        this.msg = msg;
        this.router = router;
        this.settingsService = settingsService;
        this.socialService = socialService;
        this.reuseTabService = reuseTabService;
        this.tokenService = tokenService;
        this.startupSrv = startupSrv;
        this.http = http;
        this.error = '';
        this.type = 0;
        // #region get captcha
        this.count = 0;
        this.form = fb.group({
            userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            mobile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^1\d{10}$/)]],
            captcha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            remember: [true],
        });
        modalSrv.closeAll();
    }
    Object.defineProperty(UserLoginComponent.prototype, "userName", {
        // #region fields
        get: function () {
            return this.form.controls.userName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserLoginComponent.prototype, "password", {
        get: function () {
            return this.form.controls.password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserLoginComponent.prototype, "mobile", {
        get: function () {
            return this.form.controls.mobile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserLoginComponent.prototype, "captcha", {
        get: function () {
            return this.form.controls.captcha;
        },
        enumerable: true,
        configurable: true
    });
    // #endregion
    UserLoginComponent.prototype.switch = function (ret) {
        this.type = ret.index;
    };
    UserLoginComponent.prototype.getCaptcha = function () {
        var _this = this;
        if (this.mobile.invalid) {
            this.mobile.markAsDirty({ onlySelf: true });
            this.mobile.updateValueAndValidity({ onlySelf: true });
            return;
        }
        this.count = 59;
        this.interval$ = setInterval(function () {
            _this.count -= 1;
            if (_this.count <= 0)
                clearInterval(_this.interval$);
        }, 1000);
    };
    // #endregion
    UserLoginComponent.prototype.submit = function () {
        var _this = this;
        this.error = '';
        if (this.type === 0) {
            this.userName.markAsDirty();
            this.userName.updateValueAndValidity();
            this.password.markAsDirty();
            this.password.updateValueAndValidity();
            if (this.userName.invalid || this.password.invalid)
                return;
        }
        else {
            this.mobile.markAsDirty();
            this.mobile.updateValueAndValidity();
            this.captcha.markAsDirty();
            this.captcha.updateValueAndValidity();
            if (this.mobile.invalid || this.captcha.invalid)
                return;
        }
        // 默认配置中对所有HTTP请求都会强制 [校验](https://ng-alain.com/auth/getting-started) 用户 Token
        // 然一般来说登录请求不需要校验，因此可以在请求URL加上：`/login?_allow_anonymous=true` 表示不触发用户 Token 校验
        this.http
            .post('/login/account?', {
            type: this.type,
            userName: this.userName.value,
            password: this.password.value,
        })
            .subscribe(function (res) {
            console.log(JSON.stringify(res));
            if (res.msg !== 'ok') {
                _this.error = res.msg;
                return;
            }
            // 清空路由复用信息
            _this.reuseTabService.clear();
            // 设置用户Token信息
            _this.tokenService.set(res.user);
            // 重新获取 StartupService 内容，我们始终认为应用信息一般都会受当前用户授权范围而影响
            _this.startupSrv.load().then(function () { return _this.router.navigate(['/']); });
        });
    };
    // #region social
    UserLoginComponent.prototype.open = function (type, openType) {
        var _this = this;
        if (openType === void 0) { openType = 'href'; }
        var url = "";
        var callback = "";
        if (_env_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production)
            callback = 'https://ng-alain.github.io/ng-alain/callback/' + type;
        else
            callback = 'http://localhost:4200/callback/' + type;
        switch (type) {
            case 'auth0':
                url = "//cipchk.auth0.com/login?client=8gcNydIDzGBYxzqV0Vm1CX_RXH-wsWo5&redirect_uri=" + decodeURIComponent(callback);
                break;
            case 'github':
                url = "//github.com/login/oauth/authorize?client_id=9d6baae4b04a23fcafa2&response_type=code&redirect_uri=" + decodeURIComponent(callback);
                break;
            case 'weibo':
                url = "https://api.weibo.com/oauth2/authorize?client_id=1239507802&response_type=code&redirect_uri=" + decodeURIComponent(callback);
                break;
        }
        if (openType === 'window') {
            this.socialService
                .login(url, '/', {
                type: 'window',
            })
                .subscribe(function (res) {
                if (res) {
                    _this.settingsService.setUser(res);
                    _this.router.navigateByUrl('/');
                }
            });
        }
        else {
            this.socialService.login(url, '/', {
                type: 'href',
            });
        }
    };
    // #endregion
    UserLoginComponent.prototype.ngOnDestroy = function () {
        if (this.interval$)
            clearInterval(this.interval$);
    };
    UserLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'passport-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/routes/passport/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.less */ "./src/app/routes/passport/login/login.component.less")],
            providers: [_delon_auth__WEBPACK_IMPORTED_MODULE_5__["SocialService"]],
        }),
        __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_delon_abc__WEBPACK_IMPORTED_MODULE_6__["ReuseTabService"])),
        __param(7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_delon_auth__WEBPACK_IMPORTED_MODULE_5__["DA_SERVICE_TOKEN"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_0__["SettingsService"],
            _delon_auth__WEBPACK_IMPORTED_MODULE_5__["SocialService"],
            _delon_abc__WEBPACK_IMPORTED_MODULE_6__["ReuseTabService"],
            _delon_auth__WEBPACK_IMPORTED_MODULE_5__["TokenService"],
            _core_startup_startup_service__WEBPACK_IMPORTED_MODULE_8__["StartupService"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_0__["_HttpClient"]])
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "./src/app/routes/passport/register-result/register-result.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/routes/passport/register-result/register-result.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<result type=\"success\" [title]=\"title\" description=\"{{ 'app.register-result.activation-email' | translate }}\">\r\n  <ng-template #title>\r\n    <div class=\"title\" style=\"font-size: 20px;\">\r\n      {{ 'app.register-result.msg' | translate:params }}\r\n    </div>\r\n  </ng-template>\r\n  <button (click)=\"msg.success('email')\" nz-button nzSize=\"large\" [nzType]=\"'primary'\">\r\n    {{ 'app.register-result.view-mailbox' | translate }}\r\n  </button>\r\n  <button routerLink=\"/\" nz-button nzSize=\"large\">\r\n    {{ 'app.register-result.back-home' | translate }}\r\n  </button>\r\n</result>\r\n"

/***/ }),

/***/ "./src/app/routes/passport/register-result/register-result.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/routes/passport/register-result/register-result.component.ts ***!
  \******************************************************************************/
/*! exports provided: UserRegisterResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterResultComponent", function() { return UserRegisterResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserRegisterResultComponent = /** @class */ (function () {
    function UserRegisterResultComponent(route, msg) {
        this.msg = msg;
        this.params = { email: '' };
        this.email = '';
        this.params.email = this.email = route.snapshot.queryParams.email || 'ng-alain@example.com';
    }
    UserRegisterResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'passport-register-result',
            template: __webpack_require__(/*! ./register-result.component.html */ "./src/app/routes/passport/register-result/register-result.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], UserRegisterResultComponent);
    return UserRegisterResultComponent;
}());



/***/ }),

/***/ "./src/app/routes/passport/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/routes/passport/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>{{ 'app.register.register' | translate }}</h3>\r\n<form nz-form [formGroup]=\"form\" (ngSubmit)=\"submit()\" role=\"form\">\r\n  <nz-alert *ngIf=\"error\" [nzType]=\"'error'\" [nzMessage]=\"error\" [nzShowIcon]=\"true\" class=\"mb-lg\"></nz-alert>\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <nz-input-group nzSize=\"large\" nzAddonBeforeIcon=\"anticon anticon-user\">\r\n        <input nz-input formControlName=\"mail\" placeholder=\"Email\">\r\n      </nz-input-group>\r\n      <ng-container *ngIf=\"mail.dirty && mail.errors\">\r\n        <nz-form-explain *ngIf=\"mail.errors?.required\">{{ 'validation.email.required' | translate }}</nz-form-explain>\r\n        <nz-form-explain *ngIf=\"mail.errors?.email\">{{ 'validation.email.wrong-format' | translate }}</nz-form-explain>\r\n      </ng-container>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <nz-popover [nzPlacement]=\"'right'\" [nzTrigger]=\"'focus'\" [(nzVisible)]=\"visible\" nzOverlayClassName=\"register-password-cdk\"\r\n        [nzOverlayStyle]=\"{'width.px': 240}\">\r\n        <nz-input-group nzSize=\"large\" nz-popover nzAddonBeforeIcon=\"anticon anticon-lock\">\r\n          <input nz-input type=\"password\" formControlName=\"password\" placeholder=\"Password\">\r\n        </nz-input-group>\r\n        <nz-form-explain *ngIf=\"password.dirty && password.errors\">{{ 'validation.password.required' | translate }}</nz-form-explain>\r\n        <ng-template #nzTemplate>\r\n          <div style=\"padding: 4px 0;\">\r\n            <ng-container [ngSwitch]=\"status\">\r\n              <div *ngSwitchCase=\"'ok'\" class=\"success\">{{ 'validation.password.strength.strong' | translate }}</div>\r\n              <div *ngSwitchCase=\"'pass'\" class=\"warning\">{{ 'validation.password.strength.medium' | translate }}</div>\r\n              <div *ngSwitchDefault class=\"error\">{{ 'validation.password.strength.short' | translate }}</div>\r\n            </ng-container>\r\n            <div class=\"progress-{{status}}\">\r\n              <nz-progress [nzPercent]=\"progress\" [nzStatus]=\"passwordProgressMap[status]\" [nzStrokeWidth]=\"6\"\r\n                [nzShowInfo]=\"false\"></nz-progress>\r\n            </div>\r\n            <p class=\"mt-sm\">{{ 'validation.password.strength.msg' | translate }}</p>\r\n          </div>\r\n        </ng-template>\r\n      </nz-popover>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <nz-input-group nzSize=\"large\" nzAddonBeforeIcon=\"anticon anticon-lock\">\r\n        <input nz-input type=\"password\" formControlName=\"confirm\" placeholder=\"Confirm Password\">\r\n      </nz-input-group>\r\n      <nz-form-explain *ngIf=\"confirm.dirty && confirm.errors\">\r\n        <ng-container *ngIf=\"confirm.errors.required\">\r\n          {{ 'validation.confirm-password.required' | translate }}\r\n        </ng-container>\r\n        <ng-container *ngIf=\"confirm.errors.equar\">\r\n          {{ 'validation.password.twice' | translate }}\r\n        </ng-container>\r\n      </nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <nz-input-group nzSize=\"large\" [nzAddOnBefore]=\"addOnBeforeTemplate\">\r\n        <ng-template #addOnBeforeTemplate>\r\n          <nz-select formControlName=\"mobilePrefix\" style=\"width: 100px;\">\r\n            <nz-option [nzLabel]=\"'+86'\" [nzValue]=\"'+86'\"></nz-option>\r\n            <nz-option [nzLabel]=\"'+87'\" [nzValue]=\"'+87'\"></nz-option>\r\n          </nz-select>\r\n        </ng-template>\r\n        <input formControlName=\"mobile\" nz-input placeholder=\"Phone number\">\r\n      </nz-input-group>\r\n      <nz-form-explain *ngIf=\"mobile.dirty && mobile.errors\">\r\n        <ng-container *ngIf=\"mobile.errors.required\">\r\n          {{ 'validation.phone-number.required' | translate }}\r\n        </ng-container>\r\n        <ng-container *ngIf=\"mobile.errors.pattern\">\r\n          {{ 'validation.phone-number.wrong-format' | translate }}\r\n        </ng-container>\r\n      </nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <nz-row [nzGutter]=\"8\">\r\n        <nz-col [nzSpan]=\"16\">\r\n          <nz-input-group nzSize=\"large\" nzAddonBeforeIcon=\"anticon anticon-mail\">\r\n            <input nz-input formControlName=\"captcha\" placeholder=\"Captcha\">\r\n          </nz-input-group>\r\n          <nz-form-explain *ngIf=\"captcha.dirty && captcha.errors\">\r\n            {{ 'validation.verification-code.required' | translate }}\r\n          </nz-form-explain>\r\n        </nz-col>\r\n        <nz-col [nzSpan]=\"8\">\r\n          <button type=\"button\" nz-button nzSize=\"large\" (click)=\"getCaptcha()\" [disabled]=\"count\" nzBlock [nzLoading]=\"http.loading\">\r\n            {{ count ? count + 's' : 'app.register.get-verification-code' | translate }}</button>\r\n        </nz-col>\r\n      </nz-row>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <button nz-button nzType=\"primary\" nzSize=\"large\" type=\"submit\" [nzLoading]=\"http.loading\" class=\"submit\">\r\n      {{ 'app.register.register' | translate }}\r\n    </button>\r\n    <a class=\"login\" routerLink=\"/passport/login\">{{ 'app.register.sign-in' | translate }}</a>\r\n  </nz-form-item>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/routes/passport/register/register.component.less":
/*!******************************************************************!*\
  !*** ./src/app/routes/passport/register/register.component.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n:host {\n  display: block;\n  width: 368px;\n  margin: 0 auto;\n}\n:host ::ng-deep h3 {\n  font-size: 16px;\n  margin-bottom: 20px;\n}\n:host ::ng-deep .submit {\n  width: 50%;\n}\n:host ::ng-deep .login {\n  float: right;\n  line-height: 40px;\n}\n::ng-deep .register-password-cdk .success,\n::ng-deep .register-password-cdk .warning,\n::ng-deep .register-password-cdk .error {\n  transition: color 0.3s;\n}\n::ng-deep .register-password-cdk .success {\n  color: #52c41a;\n}\n::ng-deep .register-password-cdk .warning {\n  color: #faad14;\n}\n::ng-deep .register-password-cdk .error {\n  color: #f5222d;\n}\n::ng-deep .register-password-cdk .progress-pass > .progress .ant-progress-bg {\n  background-color: #faad14;\n}\n"

/***/ }),

/***/ "./src/app/routes/passport/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/routes/passport/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: UserRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterComponent", function() { return UserRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserRegisterComponent = /** @class */ (function () {
    function UserRegisterComponent(fb, router, http, msg) {
        this.router = router;
        this.http = http;
        this.msg = msg;
        this.error = '';
        this.type = 0;
        this.visible = false;
        this.status = 'pool';
        this.progress = 0;
        this.passwordProgressMap = {
            ok: 'success',
            pass: 'normal',
            pool: 'exception',
        };
        // #endregion
        // #region get captcha
        this.count = 0;
        this.form = fb.group({
            mail: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                    UserRegisterComponent_1.checkPassword.bind(this),
                ],
            ],
            confirm: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                    UserRegisterComponent_1.passwordEquar,
                ],
            ],
            mobilePrefix: ['+86'],
            mobile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^1\d{10}$/)]],
            captcha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    UserRegisterComponent_1 = UserRegisterComponent;
    UserRegisterComponent.checkPassword = function (control) {
        if (!control)
            return null;
        var self = this;
        self.visible = !!control.value;
        if (control.value && control.value.length > 9) {
            self.status = 'ok';
        }
        else if (control.value && control.value.length > 5) {
            self.status = 'pass';
        }
        else {
            self.status = 'pool';
        }
        if (self.visible) {
            self.progress =
                control.value.length * 10 > 100 ? 100 : control.value.length * 10;
        }
    };
    UserRegisterComponent.passwordEquar = function (control) {
        if (!control || !control.parent) {
            return null;
        }
        if (control.value !== control.parent.get('password').value) {
            return { equar: true };
        }
        return null;
    };
    Object.defineProperty(UserRegisterComponent.prototype, "mail", {
        // #region fields
        get: function () {
            return this.form.controls.mail;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserRegisterComponent.prototype, "password", {
        get: function () {
            return this.form.controls.password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserRegisterComponent.prototype, "confirm", {
        get: function () {
            return this.form.controls.confirm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserRegisterComponent.prototype, "mobile", {
        get: function () {
            return this.form.controls.mobile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserRegisterComponent.prototype, "captcha", {
        get: function () {
            return this.form.controls.captcha;
        },
        enumerable: true,
        configurable: true
    });
    UserRegisterComponent.prototype.getCaptcha = function () {
        var _this = this;
        if (this.mobile.invalid) {
            this.mobile.markAsDirty({ onlySelf: true });
            this.mobile.updateValueAndValidity({ onlySelf: true });
            return;
        }
        this.count = 59;
        this.interval$ = setInterval(function () {
            _this.count -= 1;
            if (_this.count <= 0)
                clearInterval(_this.interval$);
        }, 1000);
    };
    // #endregion
    UserRegisterComponent.prototype.submit = function () {
        var _this = this;
        this.error = '';
        for (var i in this.form.controls) {
            this.form.controls[i].markAsDirty();
            this.form.controls[i].updateValueAndValidity();
        }
        if (this.form.invalid) {
            return;
        }
        var data = this.form.value;
        this.http.post('/register', data).subscribe(function () {
            _this.router.navigateByUrl('/passport/register-result', {
                queryParams: { email: data.mail },
            });
        });
    };
    UserRegisterComponent.prototype.ngOnDestroy = function () {
        if (this.interval$)
            clearInterval(this.interval$);
    };
    var UserRegisterComponent_1;
    UserRegisterComponent = UserRegisterComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'passport-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/routes/passport/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.less */ "./src/app/routes/passport/register/register.component.less")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_4__["_HttpClient"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]])
    ], UserRegisterComponent);
    return UserRegisterComponent;
}());



/***/ }),

/***/ "./src/app/routes/routes-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/routes/routes-routing.module.ts ***!
  \*************************************************/
/*! exports provided: RouteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteRoutingModule", function() { return RouteRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/fesm5/auth.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _layout_default_default_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/default/default.component */ "./src/app/layout/default/default.component.ts");
/* harmony import */ var _layout_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout/fullscreen/fullscreen.component */ "./src/app/layout/fullscreen/fullscreen.component.ts");
/* harmony import */ var _layout_passport_passport_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout/passport/passport.component */ "./src/app/layout/passport/passport.component.ts");
/* harmony import */ var _dashboard_v1_v1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/v1/v1.component */ "./src/app/routes/dashboard/v1/v1.component.ts");
/* harmony import */ var _dashboard_analysis_analysis_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/analysis/analysis.component */ "./src/app/routes/dashboard/analysis/analysis.component.ts");
/* harmony import */ var _dashboard_monitor_monitor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/monitor/monitor.component */ "./src/app/routes/dashboard/monitor/monitor.component.ts");
/* harmony import */ var _dashboard_workplace_workplace_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/workplace/workplace.component */ "./src/app/routes/dashboard/workplace/workplace.component.ts");
/* harmony import */ var _passport_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./passport/login/login.component */ "./src/app/routes/passport/login/login.component.ts");
/* harmony import */ var _passport_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./passport/register/register.component */ "./src/app/routes/passport/register/register.component.ts");
/* harmony import */ var _passport_register_result_register_result_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./passport/register-result/register-result.component */ "./src/app/routes/passport/register-result/register-result.component.ts");
/* harmony import */ var _callback_callback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./callback/callback.component */ "./src/app/routes/callback/callback.component.ts");
/* harmony import */ var _passport_lock_lock_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./passport/lock/lock.component */ "./src/app/routes/passport/lock/lock.component.ts");
/* harmony import */ var _exception_403_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./exception/403.component */ "./src/app/routes/exception/403.component.ts");
/* harmony import */ var _exception_404_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./exception/404.component */ "./src/app/routes/exception/404.component.ts");
/* harmony import */ var _exception_500_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./exception/500.component */ "./src/app/routes/exception/500.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// layout



// dashboard pages




// passport pages



// single pages





var routes = [
    {
        path: '',
        component: _layout_default_default_component__WEBPACK_IMPORTED_MODULE_4__["LayoutDefaultComponent"],
        canActivate: [_delon_auth__WEBPACK_IMPORTED_MODULE_2__["SimpleGuard"]],
        children: [
            { path: '', redirectTo: 'dashboard/v1', pathMatch: 'full' },
            { path: 'dashboard', redirectTo: 'dashboard/v1', pathMatch: 'full' },
            { path: 'dashboard/v1', component: _dashboard_v1_v1_component__WEBPACK_IMPORTED_MODULE_7__["DashboardV1Component"] },
            { path: 'dashboard/analysis', component: _dashboard_analysis_analysis_component__WEBPACK_IMPORTED_MODULE_8__["DashboardAnalysisComponent"] },
            { path: 'dashboard/monitor', component: _dashboard_monitor_monitor_component__WEBPACK_IMPORTED_MODULE_9__["DashboardMonitorComponent"] },
            { path: 'dashboard/workplace', component: _dashboard_workplace_workplace_component__WEBPACK_IMPORTED_MODULE_10__["DashboardWorkplaceComponent"] },
            {
                path: 'widgets',
                loadChildren: './widgets/widgets.module#WidgetsModule',
            },
            { path: 'style', loadChildren: './style/style.module#StyleModule' },
            { path: 'delon', loadChildren: './delon/delon.module#DelonModule' },
            { path: 'extras', loadChildren: './extras/extras.module#ExtrasModule' },
            { path: 'pro', loadChildren: './pro/pro.module#ProModule' },
        ],
    },
    // 全屏布局
    {
        path: 'data-v',
        component: _layout_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_5__["LayoutFullScreenComponent"],
        children: [
            { path: '', loadChildren: './data-v/data-v.module#DataVModule' },
        ],
    },
    // passport
    {
        path: 'passport',
        component: _layout_passport_passport_component__WEBPACK_IMPORTED_MODULE_6__["LayoutPassportComponent"],
        children: [
            {
                path: 'login',
                component: _passport_login_login_component__WEBPACK_IMPORTED_MODULE_11__["UserLoginComponent"],
                data: { title: '登录', titleI18n: 'app.login.login' },
            },
            {
                path: 'register',
                component: _passport_register_register_component__WEBPACK_IMPORTED_MODULE_12__["UserRegisterComponent"],
                data: { title: '注册', titleI18n: 'app.register.register' },
            },
            {
                path: 'register-result',
                component: _passport_register_result_register_result_component__WEBPACK_IMPORTED_MODULE_13__["UserRegisterResultComponent"],
                data: { title: '注册结果', titleI18n: 'app.register.register' },
            },
            {
                path: 'lock',
                component: _passport_lock_lock_component__WEBPACK_IMPORTED_MODULE_15__["UserLockComponent"],
                data: { title: '锁屏', titleI18n: 'app.lock' },
            },
        ],
    },
    // 单页不包裹Layout
    { path: 'callback/:type', component: _callback_callback_component__WEBPACK_IMPORTED_MODULE_14__["CallbackComponent"] },
    { path: '403', component: _exception_403_component__WEBPACK_IMPORTED_MODULE_16__["Exception403Component"] },
    { path: '404', component: _exception_404_component__WEBPACK_IMPORTED_MODULE_17__["Exception404Component"] },
    { path: '500', component: _exception_500_component__WEBPACK_IMPORTED_MODULE_18__["Exception500Component"] },
    { path: '**', redirectTo: 'dashboard' },
];
var RouteRoutingModule = /** @class */ (function () {
    function RouteRoutingModule() {
    }
    RouteRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].useHash })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], RouteRoutingModule);
    return RouteRoutingModule;
}());



/***/ }),

/***/ "./src/app/routes/routes.module.ts":
/*!*****************************************!*\
  !*** ./src/app/routes/routes.module.ts ***!
  \*****************************************/
/*! exports provided: RoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesModule", function() { return RoutesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _routes_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes-routing.module */ "./src/app/routes/routes-routing.module.ts");
/* harmony import */ var _dashboard_v1_v1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/v1/v1.component */ "./src/app/routes/dashboard/v1/v1.component.ts");
/* harmony import */ var _dashboard_analysis_analysis_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/analysis/analysis.component */ "./src/app/routes/dashboard/analysis/analysis.component.ts");
/* harmony import */ var _dashboard_monitor_monitor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/monitor/monitor.component */ "./src/app/routes/dashboard/monitor/monitor.component.ts");
/* harmony import */ var _dashboard_workplace_workplace_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/workplace/workplace.component */ "./src/app/routes/dashboard/workplace/workplace.component.ts");
/* harmony import */ var _passport_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./passport/login/login.component */ "./src/app/routes/passport/login/login.component.ts");
/* harmony import */ var _passport_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./passport/register/register.component */ "./src/app/routes/passport/register/register.component.ts");
/* harmony import */ var _passport_register_result_register_result_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./passport/register-result/register-result.component */ "./src/app/routes/passport/register-result/register-result.component.ts");
/* harmony import */ var _passport_lock_lock_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./passport/lock/lock.component */ "./src/app/routes/passport/lock/lock.component.ts");
/* harmony import */ var _callback_callback_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./callback/callback.component */ "./src/app/routes/callback/callback.component.ts");
/* harmony import */ var _exception_403_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./exception/403.component */ "./src/app/routes/exception/403.component.ts");
/* harmony import */ var _exception_404_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./exception/404.component */ "./src/app/routes/exception/404.component.ts");
/* harmony import */ var _exception_500_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./exception/500.component */ "./src/app/routes/exception/500.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// dashboard pages




// passport pages



// single pages





var COMPONENTS = [
    _dashboard_v1_v1_component__WEBPACK_IMPORTED_MODULE_3__["DashboardV1Component"],
    _dashboard_analysis_analysis_component__WEBPACK_IMPORTED_MODULE_4__["DashboardAnalysisComponent"],
    _dashboard_monitor_monitor_component__WEBPACK_IMPORTED_MODULE_5__["DashboardMonitorComponent"],
    _dashboard_workplace_workplace_component__WEBPACK_IMPORTED_MODULE_6__["DashboardWorkplaceComponent"],
    // passport pages
    _passport_login_login_component__WEBPACK_IMPORTED_MODULE_7__["UserLoginComponent"],
    _passport_register_register_component__WEBPACK_IMPORTED_MODULE_8__["UserRegisterComponent"],
    _passport_register_result_register_result_component__WEBPACK_IMPORTED_MODULE_9__["UserRegisterResultComponent"],
    // single pages
    _passport_lock_lock_component__WEBPACK_IMPORTED_MODULE_10__["UserLockComponent"],
    _callback_callback_component__WEBPACK_IMPORTED_MODULE_11__["CallbackComponent"],
    _exception_403_component__WEBPACK_IMPORTED_MODULE_12__["Exception403Component"],
    _exception_404_component__WEBPACK_IMPORTED_MODULE_13__["Exception404Component"],
    _exception_500_component__WEBPACK_IMPORTED_MODULE_14__["Exception500Component"]
];
var COMPONENTS_NOROUNT = [];
var RoutesModule = /** @class */ (function () {
    function RoutesModule() {
    }
    RoutesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _routes_routing_module__WEBPACK_IMPORTED_MODULE_2__["RouteRoutingModule"]],
            declarations: COMPONENTS.concat(COMPONENTS_NOROUNT),
            entryComponents: COMPONENTS_NOROUNT
        })
    ], RoutesModule);
    return RoutesModule;
}());



/***/ }),

/***/ "./src/app/shared/json-schema/json-schema.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/json-schema/json-schema.module.ts ***!
  \**********************************************************/
/*! exports provided: SCHEMA_THIRDS_COMPONENTS, JsonSchemaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHEMA_THIRDS_COMPONENTS", function() { return SCHEMA_THIRDS_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonSchemaModule", function() { return JsonSchemaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _delon_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/form */ "./node_modules/@delon/form/fesm5/form.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { TinymceWidget } from './widgets/tinymce/tinymce.widget';
// import { UeditorWidget } from './widgets/ueditor/ueditor.widget';
var SCHEMA_THIRDS_COMPONENTS = [
// TinymceWidget,
// UeditorWidget
];
var JsonSchemaModule = /** @class */ (function () {
    function JsonSchemaModule(widgetRegistry) {
        // widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
        // widgetRegistry.register(UeditorWidget.KEY, UeditorWidget);
    }
    JsonSchemaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: SCHEMA_THIRDS_COMPONENTS,
            entryComponents: SCHEMA_THIRDS_COMPONENTS,
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _delon_form__WEBPACK_IMPORTED_MODULE_2__["DelonFormModule"].forRoot()],
            exports: SCHEMA_THIRDS_COMPONENTS.slice(),
        }),
        __metadata("design:paramtypes", [_delon_form__WEBPACK_IMPORTED_MODULE_2__["WidgetRegistry"]])
    ], JsonSchemaModule);
    return JsonSchemaModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _delon_abc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/abc */ "./node_modules/@delon/abc/fesm5/abc.js");
/* harmony import */ var _delon_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/chart */ "./node_modules/@delon/chart/fesm5/chart.js");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/acl */ "./node_modules/@delon/acl/fesm5/acl.js");
/* harmony import */ var _delon_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @delon/form */ "./node_modules/@delon/form/fesm5/form.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/fesm5/ngx-countdown.js");
/* harmony import */ var ngx_ueditor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-ueditor */ "./node_modules/ngx-ueditor/fesm5/ngx-ueditor.js");
/* harmony import */ var ngx_tinymce__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-tinymce */ "./node_modules/ngx-tinymce/fesm5/ngx-tinymce.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// delon





// i18n

// #region third libs




var THIRDMODULES = [
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__["NgZorroAntdModule"],
    ngx_countdown__WEBPACK_IMPORTED_MODULE_11__["CountdownModule"],
    ngx_ueditor__WEBPACK_IMPORTED_MODULE_12__["UEditorModule"],
    ngx_tinymce__WEBPACK_IMPORTED_MODULE_13__["NgxTinymceModule"],
];
// #endregion
// #region your componets & directives
var COMPONENTS = [];
var DIRECTIVES = [];
// #endregion
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _delon_theme__WEBPACK_IMPORTED_MODULE_4__["AlainThemeModule"].forChild(),
                _delon_abc__WEBPACK_IMPORTED_MODULE_5__["DelonABCModule"],
                _delon_chart__WEBPACK_IMPORTED_MODULE_6__["DelonChartModule"],
                _delon_acl__WEBPACK_IMPORTED_MODULE_7__["DelonACLModule"],
                _delon_form__WEBPACK_IMPORTED_MODULE_8__["DelonFormModule"]
            ].concat(THIRDMODULES),
            declarations: COMPONENTS.concat(DIRECTIVES),
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _delon_theme__WEBPACK_IMPORTED_MODULE_4__["AlainThemeModule"],
                _delon_abc__WEBPACK_IMPORTED_MODULE_5__["DelonABCModule"],
                _delon_chart__WEBPACK_IMPORTED_MODULE_6__["DelonChartModule"],
                _delon_acl__WEBPACK_IMPORTED_MODULE_7__["DelonACLModule"],
                _delon_form__WEBPACK_IMPORTED_MODULE_8__["DelonFormModule"],
                // i18n
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"]
            ].concat(THIRDMODULES, COMPONENTS, DIRECTIVES),
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    SERVER_URL: "./",
    production: false,
    useHash: true,
    hmr: false,
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/hmr.ts":
/*!********************!*\
  !*** ./src/hmr.ts ***!
  \********************/
/*! exports provided: hmrBootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hmrBootstrap", function() { return hmrBootstrap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angularclass/hmr */ "./node_modules/@angularclass/hmr/dist/index.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");



var hmrBootstrap = function (module, bootstrap) {
    var ngModule;
    module.hot.accept();
    bootstrap().then(function (mod) { return (ngModule = mod); });
    module.hot.dispose(function () {
        var appRef = ngModule.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]);
        var modalService = ngModule.injector.get(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"], null);
        if (modalService)
            modalService.closeAll();
        var elements = appRef.components.map(function (c) { return c.location.nativeElement; });
        var makeVisible = Object(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__["createNewHosts"])(elements);
        ngModule.destroy();
        makeVisible();
    });
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _hmr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hmr */ "./src/hmr.ts");





Object(_delon_theme__WEBPACK_IMPORTED_MODULE_4__["preloaderFinished"])();

if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
var bootstrap = function () {
    return Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
        .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
        defaultEncapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
        preserveWhitespaces: false,
    })
        .then(function (res) {
        if (window.appBootstrap) {
            window.appBootstrap();
        }
        return res;
    });
};
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].hmr) {
    if (false) {}
    else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
}
else {
    bootstrap();
}


/***/ }),

/***/ "./src/style-icons-auto.ts":
/*!*********************************!*\
  !*** ./src/style-icons-auto.ts ***!
  \*********************************/
/*! exports provided: ICONS_AUTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICONS_AUTO", function() { return ICONS_AUTO; });
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/fesm5/ant-design-icons-angular-icons.js");
/*
* Automatically generated by 'ng g ng-alain:plugin icon'
* @see https://ng-alain.com/cli/plugin#icon
*/

var ICONS_AUTO = [
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["AlipayCircleOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ApiOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["AppstoreOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ArrowDownOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["BookOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["CloudOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["CopyrightOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["CustomerServiceOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["DashboardOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["DatabaseOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["DingdingOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["DislikeOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["DownloadOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["EditOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["EllipsisOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["FileOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ForkOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["FrownOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["FullscreenExitOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["FullscreenOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["GithubOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["GlobalOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["HddOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["LaptopOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["LikeOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["LockOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["LogoutOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["MailOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["MenuFoldOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["MenuUnfoldOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["MessageOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["PayCircleOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["PieChartOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["PrinterOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["RocketOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ScanOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["SearchOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["SettingOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ShareAltOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ShoppingCartOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["SoundOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["StarOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["TaobaoCircleOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["TaobaoOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["TeamOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ToolOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["TrophyOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["UsbOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["UserOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["WeiboCircleOutline"]
];


/***/ }),

/***/ "./src/style-icons.ts":
/*!****************************!*\
  !*** ./src/style-icons.ts ***!
  \****************************/
/*! exports provided: ICONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICONS", function() { return ICONS; });
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/fesm5/ant-design-icons-angular-icons.js");
// Custom icon static resources

var ICONS = [
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["InfoOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["BulbOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ProfileOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ExceptionOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["LinkOutline"],
];


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\work\cib\spring-action-latest\ng_alain\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map