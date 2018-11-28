(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-style-module"],{

/***/ "./src/app/routes/style/color.service.ts":
/*!***********************************************!*\
  !*** ./src/app/routes/style/color.service.ts ***!
  \***********************************************/
/*! exports provided: ColorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorService", function() { return ColorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ColorService = /** @class */ (function () {
    function ColorService() {
        this.APP_COLORS = {
            primary: '#1890ff',
            success: '#52c41a',
            error: '#f5222d',
            warning: '#fadb14',
            red: '#f5222d',
            volcano: '#fa541c',
            orange: '#fa8c16',
            gold: '#faad14',
            yellow: '#fadb14',
            lime: '#a0d911',
            green: '#52c41a',
            cyan: '#13c2c2',
            blue: '#1890ff',
            geekblue: '#2f54eb',
            purple: '#722ed1',
            magenta: '#eb2f96',
        };
    }
    Object.defineProperty(ColorService.prototype, "names", {
        get: function () {
            return Object.keys(this.APP_COLORS).filter(function (name, index) { return index > 3; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorService.prototype, "brands", {
        get: function () {
            return ['primary', 'success', 'error', 'warning'];
        },
        enumerable: true,
        configurable: true
    });
    ColorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ColorService);
    return ColorService;
}());



/***/ }),

/***/ "./src/app/routes/style/colors/colors.component.html":
/*!***********************************************************!*\
  !*** ./src/app/routes/style/colors/colors.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__content-title\">\r\n  <h1>\r\n    Colors\r\n    <small>Color Palettes</small>\r\n  </h1>\r\n</div>\r\n<div nz-row [nzGutter]=\"16\" class=\"list\">\r\n  <div nz-col [nzMd]=\"24\">\r\n    <nz-card nzTitle=\"Classic colors\">\r\n      <div nz-row *ngFor=\"let c of c.brands\">\r\n        <div nz-col [nzSpan]=\"8\">\r\n          <div class=\"bg-{{c}}-light p-lg\">\r\n            <p (click)=\"onCopy('bg-' + c + '-light')\">.bg-{{c}}-light</p>\r\n            <p (click)=\"onCopy('text-' + c + '-light')\">.text-{{c}}-light</p>\r\n          </div>\r\n        </div>\r\n        <div nz-col [nzSpan]=\"8\">\r\n          <div class=\"bg-{{c}} p-lg\">\r\n            <p (click)=\"onCopy('bg-' + c)\">.bg-{{c}}</p>\r\n            <p (click)=\"onCopy('text-' + c)\">.text-{{c}}</p>\r\n          </div>\r\n        </div>\r\n        <div nz-col [nzSpan]=\"8\">\r\n          <div class=\"bg-{{c}}-dark p-lg\">\r\n            <p (click)=\"onCopy('bg-' + c + '-dark')\">.bg-{{c}}-dark</p>\r\n            <p (click)=\"onCopy('text-' + c + '-dark')\">.text-{{c}}-dark</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </nz-card>\r\n  </div>\r\n</div>\r\n<div nz-row [nzGutter]=\"16\" class=\"list\">\r\n  <div nz-col [nzMd]=\"24\">\r\n    <nz-card nzTitle=\"Name colors\">\r\n      <div nz-row *ngFor=\"let c of c.names\">\r\n        <div nz-col [nzSpan]=\"8\">\r\n          <div class=\"bg-{{c}}-light p-lg\">\r\n            <p (click)=\"onCopy('bg-' + c + '-light')\">.bg-{{c}}-light</p>\r\n            <p (click)=\"onCopy('text-' + c + '-light')\">.text-{{c}}-light</p>\r\n          </div>\r\n        </div>\r\n        <div nz-col [nzSpan]=\"8\">\r\n          <div class=\"bg-{{c}} p-lg\">\r\n            <p (click)=\"onCopy('bg-' + c)\">.bg-{{c}}</p>\r\n            <p (click)=\"onCopy('text-' + c)\">.text-{{c}}</p>\r\n          </div>\r\n        </div>\r\n        <div nz-col [nzSpan]=\"8\">\r\n          <div class=\"bg-{{c}}-dark p-lg\">\r\n            <p (click)=\"onCopy('bg-' + c + '-dark')\">.bg-{{c}}-dark</p>\r\n            <p (click)=\"onCopy('text-' + c + '-dark')\">.text-{{c}}-dark</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div nz-row>\r\n        <div nz-col [nzSpan]=\"5\">\r\n          <div class=\"bg-grey-darker p-lg\">\r\n            <p (click)=\"onCopy('bg-grey-darker')\">.bg-grey-darker</p>\r\n            <p (click)=\"onCopy('text-grey-darker')\">.text-grey-darker</p>\r\n          </div>\r\n        </div>\r\n        <div nz-col [nzSpan]=\"5\">\r\n          <div class=\"bg-grey-dark p-lg\">\r\n            <p (click)=\"onCopy('bg-grey-dark')\">.bg-grey-dark</p>\r\n            <p (click)=\"onCopy('text-grey-dark')\">.text-grey-dark</p>\r\n          </div>\r\n        </div>\r\n        <div nz-col [nzSpan]=\"4\">\r\n          <div class=\"bg-grey p-lg\">\r\n            <p (click)=\"onCopy('bg-grey')\">.bg-grey</p>\r\n            <p (click)=\"onCopy('text-grey')\">.text-grey</p>\r\n          </div>\r\n        </div>\r\n        <div nz-col [nzSpan]=\"5\">\r\n          <div class=\"bg-grey-light p-lg\">\r\n            <p (click)=\"onCopy('bg-grey-light')\">.bg-grey-light</p>\r\n            <p (click)=\"onCopy('text-grey-light')\">.text-grey-light</p>\r\n          </div>\r\n        </div>\r\n        <div nz-col [nzSpan]=\"5\">\r\n          <div class=\"bg-grey-lighter p-lg\">\r\n            <p (click)=\"onCopy('bg-grey-lighter')\">.bg-grey-lighter</p>\r\n            <p (click)=\"onCopy('text-grey-lighter')\">.text-grey-lighter</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </nz-card>\r\n  </div>\r\n</div>\r\n<div nz-row [nzGutter]=\"16\" class=\"list\">\r\n  <div nz-col [nzMd]=\"24\">\r\n    <nz-card nzTitle=\"Full Colors\">\r\n      <div nz-row>\r\n        <div nz-col [nzSpan]=\"4\" *ngFor=\"let c of c.names\">\r\n          <div *ngFor=\"let i of nums\" class=\"bg-{{c}}-{{i}} p-lg\">\r\n            <p (click)=\"onCopy('bg-' + c + '-' + i)\">.bg-{{c}}-{{i}}</p>\r\n            <p (click)=\"onCopy('bg-' + c + '-' + i + '-h')\">.bg-{{c}}-{{i}}-h</p>\r\n            <p (click)=\"onCopy('text-' + c + '-' + i)\">.text-{{c}}-{{i}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </nz-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/style/colors/colors.component.less":
/*!***********************************************************!*\
  !*** ./src/app/routes/style/colors/colors.component.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .list p {\n  margin-bottom: 0;\n  cursor: pointer;\n}\n:host ::ng-deep .list p:first-child {\n  margin-bottom: 4px;\n}\n"

/***/ }),

