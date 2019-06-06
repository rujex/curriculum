(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _views_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/about/about.component */ "./src/app/views/about/about.component.ts");
/* harmony import */ var _views_proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/proyectos/proyectos.component */ "./src/app/views/proyectos/proyectos.component.ts");
/* harmony import */ var _views_habilidades_habilidades_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/habilidades/habilidades.component */ "./src/app/views/habilidades/habilidades.component.ts");
/* harmony import */ var _views_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/contacto/contacto.component */ "./src/app/views/contacto/contacto.component.ts");
/* harmony import */ var _views_curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/curriculum/curriculum.component */ "./src/app/views/curriculum/curriculum.component.ts");









var routes = [
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path: 'inicio',
        component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
    },
    {
        path: 'sobre-mi',
        component: _views_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    },
    {
        path: 'proyectos',
        component: _views_proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_5__["ProyectosComponent"]
    },
    {
        path: 'curriculum',
        component: _views_curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_8__["CurriculumComponent"]
    },
    {
        path: 'habilidades',
        component: _views_habilidades_habilidades_component__WEBPACK_IMPORTED_MODULE_6__["HabilidadesComponent"]
    },
    {
        path: 'contacto',
        component: _views_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_7__["ContactoComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'curriculum';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _views_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/about/about.component */ "./src/app/views/about/about.component.ts");
/* harmony import */ var _views_proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/proyectos/proyectos.component */ "./src/app/views/proyectos/proyectos.component.ts");
/* harmony import */ var _components_galery_galery_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/galery/galery.component */ "./src/app/components/galery/galery.component.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/components/card/card.component.ts");
/* harmony import */ var _views_habilidades_habilidades_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/habilidades/habilidades.component */ "./src/app/views/habilidades/habilidades.component.ts");
/* harmony import */ var _components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/progress/progress.component */ "./src/app/components/progress/progress.component.ts");
/* harmony import */ var _views_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/contacto/contacto.component */ "./src/app/views/contacto/contacto.component.ts");
/* harmony import */ var _views_curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/curriculum/curriculum.component */ "./src/app/views/curriculum/curriculum.component.ts");
/* harmony import */ var _components_cardscurriculum_cardscurriculum_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/cardscurriculum/cardscurriculum.component */ "./src/app/components/cardscurriculum/cardscurriculum.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _views_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _views_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _views_proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_9__["ProyectosComponent"],
                _components_galery_galery_component__WEBPACK_IMPORTED_MODULE_10__["GaleryComponent"],
                _components_card_card_component__WEBPACK_IMPORTED_MODULE_11__["CardComponent"],
                _views_habilidades_habilidades_component__WEBPACK_IMPORTED_MODULE_12__["HabilidadesComponent"],
                _components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__["ProgressComponent"],
                _views_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_14__["ContactoComponent"],
                _views_curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_15__["CurriculumComponent"],
                _components_cardscurriculum_cardscurriculum_component__WEBPACK_IMPORTED_MODULE_16__["CardscurriculumComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/card/card.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/card/card.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n  margin-top: -24%;\r\n  margin-left: 20%;\r\n  box-shadow: 5px 5px 5px 5px;\r\n}\r\n\r\n.card-img-top{\r\n  background-color: white;\r\n}\r\n\r\n.card-body{\r\n  background-color: rgb(27, 31, 31);\r\n}\r\n\r\n.card-text{\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  color: rgb(233, 229, 214);\r\n  font-family: 'Quicksand', sans-serif;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n.profesion{\r\n  font-size: 14px;\r\n  color: rgb(233, 229, 214);\r\n  font-family: 'Quicksand', sans-serif;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n@media (min-width: 992px) and (max-width: 1160px) {\r\n\r\n  .card{\r\n    margin-top: -45%;\r\n    margin-left: 15%;\r\n  }\r\n\r\n }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsb0NBQW9DO0VBQ3BDLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsb0NBQW9DO0VBQ3BDLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7O0NBRUQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgbWFyZ2luLXRvcDogLTI0JTtcclxuICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IDVweDtcclxufVxyXG5cclxuLmNhcmQtaW1nLXRvcHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2FyZC1ib2R5e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNywgMzEsIDMxKTtcclxufVxyXG4uY2FyZC10ZXh0e1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiByZ2IoMjMzLCAyMjksIDIxNCk7XHJcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbn1cclxuLnByb2Zlc2lvbntcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6IHJnYigyMzMsIDIyOSwgMjE0KTtcclxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE2MHB4KSB7XHJcblxyXG4gIC5jYXJke1xyXG4gICAgbWFyZ2luLXRvcDogLTQ1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgfVxyXG5cclxuIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/card/card.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/card/card.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 17rem;\">\n  <img src=\"../../../assets/perfil.png\" class=\"card-img-top\" alt=\"...\" />\n  <div class=\"card-body\">\n    <p class=\"card-text\">\n      Rubén Garzón Zafra\n    </p>\n    <hr style=\"border-color: white;\">\n    <p class=\"profesion\">\n      Desarrollador de Aplicaciones Multiplataforma\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/card/card.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/components/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/components/card/card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/components/cardscurriculum/cardscurriculum.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/cardscurriculum/cardscurriculum.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n  margin-left:28%;\r\n  margin-top: 13%;\r\n}\r\n.carta{\r\n  margin-top: 0;\r\n}\r\n.card-header{\r\n  color: white;\r\n  background-color: #313034;\r\n}\r\n.educacion{\r\n  margin-top: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkc2N1cnJpY3VsdW0vY2FyZHNjdXJyaWN1bHVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcmRzY3VycmljdWx1bS9jYXJkc2N1cnJpY3VsdW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gIG1hcmdpbi1sZWZ0OjI4JTtcclxuICBtYXJnaW4tdG9wOiAxMyU7XHJcbn1cclxuLmNhcnRhe1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuLmNhcmQtaGVhZGVye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzMDM0O1xyXG59XHJcbi5lZHVjYWNpb257XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/cardscurriculum/cardscurriculum.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/cardscurriculum/cardscurriculum.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card bg-light\" style=\"max-width: 50rem;\">\n  <div class=\"card-header\">Experiencia</div>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Prácticas - Atmira Espacio de Consultoría</h5>\n    <p class=\"card-text\">\n      Formación académica en el framework Ángular, SCRUM Ágil y colaboración en\n      proyectos.\n    </p>\n  </div>\n  <div class=\"card-footer\">\n    <small class=\"text-muted\">Marzo 2019 - Junio 2019</small>\n  </div>\n\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Prácticas - Federación Cordobesa de Fútbol</h5>\n    <p class=\"card-text\">\n      Administración del programa informático de la Federación Cordobesa de\n      Fútbol para la gestión de equipos y jugadores de la provincia..\n    </p>\n  </div>\n  <div class=\"card-footer\">\n    <small class=\"text-muted\">Sept 2016 - Dic 2016</small>\n  </div>\n</div>\n\n<div class=\"card bg-light educacion\" style=\"max-width: 50rem;\">\n  <div class=\"card-header\">Educación</div>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">\n      Grado Superior de Desarrollo de Aplicaciones Multiplataforma\n    </h5>\n    <p class=\"card-text\">IES Francisco de los Rios</p>\n  </div>\n  <div class=\"card-footer\">\n    <small class=\"text-muted\">2017 - 2019</small>\n  </div>\n\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Bachillerato</h5>\n    <p class=\"card-text\">Ciencias Sociales</p>\n  </div>\n  <div class=\"card-footer\">\n    <small class=\"text-muted\">2016 - 2017</small>\n  </div>\n\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Grado Medio de Sistemas Microinformaticos y Redes</h5>\n    <p class=\"card-text\">CES Lope de vega</p>\n  </div>\n  <div class=\"card-footer\">\n    <small class=\"text-muted\">2013 - 2015</small>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/cardscurriculum/cardscurriculum.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/cardscurriculum/cardscurriculum.component.ts ***!
  \*************************************************************************/
/*! exports provided: CardscurriculumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardscurriculumComponent", function() { return CardscurriculumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardscurriculumComponent = /** @class */ (function () {
    function CardscurriculumComponent() {
    }
    CardscurriculumComponent.prototype.ngOnInit = function () {
    };
    CardscurriculumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cardscurriculum',
            template: __webpack_require__(/*! ./cardscurriculum.component.html */ "./src/app/components/cardscurriculum/cardscurriculum.component.html"),
            styles: [__webpack_require__(/*! ./cardscurriculum.component.css */ "./src/app/components/cardscurriculum/cardscurriculum.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardscurriculumComponent);
    return CardscurriculumComponent;
}());



/***/ }),

/***/ "./src/app/components/galery/galery.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/galery/galery.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\nbody{\r\n  background: #82E0AA;\r\n  padding-top: 100px;\r\n}\r\n.p-descr{\r\n  height: 200px;\r\n  overflow: auto;\r\n\r\n  position: relative;\r\n}\r\n.pj-card{\r\n  max-width: 400px;\r\n  height: 350px;\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  position: relative;\r\n  background: #FF5733;\r\n  margin-right: 40px;\r\n}\r\n.pj-card a, .pj-card a:hover{\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n.pj-card h5{\r\n  position: absolute;\r\n  top: 10%;\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n  color: #fff;\r\n  opacity: 0;\r\n  transition: .8s;\r\n}\r\n.pj-card:hover h5{\r\n  opacity: 1;\r\n}\r\n.pj-card img{\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  height: 400px;\r\n  min-width: 400px;\r\n  width: 100%;\r\n  transition: .8s;\r\n}\r\n.pj-card .dart{\r\n  margin-right: 20px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  height: 30px;\r\n  min-width: 30px;\r\n  width: 30px;\r\n  transition: .8s;\r\n}\r\n.pj-card .flutter{\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  height: 30px;\r\n  min-width: 30px;\r\n  width: 30px;\r\n  transition: .8s;\r\n}\r\n.pj-card .ionic{\r\n  margin-right: 20px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  height: 30px;\r\n  min-width: 30px;\r\n  width: 30px;\r\n  transition: .8s;\r\n}\r\n.pj-card .angular{\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  height: 30px;\r\n  min-width: 30px;\r\n  width: 30px;\r\n  transition: .8s;\r\n}\r\n.pj-card .description{\r\n  background: #fff;\r\n  position: absolute;\r\n\r\n  width: 100%;\r\n  height: 250px;\r\n  bottom: -200px;\r\n  transition: .8s;\r\n}\r\n.pj-card .description h4{\r\n  line-height: 50px;\r\n  border-bottom: 2px solid #333;\r\n}\r\n.pj-card:hover .description{\r\n  bottom: 0;\r\n}\r\n.centered{\r\n  position: absolute;\r\n  padding: 5px;\r\n  top: 50%;\r\n  left: 0;\r\n  width: 100%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n}\r\n.fab{\r\n  font-size: 2.5rem;\r\n  margin: 10px;\r\n}\r\n.fa-html5{color: #e34f26;}\r\n.fa-css3-alt{color: #002561;}\r\n.fa-js{color: #f7df1e;}\r\n.fa-php{color: #4f5b93;}\r\n@media screen and (max-width: 480px){\r\n  .pj-card{max-width: 100%}\r\n}\r\n@media screen and (max-width: 900px){\r\n  .centered{\r\n    position: relative;\r\n    top: 0;\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n  }\r\n  body{\r\n    padding-top: 10px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYWxlcnkvZ2FsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7O0VBRWQsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLFVBQVU7RUFHVixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixXQUFXO0VBR1gsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBR1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFHWCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFHWCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUdYLGVBQWU7QUFDakI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7O0VBRWxCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsY0FBYztFQUdkLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixRQUFRO0VBQ1IsT0FBTztFQUNQLFdBQVc7RUFDWCxtQ0FBMkI7VUFBM0IsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkO0FBQ0EsVUFBVSxjQUFjLENBQUM7QUFDekIsYUFBYSxjQUFjLENBQUM7QUFDNUIsT0FBTyxjQUFjLENBQUM7QUFDdEIsUUFBUSxjQUFjLENBQUM7QUFFdkI7RUFDRSxTQUFTLGVBQWU7QUFDMUI7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FsZXJ5L2dhbGVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmJvZHl7XHJcbiAgYmFja2dyb3VuZDogIzgyRTBBQTtcclxuICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbn1cclxuLnAtZGVzY3J7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5wai1jYXJke1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogI0ZGNTczMztcclxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbn1cclxuLnBqLWNhcmQgYSwgLnBqLWNhcmQgYTpob3ZlcntcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLnBqLWNhcmQgaDV7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC44cztcclxuICAtbW96LXRyYW5zaXRpb246IC44cztcclxuICB0cmFuc2l0aW9uOiAuOHM7XHJcbn1cclxuLnBqLWNhcmQ6aG92ZXIgaDV7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4ucGotY2FyZCBpbWd7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBtaW4td2lkdGg6IDQwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjhzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogLjhzO1xyXG4gIHRyYW5zaXRpb246IC44cztcclxufVxyXG5cclxuLnBqLWNhcmQgLmRhcnR7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuOHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAuOHM7XHJcbiAgdHJhbnNpdGlvbjogLjhzO1xyXG59XHJcbi5wai1jYXJkIC5mbHV0dGVye1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuOHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAuOHM7XHJcbiAgdHJhbnNpdGlvbjogLjhzO1xyXG59XHJcblxyXG4ucGotY2FyZCAuaW9uaWN7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuOHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAuOHM7XHJcbiAgdHJhbnNpdGlvbjogLjhzO1xyXG59XHJcblxyXG4ucGotY2FyZCAuYW5ndWxhcntcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbWluLXdpZHRoOiAzMHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjhzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogLjhzO1xyXG4gIHRyYW5zaXRpb246IC44cztcclxufVxyXG5cclxuLnBqLWNhcmQgLmRlc2NyaXB0aW9ue1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIGJvdHRvbTogLTIwMHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjhzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogLjhzO1xyXG4gIHRyYW5zaXRpb246IC44cztcclxufVxyXG4ucGotY2FyZCAuZGVzY3JpcHRpb24gaDR7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzMzM7XHJcbn1cclxuLnBqLWNhcmQ6aG92ZXIgLmRlc2NyaXB0aW9ue1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG4uY2VudGVyZWR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuLmZhYntcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuLmZhLWh0bWw1e2NvbG9yOiAjZTM0ZjI2O31cclxuLmZhLWNzczMtYWx0e2NvbG9yOiAjMDAyNTYxO31cclxuLmZhLWpze2NvbG9yOiAjZjdkZjFlO31cclxuLmZhLXBocHtjb2xvcjogIzRmNWI5Mzt9XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCl7XHJcbiAgLnBqLWNhcmR7bWF4LXdpZHRoOiAxMDAlfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCl7XHJcbiAgLmNlbnRlcmVke1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxuICBib2R5e1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/galery/galery.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/galery/galery.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"centered text-center\">\n      <!--div to vertically center element on the screen, delete the centered class to avoid the effect -->\n      <div class=\"pj-card\">\n        <a href=\"https://github.com/rujex/barberia\">\n        <img src=\"https://images.unsplash.com/photo-1416339684178-3a239570f315?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80\" class=\"img-fluid\" alt=\"\">\n        <h5>VERSIÓN BETA</h5>\n        <div class=\"description\">\n          <h4>Barberia</h4>\n          <p>\n            Con Barberia App el cliente podrá reservar cita para corte de pelo o arreglo de barba. También podrás comprar productos.\n            <br>\n            Proyecto Integrado 40 horas.\n          </p>\n          <p>\n            <img class=\"dart\" src=\"../../../assets/dart.png\" alt=\"\">\n            <img class=\"flutter\" src=\"../../../assets/flutter.png\" alt=\"\">\n          </p>\n        </div>\n      </a>\n      </div>\n\n      <div class=\"pj-card\">\n        <a href=\"https://rujex.github.io/pachangafriendlyapppage/\">\n        <img src=\"https://images.unsplash.com/photo-1416339684178-3a239570f315?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80\" class=\"img-fluid\" alt=\"\">\n        <h5>VERSIÓN BETA</h5>\n        <div class=\"description\">\n          <h4>Pachanga Friendly</h4>\n          <p>\n              Reserva de actividades deportivas (fútbol, pádel, baloncesto, etc.) en Polideportivos.\n            <br>\n              Práctica del módulo Desarrollo de Interfaces, realizada con Ionic y Firebase.\n          </p>\n          <p>\n            <img class=\"ionic\" src=\"../../../assets/ionic.png\" alt=\"\">\n            <img class=\"angular\" src=\"../../../assets/angular.png\" alt=\"\">\n          </p>\n        </div>\n      </a>\n      </div>\n\n\n    </div>\n\n  </div>\n"

/***/ }),

