(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-chartist */ "Cr32");






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
    constructor(dataApi, dataProcessing) {
        this.dataApi = dataApi;
        this.dataProcessing = dataProcessing;
        this.dataType = 'steps';
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
        // Every minute data will be updated
        this.timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(0, 60000).subscribe(() => this.checkValuesPerDay());
        console.log(this.valuesPerDay + '\n' + 'inchart: ' + this.chart.data.series);
    }
    updateChartHeight() {
        let mediaQuery = window.matchMedia("(min-width: 1024px)");
        if (mediaQuery.matches) { // If media query matches
            this.chartHeight = 500;
        }
        else {
            this.chartHeight = 250;
        }
    }
    checkValuesPerDay() {
        if (this.dataType === 'steps') {
            this.dataApi.getWeekDailyStepCount().subscribe(data => {
                let dailyStepCount = this.dataProcessing.processStepData(data.bucket);
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
                    console.log(this.valuesPerDay);
                    this.chart.data.series = [this.valuesPerDay];
                    this.loaded = true;
                }
                else {
                    console.log('No se han podido cargar los datos');
                }
            });
        }
        else {
            console.log('Other types not implemented yet');
            this.valuesPerDay = [];
            this.valuesPerDay.push(1200);
            this.valuesPerDay.push(1700);
            this.chart.data.series = [this.valuesPerDay];
            this.loaded = true;
        }
    }
    ngOnDestroy() {
        this.timerSubscription.unsubscribe();
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_api_service__WEBPACK_IMPORTED_MODULE_2__["DataApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_processing_service__WEBPACK_IMPORTED_MODULE_3__["DataProcessingService"])); };
ChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChartComponent, selectors: [["app-chart"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["elseBlock", ""], [3, "type", "data", "options", "events"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ChartComponent_div_0_Template, 2, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChartComponent_ng_template_1_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loaded)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_chartist__WEBPACK_IMPORTED_MODULE_5__["ChartistComponent"]], styles: [".spinner-border[_ngcontent-%COMP%]{\r\n    color: rgb(62, 233, 255);\r\n    margin: 20px 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImNoYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lci1ib3JkZXJ7XHJcbiAgICBjb2xvcjogcmdiKDYyLCAyMzMsIDI1NSk7XHJcbiAgICBtYXJnaW46IDIwcHggMjBweDtcclxufSJdfQ== */"] });


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

class ScoreboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
ScoreboardComponent.ɵfac = function ScoreboardComponent_Factory(t) { return new (t || ScoreboardComponent)(); };
ScoreboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScoreboardComponent, selectors: [["app-scoreboard"]], decls: 2, vars: 0, template: function ScoreboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "scoreboard not implemented yet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY29yZWJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chart/chart.component */ "Bho8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function DashboardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.selectButtonSteps(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "TOTAL STEPS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_div_3_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.selectButtonCalories(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "TOTAL CALORIES");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.totalSteps);
} }
function DashboardComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Steps overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DashboardComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "The calories chart is not implemented yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class DashboardComponent {
    constructor(chart) {
        this.chart = chart;
        this.totalSteps = null;
        this.stepsSelected = true;
        this.selectorButtonsLoaded = false;
    }
    ngOnInit() {
        this.timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(0, 2000).subscribe(() => {
            if (localStorage.getItem('totalStepsWeek') !== null) {
                this.totalSteps = parseInt(localStorage.getItem('totalStepsWeek'));
                this.selectorButtonsLoaded = true;
                this.timerSubscription.unsubscribe();
            }
        });
    }
    selectButtonSteps() {
        this.stepsSelected = true;
        let buttonSteps = document.getElementById('button-steps');
        let buttonCalories = document.getElementById('button-calories');
        buttonSteps.className = 'button-selected';
        buttonCalories.className = 'button';
        let totalStepsTag = document.getElementById('totalSteps');
        let totalCaloriesTag = document.getElementById('totalCalories');
        totalStepsTag.className = 'totalDataVal-selected';
        totalCaloriesTag.className = 'totalDataVal';
        // chart modification
        this.chart.dataType = 'steps';
        //this.chart.checkValuesPerDay();
    }
    selectButtonCalories() {
        this.stepsSelected = false;
        let buttonSteps = document.getElementById('button-steps');
        let buttonCalories = document.getElementById('button-calories');
        buttonSteps.className = 'button';
        buttonCalories.className = 'button-selected';
        let totalStepsTag = document.getElementById('totalSteps');
        let totalCaloriesTag = document.getElementById('totalCalories');
        totalStepsTag.className = 'totalDataVal';
        totalCaloriesTag.className = 'totalDataVal-selected';
        // chart modification
        this.chart.dataType = 'calories';
        //this.chart.checkValuesPerDay();
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_chart_chart_component__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 13, vars: 3, consts: [[1, "contain"], ["id", "buttons-container", 4, "ngIf"], [1, "bubble"], ["name", "select", "id", "select", 1, "form-select"], ["value", "weekly", "selected", ""], ["value", "daily"], ["class", "chart", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["id", "buttons-container"], ["id", "button-steps", 1, "button-selected", 3, "click"], ["id", "totalSteps", 1, "totalDataVal-selected"], ["id", "button-calories", 1, "button", 3, "click"], ["id", "totalCalories", 1, "totalDataVal"], [1, "chart"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "DASHBOARD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DashboardComponent_div_3_Template, 8, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "WEEKLY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "DAILY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DashboardComponent_div_10_Template, 4, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DashboardComponent_ng_template_11_Template, 4, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectorButtonsLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.stepsSelected)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _chart_chart_component__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"]], styles: [".contain[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  overflow: hidden;\r\n  width: 100%;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  text-align: center;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  margin: 10px;\r\n}\r\n\r\n#buttons-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 130px;\r\n  justify-content: space-evenly;\r\n  left: 0;\r\n  position: absolute;\r\n  width: 55%;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  border: none;\r\n  border-radius: 5px;\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n  font-size: 0.6rem;\r\n  height: 50px;\r\n  padding: 5px;\r\n  padding-left: 10px;\r\n  text-align: start;\r\n  transition-property: width, height, font-size;\r\n  transition-duration: 0.2s;\r\n  transition-timing-function: ease-in;\r\n  left: 0;\r\n  position: relative;\r\n  width: 60%;\r\n}\r\n\r\n.totalDataVal[_ngcontent-%COMP%]{\r\n  font-size: 1rem;\r\n  margin: 0;\r\n  transition-property: font-size;\r\n  transition-duration: 0.2s;\r\n  transition-timing-function: ease-in;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(230, 230, 230);\r\n}\r\n\r\n.button-selected[_ngcontent-%COMP%] {\r\n  background-color: rgb(62, 233, 255);\r\n  border: none;\r\n  border-radius: 5px;\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n  font-size: 0.8rem;\r\n  height: 60px;\r\n  padding: 5px;\r\n  padding-left: 10px;\r\n  text-align: start;\r\n  transition-property: width, height, font-size;\r\n  transition-duration: 0.2s;\r\n  transition-timing-function: ease-in;\r\n  left: 0;\r\n  position: relative;\r\n  width: 80%;\r\n}\r\n\r\n.totalDataVal-selected[_ngcontent-%COMP%]{\r\n  font-size: 1.5rem;\r\n  margin: 0;\r\n  transition-property: font-size;\r\n  transition-duration: 0.2s;\r\n  transition-timing-function: ease-in;\r\n}\r\n\r\n.bubble[_ngcontent-%COMP%] {\r\n  background-color: rgb(62, 233, 255);\r\n  border-radius: 100%;\r\n  display: block;\r\n  height: 120px;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 30px;\r\n  width: 120px;\r\n  z-index: 0;\r\n}\r\n\r\n.bubble[_ngcontent-%COMP%]   #select[_ngcontent-%COMP%] {\r\n  border: none;\r\n  left: -30px;\r\n  padding: 5px;\r\n  position: relative;\r\n  top: 40%;\r\n}\r\n\r\n.chart[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  border-radius: 5px;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n  margin-top: 10rem;\r\n  padding: 5px;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n@media screen and (min-width: 480px) {\r\n  .button[_ngcontent-%COMP%] {\r\n    font-size: 0.6rem;\r\n    width: 40%;\r\n  }\r\n\r\n  .totalDataVal[_ngcontent-%COMP%]{\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .button-selected[_ngcontent-%COMP%] {\r\n    font-size: 0.9rem;\r\n    width: 60%;\r\n  }\r\n\r\n  .totalDataVal-selected[_ngcontent-%COMP%]{\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .bubble[_ngcontent-%COMP%] {\r\n    height: 150px;\r\n    right: 10px;\r\n    width: 150px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1024px) {\r\n  .contain[_ngcontent-%COMP%] {\r\n    padding: 0 20px;\r\n  }\r\n\r\n  h1[_ngcontent-%COMP%] {\r\n    text-align: start;\r\n  }\r\n\r\n  #buttons-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    height: 80px;\r\n    justify-content: space-evenly;\r\n    left: unset;\r\n    right: 18rem;\r\n    top: 0;\r\n    position: absolute;\r\n    width: 30rem;\r\n  }\r\n\r\n  .button[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    border: none;\r\n    border-radius: 5px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    font-size: 0.7rem;\r\n    height: 70%;\r\n    left: unset;\r\n    top: 0;\r\n    position: relative;\r\n    width: 40%;\r\n  }\r\n\r\n  .totalDataVal[_ngcontent-%COMP%]{\r\n    font-size: 1rem;\r\n    margin: 0;\r\n  }\r\n\r\n  .button-selected[_ngcontent-%COMP%] {\r\n    background-color: rgb(62, 233, 255);\r\n    border: none;\r\n    border-radius: 5px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    font-size: 1rem;\r\n    height: 100%;\r\n    left: unset;\r\n    top: 0;\r\n    position: relative;\r\n    width: 40%;\r\n  }\r\n\r\n  .totalDataVal-selected[_ngcontent-%COMP%]{\r\n    font-size: 1.6rem;\r\n    margin: 0;\r\n  }\r\n\r\n  .bubble[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n    padding: 20px;\r\n    position: absolute;\r\n    right: 20px;\r\n    top: 0;\r\n    width: 200px\r\n  }\r\n\r\n  .bubble[_ngcontent-%COMP%]   #select[_ngcontent-%COMP%] {\r\n    border: none;\r\n    left: -60px;\r\n    padding: 10px;\r\n    position: relative;\r\n    top: 40%;\r\n    transition-property: all;\r\n    transition-duration: 0.2s;\r\n    transition-timing-function: ease-in;\r\n  }\r\n\r\n  .bubble[_ngcontent-%COMP%]   #select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\r\n    transition-property: all;\r\n    transition-duration: 0.2s;\r\n    transition-timing-function: ease-in;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDZDQUE2QztFQUM3Qyx5QkFBeUI7RUFDekIsbUNBQW1DO0VBQ25DLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiw2Q0FBNkM7RUFDN0MseUJBQXlCO0VBQ3pCLG1DQUFtQztFQUNuQyxPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFlBQVk7SUFDWixNQUFNO0lBQ04sa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsTUFBTTtJQUNOLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsU0FBUztFQUNYOztFQUVBO0lBQ0UsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxNQUFNO0lBQ04sa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsTUFBTTtJQUNOO0VBQ0Y7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsbUNBQW1DO0VBQ3JDOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixtQ0FBbUM7RUFDckM7QUFDRiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaDEge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oMntcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbiNidXR0b25zLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTMwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgbGVmdDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDU1JTtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGgsIGhlaWdodCwgZm9udC1zaXplO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgbGVmdDogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLnRvdGFsRGF0YVZhbHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGZvbnQtc2l6ZTtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XHJcbn1cclxuXHJcbi5idXR0b24tc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMjMzLCAyNTUpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHdpZHRoLCBoZWlnaHQsIGZvbnQtc2l6ZTtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi50b3RhbERhdGFWYWwtc2VsZWN0ZWR7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGZvbnQtc2l6ZTtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG59XHJcblxyXG4uYnViYmxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjIsIDIzMywgMjU1KTtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMzBweDtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5cclxuLmJ1YmJsZSAjc2VsZWN0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbGVmdDogLTMwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDQwJTtcclxufVxyXG5cclxuLmNoYXJ0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcmVtO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcclxuICAuYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcblxyXG4gIC50b3RhbERhdGFWYWx7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcblxyXG4gIC5idXR0b24tc2VsZWN0ZWQge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gIH1cclxuXHJcbiAgLnRvdGFsRGF0YVZhbC1zZWxlY3RlZHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmJ1YmJsZSB7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAuY29udGFpbiB7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgfVxyXG5cclxuICBoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICB9XHJcblxyXG4gICNidXR0b25zLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgbGVmdDogdW5zZXQ7XHJcbiAgICByaWdodDogMThyZW07XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMzByZW07XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIGxlZnQ6IHVuc2V0O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcblxyXG4gIC50b3RhbERhdGFWYWx7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uLXNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMjMzLCAyNTUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogdW5zZXQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxuXHJcbiAgLnRvdGFsRGF0YVZhbC1zZWxlY3RlZHtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLmJ1YmJsZSB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDIwMHB4XHJcbiAgfVxyXG5cclxuICAuYnViYmxlICNzZWxlY3Qge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbGVmdDogLTYwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG5cclxuICAuYnViYmxlICNzZWxlY3Qgb3B0aW9uIHtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICB9XHJcbn1cclxuIl19 */"] });


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
                this.router.navigate(['dashboard']);
            }
            else {
                console.log("user not logged");
                this.router.navigate(['login']);
                this.isLogged = false;
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


class ProfileComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
    logout() {
        this.authService.logoutUser();
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 10, vars: 0, consts: [[1, "banner"], ["id", "profile-picture", "src", "../../assets/logo GFit.PNG", "alt", "Profile picture"], ["id", "username"], ["id", "edit-profile", 1, "btn", "btn-primary"], ["id", "logout", 3, "click"], [1, "bi", "bi-box-arrow-right"], [1, "badges"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_5_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Badges");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".banner[_ngcontent-%COMP%]{\r\n    align-items: center;\r\n    background: linear-gradient(to bottom, #012031 0%, #034b75 40%, #fc94ae 95%);\r\n    border-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: hidden;\r\n    margin: 50px auto;\r\n    width: 90%;\r\n}\r\n\r\n#profile-picture[_ngcontent-%COMP%]{\r\n    border-radius: 100%;\r\n    margin-top: 100px;\r\n    width: 10rem;\r\n}\r\n\r\n#logout[_ngcontent-%COMP%]{\r\n    background-color: rgb(62, 233, 255);\r\n    border: none;\r\n    border-radius: 100%;\r\n    font-size: 1.3rem;\r\n    height: 4rem;\r\n    padding-right: 2px;\r\n    position: absolute;\r\n    right: 20%;\r\n    text-align: center;\r\n    top: 20%;\r\n    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.575);\r\n    width: 4rem;\r\n}\r\n\r\n#logout[_ngcontent-%COMP%]:hover{\r\n    background-color: rgb(51, 188, 206);\r\n    font-size: 1.6rem;\r\n    height: 5rem;\r\n    transition-property: all;\r\n    transition-duration: 0.15s;\r\n    transition-timing-function: ease-in;\r\n    text-align: center;\r\n    width: 5rem;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]{\r\n    margin: 20px 0;\r\n}\r\n\r\n.badges[_ngcontent-%COMP%] {\r\n    background-color: rgb(255, 255, 255);\r\n    border-radius: 5px;\r\n    height: 300px;\r\n    margin: 0 auto;\r\n    width: 90%\r\n}\r\n\r\n.badges[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    padding: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQiw0RUFBNEU7SUFDNUUsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUiw0REFBNEQ7SUFDNUQsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixjQUFjO0lBQ2Q7QUFDSjs7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lcntcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDEyMDMxIDAlLCAjMDM0Yjc1IDQwJSwgI2ZjOTRhZSA5NSUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuI3Byb2ZpbGUtcGljdHVyZXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHdpZHRoOiAxMHJlbTtcclxufVxyXG5cclxuI2xvZ291dHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMjMzLCAyNTUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRvcDogMjAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS41NzUpO1xyXG4gICAgd2lkdGg6IDRyZW07XHJcbn1cclxuXHJcbiNsb2dvdXQ6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDE4OCwgMjA2KTtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuXHJcbi5iYWRnZXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDkwJVxyXG59XHJcbi5iYWRnZXMgaDJ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn0iXX0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");

















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [_chart_chart_component__WEBPACK_IMPORTED_MODULE_12__["ChartComponent"]], imports: [[
            _angular_fire__WEBPACK_IMPORTED_MODULE_0__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].fireBaseConfig),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ng_chartist__WEBPACK_IMPORTED_MODULE_5__["ChartistModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
        _page404_page404_component__WEBPACK_IMPORTED_MODULE_10__["Page404Component"],
        _chart_chart_component__WEBPACK_IMPORTED_MODULE_12__["ChartComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
        _scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_14__["ScoreboardComponent"]], imports: [_angular_fire__WEBPACK_IMPORTED_MODULE_0__["AngularFireModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
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
    ngOnInit() {
    }
}
Page404Component.ɵfac = function Page404Component_Factory(t) { return new (t || Page404Component)(); };
Page404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page404Component, selectors: [["app-page404"]], decls: 4, vars: 0, template: function Page404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Error 404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlNDA0LmNvbXBvbmVudC5jc3MifQ== */"] });


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
/* harmony import */ var _data_processing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-processing.service */ "pYac");





// Unused imports
// import { Observable, throwError } from 'rxjs';
class DataApiService {
    constructor(http, dataProcessing) {
        this.http = http;
        this.dataProcessing = dataProcessing;
    }
    getWeekDailyStepCount() {
        const credential = JSON.parse(localStorage.getItem('credential'));
        // console.log('credential: ' + JSON.stringify(credential));
        // console.log('token: ' + JSON.stringify(credential['oauthAccessToken']));
        if (credential != null) {
            const url = 'https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate';
            // Obtain monday of this week at 00:00 of my timezone
            let monday = this.getMonday(new Date());
            monday.setHours(0, 0, 0, 0);
            // Obtain sunday of this week at 23:59 of my timezone
            let sunday = new Date();
            sunday.setDate(monday.getDate() + 6);
            sunday.setHours(23, 59, 59, 999);
            // console.log('monday: ' + monday.getTime());
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
            // console.log('Authorization: ' + headers.get('Authorization'));
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
            console.log('La credencial es nula');
        }
    }
    getMonday(d) {
        d = new Date(d);
        let day = d.getDay();
        let diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
        return new Date(d.setDate(diff));
    }
}
DataApiService.ɵfac = function DataApiService_Factory(t) { return new (t || DataApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_data_processing_service__WEBPACK_IMPORTED_MODULE_3__["DataProcessingService"])); };
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class NavbarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 7, vars: 0, consts: [["id", "navbar"], ["id", "profile-button", "routerLink", "/profile", "routerLinkActive", "selected"], [1, "bi", "bi-person-fill"], ["id", "home-button", "routerLink", "/dashboard", "routerLinkActive", "selected"], [1, "bi", "bi-house-fill"], ["id", "scoreboard-button", "routerLink", "/scoreboard", "routerLinkActive", "selected"], [1, "bi", "bi-table"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["#navbar[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  background-color: white;\r\n  bottom: 0;\r\n  display: flex;\r\n  height: 50px;\r\n  justify-content: space-around;\r\n  margin-top: 50px;\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: 10;\r\n}\r\n\r\n#navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  background-color: white;\r\n  border-radius: 100%;\r\n  color: black;\r\n  display: flex;\r\n  font-size: 2rem;\r\n  height: 4rem;\r\n  justify-content: center;\r\n  position: relative;\r\n  text-decoration: none;\r\n  top: -10px;\r\n  width: 4rem;\r\n}\r\n\r\n@media screen and (min-width: 1024px) {\r\n  #navbar[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    background-color: white;\r\n    bottom: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n    justify-content: space-around;\r\n    margin-top: unset;\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\n\r\n  #navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    background-color: white;\r\n    border-radius: unset;\r\n    color: black;\r\n    display: flex;\r\n    font-size: 2rem;\r\n    height: 100%;\r\n    justify-content: center;\r\n    position: unset;\r\n    text-decoration: none;\r\n    top: 0;\r\n    width: 100%;\r\n  }\r\n\r\n  #navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    align-items: center;\r\n    background-color: rgb(230, 230, 230);\r\n    border-radius: unset;\r\n    color: black;\r\n    display: flex;\r\n    font-size: 2rem;\r\n    height: 100%;\r\n    justify-content: center;\r\n    text-decoration: none;\r\n    top: 0;\r\n    width: 100%;\r\n  }\r\n\r\n  .selected[_ngcontent-%COMP%]{\r\n    border-left: 3px solid #1e87ff;\r\n    transition-property: border-left;\r\n    transition-duration: 0.06s;\r\n    transition-timing-function: ease-out;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsYUFBYTtFQUNiLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztJQUNULGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixNQUFNO0lBQ04sV0FBVztFQUNiOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsTUFBTTtJQUNOLFdBQVc7RUFDYjs7RUFFQTtJQUNFLDhCQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsMEJBQTBCO0lBQzFCLG9DQUFvQztFQUN0QztBQUNGIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdmJhciB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3R0b206IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbiNuYXZiYXIgYSB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBoZWlnaHQ6IDRyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0b3A6IC0xMHB4O1xyXG4gIHdpZHRoOiA0cmVtO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAjbmF2YmFyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBtYXJnaW4tdG9wOiB1bnNldDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgI25hdmJhciBhIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHVuc2V0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAjbmF2YmFyIGE6aG92ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuc2VsZWN0ZWR7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMxZTg3ZmY7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3JkZXItbGVmdDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDZzO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");




class AuthService {
    constructor(afAuth) {
        this.afAuth = afAuth;
    }
    registerUser() { }
    loginGoogle() {
        // Use client's device language
        firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth().useDeviceLanguage();
        // Creates the provider object.
        let provider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth.GoogleAuthProvider();
        // Additional scopes for the provider:
        provider.addScope('https://www.googleapis.com/auth/fitness.activity.read');
        provider.addScope('https://www.googleapis.com/auth/fitness.body.read');
        this.afAuth.signInWithPopup(provider).then((result) => {
            localStorage.setItem('user', JSON.stringify(result.user));
            localStorage.setItem('credential', JSON.stringify(result.credential));
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
        return this.afAuth.signOut();
    }
    isAuth() {
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(auth => auth));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


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
    processStepData(dataBucket) {
        let processedData = {};
        let monday = null;
        let totalStepsWeek = 0;
        for (let day of dataBucket) {
            let date = new Date();
            date.setTime(day.startTimeMillis);
            // console.log('Fecha completa: ' + date.toUTCString() + '\n' + 'Dia de la semana: ' + date.getDay());
            // console.log(day);
            if (date.getDay() === 1) {
                monday = date;
                if (day.dataset[0].point.length > 0) {
                    processedData['monday'] = day.dataset[0].point[0].value[0].intVal;
                    totalStepsWeek += day.dataset[0].point[0].value[0].intVal;
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
                                processedData['tuesday'] = day.dataset[0].point[0].value[0].intVal;
                                totalStepsWeek += day.dataset[0].point[0].value[0].intVal;
                            }
                            else {
                                processedData['tuesday'] = 0;
                            }
                            break;
                        case 3:
                            if (day.dataset[0].point.length > 0) {
                                processedData['wednesday'] = day.dataset[0].point[0].value[0].intVal;
                                totalStepsWeek += day.dataset[0].point[0].value[0].intVal;
                            }
                            else {
                                processedData['wednesday'] = 0;
                            }
                            break;
                        case 4:
                            if (day.dataset[0].point.length > 0) {
                                processedData['thursday'] = day.dataset[0].point[0].value[0].intVal;
                                totalStepsWeek += day.dataset[0].point[0].value[0].intVal;
                            }
                            else {
                                processedData['thursday'] = 0;
                            }
                            break;
                        case 5:
                            if (day.dataset[0].point.length > 0) {
                                processedData['friday'] = day.dataset[0].point[0].value[0].intVal;
                                totalStepsWeek += day.dataset[0].point[0].value[0].intVal;
                            }
                            else {
                                processedData['friday'] = 0;
                            }
                            break;
                        case 6:
                            if (day.dataset[0].point.length > 0) {
                                processedData['saturday'] = day.dataset[0].point[0].value[0].intVal;
                                totalStepsWeek += day.dataset[0].point[0].value[0].intVal;
                            }
                            else {
                                processedData['saturday'] = 0;
                            }
                            break;
                        case 0:
                            if (day.dataset[0].point.length > 0) {
                                processedData['sunday'] = day.dataset[0].point[0].value[0].intVal;
                                totalStepsWeek += day.dataset[0].point[0].value[0].intVal;
                            }
                            else {
                                processedData['sunday'] = 0;
                            }
                            break;
                    }
                }
            }
        }
        localStorage.setItem('totalStepsWeek', totalStepsWeek.toString());
        return processedData;
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
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page404/page404.component */ "Zawe");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scoreboard/scoreboard.component */ "LV43");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'scoreboard', component: _scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_5__["ScoreboardComponent"] },
    { path: '**', component: _page404_page404_component__WEBPACK_IMPORTED_MODULE_3__["Page404Component"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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
    logout() {
        this.authService.logoutUser();
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