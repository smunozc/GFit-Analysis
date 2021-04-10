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
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-chartist */ "Cr32");


class ChartComponent {
    constructor() {
        this.updateChartHeight();
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
                    [500, 4200, 30, 7000, 2500, 0, 0]
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
    updateChartHeight() {
        let mediaQuery = window.matchMedia("(min-width: 1024px)");
        if (mediaQuery.matches) { // If media query matches
            this.chartHeight = 500;
        }
        else {
            this.chartHeight = 250;
        }
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(); };
ChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartComponent, selectors: [["app-chart"]], decls: 1, vars: 4, consts: [[3, "type", "data", "options", "events"]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "x-chartist", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.chart.type)("data", ctx.chart.data)("options", ctx.chart.options)("events", ctx.chart.events);
    } }, directives: [ng_chartist__WEBPACK_IMPORTED_MODULE_1__["ChartistComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFydC5jb21wb25lbnQuY3NzIn0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chart/chart.component */ "Bho8");




class DashboardComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
    logout() {
        this.authService.logoutUser();
    }
    selectButtonSteps() {
        let buttonSteps = document.getElementById('button-steps');
        let buttonCalories = document.getElementById('button-calories');
        buttonSteps.className = 'button-selected';
        buttonCalories.className = 'button';
    }
    selectButtonCalories() {
        let buttonSteps = document.getElementById('button-steps');
        let buttonCalories = document.getElementById('button-calories');
        buttonSteps.className = 'button';
        buttonCalories.className = 'button-selected';
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 18, vars: 0, consts: [[1, "contain"], ["id", "buttons-container"], ["id", "button-steps", 1, "button-selected", 3, "click"], ["id", "button-calories", 1, "button", 3, "click"], ["id", "logout", 3, "click"], [1, "bubble"], ["name", "select", "id", "select", 1, "form-select"], ["value", "weekly", "selected", ""], ["value", "daily"], [1, "chart"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "DASHBOARD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_4_listener() { return ctx.selectButtonSteps(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " TOTAL STEPS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_6_listener() { return ctx.selectButtonCalories(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " TOTAL CALORIES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_8_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "WEEKLY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "DAILY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _chart_chart_component__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]], styles: [".contain[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  overflow: hidden;\r\n  width: 100%;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  margin-top: 5px;\r\n  text-align: center;\r\n}\r\n\r\n#buttons-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100px;\r\n  justify-content: space-evenly;\r\n  left: 0;\r\n  position: absolute;\r\n  width: 55%;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  border: none;\r\n  border-radius: 5px;\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n  font-size: 0.5rem;\r\n  height: 30px;\r\n  left: 0;\r\n  position: relative;\r\n  width: 70%;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(230, 230, 230);\r\n}\r\n\r\n.button-selected[_ngcontent-%COMP%] {\r\n  background-color: rgb(62, 233, 255);\r\n  border: none;\r\n  border-radius: 5px;\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n  font-size: 1rem;\r\n  height: 50px;\r\n  left: 0;\r\n  position: relative;\r\n  width: 90%;\r\n}\r\n\r\n.bubble[_ngcontent-%COMP%] {\r\n  background-color: rgb(62, 233, 255);\r\n  border-radius: 100%;\r\n  height: 120px;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 30px;\r\n  width: 120px;\r\n  z-index: -1;\r\n}\r\n\r\n.bubble[_ngcontent-%COMP%]   #select[_ngcontent-%COMP%] {\r\n  border: none;\r\n  left: -30px;\r\n  padding: 5px;\r\n  position: relative;\r\n  top: 40%;\r\n}\r\n\r\n#logout[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 90px;\r\n}\r\n\r\n.chart[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  border-radius: 5px;\r\n  margin-top: 100px;\r\n  position: relative;\r\n  z-index: 0;\r\n}\r\n\r\n@media screen and (min-width: 480px) {\r\n  .button[_ngcontent-%COMP%] {\r\n    font-size: 0.6rem;\r\n  }\r\n\r\n  .button-selected[_ngcontent-%COMP%] {\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  .bubble[_ngcontent-%COMP%] {\r\n    height: 150px;\r\n    right: 10px;\r\n    width: 150px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1024px) {\r\n  .contain[_ngcontent-%COMP%] {\r\n    padding: 0 20px;\r\n  }\r\n\r\n  h1[_ngcontent-%COMP%] {\r\n    text-align: start;\r\n  }\r\n\r\n  #buttons-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    height: 80px;\r\n    justify-content: space-evenly;\r\n    left: unset;\r\n    right: 20%;\r\n    top: 0;\r\n    position: absolute;\r\n    width: 30%;\r\n  }\r\n\r\n  .button[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    border: none;\r\n    border-radius: 5px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    font-size: 0.5rem;\r\n    height: 50%;\r\n    left: unset;\r\n    top: 0;\r\n    position: relative;\r\n    width: 30%;\r\n  }\r\n\r\n  .button-selected[_ngcontent-%COMP%] {\r\n    background-color: rgb(62, 233, 255);\r\n    border: none;\r\n    border-radius: 5px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    font-size: 1rem;\r\n    height: 100%;\r\n    left: unset;\r\n    top: 0;\r\n    position: relative;\r\n    width: 50%;\r\n  }\r\n\r\n  .bubble[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n    padding: 20px;\r\n    position: absolute;\r\n    right: 100px;\r\n    top: 0;\r\n    width: 200px\r\n  }\r\n\r\n  .bubble[_ngcontent-%COMP%]   #select[_ngcontent-%COMP%] {\r\n    border: none;\r\n    left: -60px;\r\n    padding: 10px;\r\n    position: relative;\r\n    top: 40%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsWUFBWTtFQUNaLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsVUFBVTtJQUNWLE1BQU07SUFDTixrQkFBa0I7SUFDbEIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFdBQVc7SUFDWCxNQUFNO0lBQ04sa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsTUFBTTtJQUNOLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osTUFBTTtJQUNOO0VBQ0Y7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsUUFBUTtFQUNWO0FBQ0YiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmgxIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jYnV0dG9ucy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGxlZnQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA1NSU7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGZvbnQtc2l6ZTogMC41cmVtO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBsZWZ0OiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XHJcbn1cclxuXHJcbi5idXR0b24tc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgMjMzLCAyNTUpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbGVmdDogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLmJ1YmJsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCAyMzMsIDI1NSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDMwcHg7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4uYnViYmxlICNzZWxlY3Qge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBsZWZ0OiAtMzBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNDAlO1xyXG59XHJcblxyXG4jbG9nb3V0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA5MHB4O1xyXG59XHJcblxyXG4uY2hhcnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcclxuICAuYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi1zZWxlY3RlZCB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICB9XHJcblxyXG4gIC5idWJibGUge1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgLmNvbnRhaW4ge1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgfVxyXG5cclxuICAjYnV0dG9ucy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGxlZnQ6IHVuc2V0O1xyXG4gICAgcmlnaHQ6IDIwJTtcclxuICAgIHRvcDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIGxlZnQ6IHVuc2V0O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICB9XHJcblxyXG4gIC5idXR0b24tc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCAyMzMsIDI1NSk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiB1bnNldDtcclxuICAgIHRvcDogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICAuYnViYmxlIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwMHB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDIwMHB4XHJcbiAgfVxyXG5cclxuICAuYnViYmxlICNzZWxlY3Qge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbGVmdDogLTYwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]], styles: [".wrapper[_ngcontent-%COMP%]{\r\n    height: 1000px;\r\n    overflow: hidden;\r\n    width: 100%;\r\n}\r\n\r\n.content-container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n\r\n@media screen and (min-width: 1024px) {\r\n    .wrapper[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-wrap: nowrap;\r\n        justify-content: flex-start;\r\n    }\r\n    .navbar-container[_ngcontent-%COMP%]{\r\n        width: 4%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xyXG4gICAgaGVpZ2h0OiAxMDAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250ZW50LWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC53cmFwcGVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1jb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6IDQlO1xyXG4gICAgfVxyXG59Il19 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_fire__WEBPACK_IMPORTED_MODULE_0__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].fireBaseConfig),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ng_chartist__WEBPACK_IMPORTED_MODULE_5__["ChartistModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
        _page404_page404_component__WEBPACK_IMPORTED_MODULE_10__["Page404Component"],
        _chart_chart_component__WEBPACK_IMPORTED_MODULE_12__["ChartComponent"]], imports: [_angular_fire__WEBPACK_IMPORTED_MODULE_0__["AngularFireModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
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
Page404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page404Component, selectors: [["app-page404"]], decls: 2, vars: 0, template: function Page404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page404 works!");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



// Unused imports
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry, map } from 'rxjs/operators';
class DataApiService {
    constructor(http) {
        this.http = http;
    }
    getWeekDailyStepCount() {
        const credential = JSON.parse(localStorage.getItem('credential'));
        console.log('credential: ' + JSON.stringify(credential));
        console.log('token: ' + JSON.stringify(credential['oauthAccessToken']));
        if (credential != null) {
            const url = 'https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate';
            // Obtain last 7 days in miliseconds
            let todayDateMilis = Date.now();
            let firstWeekDayMilis = todayDateMilis - 604800000;
            const body = {
                "aggregateBy": [{
                        "dataTypeName": "com.google.step_count.delta",
                        "dataSourceId": "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
                    }],
                "bucketByTime": { "durationMillis": 86400000 },
                "startTimeMillis": firstWeekDayMilis,
                "endTimeMillis": todayDateMilis
            };
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
            headers = headers.set('Content-Type', 'application/json; charset=utf-8');
            headers = headers.set('Authorization', 'Bearer ' + credential['oauthAccessToken'] /*tokenLiteral*/);
            console.log('Authorization: ' + headers.get('Authorization'));
            this.http.post(url, body, { headers: headers }).subscribe((response) => {
                console.log(response);
            }, (err) => {
                if (err.error instanceof Error) {
                    console.log('Client-side error occured: ' + err.error.message);
                }
                else {
                    console.log('Server-side error occured: ' + err.error.message);
                }
            });
        }
        else {
            console.log('La credencial es nula');
        }
    }
}
DataApiService.ɵfac = function DataApiService_Factory(t) { return new (t || DataApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
DataApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataApiService, factory: DataApiService.ɵfac, providedIn: 'root' });


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

class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 7, vars: 0, consts: [["id", "navbar"], ["id", "profile-button", "href", ""], [1, "bi", "bi-person-fill"], ["id", "home-button", "href", ""], [1, "bi", "bi-house-fill"], ["id", "scoreboard-button", "href", ""], [1, "bi", "bi-table"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, styles: ["#navbar[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  background-color: white;\r\n  bottom: 0;\r\n  display: flex;\r\n  height: 50px;\r\n  justify-content: space-around;\r\n  margin-top: 50px;\r\n  position: fixed;\r\n  width: 100%;\r\n}\r\n\r\n#navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  background-color: white;\r\n  border-radius: 100%;\r\n  color: black;\r\n  display: flex;\r\n  font-size: 2rem;\r\n  height: 4rem;\r\n  justify-content: center;\r\n  position: relative;\r\n  text-decoration: none;\r\n  top: -10px;\r\n  width: 4rem;\r\n}\r\n\r\n@media screen and (min-width: 1024px) {\r\n  #navbar[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    background-color: white;\r\n    bottom: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n    justify-content: space-around;\r\n    margin-top: unset;\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\n\r\n  #navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    background-color: white;\r\n    border-radius: unset;\r\n    color: black;\r\n    display: flex;\r\n    font-size: 2rem;\r\n    height: 100%;\r\n    justify-content: center;\r\n    position: unset;\r\n    text-decoration: none;\r\n    top: 0;\r\n    width: 100%;\r\n  }\r\n\r\n  #navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    align-items: center;\r\n    background-color: rgb(230, 230, 230);\r\n    border-radius: unset;\r\n    color: black;\r\n    display: flex;\r\n    font-size: 2rem;\r\n    height: 100%;\r\n    justify-content: center;\r\n    text-decoration: none;\r\n    top: 0;\r\n    width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsYUFBYTtFQUNiLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLE1BQU07SUFDTixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixNQUFNO0lBQ04sV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmF2YmFyIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI25hdmJhciBhIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGhlaWdodDogNHJlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRvcDogLTEwcHg7XHJcbiAgd2lkdGg6IDRyZW07XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICNuYXZiYXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG1hcmdpbi10b3A6IHVuc2V0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAjbmF2YmFyIGEge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdW5zZXQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogdW5zZXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICNuYXZiYXIgYTpob3ZlciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdW5zZXQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */"] });


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
/* harmony import */ var _data_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-api.service */ "etbh");





class AuthService {
    constructor(afAuth, dataApi) {
        this.afAuth = afAuth;
        this.dataApi = dataApi;
    }
    registerUser() { }
    loginGoogle() {
        // Creates the provider object.
        let provider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth.GoogleAuthProvider();
        // Additional scopes for the provider:
        provider.addScope('https://www.googleapis.com/auth/fitness.activity.read');
        provider.addScope('https://www.googleapis.com/auth/fitness.body.read');
        this.afAuth.signInWithPopup(provider).then((result) => {
            console.log(result);
            localStorage.setItem('user', JSON.stringify(result.user));
            localStorage.setItem('credential', JSON.stringify(result.credential));
            this.dataApi.getWeekDailyStepCount();
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
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_data_api_service__WEBPACK_IMPORTED_MODULE_4__["DataApiService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"] },
    { path: '**', component: _page404_page404_component__WEBPACK_IMPORTED_MODULE_3__["Page404Component"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: ["*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-weight: 300;\r\n}\r\n\r\n.titles[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-weight: 300;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n  background: #50a3a2;\r\n  background: linear-gradient(to bottom right, #08b6b6 0%, #d5ffa5 100%);\r\n  position: absolute;\r\n  top: 45%;\r\n  width: 100%;\r\n  height: 500px;\r\n  margin-top: -200px;\r\n  overflow: hidden;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  max-width: 600px;\r\n  margin: 0 auto;\r\n  padding: 80px 0;\r\n  position: absolute;\r\n  top: 10%;\r\n  left: 35%;\r\n  height: 400px;\r\n  text-align: center;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 40px;\r\n  font-weight: 200;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n  padding: 20px 0;\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n\r\n.btn-social[_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-radius: 20px;\r\n  display: inline-flex;\r\n  justify-self: center;\r\n  justify-content: center;\r\n  margin-top: 10px;\r\n  padding: 10px 25px;\r\n  text-decoration: none;\r\n  transition-duration: 0.25s;\r\n  width: 120px;\r\n}\r\n\r\n.btn-social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: white;\r\n  margin-right: 5px;\r\n}\r\n\r\n.btn-social[_ngcontent-%COMP%]:hover {\r\n  background-color: #dd4c39c9;\r\n  width: 135px;\r\n}\r\n\r\n.btn-google[_ngcontent-%COMP%] {\r\n  background-color: #dd4b39;\r\n  color: white;\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%] {\r\n  border-radius: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  list-style: none;\r\n  display: block;\r\n  width: 40px;\r\n  height: 40px;\r\n  background-color: rgba(255, 255, 255, 0.15);\r\n  bottom: -160px;\r\n  border-radius: 100%;\r\n  animation: bubble 25s infinite;\r\n  transition-timing-function: linear;\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\r\n  left: 10%;\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\r\n  left: 20%;\r\n  width: 80px;\r\n  height: 80px;\r\n  animation-delay: 2s;\r\n  animation-duration: 17s;\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\r\n  left: 25%;\r\n  animation-delay: 4s;\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4) {\r\n  left: 40%;\r\n  width: 60px;\r\n  height: 60px;\r\n  animation-duration: 22s;\r\n  background-color: rgba(255, 255, 255, 0.25);\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5) {\r\n  left: 70%;\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6) {\r\n  left: 80%;\r\n  width: 120px;\r\n  height: 120px;\r\n  animation-delay: 3s;\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(7) {\r\n  left: 32%;\r\n  width: 160px;\r\n  height: 160px;\r\n  animation-delay: 7s;\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(8) {\r\n  left: 55%;\r\n  width: 20px;\r\n  height: 20px;\r\n  animation-delay: 15s;\r\n  animation-duration: 40s;\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(9) {\r\n  left: 25%;\r\n  width: 10px;\r\n  height: 10px;\r\n  animation-delay: 2s;\r\n  animation-duration: 40s;\r\n  background-color: rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(10) {\r\n  left: 90%;\r\n  width: 160px;\r\n  height: 160px;\r\n  animation-delay: 11s;\r\n}\r\n\r\n@keyframes bubble {\r\n  0% {\r\n    transform: translateY(0);\r\n  }\r\n\r\n  100% {\r\n    transform: translateY(-800px) rotate(600deg);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNFQUFzRTtFQUN0RSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJDQUEyQztFQUMzQyxjQUFjO0VBQ2QsbUJBQW1CO0VBRW5CLDhCQUE4QjtFQUM5QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFFWixtQkFBbUI7RUFFbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsU0FBUztFQUVULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUVaLHVCQUF1QjtFQUN2QiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLGFBQWE7RUFFYixtQkFBbUI7RUFDbkIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBRWIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBRVosb0JBQW9CO0VBRXBCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUVaLG1CQUFtQjtFQUVuQix1QkFBdUI7RUFDdkIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBRWIsb0JBQW9CO0FBQ3RCOztBQVlBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSw0Q0FBNEM7RUFDOUM7QUFDRiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4udGl0bGVzIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6ICM1MGEzYTI7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzA4YjZiNiAwJSwgI2Q1ZmZhNSAxMDAlKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0NSU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBtYXJnaW4tdG9wOiAtMjAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiA4MHB4IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTAlO1xyXG4gIGxlZnQ6IDM1JTtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lciBoMSB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmJ0bi1zb2NpYWwge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcclxuICB3aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbi5idG4tc29jaWFsIGkge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmJ0bi1zb2NpYWw6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZDRjMzljOTtcclxuICB3aWR0aDogMTM1cHg7XHJcbn1cclxuXHJcbi5idG4tZ29vZ2xlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJnLWJ1YmJsZXMge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uYmctYnViYmxlcyBsaSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcbiAgYm90dG9tOiAtMTYwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogYnViYmxlIDI1cyBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IGJ1YmJsZSAyNXMgaW5maW5pdGU7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxufVxyXG5cclxuLmJnLWJ1YmJsZXMgbGk6bnRoLWNoaWxkKDEpIHtcclxuICBsZWZ0OiAxMCU7XHJcbn1cclxuXHJcbi5iZy1idWJibGVzIGxpOm50aC1jaGlsZCgyKSB7XHJcbiAgbGVmdDogMjAlO1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMnM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTdzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTdzO1xyXG59XHJcblxyXG4uYmctYnViYmxlcyBsaTpudGgtY2hpbGQoMykge1xyXG4gIGxlZnQ6IDI1JTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogNHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiA0cztcclxufVxyXG5cclxuLmJnLWJ1YmJsZXMgbGk6bnRoLWNoaWxkKDQpIHtcclxuICBsZWZ0OiA0MCU7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAyMnM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMnM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxufVxyXG5cclxuLmJnLWJ1YmJsZXMgbGk6bnRoLWNoaWxkKDUpIHtcclxuICBsZWZ0OiA3MCU7XHJcbn1cclxuXHJcbi5iZy1idWJibGVzIGxpOm50aC1jaGlsZCg2KSB7XHJcbiAgbGVmdDogODAlO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzcztcclxuICBhbmltYXRpb24tZGVsYXk6IDNzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxufVxyXG5cclxuLmJnLWJ1YmJsZXMgbGk6bnRoLWNoaWxkKDcpIHtcclxuICBsZWZ0OiAzMiU7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG4gIGhlaWdodDogMTYwcHg7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDdzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogN3M7XHJcbn1cclxuXHJcbi5iZy1idWJibGVzIGxpOm50aC1jaGlsZCg4KSB7XHJcbiAgbGVmdDogNTUlO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTVzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMTVzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA0MHM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0MHM7XHJcbn1cclxuXHJcbi5iZy1idWJibGVzIGxpOm50aC1jaGlsZCg5KSB7XHJcbiAgbGVmdDogMjUlO1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMnM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNDBzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNDBzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxufVxyXG5cclxuLmJnLWJ1YmJsZXMgbGk6bnRoLWNoaWxkKDEwKSB7XHJcbiAgbGVmdDogOTAlO1xyXG4gIHdpZHRoOiAxNjBweDtcclxuICBoZWlnaHQ6IDE2MHB4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxMXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxMXM7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBidWJibGUge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04MDBweCkgcm90YXRlKDYwMGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJ1YmJsZSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTgwMHB4KSByb3RhdGUoNjAwZGVnKTtcclxuICB9XHJcbn1cclxuIl19 */"] });


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