/***/ "./src/app/components/galery/galery.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/galery/galery.component.ts ***!
  \*******************************************************/
/*! exports provided: GaleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleryComponent", function() { return GaleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GaleryComponent = /** @class */ (function () {
    function GaleryComponent() {
    }
    GaleryComponent.prototype.ngOnInit = function () {
    };
    GaleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-galery',
            template: __webpack_require__(/*! ./galery.component.html */ "./src/app/components/galery/galery.component.html"),
            styles: [__webpack_require__(/*! ./galery.component.css */ "./src/app/components/galery/galery.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GaleryComponent);
    return GaleryComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n  z-index: 9999;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  padding: 5px;\r\n  box-shadow: 2px 2px 2px 2px;\r\n  height: 80px;\r\n}\r\n.navbar-toggler{\r\n  background-color: aliceblue;\r\n}\r\n.bg-light{\r\n  background-color: #313034 !important;\r\n}\r\n.navbar-light .navbar-nav .nav-link{\r\n  color: gray;\r\n}\r\n.navbar-light .navbar-nav .nav-link:hover{\r\n}\r\n.navbar-brand{\r\n color: white;\r\n font-size: 35px;\r\n margin-left: 2%;\r\n}\r\n.navbar-brand:hover{\r\n  color: white;\r\n}\r\n.navbar-light .navbar-nav .active>.nav-link{\r\n  color: white;\r\n}\r\n.fab{\r\n  font-size: 25px;\r\n}\r\n.navbar-nav{\r\n  margin-left: 62%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osZUFBZTtDQUNmLGVBQWU7QUFDaEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbiAgei1pbmRleDogOTk5OTtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4O1xyXG4gIGhlaWdodDogODBweDtcclxufVxyXG4ubmF2YmFyLXRvZ2dsZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG59XHJcbi5iZy1saWdodHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzMDM0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmt7XHJcbiAgY29sb3I6IGdyYXk7XHJcbn1cclxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbms6aG92ZXJ7XHJcbn1cclxuLm5hdmJhci1icmFuZHtcclxuIGNvbG9yOiB3aGl0ZTtcclxuIGZvbnQtc2l6ZTogMzVweDtcclxuIG1hcmdpbi1sZWZ0OiAyJTtcclxufVxyXG4ubmF2YmFyLWJyYW5kOmhvdmVye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5hY3RpdmU+Lm5hdi1saW5re1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZmFie1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4ubmF2YmFyLW5hdntcclxuICBtYXJnaW4tbGVmdDogNjIlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Rubén Garzón</a>\n  <button\n    class=\"navbar-toggler\"\n    type=\"button\"\n    data-toggle=\"collapse\"\n    data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\"\n  >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" href=\"#\"\n          > INICIO</a\n        >\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink='/sobre-mi' > SOBRE MI</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink='/proyectos' > PROYECTOS</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink='/curriculum'  > CURRICULUM</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink='/habilidades' >  HABILIDADES</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink='/contacto'>  CONTACTO</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/progress/progress.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/progress/progress.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progress{\r\n  margin-top: 3%;\r\n  width: 28%;\r\n  margin-left: 38%;\r\n  height: 35px;\r\n  box-shadow: 2px 2px 2px 1px;\r\n}\r\n.progress-bar{\r\n  background-color: #313034;\r\n}\r\np{\r\n  margin-top: 20px;\r\n  font-size: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9ncmVzcy9wcm9ncmVzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZ3Jlc3MvcHJvZ3Jlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzc3tcclxuICBtYXJnaW4tdG9wOiAzJTtcclxuICB3aWR0aDogMjglO1xyXG4gIG1hcmdpbi1sZWZ0OiAzOCU7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDFweDtcclxufVxyXG4ucHJvZ3Jlc3MtYmFye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTMwMzQ7XHJcbn1cclxucHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/progress/progress.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/progress/progress.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\n  <div\n    class=\"progress-bar\"\n    role=\"progressbar\"\n    style=\"width: 70%;\"\n    aria-valuenow=\"25\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100\"\n  >\n    <p>Java</p>\n  </div>\n</div>\n<div class=\"progress\">\n  <div\n    class=\"progress-bar\"\n    role=\"progressbar\"\n    style=\"width: 60%;\"\n    aria-valuenow=\"25\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100\"\n  >\n    <p>Flutter</p>\n  </div>\n</div>\n<div class=\"progress\">\n  <div\n    class=\"progress-bar\"\n    role=\"progressbar\"\n    style=\"width: 40%;\"\n    aria-valuenow=\"25\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100\"\n  >\n    <p>Android</p>\n  </div>\n</div>\n<div class=\"progress\">\n  <div\n    class=\"progress-bar\"\n    role=\"progressbar\"\n    style=\"width: 40%;\"\n    aria-valuenow=\"25\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100\"\n  >\n    <p>Ionic</p>\n  </div>\n</div>\n<div class=\"progress\">\n  <div\n    class=\"progress-bar\"\n    role=\"progressbar\"\n    style=\"width: 70%;\"\n    aria-valuenow=\"25\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100\"\n  >\n    <p>Angular</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/progress/progress.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/progress/progress.component.ts ***!
  \***********************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProgressComponent = /** @class */ (function () {
    function ProgressComponent() {
    }
    ProgressComponent.prototype.ngOnInit = function () {
    };
    ProgressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-progress',
            template: __webpack_require__(/*! ./progress.component.html */ "./src/app/components/progress/progress.component.html"),
            styles: [__webpack_require__(/*! ./progress.component.css */ "./src/app/components/progress/progress.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProgressComponent);
    return ProgressComponent;
}());



/***/ }),

/***/ "./src/app/views/about/about.component.css":
/*!*************************************************!*\
  !*** ./src/app/views/about/about.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fas{\r\n  font-size: 50px;\r\n  margin-left: 50%;\r\n  margin-top: 2%;\r\n  color: aliceblue;\r\n}\r\n.titulo{\r\n  margin-left: 48%;\r\n  margin-top: 1%;\r\n  font-size: 30px;\r\n  color: aliceblue;\r\n  font-family: 'Righteous', cursive;\r\n}\r\n.lead{\r\n  font-size: 15px;\r\n  text-align: justify;\r\n  font-family: 'Quicksand', sans-serif;\r\n  letter-spacing: 3px;\r\n}\r\nh1{\r\n  font-family: 'Quicksand', sans-serif;\r\n}\r\n.jumbotron-fluid{\r\n  margin-left: 34%;\r\n}\r\n.jumbotron{\r\n  margin-top: 200px;\r\n}\r\n@media (min-width: 250px) and (max-width: 463px) {\r\n  /* Los estilos aquí contenidos solo se aplicarán a partir\r\n  del tamaño de pantalla indicado */\r\n  p{\r\n    margin-left: 30%;\r\n  }\r\n  .fas{\r\n    margin-left: 40%;\r\n  }\r\n\r\n}\r\n@media (min-width: 463px) and (max-width: 563px) {\r\n  /* Los estilos aquí contenidos solo se aplicarán a partir\r\n  del tamaño de pantalla indicado */\r\n  p{\r\n    margin-left: 45%;\r\n  }\r\n\r\n}\r\n@media (min-width: 563px) and (max-width: 643px) {\r\n  /* Los estilos aquí contenidos solo se aplicarán a partir\r\n  del tamaño de pantalla indicado */\r\n  p{\r\n    margin-left: 43%;\r\n  }\r\n\r\n}\r\n@media (min-width: 643px) and (max-width: 1024px) {\r\n  /* Los estilos aquí contenidos solo se aplicarán a partir\r\n  del tamaño de pantalla indicado */\r\n  .info{\r\n    margin-left: 420px;\r\n    margin-top: 100px;\r\n    font-size: 15px;\r\n  }\r\n\r\n}\r\n@media (min-width: 1024px) {\r\n  /* Los estilos aquí contenidos solo se aplicarán a partir\r\n  del tamaño de pantalla indicado */\r\n  .info{\r\n    margin-left: 48%;\r\n  }\r\n\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBR0E7RUFDRTttQ0FDaUM7RUFDakM7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjs7QUFFRjtBQUVBO0VBQ0U7bUNBQ2lDO0VBQ2pDO0lBQ0UsZ0JBQWdCO0VBQ2xCOztBQUVGO0FBRUE7RUFDRTttQ0FDaUM7RUFDakM7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUY7QUFFQTtFQUNFO21DQUNpQztFQUNqQztJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7QUFFRjtBQUVBO0VBQ0U7bUNBQ2lDO0VBQ2pDO0lBQ0UsZ0JBQWdCO0VBQ2xCOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYXN7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG4udGl0dWxve1xyXG4gIG1hcmdpbi1sZWZ0OiA0OCU7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlO1xyXG59XHJcbi5sZWFke1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG59XHJcblxyXG5oMXtcclxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5qdW1ib3Ryb24tZmx1aWR7XHJcbiAgbWFyZ2luLWxlZnQ6IDM0JTtcclxufVxyXG5cclxuLmp1bWJvdHJvbntcclxuICBtYXJnaW4tdG9wOiAyMDBweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAyNTBweCkgYW5kIChtYXgtd2lkdGg6IDQ2M3B4KSB7XHJcbiAgLyogTG9zIGVzdGlsb3MgYXF1w60gY29udGVuaWRvcyBzb2xvIHNlIGFwbGljYXLDoW4gYSBwYXJ0aXJcclxuICBkZWwgdGFtYcOxbyBkZSBwYW50YWxsYSBpbmRpY2FkbyAqL1xyXG4gIHB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gIH1cclxuICAuZmFze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDYzcHgpIGFuZCAobWF4LXdpZHRoOiA1NjNweCkge1xyXG4gIC8qIExvcyBlc3RpbG9zIGFxdcOtIGNvbnRlbmlkb3Mgc29sbyBzZSBhcGxpY2Fyw6FuIGEgcGFydGlyXHJcbiAgZGVsIHRhbWHDsW8gZGUgcGFudGFsbGEgaW5kaWNhZG8gKi9cclxuICBwe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQ1JTtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTYzcHgpIGFuZCAobWF4LXdpZHRoOiA2NDNweCkge1xyXG4gIC8qIExvcyBlc3RpbG9zIGFxdcOtIGNvbnRlbmlkb3Mgc29sbyBzZSBhcGxpY2Fyw6FuIGEgcGFydGlyXHJcbiAgZGVsIHRhbWHDsW8gZGUgcGFudGFsbGEgaW5kaWNhZG8gKi9cclxuICBwe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQzJTtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjQzcHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAvKiBMb3MgZXN0aWxvcyBhcXXDrSBjb250ZW5pZG9zIHNvbG8gc2UgYXBsaWNhcsOhbiBhIHBhcnRpclxyXG4gIGRlbCB0YW1hw7FvIGRlIHBhbnRhbGxhIGluZGljYWRvICovXHJcbiAgLmluZm97XHJcbiAgICBtYXJnaW4tbGVmdDogNDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgLyogTG9zIGVzdGlsb3MgYXF1w60gY29udGVuaWRvcyBzb2xvIHNlIGFwbGljYXLDoW4gYSBwYXJ0aXJcclxuICBkZWwgdGFtYcOxbyBkZSBwYW50YWxsYSBpbmRpY2FkbyAqL1xyXG4gIC5pbmZve1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQ4JTtcclxuICB9XHJcblxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/views/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<body>\n    <div class=\"jumbotron jumbotron-fluid\">\n      <div class=\"container\">\n        <h1 class=\"display-4\">Sobre mi</h1>\n        <p class=\"lead\">En 2019 terminé el Ciclo Superior de Desarrollo de Aplicaciones Multiplataforma\n          en el IES Francisco De Los Ríos. Soy Técnico Superior en Desarrollo de Aplicaciones Multiplataforma\n          y Técnico en Sistemas MicroInformáticos y Redes.\n          He estado en Atmira durante 3 meses realizando las practicas de Formación en Centros de Trabajo, me sirvió para aprender\n      a desarrollar páginas webs en Angular. También estuve en la Federación Cordobesa de Fútbol de prácticas de Formación en Centro de Trabajo de Grado Medio de Sistemas MicroInformaticos\n      y redes que fue mi primera experiencia en el mundo laboral.\n      Me gusta tanto Desarrollar Apps como Desarrollar páginas webs.\n      En mi tiempo libre también investigo nuevos lenguajes y frameworks. Te invito a que veas mi proyecto de FP Superior que está hecho en Flutter.\n        </p>\n      </div>\n    </div>\n\n\n    <app-card></app-card>\n</body>\n\n"

/***/ }),

/***/ "./src/app/views/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/views/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/views/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/views/contacto/contacto.component.css":
/*!*******************************************************!*\
  !*** ./src/app/views/contacto/contacto.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fas{\r\n  font-size: 60px;\r\n  margin-left: 50%;\r\n  color: white;\r\n  margin-top: 2%;\r\n}\r\n.fab{\r\n  font-size: 80px;\r\n  margin-left: 43%;\r\n  color: white;\r\n  margin-top: 2%;\r\n}\r\n.far{\r\n  font-size: 80px;\r\n  margin-left: 43%;\r\n  color: white;\r\n  margin-top: 2%;\r\n}\r\n.column{\r\n  display: inline;\r\n}\r\n.titulo{\r\n  font-size: 40px;\r\n  color: white;\r\n  margin-left: 48%;\r\n  margin-top: 2%;\r\n}\r\n.container{\r\n  margin-top: 10%;\r\n  max-width: 500px;\r\n  margin-left: 42%;\r\n}\r\n.col{\r\n flex-grow: 0;\r\n}\r\n.contact{\r\n  color: white;\r\n  font-size: 20px;\r\n  margin-left: 47%;\r\n  margin-top: 20%;\r\n}\r\n.correo{\r\n  margin-top: 20px;\r\n}\r\n@media (min-width: 992px) and (max-width: 1199.98px) {\r\n  .container{\r\n    margin-top: 30%;\r\n    margin-left: 37%;\r\n  }\r\n  .contact{\r\n    margin-top: 37%;\r\n    margin-left: 44%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY29udGFjdG8vY29udGFjdG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUdBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9jb250YWN0by9jb250YWN0by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhc3tcclxuICBmb250LXNpemU6IDYwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuLmZhYntcclxuICBmb250LXNpemU6IDgwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDQzJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuLmZhcntcclxuICBmb250LXNpemU6IDgwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDQzJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuLmNvbHVtbntcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuLnRpdHVsb3tcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiA0OCU7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBtYXJnaW4tbGVmdDogNDIlO1xyXG59XHJcbi5jb2x7XHJcbiBmbGV4LWdyb3c6IDA7XHJcbn1cclxuLmNvbnRhY3R7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tbGVmdDogNDclO1xyXG4gIG1hcmdpbi10b3A6IDIwJTtcclxufVxyXG4uY29ycmVve1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcclxuICAuY29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDogMzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM3JTtcclxuICB9XHJcbiAgLmNvbnRhY3R7XHJcbiAgICBtYXJnaW4tdG9wOiAzNyU7XHJcbiAgICBtYXJnaW4tbGVmdDogNDQlO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/contacto/contacto.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/contacto/contacto.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <i class=\"far fa-envelope\" title=\"rujex93rujex@gmail.com\"></i>\n    </div>\n    <div class=\"col\">\n      <a href=\"https://github.com/rujex\"><i class=\"fab fa-github\"></i></a>\n    </div>\n    <div class=\"col\">\n      <a href=\"https://www.linkedin.com/in/ruben-garzon-zafra/\"><i class=\"fab fa-linkedin-in\"></i></a>\n    </div>\n  </div>\n</div>\n<p class=\"contact\">¡No dudes en contactar!</p>\n"

/***/ }),

