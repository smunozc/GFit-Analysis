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

class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 2, vars: 0, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dashboard works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });


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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_0_div_1_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
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
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["id", "navbar"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 3, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isChecked);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page404/page404.component */ "Zawe");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_fire__WEBPACK_IMPORTED_MODULE_0__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].fireBaseConfig),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
        _page404_page404_component__WEBPACK_IMPORTED_MODULE_8__["Page404Component"]], imports: [_angular_fire__WEBPACK_IMPORTED_MODULE_0__["AngularFireModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]] }); })();


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
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 2, vars: 0, template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "navbar works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"] });


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
        this.afAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth.GoogleAuthProvider()).then((result) => {
            console.log(result);
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
        return this.afAuth.signOut();
    }
    isAuth() {
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(auth => auth));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"])); };
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
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 21, vars: 0, consts: [[1, "wrapper"], [1, "container"], [1, "form"], [1, "btn-social", "btn-google", 3, "click"], [1, "bi", "bi-google"], [1, "bg-bubbles"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Log in with");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_7_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 5);
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: ["*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-weight: 300;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-weight: 300;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n  background: #50a3a2;\r\n  background: linear-gradient(to bottom right, #08b6b6 0%, #d5ffa5 100%);\r\n  position: absolute;\r\n  top: 45%;\r\n  width: 100%;\r\n  height: 500px;\r\n  margin-top: -200px;\r\n  overflow: hidden;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  max-width: 600px;\r\n  margin: 0 auto;\r\n  padding: 80px 0;\r\n  position: absolute;\r\n  top: 10%;\r\n  left: 35%;\r\n  height: 400px;\r\n  text-align: center;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 40px;\r\n  font-weight: 200;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n  padding: 20px 0;\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n\r\n.btn-social[_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-radius: 20px;\r\n  display: inline-flex;\r\n  justify-self: center;\r\n  justify-content: center;\r\n  margin-top: 10px;\r\n  padding: 10px 25px;\r\n  text-decoration: none;\r\n  transition-duration: 0.25s;\r\n  width: 120px;\r\n}\r\n\r\n.btn-social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: white;\r\n  margin-right: 5px;\r\n}\r\n\r\n.btn-social[_ngcontent-%COMP%]:hover {\r\n  background-color: #dd4c39c9;\r\n  width: 135px;\r\n}\r\n\r\n.btn-google[_ngcontent-%COMP%] {\r\n  background-color: #dd4b39;\r\n  color: white;\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%] {\r\n  border-radius: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  list-style: none;\r\n  display: block;\r\n  width: 40px;\r\n  height: 40px;\r\n  background-color: rgba(255, 255, 255, 0.15);\r\n  bottom: -160px;\r\n  border-radius: 100%;\r\n  animation: bubble 25s infinite;\r\n  transition-timing-function: linear;\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\r\n  left: 10%;\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\r\n  left: 20%;\r\n  width: 80px;\r\n  height: 80px;\r\n  animation-delay: 2s;\r\n  animation-duration: 17s;\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\r\n  left: 25%;\r\n  animation-delay: 4s;\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4) {\r\n  left: 40%;\r\n  width: 60px;\r\n  height: 60px;\r\n  animation-duration: 22s;\r\n  background-color: rgba(255, 255, 255, 0.25);\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5) {\r\n  left: 70%;\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6) {\r\n  left: 80%;\r\n  width: 120px;\r\n  height: 120px;\r\n  animation-delay: 3s;\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(7) {\r\n  left: 32%;\r\n  width: 160px;\r\n  height: 160px;\r\n  animation-delay: 7s;\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(8) {\r\n  left: 55%;\r\n  width: 20px;\r\n  height: 20px;\r\n  animation-delay: 15s;\r\n  animation-duration: 40s;\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(9) {\r\n  left: 25%;\r\n  width: 10px;\r\n  height: 10px;\r\n  animation-delay: 2s;\r\n  animation-duration: 40s;\r\n  background-color: rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(10) {\r\n  left: 90%;\r\n  width: 160px;\r\n  height: 160px;\r\n  animation-delay: 11s;\r\n}\r\n\r\n@keyframes bubble {\r\n  0% {\r\n    transform: translateY(0);\r\n  }\r\n\r\n  100% {\r\n    transform: translateY(-800px) rotate(600deg);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNFQUFzRTtFQUN0RSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJDQUEyQztFQUMzQyxjQUFjO0VBQ2QsbUJBQW1CO0VBRW5CLDhCQUE4QjtFQUM5QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFFWixtQkFBbUI7RUFFbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsU0FBUztFQUVULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUVaLHVCQUF1QjtFQUN2QiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLGFBQWE7RUFFYixtQkFBbUI7RUFDbkIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBRWIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBRVosb0JBQW9CO0VBRXBCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUVaLG1CQUFtQjtFQUVuQix1QkFBdUI7RUFDdkIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBRWIsb0JBQW9CO0FBQ3RCOztBQVlBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSw0Q0FBNEM7RUFDOUM7QUFDRiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6ICM1MGEzYTI7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzA4YjZiNiAwJSwgI2Q1ZmZhNSAxMDAlKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0NSU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBtYXJnaW4tdG9wOiAtMjAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiA4MHB4IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTAlO1xyXG4gIGxlZnQ6IDM1JTtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lciBoMSB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmJ0bi1zb2NpYWwge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcclxuICB3aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbi5idG4tc29jaWFsIGkge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmJ0bi1zb2NpYWw6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZDRjMzljOTtcclxuICB3aWR0aDogMTM1cHg7XHJcbn1cclxuXHJcbi5idG4tZ29vZ2xlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJnLWJ1YmJsZXMge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uYmctYnViYmxlcyBsaSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcbiAgYm90dG9tOiAtMTYwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogYnViYmxlIDI1cyBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IGJ1YmJsZSAyNXMgaW5maW5pdGU7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxufVxyXG5cclxuLmJnLWJ1YmJsZXMgbGk6bnRoLWNoaWxkKDEpIHtcclxuICBsZWZ0OiAxMCU7XHJcbn1cclxuXHJcbi5iZy1idWJibGVzIGxpOm50aC1jaGlsZCgyKSB7XHJcbiAgbGVmdDogMjAlO1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMnM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTdzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTdzO1xyXG59XHJcblxyXG4uYmctYnViYmxlcyBsaTpudGgtY2hpbGQoMykge1xyXG4gIGxlZnQ6IDI1JTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogNHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiA0cztcclxufVxyXG5cclxuLmJnLWJ1YmJsZXMgbGk6bnRoLWNoaWxkKDQpIHtcclxuICBsZWZ0OiA0MCU7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAyMnM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMnM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxufVxyXG5cclxuLmJnLWJ1YmJsZXMgbGk6bnRoLWNoaWxkKDUpIHtcclxuICBsZWZ0OiA3MCU7XHJcbn1cclxuXHJcbi5iZy1idWJibGVzIGxpOm50aC1jaGlsZCg2KSB7XHJcbiAgbGVmdDogODAlO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzcztcclxuICBhbmltYXRpb24tZGVsYXk6IDNzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxufVxyXG5cclxuLmJnLWJ1YmJsZXMgbGk6bnRoLWNoaWxkKDcpIHtcclxuICBsZWZ0OiAzMiU7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG4gIGhlaWdodDogMTYwcHg7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDdzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogN3M7XHJcbn1cclxuXHJcbi5iZy1idWJibGVzIGxpOm50aC1jaGlsZCg4KSB7XHJcbiAgbGVmdDogNTUlO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTVzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMTVzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA0MHM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0MHM7XHJcbn1cclxuXHJcbi5iZy1idWJibGVzIGxpOm50aC1jaGlsZCg5KSB7XHJcbiAgbGVmdDogMjUlO1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMnM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNDBzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNDBzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxufVxyXG5cclxuLmJnLWJ1YmJsZXMgbGk6bnRoLWNoaWxkKDEwKSB7XHJcbiAgbGVmdDogOTAlO1xyXG4gIHdpZHRoOiAxNjBweDtcclxuICBoZWlnaHQ6IDE2MHB4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxMXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxMXM7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBidWJibGUge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04MDBweCkgcm90YXRlKDYwMGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJ1YmJsZSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTgwMHB4KSByb3RhdGUoNjAwZGVnKTtcclxuICB9XHJcbn1cclxuIl19 */"] });


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