/***/ "./src/app/routes/style/colors/colors.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/style/colors/colors.component.ts ***!
  \*********************************************************/
/*! exports provided: ColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsComponent", function() { return ColorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _color_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../color.service */ "./src/app/routes/style/color.service.ts");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/util */ "./node_modules/@delon/util/fesm5/util.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ColorsComponent = /** @class */ (function () {
    function ColorsComponent(c, msg) {
        this.c = c;
        this.msg = msg;
        this.nums = Array(10)
            .fill(1)
            .map(function (v, i) { return v + i; });
    }
    ColorsComponent.prototype.onCopy = function (str) {
        var _this = this;
        Object(_delon_util__WEBPACK_IMPORTED_MODULE_2__["copy"])(str).then(function () { return _this.msg.success("Copied Success!"); });
    };
    ColorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-colors',
            template: __webpack_require__(/*! ./colors.component.html */ "./src/app/routes/style/colors/colors.component.html"),
            styles: [__webpack_require__(/*! ./colors.component.less */ "./src/app/routes/style/colors/colors.component.less")],
        }),
        __metadata("design:paramtypes", [_color_service__WEBPACK_IMPORTED_MODULE_1__["ColorService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]])
    ], ColorsComponent);
    return ColorsComponent;
}());



/***/ }),

/***/ "./src/app/routes/style/gridmasonry/gridmasonry.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/routes/style/gridmasonry/gridmasonry.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__content-title\">\r\n  <h1>\r\n    Grid Masonry\r\n    <small>Pure CSS and mobile first with a fallback to inline grid, Supported from IE10,\r\n      <a href=\"//caniuse.com/#feat=multicolumn\"\r\n        target=\"_blank\">browser compatibility</a>\r\n    </small>\r\n  </h1>\r\n</div>\r\n<div class=\"row-masonry row-masonry-xl-8 row-masonry-lg-5 row-masonry-md-4 row-masonry-sm-3 row-masonry-xs-2\">\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>Ipsum do ullamco laboris excepteur. Do incididunt commodo adipisicing officia sunt tempor. Deserunt exercitation proident\r\n        enim veniam laboris fugiat ipsum veniam dolore duis sit duis. In deserunt ut nulla ad eu.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>Veniam non sunt quis ex consequat ea esse duis esse. Ut incididunt eiusmod occaecat esse aute adipisicing culpa. Voluptate\r\n        ullamco labore laboris et do in.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>Esse elit et aute do aliqua ipsum cillum consectetur deserunt deserunt cupidatat aute aliqua aute. Aliquip ad incididunt\r\n        dolor cupidatat quis officia cillum sit ex. Irure ut sit Lorem sunt nulla excepteur ipsum ipsum dolore cillum cupidatat\r\n        ipsum. Do amet aliquip sunt consectetur nulla. Cupidatat ad consectetur veniam aliqua non ullamco laboris eiusmod.\r\n        In voluptate officia aliquip dolore sit qui consectetur fugiat aliqua duis occaecat. Non mollit elit nisi ea mollit\r\n        anim excepteur ut qui exercitation.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>Ullamco incididunt do deserunt cillum veniam cillum amet ad. Deserunt laborum cupidatat mollit proident adipisicing\r\n        in culpa consequat adipisicing et non. Aliqua ea elit voluptate esse aliqua dolor ipsum. Ut officia officia fugiat\r\n        sint esse qui incididunt Lorem occaecat.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>Ea non irure qui fugiat aliquip esse adipisicing. Cillum aliquip dolor non fugiat ad aliqua. In voluptate et non irure\r\n        elit. Tempor qui sunt incididunt amet tempor sint et voluptate sunt qui sit culpa proident ipsum. Sunt duis pariatur\r\n        officia ut magna pariatur fugiat dolor cillum laboris eu. Qui incididunt minim nostrud exercitation aliquip.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>Fugiat commodo ad consectetur reprehenderit. Officia fugiat ea proident exercitation occaecat mollit laboris fugiat\r\n        consequat deserunt anim ipsum magna ex. Esse do amet cillum aute ut ea.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>Magna id fugiat laborum elit ullamco deserunt do laboris non qui. Duis et exercitation nulla labore cupidatat nostrud\r\n        pariatur reprehenderit in nostrud. Consequat consequat consectetur mollit adipisicing. Laborum amet sit sint aliquip\r\n        fugiat adipisicing enim reprehenderit. Voluptate nisi reprehenderit voluptate sit enim aute deserunt cupidatat et\r\n        dolore labore voluptate id dolore.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>Reprehenderit non ullamco quis non excepteur irure excepteur anim ullamco labore. Sit occaecat consectetur laborum\r\n        consequat elit sint sit sunt. Duis aliquip magna ipsum consequat eiusmod officia.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>Magna nostrud ex cupidatat id in non labore ad voluptate est irure tempor. Nostrud aliqua magna laborum incididunt\r\n        deserunt veniam nulla nulla labore cillum. Id laboris Lorem dolore minim reprehenderit eu proident aliqua magna id\r\n        aute aute. Aliqua est et nulla eu duis id laborum magna.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>Sint pariatur eiusmod id sit est exercitation laboris mollit pariatur minim. Ex aliquip commodo nulla reprehenderit\r\n        et laboris consequat pariatur culpa culpa proident ullamco laboris. Ex aliquip deserunt labore aliquip ea est sit\r\n        quis amet tempor sunt amet. Id reprehenderit do elit sit consectetur. Aute amet sint tempor ipsum sint laboris est\r\n        do culpa tempor. Pariatur fugiat aute officia et laboris voluptate sit nisi in anim excepteur amet eu.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>Incididunt ut eu fugiat do deserunt voluptate id et est aliqua eu sint. Ad dolore excepteur ipsum nulla proident dolore\r\n        aute sunt. Aute enim do dolor laborum id eiusmod sit.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>Amet elit et ad amet nulla minim deserunt mollit adipisicing. Laboris non ipsum ad laborum non magna velit tempor cillum\r\n        cillum. Proident dolore eiusmod ex elit cillum. Cupidatat duis pariatur ut id deserunt laboris. Culpa excepteur est\r\n        deserunt eiusmod do do ut est labore eiusmod. Eu eu veniam excepteur mollit anim est velit nisi. Velit quis tempor\r\n        laboris culpa.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>Nostrud nulla nisi laboris officia anim nostrud nulla cupidatat veniam ea duis. Pariatur ea ullamco irure laborum.\r\n        Consectetur labore in occaecat ullamco est fugiat nisi sunt deserunt. Non sunt dolor elit culpa dolore adipisicing.\r\n        Fugiat mollit ex voluptate nulla deserunt dolore ea sunt commodo et qui laborum.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>Quis pariatur ea nisi excepteur mollit nulla reprehenderit labore. Exercitation pariatur eu pariatur tempor deserunt\r\n        ad occaecat ad in pariatur id et dolore. Enim veniam aute magna fugiat eiusmod velit quis. Laborum sit consequat\r\n        dolore qui minim culpa aliqua pariatur cillum velit. Nostrud enim aliqua ut nisi consectetur pariatur fugiat do esse\r\n        fugiat enim et tempor ad. Eiusmod ut incididunt proident labore sint sit culpa excepteur id. Fugiat mollit qui eu\r\n        eu fugiat proident.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>Tempor do officia magna do sunt. Nulla cillum anim excepteur adipisicing commodo culpa. Adipisicing pariatur qui voluptate\r\n        consectetur mollit quis sunt enim veniam ullamco. Duis nostrud anim aliqua adipisicing fugiat aute excepteur deserunt\r\n        enim occaecat pariatur ad. Qui aliquip aute labore minim ipsum in aute et. Aliqua laboris magna aute incididunt esse\r\n        ex. Eu ipsum occaecat aliquip enim aute.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>Labore cillum id non anim eiusmod officia. Nostrud laboris sint aliquip cillum magna. Minim sit labore proident culpa\r\n        non nisi cillum non officia est. Proident elit sit adipisicing est cupidatat ex cupidatat labore aliqua ad.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>Officia tempor ea adipisicing ad sit qui dolore consequat irure veniam. Est sit magna deserunt sint aute commodo fugiat\r\n        fugiat irure sint dolore commodo amet. Duis cillum dolor quis consectetur dolor et et culpa id elit. Amet ut nulla\r\n        sunt non in non duis sit fugiat consequat. Velit incididunt ullamco sunt deserunt nulla ad adipisicing. In fugiat\r\n        ullamco deserunt amet. Ex voluptate amet magna minim ut incididunt veniam.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>Occaecat anim do cillum est dolore sint. Do ut proident exercitation est incididunt irure duis ea laborum minim cillum\r\n        est. Mollit irure non qui veniam labore eu elit veniam ea amet nisi esse labore. Elit ut nulla exercitation fugiat\r\n        cupidatat non cupidatat sint id minim.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>Voluptate incididunt tempor nulla voluptate esse dolor Lorem veniam voluptate adipisicing laborum in aliqua. Proident\r\n        voluptate exercitation mollit consectetur qui commodo minim. Ea esse veniam velit minim reprehenderit incididunt\r\n        reprehenderit do laborum aliqua. In quis et excepteur cupidatat qui duis. Pariatur Lorem laborum ut consectetur deserunt\r\n        consectetur officia tempor commodo aliqua aliqua ipsum.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>Ullamco officia esse ex reprehenderit reprehenderit cupidatat. Sunt excepteur sint consectetur ex aliqua excepteur.\r\n        Laborum id cupidatat ea reprehenderit sit eiusmod ad exercitation ullamco nostrud. Nulla tempor voluptate magna amet\r\n        culpa exercitation ad laborum in. Aliqua voluptate deserunt pariatur excepteur. Ullamco voluptate est dolore velit\r\n        aliquip tempor nostrud deserunt. Minim excepteur dolor nulla commodo incididunt ex ullamco excepteur cillum veniam\r\n        quis reprehenderit.</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n<h3 class=\"my-md\">Masonry with any kind of element</h3>\r\n<div class=\"row-masonry row-masonry-xl-8 row-masonry-lg-5 row-masonry-md-4 row-masonry-sm-3 row-masonry-xs-2\">\r\n  <div class=\"col-masonry\">\r\n    <img src=\"assets/tmp/img/bg1.jpg\" alt=\"\" />\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>Proident est cillum magna qui pariatur. Deserunt ut voluptate sint aliquip anim nisi consequat. Elit laboris anim anim\r\n        dolor incididunt. Nostrud qui labore qui cillum excepteur mollit excepteur consequat esse anim enim ad enim. Esse\r\n        qui mollit et minim mollit laboris reprehenderit laborum fugiat do id. Mollit labore proident cupidatat aliqua dolore\r\n        exercitation consectetur commodo sint mollit nostrud esse sunt. Nostrud fugiat duis sit excepteur excepteur mollit.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <img src=\"assets/tmp/img/bg2.jpg\" alt=\"\" />\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <img src=\"assets/tmp/img/bg3.jpg\" alt=\"\" />\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <img src=\"assets/tmp/img/bg4.jpg\" alt=\"\" />\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <img src=\"assets/tmp/img/bg5.jpg\" alt=\"\" />\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <img src=\"assets/tmp/img/bg6.jpg\" alt=\"\" />\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>Dolore consequat elit est qui dolore dolore tempor amet magna adipisicing non in commodo. Veniam sint et proident duis\r\n        eu nulla commodo sunt duis aliquip eiusmod. Occaecat incididunt deserunt consectetur non aliquip velit ullamco eu\r\n        sit labore proident exercitation. Cillum deserunt voluptate eu eiusmod sint in esse. Velit anim non Lorem proident\r\n        eu sit nisi Lorem aute do sit ea. Esse nostrud amet excepteur occaecat incididunt amet laborum aliqua qui mollit\r\n        ullamco. Labore incididunt ullamco non ipsum Lorem duis commodo adipisicing in.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>Amet est dolor id esse veniam duis eu ex velit. Id qui deserunt voluptate veniam. Voluptate ea ipsum in eiusmod enim\r\n        do velit commodo nulla sint. Fugiat ipsum esse pariatur voluptate exercitation magna ut proident consectetur et.\r\n        Sint qui elit exercitation anim duis nulla commodo aliqua excepteur pariatur.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <img src=\"assets/tmp/img/bg7.jpg\" alt=\"\" />\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <img src=\"assets/tmp/img/bg8.jpg\" alt=\"\" />\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <div class=\"box-placeholder\">\r\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\r\n      <p>Culpa amet adipisicing consequat nisi dolore sunt amet labore officia aliquip elit tempor officia aliqua. Deserunt\r\n        laborum enim ut laboris duis. Cillum non proident dolor ullamco cillum nostrud in sint aliqua cillum. Proident magna\r\n        incididunt occaecat eiusmod cillum dolor tempor Lorem adipisicing nisi adipisicing mollit ex exercitation. Magna\r\n        nostrud est sunt incididunt culpa. Duis nulla elit ut ea adipisicing duis esse ullamco.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <img src=\"assets/tmp/img/bg9.jpg\" alt=\"\" />\r\n  </div>\r\n  <div class=\"col-masonry\">\r\n    <img src=\"assets/tmp/img/bg10.jpg\" alt=\"\" />\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/style/gridmasonry/gridmasonry.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/routes/style/gridmasonry/gridmasonry.component.less ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .box-placeholder {\n  margin-bottom: 15px;\n  padding: 20px;\n  border: 1px dashed #ddd;\n  background: #fafafa;\n  color: #444;\n}\n:host ::ng-deep .box-placeholder > :last-child {\n  margin-bottom: 0;\n}\n:host ::ng-deep .box-placeholder-lg {\n  padding-top: 80px;\n  padding-bottom: 80px;\n}\n"