/***/ "./src/app/views/contacto/contacto.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/contacto/contacto.component.ts ***!
  \******************************************************/
/*! exports provided: ContactoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoComponent", function() { return ContactoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactoComponent = /** @class */ (function () {
    function ContactoComponent() {
    }
    ContactoComponent.prototype.ngOnInit = function () {
    };
    ContactoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacto',
            template: __webpack_require__(/*! ./contacto.component.html */ "./src/app/views/contacto/contacto.component.html"),
            styles: [__webpack_require__(/*! ./contacto.component.css */ "./src/app/views/contacto/contacto.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactoComponent);
    return ContactoComponent;
}());



/***/ }),

/***/ "./src/app/views/curriculum/curriculum.component.css":
/*!***********************************************************!*\
  !*** ./src/app/views/curriculum/curriculum.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n  vertical-align: middle;\r\n  width: 140px;\r\n  height: 170px;\r\n  border-radius: 20%;\r\n  border: 2px solid white;\r\n  margin-left: 45%;\r\n  margin-top: -105%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY3VycmljdWx1bS9jdXJyaWN1bHVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9jdXJyaWN1bHVtL2N1cnJpY3VsdW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHdpZHRoOiAxNDBweDtcclxuICBoZWlnaHQ6IDE3MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDogNDUlO1xyXG4gIG1hcmdpbi10b3A6IC0xMDUlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/curriculum/curriculum.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/curriculum/curriculum.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-cardscurriculum></app-cardscurriculum>\n<img src=\"../../../assets/perfil.png\" alt=\"\">\n"

/***/ }),

