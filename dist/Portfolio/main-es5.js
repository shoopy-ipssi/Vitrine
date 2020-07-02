function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    function AppComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Veuillez patientez ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(renderer, router) {
        _classCallCheck(this, AppComponent);

        this.renderer = renderer;
        this.router = router;
        this.showOverlay = true;
        this.title = "Portfolio";
        this.tab_nav = [{
          path: "",
          name: "Home"
        }, {
          path: "team",
          name: "Our Team"
        }, {
          path: "contact",
          name: "Contact"
        }];
        this.imageLoad = [];
        this.indexPage = 0;
        this.previousPage = this.tab_nav.length - 1;
        this.nextPage = 1;
        this.isLoader = true;
      }

      _createClass(AppComponent, [{
        key: "setIndexPage",
        value: function setIndexPage(name) {
          var _this = this;

          this.tab_nav.forEach(function (element) {
            if (name === element.path) {
              _this.indexPage = _this.tab_nav.indexOf(element);
              _this.previousPage = (_this.indexPage - 1 + _this.tab_nav.length) % _this.tab_nav.length;
              _this.nextPage = (_this.indexPage + 1) % _this.tab_nav.length;
            }
          });
        }
      }, {
        key: "getIndexPage",
        value: function getIndexPage() {
          this.ngOnInit();
          return this.indexPage;
        }
      }, {
        key: "preload",
        value: function preload() {
          var _this2 = this;

          var img = ['default', 'AJ', 'DB', 'JG'];
          img.forEach(function (item) {
            _this2.imageLoad[img.indexOf(item)] = new Image();
            _this2.imageLoad[img.indexOf(item)].src = '../assets/' + item + '.jpg';
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.preload();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this3 = this;

          setTimeout(function () {
            _this3.showOverlay = false;
          }, 3000);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 16,
      vars: 3,
      consts: [["class", "my-overlay", 4, "ngIf"], ["id", "main-content", 1, "row"], [1, "col-lg-1", "text-center", "arrow_block_left"], [3, "routerLink"], [1, "cursor"], [1, "arrow", "arrow-first"], [1, "arrow", "arrow-second"], [1, "offset-lg-1", "col-lg-10", "o_bg_black", "b_bl1"], [1, "col-lg-1", "offset-lg-1", "text-center", "arrow_block_right"], [1, "arrow_right", "arrow_right-first"], [1, "arrow_right", "arrow_right-second"], [1, "my-overlay"], ["aria-hidden", "true", 1, "fa", "fa-spinner", "fa-spin"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 8, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showOverlay);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.tab_nav[ctx.previousPage].path);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.tab_nav[ctx.nextPage].path);
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n    background-color: #3a3737;\r\n}\r\napp-footer[_ngcontent-%COMP%] {\r\n    margin-bottom: 0!important;\r\n}\r\napp-navbar[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    z-index: 1;\r\n    width: 100%;\r\n}\r\n#main-content[_ngcontent-%COMP%] {\r\n    margin-top: 5%;\r\n    margin-left:0;\r\n    margin-right: 0;\r\n    min-height: 790px;\r\n}\r\n.o_bg_black[_ngcontent-%COMP%]{\r\n    background-color:rgba(0, 0, 0, 0.5);\r\n    color: white;\r\n    border: black 2px solid\r\n}\r\n.arrow_block_left[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 2%;\r\n}\r\n.arrow_block_right[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 50%;\r\n    right: 0%;\r\n}\r\n.arrow[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n    position: absolute;\r\n        left: 50%;\r\n        top: 50%;\r\n    transform-origin: 50% 50%;\r\n    transform: translate3d(-50%, -50%, 0);\r\n}\r\n.arrow-first[_ngcontent-%COMP%] {\r\n    -webkit-animation: arrow-movement 1s ease-in-out infinite;\r\n            animation: arrow-movement 1s ease-in-out infinite;\r\n}\r\n.arrow-second[_ngcontent-%COMP%] {\r\n    -webkit-animation: arrow-movement 1s 0.5s ease-in-out infinite;\r\n            animation: arrow-movement 1s 0.5s ease-in-out infinite;\r\n}\r\n.arrow[_ngcontent-%COMP%]:before, .arrow[_ngcontent-%COMP%]:after {\r\n    background: #fff;\r\n    content: '';\r\n    display: block;\r\n    height: 3px; \r\n    position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n    width: 30px;\r\n}\r\n.arrow[_ngcontent-%COMP%]:before {\r\n    transform: rotate(45deg) translateY(-23%);\r\n    transform-origin: bottom left;\r\n}\r\n.arrow[_ngcontent-%COMP%]:after {\r\n    transform: rotate(-45deg) translateY(23%);\r\n    transform-origin: top left;\r\n}\r\n@-webkit-keyframes arrow-movement {\r\n    0% { \r\n        opacity: 0;\r\n        right: 10%;\r\n    }\r\n    70% {\r\n        opacity: 1;\r\n    }\r\n    100% { \r\n        opacity: 0;\r\n        right: 0%;\r\n    }\r\n}\r\n@keyframes arrow-movement {\r\n    0% { \r\n        opacity: 0;\r\n        right: 10%;\r\n    }\r\n    70% {\r\n        opacity: 1;\r\n    }\r\n    100% { \r\n        opacity: 0;\r\n        right: 0%;\r\n    }\r\n}\r\n.arrow_right[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n    position: absolute;\r\n        left: 50%;\r\n        top: 50%;\r\n    transform-origin: 50% 50%;\r\n    transform: translate3d(-50%, -50%, 0);\r\n}\r\n.arrow_right-first[_ngcontent-%COMP%] {\r\n    -webkit-animation: arrow_right-movement 1s ease-in-out infinite;\r\n            animation: arrow_right-movement 1s ease-in-out infinite;\r\n}\r\n.arrow_right-second[_ngcontent-%COMP%] {\r\n    -webkit-animation: arrow_right-movement 1s 0.5s ease-in-out infinite;\r\n            animation: arrow_right-movement 1s 0.5s ease-in-out infinite;\r\n}\r\n.arrow_right[_ngcontent-%COMP%]:before, .arrow_right[_ngcontent-%COMP%]:after {\r\n    background: #fff;\r\n    content: '';\r\n    display: block;\r\n    height: 3px; \r\n    position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n    width: 30px;\r\n}\r\n.arrow_right[_ngcontent-%COMP%]:before {\r\n    transform: rotate(45deg) translateY(-23%);\r\n    transform-origin: top right;\r\n}\r\n.arrow_right[_ngcontent-%COMP%]:after {\r\n    transform: rotate(-45deg) translateY(23%);\r\n    transform-origin: top right;\r\n}\r\n@-webkit-keyframes arrow_right-movement {\r\n    0% { \r\n        opacity: 0;\r\n        right: 0%;\r\n    }\r\n    70% {\r\n        opacity: 1;\r\n    }\r\n    100% { \r\n        opacity: 0;\r\n        right: 10%;\r\n    }\r\n}\r\n@keyframes arrow_right-movement {\r\n    0% { \r\n        opacity: 0;\r\n        right: 0%;\r\n    }\r\n    70% {\r\n        opacity: 1;\r\n    }\r\n    100% { \r\n        opacity: 0;\r\n        right: 10%;\r\n    }\r\n}\r\n.my-overlay[_ngcontent-%COMP%] {\r\n    left: 0 !important;\r\n    top: 0 !important;\r\n    z-index: 10000 !important;\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n    position: fixed !important;\r\n    background-color: white !important;\r\n    cursor: pointer !important;\r\n    visibility: visible !important;\r\n    transition: visibility 0s, opacity 0.4s linear !important;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: wait !important;\r\n}\r\n.my-overlay[_ngcontent-%COMP%]   i.fa.fa-spinner.fa-spin[_ngcontent-%COMP%], .spinner-big[_ngcontent-%COMP%] {\r\n    background-color: white!important;\r\n    font-size: 100px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1o7QUFDSjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixRQUFRO0FBQ1o7QUFDQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztBQUNiO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO1FBQ2QsU0FBUztRQUNULFFBQVE7SUFDWix5QkFBeUI7SUFDekIscUNBQXFDO0FBQ3pDO0FBRUE7SUFDSSx5REFBaUQ7WUFBakQsaURBQWlEO0FBQ3JEO0FBQ0E7SUFDSSw4REFBc0Q7WUFBdEQsc0RBQXNEO0FBQzFEO0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtRQUNkLE1BQU07UUFDTixPQUFPO0lBQ1gsV0FBVztBQUNmO0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSTtRQUNJLFVBQVU7UUFDVixVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtRQUNWLFNBQVM7SUFDYjtBQUNKO0FBWkE7SUFDSTtRQUNJLFVBQVU7UUFDVixVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtRQUNWLFNBQVM7SUFDYjtBQUNKO0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO1FBQ2QsU0FBUztRQUNULFFBQVE7SUFDWix5QkFBeUI7SUFDekIscUNBQXFDO0FBQ3pDO0FBRUE7SUFDSSwrREFBdUQ7WUFBdkQsdURBQXVEO0FBQzNEO0FBQ0E7SUFDSSxvRUFBNEQ7WUFBNUQsNERBQTREO0FBQ2hFO0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtRQUNkLE1BQU07UUFDTixPQUFPO0lBQ1gsV0FBVztBQUNmO0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSTtRQUNJLFVBQVU7UUFDVixTQUFTO0lBQ2I7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtRQUNWLFVBQVU7SUFDZDtBQUNKO0FBWkE7SUFDSTtRQUNJLFVBQVU7UUFDVixTQUFTO0lBQ2I7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtRQUNWLFVBQVU7SUFDZDtBQUNKO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixrQ0FBa0M7SUFDbEMsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5Qix5REFBeUQ7SUFDekQsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxpQ0FBaUM7SUFDakMsMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYTM3Mzc7XHJcbn1cclxuYXBwLWZvb3RlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwIWltcG9ydGFudDtcclxufVxyXG5hcHAtbmF2YmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4jbWFpbi1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6MDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIG1pbi1oZWlnaHQ6IDc5MHB4O1xyXG59XHJcbi5vX2JnX2JsYWNre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IGJsYWNrIDJweCBzb2xpZFxyXG59XHJcbi5hcnJvd19ibG9ja19sZWZ0IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogMiU7XHJcbn1cclxuLmFycm93X2Jsb2NrX3JpZ2h0IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcmlnaHQ6IDAlO1xyXG59XHJcbi5hcnJvdyB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApO1xyXG59XHJcblxyXG4uYXJyb3ctZmlyc3Qge1xyXG4gICAgYW5pbWF0aW9uOiBhcnJvdy1tb3ZlbWVudCAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG4uYXJyb3ctc2Vjb25kIHtcclxuICAgIGFuaW1hdGlvbjogYXJyb3ctbW92ZW1lbnQgMXMgMC41cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuLmFycm93OmJlZm9yZSxcclxuLmFycm93OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAzcHg7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbi5hcnJvdzpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZVkoLTIzJSk7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcclxufVxyXG5cclxuLmFycm93OmFmdGVyIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlWSgyMyUpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XHJcbn1cclxuQGtleWZyYW1lcyBhcnJvdy1tb3ZlbWVudCB7XHJcbiAgICAwJSB7IFxyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDEwJTtcclxuICAgIH1cclxuICAgIDcwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDEwMCUgeyBcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmFycm93X3JpZ2h0IHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCk7XHJcbn1cclxuXHJcbi5hcnJvd19yaWdodC1maXJzdCB7XHJcbiAgICBhbmltYXRpb246IGFycm93X3JpZ2h0LW1vdmVtZW50IDFzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG59XHJcbi5hcnJvd19yaWdodC1zZWNvbmQge1xyXG4gICAgYW5pbWF0aW9uOiBhcnJvd19yaWdodC1tb3ZlbWVudCAxcyAwLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG59XHJcblxyXG4uYXJyb3dfcmlnaHQ6YmVmb3JlLFxyXG4uYXJyb3dfcmlnaHQ6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDNweDsgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMzBweDtcclxufVxyXG5cclxuLmFycm93X3JpZ2h0OmJlZm9yZSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlWSgtMjMlKTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcclxufVxyXG5cclxuLmFycm93X3JpZ2h0OmFmdGVyIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlWSgyMyUpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xyXG59XHJcbkBrZXlmcmFtZXMgYXJyb3dfcmlnaHQtbW92ZW1lbnQge1xyXG4gICAgMCUgeyBcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwJTtcclxuICAgIH1cclxuICAgIDcwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDEwMCUgeyBcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAxMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5teS1vdmVybGF5IHtcclxuICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMTAwMDAgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjRzIGxpbmVhciAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogd2FpdCAhaW1wb3J0YW50O1xyXG59XHJcbi5teS1vdmVybGF5IGkuZmEuZmEtc3Bpbm5lci5mYS1zcGluLCAuc3Bpbm5lci1iaWcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxMDBweCAhaW1wb3J0YW50O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _team_team_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./team/team.component */
    "./src/app/team/team.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _global_global_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./global/global.component */
    "./src/app/global/global.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _mentions_legales_mentions_legales_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./mentions-legales/mentions-legales.component */
    "./src/app/mentions-legales/mentions-legales.component.ts");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_15__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_15__["HashLocationStrategy"]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_14__["MDBBootstrapModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([{
        path: 'home',
        redirectTo: ''
      }, {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        data: {
          state: 'home'
        }
      }, {
        path: 'team',
        component: _team_team_component__WEBPACK_IMPORTED_MODULE_6__["TeamComponent"],
        data: {
          state: 'team'
        }
      }, {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
        data: {
          state: 'contact'
        }
      }, {
        path: 'mentions_legales',
        component: _mentions_legales_mentions_legales_component__WEBPACK_IMPORTED_MODULE_13__["MentionsLegalesComponent"]
      }, {
        path: '**',
        redirectTo: ''
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _team_team_component__WEBPACK_IMPORTED_MODULE_6__["TeamComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _global_global_component__WEBPACK_IMPORTED_MODULE_10__["GlobalComponent"], _mentions_legales_mentions_legales_component__WEBPACK_IMPORTED_MODULE_13__["MentionsLegalesComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_14__["MDBBootstrapModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _team_team_component__WEBPACK_IMPORTED_MODULE_6__["TeamComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _global_global_component__WEBPACK_IMPORTED_MODULE_10__["GlobalComponent"], _mentions_legales_mentions_legales_component__WEBPACK_IMPORTED_MODULE_13__["MentionsLegalesComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_14__["MDBBootstrapModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([{
            path: 'home',
            redirectTo: ''
          }, {
            path: '',
            component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            data: {
              state: 'home'
            }
          }, {
            path: 'team',
            component: _team_team_component__WEBPACK_IMPORTED_MODULE_6__["TeamComponent"],
            data: {
              state: 'team'
            }
          }, {
            path: 'contact',
            component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
            data: {
              state: 'contact'
            }
          }, {
            path: 'mentions_legales',
            component: _mentions_legales_mentions_legales_component__WEBPACK_IMPORTED_MODULE_13__["MentionsLegalesComponent"]
          }, {
            path: '**',
            redirectTo: ''
          }])],
          providers: [{
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_15__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_15__["HashLocationStrategy"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ContactComponent_div_1_option_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var contact_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", contact_r6.mail_address);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", contact_r6.name, " ", contact_r6.firstname, " - ", contact_r6.job, "");
      }
    }

    function ContactComponent_div_1_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Veuillez s\xE9lectionner un contact.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ContactComponent_div_1_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_1_div_7_div_1_Template, 2, 0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.dataMail.controls.EmailContact.errors.required);
      }
    }

    function ContactComponent_div_1_div_12_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Veuillez renseigner l'objet de votre mail");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ContactComponent_div_1_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_1_div_12_div_1_Template, 2, 0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dataMail.controls.SubjectMail.errors.required);
      }
    }

    function ContactComponent_div_1_div_17_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Veuillez renseigner le contenu de votre mail");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ContactComponent_div_1_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_1_div_17_div_1_Template, 2, 0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.dataMail.controls.ContentMail.errors.required);
      }
    }

    function ContactComponent_div_1_div_22_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Veuillez renseigner une adresse mail valide");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ContactComponent_div_1_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_1_div_22_div_1_Template, 2, 0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.dataMail.controls.MailFrom.errors.required || ctx_r5.dataMail.controls.MailFrom.errors.email);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    function ContactComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_div_1_Template_form_ngSubmit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.sendMail();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contact");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ContactComponent_div_1_option_6_Template, 2, 4, "option", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ContactComponent_div_1_div_7_Template, 2, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sujet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ContactComponent_div_1_div_12_Template, 2, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contenu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "textarea", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ContactComponent_div_1_div_17_Template, 2, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Votre adresse mail");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ContactComponent_div_1_div_22_Template, 2, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Envoyer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.dataMail);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx_r0.submitted && ctx_r0.dataMail.controls.EmailContact.errors));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.data_contact);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.dataMail.controls.EmailContact.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx_r0.submitted && ctx_r0.dataMail.controls.SubjectMail.errors));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.dataMail.controls.SubjectMail.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx_r0.submitted && ctx_r0.dataMail.controls.ContentMail.errors));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.dataMail.controls.ContentMail.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx_r0.submitted && ctx_r0.dataMail.controls.MailFrom.errors));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.dataMail.controls.MailFrom.errors);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "thx": a0
      };
    };

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent(fb, route, glb, http) {
        _classCallCheck(this, ContactComponent);

        this.fb = fb;
        this.route = route;
        this.glb = glb;
        this.http = http;
        this.submitted = false;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Access-Control-Allow-Origin': '*'
        });
        this.responseMailjet = false;
        this.data_contact = [{
          name: 'Bouyeure',
          firstname: 'Damien',
          mail_address: 'damien.bouyeure@gmail.com',
          job: 'Développeur Backend ( MongoDB, Node )',
          contactable: true
        }, {
          name: 'Besnard',
          firstname: 'Antoine',
          mail_address: 'antoine95560@hotmail.Fr',
          job: 'Développeur Frontend ( Angular, Ionic, Heroku )',
          contactable: true
        }, {
          name: 'Jerbouh',
          firstname: 'Amine',
          mail_address: 'a.jerbouh77420@gmail.com',
          job: 'Développeur Backend ( MySQL, Node )',
          contactable: true
        }, {
          name: 'Genoud',
          firstname: 'Jérémy',
          mail_address: 'genoudj@hotmail.fr',
          job: 'Chef de Projet / Développeur FullStack',
          contactable: true
        }];
        this.dataMail = this.fb.group({
          EmailContact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          SubjectMail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          ContentMail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          MailFrom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]]
        });
      }

      _createClass(ContactComponent, [{
        key: "sendMail",
        value: function sendMail() {
          var _this4 = this;

          this.submitted = true;
          var d = this.dataMail.controls;
          console.log(d.EmailContact.erros == null && d.SubjectMail.erros == null && d.ContentMail.erros == null && d.MailFrom.erros == null);

          if (d.EmailContact.erros == null && d.SubjectMail.erros == null && d.ContentMail.erros == null && d.MailFrom.erros == null) {
            this.http.post('https://shoopymysql.herokuapp.com/sendMail', this.dataMail.value, {
              headers: this.headers
            }).subscribe(function (res) {
              _this4.responseMailjet = res;
              console.log(_this4.responseMailjet);
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.data_contact.forEach(function (element) {
            if (!element.contactable) {
              _this5.data_contact.splice(_this5.data_contact.indexOf(element), 1);
            }
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this6 = this;

          setTimeout(function () {
            _this6.glb.setIndexPage(_this6.route.url.replace('/', ''));
          });
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      hostVars: 2,
      hostBindings: function ContactComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("app-router_navigate", ctx.sendMail);
        }
      },
      decls: 10,
      vars: 4,
      consts: [[1, "container"], [4, "ngIf"], [3, "ngClass"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "EmailContact"], ["id", "EmailContact", "name", "EmailContact", "formControlName", "EmailContact", 1, "form-control", 3, "ngClass"], ["value", "contact.mail_address", 3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "SubjectMail"], ["type", "text", "required", "", "value", "", "name", "SubjectMail", "id", "SubjectMail", "formControlName", "SubjectMail", 1, "form-control", 3, "ngClass"], ["for", "ContentMail"], ["name", "ContentMail", "required", "", "id", "ContentMail", "value", "", "height", "500px", "formControlName", "ContentMail", 1, "form-control", 3, "ngClass"], ["for", "MailFrom"], ["type", "text", "required", "", "id", "MailFrom", "name", "MailFrom", "value", "", "formControlName", "MailFrom", 1, "form-control", 3, "ngClass"], ["type", "submit", 1, "button"], ["value", "contact.mail_address", 3, "ngValue"], [1, "invalid-feedback"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_1_Template, 26, 18, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Merci pour votre message.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nous vous ferons un retour aussi rapidement que possible.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "L'equipe, DoraVsShoopy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.responseMailjet);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, !ctx.responseMailjet));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      styles: [".container[_ngcontent-%COMP%] {\r\n    padding-top: 10%;\r\n}\r\n.thx[_ngcontent-%COMP%] {\r\n    z-index:-1;\r\n    position: absolute\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFVBQVU7SUFDVjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbn1cclxuLnRoeCB7XHJcbiAgICB6LWluZGV4Oi0xO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlXHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, {
        sendMail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.app-router_navigate']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 5,
      vars: 0,
      consts: [["id", "flex", 2, "display", "flex"], ["routerLink", "mentions_legales"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Mentions L\xE9gales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["#flex[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/global/global.component.ts":
  /*!********************************************!*\
    !*** ./src/app/global/global.component.ts ***!
    \********************************************/

  /*! exports provided: GlobalComponent */

  /***/
  function srcAppGlobalGlobalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalComponent", function () {
      return GlobalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GlobalComponent = /*#__PURE__*/function () {
      function GlobalComponent() {
        _classCallCheck(this, GlobalComponent);

        this.indexPage = 0;
        this.tab_nav = [{
          path: "home",
          name: "Home"
        }, {
          path: "skills",
          name: "My Skills"
        }, {
          path: "project",
          name: "Projects"
        }, {
          path: "contact",
          name: "Contact"
        }];
      }

      _createClass(GlobalComponent, [{
        key: "setIndexPage",
        value: function setIndexPage(name) {
          var _this7 = this;

          this.tab_nav.forEach(function (element) {
            if (name === element.path) {
              _this7.indexPage = _this7.tab_nav.indexOf(element);
            }
          });
        }
      }, {
        key: "getIndexPage",
        value: function getIndexPage() {
          return this.indexPage;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GlobalComponent;
    }();

    GlobalComponent.ɵfac = function GlobalComponent_Factory(t) {
      return new (t || GlobalComponent)();
    };

    GlobalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GlobalComponent,
      selectors: [["app-global"]],
      decls: 0,
      vars: 0,
      template: function GlobalComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC9nbG9iYWwuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-global',
          templateUrl: './global.component.html',
          styleUrls: ['./global.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(route, glb) {
        _classCallCheck(this, HomeComponent);

        this.route = route;
        this.glb = glb;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this8 = this;

          setTimeout(function () {
            _this8.glb.setIndexPage(_this8.route.url.replace('/', ''));
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      hostVars: 2,
      hostBindings: function HomeComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("app-router_navigate", ctx.ngOnInit);
        }
      },
      decls: 7,
      vars: 2,
      consts: [[3, "isControls", "animation"], ["src", "https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg", "alt", "First slide", 1, "d-block", "w-100"], ["src", "https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg", "alt", "Second slide", 1, "d-block", "w-100"], ["src", "https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg", "alt", "Third slide", 1, "d-block", "w-100"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-carousel", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-carousel-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mdb-carousel-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mdb-carousel-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isControls", false)("animation", "slide");
        }
      },
      directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["SlideComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
        }];
      }, {
        ngOnInit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.app-router_navigate']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/mentions-legales/mentions-legales.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/mentions-legales/mentions-legales.component.ts ***!
    \****************************************************************/

  /*! exports provided: MentionsLegalesComponent */

  /***/
  function srcAppMentionsLegalesMentionsLegalesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MentionsLegalesComponent", function () {
      return MentionsLegalesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MentionsLegalesComponent = /*#__PURE__*/function () {
      function MentionsLegalesComponent() {
        _classCallCheck(this, MentionsLegalesComponent);
      }

      _createClass(MentionsLegalesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MentionsLegalesComponent;
    }();

    MentionsLegalesComponent.ɵfac = function MentionsLegalesComponent_Factory(t) {
      return new (t || MentionsLegalesComponent)();
    };

    MentionsLegalesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MentionsLegalesComponent,
      selectors: [["app-mentions-legales"]],
      decls: 472,
      vars: 0,
      consts: [["id", "legal-terms", 1, "container"], [2, "text-align", "center"], ["href", "https://shoopy.fr"], ["ng-bind-html", "linkHTML"], ["href", "https://fr.orson.io/1371/generateur-mentions-legales", "title", "g\xE9n\xE9rateur gratuit de mentions l\xE9gales pour un site internet"], ["ng-bind-html", "rgpdHTML"]],
      template: function MentionsLegalesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mentions L\xE9gales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "D\xE9finitions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Client\xA0:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\xA0tout professionnel ou personne physique capable au sens des articles 1123 et suivants du Code civil, ou personne morale, qui visite le Site objet des pr\xE9sentes conditions g\xE9n\xE9rales.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Prestations et Services\xA0:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " met \xE0 disposition des Clients\xA0:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Contenu\xA0:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\xA0Ensemble des \xE9l\xE9ments constituants l\u2019information pr\xE9sente sur le Site, notamment textes \u2013 images \u2013 vid\xE9os.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Informations clients\xA0:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Ci apr\xE8s d\xE9nomm\xE9 \xAB\xA0Information (s)\xA0\xBB qui correspondent \xE0 l\u2019ensemble des donn\xE9es personnelles susceptibles d\u2019\xEAtre d\xE9tenues par ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " pour la gestion de votre compte, de la gestion de la relation client et \xE0 des fins d\u2019analyses et de statistiques.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Utilisateur :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Internaute se connectant, utilisant le site susnomm\xE9.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Informations personnelles :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \xAB Les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent \xBB (article 4 de la loi n\xB0 78-17 du 6 janvier 1978).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Les termes \xAB\xA0donn\xE9es \xE0 caract\xE8re personnel\xA0\xBB, \xAB\xA0personne concern\xE9e\xA0\xBB, \xAB\xA0sous traitant\xA0\xBB et \xAB\xA0donn\xE9es sensibles\xA0\xBB ont le sens d\xE9fini par le R\xE8glement G\xE9n\xE9ral sur la Protection des Donn\xE9es (RGPD\xA0: n\xB0 2016-679)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "1. Pr\xE9sentation du site internet.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "En vertu de l'article 6 de la loi n\xB0 2004-575 du 21 juin 2004 pour la confiance dans l'\xE9conomie num\xE9rique, il est pr\xE9cis\xE9 aux utilisateurs du site internet\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\xA0l'identit\xE9 des diff\xE9rents intervenants dans le cadre de sa r\xE9alisation et de son suivi: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Propri\xE9taire");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " : SARL DoraVsShoopy Capital social de 10000\u20AC Num\xE9ro de TVA: 123456789 \u2013 25 rue Claude Tillier 75001 Paris");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Responsable publication");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " : Antoine Besnard \u2013 a.besnard@ecole-ipssi.net");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Le responsable publication est une personne physique ou une personne morale.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Webmaster");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " : Genoud J\xE9r\xE9my \u2013 j.genoud@ecole-ipssi.net");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "H\xE9bergeur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " : Heroku \u2013 26 rue claude Tillier 75012 Paris 01 55 43 26 65");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "D\xE9l\xE9gu\xE9 \xE0 la protection des donn\xE9es");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " : Jerbouh Amine \u2013 a.jerbouh@ecole-ipssi.net");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Les mentions l\xE9gales sont issues du mod\xE8le propos\xE9 par le ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "g\xE9n\xE9rateur gratuit de mentions l\xE9gales pour un site internet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "2. Conditions g\xE9n\xE9rales d\u2019utilisation du site et des services propos\xE9s.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Le Site constitue une \u0153uvre de l\u2019esprit prot\xE9g\xE9e par les dispositions du Code de la Propri\xE9t\xE9 Intellectuelle et des R\xE9glementations Internationales applicables. Le Client ne peut en aucune mani\xE8re r\xE9utiliser, c\xE9der ou exploiter pour son propre compte tout ou partie des \xE9l\xE9ments ou travaux du Site.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "L\u2019utilisation du site\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\xA0implique l\u2019acceptation pleine et enti\xE8re des conditions g\xE9n\xE9rales d\u2019utilisation ci-apr\xE8s d\xE9crites. Ces conditions d\u2019utilisation sont susceptibles d\u2019\xEAtre modifi\xE9es ou compl\xE9t\xE9es \xE0 tout moment, les utilisateurs du site\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\xA0sont donc invit\xE9s \xE0 les consulter de mani\xE8re r\xE9guli\xE8re.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Ce site internet est normalement accessible \xE0 tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut \xEAtre toutefois d\xE9cid\xE9e par ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, ", qui s\u2019efforcera alors de communiquer pr\xE9alablement aux utilisateurs les dates et heures de l\u2019intervention. Le site web\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\xA0est mis \xE0 jour r\xE9guli\xE8rement par ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " responsable. De la m\xEAme fa\xE7on, les mentions l\xE9gales peuvent \xEAtre modifi\xE9es \xE0 tout moment : elles s\u2019imposent n\xE9anmoins \xE0 l\u2019utilisateur qui est invit\xE9 \xE0 s\u2019y r\xE9f\xE9rer le plus souvent possible afin d\u2019en prendre connaissance.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "3. Description des services fournis.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Le site internet\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\xA0a pour objet de fournir une information concernant l\u2019ensemble des activit\xE9s de la soci\xE9t\xE9. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " s\u2019efforce de fournir sur le site\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\xA0des informations aussi pr\xE9cises que possible. Toutefois, il ne pourra \xEAtre tenu responsable des oublis, des inexactitudes et des carences dans la mise \xE0 jour, qu\u2019elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Toutes les informations indiqu\xE9es sur le site\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "\xA0sont donn\xE9es \xE0 titre indicatif, et sont susceptibles d\u2019\xE9voluer. Par ailleurs, les renseignements figurant sur le site\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\xA0ne sont pas exhaustifs. Ils sont donn\xE9s sous r\xE9serve de modifications ayant \xE9t\xE9 apport\xE9es depuis leur mise en ligne.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "4. Limitations contractuelles sur les donn\xE9es techniques.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Le site utilise la technologie JavaScript. Le site Internet ne pourra \xEAtre tenu responsable de dommages mat\xE9riels li\xE9s \xE0 l\u2019utilisation du site. De plus, l\u2019utilisateur du site s\u2019engage \xE0 acc\xE9der au site en utilisant un mat\xE9riel r\xE9cent, ne contenant pas de virus et avec un navigateur de derni\xE8re g\xE9n\xE9ration mis-\xE0-jour Le site ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " est h\xE9berg\xE9 chez un prestataire sur le territoire de l\u2019Union Europ\xE9enne conform\xE9ment aux dispositions du R\xE8glement G\xE9n\xE9ral sur la Protection des Donn\xE9es (RGPD\xA0: n\xB0 2016-679)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "L\u2019objectif est d\u2019apporter une prestation qui assure le meilleur taux d\u2019accessibilit\xE9. L\u2019h\xE9bergeur assure la continuit\xE9 de son service 24 Heures sur 24, tous les jours de l\u2019ann\xE9e. Il se r\xE9serve n\xE9anmoins la possibilit\xE9 d\u2019interrompre le service d\u2019h\xE9bergement pour les dur\xE9es les plus courtes possibles notamment \xE0 des fins de maintenance, d\u2019am\xE9lioration de ses infrastructures, de d\xE9faillance de ses infrastructures ou si les Prestations et Services g\xE9n\xE8rent un trafic r\xE9put\xE9 anormal.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " et l\u2019h\xE9bergeur ne pourront \xEAtre tenus responsables en cas de dysfonctionnement du r\xE9seau Internet, des lignes t\xE9l\xE9phoniques ou du mat\xE9riel informatique et de t\xE9l\xE9phonie li\xE9 notamment \xE0 l\u2019encombrement du r\xE9seau emp\xEAchant l\u2019acc\xE8s au serveur.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "5. Propri\xE9t\xE9 intellectuelle et contrefa\xE7ons.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " est propri\xE9taire des droits de propri\xE9t\xE9 intellectuelle et d\xE9tient les droits d\u2019usage sur tous les \xE9l\xE9ments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vid\xE9os, ic\xF4nes et sons. Toute reproduction, repr\xE9sentation, modification, publication, adaptation de tout ou partie des \xE9l\xE9ments du site, quel que soit le moyen ou le proc\xE9d\xE9 utilis\xE9, est interdite, sauf autorisation \xE9crite pr\xE9alable de : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Toute exploitation non autoris\xE9e du site ou de l\u2019un quelconque des \xE9l\xE9ments qu\u2019il contient sera consid\xE9r\xE9e comme constitutive d\u2019une contrefa\xE7on et poursuivie conform\xE9ment aux dispositions des articles L.335-2 et suivants du Code de Propri\xE9t\xE9 Intellectuelle.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "6. Limitations de responsabilit\xE9.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " agit en tant qu\u2019\xE9diteur du site. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " \xA0est responsable de la qualit\xE9 et de la v\xE9racit\xE9 du Contenu qu\u2019il publie. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " ne pourra \xEAtre tenu responsable des dommages directs et indirects caus\xE9s au mat\xE9riel de l\u2019utilisateur, lors de l\u2019acc\xE8s au site internet ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, ", et r\xE9sultant soit de l\u2019utilisation d\u2019un mat\xE9riel ne r\xE9pondant pas aux sp\xE9cifications indiqu\xE9es au point 4, soit de l\u2019apparition d\u2019un bug ou d\u2019une incompatibilit\xE9.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " ne pourra \xE9galement \xEAtre tenu responsable des dommages indirects (tels par exemple qu\u2019une perte de march\xE9 ou perte d\u2019une chance) cons\xE9cutifs \xE0 l\u2019utilisation du site\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, ". Des espaces interactifs (possibilit\xE9 de poser des questions dans l\u2019espace contact) sont \xE0 la disposition des utilisateurs. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " se r\xE9serve le droit de supprimer, sans mise en demeure pr\xE9alable, tout contenu d\xE9pos\xE9 dans cet espace qui contreviendrait \xE0 la l\xE9gislation applicable en France, en particulier aux dispositions relatives \xE0 la protection des donn\xE9es. Le cas \xE9ch\xE9ant, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " se r\xE9serve \xE9galement la possibilit\xE9 de mettre en cause la responsabilit\xE9 civile et/ou p\xE9nale de l\u2019utilisateur, notamment en cas de message \xE0 caract\xE8re raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilis\xE9 (texte, photographie \u2026).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "7. Gestion des donn\xE9es personnelles.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Le Client est inform\xE9 des r\xE9glementations concernant la communication marketing, la loi du 21 Juin 2014 pour la confiance dans l\u2019Economie Num\xE9rique, la Loi Informatique et Libert\xE9 du 06 Ao\xFBt 2004 ainsi que du R\xE8glement G\xE9n\xE9ral sur la Protection des Donn\xE9es (RGPD\xA0: n\xB0 2016-679). ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "7.1 Responsables de la collecte des donn\xE9es personnelles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Pour les Donn\xE9es Personnelles collect\xE9es dans le cadre de la cr\xE9ation du compte personnel de l\u2019Utilisateur et de sa navigation sur le Site, le responsable du traitement des Donn\xE9es Personnelles est : DoraVsShoopy. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "est repr\xE9sent\xE9 par Genoud J\xE9r\xE9my, son repr\xE9sentant l\xE9gal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "En tant que responsable du traitement des donn\xE9es qu\u2019il collecte, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " s\u2019engage \xE0 respecter le cadre des dispositions l\xE9gales en vigueur. Il lui appartient notamment au Client d\u2019\xE9tablir les finalit\xE9s de ses traitements de donn\xE9es, de fournir \xE0 ses prospects et clients, \xE0 partir de la collecte de leurs consentements, une information compl\xE8te sur le traitement de leurs donn\xE9es personnelles et de maintenir un registre des traitements conforme \xE0 la r\xE9alit\xE9. Chaque fois que ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, " traite des Donn\xE9es Personnelles, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " prend toutes les mesures raisonnables pour s\u2019assurer de l\u2019exactitude et de la pertinence des Donn\xE9es Personnelles au regard des finalit\xE9s pour lesquelles ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " les traite.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "7.2 Finalit\xE9 des donn\xE9es collect\xE9es");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " est susceptible de traiter tout ou partie des donn\xE9es : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "pour permettre la navigation sur le Site et la gestion et la tra\xE7abilit\xE9 des prestations et services command\xE9s par l\u2019utilisateur : donn\xE9es de connexion et d\u2019utilisation du Site, facturation, historique des commandes, etc. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "pour pr\xE9venir et lutter contre la fraude informatique (spamming, hacking\u2026) : mat\xE9riel informatique utilis\xE9 pour la navigation, l\u2019adresse IP, le mot de passe (hash\xE9) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "pour am\xE9liorer la navigation sur le Site : donn\xE9es de connexion et d\u2019utilisation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "pour mener des enqu\xEAtes de satisfaction facultatives sur ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, " : adresse email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "pour mener des campagnes de communication (sms, mail) : num\xE9ro de t\xE9l\xE9phone, adresse email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, " ne commercialise pas vos donn\xE9es personnelles qui sont donc uniquement utilis\xE9es par n\xE9cessit\xE9 ou \xE0 des fins statistiques et d\u2019analyses.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "7.3 Droit d\u2019acc\xE8s, de rectification et d\u2019opposition");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, " Conform\xE9ment \xE0 la r\xE9glementation europ\xE9enne en vigueur, les Utilisateurs de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, " disposent des droits suivants : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "droit d'acc\xE8s (article 15 RGPD) et de rectification (article 16 RGPD), de mise \xE0 jour, de compl\xE9tude des donn\xE9es des Utilisateurs droit de verrouillage ou d\u2019effacement des donn\xE9es des Utilisateurs \xE0 caract\xE8re personnel (article 17 du RGPD), lorsqu\u2019elles sont inexactes, incompl\xE8tes, \xE9quivoques, p\xE9rim\xE9es, ou dont la collecte, l'utilisation, la communication ou la conservation est interdite ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "droit de retirer \xE0 tout moment un consentement (article 13-2c RGPD) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "droit \xE0 la limitation du traitement des donn\xE9es des Utilisateurs (article 18 RGPD) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "droit d\u2019opposition au traitement des donn\xE9es des Utilisateurs (article 21 RGPD) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "droit \xE0 la portabilit\xE9 des donn\xE9es que les Utilisateurs auront fournies, lorsque ces donn\xE9es font l\u2019objet de traitements automatis\xE9s fond\xE9s sur leur consentement ou sur un contrat (article 20 RGPD) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "droit de d\xE9finir le sort des donn\xE9es des Utilisateurs apr\xE8s leur mort et de choisir \xE0 qui ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, " devra communiquer (ou non) ses donn\xE9es \xE0 un tiers qu\u2019ils aura pr\xE9alablement d\xE9sign\xE9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, " \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "D\xE8s que ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, " a connaissance du d\xE9c\xE8s d\u2019un Utilisateur et \xE0 d\xE9faut d\u2019instructions de sa part, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, " s\u2019engage \xE0 d\xE9truire ses donn\xE9es, sauf si leur conservation s\u2019av\xE8re n\xE9cessaire \xE0 des fins probatoires ou pour r\xE9pondre \xE0 une obligation l\xE9gale.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Si l\u2019Utilisateur souhaite savoir comment ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, " utilise ses Donn\xE9es Personnelles, demander \xE0 les rectifier ou s\u2019oppose \xE0 leur traitement, l\u2019Utilisateur peut contacter ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, " par \xE9crit \xE0 l\u2019adresse suivante : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, " \xA0 DoraVsShoopy \u2013 DPO, Jerbouh Amine ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, " 25 rue Claude Tillier 75001 Paris. \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Dans ce cas, l\u2019Utilisateur doit indiquer les Donn\xE9es Personnelles qu\u2019il souhaiterait que ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, " corrige, mette \xE0 jour ou supprime, en s\u2019identifiant pr\xE9cis\xE9ment avec une copie d\u2019une pi\xE8ce d\u2019identit\xE9 (carte d\u2019identit\xE9 ou passeport). ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, " Les demandes de suppression de Donn\xE9es Personnelles seront soumises aux obligations qui sont impos\xE9es \xE0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " par la loi, notamment en mati\xE8re de conservation ou d\u2019archivage des documents. Enfin, les Utilisateurs de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, " peuvent d\xE9poser une r\xE9clamation aupr\xE8s des autorit\xE9s de contr\xF4le, et notamment de la CNIL (https://www.cnil.fr/fr/plaintes).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "7.4 Non-communication des donn\xE9es personnelles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, " s\u2019interdit de traiter, h\xE9berger ou transf\xE9rer les Informations collect\xE9es sur ses Clients vers un pays situ\xE9 en dehors de l\u2019Union europ\xE9enne ou reconnu comme \xAB\xA0non ad\xE9quat\xA0\xBB par la Commission europ\xE9enne sans en informer pr\xE9alablement le client. Pour autant, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, " reste libre du choix de ses sous-traitants techniques et commerciaux \xE0 la condition qu\u2019il pr\xE9sentent les garanties suffisantes au regard des exigences du R\xE8glement G\xE9n\xE9ral sur la Protection des Donn\xE9es (RGPD\xA0: n\xB0 2016-679).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, " s\u2019engage \xE0 prendre toutes les pr\xE9cautions n\xE9cessaires afin de pr\xE9server la s\xE9curit\xE9 des Informations et notamment qu\u2019elles ne soient pas communiqu\xE9es \xE0 des personnes non autoris\xE9es. Cependant, si un incident impactant l\u2019int\xE9grit\xE9 ou la confidentialit\xE9 des Informations du Client est port\xE9e \xE0 la connaissance de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, ", celle-ci devra dans les meilleurs d\xE9lais informer le Client et lui communiquer les mesures de corrections prises. Par ailleurs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, " ne collecte aucune \xAB\xA0donn\xE9es sensibles\xA0\xBB.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, " Les Donn\xE9es Personnelles de l\u2019Utilisateur peuvent \xEAtre trait\xE9es par des filiales de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, " et des sous-traitants (prestataires de services), exclusivement afin de r\xE9aliser les finalit\xE9s de la pr\xE9sente politique.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, " Dans la limite de leurs attributions respectives et pour les finalit\xE9s rappel\xE9es ci-dessus, les principales personnes susceptibles d\u2019avoir acc\xE8s aux donn\xE9es des Utilisateurs de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, " sont principalement les agents de notre service client.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "7.5 Types de donn\xE9es collect\xE9es");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Concernant les utilisateurs d\u2019un Site ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, ", nous collectons les donn\xE9es suivantes qui sont indispensables au fonctionnement du service\xA0, et qui seront conserv\xE9es pendant une p\xE9riode maximale de 24 mois mois apr\xE8s la fin de la relation contractuelle:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](326, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "adresse \xE9lectronique, pseudonyme");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, " collecte en outre des informations qui permettent d\u2019am\xE9liorer l\u2019exp\xE9rience utilisateur et de proposer des conseils contextualis\xE9s\xA0:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "nom, prenom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, " Ces \xA0donn\xE9es sont conserv\xE9es pour une p\xE9riode maximale de 24 mois mois apr\xE8s la fin de la relation contractuelle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "8. Notification d\u2019incident");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, " Quels que soient les efforts fournis, aucune m\xE9thode de transmission sur Internet et aucune m\xE9thode de stockage \xE9lectronique n'est compl\xE8tement s\xFBre. Nous ne pouvons en cons\xE9quence pas garantir une s\xE9curit\xE9 absolue. Si nous prenions connaissance d'une br\xE8che de la s\xE9curit\xE9, nous avertirions les utilisateurs concern\xE9s afin qu'ils puissent prendre les mesures appropri\xE9es. Nos proc\xE9dures de notification d\u2019incident tiennent compte de nos obligations l\xE9gales, qu'elles se situent au niveau national ou europ\xE9en. Nous nous engageons \xE0 informer pleinement nos clients de toutes les questions relevant de la s\xE9curit\xE9 de leur compte et \xE0 leur fournir toutes les informations n\xE9cessaires pour les aider \xE0 respecter leurs propres obligations r\xE9glementaires en mati\xE8re de reporting.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, " Aucune information personnelle de l'utilisateur du site\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "\xA0n'est publi\xE9e \xE0 l'insu de l'utilisateur, \xE9chang\xE9e, transf\xE9r\xE9e, c\xE9d\xE9e ou vendue sur un support quelconque \xE0 des tiers. Seule l'hypoth\xE8se du rachat de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, " et de ses droits permettrait la transmission des dites informations \xE0 l'\xE9ventuel acqu\xE9reur qui serait \xE0 son tour tenu de la m\xEAme obligation de conservation et de modification des donn\xE9es vis \xE0 vis de l'utilisateur du site\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "S\xE9curit\xE9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, " Pour assurer la s\xE9curit\xE9 et la confidentialit\xE9 des Donn\xE9es Personnelles et des Donn\xE9es Personnelles de Sant\xE9, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, " utilise des r\xE9seaux prot\xE9g\xE9s par des dispositifs standards tels que par pare-feu, la pseudonymisation, l\u2019encryption et mot de passe. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, " Lors du traitement des Donn\xE9es Personnelles, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "prend toutes les mesures raisonnables visant \xE0 les prot\xE9ger contre toute perte, utilisation d\xE9tourn\xE9e, acc\xE8s non autoris\xE9, divulgation, alt\xE9ration ou destruction.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "9. Liens hypertextes \xAB cookies \xBB et balises (\u201Ctags\u201D) internet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, " Le site\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "\xA0contient un certain nombre de liens hypertextes vers d\u2019autres sites, mis en place avec l\u2019autorisation de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, ". Cependant, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, " n\u2019a pas la possibilit\xE9 de v\xE9rifier le contenu des sites ainsi visit\xE9s, et n\u2019assumera en cons\xE9quence aucune responsabilit\xE9 de ce fait.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, " Sauf si vous d\xE9cidez de d\xE9sactiver les cookies, vous acceptez que le site puisse les utiliser. Vous pouvez \xE0 tout moment d\xE9sactiver ces cookies et ce gratuitement \xE0 partir des possibilit\xE9s de d\xE9sactivation qui vous sont offertes et rappel\xE9es ci-apr\xE8s, sachant que cela peut r\xE9duire ou emp\xEAcher l\u2019accessibilit\xE9 \xE0 tout ou partie des Services propos\xE9s par le site. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](379, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "9.1. \xAB COOKIES \xBB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, " \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, " Un \xAB cookie \xBB est un petit fichier d\u2019information envoy\xE9 sur le navigateur de l\u2019Utilisateur et enregistr\xE9 au sein du terminal de l\u2019Utilisateur (ex : ordinateur, smartphone), (ci-apr\xE8s \xAB Cookies \xBB). Ce fichier comprend des informations telles que le nom de domaine de l\u2019Utilisateur, le fournisseur d\u2019acc\xE8s Internet de l\u2019Utilisateur, le syst\xE8me d\u2019exploitation de l\u2019Utilisateur, ainsi que la date et l\u2019heure d\u2019acc\xE8s. Les Cookies ne risquent en aucun cas d\u2019endommager le terminal de l\u2019Utilisateur.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, " \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, " est susceptible de traiter les informations de l\u2019Utilisateur concernant sa visite du Site, telles que les pages consult\xE9es, les recherches effectu\xE9es. Ces informations permettent \xE0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, " d\u2019am\xE9liorer le contenu du Site, de la navigation de l\u2019Utilisateur.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, " \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, " Les Cookies facilitant la navigation et/ou la fourniture des services propos\xE9s par le Site, l\u2019Utilisateur peut configurer son navigateur pour qu\u2019il lui permette de d\xE9cider s\u2019il souhaite ou non les accepter de mani\xE8re \xE0 ce que des Cookies soient enregistr\xE9s dans le terminal ou, au contraire, qu\u2019ils soient rejet\xE9s, soit syst\xE9matiquement, soit selon leur \xE9metteur. L\u2019Utilisateur peut \xE9galement configurer son logiciel de navigation de mani\xE8re \xE0 ce que l\u2019acceptation ou le refus des Cookies lui soient propos\xE9s ponctuellement, avant qu\u2019un Cookie soit susceptible d\u2019\xEAtre enregistr\xE9 dans son terminal. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, " informe l\u2019Utilisateur que, dans ce cas, il se peut que les fonctionnalit\xE9s de son logiciel de navigation ne soient pas toutes disponibles.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, " \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, " Si l\u2019Utilisateur refuse l\u2019enregistrement de Cookies dans son terminal ou son navigateur, ou si l\u2019Utilisateur supprime ceux qui y sont enregistr\xE9s, l\u2019Utilisateur est inform\xE9 que sa navigation et son exp\xE9rience sur le Site peuvent \xEAtre limit\xE9es. Cela pourrait \xE9galement \xEAtre le cas lorsque ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, " ou l\u2019un de ses prestataires ne peut pas reconna\xEEtre, \xE0 des fins de compatibilit\xE9 technique, le type de navigateur utilis\xE9 par le terminal, les param\xE8tres de langue et d\u2019affichage ou le pays depuis lequel le terminal semble connect\xE9 \xE0 Internet.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, " \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, " Le cas \xE9ch\xE9ant, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, " d\xE9cline toute responsabilit\xE9 pour les cons\xE9quences li\xE9es au fonctionnement d\xE9grad\xE9 du Site et des services \xE9ventuellement propos\xE9s par ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, ", r\xE9sultant (i) du refus de Cookies par l\u2019Utilisateur (ii) de l\u2019impossibilit\xE9 pour ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, " d\u2019enregistrer ou de consulter les Cookies n\xE9cessaires \xE0 leur fonctionnement du fait du choix de l\u2019Utilisateur. Pour la gestion des Cookies et des choix de l\u2019Utilisateur, la configuration de chaque navigateur est diff\xE9rente. Elle est d\xE9crite dans le menu d\u2019aide du navigateur, qui permettra de savoir de quelle mani\xE8re l\u2019Utilisateur peut modifier ses souhaits en mati\xE8re de Cookies.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, " \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, " \xC0 tout moment, l\u2019Utilisateur peut faire le choix d\u2019exprimer et de modifier ses souhaits en mati\xE8re de Cookies. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, " pourra en outre faire appel aux services de prestataires externes pour l\u2019aider \xE0 recueillir et traiter les informations d\xE9crites dans cette section.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, " \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, " Enfin, en cliquant sur les ic\xF4nes d\xE9di\xE9es aux r\xE9seaux sociaux Twitter, Facebook, Linkedin et Google Plus figurant sur le Site de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, " ou dans son application mobile et si l\u2019Utilisateur a accept\xE9 le d\xE9p\xF4t de cookies en poursuivant sa navigation sur le Site Internet ou l\u2019application mobile de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, ", Twitter, Facebook, Linkedin et Google Plus peuvent \xE9galement d\xE9poser des cookies sur vos terminaux (ordinateur, tablette, t\xE9l\xE9phone portable).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, " \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, " Ces types de cookies ne sont d\xE9pos\xE9s sur vos terminaux qu\u2019\xE0 condition que vous y consentiez, en continuant votre navigation sur le Site Internet ou l\u2019application mobile de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, ". \xC0 tout moment, l\u2019Utilisateur peut n\xE9anmoins revenir sur son consentement \xE0 ce que ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](440, " d\xE9pose ce type de cookies.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, "Article 9.2. BALISES (\u201CTAGS\u201D) INTERNET");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, " peut employer occasionnellement des balises Internet (\xE9galement appel\xE9es \xAB tags \xBB, ou balises d\u2019action, GIF \xE0 un pixel, GIF transparents, GIF invisibles et GIF un \xE0 un) et les d\xE9ployer par l\u2019interm\xE9diaire d\u2019un partenaire sp\xE9cialiste d\u2019analyses Web susceptible de se trouver (et donc de stocker les informations correspondantes, y compris l\u2019adresse IP de l\u2019Utilisateur) dans un pays \xE9tranger.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, " Ces balises sont plac\xE9es \xE0 la fois dans les publicit\xE9s en ligne permettant aux internautes d\u2019acc\xE9der au Site, et sur les diff\xE9rentes pages de celui-ci. \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, " Cette technologie permet \xE0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, " d\u2019\xE9valuer les r\xE9ponses des visiteurs face au Site et l\u2019efficacit\xE9 de ses actions (par exemple, le nombre de fois o\xF9 une page est ouverte et les informations consult\xE9es), ainsi que l\u2019utilisation de ce Site par l\u2019Utilisateur. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457, " \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, " Le prestataire externe pourra \xE9ventuellement recueillir des informations sur les visiteurs du Site et d\u2019autres sites Internet gr\xE2ce \xE0 ces balises, constituer des rapports sur l\u2019activit\xE9 du Site \xE0 l\u2019attention de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, ", et fournir d\u2019autres services relatifs \xE0 l\u2019utilisation de celui-ci et d\u2019Internet.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, " \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](464, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, "10. Droit applicable et attribution de juridiction.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](468, " Tout litige en relation avec l\u2019utilisation du site\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](470, "https://shoopy.fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, "\xA0est soumis au droit fran\xE7ais. En dehors des cas o\xF9 la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux comp\xE9tents de Paris");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnRpb25zLWxlZ2FsZXMvbWVudGlvbnMtbGVnYWxlcy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MentionsLegalesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mentions-legales',
          templateUrl: './mentions-legales.component.html',
          styleUrls: ['./mentions-legales.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NavbarComponent_li_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://", item_r2.path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("color: ", item_r2.color, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa fa-", item_r2.icon, "");
      }
    }

    function NavbarComponent_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", item_r3.path);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.name);
      }
    }

    var _c0 = function _c0() {
      return {
        exact: true
      };
    };

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);

        this.tab_rs = [{
          path: 'github.com/shoopy-ipssi/',
          icon: 'github',
          color: "white"
        }];
        this.tab_nav = [{
          path: "team",
          name: "Notre équipe"
        }, {
          path: "contact",
          name: "Contact"
        }];
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 9,
      vars: 4,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg_p_dark", "border-bottom", "border-dark"], [1, "collapse", "navbar-collapse"], ["routerLinkActive", "active", 1, "navbar-nav", "mr-auto"], ["class", "nav-item", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["routerLinkActive", "active-link", "routerLink", "", 1, "nav-link", "text-center", 3, "routerLinkActiveOptions"], ["target", "_blank", 1, "nav-link", "text-center", 3, "href"], ["routerLinkActive", "active-link", 1, "nav-link", "text-center", 3, "routerLink"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavbarComponent_li_3_Template, 3, 7, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Accueil");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavbarComponent_li_8_Template, 3, 2, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tab_rs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tab_nav);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".active-link[_ngcontent-%COMP%] {\r\n    -webkit-animation: neon2 1.5s ease-in-out infinite alternate;\r\n    animation: neon2 1.5s ease-in-out infinite alternate;\r\n}\r\n.bg_p_dark[_ngcontent-%COMP%] {\r\n    background: #3a3737;\r\n    border-bottom: 0.002rem black solid !important;\r\n}\r\na[_ngcontent-%COMP%]:not(.active-link):hover {\r\n    -webkit-animation: neon2 1.5s ease-in-out infinite alternate;\r\n    animation: neon2 1.5s ease-in-out infinite alternate;\r\n  }\r\n@-webkit-keyframes neon2 {\r\n    from {\r\n      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228DFF, 0 0 70px #228DFF, 0 0 80px #228DFF, 0 0 100px #228DFF, 0 0 150px #228DFF;\r\n    }\r\n    to {\r\n      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228DFF, 0 0 35px #228DFF, 0 0 40px #228DFF, 0 0 50px #228DFF, 0 0 75px #228DFF;\r\n    }\r\n  }\r\n@keyframes neon2 {\r\n    from {\r\n      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228DFF, 0 0 70px #228DFF, 0 0 80px #228DFF, 0 0 100px #228DFF, 0 0 150px #228DFF;\r\n    }\r\n    to {\r\n      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228DFF, 0 0 35px #228DFF, 0 0 40px #228DFF, 0 0 50px #228DFF, 0 0 75px #228DFF;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNERBQTREO0lBRTVELG9EQUFvRDtBQUN4RDtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLDhDQUE4QztBQUNsRDtBQUNBO0lBQ0ksNERBQTREO0lBRTVELG9EQUFvRDtFQUN0RDtBQUNGO0lBQ0k7TUFDRSxvSkFBb0o7SUFDdEo7SUFDQTtNQUNFLGlKQUFpSjtJQUNuSjtFQUNGO0FBUEY7SUFDSTtNQUNFLG9KQUFvSjtJQUN0SjtJQUNBO01BQ0UsaUpBQWlKO0lBQ25KO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlLWxpbmsge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IG5lb24yIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gICAgLW1vei1hbmltYXRpb246IG5lb24yIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gICAgYW5pbWF0aW9uOiBuZW9uMiAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcclxufVxyXG4uYmdfcF9kYXJrIHtcclxuICAgIGJhY2tncm91bmQ6ICMzYTM3Mzc7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjAwMnJlbSBibGFjayBzb2xpZCAhaW1wb3J0YW50O1xyXG59XHJcbmE6bm90KC5hY3RpdmUtbGluayk6aG92ZXIge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IG5lb24yIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gICAgLW1vei1hbmltYXRpb246IG5lb24yIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gICAgYW5pbWF0aW9uOiBuZW9uMiAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcclxuICB9XHJcbkBrZXlmcmFtZXMgbmVvbjIge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCAjZmZmLCAwIDAgMjBweCAjZmZmLCAwIDAgMzBweCAjZmZmLCAwIDAgNDBweCAjMjI4REZGLCAwIDAgNzBweCAjMjI4REZGLCAwIDAgODBweCAjMjI4REZGLCAwIDAgMTAwcHggIzIyOERGRiwgMCAwIDE1MHB4ICMyMjhERkY7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgIHRleHQtc2hhZG93OiAwIDAgNXB4ICNmZmYsIDAgMCAxMHB4ICNmZmYsIDAgMCAxNXB4ICNmZmYsIDAgMCAyMHB4ICMyMjhERkYsIDAgMCAzNXB4ICMyMjhERkYsIDAgMCA0MHB4ICMyMjhERkYsIDAgMCA1MHB4ICMyMjhERkYsIDAgMCA3NXB4ICMyMjhERkY7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/team/team.component.ts":
  /*!****************************************!*\
    !*** ./src/app/team/team.component.ts ***!
    \****************************************/

  /*! exports provided: TeamComponent */

  /***/
  function srcAppTeamTeamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamComponent", function () {
      return TeamComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TeamComponent_div_0_img_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
      }

      if (rf & 2) {
        var data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", data_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function TeamComponent_div_0_li_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r6);
      }
    }

    function TeamComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TeamComponent_div_0_img_2_Template, 1, 1, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamComponent_div_0_Template_li_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var data_r1 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.slideActivate(data_r1.lastname);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Mes comp\xE9tences");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamComponent_div_0_Template_div_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var data_r1 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.slideActivate(data_r1.lastname);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TeamComponent_div_0_li_22_Template, 2, 1, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r1.img != "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.firstname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.lastname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "http://github.com/", data_r1.git, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "http://linkedin.com/in/", data_r1.link, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "arrow_", data_r1.lastname, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", data_r1.lastname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", data_r1.skills);
      }
    }

    var TeamComponent = /*#__PURE__*/function () {
      function TeamComponent(route, glb) {
        _classCallCheck(this, TeamComponent);

        this.route = route;
        this.glb = glb;
        this.team_data = [{
          firstname: 'Antoine',
          lastname: 'Besnard',
          img: this.glb.imageLoad[0].src,
          link: 'antoine-besnard-10b822145',
          git: 'AntoineBes',
          skills: ["Angular", "NodeJS", "Heroku", "Github", "Javascript"]
        }, {
          firstname: 'Amine',
          lastname: 'Jerbouh',
          img: this.glb.imageLoad[1].src,
          link: 'jerbouh',
          git: 'Ajerbouh',
          skills: ["NodeJS", "SQL", "Php", "Github", "Docker"]
        }, {
          firstname: 'Damien',
          lastname: 'Bouyeure',
          img: this.glb.imageLoad[2].src,
          link: 'damien-bouyeure-15a915119',
          git: 'damienbouyeure',
          skills: ["Php", "NodeJS", "Drupal", "Mysql", "Javascript"]
        }, {
          firstname: 'Jérémy',
          lastname: 'Genoud',
          img: this.glb.imageLoad[3].src,
          link: 'j%C3%A9r%C3%A9my-genoud-9b3645127',
          git: 'GenoudJeremy',
          skills: ['Gestion de Projet', 'NodeJS', 'SQL', 'Angular', 'Javascript']
        }];
      }

      _createClass(TeamComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.glb.imageLoad.length == 0) {
            this.glb.preload();
          }

          this.team_data = this.team_data;
          console.log(this.glb.imageLoad);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this9 = this;

          setTimeout(function () {
            _this9.glb.setIndexPage(_this9.route.url.replace('/', ''));
          });
        }
      }, {
        key: "slideActivate",
        value: function slideActivate(id) {
          jquery__WEBPACK_IMPORTED_MODULE_1__(".fa-angle-down:not(#arrow_".concat(id, ")")).removeClass('fa-angle-down').addClass('fa-angle-right');

          if (jquery__WEBPACK_IMPORTED_MODULE_1__("#arrow_".concat(id)).hasClass('fa-angle-down')) {
            jquery__WEBPACK_IMPORTED_MODULE_1__("#arrow_".concat(id)).removeClass('fa-angle-down');
            jquery__WEBPACK_IMPORTED_MODULE_1__("#arrow_".concat(id)).addClass('fa-angle-right');
          } else if (jquery__WEBPACK_IMPORTED_MODULE_1__("#arrow_".concat(id)).hasClass('fa-angle-right')) {
            jquery__WEBPACK_IMPORTED_MODULE_1__("#arrow_".concat(id)).removeClass('fa-angle-right');
            jquery__WEBPACK_IMPORTED_MODULE_1__("#arrow_".concat(id)).addClass('fa-angle-down');
          }

          jquery__WEBPACK_IMPORTED_MODULE_1__(".hide:not(#".concat(id, ")")).slideUp('fast');
          jquery__WEBPACK_IMPORTED_MODULE_1__("#".concat(id)).slideToggle('fast');
        }
      }]);

      return TeamComponent;
    }();

    TeamComponent.ɵfac = function TeamComponent_Factory(t) {
      return new (t || TeamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]));
    };

    TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TeamComponent,
      selectors: [["app-team"]],
      hostVars: 6,
      hostBindings: function TeamComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("row", ctx.ngOnInit)("m-5", ctx.ngOnInit)("app-router_navigate", ctx.ngOnInit);
        }
      },
      decls: 1,
      vars: 1,
      consts: [["class", "col-lg-3 offset-lg-2 pt-5 bgl_mb", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "offset-lg-2", "pt-5", "bgl_mb"], ["id", "main_inf"], ["id", "img_main", 3, "src", 4, "ngIf"], ["id", "link"], ["target", "_blank", 3, "href"], ["_ngcontent-hdr-c18", "", 1, "fa", "fa-github", 2, "color", "white"], ["_ngcontent-hdr-c18", "", 1, "fa", "fa-linkedin", 2, "color", "rgb(0, 119, 181)"], ["id", "skills", 2, "float", "right !important", 3, "click"], [1, "fa", "fa-angle-right", 3, "id"], [1, "hide", 3, "id", "click"], [4, "ngFor", "ngForOf"], ["id", "img_main", 3, "src"]],
      template: function TeamComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TeamComponent_div_0_Template, 23, 8, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.team_data);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["#main_inf[_ngcontent-%COMP%] {\r\n    text-align:center;\r\n}\r\n#main_inf[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 70%;\r\n    width: 70%;\r\n    display: block;\r\n    margin: 0 15%;\r\n    border-radius: 100%;\r\n    border: 2px grey solid;\r\n\ttransform: scale(1);\r\n\ttransition: .3s ease-in-out;\r\n}\r\n#main_inf[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n\ttransform: scale(1.3);\r\n}\r\n#main_inf[_ngcontent-%COMP%]::before {\r\n\tposition: absolute;\r\n\ttop: 45%;\r\n\tleft: 50%;\r\n\tz-index: 2;\r\n\tdisplay: block;\r\n\tcontent: '';\r\n\twidth: 0;\r\n\theight: 0;\r\n\tbackground: rgba(255,255,255,.2);\r\n\tborder-radius: 100%;\r\n\ttransform: translate(-50%, -50%);\r\n\topacity: 0;\r\n}\r\n#main_inf[_ngcontent-%COMP%]:hover::before {\r\n\t-webkit-animation: circle .5s;\r\n\tanimation: circle .5s;\r\n}\r\n@-webkit-keyframes circle {\r\n\t0% {\r\n\t\topacity: 1;\r\n\t}\r\n\t40% {\r\n\t\topacity: 1;\r\n\t}\r\n\t100% {\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\topacity: 0;\r\n\t}\r\n}\r\n@keyframes circle {\r\n\t0% {\r\n\t\topacity: 1;\r\n\t}\r\n\t40% {\r\n\t\topacity: 1;\r\n\t}\r\n\t100% {\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\topacity: 0;\r\n\t}\r\n}\r\n.bgl_mb[_ngcontent-%COMP%] {\r\n    background: #3a3737;\r\n    margin-bottom: 10px;\r\n    border-radius: 5%\r\n}\r\n#link[_ngcontent-%COMP%]{\r\n\tdisplay: flex;\r\n}\r\n#link[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n\tflex-direction: row;\r\n\tlist-style-type: none;\r\n}\r\n#link[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n\tdisplay: inline-block;\r\n\tmargin:10px;\r\n\tfloat: right;\r\n}\r\na[_ngcontent-%COMP%]:not(.active-link):hover, #skills[_ngcontent-%COMP%]:hover {\r\n\tcursor: pointer;\r\n    -webkit-animation: neon2 1.5s ease-in-out infinite alternate;\r\n    animation: neon2 1.5s ease-in-out infinite alternate;\r\n  }\r\n@-webkit-keyframes neon2 {\r\n    from {\r\n      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228DFF, 0 0 70px #228DFF, 0 0 80px #228DFF, 0 0 100px #228DFF, 0 0 150px #228DFF;\r\n    }\r\n    to {\r\n      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228DFF, 0 0 35px #228DFF, 0 0 40px #228DFF, 0 0 50px #228DFF, 0 0 75px #228DFF;\r\n    }\r\n  }\r\n@keyframes neon2 {\r\n    from {\r\n      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228DFF, 0 0 70px #228DFF, 0 0 80px #228DFF, 0 0 100px #228DFF, 0 0 150px #228DFF;\r\n    }\r\n    to {\r\n      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228DFF, 0 0 35px #228DFF, 0 0 40px #228DFF, 0 0 50px #228DFF, 0 0 75px #228DFF;\r\n    }\r\n  }\r\nhr[_ngcontent-%COMP%] {\r\n\tborder-top: 5px solid rgba(0,0,0,.1)\r\n}\r\n.hide[_ngcontent-%COMP%]{\r\n\tdisplay:none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS90ZWFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0NBRXpCLG1CQUFtQjtDQUVuQiwyQkFBMkI7QUFDNUI7QUFFQTtDQUVDLHFCQUFxQjtBQUN0QjtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixTQUFTO0NBQ1QsVUFBVTtDQUNWLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsUUFBUTtDQUNSLFNBQVM7Q0FDVCxnQ0FBZ0M7Q0FDaEMsbUJBQW1CO0NBRW5CLGdDQUFnQztDQUNoQyxVQUFVO0FBQ1g7QUFDQTtDQUNDLDZCQUE2QjtDQUM3QixxQkFBcUI7QUFDdEI7QUFDQTtDQUNDO0VBQ0MsVUFBVTtDQUNYO0NBQ0E7RUFDQyxVQUFVO0NBQ1g7Q0FDQTtFQUNDLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtDQUNYO0FBQ0Q7QUFDQTtDQUNDO0VBQ0MsVUFBVTtDQUNYO0NBQ0E7RUFDQyxVQUFVO0NBQ1g7Q0FDQTtFQUNDLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtDQUNYO0FBQ0Q7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkI7QUFDSjtBQUNBO0NBQ0MsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIscUJBQXFCO0FBQ3RCO0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsV0FBVztDQUNYLFlBQVk7QUFDYjtBQUNBO0NBQ0MsZUFBZTtJQUNaLDREQUE0RDtJQUU1RCxvREFBb0Q7RUFDdEQ7QUFDRjtJQUNJO01BQ0Usb0pBQW9KO0lBQ3RKO0lBQ0E7TUFDRSxpSkFBaUo7SUFDbko7RUFDRjtBQVBGO0lBQ0k7TUFDRSxvSkFBb0o7SUFDdEo7SUFDQTtNQUNFLGlKQUFpSjtJQUNuSjtFQUNGO0FBRUY7Q0FDQztBQUNEO0FBQ0E7Q0FDQyxZQUFZO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC90ZWFtL3RlYW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluX2luZiB7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4jbWFpbl9pbmYgaW1ne1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgMTUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJvcmRlcjogMnB4IGdyZXkgc29saWQ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcblx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcclxuXHR0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuICBcclxuI21haW5faW5mIGltZzpob3ZlciB7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcblx0dHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG59XHJcblxyXG4jbWFpbl9pbmY6OmJlZm9yZSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNDUlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR6LWluZGV4OiAyO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdHdpZHRoOiAwO1xyXG5cdGhlaWdodDogMDtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4yKTtcclxuXHRib3JkZXItcmFkaXVzOiAxMDAlO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0b3BhY2l0eTogMDtcclxufVxyXG4jbWFpbl9pbmY6aG92ZXI6OmJlZm9yZSB7XHJcblx0LXdlYmtpdC1hbmltYXRpb246IGNpcmNsZSAuNXM7XHJcblx0YW5pbWF0aW9uOiBjaXJjbGUgLjVzO1xyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBjaXJjbGUge1xyXG5cdDAlIHtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0fVxyXG5cdDQwJSB7XHJcblx0XHRvcGFjaXR5OiAxO1xyXG5cdH1cclxuXHQxMDAlIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0b3BhY2l0eTogMDtcclxuXHR9XHJcbn1cclxuQGtleWZyYW1lcyBjaXJjbGUge1xyXG5cdDAlIHtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0fVxyXG5cdDQwJSB7XHJcblx0XHRvcGFjaXR5OiAxO1xyXG5cdH1cclxuXHQxMDAlIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0b3BhY2l0eTogMDtcclxuXHR9XHJcbn1cclxuXHJcbi5iZ2xfbWIge1xyXG4gICAgYmFja2dyb3VuZDogIzNhMzczNztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JVxyXG59XHJcbiNsaW5re1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuI2xpbmsgdWwge1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcbiNsaW5rIHVsIGxpe1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRtYXJnaW46MTBweDtcclxuXHRmbG9hdDogcmlnaHQ7XHJcbn1cclxuYTpub3QoLmFjdGl2ZS1saW5rKTpob3ZlciwgI3NraWxsczpob3ZlciB7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IG5lb24yIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gICAgLW1vei1hbmltYXRpb246IG5lb24yIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gICAgYW5pbWF0aW9uOiBuZW9uMiAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcclxuICB9XHJcbkBrZXlmcmFtZXMgbmVvbjIge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCAjZmZmLCAwIDAgMjBweCAjZmZmLCAwIDAgMzBweCAjZmZmLCAwIDAgNDBweCAjMjI4REZGLCAwIDAgNzBweCAjMjI4REZGLCAwIDAgODBweCAjMjI4REZGLCAwIDAgMTAwcHggIzIyOERGRiwgMCAwIDE1MHB4ICMyMjhERkY7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgIHRleHQtc2hhZG93OiAwIDAgNXB4ICNmZmYsIDAgMCAxMHB4ICNmZmYsIDAgMCAxNXB4ICNmZmYsIDAgMCAyMHB4ICMyMjhERkYsIDAgMCAzNXB4ICMyMjhERkYsIDAgMCA0MHB4ICMyMjhERkYsIDAgMCA1MHB4ICMyMjhERkYsIDAgMCA3NXB4ICMyMjhERkY7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuaHIge1xyXG5cdGJvcmRlci10b3A6IDVweCBzb2xpZCByZ2JhKDAsMCwwLC4xKVxyXG59XHJcbi5oaWRle1xyXG5cdGRpc3BsYXk6bm9uZTtcclxufSAiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-team',
          templateUrl: './team.component.html',
          styleUrls: ['./team.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        }];
      }, {
        ngOnInit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.row']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.m-5']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.app-router_navigate']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Annæris\Desktop\Repository\Vitrine\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map