/***/ }),

/***/ "./src/app/routes/style/gridmasonry/gridmasonry.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/routes/style/gridmasonry/gridmasonry.component.ts ***!
  \*******************************************************************/
/*! exports provided: GridMasonryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridMasonryComponent", function() { return GridMasonryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GridMasonryComponent = /** @class */ (function () {
    function GridMasonryComponent() {
    }
    GridMasonryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gridmasonry',
            template: __webpack_require__(/*! ./gridmasonry.component.html */ "./src/app/routes/style/gridmasonry/gridmasonry.component.html"),
            styles: [__webpack_require__(/*! ./gridmasonry.component.less */ "./src/app/routes/style/gridmasonry/gridmasonry.component.less")],
        })
    ], GridMasonryComponent);
    return GridMasonryComponent;
}());



/***/ }),

/***/ "./src/app/routes/style/style-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/routes/style/style-routing.module.ts ***!
  \******************************************************/
/*! exports provided: StyleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleRoutingModule", function() { return StyleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gridmasonry_gridmasonry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gridmasonry/gridmasonry.component */ "./src/app/routes/style/gridmasonry/gridmasonry.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/routes/style/typography/typography.component.ts");
/* harmony import */ var _colors_colors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./colors/colors.component */ "./src/app/routes/style/colors/colors.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'gridmasonry', component: _gridmasonry_gridmasonry_component__WEBPACK_IMPORTED_MODULE_2__["GridMasonryComponent"] },
    { path: 'typography', component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_3__["TypographyComponent"] },
    { path: 'colors', component: _colors_colors_component__WEBPACK_IMPORTED_MODULE_4__["ColorsComponent"] },
];
var StyleRoutingModule = /** @class */ (function () {
    function StyleRoutingModule() {
    }
    StyleRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], StyleRoutingModule);
    return StyleRoutingModule;
}());