/***/ "./src/app/views/curriculum/curriculum.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/curriculum/curriculum.component.ts ***!
  \**********************************************************/
/*! exports provided: CurriculumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumComponent", function() { return CurriculumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CurriculumComponent = /** @class */ (function () {
    function CurriculumComponent() {
    }
    CurriculumComponent.prototype.ngOnInit = function () {
    };
    CurriculumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-curriculum',
            template: __webpack_require__(/*! ./curriculum.component.html */ "./src/app/views/curriculum/curriculum.component.html"),
            styles: [__webpack_require__(/*! ./curriculum.component.css */ "./src/app/views/curriculum/curriculum.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CurriculumComponent);
    return CurriculumComponent;
}());



/***/ }),

/***/ "./src/app/views/habilidades/habilidades.component.css":
/*!*************************************************************!*\
  !*** ./src/app/views/habilidades/habilidades.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fas{\r\n  font-size: 70px;\r\n  color: white;\r\n  margin-left: 50%;\r\n  margin-top: 2%;\r\n}\r\n.titulo{\r\n  font-size: 40px;\r\n  margin-top: 2%;\r\n  margin-left: 47%;\r\n  color: white;\r\n}\r\n@media (min-width: 992px) and (max-width: 1199.98px) {\r\n   .titulo{\r\n    margin-left: 44%;\r\n   }\r\n }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaGFiaWxpZGFkZXMvaGFiaWxpZGFkZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUVBO0dBQ0c7SUFDQyxnQkFBZ0I7R0FDakI7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hhYmlsaWRhZGVzL2hhYmlsaWRhZGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFze1xyXG4gIGZvbnQtc2l6ZTogNzBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG4udGl0dWxve1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICBtYXJnaW4tbGVmdDogNDclO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XHJcbiAgIC50aXR1bG97XHJcbiAgICBtYXJnaW4tbGVmdDogNDQlO1xyXG4gICB9XHJcbiB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/habilidades/habilidades.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/habilidades/habilidades.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<body>\n    <i class=\"fas fa-laptop-code\"></i>\n    <p class=\"titulo\">Habilidades</p>\n    <app-progress></app-progress>\n</body>\n\n"

/***/ }),

