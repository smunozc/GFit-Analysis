(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+XmF":
/*!***************************************!*\
  !*** ./src/app/guards/login.guard.ts ***!
  \***************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class LoginGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        if (localStorage.getItem('googleUser') !== null) {
            this.router.navigate(['/dashboard']);
            return false;
        }
        else {
            return true;
        }
    }
}
LoginGuard.ɵfac = function LoginGuard_Factory(t) { return new (t || LoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
LoginGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginGuard, factory: LoginGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\2ºDAW\Proyecto Final\GFit-Analysis\src\GFit-Analysis-Front\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    fireBaseConfig: {
        apiKey: "AIzaSyB49wFoyiYDJbPp4u0bu4FkIGJtUHH9OfA",
        authDomain: "gfit-analysis.firebaseapp.com",
        projectId: "gfit-analysis",
        storageBucket: "gfit-analysis.appspot.com",
        messagingSenderId: "462858263236",
        appId: "1:462858263236:web:aaafd7e57661c883198791",
        measurementId: "G-F9SK8KCZ2P"
    }
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

/***/ "Bho8":
/*!******************************************!*\
  !*** ./src/app/chart/chart.component.ts ***!
  \******************************************/
/*! exports provided: getRandomInt, ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInt", function() { return getRandomInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data-api.service */ "etbh");
/* harmony import */ var _services_data_processing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data-processing.service */ "pYac");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-chartist */ "Cr32");







function ChartComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "x-chartist", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r0.chart.type)("data", ctx_r0.chart.data)("options", ctx_r0.chart.options)("events", ctx_r0.chart.events);
} }
function ChartComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
class ChartComponent {
    constructor(dataApi, dataProcessing, authService) {
        this.dataApi = dataApi;
        this.dataProcessing = dataProcessing;
        this.authService = authService;
        this.totalSteps = 0;
        this.totalCalories = 0;
        this.loaded = false;
        this.updateChartHeight();
        this.valuesPerDay = [0, 0, 0, 0, 0, 0, 0];
        this.chart = {
            data: {
                labels: [
                    'Mon',
                    'Tue',
                    'Wed',
                    'Thu',
                    'Fri',
                    'Sat',
                    'Sun'
                ],
                series: [
                    this.valuesPerDay
                ]
            },
            type: 'Line',
            options: {
                low: 0,
                showArea: true,
                height: this.chartHeight
            }
        };
    }
    ngOnInit() {
        // Every minute data will be updated.
        this.timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(0, 120000).subscribe(() => {
            if (this.isAuth) {
                this.checkValuesPerDay();
            }
        });
        // console.log(this.valuesPerDay + '\n' + 'inchart: ' + this.chart.data.series);
    }
    ngOnChanges(changes) {
        this.checkValuesPerDay();
    }
    updateChartHeight() {
        let mediaQuery = window.matchMedia("(min-width: 1024px)");
        if (mediaQuery.matches) { // If media query matches it will add height to the chart.
            this.chartHeight = 500;
        }
        else {
            this.chartHeight = 250;
        }
    }
    checkValuesPerDay() {
        // GET DATA FROM API
        // GET STEPS
        this.dataApi.getWeekDailyStepCount().subscribe(data => {
            let dailyStepCount = this.dataProcessing.processData(data.bucket, this.dataType);
            this.weekValuesObject = dailyStepCount;
            if (this.dataType === 'steps') {
                this.totalSteps = this.dataProcessing.getTotalData(data.bucket, this.dataType);
                if (dailyStepCount !== null) {
                    this.valuesPerDay = [];
                    for (let day in dailyStepCount) {
                        this.valuesPerDay.push(dailyStepCount[day]);
                    }
                    // If there are days yet to analize
                    if (this.valuesPerDay.length < 7) {
                        let lastingNum = 7 - this.valuesPerDay.length;
                        for (let i = 0; i < lastingNum; i++) {
                            this.valuesPerDay.push(0);
                        }
                    }
                    this.chart.data.series = [this.valuesPerDay];
                    this.loaded = true;
                }
                else {
                    console.log('Could not load the data');
                }
            }
        }, (error) => {
            if (error.status === 401) {
                this.authService.logoutUser();
            }
            else if (error.status === 403) {
                alert("Please make sure you have created and used a google fitness account until you have steps and calories data, otherwise the app won't work");
            }
        });
        // GET CALORIES
        this.dataApi.getWeekDailyCaloriesCount().subscribe(data => {
            let dailyCaloriesCount = this.dataProcessing.processData(data.bucket, this.dataType);
            this.weekValuesObject = dailyCaloriesCount;
            if (this.dataType === 'calories') {
                this.totalCalories = this.dataProcessing.getTotalData(data.bucket, this.dataType);
                if (dailyCaloriesCount !== null) {
                    this.valuesPerDay = [];
                    for (let day in dailyCaloriesCount) {
                        this.valuesPerDay.push(dailyCaloriesCount[day]);
                    }
                    // If there are days yet to analize
                    if (this.valuesPerDay.length < 7) {
                        let lastingNum = 7 - this.valuesPerDay.length;
                        for (let i = 0; i < lastingNum; i++) {
                            this.valuesPerDay.push(0);
                        }
                    }
                    this.chart.data.series = [this.valuesPerDay];
                    this.loaded = true;
                }
                else {
                    console.log('Could not load the data');
                }
            }
        }, (error) => {
            if (error.status === 401) {
                this.authService.logoutUser();
            }
            else if (error.status === 403) {
                alert("Please make sure you have created and used a google fitness account until you have steps and calories data, otherwise the app won't work");
            }
        });
    }
    ngOnDestroy() {
        this.timerSubscription.unsubscribe();
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_api_service__WEBPACK_IMPORTED_MODULE_2__["DataApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_processing_service__WEBPACK_IMPORTED_MODULE_3__["DataProcessingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
ChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChartComponent, selectors: [["app-chart"]], inputs: { isAuth: "isAuth", dataType: "dataType" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["elseBlock", ""], [3, "type", "data", "options", "events"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ChartComponent_div_0_Template, 2, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChartComponent_ng_template_1_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loaded)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng_chartist__WEBPACK_IMPORTED_MODULE_6__["ChartistComponent"]], styles: [".spinner-border[_ngcontent-%COMP%]{\r\n    color: rgb(62, 233, 255);\r\n    margin: 20px 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImNoYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lci1ib3JkZXJ7XHJcbiAgICBjb2xvcjogcmdiKDYyLCAyMzMsIDI1NSk7XHJcbiAgICBtYXJnaW46IDIwcHggMjBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "LV43":
/*!****************************************************!*\
  !*** ./src/app/scoreboard/scoreboard.component.ts ***!
  \****************************************************/
/*! exports provided: ScoreboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreboardComponent", function() { return ScoreboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ScoreboardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Scoreboard not implemented yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ScoreboardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Scoreboard only available when connected to backend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ScoreboardComponent {
    constructor() {
        this.hasBackend = false;
    }
    ngOnInit() {
        if (localStorage.getItem('user') !== null) {
            this.hasBackend = true;
        }
        else {
            this.hasBackend = false;
        }
    }
}
ScoreboardComponent.ɵfac = function ScoreboardComponent_Factory(t) { return new (t || ScoreboardComponent)(); };
ScoreboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScoreboardComponent, selectors: [["app-scoreboard"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["elseBlock", ""]], template: function ScoreboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ScoreboardComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ScoreboardComponent_ng_template_1_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasBackend)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY29yZWJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chart/chart.component */ "Bho8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data-api.service */ "etbh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function DashboardComponent_div_3_h2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r7.totalSteps);
} }
function DashboardComponent_div_3_h2_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.totalCalories);
} }
function DashboardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardComponent_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.selectButtonSteps(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DashboardComponent_div_3_h2_2_Template, 2, 1, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "TOTAL STEPS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardComponent_div_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.selectButtonCalories(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DashboardComponent_div_3_h2_5_Template, 2, 1, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "TOTAL CALORIES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.stepsSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.stepsSelected);
} }
function DashboardComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Steps overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-chart", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataType", ctx_r12.dataType)("isAuth", ctx_r12.isAuth);
} }
function DashboardComponent_div_10_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Calories overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-chart", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataType", ctx_r14.dataType)("isAuth", ctx_r14.isAuth);
} }
function DashboardComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DashboardComponent_div_10_div_1_Template, 4, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DashboardComponent_div_10_ng_template_2_Template, 4, 2, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.stepsSelected)("ngIfElse", _r13);
} }
function DashboardComponent_ng_template_11_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Steps overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DashboardComponent_ng_template_11_ng_template_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Go somewhere");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r18.daysOfWeek[i_r20]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](day_r19[ctx_r18.daysOfWeek[i_r20]]);
} }
function DashboardComponent_ng_template_11_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Calories overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DashboardComponent_ng_template_11_ng_template_1_div_3_Template, 8, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r17.eachDayValues);
} }
function DashboardComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DashboardComponent_ng_template_11_div_0_Template, 3, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DashboardComponent_ng_template_11_ng_template_1_Template, 4, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.stepsSelected)("ngIfElse", _r16);
} }
function DashboardComponent_div_13_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reward_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", reward_r22.badgeImg, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](reward_r22.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Goal: ", reward_r22.conditionNum, " ", reward_r22.dataType, "");
} }
function DashboardComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Goals");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DashboardComponent_div_13_div_3_Template, 8, 4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.unachievedBadges);
} }
function DashboardComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Goals");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class DashboardComponent {
    constructor(authService, dataApi) {
        this.authService = authService;
        this.dataApi = dataApi;
        this.totalSteps = null;
        this.totalCalories = null;
        this.unachievedBadges = null;
        this.dataType = 'steps';
        this.isWeekly = true;
        this.stepsSelected = true;
        this.selectorButtonsLoaded = false;
        this.isAuth = false;
        this.exerciseDataSent = false;
        this.goalsLoaded = false;
        this.hasGoalsLeft = false;
    }
    ngAfterViewInit() {
        this.buttonsTimerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(0, 1000).subscribe(() => {
            if (this.chartComponent !== null && this.chartComponent !== undefined) {
                if (this.isWeekly) {
                    if (this.chartComponent.totalCalories !== null && this.chartComponent.totalSteps !== null) {
                        this.totalSteps = this.chartComponent.totalSteps;
                        this.totalCalories = this.chartComponent.totalCalories;
                        this.selectorButtonsLoaded = true;
                    }
                }
                else {
                    if (this.chartComponent.weekValuesObject !== null && this.chartComponent.weekValuesObject !== undefined) {
                        console.log(this.chartComponent.weekValuesObject);
                        this.daysOfWeek = Object.keys(this.chartComponent.weekValuesObject);
                        this.eachDayValues = this.chartComponent.weekValuesObject;
                    }
                }
            }
        });
    }
    ngOnInit() {
        let selector = document.getElementById('select');
        selector.addEventListener('change', () => {
            if (selector.value === 'weekly') {
                this.isWeekly = true;
                console.log("weekly");
            }
            else {
                this.isWeekly = false;
                console.log("daily");
            }
        });
        this.authService.isAuth().subscribe(auth => {
            if (auth !== null && auth !== undefined) {
                this.isAuth = true;
                auth.getIdTokenResult().then((token) => {
                    let epochExp = parseInt(token.claims.exp); // Takes the expiration time in epoch from the current token
                    if (epochExp < 10000000000) {
                        epochExp *= 1000; // convert to milliseconds (Epoch is usually expressed in seconds, but Javascript uses Milliseconds)
                    }
                    let expDateMilis = epochExp + (new Date().getTimezoneOffset() * -1); //for timeZone
                    let expDate = new Date(expDateMilis);
                    expDate.setMinutes(expDate.getMinutes() - 5); // 5 min before it expires it will refresh the token
                    //console.log('actual: ' + new Date() + ' expirado: ' + expDate);
                    if (new Date() >= expDate) {
                        // CODE SNIPPET IN CASE THAT I ACTUALLY MANAGE TO AUTO-REALOAD THE TOKEN.
                        /*
                        firebase.auth().
                        let credential = firebase.auth.GoogleAuthProvider.credential(token.token);
                        firebase.auth().signInWithCredential(credential).then(credential => {
                          console.log(credential);
                          localStorage.setItem('credential', JSON.stringify(credential.credential));
                        });
                        */
                        this.authService.logoutUser(); // In the case that current time has exeeded expiration time for the token the user logsout
                    }
                });
            }
        });
        this.timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(0, 2000).subscribe(() => {
            if (this.exerciseDataSent) {
                this.timerSubscription.unsubscribe();
            }
            else {
                if (this.isAuth) {
                    // Send exercise data to backend.
                    if (localStorage.getItem('user') !== undefined && localStorage.getItem('user') !== null) {
                        this.loadDatatoBackend();
                        // Get unachieved badges
                        this.dataApi.getUnachievedBadges(JSON.parse(localStorage.getItem('user'))).subscribe(data => {
                            if (data !== null) {
                                this.unachievedBadges = data;
                                this.hasGoalsLeft = true;
                                console.log(this.unachievedBadges);
                            }
                            else {
                                this.hasGoalsLeft = false;
                            }
                            this.goalsLoaded = true;
                        });
                    }
                    else {
                        console.log("Could not retrieve user, possibly due to lack of connection to the backend");
                    }
                }
            }
        });
    }
    selectButtonSteps() {
        this.stepsSelected = true;
        let buttonSteps = document.getElementById('button-steps');
        let buttonCalories = document.getElementById('button-calories');
        buttonSteps.className = 'button-selected';
        buttonCalories.className = 'button';
        // chart modification
        this.dataType = 'steps';
    }
    selectButtonCalories() {
        this.stepsSelected = false;
        let buttonSteps = document.getElementById('button-steps');
        let buttonCalories = document.getElementById('button-calories');
        buttonSteps.className = 'button';
        buttonCalories.className = 'button-selected';
        // chart modification
        this.dataType = 'calories';
    }
    loadDatatoBackend(optionalUser) {
        let exerciseWeek = [];
        let stepsWeek = [];
        let caloriesWeek = [];
        let user = null;
        if (localStorage.getItem('user') != null) {
            user = JSON.parse(localStorage.getItem('user'));
        }
        else if (optionalUser !== null && optionalUser !== undefined) {
            user = optionalUser;
        }
        // console.log("DATA LOAD: " + JSON.stringify(user));
        this.dataApi.getWeekDailyCaloriesCount().subscribe(caloriesData => {
            for (let i = 0; i < 7; i++) { // These data buckets come with arrays of 7, which resembles a hole week.
                if (caloriesData.bucket[i].dataset[0].point.length > 0) {
                    caloriesWeek.push(caloriesData.bucket[i]);
                }
                else {
                    let aux = {
                        dataset: [
                            {
                                point: [
                                    {
                                        value: [
                                            {
                                                fpVal: 0
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    };
                    caloriesWeek.push(aux);
                }
            }
            this.dataApi.getWeekDailyStepCount().subscribe(stepsData => {
                for (let i = 0; i < 7; i++) {
                    if (stepsData.bucket[i].dataset[0].point.length > 0) {
                        stepsWeek.push(stepsData.bucket[i]);
                    }
                    else {
                        let aux = {
                            dataset: [
                                {
                                    point: [
                                        {
                                            value: [
                                                {
                                                    intVal: 0
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        };
                        stepsWeek.push(aux);
                    }
                }
                if (stepsWeek !== null && caloriesWeek !== null) {
                    let weekLength = caloriesWeek.length;
                    for (let i = 0; i < weekLength; i++) {
                        let todayDate = new Date();
                        let date = new Date(parseInt(caloriesWeek[i].startTimeMillis));
                        let simpleDate = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
                        if (date <= todayDate) {
                            // console.log(simpleDate);
                            // console.log(stepsWeek[i].dataset[0].point[0].value[0].intVal);
                            // console.log(Math.trunc(caloriesWeek[i].dataset[0].point[0].value[0].fpVal));
                            let exerciseDay = {
                                "date": simpleDate,
                                "caloriesBurned": Math.trunc(caloriesWeek[i].dataset[0].point[0].value[0].fpVal),
                                "estimatedSteps": parseInt(stepsWeek[i].dataset[0].point[0].value[0].intVal),
                                "user": user
                            };
                            exerciseWeek.push(exerciseDay);
                        }
                    }
                    console.log(exerciseWeek);
                    this.dataApi.postUserData(exerciseWeek, user).subscribe(refreshUser => {
                        console.log("Save");
                        console.log(refreshUser);
                        this.exerciseDataSent = true;
                        localStorage.setItem('user', JSON.stringify(refreshUser));
                    }, (error) => {
                        if (error.status === 0) {
                            localStorage.removeItem('user');
                            console.log("Not connected to backend");
                        }
                        else if (error.status === 500) {
                            console.log("Error with the petition");
                        }
                    });
                }
            });
        });
    }
    ngOnDestroy() {
        this.timerSubscription.unsubscribe();
        this.buttonsTimerSubscription.unsubscribe();
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_data_api_service__WEBPACK_IMPORTED_MODULE_4__["DataApiService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_chart_chart_component__WEBPACK_IMPORTED_MODULE_1__["ChartComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.chartComponent = _t.first);
    } }, decls: 16, vars: 5, consts: [[1, "contain"], ["id", "buttons-container", 4, "ngIf"], [1, "bubble"], ["name", "select", "id", "select", 1, "form-select"], ["value", "weekly", "selected", ""], ["value", "daily"], [4, "ngIf", "ngIfElse"], ["isDaily", ""], ["class", "unachieved", 4, "ngIf", "ngIfElse"], ["loadingUnachieved", ""], ["id", "buttons-container"], ["id", "button-steps", 1, "button-selected", 3, "click"], ["id", "totalSteps", "class", "totalDataVal-selected", 4, "ngIf"], ["id", "button-calories", 1, "button", 3, "click"], ["id", "totalCalories", "class", "totalDataVal-selected", 4, "ngIf"], ["id", "totalSteps", 1, "totalDataVal-selected"], ["id", "totalCalories", 1, "totalDataVal-selected"], ["class", "chart", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "chart"], [3, "dataType", "isAuth"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["href", "#", 1, "btn", "btn-primary"], [1, "unachieved"], ["class", "card-wrapper", 4, "ngFor", "ngForOf"], [1, "card-wrapper"], [1, "card-image"], ["alt", "Badge", 3, "src"], [1, "card-content"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "DASHBOARD");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DashboardComponent_div_3_Template, 7, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "WEEKLY");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "DAILY");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, DashboardComponent_div_10_Template, 4, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, DashboardComponent_ng_template_11_Template, 3, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, DashboardComponent_div_13_Template, 4, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, DashboardComponent_ng_template_14_Template, 6, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectorButtonsLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isWeekly)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.unachievedBadges != null)("ngIfElse", _r5);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _chart_chart_component__WEBPACK_IMPORTED_MODULE_1__["ChartComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".contain[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  overflow: hidden;\r\n  width: 100%;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  text-align: center;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n}\r\n\r\n#buttons-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 130px;\r\n  justify-content: space-evenly;\r\n  left: 0;\r\n  position: absolute;\r\n  width: 55%;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  border: none;\r\n  border-radius: 5px;\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n  font-size: 0.6rem;\r\n  height: 50px;\r\n  padding: 5px;\r\n  padding-left: 10px;\r\n  text-align: start;\r\n  transition-property: width, height, font-size;\r\n  transition-duration: 0.2s;\r\n  transition-timing-function: ease-in;\r\n  left: 0;\r\n  position: relative;\r\n  width: 60%;\r\n}\r\n\r\n.totalDataVal[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  margin: 0;\r\n  transition-property: font-size;\r\n  transition-duration: 0.2s;\r\n  transition-timing-function: ease-in;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(230, 230, 230);\r\n}\r\n\r\n.button-selected[_ngcontent-%COMP%] {\r\n  background-color: #0de4e4;\r\n  border: none;\r\n  border-radius: 5px;\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n  font-size: 0.8rem;\r\n  height: 60px;\r\n  padding: 5px;\r\n  padding-left: 10px;\r\n  text-align: start;\r\n  transition-property: width, height, font-size;\r\n  transition-duration: 0.2s;\r\n  transition-timing-function: ease-in;\r\n  left: 0;\r\n  position: relative;\r\n  width: 80%;\r\n}\r\n\r\n.totalDataVal-selected[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n  margin: 0;\r\n  transition-property: font-size;\r\n  transition-duration: 0.2s;\r\n  transition-timing-function: ease-in;\r\n}\r\n\r\n\r\n\r\n.bubble[_ngcontent-%COMP%] {\r\n  display: none;\r\n  background-color: #0de4e4;\r\n  border-radius: 100%;\r\n  height: 120px;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 30px;\r\n  width: 120px;\r\n  z-index: 0;\r\n}\r\n\r\n.bubble[_ngcontent-%COMP%]   #select[_ngcontent-%COMP%] {\r\n  border: none;\r\n  left: -30px;\r\n  padding: 5px;\r\n  position: relative;\r\n  top: 40%;\r\n}\r\n\r\n.chart[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  border-radius: 5px;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n  margin-top: 10rem;\r\n  padding: 5px;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.unachieved[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin: 20px auto;\r\n  width:90%;\r\n}\r\n\r\n.unachieved[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n\r\n.card-wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  transition: 0.3s;\r\n  width: 15%;\r\n  border-radius: 5px;\r\n  margin: 10px;\r\n  animation: scaledown 0.2s linear;\r\n  transform-origin: 50% 50%;\r\n  animation-fill-mode: forwards;\r\n  background-color: white;\r\n  height: 150px;\r\n  width: 250px;\r\n}\r\n\r\n.card-wrapper[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\r\n  z-index: 100;\r\n  animation: scale 0.1s linear;\r\n  transform-origin: 50% 50%;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n.card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 5px 0 0 5px;\r\n  height: 90%;\r\n  width: 90px;\r\n  object-fit: cover;\r\n  padding: 5px;\r\n}\r\n\r\n.card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  padding-right: 5px;\r\n  font-size: 1em;\r\n  margin-top: 15px;\r\n}\r\n\r\n@media screen and (min-width: 480px) {\r\n  .button[_ngcontent-%COMP%] {\r\n    font-size: 0.6rem;\r\n    width: 40%;\r\n  }\r\n\r\n  .totalDataVal[_ngcontent-%COMP%] {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .button-selected[_ngcontent-%COMP%] {\r\n    font-size: 0.9rem;\r\n    width: 60%;\r\n  }\r\n\r\n  .totalDataVal-selected[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .bubble[_ngcontent-%COMP%] {\r\n    height: 150px;\r\n    right: 10px;\r\n    width: 150px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1024px) {\r\n  .contain[_ngcontent-%COMP%] {\r\n    padding: 0 20px;\r\n  }\r\n\r\n  h1[_ngcontent-%COMP%] {\r\n    text-align: start;\r\n  }\r\n\r\n  #buttons-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    height: 80px;\r\n    justify-content: space-evenly;\r\n    left: unset;\r\n    right: 18rem;\r\n    top: 0;\r\n    position: absolute;\r\n    width: 30rem;\r\n  }\r\n\r\n  .button[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    border: none;\r\n    border-radius: 5px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    font-size: 0.7rem;\r\n    height: 70%;\r\n    left: unset;\r\n    top: 0;\r\n    position: relative;\r\n    width: 40%;\r\n  }\r\n\r\n  .totalDataVal[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    margin: 0;\r\n  }\r\n\r\n  .button-selected[_ngcontent-%COMP%] {\r\n    background-color: #0de4e4;\r\n    border: none;\r\n    border-radius: 5px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    font-size: 1rem;\r\n    height: 100%;\r\n    left: unset;\r\n    top: 0;\r\n    position: relative;\r\n    width: 40%;\r\n  }\r\n\r\n  .totalDataVal-selected[_ngcontent-%COMP%] {\r\n    font-size: 1.6rem;\r\n    margin: 0;\r\n  }\r\n\r\n  .bubble[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n    padding: 20px;\r\n    position: absolute;\r\n    right: 20px;\r\n    top: 0;\r\n    width: 200px\r\n  }\r\n\r\n  .bubble[_ngcontent-%COMP%]   #select[_ngcontent-%COMP%] {\r\n    border: none;\r\n    left: -60px;\r\n    padding: 10px;\r\n    position: relative;\r\n    top: 40%;\r\n    transition-property: all;\r\n    transition-duration: 0.2s;\r\n    transition-timing-function: ease-in;\r\n  }\r\n\r\n  .bubble[_ngcontent-%COMP%]   #select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\r\n    transition-property: all;\r\n    transition-duration: 0.2s;\r\n    transition-timing-function: ease-in;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDZDQUE2QztFQUM3Qyx5QkFBeUI7RUFDekIsbUNBQW1DO0VBQ25DLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiw2Q0FBNkM7RUFDN0MseUJBQXlCO0VBQ3pCLG1DQUFtQztFQUNuQyxPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixtQ0FBbUM7QUFDckM7O0FBRUEscUhBQXFIOztBQUNySDtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMENBQTBDO0VBQzFDLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFHWixnQ0FBZ0M7RUFDaEMseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxZQUFZO0VBR1osNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsWUFBWTtJQUNaLE1BQU07SUFDTixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFdBQVc7SUFDWCxNQUFNO0lBQ04sa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGVBQWU7SUFDZixTQUFTO0VBQ1g7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLE1BQU07SUFDTixrQkFBa0I7SUFDbEIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxNQUFNO0lBQ047RUFDRjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1Isd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLG1DQUFtQztFQUNyQztBQUNGIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW4ge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmgyIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbiNidXR0b25zLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTMwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgbGVmdDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDU1JTtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGgsIGhlaWdodCwgZm9udC1zaXplO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgbGVmdDogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLnRvdGFsRGF0YVZhbCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIG1hcmdpbjogMDtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBmb250LXNpemU7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApO1xyXG59XHJcblxyXG4uYnV0dG9uLXNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGRlNGU0O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHdpZHRoLCBoZWlnaHQsIGZvbnQtc2l6ZTtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi50b3RhbERhdGFWYWwtc2VsZWN0ZWQge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIG1hcmdpbjogMDtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBmb250LXNpemU7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxufVxyXG5cclxuLyogVGhlIGRpc3BsYXkgaXMgc2V0IG9uICdub25lJyBub25lIGJlY2F1c2UgdGhlIGZlYXR1cmUgaXMgbm90IGNvbXBsZXRlLCBvcmlnaW5hbGx5IHRoZSBkaXNwbGF5IHdhcyBzZXQgb24gJ2Jsb2NrJyAqL1xyXG4uYnViYmxlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZGU0ZTQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDMwcHg7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5idWJibGUgI3NlbGVjdCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGxlZnQ6IC0zMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA0MCU7XHJcbn1cclxuXHJcbi5jaGFydCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHJlbTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi51bmFjaGlldmVke1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIHdpZHRoOjkwJTtcclxufVxyXG5cclxuLnVuYWNoaWV2ZWQgaDJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJkLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgd2lkdGg6IDE1JTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzY2FsZWRvd24gMC4zcyBsaW5lYXI7XHJcbiAgLW1vei1hbmltYXRpb246IHNjYWxlZG93biAwLjNzIGxpbmVhcjtcclxuICBhbmltYXRpb246IHNjYWxlZG93biAwLjJzIGxpbmVhcjtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc2NhbGUgMC4zcyBsaW5lYXI7XHJcbiAgLW1vei1hbmltYXRpb246IHNjYWxlIDAuM3MgbGluZWFyO1xyXG4gIGFuaW1hdGlvbjogc2NhbGUgMC4xcyBsaW5lYXI7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxufVxyXG5cclxuLmNhcmQtaW1hZ2UgaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcclxuICBoZWlnaHQ6IDkwJTtcclxuICB3aWR0aDogOTBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQgaDMge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xyXG4gIC5idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxuXHJcbiAgLnRvdGFsRGF0YVZhbCB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcblxyXG4gIC5idXR0b24tc2VsZWN0ZWQge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gIH1cclxuXHJcbiAgLnRvdGFsRGF0YVZhbC1zZWxlY3RlZCB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIC5idWJibGUge1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgLmNvbnRhaW4ge1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgfVxyXG5cclxuICAjYnV0dG9ucy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGxlZnQ6IHVuc2V0O1xyXG4gICAgcmlnaHQ6IDE4cmVtO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDMwcmVtO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICBsZWZ0OiB1bnNldDtcclxuICAgIHRvcDogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfVxyXG5cclxuICAudG90YWxEYXRhVmFsIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5idXR0b24tc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkZTRlNDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IHVuc2V0O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcblxyXG4gIC50b3RhbERhdGFWYWwtc2VsZWN0ZWQge1xyXG4gICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAuYnViYmxlIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMjAwcHhcclxuICB9XHJcblxyXG4gIC5idWJibGUgI3NlbGVjdCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBsZWZ0OiAtNjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICB9XHJcblxyXG4gIC5idWJibGUgI3NlbGVjdCBvcHRpb24ge1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");





function AppComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_0_div_1_Template, 2, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isLogged);
} }
class AppComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'GFit-Analysis-Front';
        this.isLogged = false;
        this.isChecked = false;
    }
    ngOnInit() {
        this.getCurrentUser();
    }
    getCurrentUser() {
        this.authService.isAuth().subscribe(auth => {
            if (auth) {
                console.log("user logged in");
                this.isLogged = true;
            }
            else {
                console.log("user not logged");
                this.isLogged = false;
                // this.router.navigate(['login']);
            }
            this.isChecked = true;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 1, consts: [["class", "wrapper", 4, "ngIf"], [1, "wrapper"], ["class", "navbar-container", 4, "ngIf"], [1, "content-container"], [1, "navbar-container"], ["id", "navbar"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 4, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isChecked);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]], styles: [".wrapper[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    width: 90% 0;\r\n}\r\n\r\n.content-container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n\r\n@media screen and (min-width: 1024px) {\r\n    .wrapper[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-wrap: nowrap;\r\n        justify-content: flex-start;\r\n        margin-left: 5rem;\r\n    }\r\n    .navbar-container[_ngcontent-%COMP%]{\r\n        height: 100%;\r\n        left: 0;\r\n        position: fixed;\r\n        top: 0;\r\n        width: 5rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsMkJBQTJCO1FBQzNCLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLE9BQU87UUFDUCxlQUFlO1FBQ2YsTUFBTTtRQUNOLFdBQVc7SUFDZjtBQUNKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDkwJSAwO1xyXG59XHJcblxyXG4uY29udGVudC1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAud3JhcHBlcntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXJlbTtcclxuICAgIH1cclxuICAgIC5uYXZiYXItY29udGFpbmVye1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgd2lkdGg6IDVyZW07XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "TRGY":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data-api.service */ "etbh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function AdminComponent_div_0_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_div_0_tr_15_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const user_r4 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.deleteUser(user_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r4.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r4.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r4.role);
} }
function AdminComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ADMINISTRATION PANEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "List of users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Display Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AdminComponent_div_0_tr_15_Template, 10, 3, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.userList);
} }
function AdminComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ADMINISTRATION PANEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Users management only available with backend services");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AdminComponent {
    constructor(dataApi) {
        this.dataApi = dataApi;
        this.userLoaded = false;
        this.hasBackend = false;
    }
    ngOnInit() {
        if (localStorage.getItem('user') !== null) {
            this.hasBackend = true;
            this.dataApi.getAllUsers().subscribe(users => {
                this.userList = users;
                this.userLoaded = true;
            });
        }
    }
    deleteUser(user) {
        let confirmation = confirm('Are you sure you want to delete this user: ' + user.email);
        if (confirmation) {
            this.dataApi.deleteUser(user).subscribe(isDeleted => {
                if (isDeleted) {
                    for (let i = 0; i < this.userList.length; i++) {
                        if (this.userList[i].email === user.email) {
                            this.userList.splice(i, 1);
                        }
                    }
                    alert("The user has been successfully deleted");
                }
                else {
                    alert("Couldn't delete the user");
                }
            });
        }
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_api_service__WEBPACK_IMPORTED_MODULE_1__["DataApiService"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 3, vars: 2, consts: [["class", "contain", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "contain"], ["id", "table"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-danger", 3, "click"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AdminComponent_div_0_Template, 16, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminComponent_ng_template_1_Template, 5, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasBackend)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".contain[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  overflow: hidden;\r\n  width: 100%;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  text-align: center;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n}\r\n\r\n#table[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  border-collapse: collapse;\r\n  border-radius: 5px;\r\n  margin: 30px auto;\r\n  padding: 10px;\r\n  text-align: center;\r\n  width: 90%;\r\n}\r\n\r\n#table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid rgb(59, 59, 59);\r\n}\r\n\r\n#table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n  padding: 10px;\r\n  text-align: left;\r\n}\r\n\r\n#table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4), #table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3){\r\n  text-align: center;\r\n}\r\n\r\n@media screen and (min-width: 1024px) {\r\n  .contain[_ngcontent-%COMP%] {\r\n    padding: 0 20px;\r\n  }\r\n\r\n  h1[_ngcontent-%COMP%] {\r\n    text-align: start;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoiYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaDEge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4jdGFibGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbiN0YWJsZSB0ciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1OSwgNTksIDU5KTtcclxufVxyXG5cclxuI3RhYmxlIHRyIHRke1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuI3RhYmxlIHRyIHRkOm50aC1jaGlsZCg0KSwgI3RhYmxlIHRyIHRkOm50aC1jaGlsZCgzKXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gIC5jb250YWluIHtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Tk1w":
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AdminGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user !== null) {
            if (user.role === 'admin') {
                return true;
            }
            else {
                this.router.navigate(['/dashboard']);
                return false;
            }
        }
        else {
            this.router.navigate(['/dashboard']);
            return false;
        }
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        if (localStorage.getItem('googleUser') !== null) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ProfileComponent_div_6_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const userReward_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", userReward_r7.reward.badgeImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](userReward_r7.reward.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](userReward_r7.reward.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Achieved on: ", userReward_r7.date, "");
} }
function ProfileComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Badges");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_div_6_div_1_div_3_Template, 9, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.user.userRewards);
} }
function ProfileComponent_div_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Badges");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "You haven't earned any badge yet!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_div_6_div_1_Template, 4, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_div_6_ng_template_2_Template, 5, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.hasRewards)("ngIfElse", _r4);
} }
function ProfileComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Badges only available with backend service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProfileComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        /* Temporal user, final version will take this parameters from the backend and will be able to modify them*/
        if (localStorage.getItem('user') !== null) {
            this.user = JSON.parse(localStorage.getItem('user'));
            this.hasBackend = true;
            if (this.user.userRewards.length > 0) {
                this.hasRewards = true;
            }
            else {
                this.hasRewards = false;
            }
        }
        else {
            this.user = JSON.parse(localStorage.getItem('googleUser'));
            this.hasBackend = false;
        }
    }
    logout() {
        this.authService.logoutUser();
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 9, vars: 4, consts: [[1, "banner"], ["id", "profile-picture", "alt", "Profile picture", 3, "src"], ["id", "username"], ["id", "logout", 3, "click"], [1, "bi", "bi-box-arrow-right"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["class", "badges", 4, "ngIf", "ngIfElse"], ["noRewards", ""], [1, "badges"], ["class", "card shadow", "style", "width: 18rem;", 4, "ngFor", "ngForOf"], [1, "card", "shadow", 2, "width", "18rem"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "card-text", "achieveDate"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_4_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileComponent_div_6_Template, 4, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileComponent_ng_template_7_Template, 3, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.user.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.displayName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasBackend)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".banner[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  background: linear-gradient(to bottom right, #2D1D7A 16%, #573170 32%, #804565 48%, #AA585B 64%, #D36C50 80%, #FD8046 96%);\r\n  border-radius: 5px;\r\n  border-bottom-left-radius: 5px;\r\n  border-bottom-right-radius: 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow: hidden;\r\n  margin: 30px auto;\r\n  width: 90%;\r\n}\r\n\r\n#profile-picture[_ngcontent-%COMP%] {\r\n  border-radius: 100%;\r\n  margin-top: 60px;\r\n  width: 8rem;\r\n}\r\n\r\n#username[_ngcontent-%COMP%] {\r\n  color: white;\r\n  margin-bottom: 60px;\r\n}\r\n\r\n#logout[_ngcontent-%COMP%] {\r\n  background-color: #0de4e4;\r\n  border: none;\r\n  border-radius: 100%;\r\n  color: black;\r\n  font-size: 1.2rem;\r\n  height: 3rem;\r\n  padding-right: 2px;\r\n  position: absolute;\r\n  right: 10%;\r\n  text-align: center;\r\n  top: 10%;\r\n  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.575);\r\n  width: 3rem;\r\n}\r\n\r\n#logout[_ngcontent-%COMP%]:hover {\r\n  background-color: #0bb6b6;\r\n  font-size: 1.5rem;\r\n  height: 4rem;\r\n  transition-property: all;\r\n  transition-duration: 0.15s;\r\n  transition-timing-function: ease-in;\r\n  text-align: center;\r\n  width: 4rem;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  margin: 20px 0;\r\n}\r\n\r\n.badges[_ngcontent-%COMP%] {\r\n  background-color: rgb(255, 255, 255);\r\n  border-radius: 5px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  height: 100%;\r\n  margin: 30px auto;\r\n  width: 90%\r\n}\r\n\r\n.badges[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.badges[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .card[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n  margin: 20px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  background: -webkit-repeating-linear-gradient(-45deg, #08b6b6, #d5ffa5);\r\n  background-size: 300%;\r\n  animation: animateBackground 10s ease-in-out infinite;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%]{\r\n  background-color: rgb(252, 252, 252);\r\n  border-radius: inherit;\r\n}\r\n\r\n.achieveDate[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n}\r\n\r\n.shadow[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  width: inherit;\r\n  height: inherit;\r\n  z-index: -2;\r\n  -webkit-border-radius: inherit;\r\n  -webkit-background-clip: padding-box;\r\n  -moz-border-radius: inherit;\r\n  -moz-background-clip: padding;\r\n  border-radius: inherit;\r\n  background-clip: padding-box;\r\n  pointer-events: none;\r\n  box-sizing: border-box;\r\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.shadow[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  width: inherit;\r\n  height: inherit;\r\n  z-index: -2;\r\n  -webkit-border-radius: inherit;\r\n  -webkit-background-clip: padding-box;\r\n  -moz-border-radius: inherit;\r\n  -moz-background-clip: padding;\r\n  border-radius: inherit;\r\n  background-clip: padding-box;\r\n  pointer-events: none;\r\n  box-sizing: border-box;\r\n  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n@keyframes animateBackground {\r\n  0% {\r\n    background-position: 0 0;\r\n  }\r\n\r\n  25% {\r\n    background-position: 100% 0;\r\n  }\r\n\r\n  50% {\r\n    background-position: 100% 100%;\r\n  }\r\n\r\n  75% {\r\n    background-position: 0 100%;\r\n  }\r\n\r\n  100% {\r\n    background-position: 0 0;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQiwwSEFBMEg7RUFDMUgsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsNERBQTREO0VBQzVELFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7RUFDakI7QUFDRjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7O0VBR0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVFQUF1RTtFQUN2RSxxQkFBcUI7RUFDckIscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNO0VBQ04sU0FBUztFQUNULGNBQWM7RUFDZCxlQUFlO0VBQ2YsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixvQ0FBb0M7RUFDcEMsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUdwQixzQkFBc0I7RUFHdEIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU07RUFDTixTQUFTO0VBQ1QsY0FBYztFQUNkLGVBQWU7RUFDZixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLG9DQUFvQztFQUNwQywyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBR3BCLHNCQUFzQjtFQUd0Qiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLHdCQUF3QjtFQUMxQjtBQUNGIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzJEMUQ3QSAxNiUsICM1NzMxNzAgMzIlLCAjODA0NTY1IDQ4JSwgI0FBNTg1QiA2NCUsICNEMzZDNTAgODAlLCAjRkQ4MDQ2IDk2JSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbiNwcm9maWxlLXBpY3R1cmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICB3aWR0aDogOHJlbTtcclxufVxyXG5cclxuI3VzZXJuYW1lIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxuI2xvZ291dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkZTRlNDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDEwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdG9wOiAxMCU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS41NzUpO1xyXG4gIHdpZHRoOiAzcmVtO1xyXG59XHJcblxyXG4jbG9nb3V0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGJiNmI2O1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGhlaWdodDogNHJlbTtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA0cmVtO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBtYXJnaW46IDIwcHggMDtcclxufVxyXG5cclxuLmJhZGdlcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgd2lkdGg6IDkwJVxyXG59XHJcblxyXG4uYmFkZ2VzIGgyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJhZGdlcyBoMixcclxuLmNhcmQsXHJcbnAge1xyXG4gIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjMDhiNmI2LCAjZDVmZmE1KTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDMwMCU7XHJcbiAgYW5pbWF0aW9uOiBhbmltYXRlQmFja2dyb3VuZCAxMHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjUyLCAyNTIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5hY2hpZXZlRGF0ZXtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNoYWRvdzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogaW5oZXJpdDtcclxuICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgei1pbmRleDogLTI7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgOHB4IDE3cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwIDhweCAxN3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE3cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbi5zaGFkb3c6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogaW5oZXJpdDtcclxuICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgei1pbmRleDogLTI7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgYm94LXNoYWRvdzogMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbWF0ZUJhY2tncm91bmQge1xyXG4gIDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcclxuICB9XHJcblxyXG4gIDI1JSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMDAlO1xyXG4gIH1cclxuXHJcbiAgNzUlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMTAwJTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-chartist */ "Cr32");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page404/page404.component */ "Zawe");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chart/chart.component */ "Bho8");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./scoreboard/scoreboard.component */ "LV43");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");


















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [_chart_chart_component__WEBPACK_IMPORTED_MODULE_12__["ChartComponent"]], imports: [[
            _angular_fire__WEBPACK_IMPORTED_MODULE_0__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].fireBaseConfig),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ng_chartist__WEBPACK_IMPORTED_MODULE_5__["ChartistModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
        _page404_page404_component__WEBPACK_IMPORTED_MODULE_10__["Page404Component"],
        _chart_chart_component__WEBPACK_IMPORTED_MODULE_12__["ChartComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
        _scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_14__["ScoreboardComponent"],
        _admin_admin_component__WEBPACK_IMPORTED_MODULE_15__["AdminComponent"]], imports: [_angular_fire__WEBPACK_IMPORTED_MODULE_0__["AngularFireModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        ng_chartist__WEBPACK_IMPORTED_MODULE_5__["ChartistModule"]] }); })();


/***/ }),

/***/ "Zawe":
/*!**********************************************!*\
  !*** ./src/app/page404/page404.component.ts ***!
  \**********************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class Page404Component {
    constructor() { }
    ngOnInit() { }
}
Page404Component.ɵfac = function Page404Component_Factory(t) { return new (t || Page404Component)(); };
Page404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page404Component, selectors: [["app-page404"]], decls: 8, vars: 0, consts: [[1, "error-page"], ["data-h1", "404"], ["data-p", "NOT FOUND"]], template: function Page404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NOT FOUND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "This is fine...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n}\r\n\r\n.error-page[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  height: 100%;\r\n  padding-top: 15rem;\r\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\r\n}\r\n\r\n.error-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 30vh;\r\n  font-weight: bold;\r\n  position: relative;\r\n  margin: -8vh 0 0;\r\n  padding: 0;\r\n}\r\n\r\n.error-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:after {\r\n  content: attr(data-h1);\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  color: transparent;\r\n  \r\n  background: -webkit-repeating-linear-gradient(-45deg, #71b7e6, #69a6ce, #b98acc, #ee8176, #b98acc, #69a6ce, #9b59b6);\r\n  -webkit-background-clip: text;\r\n  background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  background-size: 400%;\r\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.25);\r\n  animation: animateTextBackground 10s ease-in-out infinite;\r\n}\r\n\r\n.error-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] + p[_ngcontent-%COMP%] {\r\n  color: #d6d6d6;\r\n  font-size: 8vh;\r\n  font-weight: bold;\r\n  line-height: 10vh;\r\n  max-width: 600px;\r\n  position: relative;\r\n}\r\n\r\n.error-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] + p[_ngcontent-%COMP%]:after {\r\n  content: attr(data-p);\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  color: transparent;\r\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);\r\n  -webkit-background-clip: text;\r\n  -moz-background-clip: text;\r\n  background-clip: text;\r\n}\r\n\r\n@keyframes animateTextBackground {\r\n  0% {\r\n    background-position: 0 0;\r\n  }\r\n\r\n  25% {\r\n    background-position: 100% 0;\r\n  }\r\n\r\n  50% {\r\n    background-position: 100% 100%;\r\n  }\r\n\r\n  75% {\r\n    background-position: 0 100%;\r\n  }\r\n\r\n  100% {\r\n    background-position: 0 0;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .error-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 32vw;\r\n  }\r\n\r\n  .error-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] + p[_ngcontent-%COMP%] {\r\n    font-size: 8vw;\r\n    line-height: 10vw;\r\n    max-width: 70vw;\r\n  }\r\n}\r\n\r\na.back[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  right: 40px;\r\n  bottom: 40px;\r\n  background: -webkit-repeating-linear-gradient(-45deg, #71b7e6, #69a6ce, #b98acc, #ee8176);\r\n  border-radius: 5px;\r\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\r\n  color: #fff;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  line-height: 24px;\r\n  padding: 15px 30px;\r\n  text-decoration: none;\r\n  transition: 0.25s all ease-in-out;\r\n}\r\n\r\na.back[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2U0MDQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwyREFBMkQ7QUFDN0Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsK0NBQStDO0VBQy9DLG9IQUFvSDtFQUNwSCw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLG9DQUFvQztFQUNwQyxxQkFBcUI7RUFDckIsa0RBQWtEO0VBQ2xELHlEQUF5RDtBQUMzRDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsaURBQWlEO0VBQ2pELDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUZBQXlGO0VBQ3pGLGtCQUFrQjtFQUNsQix5Q0FBeUM7RUFDekMsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDIiwiZmlsZSI6InBhZ2U0MDQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsXHJcbmJvZHkge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5lcnJvci1wYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMTVyZW07XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmVycm9yLXBhZ2UgaDEge1xyXG4gIGZvbnQtc2l6ZTogMzB2aDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAtOHZoIDAgMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uZXJyb3ItcGFnZSBoMTphZnRlciB7XHJcbiAgY29udGVudDogYXR0cihkYXRhLWgxKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC8qIHdlYmtpdCBvbmx5IGZvciBncmFjZWZ1bCBkZWdyYWRhdGlvbiB0byBJRSAqL1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICM3MWI3ZTYsICM2OWE2Y2UsICNiOThhY2MsICNlZTgxNzYsICNiOThhY2MsICM2OWE2Y2UsICM5YjU5YjYpO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA0MDAlO1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xyXG4gIGFuaW1hdGlvbjogYW5pbWF0ZVRleHRCYWNrZ3JvdW5kIDEwcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuLmVycm9yLXBhZ2UgaDErcCB7XHJcbiAgY29sb3I6ICNkNmQ2ZDY7XHJcbiAgZm9udC1zaXplOiA4dmg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEwdmg7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5lcnJvci1wYWdlIGgxK3A6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1wKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGVUZXh0QmFja2dyb3VuZCB7XHJcbiAgMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xyXG4gIH1cclxuXHJcbiAgMjUlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XHJcbiAgfVxyXG5cclxuICA3NSUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAxMDAlO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuZXJyb3ItcGFnZSBoMSB7XHJcbiAgICBmb250LXNpemU6IDMydnc7XHJcbiAgfVxyXG5cclxuICAuZXJyb3ItcGFnZSBoMStwIHtcclxuICAgIGZvbnQtc2l6ZTogOHZ3O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwdnc7XHJcbiAgICBtYXgtd2lkdGg6IDcwdnc7XHJcbiAgfVxyXG59XHJcblxyXG5hLmJhY2sge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogNDBweDtcclxuICBib3R0b206IDQwcHg7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1yZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzcxYjdlNiwgIzY5YTZjZSwgI2I5OGFjYywgI2VlODE3Nik7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IDAuMjVzIGFsbCBlYXNlLWluLW91dDtcclxufVxyXG5cclxuYS5iYWNrOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "etbh":
/*!**********************************************!*\
  !*** ./src/app/services/data-api.service.ts ***!
  \**********************************************/
/*! exports provided: DataApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataApiService", function() { return DataApiService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




// Unused imports
// import { Observable, throwError } from 'rxjs';
class DataApiService {
    constructor(http) {
        this.http = http;
    }
    getWeekDailyStepCount() {
        const credential = JSON.parse(localStorage.getItem('credential'));
        if (credential != null) {
            const url = 'https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate';
            // Obtain monday of this week at 00:00 of my timezone
            let monday = this.getMonday(new Date());
            monday.setHours(0, 0, 0, 0);
            // Obtain sunday of this week at 23:59 of my timezone
            let sunday = new Date(monday);
            sunday.setDate(sunday.getDate() + 6);
            sunday.setHours(23, 59, 59, 999);
            // Print for testing purposes
            // console.log("Lunes: " + monday.getTime());
            // console.log("Domingo: " + sunday.getTime());
            // This variables obtain the last 7 days
            // let todayDateMilis = Date.now(); //TODO wrong, have to obtain the monday and sunday of current week
            // let firstWeekDayMilis = todayDateMilis - 604800000;
            // Body of the POST request
            const body = {
                "aggregateBy": [{
                        "dataTypeName": "com.google.step_count.delta",
                        "dataSourceId": "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
                    }],
                "bucketByTime": { "durationMillis": 86400000 },
                "startTimeMillis": monday.getTime(),
                "endTimeMillis": sunday.getTime()
            };
            // Headers for Authorization
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
            headers = headers.set('Content-Type', 'application/json; charset=utf-8');
            headers = headers.set('Authorization', 'Bearer ' + credential['oauthAccessToken']);
            // POST request with HttpClient Object
            return this.http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => response));
            /*this.http.post<any>(url, body, { headers: headers }).subscribe(
              (response) => {
                // console.log(response.bucket);
                localStorage.setItem('dailyStepCount' ,this.dataProcessing.processStepData(response.bucket));
              }
            );*/
        }
        else {
            console.log('data-api.service | Credential is null');
        }
    }
    getWeekDailyCaloriesCount() {
        const credential = JSON.parse(localStorage.getItem('credential'));
        if (credential != null) {
            // console.log(credential);
            const url = 'https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate';
            // Obtain monday of this week at 00:00 of my timezone
            let monday = this.getMonday(new Date());
            monday.setHours(0, 0, 0, 0);
            // Obtain sunday of this week at 23:59 of my timezone
            let sunday = new Date(monday);
            sunday.setDate(sunday.getDate() + 6);
            sunday.setHours(23, 59, 59, 999);
            // Body of the POST request
            const body = {
                "aggregateBy": [{
                        "dataTypeName": "com.google.calories.expended",
                        "dataSourceId": "derived:com.google.calories.expended:com.google.android.gms:merge_calories_expended"
                    }],
                "bucketByTime": { "durationMillis": 86400000 },
                "startTimeMillis": monday.getTime(),
                "endTimeMillis": sunday.getTime()
            };
            // Headers for Authorization
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
            headers = headers.set('Content-Type', 'application/json; charset=utf-8');
            headers = headers.set('Authorization', 'Bearer ' + credential['oauthAccessToken']);
            // POST request with HttpClient Object
            return this.http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => response));
        }
        else {
            console.log('data-api.service | Credential is null');
        }
    }
    getMonday(d) {
        d = new Date(d);
        let day = d.getDay();
        let diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
        return new Date(d.setDate(diff));
    }
    postUserData(exercise, user) {
        const url = 'http://localhost:8080/user/save';
        // Request body
        let body = {
            "email": user.email,
            "displayName": user.displayName,
            "photoURL": user.photoURL,
            "role": user.role,
            "exercise": exercise,
            "userRewards": null
        };
        // Headers
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Accept', 'application/json');
        // POST request with HttpClient Object
        return this.http.post(url, JSON.stringify(body), { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => response));
    }
    deleteUser(user) {
        const url = 'http://localhost:8080/user/delete';
        // Request body
        let body = {
            "email": user.email,
            "displayName": user.displayName,
            "photoURL": user.photoURL,
            "role": user.role
        };
        // Headers
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Accept', 'application/json');
        // POST request with HttpClient Object
        return this.http.post(url, JSON.stringify(body), { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => response));
    }
    getAllUsers() {
        const url = 'http://localhost:8080/user/getAllUsers';
        // Headers
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers = headers.set('Accept', 'application/json');
        // POST request with HttpClient Object
        return this.http.get(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => response));
    }
    getUnachievedBadges(user) {
        const url = 'http://localhost:8080/reward/getUnachieved';
        // Request body
        let body = {
            "email": user.email,
            "displayName": user.displayName,
            "photoURL": user.photoURL,
            "role": user.role
        };
        // Headers
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Accept', 'application/json');
        // POST request with HttpClient Object
        return this.http.post(url, JSON.stringify(body), { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => response));
    }
}
DataApiService.ɵfac = function DataApiService_Factory(t) { return new (t || DataApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
DataApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DataApiService, factory: DataApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NavbarComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor() {
        this.isAdmin = false;
    }
    ngOnInit() {
        this.timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(0, 1000).subscribe(() => {
            if (localStorage.getItem('user') !== null) {
                this.user = JSON.parse(localStorage.getItem('user'));
                if (this.user.role === 'admin') {
                    this.isAdmin = true;
                }
                else {
                    this.isAdmin = false;
                }
                this.timerSubscription.unsubscribe();
            }
        });
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 8, vars: 1, consts: [["id", "navbar"], ["id", "profile-button", "routerLink", "/profile", "routerLinkActive", "selected"], [1, "bi", "bi-person-fill"], ["id", "home-button", "routerLink", "/dashboard", "routerLinkActive", "selected"], [1, "bi", "bi-house-fill"], ["id", "scoreboard-button", "routerLink", "/scoreboard", "routerLinkActive", "selected"], [1, "bi", "bi-table"], ["id", "admin-button", "routerLink", "/admin", "routerLinkActive", "selected", 4, "ngIf"], ["id", "admin-button", "routerLink", "/admin", "routerLinkActive", "selected"], [1, "bi", "bi-shield-shaded"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NavbarComponent_a_7_Template, 2, 0, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAdmin);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["#navbar[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  background-color: white;\r\n  bottom: 0;\r\n  display: flex;\r\n  height: 50px;\r\n  justify-content: space-around;\r\n  margin-top: 50px;\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: 10;\r\n}\r\n\r\n#navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  background-color: white;\r\n  border-radius: 100%;\r\n  color: black;\r\n  display: flex;\r\n  font-size: 2rem;\r\n  height: 4rem;\r\n  justify-content: center;\r\n  position: relative;\r\n  text-decoration: none;\r\n  top: -10px;\r\n  width: 4rem;\r\n}\r\n\r\n@media screen and (min-width: 1024px) {\r\n  #navbar[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    background-color: white;\r\n    bottom: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n    justify-content: space-around;\r\n    margin-top: unset;\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\n\r\n  #navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    background-color: white;\r\n    border-radius: unset;\r\n    color: black;\r\n    display: flex;\r\n    font-size: 2rem;\r\n    height: 100%;\r\n    justify-content: center;\r\n    position: unset;\r\n    text-decoration: none;\r\n    top: 0;\r\n    width: 100%;\r\n  }\r\n\r\n  #navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    align-items: center;\r\n    background-color: rgb(230, 230, 230);\r\n    border-radius: unset;\r\n    color: black;\r\n    display: flex;\r\n    font-size: 2rem;\r\n    height: 100%;\r\n    justify-content: center;\r\n    text-decoration: none;\r\n    top: 0;\r\n    width: 100%;\r\n  }\r\n\r\n  .selected[_ngcontent-%COMP%]{\r\n    border-left: 4px solid #1e87ff;\r\n    transition-property: border-left;\r\n    transition-duration: 0.06s;\r\n    transition-timing-function: ease-out;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsYUFBYTtFQUNiLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztJQUNULGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixNQUFNO0lBQ04sV0FBVztFQUNiOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsTUFBTTtJQUNOLFdBQVc7RUFDYjs7RUFFQTtJQUNFLDhCQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsMEJBQTBCO0lBQzFCLG9DQUFvQztFQUN0QztBQUNGIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdmJhciB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3R0b206IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbiNuYXZiYXIgYSB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBoZWlnaHQ6IDRyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0b3A6IC0xMHB4O1xyXG4gIHdpZHRoOiA0cmVtO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAjbmF2YmFyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBtYXJnaW4tdG9wOiB1bnNldDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgI25hdmJhciBhIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHVuc2V0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAjbmF2YmFyIGE6aG92ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuc2VsZWN0ZWR7XHJcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMxZTg3ZmY7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3JkZXItbGVmdDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDZzO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







class AuthService {
    constructor(afAuth, router, http) {
        this.afAuth = afAuth;
        this.router = router;
        this.http = http;
    }
    loginUser(userString) {
        let user = JSON.parse(userString);
        const url = 'http://localhost:8080/user/login';
        // Request body (user)
        let body = {
            "email": user.email,
            "displayName": user.displayName,
            "photoURL": user.photoURL,
            "role": "user",
            "exercise": null,
            "userRewards": null
        };
        // console.log("BODY: " + '\n' + JSON.stringify(body));
        // Headers
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Accept', 'application/json');
        // POST request with HttpClient Object
        return this.http.post(url, JSON.stringify(body), { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(response => response));
    }
    loginGoogle() {
        // Use client's device language
        firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth().useDeviceLanguage();
        // Creates the provider object.
        let provider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth.GoogleAuthProvider();
        // Additional scopes for the provider:
        provider.addScope('https://www.googleapis.com/auth/fitness.activity.read');
        provider.addScope('https://www.googleapis.com/auth/fitness.body.read');
        this.afAuth.signInWithPopup(provider).then((result) => {
            this.loginUser(JSON.stringify(result.user)).subscribe(user => {
                console.log(user);
                localStorage.setItem('user', JSON.stringify(user));
            });
            localStorage.setItem('googleUser', JSON.stringify(result.user));
            localStorage.setItem('credential', JSON.stringify(result.credential));
            this.router.navigate(['/dashboard']);
        }, (error) => {
            // The provider's account email, can be used in case of
            // auth/account-exists-with-different-credential to fetch the providers
            // linked to the email:
            let email = error.email;
            // The provider's credential:
            let credential = error.credential;
            // In case of auth/account-exists-with-different-credential error,
            // you can fetch the providers using this:
            if (error.code === 'auth/account-exists-with-different-credential') {
                this.afAuth.fetchSignInMethodsForEmail(email).then(function (providers) {
                    // The returned 'providers' is a list of the available providers
                    // linked to the email address. Please refer to the guide for a more
                    // complete explanation on how to recover from this error.
                });
            }
        });
    }
    logoutUser() {
        localStorage.clear();
        this.afAuth.signOut();
        this.router.navigate(['/login']);
    }
    isAuth() {
        /*
        return from(this.afAuth.currentUser).pipe(switchMap(user => {
          if(user !== null){
            return from(user.getIdTokenResult(true)).pipe(map(token => {
              return token;
            }));
          } else {
            this.logoutUser();
          }
        }));
        */
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(auth => auth));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "pYac":
/*!*****************************************************!*\
  !*** ./src/app/services/data-processing.service.ts ***!
  \*****************************************************/
/*! exports provided: DataProcessingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataProcessingService", function() { return DataProcessingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DataProcessingService {
    constructor() { }
    processData(dataBucket, dataType) {
        let processedData = {};
        let monday = null;
        let totalStepsWeek = 0;
        let totalCaloriesWeek = 0;
        for (let day of dataBucket) {
            let date = new Date();
            date.setTime(day.startTimeMillis);
            // console.log('Fecha completa: ' + date.toUTCString() + '\n' + 'Dia de la semana: ' + date.getDay());
            // console.log(day);
            if (date.getDay() === 1) {
                monday = date;
                if (day.dataset[0].point.length > 0) {
                    if (dataType === 'steps') {
                        processedData['monday'] = day.dataset[0].point[0].value[0].intVal;
                        totalStepsWeek += day.dataset[0].point[0].value[0].intVal;
                    }
                    else if (dataType === 'calories') {
                        processedData['monday'] = Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                        totalCaloriesWeek += Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                    }
                }
                else {
                    processedData['monday'] = 0;
                }
            }
            else if (monday !== null) {
                if (date > monday) {
                    switch (date.getDay()) {
                        case 2:
                            if (day.dataset[0].point.length > 0) {
                                if (dataType === 'steps') {
                                    processedData['tuesday'] = day.dataset[0].point[0].value[0].intVal;
                                    totalStepsWeek += day.dataset[0].point[0].value[0].intVal;
                                }
                                else if (dataType === 'calories') {
                                    processedData['tuesday'] = Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                                    totalCaloriesWeek += Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                                }
                            }
                            else {
                                processedData['tuesday'] = 0;
                            }
                            break;
                        case 3:
                            if (day.dataset[0].point.length > 0) {
                                if (dataType === 'steps') {
                                    processedData['wednesday'] = day.dataset[0].point[0].value[0].intVal;
                                    totalStepsWeek += day.dataset[0].point[0].value[0].intVal;
                                }
                                else if (dataType === 'calories') {
                                    processedData['wednesday'] = Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                                    totalCaloriesWeek += Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                                }
                            }
                            else {
                                processedData['wednesday'] = 0;
                            }
                            break;
                        case 4:
                            if (day.dataset[0].point.length > 0) {
                                if (dataType === 'steps') {
                                    processedData['thursday'] = day.dataset[0].point[0].value[0].intVal;
                                    totalStepsWeek += day.dataset[0].point[0].value[0].intVal;
                                }
                                else if (dataType === 'calories') {
                                    processedData['thursday'] = Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                                    totalCaloriesWeek += Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                                }
                            }
                            else {
                                processedData['thursday'] = 0;
                            }
                            break;
                        case 5:
                            if (day.dataset[0].point.length > 0) {
                                if (dataType === 'steps') {
                                    processedData['friday'] = day.dataset[0].point[0].value[0].intVal;
                                    totalStepsWeek += day.dataset[0].point[0].value[0].intVal;
                                }
                                else if (dataType === 'calories') {
                                    processedData['friday'] = Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                                    totalCaloriesWeek += Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                                }
                            }
                            else {
                                processedData['friday'] = 0;
                            }
                            break;
                        case 6:
                            if (day.dataset[0].point.length > 0) {
                                if (dataType === 'steps') {
                                    processedData['saturday'] = day.dataset[0].point[0].value[0].intVal;
                                    totalStepsWeek += day.dataset[0].point[0].value[0].intVal;
                                }
                                else if (dataType === 'calories') {
                                    processedData['saturday'] = Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                                    totalCaloriesWeek += Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                                }
                            }
                            else {
                                processedData['saturday'] = 0;
                            }
                            break;
                        case 0:
                            if (day.dataset[0].point.length > 0) {
                                if (dataType === 'steps') {
                                    processedData['sunday'] = day.dataset[0].point[0].value[0].intVal;
                                    totalStepsWeek += day.dataset[0].point[0].value[0].intVal;
                                }
                                else if (dataType === 'calories') {
                                    processedData['sunday'] = Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                                    totalCaloriesWeek += Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                                }
                            }
                            else {
                                processedData['sunday'] = 0;
                            }
                            break;
                    }
                }
            }
        }
        return processedData;
    }
    getTotalData(dataBucket, dataType) {
        let monday = null;
        let totalValData = 0;
        for (let day of dataBucket) {
            let date = new Date();
            date.setTime(day.startTimeMillis);
            // console.log('Fecha completa: ' + date.toUTCString() + '\n' + 'Dia de la semana: ' + date.getDay());
            // console.log(day);
            if (date.getDay() === 1) {
                monday = date;
                if (day.dataset[0].point.length > 0) {
                    if (dataType === 'steps') {
                        totalValData += day.dataset[0].point[0].value[0].intVal;
                    }
                    else if (dataType === 'calories') {
                        totalValData += Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                    }
                }
            }
            else if (monday !== null) {
                if (date > monday) {
                    switch (date.getDay()) {
                        case 2:
                            if (day.dataset[0].point.length > 0) {
                                if (dataType === 'steps') {
                                    totalValData += day.dataset[0].point[0].value[0].intVal;
                                }
                                else if (dataType === 'calories') {
                                    totalValData += Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                                }
                            }
                            break;
                        case 3:
                            if (day.dataset[0].point.length > 0) {
                                if (dataType === 'steps') {
                                    totalValData += day.dataset[0].point[0].value[0].intVal;
                                }
                                else if (dataType === 'calories') {
                                    totalValData += Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                                }
                            }
                            break;
                        case 4:
                            if (day.dataset[0].point.length > 0) {
                                if (dataType === 'steps') {
                                    totalValData += day.dataset[0].point[0].value[0].intVal;
                                }
                                else if (dataType === 'calories') {
                                    totalValData += Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                                }
                            }
                            break;
                        case 5:
                            if (day.dataset[0].point.length > 0) {
                                if (dataType === 'steps') {
                                    totalValData += day.dataset[0].point[0].value[0].intVal;
                                }
                                else if (dataType === 'calories') {
                                    totalValData += Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                                }
                            }
                            break;
                        case 6:
                            if (day.dataset[0].point.length > 0) {
                                if (dataType === 'steps') {
                                    totalValData += day.dataset[0].point[0].value[0].intVal;
                                }
                                else if (dataType === 'calories') {
                                    totalValData += Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                                }
                            }
                            break;
                        case 0:
                            if (day.dataset[0].point.length > 0) {
                                if (dataType === 'steps') {
                                    totalValData += day.dataset[0].point[0].value[0].intVal;
                                }
                                else if (dataType === 'calories') {
                                    totalValData += Math.trunc(day.dataset[0].point[0].value[0].fpVal);
                                }
                            }
                            break;
                    }
                }
            }
        }
        return totalValData;
    }
}
DataProcessingService.ɵfac = function DataProcessingService_Factory(t) { return new (t || DataProcessingService)(); };
DataProcessingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataProcessingService, factory: DataProcessingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/admin.guard */ "Tk1w");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");
/* harmony import */ var _guards_login_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/login.guard */ "+XmF");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page404/page404.component */ "Zawe");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scoreboard/scoreboard.component */ "LV43");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_5__["LoginGuard"]] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'scoreboard', component: _scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_9__["ScoreboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_1__["AdminComponent"], canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]] },
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: '**', component: _page404_page404_component__WEBPACK_IMPORTED_MODULE_7__["Page404Component"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class LoginComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
    login() {
        this.authService.loginGoogle();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 21, vars: 0, consts: [[1, "wrapper"], [1, "container"], [1, "titles"], [1, "form"], [1, "btn-social", "btn-google", 3, "click"], [1, "bi", "bi-google"], [1, "bg-bubbles"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Log in with");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_7_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: ["*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-weight: 300;\r\n}\r\n\r\n.titles[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-weight: 300;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n  background: #50a3a2;\r\n  background: linear-gradient(to bottom right, #08b6b6 0%, #d5ffa5 100%);\r\n  position: absolute;\r\n  top: 45%;\r\n  width: 100%;\r\n  height: 500px;\r\n  margin-left: -5rem;\r\n  margin-top: -200px;\r\n  overflow: hidden;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  max-width: 600px;\r\n  margin: 0 auto;\r\n  padding: 80px 0;\r\n  position: absolute;\r\n  top: 10%;\r\n  left: 35%;\r\n  height: 400px;\r\n  text-align: center;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 40px;\r\n  font-weight: 200;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n  padding: 20px 0;\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n\r\n.btn-social[_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-radius: 20px;\r\n  display: inline-flex;\r\n  justify-self: center;\r\n  justify-content: center;\r\n  margin-top: 10px;\r\n  padding: 10px 25px;\r\n  text-decoration: none;\r\n  transition-duration: 0.25s;\r\n  width: 120px;\r\n}\r\n\r\n.btn-social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: white;\r\n  margin-right: 5px;\r\n}\r\n\r\n.btn-social[_ngcontent-%COMP%]:hover {\r\n  background-color: #dd4c39c9;\r\n  width: 135px;\r\n}\r\n\r\n.btn-google[_ngcontent-%COMP%] {\r\n  background-color: #dd4b39;\r\n  color: white;\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%] {\r\n  border-radius: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  list-style: none;\r\n  display: block;\r\n  width: 40px;\r\n  height: 40px;\r\n  background-color: rgba(255, 255, 255, 0.15);\r\n  bottom: -160px;\r\n  border-radius: 100%;\r\n  animation: bubble 25s infinite;\r\n  transition-timing-function: linear;\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\r\n  left: 10%;\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\r\n  left: 20%;\r\n  width: 80px;\r\n  height: 80px;\r\n  animation-delay: 2s;\r\n  animation-duration: 17s;\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\r\n  left: 25%;\r\n  animation-delay: 4s;\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4) {\r\n  left: 40%;\r\n  width: 60px;\r\n  height: 60px;\r\n  animation-duration: 22s;\r\n  background-color: rgba(255, 255, 255, 0.25);\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5) {\r\n  left: 70%;\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6) {\r\n  left: 80%;\r\n  width: 120px;\r\n  height: 120px;\r\n  animation-delay: 3s;\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(7) {\r\n  left: 32%;\r\n  width: 160px;\r\n  height: 160px;\r\n  animation-delay: 7s;\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(8) {\r\n  left: 55%;\r\n  width: 20px;\r\n  height: 20px;\r\n  animation-delay: 15s;\r\n  animation-duration: 40s;\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(9) {\r\n  left: 25%;\r\n  width: 10px;\r\n  height: 10px;\r\n  animation-delay: 2s;\r\n  animation-duration: 40s;\r\n  background-color: rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(10) {\r\n  left: 90%;\r\n  width: 160px;\r\n  height: 160px;\r\n  animation-delay: 11s;\r\n}\r\n\r\n@keyframes bubble {\r\n  0% {\r\n    transform: translateY(0);\r\n  }\r\n\r\n  100% {\r\n    transform: translateY(-800px) rotate(600deg);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\r\n  .wrapper[_ngcontent-%COMP%] {\r\n    background: #50a3a2;\r\n    background: linear-gradient(to bottom right, #08b6b6 0%, #d5ffa5 100%);\r\n    position: absolute;\r\n    top: 43%;\r\n    width: 100%;\r\n    height: 500px;\r\n    margin-left: 0;\r\n    margin-top: -200px;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .container[_ngcontent-%COMP%] {\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n    padding: 80px 0;\r\n    position: absolute;\r\n    top: 10%;\r\n    left: 0;\r\n    height: 400px;\r\n    text-align: center;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNFQUFzRTtFQUN0RSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWiwyQ0FBMkM7RUFDM0MsY0FBYztFQUNkLG1CQUFtQjtFQUVuQiw4QkFBOEI7RUFDOUIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBRVosbUJBQW1CO0VBRW5CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFNBQVM7RUFFVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFFWix1QkFBdUI7RUFDdkIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBRWIsbUJBQW1CO0VBQ25CLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtFQUViLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUVaLG9CQUFvQjtFQUVwQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFFWixtQkFBbUI7RUFFbkIsdUJBQXVCO0VBQ3ZCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtFQUViLG9CQUFvQjtBQUN0Qjs7QUFZQTtFQUNFO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsNENBQTRDO0VBQzlDO0FBQ0Y7O0FBRUE7O0VBRUU7SUFDRSxtQkFBbUI7SUFDbkIsc0VBQXNFO0lBQ3RFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsT0FBTztJQUNQLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7O0FBRUYiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLnRpdGxlcyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNTBhM2EyO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMwOGI2YjYgMCUsICNkNWZmYTUgMTAwJSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDUlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC01cmVtO1xyXG4gIG1hcmdpbi10b3A6IC0yMDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDgwcHggMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMCU7XHJcbiAgbGVmdDogMzUlO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyIGgxIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uYnRuLXNvY2lhbCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4IDI1cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xyXG4gIHdpZHRoOiAxMjBweDtcclxufVxyXG5cclxuLmJ0bi1zb2NpYWwgaSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uYnRuLXNvY2lhbDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGMzOWM5O1xyXG4gIHdpZHRoOiAxMzVweDtcclxufVxyXG5cclxuLmJ0bi1nb29nbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZDRiMzk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmctYnViYmxlcyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5iZy1idWJibGVzIGxpIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcclxuICBib3R0b206IC0xNjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBidWJibGUgMjVzIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjogYnViYmxlIDI1cyBpbmZpbml0ZTtcclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG59XHJcblxyXG4uYmctYnViYmxlcyBsaTpudGgtY2hpbGQoMSkge1xyXG4gIGxlZnQ6IDEwJTtcclxufVxyXG5cclxuLmJnLWJ1YmJsZXMgbGk6bnRoLWNoaWxkKDIpIHtcclxuICBsZWZ0OiAyMCU7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAycztcclxuICBhbmltYXRpb24tZGVsYXk6IDJzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxN3M7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxN3M7XHJcbn1cclxuXHJcbi5iZy1idWJibGVzIGxpOm50aC1jaGlsZCgzKSB7XHJcbiAgbGVmdDogMjUlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA0cztcclxuICBhbmltYXRpb24tZGVsYXk6IDRzO1xyXG59XHJcblxyXG4uYmctYnViYmxlcyBsaTpudGgtY2hpbGQoNCkge1xyXG4gIGxlZnQ6IDQwJTtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDIycztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDIycztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xyXG59XHJcblxyXG4uYmctYnViYmxlcyBsaTpudGgtY2hpbGQoNSkge1xyXG4gIGxlZnQ6IDcwJTtcclxufVxyXG5cclxuLmJnLWJ1YmJsZXMgbGk6bnRoLWNoaWxkKDYpIHtcclxuICBsZWZ0OiA4MCU7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDNzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogM3M7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG59XHJcblxyXG4uYmctYnViYmxlcyBsaTpudGgtY2hpbGQoNykge1xyXG4gIGxlZnQ6IDMyJTtcclxuICB3aWR0aDogMTYwcHg7XHJcbiAgaGVpZ2h0OiAxNjBweDtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogN3M7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiA3cztcclxufVxyXG5cclxuLmJnLWJ1YmJsZXMgbGk6bnRoLWNoaWxkKDgpIHtcclxuICBsZWZ0OiA1NSU7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxNXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxNXM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDQwcztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDQwcztcclxufVxyXG5cclxuLmJnLWJ1YmJsZXMgbGk6bnRoLWNoaWxkKDkpIHtcclxuICBsZWZ0OiAyNSU7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAycztcclxuICBhbmltYXRpb24tZGVsYXk6IDJzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA0MHM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0MHM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG59XHJcblxyXG4uYmctYnViYmxlcyBsaTpudGgtY2hpbGQoMTApIHtcclxuICBsZWZ0OiA5MCU7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG4gIGhlaWdodDogMTYwcHg7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDExcztcclxuICBhbmltYXRpb24tZGVsYXk6IDExcztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJ1YmJsZSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTgwMHB4KSByb3RhdGUoNjAwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYnViYmxlIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtODAwcHgpIHJvdGF0ZSg2MDBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuXHJcbiAgLndyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzUwYTNhMjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMwOGI2YjYgMCUsICNkNWZmYTUgMTAwJSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQzJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXRvcDogLTIwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogODBweCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map