/***/ }),

/***/ "./src/app/routes/style/style.module.ts":
/*!**********************************************!*\
  !*** ./src/app/routes/style/style.module.ts ***!
  \**********************************************/
/*! exports provided: StyleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleModule", function() { return StyleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _style_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style-routing.module */ "./src/app/routes/style/style-routing.module.ts");
/* harmony import */ var _color_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color.service */ "./src/app/routes/style/color.service.ts");
/* harmony import */ var _gridmasonry_gridmasonry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gridmasonry/gridmasonry.component */ "./src/app/routes/style/gridmasonry/gridmasonry.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/routes/style/typography/typography.component.ts");
/* harmony import */ var _colors_colors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./colors/colors.component */ "./src/app/routes/style/colors/colors.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var StyleModule = /** @class */ (function () {
    function StyleModule() {
    }
    StyleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _style_routing_module__WEBPACK_IMPORTED_MODULE_2__["StyleRoutingModule"]],
            declarations: [
                _gridmasonry_gridmasonry_component__WEBPACK_IMPORTED_MODULE_4__["GridMasonryComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_5__["TypographyComponent"],
                _colors_colors_component__WEBPACK_IMPORTED_MODULE_6__["ColorsComponent"],
            ],
            providers: [_color_service__WEBPACK_IMPORTED_MODULE_3__["ColorService"]],
        })
    ], StyleModule);
    return StyleModule;
}());