/***/ "./src/app/views/habilidades/habilidades.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/habilidades/habilidades.component.ts ***!
  \************************************************************/
/*! exports provided: HabilidadesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HabilidadesComponent", function() { return HabilidadesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HabilidadesComponent = /** @class */ (function () {
    function HabilidadesComponent() {
    }
    HabilidadesComponent.prototype.ngOnInit = function () {
    };
    HabilidadesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-habilidades',
            template: __webpack_require__(/*! ./habilidades.component.html */ "./src/app/views/habilidades/habilidades.component.html"),
            styles: [__webpack_require__(/*! ./habilidades.component.css */ "./src/app/views/habilidades/habilidades.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HabilidadesComponent);
    return HabilidadesComponent;
}());



/***/ }),

/***/ "./src/app/views/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/views/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n  width: 100%;\r\n  height: 889px;\r\n}\r\n.contenedor{\r\n  position: relative;\r\n  display: inline-block;\r\n  text-align: center;\r\n}\r\n.texto{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 40%;\r\n  color: ivory;\r\n  font-size: 60px;\r\n  font-family: 'Lobster', cursive;\r\n  text-decoration: overline;\r\n  text-shadow: 4px 3px rgb(11, 110, 36);\r\n}\r\n@media (min-width: 992px) and (max-width: 1199.98px) {\r\n  img{\r\n    width: 100%;\r\n    height: 913px;\r\n  }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtFQUNaLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0IseUJBQXlCO0VBQ3pCLHFDQUFxQztBQUN2QztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDg4OXB4O1xyXG59XHJcbi5jb250ZW5lZG9ye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50ZXh0b3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNDAlO1xyXG4gIGNvbG9yOiBpdm9yeTtcclxuICBmb250LXNpemU6IDYwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG92ZXJsaW5lO1xyXG4gIHRleHQtc2hhZG93OiA0cHggM3B4IHJnYigxMSwgMTEwLCAzNik7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xyXG4gIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MTNweDtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/views/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"contenedor\">\n    <img src=\"../../../assets/1.jpg\" alt=\"\">\n    <div class=\"texto\">Bienvenido a mi sitio</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/views/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/views/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/views/proyectos/proyectos.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/proyectos/proyectos.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Byb3llY3Rvcy9wcm95ZWN0b3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/proyectos/proyectos.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/proyectos/proyectos.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <app-navbar></app-navbar>\n <body>\n    <app-galery></app-galery>\n </body>\n\n\n"

/***/ }),

/***/ "./src/app/views/proyectos/proyectos.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/proyectos/proyectos.component.ts ***!
  \********************************************************/
/*! exports provided: ProyectosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectosComponent", function() { return ProyectosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProyectosComponent = /** @class */ (function () {
    function ProyectosComponent() {
    }
    ProyectosComponent.prototype.ngOnInit = function () {
    };
    ProyectosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-proyectos',
            template: __webpack_require__(/*! ./proyectos.component.html */ "./src/app/views/proyectos/proyectos.component.html"),
            styles: [__webpack_require__(/*! ./proyectos.component.css */ "./src/app/views/proyectos/proyectos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProyectosComponent);
    return ProyectosComponent;
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\RUBEN.GARZON\Documents\curriculum\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map