/***/ }),

/***/ "./src/app/routes/style/typography/typography.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/routes/style/typography/typography.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__content-title\">\r\n  <h1>\r\n    Typography\r\n  </h1>\r\n</div>\r\n<div nz-row [nzGutter]=\"16\">\r\n  <div nz-col [nzMd]=\"8\">\r\n    <nz-card nzTitle=\"Headings\">\r\n      <h1 class=\"h1\">\r\n        class=\"h1\"\r\n        <small>Sub-heading</small>\r\n      </h1>\r\n      <h2 class=\"h2\">\r\n        class=\"h2\"\r\n        <small>Sub-heading</small>\r\n      </h2>\r\n      <h3 class=\"h3\">\r\n        class=\"h3\"\r\n        <small>Sub-heading</small>\r\n      </h3>\r\n      <h4 class=\"h4\">\r\n        class=\"h4\"\r\n        <small>Sub-heading</small>\r\n      </h4>\r\n      <h5 class=\"h5\">\r\n        class=\"h5\"\r\n        <small>Sub-heading</small>\r\n      </h5>\r\n      <h6 class=\"h6\">\r\n        class=\"h6\"\r\n        <small>Sub-heading</small>\r\n      </h6>\r\n    </nz-card>\r\n  </div>\r\n  <div nz-col [nzMd]=\"8\">\r\n    <nz-card nzTitle=\"Paragraphs\">\r\n      <p>\r\n        <small>This is an example of small, fine print text.</small>\r\n      </p>\r\n      <p class=\"mt-sm\">\r\n        <strong>This is an example of strong, bold text.</strong>\r\n      </p>\r\n      <p class=\"mt-sm\">\r\n        <em>This is an example of emphasized, italic text.</em>\r\n      </p>\r\n      <h4 class=\"mt-sm\">Alignment & Sizing Helpers</h4>\r\n      <p class=\"mt-sm text-left text-sm\">class=\"text-left text-sm\"</p>\r\n      <p class=\"mt-sm text-center text-md\">class=\"text-center text-md\"</p>\r\n      <p class=\"text-right text-lg\">class=\"text-right text-lg\"</p>\r\n    </nz-card>\r\n  </div>\r\n  <div nz-col [nzMd]=\"8\">\r\n    <nz-card nzTitle=\"Text Colors\">\r\n      <p *ngFor=\"let color of c.names\" class=\"pb-0 text-{{color}}\">class=\"text-{{color}} bg-{{color}}\"</p>\r\n    </nz-card>\r\n  </div>\r\n</div>\r\n<div nz-row [nzGutter]=\"16\">\r\n  <div nz-col [nzMd]=\"8\">\r\n    <nz-card nzTitle=\"Formatting\">\r\n      <h4>text-nowrap</h4>\r\n      <p class=\"pt-sm text-nowrap\">[class=\"text-nowrap\"].Ad eiusmod eu velit veniam laborum voluptate duis aliqua esse eiusmod.</p>\r\n      <h4 class=\"pt-sm\">text-truncate</h4>\r\n      <p class=\"pt-sm text-truncate\">[class=\"text-truncate\"].Officia nulla velit minim mollit laborum et irure ullamco nisi dolore qui. Sint aute aliqua\r\n        tempor commodo officia sunt non do id laborum mollit ex ea cupidatat. Amet ad non fugiat magna. Ut cupidatat labore\r\n        pariatur esse reprehenderit esse sint in proident elit minim sunt enim sit. Enim sint deserunt exercitation duis.\r\n        Aliquip cillum irure do incididunt do eu eiusmod excepteur culpa ex consectetur nulla duis sit. Ex officia excepteur\r\n        officia ea ea cupidatat veniam officia officia est.</p>\r\n      <h4 class=\"pt-sm\">Transformation</h4>\r\n      <p class=\"pt-sm text-lowercase\">class=\"text-lowercase\"</p>\r\n      <p class=\"pt-sm text-uppercase\">class=\"text-uppercase\"</p>\r\n      <p class=\"pt-sm text-capitalize\">class=\"text-capitalize\"</p>\r\n      <p class=\"pt-sm text-deleted\">class=\"text-deleted\"</p>\r\n    </nz-card>\r\n  </div>\r\n  <div nz-col [nzMd]=\"8\">\r\n    <nz-card nzTitle=\"Border\">\r\n      <div class=\"p-sm m-sm text-center width-sm d-inline-block border border-primary\">class=\"border border-primary\"</div>\r\n      <div class=\"p-sm m-sm text-center width-sm d-inline-block border-top-1 border-success rounded-circle\">class=\"border-top-1 border-success rounded-circle\"</div>\r\n      <div class=\"p-sm m-sm text-center width-sm d-inline-block border-bottom-1 border-error\">class=\"border-bottom-1 border-error\"</div>\r\n      <div class=\"p-sm m-sm text-center width-md d-inline-block border-right-1 border-warning\">class=\"border-right-1 border-warning\"</div>\r\n    </nz-card>\r\n  </div>\r\n  <div nz-col [nzMd]=\"8\">\r\n    <nz-card nzTitle=\"Padding & Margin\">\r\n      <strong>清除间距</strong>\r\n      <p>\r\n        <code>[<类型>p|m][<方向>t|r|b|l|x|y]?0</code>\r\n      </p>\r\n      <p>eg: p0, pt0, mb0, mt0</p>\r\n      <strong>间距</strong>\r\n      <p>\r\n        <code>[<类型>p|m][<方向>t|r|b|l|x|y]?-[<尺寸>sm|md|lg]</code>\r\n      </p>\r\n      <p>eg: p-sm, pb-sm, mt-md, mr-md</p>\r\n    </nz-card>\r\n  </div>\r\n</div>\r\n<div nz-row [nzGutter]=\"16\">\r\n  <div nz-col [nzMd]=\"8\">\r\n    <nz-card nzTitle=\"Display\">\r\n      <p class=\"display-1\">class=\"display-1\"</p>\r\n      <p class=\"display-2\">class=\"display-2\"</p>\r\n      <p class=\"display-3\">class=\"display-3\"</p>\r\n    </nz-card>\r\n  </div>\r\n  <div nz-col [nzMd]=\"8\">\r\n    <nz-card nzTitle=\"Code\">\r\n      <p>This is an example of an inline code element within body copy. Wrap inline code within a\r\n        <code>...</code>tag.</p>\r\n      <pre class=\"mt-sm\"><code>This is an example of preformatted text.</code></pre>\r\n    </nz-card>\r\n  </div>\r\n  <div nz-col [nzMd]=\"8\">\r\n    <nz-card nzTitle=\"Lists\">\r\n      <h4>list styled</h4>\r\n      <ol class=\"mt-sm list-styled\">\r\n        <li>List Item</li>\r\n        <li>List Item</li>\r\n        <li>List Item</li>\r\n      </ol>\r\n      <h4 class=\"mt-sm\">Unstyled List</h4>\r\n      <ul class=\"mt-sm list-unstyled\">\r\n        <li>List Item</li>\r\n        <li>List Item</li>\r\n        <li>List Item</li>\r\n      </ul>\r\n    </nz-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/style/typography/typography.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/routes/style/typography/typography.component.ts ***!
  \*****************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _color_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../color.service */ "./src/app/routes/style/color.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TypographyComponent = /** @class */ (function () {
    function TypographyComponent(c) {
        this.c = c;
    }
    TypographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typography',
            template: __webpack_require__(/*! ./typography.component.html */ "./src/app/routes/style/typography/typography.component.html"),
        }),
        __metadata("design:paramtypes", [_color_service__WEBPACK_IMPORTED_MODULE_1__["ColorService"]])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ })

}]);
//# sourceMappingURL=style-style-module.js.map