"use strict";
(self["webpackChunklogin_demo"] = self["webpackChunklogin_demo"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ 5047);
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/profile/profile.component */ 2683);
/* harmony import */ var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/error/error.component */ 8939);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/auth0-angular */ 7989);
/* harmony import */ var _pages_catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/catalogo/catalogo.component */ 1013);
/* harmony import */ var _pages_reservasusuario_reservasusuario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/reservasusuario/reservasusuario.component */ 9607);






const routes = [{
  path: 'profile',
  component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent,
  canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__.authGuardFn]
}, {
  path: 'error',
  component: _pages_error_error_component__WEBPACK_IMPORTED_MODULE_2__.ErrorComponent
},
// esta ruta dirige al catalogo
{
  path: 'catalogo',
  component: _pages_catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_3__.CatalogoComponent
},
// esta ruta dirige a las reservas del usuario
{
  path: 'MisReservas',
  component: _pages_reservasusuario_reservasusuario_component__WEBPACK_IMPORTED_MODULE_4__.ReservasusuarioComponent
}, {
  path: '',
  component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
  pathMatch: 'full'
}];

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ 1977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class AppComponent {
  title = 'Auth0 Angular SDK Sample';
  static ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 0,
    consts: [[1, "d-flex", "flex-column", "h-100"], [1, "container", "mt-3"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__.NavBarComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5473:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class FooterComponent {
  static ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 43,
    vars: 0,
    consts: [[1, "footer-container"], [1, "footer-content"], [1, "footer-column", "brand"], [1, "footer-column"], [1, "footer-links"], ["href", "#"], [1, "newsletter-form"], ["type", "email", "placeholder", "Tu email", "required", ""], ["type", "submit"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "WorkNest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Calle #3, Colonia Centro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "San Salvador, El Salvador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "+503 4548-5485");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "algo@worknest.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3)(15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Explorar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4)(18, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sobre Nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Espacios Disponibles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Eventos y Talleres");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3)(25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Servicios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4)(28, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Oficinas privadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Espacios para Eventos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Salas de Reuniones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3)(35, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Mantente Conectado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Suscribite con tu correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    },
    styles: ["footer[_ngcontent-%COMP%] {\n    background: #1a1d2e;\n    color: #fff;\n    padding: 60px 20px 30px;\n}\n\n.footer-container[_ngcontent-%COMP%] {\n    max-width: 1200px;\n    margin: 0 auto;\n}\n\n.footer-content[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1.5fr 1fr 1fr 1.5fr;\n    gap: 50px;\n    margin-bottom: 40px;\n}\n\n.footer-column[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    font-weight: 700;\n    margin-bottom: 20px;\n}\n\n.footer-column.brand[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #5b4ff5;\n    font-size: 1.3rem;\n}\n\n.footer-column[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .footer-column[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n    color: #b0b3c1;\n    line-height: 1.8;\n    text-decoration: none;\n    transition: color 0.3s ease;\n}\n\n.footer-column[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #fff;\n}\n\n.footer-links[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.newsletter-form[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 10px;\n    margin-top: 15px;\n}\n\n.newsletter-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    flex: 1;\n    padding: 12px 18px;\n    border: none;\n    border-radius: 8px;\n    background: #fff;\n    font-size: 0.95rem;\n    outline: none;\n}\n\n.newsletter-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 12px 20px;\n    background: #00d9b1;\n    color: #fff;\n    border: none;\n    border-radius: 8px;\n    cursor: pointer;\n    font-weight: 600;\n    transition: all 0.3s ease;\n}\n\n.newsletter-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    background: #00c29f;\n    transform: translateY(-2px);\n}\n\n.footer-bottom[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 30px;\n    border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    color: #7a7d8f;\n}\n\n@media (max-width: 968px) {\n    .footer-content[_ngcontent-%COMP%] {\n        grid-template-columns: repeat(2, 1fr);\n        gap: 40px;\n    }\n}\n\n@media (max-width: 640px) {\n    footer[_ngcontent-%COMP%] {\n        padding: 40px 20px 20px;\n    }\n\n    .footer-content[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n        gap: 30px;\n    }\n\n    .newsletter-form[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n\n    .newsletter-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksT0FBTztJQUNQLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJO1FBQ0kscUNBQXFDO1FBQ3JDLFNBQVM7SUFDYjtBQUNKOztBQUVBO0lBQ0k7UUFDSSx1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSwwQkFBMEI7UUFDMUIsU0FBUztJQUNiOztJQUVBO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksV0FBVztJQUNmO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzFhMWQyZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogNjBweCAyMHB4IDMwcHg7XHJcbn1cclxuXHJcbi5mb290ZXItY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5mb290ZXItY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjVmciAxZnIgMWZyIDEuNWZyO1xyXG4gICAgZ2FwOiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmZvb3Rlci1jb2x1bW4gaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmZvb3Rlci1jb2x1bW4uYnJhbmQgaDMge1xyXG4gICAgY29sb3I6ICM1YjRmZjU7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5cclxuLmZvb3Rlci1jb2x1bW4gcCxcclxuLmZvb3Rlci1jb2x1bW4gYSB7XHJcbiAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgICBjb2xvcjogI2IwYjNjMTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5mb290ZXItY29sdW1uIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5mb290ZXItbGlua3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5uZXdzbGV0dGVyLWZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5uZXdzbGV0dGVyLWZvcm0gaW5wdXQge1xyXG4gICAgZmxleDogMTtcclxuICAgIHBhZGRpbmc6IDEycHggMThweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubmV3c2xldHRlci1mb3JtIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBkOWIxO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLm5ld3NsZXR0ZXItZm9ybSBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzAwYzI5ZjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxufVxyXG5cclxuLmZvb3Rlci1ib3R0b20ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG59XHJcblxyXG4uZm9vdGVyLWJvdHRvbSBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgY29sb3I6ICM3YTdkOGY7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NjhweCkge1xyXG4gICAgLmZvb3Rlci1jb250ZW50IHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgICAgIGdhcDogNDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgICBmb290ZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMjBweCAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXItY29udGVudCB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgZ2FwOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5uZXdzbGV0dGVyLWZvcm0ge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgLm5ld3NsZXR0ZXItZm9ybSBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1977:
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavBarComponent: () => (/* binding */ NavBarComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9626);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 7518);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/auth0-angular */ 7989);








function NavBarComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9)(1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mis Reservas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function NavBarComponent_li_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9)(1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_li_17_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Log out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function NavBarComponent_li_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9)(1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_li_20_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.loginWithRedirect());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Log in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function NavBarComponent_li_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20)(1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23)(4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_li_22_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "fa-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Log out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r5 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r5.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faPowerOff);
  }
}
function NavBarComponent_ul_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 28)(1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_ul_24_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.loginWithRedirect());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Log in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function NavBarComponent_ul_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 30)(1, "li", 9)(2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "fa-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_ul_26_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Log out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r8 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r8.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faPowerOff);
  }
}
class NavBarComponent {
  auth;
  doc;
  isCollapsed = true;
  faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faUser;
  faPowerOff = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faPowerOff;
  constructor(auth, doc) {
    this.auth = auth;
    this.doc = doc;
  }
  loginWithRedirect() {
    this.auth.loginWithRedirect();
  }
  logout() {
    this.auth.logout({
      logoutParams: {
        returnTo: this.doc.location.origin
      }
    });
  }
  static ɵfac = function NavBarComponent_Factory(t) {
    return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NavBarComponent,
    selectors: [["app-nav-bar"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 28,
    vars: 20,
    consts: [[1, "nav-container"], [1, "navbar", "navbar-expand-md", "navbar-light", "bg-light"], [1, "container"], ["routerLink", "/", 1, "navbar-brand"], ["src", "assets/logo.jpg", "alt", "Mi Logo", 2, "height", "40px"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/", 1, "nav-link"], ["routerLink", "/catalogo", 1, "nav-link"], ["class", "nav-item", 4, "ngIf"], [1, "navbar-nav", "d-none", "d-md-block"], ["class", "nav-item dropdown", "ngbDropdown", "", 4, "ngIf"], ["class", "navbar-nav d-md-none", 4, "ngIf"], ["class", "navbar-nav d-md-none justify-content-between", "style", "min-height: 170px;", 4, "ngIf"], ["routerLink", "/MisReservas", 1, "nav-link"], ["id", "qsLogoutBtn", 1, "btn", "btn-link", "p-0", 2, "min-width", "unset", 3, "click"], ["id", "qsLoginBtn", 1, "btn", "btn-primary", "btn-margin", 3, "click"], ["ngbDropdown", "", 1, "nav-item", "dropdown"], ["ngbDropdownToggle", "", "id", "profileDropDown", "data-toggle", "dropdown", 1, "nav-link", "dropdown-toggle"], ["alt", "Profile picture", 1, "nav-user-profile", "rounded-circle", 2, "width", "75px", 3, "src"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-left"], [1, "dropdown-header"], ["routerLink", "/profile", 1, "dropdown-item", "dropdown-profile"], [1, "mr-3", 3, "icon"], [1, "btn", "btn-link", "dropdown-item", 3, "click"], [1, "navbar-nav", "d-md-none"], ["id", "qsLoginBtn", 1, "btn", "btn-primary", "btn-block", 3, "click"], [1, "navbar-nav", "d-md-none", "justify-content-between", 2, "min-height", "170px"], [1, "user-info"], ["alt", "Profile picture", 1, "nav-user-profile", "d-inline-block", "rounded-circle", "mr-3", 2, "width", "75px", 3, "src"], [1, "d-inline-block"], ["routerLink", "/profile"], [1, "btn", "btn-link", "p-0", 3, "click"]],
    template: function NavBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_button_click_5_listener() {
          return ctx.isCollapsed = !ctx.isCollapsed;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "ul", 8)(9, "li", 9)(10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9)(13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Catalogo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavBarComponent_li_15_Template, 3, 0, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NavBarComponent_li_17_Template, 3, 0, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NavBarComponent_li_20_Template, 3, 0, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NavBarComponent_li_22_Template, 12, 4, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, NavBarComponent_ul_24_Template, 3, 0, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, NavBarComponent_ul_26_Template, 14, 4, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 8, ctx.auth.isAuthenticated$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 10, ctx.auth.isAuthenticated$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 12, ctx.auth.isAuthenticated$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 14, ctx.auth.user$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 16, ctx.auth.isAuthenticated$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 18, ctx.auth.user$));
      }
    },
    dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbCollapse, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
    styles: ["\n\n\n.nav-container[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n  border-bottom: 1px solid #e2e8f0;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%) !important;\n  padding: 1rem 0;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 60px;\n}\n.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n \n}\n\n.nav-link[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #64748b !important;\n  transition: all 0.2s ease;\n  padding: 0.5rem 1rem !important;\n  border-radius: 6px;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: #2563eb !important;\n  background-color: #f1f5f9;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);\n  border: none;\n  padding: 0.625rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4REFBOEQ7O0FBRTlEO0VBQ0UseUNBQXlDO0VBQ3pDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHdFQUF3RTtFQUN4RSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7O0FBRW5COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw2REFBNkQ7RUFDN0QsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw2Q0FBNkM7QUFDL0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDU1MgcGFyYSBtZWpvcmFyIG5hdmJhciAtIGFncmVnYXIgYSBuYXYtYmFyLmNvbXBvbmVudC5jc3MgKi9cclxuXHJcbi5uYXYtY29udGFpbmVyIHtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZThmMDtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZmZmZiAwJSwgI2Y4ZmFmYyAxMDAlKSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDFyZW0gMDtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiA2MHB4O1xyXG59XHJcbi5uYXZiYXItYnJhbmQgaW1nIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiBcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjNjQ3NDhiICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLm5hdi1saW5rOmhvdmVyIHtcclxuICBjb2xvcjogIzI1NjNlYiAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI1NjNlYiAwJSwgIzFkNGVkOCAxMDAlKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMC42MjVyZW0gMS41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggcmdiYSgzNywgOTksIDIzNSwgMC4zKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3712:
/*!************************************************!*\
  !*** ./src/app/espacios/espacios.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EspaciosComponent: () => (/* binding */ EspaciosComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _form_reserva_form_reserva_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form-reserva/form-reserva.component */ 3120);
/* harmony import */ var _filtros_espacio_filtros_espacio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filtros-espacio/filtros-espacio.component */ 4791);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);








const _c0 = (a0, a1, a2) => ({
  "estado-disponible": a0,
  "estado-ocupado": a1,
  "estado-mantenimiento": a2
});
const _c1 = (a0, a1) => ({
  "btn-no-disponible": a0,
  "btn-mantenimiento": a1
});
function EspaciosComponent_article_10_span_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const servicio_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", servicio_r2.nombre, " ");
  }
}
function EspaciosComponent_article_10_span_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Reservar Espacio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function EspaciosComponent_article_10_span_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Disponible");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function EspaciosComponent_article_10_span_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "En Mantenimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function EspaciosComponent_article_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "article", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 14)(6, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 16)(9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "svg", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "svg", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 16)(20, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "svg", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "path", 21)(23, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "svg", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "path", 21)(29, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "svg", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 24)(38, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "/hora");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 27)(43, "h3", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Servicios Incluidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, EspaciosComponent_article_10_span_46_Template, 2, 1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 31)(48, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EspaciosComponent_article_10_Template_button_click_48_listener() {
      const espacio_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.toggleForm(espacio_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, EspaciosComponent_article_10_span_49_Template, 2, 0, "span", 33)(50, EspaciosComponent_article_10_span_50_Template, 2, 0, "span", 33)(51, EspaciosComponent_article_10_span_51_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const espacio_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", espacio_r3.imagen || "https://wearecloudworks.com/wp-content/uploads/2022/01/beneficios-coworking.jpeg", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", "Imagen del " + espacio_r3.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](17, _c0, espacio_r3.estado === "disponible", espacio_r3.estado === "ocupado", espacio_r3.estado === "mantenimiento"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", espacio_r3.estado, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](espacio_r3.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](espacio_r3.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", espacio_r3.capacidad, " personas");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](espacio_r3.zona);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", espacio_r3.direccion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", espacio_r3.horario, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("$", espacio_r3.precio, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", espacio_r3.servicios);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](21, _c1, espacio_r3.estado === "ocupado", espacio_r3.estado === "mantenimiento"))("disabled", espacio_r3.estado !== "disponible");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", espacio_r3.estado === "disponible");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", espacio_r3.estado === "ocupado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", espacio_r3.estado === "mantenimiento");
  }
}
function EspaciosComponent_app_form_reserva_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-form-reserva", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cerrarForm", function EspaciosComponent_app_form_reserva_11_Template_app_form_reserva_cerrarForm_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.mostrarFormId = null);
    })("reservaExitosa", function EspaciosComponent_app_form_reserva_11_Template_app_form_reserva_reservaExitosa_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.onReservaExitosa($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("espacioId", ctx_r3.mostrarFormId)("espacioNombre", ctx_r3.getEspacioNombre(ctx_r3.mostrarFormId))("espacioPrecio", ctx_r3.getEspacioPrecio(ctx_r3.mostrarFormId));
  }
}
class EspaciosComponent {
  http;
  espacios_list = [];
  espacios_list_filtrados = [];
  mostrarFormId = null;
  // actualizamos los espacios cada vez que se procese una reserva
  onReservaExitosa(exito) {
    if (exito) {
      this.cargarEspacios();
    }
  }
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.cargarEspacios();
  }
  toggleForm(espacioId) {
    this.mostrarFormId = this.mostrarFormId === espacioId ? null : espacioId;
  }
  /**
   * Carga los espacios desde el backend
   */
  cargarEspacios() {
    this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl}/api/componente/espacios`).subscribe({
      next: data => {
        this.espacios_list = data;
        this.espacios_list_filtrados = [...data];
      },
      error: error => {
        console.error('Error al cargar espacios:', error);
      }
    });
  }
  /**
   * Obtiene el nombre del espacio por ID
   */
  getEspacioNombre(id) {
    const espacio = this.espacios_list_filtrados.find(e => e.id === id);
    return espacio ? espacio.nombre : '';
  }
  /**
   * Obtiene el precio del espacio por ID
   */
  getEspacioPrecio(id) {
    const espacio = this.espacios_list_filtrados.find(e => e.id === id);
    return espacio ? espacio.precio : 50;
  }
  /**
   * Aplica los filtros a la lista de espacios
   */
  filtrarEspacios(filtros) {
    console.log(filtros);
    this.espacios_list_filtrados = this.espacios_list.filter(espacio => {
      // Filtro por tipo
      if (filtros.zona && espacio.zona !== filtros.zona) {
        return false;
      }
      // Filtro por tipo
      if (filtros.tipo && espacio.tipo !== filtros.tipo) {
        return false;
      }
      // Filtro por capacidad mínima
      if (filtros.capacidadMinima && espacio.capacidad < filtros.capacidadMinima) {
        return false;
      }
      // Filtro por precio mínimo
      if (filtros.precioMinimo && espacio.precio <= filtros.precioMinimo) {
        return false;
      }
      // Filtro por precio máximo
      if (filtros.precioMaximo && espacio.precio >= filtros.precioMaximo) {
        return false;
      }
      // Filtros de servicios - DINÁMICO
      if (filtros.servicios && filtros.servicios.length > 0) {
        // El espacio debe tener TODOS los servicios seleccionados
        for (const servicioRequerido of filtros.servicios) {
          if (!this.tieneServicio(espacio, servicioRequerido)) {
            return false;
          }
        }
      }
      return true;
    });
  }
  /**
   * Verifica si un espacio tiene un servicio específico
   */
  tieneServicio(espacio, nombreServicio) {
    return espacio.servicios.some(servicio => servicio.nombre.toLowerCase().includes(nombreServicio.toLowerCase()));
  }
  static ɵfac = function EspaciosComponent_Factory(t) {
    return new (t || EspaciosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: EspaciosComponent,
    selectors: [["app-espacios"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 12,
    vars: 2,
    consts: [[1, "espacios-layout"], [1, "espacios-container"], [3, "filtrosAplicados"], [1, "espacios-main"], [1, "espacios-header"], [1, "espacios-title"], [1, "espacios-subtitle"], [1, "espacios-grid"], ["class", "espacio-card", 4, "ngFor", "ngForOf"], [3, "espacioId", "espacioNombre", "espacioPrecio", "cerrarForm", "reservaExitosa", 4, "ngIf"], [1, "espacio-card"], [1, "espacio-imagen"], ["loading", "lazy", 3, "src", "alt"], [1, "estado-badge", 3, "ngClass"], [1, "espacio-content"], [1, "espacio-nombre"], [1, "espacio-info-grid"], [1, "info-item"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "info-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m1 0h1m-1 4h1m1 0h1m-1 4h1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "espacio-precio"], [1, "precio-valor"], [1, "precio-periodo"], [1, "servicios-section"], [1, "servicios-titulo"], [1, "servicios-list"], ["class", "servicio-tag", 4, "ngFor", "ngForOf"], [1, "card-action"], [1, "btn-reservar", 3, "click", "ngClass", "disabled"], [4, "ngIf"], [1, "servicio-tag"], [3, "cerrarForm", "reservaExitosa", "espacioId", "espacioNombre", "espacioPrecio"]],
    template: function EspaciosComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-filtros-espacio", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("filtrosAplicados", function EspaciosComponent_Template_app_filtros_espacio_filtrosAplicados_2_listener($event) {
          return ctx.filtrarEspacios($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "main", 3)(4, "header", 4)(5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Espacios Disponibles");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Encuentra el espacio perfecto para tu trabajo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, EspaciosComponent_article_10_Template, 52, 24, "article", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, EspaciosComponent_app_form_reserva_11_Template, 1, 3, "app-form-reserva", 9);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.espacios_list_filtrados);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mostrarFormId !== null);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule, _form_reserva_form_reserva_component__WEBPACK_IMPORTED_MODULE_0__.FormReservaComponent, _filtros_espacio_filtros_espacio_component__WEBPACK_IMPORTED_MODULE_1__.FiltrosEspacioComponent],
    styles: ["\n\n\n\n\n\n\n.espacios-layout[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 64px);\n  background: var(--gray-50);\n  padding: var(--spacing-4);\n}\n\n\n\n.espacios-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-6);\n  max-width: 1280px;\n  margin: 0 auto;\n}\n\n\n\n@media (min-width: 1024px) {\n  .espacios-container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 320px 1fr;\n    gap: var(--spacing-8);\n  }\n\n  .espacios-layout[_ngcontent-%COMP%] {\n    padding: var(--spacing-6) var(--spacing-8);\n  }\n}\n\n\n\n\n\n\n.espacios-main[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-2xl);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--gray-200);\n  overflow: hidden;\n}\n\n.espacios-header[_ngcontent-%COMP%] {\n  padding: var(--spacing-6);\n  border-bottom: 1px solid var(--gray-200);\n  background: linear-gradient(135deg, var(--gray-50) 0%, white 100%);\n}\n\n.espacios-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  font-weight: 700;\n  color: var(--gray-900);\n  margin-bottom: var(--spacing-2);\n}\n\n.espacios-subtitle[_ngcontent-%COMP%] {\n  font-size: var(--font-size-base);\n  color: var(--gray-600);\n  margin: 0;\n}\n\n@media (min-width: 768px) {\n  .espacios-title[_ngcontent-%COMP%] {\n    font-size: var(--font-size-3xl);\n  }\n\n  .espacios-subtitle[_ngcontent-%COMP%] {\n    font-size: var(--font-size-lg);\n  }\n}\n\n\n\n\n\n\n.espacios-grid[_ngcontent-%COMP%] {\n  padding: var(--spacing-6);\n  display: grid;\n  gap: var(--spacing-6);\n  grid-template-columns: 1fr;\n}\n\n\n\n\n\n@media (min-width: 640px) {\n  .espacios-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: var(--spacing-4);\n  }\n}\n\n@media (min-width: 1024px) {\n  .espacios-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: var(--spacing-6);\n  }\n}\n\n@media (min-width: 1280px) {\n  .espacios-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\n\n\n\n\n\n\n\n.espacio-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--gray-200);\n  overflow: hidden;\n  transition: all 0.3s ease;\n  position: relative;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.espacio-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-xl);\n  border-color: var(--primary-300);\n}\n\n\n\n.espacio-imagen[_ngcontent-%COMP%] {\n  position: relative;\n  height: 200px;\n  overflow: hidden;\n}\n\n.espacio-imagen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n\n.espacio-card[_ngcontent-%COMP%]:hover   .espacio-imagen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n\n\n\n.estado-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: var(--spacing-3);\n  right: var(--spacing-3);\n  padding: var(--spacing-1) var(--spacing-3);\n  border-radius: var(--radius-full);\n  font-size: var(--font-size-xs);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  backdrop-filter: blur(8px);\n  box-shadow: var(--shadow-sm);\n}\n\n.estado-disponible[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.9);\n  color: white;\n}\n\n.estado-ocupado[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.9);\n  color: white;\n}\n\n.estado-mantenimiento[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.9);\n  color: white;\n}\n\n\n\n\n\n\n.espacio-content[_ngcontent-%COMP%] {\n  padding: var(--spacing-6);\n}\n\n.espacio-nombre[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n  font-weight: 700;\n  color: var(--gray-900);\n  margin-bottom: var(--spacing-4);\n  line-height: 1.2;\n}\n\n\n\n.espacio-info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  \n\n  gap: var(--spacing-3);\n  margin-bottom: var(--spacing-4);\n}\n\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-2);\n  font-size: var(--font-size-sm);\n  color: var(--gray-600);\n}\n\n.info-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  color: var(--gray-400);\n  flex-shrink: 0;\n}\n\n\n\n.espacio-precio[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: var(--spacing-1);\n  margin-bottom: var(--spacing-4);\n}\n\n.precio-valor[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  font-weight: 700;\n  color: var(--primary-600);\n}\n\n.precio-periodo[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  color: var(--gray-500);\n  font-weight: 500;\n}\n\n\n\n\n\n\n.servicios-section[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-6);\n}\n\n.servicios-titulo[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--gray-700);\n  margin-bottom: var(--spacing-3);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n\n.servicios-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--spacing-2);\n}\n\n.servicio-tag[_ngcontent-%COMP%] {\n  padding: var(--spacing-1) var(--spacing-3);\n  background: var(--primary-50);\n  color: var(--primary-700);\n  border: 1px solid var(--primary-200);\n  border-radius: var(--radius-full);\n  font-size: var(--font-size-xs);\n  font-weight: 500;\n}\n\n\n\n\n\n\n.card-action[_ngcontent-%COMP%] {\n  padding: 0;\n  border-top: 1px solid var(--gray-200);\n}\n\n.btn-reservar[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: var(--spacing-4) var(--spacing-6);\n  background: linear-gradient(135deg, var(--primary-600), var(--primary-700));\n  color: white;\n  border: none;\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  position: relative;\n  overflow: hidden;\n  border-radius: 0;\n}\n\n.btn-reservar[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);\n  transition: left 0.5s;\n}\n\n.btn-reservar[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n\n.btn-reservar[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, var(--primary-700), var(--primary-800));\n  transform: translateY(-1px);\n}\n\n.btn-reservar[_ngcontent-%COMP%]:disabled {\n  background: var(--gray-400);\n  cursor: not-allowed;\n  transform: none;\n}\n\n.btn-reservar[_ngcontent-%COMP%]:disabled::before {\n  display: none;\n}\n\n\n\n.btn-no-disponible[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--error), #dc2626);\n}\n\n.btn-mantenimiento[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--warning), #d97706);\n}\n\n\n\n\n\n\n@media (max-width: 639px) {\n  .espacio-info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .espacio-content[_ngcontent-%COMP%] {\n    padding: var(--spacing-4);\n  }\n\n  .espacio-imagen[_ngcontent-%COMP%] {\n    height: 160px;\n  }\n}\n\n@media (min-width: 640px) and (max-width: 1023px) {\n  .espacio-imagen[_ngcontent-%COMP%] {\n    height: 180px;\n  }\n}\n\n\n\n\n\n\n.espacios-grid[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n\n.espacios-grid[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--gray-100);\n  border-radius: var(--radius-sm);\n}\n\n.espacios-grid[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--gray-300);\n  border-radius: var(--radius-sm);\n}\n\n.espacios-grid[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--gray-400);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXNwYWNpb3MvZXNwYWNpb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7a0RBRWtEOztBQUVsRCxvQ0FBb0M7QUFDcEM7RUFDRSw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLHlCQUF5QjtBQUMzQjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQSx5Q0FBeUM7QUFDekM7RUFDRTtJQUNFLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsMENBQTBDO0VBQzVDO0FBQ0Y7O0FBRUE7O2tEQUVrRDs7QUFFbEQ7RUFDRSxpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1QixpQ0FBaUM7RUFDakMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHdDQUF3QztFQUN4QyxrRUFBa0U7QUFDcEU7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFO0lBQ0UsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0UsOEJBQThCO0VBQ2hDO0FBQ0Y7O0FBRUE7O2tEQUVrRDs7QUFFbEQ7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQiwwQkFBMEI7QUFDNUI7Ozs7QUFJQSwyQkFBMkI7QUFDM0I7RUFDRTtJQUNFLHFDQUFxQztJQUNyQyxxQkFBcUI7RUFDdkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUNBQXFDO0lBQ3JDLHFCQUFxQjtFQUN2QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxxQ0FBcUM7RUFDdkM7QUFDRjs7OztBQUlBOztrREFFa0Q7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Q2Y7O0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0UsMERBQTBEO0FBQzVEOztBQUVBO0VBQ0UsNERBQTREO0FBQzlEOztBQUVBOztrREFFa0Q7O0FBRWxEO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7O2tEQUVrRDs7QUFFbEQ7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBFU1BBQ0lPUyBDT01QT05FTlQgLSBSRVNQT05TSVZFIERFU0lHTlxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8qIExheW91dCBwcmluY2lwYWwgLSBNb2JpbGUgRmlyc3QgKi9cclxuLmVzcGFjaW9zLWxheW91dCB7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktNTApO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctNCk7XHJcbn1cclxuXHJcbi8qIE1vYmlsZTogU3RhY2sgdmVydGljYWwgKi9cclxuLmVzcGFjaW9zLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogdmFyKC0tc3BhY2luZy02KTtcclxuICBtYXgtd2lkdGg6IDEyODBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLyogVGFibGV0IHkgRGVza3RvcDogTGF5b3V0IGxhZG8gYSBsYWRvICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAuZXNwYWNpb3MtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMyMHB4IDFmcjtcclxuICAgIGdhcDogdmFyKC0tc3BhY2luZy04KTtcclxuICB9XHJcblxyXG4gIC5lc3BhY2lvcy1sYXlvdXQge1xyXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy02KSB2YXIoLS1zcGFjaW5nLTgpO1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIMODwoFSRUEgREUgQ09OVEVOSURPIFBSSU5DSVBBTFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5lc3BhY2lvcy1tYWluIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtMnhsKTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXktMjAwKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZXNwYWNpb3MtaGVhZGVyIHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLTYpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ncmF5LTIwMCk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tZ3JheS01MCkgMCUsIHdoaXRlIDEwMCUpO1xyXG59XHJcblxyXG4uZXNwYWNpb3MtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTJ4bCk7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogdmFyKC0tZ3JheS05MDApO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctMik7XHJcbn1cclxuXHJcbi5lc3BhY2lvcy1zdWJ0aXRsZSB7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7XHJcbiAgY29sb3I6IHZhcigtLWdyYXktNjAwKTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5lc3BhY2lvcy10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0zeGwpO1xyXG4gIH1cclxuXHJcbiAgLmVzcGFjaW9zLXN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxnKTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBHUklEIERFIEVTUEFDSU9TXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLmVzcGFjaW9zLWdyaWQge1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctNik7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBnYXA6IHZhcigtLXNwYWNpbmctNik7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbn1cclxuXHJcblxyXG5cclxuLyogUmVzcG9uc2l2ZSBicmVha3BvaW50cyAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcclxuICAuZXNwYWNpb3MtZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgZ2FwOiB2YXIoLS1zcGFjaW5nLTQpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gIC5lc3BhY2lvcy1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICBnYXA6IHZhcigtLXNwYWNpbmctNik7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XHJcbiAgLmVzcGFjaW9zLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIENBUkRTIERFIEVTUEFDSU9TXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLmVzcGFjaW8tY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXhsKTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXktMjAwKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5lc3BhY2lvLWNhcmQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cteGwpO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS0zMDApO1xyXG59XHJcblxyXG4vKiBJbWFnZW4gZGVsIGVzcGFjaW8gKi9cclxuLmVzcGFjaW8taW1hZ2VuIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZXNwYWNpby1pbWFnZW4gaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmVzcGFjaW8tY2FyZDpob3ZlciAuZXNwYWNpby1pbWFnZW4gaW1nIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcblxyXG4vKiBCYWRnZSBkZSBlc3RhZG8gKi9cclxuLmVzdGFkby1iYWRnZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogdmFyKC0tc3BhY2luZy0zKTtcclxuICByaWdodDogdmFyKC0tc3BhY2luZy0zKTtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLTEpIHZhcigtLXNwYWNpbmctMyk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWZ1bGwpO1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xyXG59XHJcblxyXG4uZXN0YWRvLWRpc3BvbmlibGUge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTYsIDE4NSwgMTI5LCAwLjkpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmVzdGFkby1vY3VwYWRvIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjkpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmVzdGFkby1tYW50ZW5pbWllbnRvIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMTU4LCAxMSwgMC45KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBDT05URU5JRE8gREUgTEEgQ0FSRFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5lc3BhY2lvLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctNik7XHJcbn1cclxuXHJcbi5lc3BhY2lvLW5vbWJyZSB7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteGwpO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHZhcigtLWdyYXktOTAwKTtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLTQpO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbn1cclxuXHJcbi8qIEluZm8gZ3JpZCAqL1xyXG4uZXNwYWNpby1pbmZvLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgLyoqZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyoqL1xyXG4gIGdhcDogdmFyKC0tc3BhY2luZy0zKTtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLTQpO1xyXG59XHJcblxyXG4uaW5mby1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLTIpO1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcclxuICBjb2xvcjogdmFyKC0tZ3JheS02MDApO1xyXG59XHJcblxyXG4uaW5mby1pY29uIHtcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgY29sb3I6IHZhcigtLWdyYXktNDAwKTtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLyogUHJlY2lvICovXHJcbi5lc3BhY2lvLXByZWNpbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLTEpO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctNCk7XHJcbn1cclxuXHJcbi5wcmVjaW8tdmFsb3Ige1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTJ4bCk7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS02MDApO1xyXG59XHJcblxyXG4ucHJlY2lvLXBlcmlvZG8ge1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcclxuICBjb2xvcjogdmFyKC0tZ3JheS01MDApO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBTRVJWSUNJT1NcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4uc2VydmljaW9zLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctNik7XHJcbn1cclxuXHJcbi5zZXJ2aWNpb3MtdGl0dWxvIHtcclxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogdmFyKC0tZ3JheS03MDApO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctMyk7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG59XHJcblxyXG4uc2VydmljaW9zLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogdmFyKC0tc3BhY2luZy0yKTtcclxufVxyXG5cclxuLnNlcnZpY2lvLXRhZyB7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy0xKSB2YXIoLS1zcGFjaW5nLTMpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktNTApO1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LTcwMCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS0yMDApO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1mdWxsKTtcclxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14cyk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIEJPVMODwpNOIERFIFJFU0VSVkFcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4uY2FyZC1hY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWdyYXktMjAwKTtcclxufVxyXG5cclxuLmJ0bi1yZXNlcnZhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy00KSB2YXIoLS1zcGFjaW5nLTYpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktNjAwKSwgdmFyKC0tcHJpbWFyeS03MDApKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uYnRuLXJlc2VydmFyOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogLTEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgdHJhbnNwYXJlbnQpO1xyXG4gIHRyYW5zaXRpb246IGxlZnQgMC41cztcclxufVxyXG5cclxuLmJ0bi1yZXNlcnZhcjpob3Zlcjo6YmVmb3JlIHtcclxuICBsZWZ0OiAxMDAlO1xyXG59XHJcblxyXG4uYnRuLXJlc2VydmFyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5LTcwMCksIHZhcigtLXByaW1hcnktODAwKSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcblxyXG4uYnRuLXJlc2VydmFyOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTQwMCk7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB0cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbi5idG4tcmVzZXJ2YXI6ZGlzYWJsZWQ6OmJlZm9yZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogRXN0YWRvcyBlc3BlY8ODwq1maWNvcyAqL1xyXG4uYnRuLW5vLWRpc3BvbmlibGUge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWVycm9yKSwgI2RjMjYyNik7XHJcbn1cclxuXHJcbi5idG4tbWFudGVuaW1pZW50byB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0td2FybmluZyksICNkOTc3MDYpO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgUkVTUE9OU0lWRSBBREpVU1RNRU5UU1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MzlweCkge1xyXG4gIC5lc3BhY2lvLWluZm8tZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcblxyXG4gIC5lc3BhY2lvLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy00KTtcclxuICB9XHJcblxyXG4gIC5lc3BhY2lvLWltYWdlbiB7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XHJcbiAgLmVzcGFjaW8taW1hZ2VuIHtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgU0NST0xMQkFSIENVU1RPTVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5lc3BhY2lvcy1ncmlkOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDZweDtcclxufVxyXG5cclxuLmVzcGFjaW9zLWdyaWQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTEwMCk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcclxufVxyXG5cclxuLmVzcGFjaW9zLWdyaWQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTMwMCk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcclxufVxyXG5cclxuLmVzcGFjaW9zLWdyaWQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTQwMCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4791:
/*!**************************************************************!*\
  !*** ./src/app/filtros-espacio/filtros-espacio.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FiltrosEspacioComponent: () => (/* binding */ FiltrosEspacioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);









function FiltrosEspacioComponent_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ubicacion_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ubicacion_r1.zona);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ubicacion_r1.zona, " ");
  }
}
function FiltrosEspacioComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tipo_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", tipo_r2.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tipo_r2.nombre, " ");
  }
}
function FiltrosEspacioComponent_label_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 29)(1, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function FiltrosEspacioComponent_label_41_Template_input_change_1_listener() {
      const servicio_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.toggleServicio(servicio_r4.nombre));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const servicio_r4 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r4.isServicioSeleccionado(servicio_r4.nombre));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](servicio_r4.nombre);
  }
}
function FiltrosEspacioComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32)(1, "p", 33)(2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.totalResultados);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.totalResultados === 1 ? "espacio encontrado" : "espacios encontrados", " ");
  }
}
class FiltrosEspacioComponent {
  http;
  filtrosAplicados = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  totalResultados;
  // Estado de filtros móviles
  mostrarFiltros = false;
  // Datos dinámicos desde el backend
  tiposDisponibles = [];
  serviciosDisponibles = [];
  ubiicaciones = [];
  // Filtros actuales
  filtros = {
    zona: '',
    tipo: '',
    capacidadMinima: null,
    precioMinimo: null,
    precioMaximo: null,
    servicios: []
  };
  // Servicios seleccionados para checkboxes
  serviciosSeleccionados = new Set();
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.cargarTiposDisponibles();
    this.cargarServiciosDisponibles();
    this.cargarUbicaciones();
  }
  /**
   * Carga los tipos de espacios disponibles desde el backend
   */
  cargarTiposDisponibles() {
    this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/componente/tipos-espacio`).subscribe({
      next: tipos => {
        this.tiposDisponibles = tipos;
      },
      error: error => {
        console.error('Error al cargar tipos:', error);
      }
    });
  }
  cargarUbicaciones() {
    this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/componente/ubicaciones`).subscribe({
      next: ubicacion => {
        this.ubiicaciones = ubicacion;
      },
      error: error => {
        console.error('Error al cargar ubicaciones:', error);
      }
    });
  }
  /**
   * Carga los servicios disponibles desde el backend
   */
  cargarServiciosDisponibles() {
    this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/componente/servicios`).subscribe({
      next: servicios => {
        this.serviciosDisponibles = servicios;
      },
      error: error => {
        console.error('Error al cargar servicios:', error);
      }
    });
  }
  /**
   * Toggle de servicio en el filtro
   */
  toggleServicio(servicio) {
    if (this.serviciosSeleccionados.has(servicio)) {
      this.serviciosSeleccionados.delete(servicio);
    } else {
      this.serviciosSeleccionados.add(servicio);
    }
    // Actualizar array de filtros
    this.filtros.servicios = Array.from(this.serviciosSeleccionados);
  }
  /**
   * Verifica si un servicio está seleccionado
   */
  isServicioSeleccionado(servicio) {
    return this.serviciosSeleccionados.has(servicio);
  }
  /**
   * Toggle filtros en móviles
   */
  toggleFiltros() {
    this.mostrarFiltros = !this.mostrarFiltros;
  }
  /**
   * Aplica los filtros actuales
   */
  aplicarFiltros() {
    // Validar rangos de precio
    if (this.filtros.precioMinimo && this.filtros.precioMaximo) {
      if (this.filtros.precioMinimo > this.filtros.precioMaximo) {
        alert('El precio mínimo no puede ser mayor al precio máximo');
        return;
      }
    }
    // Validar capacidad
    if (this.filtros.capacidadMinima && this.filtros.capacidadMinima < 1) {
      alert('La capacidad mínima debe ser al menos 1 persona');
      return;
    }
    // Emitir filtros
    this.filtrosAplicados.emit({
      ...this.filtros
    });
    // Cerrar filtros en móviles
    if (window.innerWidth < 1024) {
      this.mostrarFiltros = false;
    }
  }
  /**
   * Limpia todos los filtros
   */
  limpiarFiltros() {
    this.filtros = {
      zona: '',
      tipo: '',
      capacidadMinima: null,
      precioMinimo: null,
      precioMaximo: null,
      servicios: []
    };
    this.serviciosSeleccionados.clear();
    this.aplicarFiltros();
  }
  /**
   * Verifica si hay filtros activos
   */
  hayFiltrosActivos() {
    return !!(this.filtros.zona || this.filtros.tipo || this.filtros.capacidadMinima || this.filtros.precioMinimo || this.filtros.precioMaximo || this.filtros.servicios.length > 0);
  }
  /**
   * Maneja cambios en tiempo real para algunos filtros
   */
  onFiltroChange() {
    // Aplicar automáticamente en desktop para mejor UX
    if (window.innerWidth >= 1024) {
      setTimeout(() => {
        this.aplicarFiltros();
      }, 300);
    }
  }
  static ɵfac = function FiltrosEspacioComponent_Factory(t) {
    return new (t || FiltrosEspacioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FiltrosEspacioComponent,
    selectors: [["app-filtros-espacio"]],
    inputs: {
      totalResultados: "totalResultados"
    },
    outputs: {
      filtrosAplicados: "filtrosAplicados"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 48,
    vars: 13,
    consts: [[1, "filtros-container"], [1, "filtros-toggle", 3, "click"], [1, "filtros-title"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "transition-transform"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], [1, "filtros-content"], [1, "filtros-header"], [1, "filtros-body"], [1, "form-group"], ["for", "tipoZona", 1, "form-label"], ["id", "tipoZona", "name", "tipoZona", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "tipoEspacio", 1, "form-label"], ["id", "tipoEspacio", "name", "tipoEspacio", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "capacidad", 1, "form-label"], ["type", "number", "id", "capacidad", "placeholder", "Ej: 5 personas", "name", "capacidad", "min", "1", "max", "50", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-label"], [1, "precio-range"], [1, "precio-input"], ["type", "number", "placeholder", "M\u00EDnimo", "name", "precioMin", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "M\u00E1ximo", "name", "precioMax", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "servicios-group"], ["class", "checkbox-item", 4, "ngFor", "ngForOf"], ["class", "resultados-count", 4, "ngIf"], [1, "filtros-actions"], ["type", "button", 1, "btn-aplicar", 3, "click"], ["type", "button", 1, "btn-limpiar", 3, "click"], [3, "value"], [1, "checkbox-item"], ["type", "checkbox", 1, "checkbox-input", 3, "change", "checked"], [1, "checkbox-label"], [1, "resultados-count"], [1, "count-text"], [1, "count-number"]],
    template: function FiltrosEspacioComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "aside", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FiltrosEspacioComponent_Template_button_click_1_listener() {
          return ctx.toggleFiltros();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Filtros de B\u00FAsqueda");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "header", 6)(8, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Selecciona un filtro");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Ubicacion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function FiltrosEspacioComponent_Template_select_ngModelChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.filtros.zona, $event) || (ctx.filtros.zona = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Todos los tipos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, FiltrosEspacioComponent_option_17_Template, 2, 2, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8)(19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Tipo de espacio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function FiltrosEspacioComponent_Template_select_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.filtros.tipo, $event) || (ctx.filtros.tipo = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Todos los tipos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, FiltrosEspacioComponent_option_24_Template, 2, 2, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 8)(26, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Capacidad m\u00EDnima");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function FiltrosEspacioComponent_Template_input_ngModelChange_28_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.filtros.capacidadMinima, $event) || (ctx.filtros.capacidadMinima = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 8)(30, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Rango de precio (por hora)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 18)(33, "div", 19)(34, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function FiltrosEspacioComponent_Template_input_ngModelChange_34_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.filtros.precioMinimo, $event) || (ctx.filtros.precioMinimo = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 19)(36, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function FiltrosEspacioComponent_Template_input_ngModelChange_36_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.filtros.precioMaximo, $event) || (ctx.filtros.precioMaximo = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 8)(38, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Servicios incluidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, FiltrosEspacioComponent_label_41_Template, 4, 2, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, FiltrosEspacioComponent_div_42_Template, 5, 2, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 25)(44, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FiltrosEspacioComponent_Template_button_click_44_listener() {
          return ctx.aplicarFiltros();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Aplicar Filtros ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FiltrosEspacioComponent_Template_button_click_46_listener() {
          return ctx.limpiarFiltros();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Limpiar Filtros ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("rotate-180", ctx.mostrarFiltros);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx.mostrarFiltros);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.filtros.zona);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.ubiicaciones);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.filtros.tipo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tiposDisponibles);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.filtros.capacidadMinima);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.filtros.precioMinimo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.filtros.precioMaximo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.serviciosDisponibles);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.totalResultados !== undefined);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClientModule],
    styles: ["\n\n\n\n\n.filtros-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-2xl);\n  border: 1px solid var(--gray-200);\n  box-shadow: var(--shadow-sm);\n  overflow: hidden;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n\n\n@media (max-width: 1023px) {\n  .filtros-container[_ngcontent-%COMP%] {\n    margin-bottom: var(--spacing-4);\n  }\n  \n  .filtros-toggle[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: between;\n    width: 100%;\n    padding: var(--spacing-4);\n    background: var(--primary-50);\n    border: none;\n    cursor: pointer;\n    font-weight: 600;\n    color: var(--primary-700);\n  }\n  \n  .filtros-content[_ngcontent-%COMP%] {\n    display: none;\n  }\n  \n  .filtros-content.show[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n\n\n@media (min-width: 1024px) {\n  .filtros-container[_ngcontent-%COMP%] {\n    position: sticky;\n    top: var(--spacing-6);\n  }\n  \n  .filtros-toggle[_ngcontent-%COMP%] {\n    display: none;\n  }\n  \n  .filtros-content[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n\n\n\n\n\n.filtros-header[_ngcontent-%COMP%] {\n  padding: var(--spacing-6);\n  background: linear-gradient(135deg, var(--primary-50) 0%, var(--primary-100) 100%);\n  border-bottom: 1px solid var(--primary-200);\n}\n\n.filtros-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  font-weight: 700;\n  color: var(--primary-800);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-2);\n}\n\n.filtros-title[_ngcontent-%COMP%]::before {\n  font-size: var(--font-size-xl);\n}\n\n\n\n\n\n\n.filtros-body[_ngcontent-%COMP%] {\n  padding: var(--spacing-6);\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-6);\n}\n\n.form-group[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--gray-700);\n  margin-bottom: var(--spacing-3);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n\n\n\n\n\n\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  \n\n  border: 2px solid var(--gray-200);\n  border-radius: var(--radius-lg);\n  font-size: var(--font-size-sm);\n  transition: all 0.2s ease;\n  background: white;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-500);\n  box-shadow: 0 0 0 3px rgb(59 130 246 / 0.1);\n}\n\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: var(--gray-400);\n}\n\n\n\nselect.form-control[_ngcontent-%COMP%] {\n  cursor: pointer;\n \n\n  background-position: right 0.5rem center;\n  background-repeat: no-repeat;\n  background-size: 1.5em 1.5em;\n  padding-right: 2.5rem;\n}\n\n\n\n\n\n\n.servicios-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-3);\n}\n\n.checkbox-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-3);\n  padding: var(--spacing-2);\n  border-radius: var(--radius-lg);\n  transition: background-color 0.2s ease;\n  cursor: pointer;\n}\n\n.checkbox-item[_ngcontent-%COMP%]:hover {\n  background: var(--gray-50);\n}\n\n.checkbox-input[_ngcontent-%COMP%] {\n  width: 1.125rem;\n  height: 1.125rem;\n  border: 2px solid var(--gray-300);\n  border-radius: var(--radius-sm);\n  background: white;\n  cursor: pointer;\n  position: relative;\n  -webkit-appearance: none;\n          appearance: none;\n  transition: all 0.2s ease;\n}\n\n.checkbox-input[_ngcontent-%COMP%]:checked {\n  background: var(--primary-600);\n  border-color: var(--primary-600);\n}\n\n.checkbox-input[_ngcontent-%COMP%]:checked::after {\n  content: \"\u2713\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-size: 0.75rem;\n  font-weight: bold;\n}\n\n.checkbox-label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  color: var(--gray-700);\n  cursor: pointer;\n  margin: 0;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n\n\n\n\n\n.precio-range[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--spacing-3);\n}\n\n.precio-input[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.precio-input[_ngcontent-%COMP%]::before {\n  content: \"$\";\n  position: absolute;\n  left: var(--spacing-3);\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--gray-500);\n  font-weight: 500;\n  z-index: 1;\n}\n\n.precio-input[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-left: 1.75rem;\n}\n\n\n\n\n\n\n.filtros-actions[_ngcontent-%COMP%] {\n  padding: var(--spacing-6);\n  border-top: 1px solid var(--gray-200);\n  background: var(--gray-50);\n}\n\n.btn-aplicar[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: var(--spacing-4) var(--spacing-6);\n  background: linear-gradient(135deg, var(--primary-600), var(--primary-700));\n  color: white;\n  border: none;\n  border-radius: var(--radius-lg);\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  position: relative;\n  overflow: hidden;\n}\n\n.btn-aplicar[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);\n  transition: left 0.5s;\n}\n\n.btn-aplicar[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n\n.btn-aplicar[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, var(--primary-700), var(--primary-800));\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);\n}\n\n.btn-aplicar[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n\n\n\n\n\n\n.resultados-count[_ngcontent-%COMP%] {\n  padding: var(--spacing-4) var(--spacing-6);\n  background: var(--primary-50);\n  border-top: 1px solid var(--primary-200);\n  text-align: center;\n}\n\n.count-text[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  color: var(--primary-700);\n  font-weight: 500;\n}\n\n.count-number[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--primary-800);\n}\n\n\n\n\n\n\n.btn-limpiar[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: var(--spacing-3) var(--spacing-4);\n  background: transparent;\n  color: var(--gray-600);\n  border: 1px solid var(--gray-300);\n  border-radius: var(--radius-lg);\n  font-size: var(--font-size-xs);\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  margin-top: var(--spacing-3);\n}\n\n.btn-limpiar[_ngcontent-%COMP%]:hover {\n  background: var(--gray-50);\n  border-color: var(--gray-400);\n  color: var(--gray-700);\n}\n\n\n\n\n\n\n@media (max-width: 640px) {\n  .filtros-header[_ngcontent-%COMP%], .filtros-body[_ngcontent-%COMP%], .filtros-actions[_ngcontent-%COMP%] {\n    padding: var(--spacing-4);\n  }\n  \n  .precio-range[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  \n  .form-group[_ngcontent-%COMP%] {\n    margin-bottom: var(--spacing-4);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmlsdHJvcy1lc3BhY2lvL2ZpbHRyb3MtZXNwYWNpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztrREFFa0Q7O0FBRWxEO0VBQ0UsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxpQ0FBaUM7RUFDakMsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQix3QkFBbUI7RUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBLGdDQUFnQztBQUNoQztFQUNFO0lBQ0UsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBLDBCQUEwQjtBQUMxQjtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTs7a0RBRWtEOztBQUVsRDtFQUNFLHlCQUF5QjtFQUN6QixrRkFBa0Y7RUFDbEYsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBOztrREFFa0Q7O0FBRWxEO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLCtCQUErQjtFQUMvQix5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ZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLHNCQUFzQjtBQUN4Qjs7QUFFQTs7a0RBRWtEOztBQUVsRDtFQUNFOzs7SUFHRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwrQkFBK0I7RUFDakM7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBGSUxUUk9TIFNJREVCQVIgLSBSRVNQT05TSVZFIERFU0lHTlxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5maWx0cm9zLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTJ4bCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheS0yMDApO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4vKiBNb2JpbGU6IEZpbHRyb3MgY29sYXBzYWJsZXMgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xyXG4gIC5maWx0cm9zLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLTQpO1xyXG4gIH1cclxuICBcclxuICAuZmlsdHJvcy10b2dnbGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctNCk7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LTUwKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS03MDApO1xyXG4gIH1cclxuICBcclxuICAuZmlsdHJvcy1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5maWx0cm9zLWNvbnRlbnQuc2hvdyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi8qIERlc2t0b3A6IFNpZGViYXIgZmlqbyAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgLmZpbHRyb3MtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IHZhcigtLXNwYWNpbmctNik7XHJcbiAgfVxyXG4gIFxyXG4gIC5maWx0cm9zLXRvZ2dsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAuZmlsdHJvcy1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIEhFQURFUiBERSBGSUxUUk9TXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLmZpbHRyb3MtaGVhZGVyIHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLTYpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktNTApIDAlLCB2YXIoLS1wcmltYXJ5LTEwMCkgMTAwJSk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktMjAwKTtcclxufVxyXG5cclxuLmZpbHRyb3MtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxnKTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LTgwMCk7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IHZhcigtLXNwYWNpbmctMik7XHJcbn1cclxuXHJcbi5maWx0cm9zLXRpdGxlOjpiZWZvcmUge1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhsKTtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIENPTlRFTklETyBERSBGSUxUUk9TXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLmZpbHRyb3MtYm9keSB7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy02KTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctNik7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogdmFyKC0tZ3JheS03MDApO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctMyk7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgSU5QVVRTIFkgU0VMRUNUT1JFU1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8qKnBhZGRpbmc6IHZhcigtLXNwYWNpbmctMyk7KiovXHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JheS0yMDApO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTUwMCk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYig1OSAxMzAgMjQ2IC8gMC4xKTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1ncmF5LTQwMCk7XHJcbn1cclxuXHJcbi8qIFNlbGVjdCBlc3BlY8ODwq1maWNvICovXHJcbnNlbGVjdC5mb3JtLWNvbnRyb2wge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuIC8qKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nbm9uZScgdmlld0JveD0nMCAwIDIwIDIwJyUzZSUzY3BhdGggc3Ryb2tlPSclMjM2YjcyODAnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPScxLjUnIGQ9J202IDggNCA0IDQtNCcvJTNlJTNjL3N2ZyUzZVwiKTsqKi9cclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAwLjVyZW0gY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxLjVlbSAxLjVlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAyLjVyZW07XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBDSEVDS0JPWEVTIERFIFNFUlZJQ0lPU1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5zZXJ2aWNpb3MtZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IHZhcigtLXNwYWNpbmctMyk7XHJcbn1cclxuXHJcbi5jaGVja2JveC1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLTMpO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctMik7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jaGVja2JveC1pdGVtOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTUwKTtcclxufVxyXG5cclxuLmNoZWNrYm94LWlucHV0IHtcclxuICB3aWR0aDogMS4xMjVyZW07XHJcbiAgaGVpZ2h0OiAxLjEyNXJlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ncmF5LTMwMCk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLmNoZWNrYm94LWlucHV0OmNoZWNrZWQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktNjAwKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktNjAwKTtcclxufVxyXG5cclxuLmNoZWNrYm94LWlucHV0OmNoZWNrZWQ6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIsOiwpzCk1wiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNoZWNrYm94LWxhYmVsIHtcclxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XHJcbiAgY29sb3I6IHZhcigtLWdyYXktNzAwKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgUkFOR08gREUgUFJFQ0lPU1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5wcmVjaW8tcmFuZ2Uge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdhcDogdmFyKC0tc3BhY2luZy0zKTtcclxufVxyXG5cclxuLnByZWNpby1pbnB1dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucHJlY2lvLWlucHV0OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiJFwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiB2YXIoLS1zcGFjaW5nLTMpO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBjb2xvcjogdmFyKC0tZ3JheS01MDApO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnByZWNpby1pbnB1dCAuZm9ybS1jb250cm9sIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEuNzVyZW07XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBCT1TDg8KTTiBBUExJQ0FSIEZJTFRST1NcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4uZmlsdHJvcy1hY3Rpb25zIHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLTYpO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ncmF5LTIwMCk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS01MCk7XHJcbn1cclxuXHJcbi5idG4tYXBsaWNhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy00KSB2YXIoLS1zcGFjaW5nLTYpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktNjAwKSwgdmFyKC0tcHJpbWFyeS03MDApKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uYnRuLWFwbGljYXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAtMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCwgcmdiYSgyNTUsMjU1LDI1NSwwLjIpLCB0cmFuc3BhcmVudCk7XHJcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjVzO1xyXG59XHJcblxyXG4uYnRuLWFwbGljYXI6aG92ZXI6OmJlZm9yZSB7XHJcbiAgbGVmdDogMTAwJTtcclxufVxyXG5cclxuLmJ0bi1hcGxpY2FyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5LTcwMCksIHZhcigtLXByaW1hcnktODAwKSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggcmdiYSgzNywgOTksIDIzNSwgMC4zKTtcclxufVxyXG5cclxuLmJ0bi1hcGxpY2FyOmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgQ09OVEFET1IgREUgUkVTVUxUQURPU1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5yZXN1bHRhZG9zLWNvdW50IHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLTQpIHZhcigtLXNwYWNpbmctNik7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS01MCk7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktMjAwKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb3VudC10ZXh0IHtcclxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktNzAwKTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uY291bnQtbnVtYmVyIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LTgwMCk7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBCT1TDg8KTTiBMSU1QSUFSIEZJTFRST1NcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4uYnRuLWxpbXBpYXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctMykgdmFyKC0tc3BhY2luZy00KTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogdmFyKC0tZ3JheS02MDApO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXktMzAwKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzKTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIG1hcmdpbi10b3A6IHZhcigtLXNwYWNpbmctMyk7XHJcbn1cclxuXHJcbi5idG4tbGltcGlhcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS01MCk7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncmF5LTQwMCk7XHJcbiAgY29sb3I6IHZhcigtLWdyYXktNzAwKTtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIFJFU1BPTlNJVkUgQURKVVNUTUVOVFNcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAuZmlsdHJvcy1oZWFkZXIsXHJcbiAgLmZpbHRyb3MtYm9keSxcclxuICAuZmlsdHJvcy1hY3Rpb25zIHtcclxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctNCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmVjaW8tcmFuZ2Uge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctNCk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1832:
/*!**********************************************************************!*\
  !*** ./src/app/form-editar-reserva/form-editar-reserva.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormEditarReservaComponent: () => (/* binding */ FormEditarReservaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);





class FormEditarReservaComponent {
  // recibimos que lo enviamos
  reservaId = 0;
  espacioId = 0;
  espacioNombre = '';
  fechaInicioOriginal = '';
  fechaFinOriginal = '';
  cerrarModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  reservaActualizada = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  fechaInicio = '';
  fechaFin = '';
  horaInicio = '';
  horaFin = '';
  accionReserva = 'no-cancelar';
  mostrarLogin = false;
  ngOnInit() {
    // Inicializar fechas y horas
    if (this.fechaInicioOriginal) {
      const inicio = new Date(this.fechaInicioOriginal);
      this.fechaInicio = this.formatearFecha(inicio);
      this.horaInicio = this.formatearHora(inicio);
    }
    if (this.fechaFinOriginal) {
      const fin = new Date(this.fechaFinOriginal);
      this.fechaFin = this.formatearFecha(fin);
      this.horaFin = this.formatearHora(fin);
    }
  }
  // formateamos la fecha (YYYY-MM-DD)
  formatearFecha(fecha) {
    const año = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const dia = String(fecha.getDate()).padStart(2, '0');
    return `${año}-${mes}-${dia}`;
  }
  //formateamos la hora a formato (HH:mm)
  formatearHora(fecha) {
    const horas = String(fecha.getHours()).padStart(2, '0');
    const minutos = String(fecha.getMinutes()).padStart(2, '0');
    return `${horas}:${minutos}`;
  }
  cerrar() {
    this.cerrarModal.emit();
  }
  reservar() {
    if (this.accionReserva === 'cancelar') {
      this.cancelarReserva();
    } else {
      this.actualizarReserva();
    }
  }
  cancelarReserva() {
    this.reservaActualizada.emit({
      accion: 'cancelar',
      reservaId: this.reservaId,
      espacioId: this.espacioId
    });
    this.cerrar();
  }
  convertirHora12h(hora24) {
    const [horas, minutos] = hora24.split(':').map(Number);
    const horas12 = horas % 12 || 12;
    return `${horas12}:${minutos.toString().padStart(2, '0')}`;
  }
  actualizarReserva() {
    const datosActualizados = {
      accion: 'actualizar',
      reservaId: this.reservaId,
      espacioId: this.espacioId,
      fechaInicio: this.fechaInicio,
      fechaFin: this.fechaFin,
      horaEntrada: this.convertirHora12h(this.horaInicio),
      horaSalida: this.convertirHora12h(this.horaFin)
    };
    this.reservaActualizada.emit(datosActualizados);
    this.cerrar();
  }
  static ɵfac = function FormEditarReservaComponent_Factory(t) {
    return new (t || FormEditarReservaComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FormEditarReservaComponent,
    selectors: [["app-form-editar-reserva"]],
    inputs: {
      reservaId: "reservaId",
      espacioId: "espacioId",
      espacioNombre: "espacioNombre",
      fechaInicioOriginal: "fechaInicioOriginal",
      fechaFinOriginal: "fechaFinOriginal"
    },
    outputs: {
      cerrarModal: "cerrarModal",
      reservaActualizada: "reservaActualizada"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 59,
    vars: 7,
    consts: [["reservaForm", "ngForm"], [1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Cerrar", 1, "btn-close", 3, "click"], ["width", "20", "height", "20", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "modal-body"], [3, "ngSubmit"], [1, "form-section"], [1, "section-title"], [1, "form-row"], [1, "form-group"], ["for", "fechaInicio", 1, "form-label"], ["type", "date", "id", "fechaInicio", "name", "fechaInicio", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "fechaFin", 1, "form-label"], ["type", "date", "id", "fechaFin", "name", "fechaFin", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "horaInicio", 1, "form-label"], ["type", "time", "id", "horaInicio", "name", "horaInicio", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "horaFin", 1, "form-label"], ["type", "time", "id", "horaFin", "name", "horaFin", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "payment-options"], [1, "radio-option"], ["type", "radio", "name", "accionReserva", "value", "no-cancelar", 3, "ngModelChange", "ngModel"], [1, "radio-label"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], ["type", "radio", "name", "accionReserva", "value", "cancelar", 3, "ngModelChange", "ngModel"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "modal-actions"], ["type", "button", 1, "btn-modal", "btn-cancelar", 3, "click"], ["type", "submit", 1, "btn-modal", "btn-confirmar", 3, "click"], [1, "btn-content"], ["width", "16", "height", "16", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"]],
    template: function FormEditarReservaComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormEditarReservaComponent_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.cerrar());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormEditarReservaComponent_Template_div_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.stopPropagation());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header", 3)(3, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormEditarReservaComponent_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.cerrar());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8)(9, "form", 9, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormEditarReservaComponent_Template_form_ngSubmit_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.reservar());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10)(12, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Fechas de Reserva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12)(15, "div", 13)(16, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Fecha de inicio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function FormEditarReservaComponent_Template_input_ngModelChange_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.fechaInicio, $event) || (ctx.fechaInicio = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13)(20, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Fecha de fin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function FormEditarReservaComponent_Template_input_ngModelChange_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.fechaFin, $event) || (ctx.fechaFin = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10)(24, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Horario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12)(27, "div", 13)(28, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Hora de inicio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function FormEditarReservaComponent_Template_input_ngModelChange_30_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.horaInicio, $event) || (ctx.horaInicio = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13)(32, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Hora de fin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function FormEditarReservaComponent_Template_input_ngModelChange_34_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.horaFin, $event) || (ctx.horaFin = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10)(36, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Acci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22)(39, "label", 23)(40, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function FormEditarReservaComponent_Template_input_ngModelChange_40_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.accionReserva, $event) || (ctx.accionReserva = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " No cancelar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 23)(46, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function FormEditarReservaComponent_Template_input_ngModelChange_46_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.accionReserva, $event) || (ctx.accionReserva = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Cancelar reserva ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 29)(52, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormEditarReservaComponent_Template_button_click_52_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.cerrar());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Cerrar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormEditarReservaComponent_Template_button_click_54_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.reservar());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "svg", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Confirmar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Gestionar Reserva ", ctx.espacioNombre || "Espacio", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.fechaInicio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.fechaFin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.horaInicio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.horaFin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.accionReserva);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.accionReserva);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
    styles: ["\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  display: contents;\n}\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n\n\n.modal-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-2xl);\n  box-shadow: var(--shadow-xl);\n  width: 100%;\n  max-width: 520px;\n  max-height: 90vh;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_slideIn 0.2s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateY(-10px) scale(0.98);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n  }\n}\n\n\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: var(--spacing-6);\n  background: linear-gradient(135deg, var(--primary-50) 0%, var(--primary-100) 100%);\n  border-bottom: 1px solid var(--primary-200);\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n  font-weight: 700;\n  color: var(--primary-800);\n  margin: 0;\n}\n\n.btn-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: var(--spacing-2);\n  border-radius: var(--radius-lg);\n  color: var(--gray-500);\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.btn-close[_ngcontent-%COMP%]:hover {\n  background: var(--gray-100);\n  color: var(--gray-700);\n}\n\n\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: var(--spacing-6);\n  max-height: calc(90vh - 200px);\n  overflow-y: auto;\n}\n\n\n\n\n\n\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-6);\n}\n\n.section-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--primary-700);\n  margin-bottom: var(--spacing-4);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-2);\n}\n\n.section-title[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 3px;\n  height: 1rem;\n  background: var(--primary-600);\n  border-radius: var(--radius-full);\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--spacing-4);\n  grid-template-columns: 1fr;\n}\n\n@media (min-width: 480px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--gray-700);\n  margin-bottom: var(--spacing-2);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-1);\n}\n\n.required[_ngcontent-%COMP%] {\n  color: var(--error);\n  font-weight: 700;\n}\n\n.form-input[_ngcontent-%COMP%] {\n  padding: var(--spacing-3);\n  border: 2px solid var(--gray-200);\n  border-radius: var(--radius-lg);\n  font-size: var(--font-size-sm);\n  transition: all 0.2s ease;\n  background: white;\n}\n\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-500);\n  box-shadow: 0 0 0 3px rgb(59 130 246 / 0.1);\n}\n\n\n\n.input-valid[_ngcontent-%COMP%] {\n  border-color: var(--success) !important;\n  background: rgba(16, 185, 129, 0.02);\n}\n\n.input-valid[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1) !important;\n}\n\n.input-invalid[_ngcontent-%COMP%] {\n  border-color: var(--error) !important;\n  background: rgba(239, 68, 68, 0.02);\n}\n\n.input-invalid[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;\n}\n\n\n\n.error-message[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--font-size-xs);\n  color: var(--error);\n  margin-top: var(--spacing-2);\n  animation: _ngcontent-%COMP%_slideDown 0.2s ease-out;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-1);\n}\n\n.error-message[_ngcontent-%COMP%]::before {\n  content: \"\u26A0\";\n  font-size: 14px;\n}\n\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n\n\n\n\n\n.payment-options[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-3);\n  flex-wrap: wrap;\n}\n\n.radio-option[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 140px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  padding: var(--spacing-3);\n  border: 2px solid var(--gray-200);\n  border-radius: var(--radius-lg);\n  transition: all 0.2s ease;\n}\n\n.radio-option[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-400);\n  background: var(--primary-50);\n}\n\n.radio-option[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%] {\n  margin-right: var(--spacing-2);\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n  accent-color: var(--primary-600);\n}\n\n.radio-option[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked    + .radio-label[_ngcontent-%COMP%] {\n  color: var(--primary-700);\n  font-weight: 600;\n}\n\n.radio-option[_ngcontent-%COMP%]:has(input[type=\"radio\"]:checked) {\n  border-color: var(--primary-600);\n  background: var(--primary-50);\n}\n\n.radio-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-2);\n  font-size: var(--font-size-sm);\n  color: var(--gray-700);\n}\n\n.radio-label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--gray-500);\n}\n\n\n\n\n\n\n.reservation-summary[_ngcontent-%COMP%] {\n  background: var(--gray-50);\n  border: 1px solid var(--gray-200);\n  border-radius: var(--radius-xl);\n  padding: var(--spacing-5);\n  margin-bottom: var(--spacing-4);\n}\n\n.summary-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--spacing-4);\n}\n\n.summary-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-base);\n  font-weight: 600;\n  color: var(--gray-800);\n  margin: 0;\n}\n\n.btn-limpiar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-2);\n  padding: var(--spacing-2) var(--spacing-3);\n  font-size: var(--font-size-xs);\n  font-weight: 500;\n  color: var(--gray-600);\n  background: white;\n  border: 1px solid var(--gray-300);\n  border-radius: var(--radius-lg);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.btn-limpiar[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--gray-100);\n  color: var(--gray-700);\n  border-color: var(--gray-400);\n}\n\n.btn-limpiar[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.btn-limpiar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n\n.summary-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-3);\n}\n\n.summary-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.summary-label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  color: var(--gray-600);\n}\n\n.summary-value[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--gray-800);\n}\n\n.text-error[_ngcontent-%COMP%] {\n  color: var(--error) !important;\n}\n\n.summary-total[_ngcontent-%COMP%] {\n  padding-top: var(--spacing-3);\n  border-top: 1px solid var(--gray-200);\n  margin-top: var(--spacing-2);\n}\n\n.summary-total[_ngcontent-%COMP%]   .summary-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--gray-800);\n}\n\n.summary-total[_ngcontent-%COMP%]   .summary-value[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  color: var(--primary-600);\n  font-weight: 700;\n}\n\n\n\n\n\n\n.help-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--spacing-3);\n  padding: var(--spacing-3);\n  background: var(--warning);\n  background: linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(251, 191, 36, 0.1) 100%);\n  border: 1px solid rgba(245, 158, 11, 0.3);\n  border-radius: var(--radius-lg);\n  margin-bottom: var(--spacing-4);\n  animation: _ngcontent-%COMP%_slideDown 0.2s ease-out;\n}\n\n.help-message[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: var(--warning);\n  margin-top: 2px;\n}\n\n.help-message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  color: #92400e;\n  line-height: 1.5;\n}\n\n\n\n\n\n\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-3);\n  justify-content: flex-end;\n  padding: var(--spacing-6);\n  border-top: 1px solid var(--gray-200);\n  background: var(--gray-50);\n}\n\n.btn-modal[_ngcontent-%COMP%] {\n  padding: var(--spacing-3) var(--spacing-6);\n  border-radius: var(--radius-lg);\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: none;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  min-height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.btn-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-2);\n}\n\n.btn-cancelar[_ngcontent-%COMP%] {\n  background: white;\n  color: var(--gray-600);\n  border: 1px solid var(--gray-300);\n}\n\n.btn-cancelar[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--gray-50);\n  color: var(--gray-700);\n  border-color: var(--gray-400);\n}\n\n.btn-confirmar[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--primary-600), var(--primary-700));\n  color: white;\n  position: relative;\n}\n\n.btn-confirmar[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: linear-gradient(135deg, var(--primary-700), var(--primary-800));\n  transform: translateY(-1px);\n  box-shadow: var(--shadow-md);\n}\n\n.btn-confirmar[_ngcontent-%COMP%]:disabled {\n  background: var(--gray-400);\n  cursor: not-allowed;\n  transform: none;\n  opacity: 0.6;\n}\n\n\n\n.spinner[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n  display: inline-block;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n\n\n\n\n\n@media (max-width: 640px) {\n  .modal-container[_ngcontent-%COMP%] {\n    margin: var(--spacing-4);\n    max-width: calc(100vw - 2rem);\n  }\n  \n  .modal-header[_ngcontent-%COMP%], .modal-body[_ngcontent-%COMP%], .modal-actions[_ngcontent-%COMP%] {\n    padding: var(--spacing-4);\n  }\n  \n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  \n  .modal-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  \n  .btn-modal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .payment-options[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .radio-option[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n}\n\n\n\n\n\n\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--gray-100);\n  border-radius: var(--radius-sm);\n}\n\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--gray-300);\n  border-radius: var(--radius-sm);\n}\n\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--gray-400);\n}\n\n\n\n\n\n\n.btn-modal[_ngcontent-%COMP%]:focus-visible, .btn-close[_ngcontent-%COMP%]:focus-visible, .btn-limpiar[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--primary-500);\n  outline-offset: 2px;\n}\n\n.form-input[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n}\n\n\n\n@media (prefers-reduced-motion: reduce) {\n  *[_ngcontent-%COMP%] {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9ybS1yZXNlcnZhL2Zvcm0tcmVzZXJ2YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztrREFFa0Q7O0FBRWxELDBDQUEwQztBQUMxQztFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSx3Q0FBd0M7QUFDeEM7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsT0FBTyxVQUFVLEVBQUU7RUFDbkIsS0FBSyxVQUFVLEVBQUU7QUFDbkI7O0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0UsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFO0lBQ0Usd0NBQXdDO0lBQ3hDLFVBQVU7RUFDWjtFQUNBO0lBQ0UsaUNBQWlDO0lBQ2pDLFVBQVU7RUFDWjtBQUNGOztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixrRkFBa0Y7RUFDbEYsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMkJBQTJC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O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBOztrREFFa0Q7O0FBRWxEOzs7RUFHRSxxQ0FBcUM7RUFDckMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLGtEQUFrRDtBQUNsRDtFQUNFO0lBQ0UscUNBQXFDO0lBQ3JDLHVDQUF1QztJQUN2QyxzQ0FBc0M7RUFDeEM7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBNT0RBTCBERSBSRVNFUlZBIC0gVkVSU0nDg8KTTiBNRUpPUkFEQSBDT04gVVhcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vKiBFbGltaW5hciB3cmFwcGVyIGV4dHJhIGRlbCBjb21wb25lbnRlICovXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBjb250ZW50cztcclxufVxyXG5cclxuLyogT3ZlcmxheSBzaW1wbGUgc2luIGVmZWN0b3MgZXh0cmHDg8Kxb3MgKi9cclxuLm1vZGFsLW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4ycyBlYXNlLW91dDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgdG8geyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuXHJcbi8qIENvbnRhaW5lciBkZWwgbW9kYWwgKi9cclxuLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTJ4bCk7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDUyMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDkwdmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBhbmltYXRpb246IHNsaWRlSW4gMC4ycyBlYXNlLW91dDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZUluIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCkgc2NhbGUoMC45OCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLyogSGVhZGVyIGRlbCBtb2RhbCAqL1xyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctNik7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHJpbWFyeS01MCkgMCUsIHZhcigtLXByaW1hcnktMTAwKSAxMDAlKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS0yMDApO1xyXG59XHJcblxyXG4ubW9kYWwtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhsKTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LTgwMCk7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uYnRuLWNsb3NlIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy0yKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xyXG4gIGNvbG9yOiB2YXIoLS1ncmF5LTUwMCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4tY2xvc2U6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMTAwKTtcclxuICBjb2xvcjogdmFyKC0tZ3JheS03MDApO1xyXG59XHJcblxyXG4vKiBCb2R5IGRlbCBtb2RhbCAqL1xyXG4ubW9kYWwtYm9keSB7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy02KTtcclxuICBtYXgtaGVpZ2h0OiBjYWxjKDkwdmggLSAyMDBweCk7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIEZPUk1VTEFSSU9cclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4uZm9ybS1zZWN0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLTYpO1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZSB7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktNzAwKTtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLTQpO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLTIpO1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiAzcHg7XHJcbiAgaGVpZ2h0OiAxcmVtO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktNjAwKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtZnVsbCk7XHJcbn1cclxuXHJcbi5mb3JtLXJvdyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBnYXA6IHZhcigtLXNwYWNpbmctNCk7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xyXG4gIC5mb3JtLXJvdyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiB2YXIoLS1ncmF5LTcwMCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy0yKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLTEpO1xyXG59XHJcblxyXG4ucmVxdWlyZWQge1xyXG4gIGNvbG9yOiB2YXIoLS1lcnJvcik7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmZvcm0taW5wdXQge1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctMyk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JheS0yMDApO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5mb3JtLWlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS01MDApO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2IoNTkgMTMwIDI0NiAvIDAuMSk7XHJcbn1cclxuXHJcbi8qIEVzdGFkb3MgZGUgdmFsaWRhY2nDg8KzbiAqL1xyXG4uaW5wdXQtdmFsaWQge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc3VjY2VzcykgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxODUsIDEyOSwgMC4wMik7XHJcbn1cclxuXHJcbi5pbnB1dC12YWxpZDpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMTYsIDE4NSwgMTI5LCAwLjEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbnB1dC1pbnZhbGlkIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWVycm9yKSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM5LCA2OCwgNjgsIDAuMDIpO1xyXG59XHJcblxyXG4uaW5wdXQtaW52YWxpZDpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjM5LCA2OCwgNjgsIDAuMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogTWVuc2FqZXMgZGUgZXJyb3IgKi9cclxuLmVycm9yLW1lc3NhZ2Uge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzKTtcclxuICBjb2xvcjogdmFyKC0tZXJyb3IpO1xyXG4gIG1hcmdpbi10b3A6IHZhcigtLXNwYWNpbmctMik7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZURvd24gMC4ycyBlYXNlLW91dDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLTEpO1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIsOiwprCoFwiO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZURvd24ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBNw4PCiVRPRE8gREUgUEFHT1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5wYXltZW50LW9wdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLTMpO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnJhZGlvLW9wdGlvbiB7XHJcbiAgZmxleDogMTtcclxuICBtaW4td2lkdGg6IDE0MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy0zKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ncmF5LTIwMCk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4ucmFkaW8tb3B0aW9uOmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktNDAwKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LTUwKTtcclxufVxyXG5cclxuLnJhZGlvLW9wdGlvbiBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tc3BhY2luZy0yKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIGFjY2VudC1jb2xvcjogdmFyKC0tcHJpbWFyeS02MDApO1xyXG59XHJcblxyXG4ucmFkaW8tb3B0aW9uIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgLnJhZGlvLWxhYmVsIHtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS03MDApO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5yYWRpby1vcHRpb246aGFzKGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkKSB7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTYwMCk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS01MCk7XHJcbn1cclxuXHJcbi5yYWRpby1sYWJlbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogdmFyKC0tc3BhY2luZy0yKTtcclxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XHJcbiAgY29sb3I6IHZhcigtLWdyYXktNzAwKTtcclxufVxyXG5cclxuLnJhZGlvLWxhYmVsIHN2ZyB7XHJcbiAgY29sb3I6IHZhcigtLWdyYXktNTAwKTtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIFJFU1VNRU4gREUgUkVTRVJWQVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5yZXNlcnZhdGlvbi1zdW1tYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTUwKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5LTIwMCk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXhsKTtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLTUpO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctNCk7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLTQpO1xyXG59XHJcblxyXG4uc3VtbWFyeS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogdmFyKC0tZ3JheS04MDApO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmJ0bi1saW1waWFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLTIpO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctMikgdmFyKC0tc3BhY2luZy0zKTtcclxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14cyk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogdmFyKC0tZ3JheS02MDApO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXktMzAwKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uYnRuLWxpbXBpYXI6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMTAwKTtcclxuICBjb2xvcjogdmFyKC0tZ3JheS03MDApO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZ3JheS00MDApO1xyXG59XHJcblxyXG4uYnRuLWxpbXBpYXI6ZGlzYWJsZWQge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4uYnRuLWxpbXBpYXIgc3ZnIHtcclxuICB3aWR0aDogMTRweDtcclxuICBoZWlnaHQ6IDE0cHg7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IHZhcigtLXNwYWNpbmctMyk7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LWxhYmVsIHtcclxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XHJcbiAgY29sb3I6IHZhcigtLWdyYXktNjAwKTtcclxufVxyXG5cclxuLnN1bW1hcnktdmFsdWUge1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XHJcbn1cclxuXHJcbi50ZXh0LWVycm9yIHtcclxuICBjb2xvcjogdmFyKC0tZXJyb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LXRvdGFsIHtcclxuICBwYWRkaW5nLXRvcDogdmFyKC0tc3BhY2luZy0zKTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZ3JheS0yMDApO1xyXG4gIG1hcmdpbi10b3A6IHZhcigtLXNwYWNpbmctMik7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LXRvdGFsIC5zdW1tYXJ5LWxhYmVsIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LXRvdGFsIC5zdW1tYXJ5LXZhbHVlIHtcclxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sZyk7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktNjAwKTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgTUVOU0FKRSBERSBBWVVEQVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5oZWxwLW1lc3NhZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLTMpO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctMyk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0td2FybmluZyk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNDUsIDE1OCwgMTEsIDAuMSkgMCUsIHJnYmEoMjUxLCAxOTEsIDM2LCAwLjEpIDEwMCUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjQ1LCAxNTgsIDExLCAwLjMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy00KTtcclxuICBhbmltYXRpb246IHNsaWRlRG93biAwLjJzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uaGVscC1tZXNzYWdlIHN2ZyB7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgY29sb3I6IHZhcigtLXdhcm5pbmcpO1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5cclxuLmhlbHAtbWVzc2FnZSBzcGFuIHtcclxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XHJcbiAgY29sb3I6ICM5MjQwMGU7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIEFDQ0lPTkVTIERFTCBNT0RBTFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5tb2RhbC1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogdmFyKC0tc3BhY2luZy0zKTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctNik7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWdyYXktMjAwKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTUwKTtcclxufVxyXG5cclxuLmJ0bi1tb2RhbCB7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy0zKSB2YXIoLS1zcGFjaW5nLTYpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICBtaW4taGVpZ2h0OiA0NHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLTIpO1xyXG59XHJcblxyXG4uYnRuLWNhbmNlbGFyIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogdmFyKC0tZ3JheS02MDApO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXktMzAwKTtcclxufVxyXG5cclxuLmJ0bi1jYW5jZWxhcjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS01MCk7XHJcbiAgY29sb3I6IHZhcigtLWdyYXktNzAwKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWdyYXktNDAwKTtcclxufVxyXG5cclxuLmJ0bi1jb25maXJtYXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktNjAwKSwgdmFyKC0tcHJpbWFyeS03MDApKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYnRuLWNvbmZpcm1hcjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHJpbWFyeS03MDApLCB2YXIoLS1wcmltYXJ5LTgwMCkpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xyXG59XHJcblxyXG4uYnRuLWNvbmZpcm1hcjpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS00MDApO1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgdHJhbnNmb3JtOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuLyogU3Bpbm5lciBkZSBsb2FkaW5nICovXHJcbi5zcGlubmVyIHtcclxuICB3aWR0aDogMTRweDtcclxuICBoZWlnaHQ6IDE0cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBhbmltYXRpb246IHNwaW4gMC42cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgUkVTUE9OU0lWRVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gIC5tb2RhbC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiB2YXIoLS1zcGFjaW5nLTQpO1xyXG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gMnJlbSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1oZWFkZXIsXHJcbiAgLm1vZGFsLWJvZHksXHJcbiAgLm1vZGFsLWFjdGlvbnMge1xyXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy00KTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tcm93IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuICBcclxuICAubW9kYWwtYWN0aW9ucyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tbW9kYWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAucGF5bWVudC1vcHRpb25zIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAucmFkaW8tb3B0aW9uIHtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBTQ1JPTExCQVIgQ1VTVE9NXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLm1vZGFsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogNHB4O1xyXG59XHJcblxyXG4ubW9kYWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMTAwKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMzAwKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktNDAwKTtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIEFDQ0VTSUJJTElEQURcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4uYnRuLW1vZGFsOmZvY3VzLXZpc2libGUsXHJcbi5idG4tY2xvc2U6Zm9jdXMtdmlzaWJsZSxcclxuLmJ0bi1saW1waWFyOmZvY3VzLXZpc2libGUge1xyXG4gIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LTUwMCk7XHJcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcclxufVxyXG5cclxuLmZvcm0taW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLyogUmVkdWNpciBhbmltYWNpb25lcyBzaSBlbCB1c3VhcmlvIGxvIHByZWZpZXJlICovXHJcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XHJcbiAgKiB7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6266:
/*!****************************************************!*\
  !*** ./src/app/form-login/form-login.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormLoginComponent: () => (/* binding */ FormLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ 7989);






class FormLoginComponent {
  auth;
  doc;
  isVisibleForm = false;
  visibilityChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  constructor(auth, doc) {
    this.auth = auth;
    this.doc = doc;
  }
  ngOnChanges(changes) {
    if (changes['isVisibleForm']) {
      if (this.isVisibleForm) {
        // modemos la vista al inicio
        // window.scrollTo({ top: 0, behavior: 'smooth' });
        //  desactivamos el scroll
        this.doc.body.classList.add('no-scroll');
      } else {
        // restauramos el scroll del body
        this.doc.body.classList.remove('no-scroll');
      }
    }
  }
  login(form) {
    if (form.valid) {
      const {
        email,
        password,
        remember
      } = form.value;
      const loginData = {
        email,
        password,
        remember
      };
      localStorage.setItem('usserAutenticado', JSON.stringify(loginData));
      this.hideForm();
      alert(`Iniciando sesión para ${loginData.email}`);
    } else {
      alert('Por favor completa todos los campos');
    }
  }
  socialLogin() {
    this.auth.loginWithRedirect();
  }
  hideForm() {
    this.isVisibleForm = false;
    this.doc.body.classList.remove('no-scroll'); // agregamos la clase al body para que no permita hacer scroll mediante se superponga esta ventana
    this.visibilityChange.emit(false); // actualizamos la visibilidad
  }
  static ɵfac = function FormLoginComponent_Factory(t) {
    return new (t || FormLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FormLoginComponent,
    selectors: [["app-form-login"]],
    inputs: {
      isVisibleForm: "isVisibleForm"
    },
    outputs: {
      visibilityChange: "visibilityChange"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 56,
    vars: 1,
    consts: [["loginForm", "ngForm"], [3, "dblclick", "hidden"], [1, "login-container"], [1, "login-side"], [1, "login-header"], ["id", "loginForm", 3, "ngSubmit"], [1, "form-group"], ["for", "email"], [1, "input-wrapper"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "input-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"], ["type", "email", "id", "email", "name", "email", "ngModel", "", "placeholder", "tu@email.com", "required", "", 1, "form-input"], ["for", "password"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"], ["type", "password", "id", "password", "name", "password", "ngModel", "", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", 1, "form-input"], [1, "form-options"], [1, "checkbox-wrapper"], ["type", "checkbox", "id", "remember"], ["for", "remember"], ["href", "#", 1, "forgot-link"], ["type", "submit", 1, "btn-login"], [1, "divider"], [1, "social-login"], [1, "btn-social", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24"], ["fill", "#4285F4", "d", "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"], ["fill", "#34A853", "d", "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"], ["fill", "#FBBC05", "d", "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"], ["fill", "#EA4335", "d", "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"], [1, "signup-link"], ["href", "#", 3, "click"], [1, "brand-side"], [1, "brand-logo"], [1, "brand-tagline"], [1, "brand-illustration"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "illustration-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"]],
    template: function FormLoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function FormLoginComponent_Template_section_dblclick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.hideForm());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bienvenido de nuevo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ingresa tus credenciales para acceddfdsfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 5, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormLoginComponent_Template_form_ngSubmit_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const loginForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.login(loginForm_r2));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6)(11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Correo Electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6)(18, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15)(25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Recordarme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u00BFOlvidaste tu contrase\u00F1a?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Iniciar Sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21)(34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "O contin\u00FAa con");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22)(37, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormLoginComponent_Template_button_click_37_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.socialLogin());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 25)(40, "path", 26)(41, "path", 27)(42, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Google ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " \u00BFNo tienes cuenta? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormLoginComponent_Template_a_click_46_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.socialLogin());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Reg\u00EDstrate aqu\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 31)(49, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "WorkNest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Tu espacio de trabajo flexible, donde y cuando lo necesites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "svg", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isVisibleForm);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
    styles: ["section[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 40px 20px;\n    position: fixed;\n    z-index: 9999;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.4);\n}\n\n.login-container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    max-width: 1000px;\n    width: 100%;\n    background: white;\n    border-radius: 20px;\n    overflow: hidden;\n    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n\n.login-side[_ngcontent-%COMP%] {\n    padding: 60px 50px;\n}\n\n.brand-side[_ngcontent-%COMP%] {\n    background: linear-gradient(135deg, #5b4ff5 0%, #4a3ed4 100%);\n    color: white;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding: 60px 40px;\n}\n\n.brand-logo[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n    font-weight: 800;\n    margin-bottom: 20px;\n}\n\n.brand-tagline[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    opacity: 0.95;\n    line-height: 1.6;\n    margin-bottom: 40px;\n}\n\n.brand-illustration[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 280px;\n    height: 280px;\n    background: rgba(255, 255, 255, 0.1);\n    border-radius: 20px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    backdrop-filter: blur(10px);\n}\n\n.illustration-icon[_ngcontent-%COMP%] {\n    width: 120px;\n    height: 120px;\n    color: white;\n}\n\n.login-header[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n}\n\n.login-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    color: #1a1a1a;\n    font-weight: 700;\n    margin-bottom: 10px;\n}\n\n.login-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #666;\n    font-size: 1rem;\n}\n\n.form-group[_ngcontent-%COMP%] {\n    margin-bottom: 24px;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 8px;\n    color: #1a1a1a;\n    font-weight: 600;\n    font-size: 0.95rem;\n}\n\n.input-wrapper[_ngcontent-%COMP%] {\n    position: relative;\n}\n\n.input-icon[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 16px;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 20px;\n    height: 20px;\n    color: #999;\n}\n\n.form-input[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 14px 16px 14px 48px;\n    border: 2px solid #e5e7eb;\n    border-radius: 10px;\n    font-size: 1rem;\n    transition: all 0.3s ease;\n    outline: none;\n}\n\n.form-input[_ngcontent-%COMP%]:focus {\n    border-color: #5b4ff5;\n    box-shadow: 0 0 0 4px rgba(91, 79, 245, 0.1);\n}\n\n.form-options[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 24px;\n}\n\n.checkbox-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.checkbox-wrapper[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\n    width: 18px;\n    height: 18px;\n    cursor: pointer;\n}\n\n.checkbox-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    color: #666;\n    font-size: 0.9rem;\n    cursor: pointer;\n    margin: 0;\n}\n\n.forgot-link[_ngcontent-%COMP%] {\n    color: #5b4ff5;\n    text-decoration: none;\n    font-size: 0.9rem;\n    font-weight: 600;\n    transition: color 0.3s ease;\n}\n\n.forgot-link[_ngcontent-%COMP%]:hover {\n    color: #4a3ed4;\n}\n\n.btn-login[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 16px;\n    background: #5b4ff5;\n    color: white;\n    border: none;\n    border-radius: 10px;\n    font-size: 1.05rem;\n    font-weight: 600;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    margin-bottom: 20px;\n}\n\n.btn-login[_ngcontent-%COMP%]:hover {\n    background: #4a3ed4;\n    transform: translateY(-2px);\n    box-shadow: 0 10px 25px rgba(91, 79, 245, 0.3);\n}\n\n.divider[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    margin: 30px 0;\n    color: #999;\n    font-size: 0.9rem;\n}\n\n.divider[_ngcontent-%COMP%]::before, .divider[_ngcontent-%COMP%]::after {\n    content: '';\n    flex: 1;\n    height: 1px;\n    background: #e5e7eb;\n}\n\n.divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    padding: 0 15px;\n}\n\n.social-login[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 12px;\n    margin-bottom: 30px;\n}\n\n.btn-social[_ngcontent-%COMP%] {\n    padding: 12px;\n    border: 2px solid #e5e7eb;\n    background: white;\n    border-radius: 10px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    font-weight: 600;\n    color: #666;\n}\n\n.btn-social[_ngcontent-%COMP%]:hover {\n    border-color: #5b4ff5;\n    color: #5b4ff5;\n    transform: translateY(-2px);\n}\n\n.signup-link[_ngcontent-%COMP%] {\n    text-align: center;\n    color: #666;\n    font-size: 0.95rem;\n}\n\n.signup-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #5b4ff5;\n    text-decoration: none;\n    font-weight: 600;\n    transition: color 0.3s ease;\n}\n\n.signup-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #4a3ed4;\n}\n\n@media (max-width: 768px) {\n    .login-container[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n    }\n\n    .brand-side[_ngcontent-%COMP%] {\n        display: none;\n    }\n\n    .login-side[_ngcontent-%COMP%] {\n        padding: 40px 30px;\n    }\n\n    .social-login[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9ybS1sb2dpbi9mb3JtLWxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2IsTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDZEQUE2RDtJQUM3RCxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsT0FBTztJQUNQLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm94LXNoYWRvdzogMCAyMHB4IDYwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4ubG9naW4tc2lkZSB7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDUwcHg7XHJcbn1cclxuXHJcbi5icmFuZC1zaWRlIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM1YjRmZjUgMCUsICM0YTNlZDQgMTAwJSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDYwcHggNDBweDtcclxufVxyXG5cclxuLmJyYW5kLWxvZ28ge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmJyYW5kLXRhZ2xpbmUge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBvcGFjaXR5OiAwLjk1O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5icmFuZC1pbGx1c3RyYXRpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xyXG4gICAgaGVpZ2h0OiAyODBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG59XHJcblxyXG4uaWxsdXN0cmF0aW9uLWljb24ge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxvZ2luLWhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4ubG9naW4taGVhZGVyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGNvbG9yOiAjMWExYTFhO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1oZWFkZXIgcCB7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBjb2xvcjogIzFhMWExYTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbn1cclxuXHJcbi5pbnB1dC13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmlucHV0LWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTZweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzk5OTtcclxufVxyXG5cclxuLmZvcm0taW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHggMTRweCA0OHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2U1ZTdlYjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmZvcm0taW5wdXQ6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNWI0ZmY1O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYmEoOTEsIDc5LCAyNDUsIDAuMSk7XHJcbn1cclxuXHJcbi5mb3JtLW9wdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4uY2hlY2tib3gtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogOHB4O1xyXG59XHJcblxyXG4uY2hlY2tib3gtd3JhcHBlciBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jaGVja2JveC13cmFwcGVyIGxhYmVsIHtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5mb3Jnb3QtbGluayB7XHJcbiAgICBjb2xvcjogIzViNGZmNTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmZvcmdvdC1saW5rOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNGEzZWQ0O1xyXG59XHJcblxyXG4uYnRuLWxvZ2luIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGJhY2tncm91bmQ6ICM1YjRmZjU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uYnRuLWxvZ2luOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM0YTNlZDQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjVweCByZ2JhKDkxLCA3OSwgMjQ1LCAwLjMpO1xyXG59XHJcblxyXG4uZGl2aWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLmRpdmlkZXI6OmJlZm9yZSxcclxuLmRpdmlkZXI6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZmxleDogMTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2U1ZTdlYjtcclxufVxyXG5cclxuLmRpdmlkZXIgc3BhbiB7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbn1cclxuXHJcbi5zb2NpYWwtbG9naW4ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIGdhcDogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5idG4tc29jaWFsIHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTVlN2ViO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzY2NjtcclxufVxyXG5cclxuLmJ0bi1zb2NpYWw6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNWI0ZmY1O1xyXG4gICAgY29sb3I6ICM1YjRmZjU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbn1cclxuXHJcbi5zaWdudXAtbGluayB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxufVxyXG5cclxuLnNpZ251cC1saW5rIGEge1xyXG4gICAgY29sb3I6ICM1YjRmZjU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uc2lnbnVwLWxpbmsgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzRhM2VkNDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAubG9naW4tY29udGFpbmVyIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIH1cclxuXHJcbiAgICAuYnJhbmQtc2lkZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAubG9naW4tc2lkZSB7XHJcbiAgICAgICAgcGFkZGluZzogNDBweCAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zb2NpYWwtbG9naW4ge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3120:
/*!********************************************************!*\
  !*** ./src/app/form-reserva/form-reserva.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormReservaComponent: () => (/* binding */ FormReservaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _form_login_form_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form-login/form-login.component */ 6266);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5443);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/auth0-angular */ 7989);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/notification.service */ 7473);













function FormReservaComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.errores.fechaInicio, " ");
  }
}
function FormReservaComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.errores.fechaFin, " ");
  }
}
function FormReservaComponent_span_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.errores.horaInicio, " ");
  }
}
function FormReservaComponent_span_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.errores.horaFin, " ");
  }
}
function FormReservaComponent_div_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "path", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.getMensajeBotonDeshabilitado());
  }
}
function FormReservaComponent_span_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "svg", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "path", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Confirmar Reserva ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FormReservaComponent_span_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Validando... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class FormReservaComponent {
  http;
  auth;
  notificationService;
  doc;
  mostrarLogin = false;
  mostrarEsteForm = false;
  validandoDisponibilidad = false;
  espacioId;
  espacioNombre;
  espacioPrecio;
  cerrarForm = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  reservaExitosa = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  // Datos del usuario autenticado
  email = null;
  nombre = null;
  picture = null;
  estadoPago = 'Completado';
  metodoPago = 'Efectivo';
  // Datos del formulario
  fechaInicio;
  fechaFin;
  horaInicio;
  horaFin;
  fechaMinima;
  fechaMaxima;
  // Estados de validación para feedback visual
  errores = {};
  // Para controlar si el usuario ha interactuado con los campos
  touched = {
    fechaInicio: false,
    fechaFin: false,
    horaInicio: false,
    horaFin: false
  };
  constructor(http, auth, notificationService, doc) {
    this.http = http;
    this.auth = auth;
    this.notificationService = notificationService;
    this.doc = doc;
    const today = new Date();
    this.fechaInicio = today.toISOString().split('T')[0];
    this.fechaFin = today.toISOString().split('T')[0];
    const currentHour = today.getHours();
    this.horaInicio = `${currentHour.toString().padStart(2, '0')}:00`;
    this.horaFin = `${(currentHour + 1).toString().padStart(2, '0')}:00`;
    this.fechaMinima = today.toISOString().split('T')[0];
    const maxDate = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
    this.fechaMaxima = maxDate.toISOString().split('T')[0];
    // recuperamos la data de auth
    this.auth.user$.subscribe(user => {
      // si se ha logeado actualizamos la infoirmacion
      if (user) {
        // cargamos informacion de usuario
        this.establecerUsuario(user.email, user.name, user.picture);
        this.actualizarVista(false);
      } else {
        // en caso que solo se haya registrado sin usar auth
        const usuarioLocal = JSON.parse(localStorage.getItem('usserAutenticado'));
        // cargamos informacion de usuario
        if (usuarioLocal) {
          this.establecerUsuario(usuarioLocal.email, usuarioLocal.email);
          this.actualizarVista(false);
        } else {
          this.actualizarVista(true);
        }
      }
    });
  }
  // metodo que se encarga de actualizar la infromacion del usuario
  establecerUsuario(email, nombre, picture) {
    this.email = email ?? null;
    this.nombre = nombre ?? null;
    this.picture = picture ?? null;
  }
  // metodo que se encarga de mostrar/ocultar el login o formulario de reserva
  actualizarVista(mostrarLogin) {
    this.mostrarLogin = mostrarLogin;
    this.mostrarEsteForm = !mostrarLogin;
    this.actualizarScroll();
  }
  // metodo que se encarga de habilitar y desactivar el scroll al body
  actualizarScroll() {
    if (this.mostrarEsteForm) {
      this.doc.body.classList.add('no-scroll');
    } else {
      this.doc.body.classList.remove('no-scroll');
    }
  }
  ngOnInit() {
    this.cargarReservasEspacio();
    this.validarFormularioCompleto();
  }
  /**
   * Marca un campo como tocado
   */
  marcarTocado(campo) {
    this.touched[campo] = true;
    this.validarFormularioCompleto();
  }
  /**
   * Validación completa del formulario en tiempo real
   */
  validarFormularioCompleto() {
    this.errores = {};
    if (!this.fechaInicio || !this.fechaFin || !this.horaInicio || !this.horaFin) {
      return;
    }
    try {
      const inicio = new Date(`${this.fechaInicio}T${this.horaInicio}`);
      const fin = new Date(`${this.fechaFin}T${this.horaFin}`);
      const ahora = new Date();
      // Validar fecha de inicio no sea en el pasado
      const tolerancia = new Date(ahora.getTime() - 5 * 60 * 1000);
      if (inicio < tolerancia) {
        this.errores.fechaInicio = 'La fecha de inicio no puede ser en el pasado';
      }
      // Validar que fecha fin sea mayor a fecha inicio
      if (fin <= inicio) {
        this.errores.fechaFin = 'La fecha de fin debe ser posterior a la de inicio';
        this.errores.horaFin = 'La hora de fin debe ser posterior a la de inicio';
      }
      // Validar que no exceda 30 días
      const maxFuturo = new Date(ahora.getTime() + 30 * 24 * 60 * 60 * 1000);
      if (fin > maxFuturo) {
        this.errores.fechaFin = 'La reserva no puede exceder 30 días en el futuro';
      }
      // Validar duración mínima (al menos 1 hora)
      const diffMs = fin.getTime() - inicio.getTime();
      const diffHours = diffMs / (1000 * 60 * 60);
      if (diffHours < 1 && diffHours > 0) {
        this.errores.horaFin = 'La reserva debe ser de al menos 1 hora';
      }
    } catch (error) {
      this.errores.general = 'Error al validar las fechas y horas';
    }
  }
  /**
   * Obtiene el estado de un campo (valid, invalid, neutral)
   */
  getFieldStatus(campo) {
    if (!this.touched[campo]) {
      return 'neutral';
    }
    if (this.errores[campo]) {
      return 'invalid';
    }
    return 'valid';
  }
  /**
   * Retorna si el formulario es válido
   */
  esFormularioValido() {
    return Object.keys(this.errores).length === 0 && this.fechaInicio && this.fechaFin && this.horaInicio && this.horaFin && this.email !== null;
  }
  /**
   * Obtiene el mensaje de tooltip para el botón deshabilitado
   */
  getMensajeBotonDeshabilitado() {
    if (!this.email) {
      return 'Debes iniciar sesión para reservar';
    }
    if (!this.fechaInicio || !this.fechaFin || !this.horaInicio || !this.horaFin) {
      return 'Completa todos los campos del formulario';
    }
    if (this.errores.fechaInicio) {
      return this.errores.fechaInicio;
    }
    if (this.errores.fechaFin) {
      return this.errores.fechaFin;
    }
    if (this.errores.horaInicio || this.errores.horaFin) {
      return this.errores.horaFin || this.errores.horaInicio || '';
    }
    if (this.validandoDisponibilidad) {
      return 'Validando disponibilidad...';
    }
    return '';
  }
  cargarReservasEspacio() {
    this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/api/componente/reservas/verificar`).subscribe({
      next: reservas => {
        const reservasEspacio = reservas.filter(r => r.nombreEspacio === this.espacioNombre);
        console.log(`Reservas existentes para ${this.espacioNombre}:`, reservasEspacio);
      },
      error: err => {
        console.error('Error al cargar reservas:', err);
      }
    });
  }
  validarDisponibilidad() {
    return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/api/componente/reservas/verificar`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(reservas => {
      const inicioNueva = new Date(`${this.fechaInicio}T${this.horaInicio}`);
      const finNueva = new Date(`${this.fechaFin}T${this.horaFin}`);
      const reservasEspacio = reservas.filter(r => r.nombreEspacio === this.espacioNombre);
      for (const reserva of reservasEspacio) {
        const inicioExistente = new Date(reserva.fechaInicio);
        const finExistente = new Date(reserva.fechaFin);
        if (inicioNueva < finExistente && finNueva > inicioExistente) {
          return {
            disponible: false,
            conflicto: reserva
          };
        }
      }
      return {
        disponible: true
      };
    }));
  }
  calcularDuracion() {
    if (!this.fechaInicio || !this.fechaFin || !this.horaInicio || !this.horaFin) {
      return '---';
    }
    try {
      const inicio = new Date(`${this.fechaInicio}T${this.horaInicio}`);
      const fin = new Date(`${this.fechaFin}T${this.horaFin}`);
      const diffMs = fin.getTime() - inicio.getTime();
      const diffHours = Math.round(diffMs / (1000 * 60 * 60));
      if (diffHours <= 0) {
        return 'Horario inválido';
      }
      if (diffHours < 24) {
        return diffHours === 1 ? '1 hora' : `${diffHours} horas`;
      } else {
        const dias = Math.floor(diffHours / 24);
        const horasRestantes = diffHours % 24;
        let resultado = dias === 1 ? '1 día' : `${dias} días`;
        if (horasRestantes > 0) {
          resultado += horasRestantes === 1 ? ' y 1 hora' : ` y ${horasRestantes} horas`;
        }
        return resultado;
      }
    } catch (error) {
      return 'Error en cálculo';
    }
  }
  calcularTotal() {
    if (!this.fechaInicio || !this.fechaFin || !this.horaInicio || !this.horaFin) {
      return '0';
    }
    try {
      const inicio = new Date(`${this.fechaInicio}T${this.horaInicio}`);
      const fin = new Date(`${this.fechaFin}T${this.horaFin}`);
      const diffMs = fin.getTime() - inicio.getTime();
      const diffHours = Math.ceil(diffMs / (1000 * 60 * 60));
      if (diffHours <= 0) {
        return '0';
      }
      const precioPorHora = this.espacioPrecio || 50;
      const total = diffHours * precioPorHora;
      return total.toLocaleString();
    } catch (error) {
      return '0';
    }
  }
  validarFechasHoras() {
    if (!this.fechaInicio || !this.fechaFin || !this.horaInicio || !this.horaFin) {
      return {
        valido: false,
        tipo: 'vacio'
      };
    }
    try {
      const inicio = new Date(`${this.fechaInicio}T${this.horaInicio}`);
      const fin = new Date(`${this.fechaFin}T${this.horaFin}`);
      const ahora = new Date();
      const tolerancia = new Date(ahora.getTime() - 5 * 60 * 1000);
      if (inicio < tolerancia) {
        return {
          valido: false,
          tipo: 'pasado'
        };
      }
      if (fin <= inicio) {
        return {
          valido: false,
          tipo: 'invalido'
        };
      }
      const maxFuturo = new Date(ahora.getTime() + 30 * 24 * 60 * 60 * 1000);
      if (fin > maxFuturo) {
        return {
          valido: false,
          tipo: 'maximo'
        };
      }
      return {
        valido: true
      };
    } catch (error) {
      return {
        valido: false
      };
    }
  }
  formatearFecha(fecha) {
    const date = new Date(fecha);
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  /**
   * Limpia el formulario y resetea a valores por defecto
   */
  limpiarFormulario() {
    const confirmar = confirm('¿Estás seguro de que deseas limpiar el formulario?');
    if (confirmar) {
      this.resetForm();
      this.errores = {};
      this.touched = {
        fechaInicio: false,
        fechaFin: false,
        horaInicio: false,
        horaFin: false
      };
      this.notificationService.info('Formulario limpiado', 'Información', 2000);
    }
  }
  reservar() {
    // Marcar todos los campos como tocados
    this.touched = {
      fechaInicio: true,
      fechaFin: true,
      horaInicio: true,
      horaFin: true
    };
    if (!this.email) {
      this.notificationService.warning('Debes iniciar sesión para realizar una reserva', 'Autenticación Requerida');
      return;
    }
    const validacion = this.validarFechasHoras();
    if (!validacion.valido) {
      if (validacion.tipo) {
        this.notificationService.validacionFechas(validacion.tipo);
      } else {
        this.notificationService.warning('Por favor verifica las fechas y horas ingresadas', 'Datos Inválidos');
      }
      return;
    }
    this.validandoDisponibilidad = true;
    this.notificationService.info('Verificando disponibilidad...', 'Validando', 2000);
    this.validarDisponibilidad().subscribe({
      next: resultado => {
        if (!resultado.disponible && resultado.conflicto) {
          const fechaInicio = this.formatearFecha(resultado.conflicto.fechaInicio);
          const fechaFin = this.formatearFecha(resultado.conflicto.fechaFin);
          this.notificationService.espacioNoDisponible(this.espacioNombre || 'El espacio', fechaInicio, fechaFin);
          this.validandoDisponibilidad = false;
          return;
        }
        this.procesarReserva();
      },
      error: err => {
        console.error('Error al validar disponibilidad:', err);
        this.notificationService.errorServidor('No se pudo validar la disponibilidad del espacio');
        this.validandoDisponibilidad = false;
      }
    });
  }
  procesarReserva() {
    const montoCalculado = parseInt(this.calcularTotal().replace(/,/g, ''));
    const reservaData = {
      idEspacio: this.espacioId.toString(),
      email: this.email,
      nombre: this.nombre,
      fechaInicio: this.fechaInicio,
      fechaFin: this.fechaFin,
      horaEntrada: this.horaInicio,
      horaSalida: this.horaFin,
      estadoPago: this.estadoPago,
      metodoPago: this.metodoPago,
      monto: montoCalculado
    };
    this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/api/reserva/crear`, reservaData).subscribe({
      next: response => {
        this.validandoDisponibilidad = false;
        this.notificationService.reservaExitosa(this.espacioNombre || 'Espacio', this.calcularDuracion(), this.calcularTotal());
        this.resetForm();
        this.reservaExitosa.emit(true);
        this.cerrarForm.emit();
        // actualizamos de nuevo el scroll
        this.actualizarVista(true);
      },
      error: err => {
        this.validandoDisponibilidad = false;
        console.error('Error al crear reserva:', err);
        if (err.status === 400) {
          const mensaje = err.error?.error || 'Los datos de la reserva no son válidos';
          this.notificationService.error(mensaje, 'Error en la Reserva');
        } else if (err.status === 409) {
          this.notificationService.espacioNoDisponible(this.espacioNombre || 'El espacio', this.fechaInicio, this.fechaFin);
        } else if (err.status === 0) {
          this.notificationService.errorServidor('No se pudo conectar con el servidor');
        } else {
          this.notificationService.errorServidor(err.error?.message);
        }
      }
    });
  }
  resetForm() {
    const today = new Date();
    this.fechaInicio = today.toISOString().split('T')[0];
    this.fechaFin = today.toISOString().split('T')[0];
    const currentHour = today.getHours();
    this.horaInicio = `${currentHour.toString().padStart(2, '0')}:00`;
    this.horaFin = `${(currentHour + 1).toString().padStart(2, '0')}:00`;
    this.errores = {};
    this.touched = {
      fechaInicio: false,
      fechaFin: false,
      horaInicio: false,
      horaFin: false
    };
  }
  cerrar() {
    this.resetForm();
    this.cerrarForm.emit();
    // agregamos para que cuando se cierre el form de reserva se habilite nuevamente el scroll
    this.mostrarEsteForm = !this.mostrarEsteForm;
    this.actualizarScroll();
  }
  static ɵfac = function FormReservaComponent_Factory(t) {
    return new (t || FormReservaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: FormReservaComponent,
    selectors: [["app-form-reserva"]],
    inputs: {
      espacioId: "espacioId",
      espacioNombre: "espacioNombre",
      espacioPrecio: "espacioPrecio"
    },
    outputs: {
      cerrarForm: "cerrarForm",
      reservaExitosa: "reservaExitosa"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 105,
    vars: 46,
    consts: [["reservaForm", "ngForm"], [1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Cerrar", 1, "btn-close", 3, "click"], ["width", "20", "height", "20", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "modal-body"], [3, "ngSubmit"], [1, "form-section"], [1, "section-title"], [1, "form-row"], [1, "form-group"], ["for", "fechaInicio", 1, "form-label"], [1, "required"], ["type", "date", "id", "fechaInicio", "name", "fechaInicio", "required", "", 1, "form-input", 3, "ngModelChange", "blur", "change", "ngModel", "min", "max"], ["class", "error-message", 4, "ngIf"], ["for", "fechaFin", 1, "form-label"], ["type", "date", "id", "fechaFin", "name", "fechaFin", "required", "", 1, "form-input", 3, "ngModelChange", "blur", "change", "ngModel", "min", "max"], ["for", "horaInicio", 1, "form-label"], ["type", "time", "id", "horaInicio", "name", "horaInicio", "required", "", 1, "form-input", 3, "ngModelChange", "blur", "change", "ngModel"], ["for", "horaFin", 1, "form-label"], ["type", "time", "id", "horaFin", "name", "horaFin", "required", "", 1, "form-input", 3, "ngModelChange", "blur", "change", "ngModel"], [1, "payment-options"], [1, "radio-option"], ["type", "radio", "name", "metodoPago", "value", "Efectivo", 3, "ngModelChange", "ngModel"], [1, "radio-label"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"], ["type", "radio", "name", "metodoPago", "value", "Transferencia", 3, "ngModelChange", "ngModel"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"], [1, "reservation-summary"], [1, "summary-header"], [1, "summary-title"], ["type", "button", "title", "Limpiar formulario", 1, "btn-limpiar", 3, "click", "disabled"], ["width", "16", "height", "16", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"], [1, "summary-content"], [1, "summary-item"], [1, "summary-label"], [1, "summary-value"], [1, "summary-item", "summary-total"], ["class", "help-message", 4, "ngIf"], [1, "modal-actions"], ["type", "button", 1, "btn-modal", "btn-cancelar", 3, "click", "disabled"], ["type", "submit", 1, "btn-modal", "btn-confirmar", 3, "click", "disabled", "title"], ["class", "btn-content", 4, "ngIf"], [3, "visibilityChange", "isVisibleForm"], [1, "error-message"], [1, "help-message"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "btn-content"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], [1, "spinner"]],
    template: function FormReservaComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FormReservaComponent_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.cerrar());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FormReservaComponent_Template_div_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event.stopPropagation());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "header", 3)(3, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FormReservaComponent_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.cerrar());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8)(9, "form", 9, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function FormReservaComponent_Template_form_ngSubmit_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.reservar());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 10)(12, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Fechas de Reserva");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 12)(15, "div", 13)(16, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Fecha de inicio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function FormReservaComponent_Template_input_ngModelChange_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.fechaInicio, $event) || (ctx.fechaInicio = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function FormReservaComponent_Template_input_blur_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.marcarTocado("fechaInicio"));
        })("change", function FormReservaComponent_Template_input_change_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.validarFormularioCompleto());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, FormReservaComponent_span_21_Template, 2, 1, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 13)(23, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Fecha de fin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function FormReservaComponent_Template_input_ngModelChange_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.fechaFin, $event) || (ctx.fechaFin = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function FormReservaComponent_Template_input_blur_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.marcarTocado("fechaFin"));
        })("change", function FormReservaComponent_Template_input_change_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.validarFormularioCompleto());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, FormReservaComponent_span_28_Template, 2, 1, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 10)(30, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Horario");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 12)(33, "div", 13)(34, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " Hora de inicio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function FormReservaComponent_Template_input_ngModelChange_38_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.horaInicio, $event) || (ctx.horaInicio = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function FormReservaComponent_Template_input_blur_38_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.marcarTocado("horaInicio"));
        })("change", function FormReservaComponent_Template_input_change_38_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.validarFormularioCompleto());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, FormReservaComponent_span_39_Template, 2, 1, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 13)(41, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, " Hora de fin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function FormReservaComponent_Template_input_ngModelChange_45_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.horaFin, $event) || (ctx.horaFin = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function FormReservaComponent_Template_input_blur_45_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.marcarTocado("horaFin"));
        })("change", function FormReservaComponent_Template_input_change_45_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.validarFormularioCompleto());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, FormReservaComponent_span_46_Template, 2, 1, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 10)(48, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "M\u00E9todo de Pago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 24)(51, "label", 25)(52, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function FormReservaComponent_Template_input_ngModelChange_52_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.metodoPago, $event) || (ctx.metodoPago = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, " Efectivo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "label", 25)(58, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function FormReservaComponent_Template_input_ngModelChange_58_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.metodoPago, $event) || (ctx.metodoPago = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, " Transferencia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 31)(64, "div", 32)(65, "h3", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Resumen de Reserva");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FormReservaComponent_Template_button_click_67_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.limpiarFormulario());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "svg", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, " Limpiar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 37)(72, "div", 38)(73, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Espacio:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 38)(78, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Duraci\u00F3n:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 38)(83, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "Precio por hora:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div", 38)(88, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "M\u00E9todo de pago:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 41)(93, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Total estimado:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](97, FormReservaComponent_div_97_Template, 5, 1, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "div", 43)(99, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FormReservaComponent_Template_button_click_99_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.cerrar());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, " Cancelar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FormReservaComponent_Template_button_click_101_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.reservar());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](102, FormReservaComponent_span_102_Template, 4, 0, "span", 46)(103, FormReservaComponent_span_103_Template, 3, 0, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "app-form-login", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("visibilityChange", function FormReservaComponent_Template_app_form_login_visibilityChange_104_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.mostrarLogin = $event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Reservar ", ctx.espacioNombre || "Espacio", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("input-valid", ctx.getFieldStatus("fechaInicio") === "valid")("input-invalid", ctx.getFieldStatus("fechaInicio") === "invalid");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.fechaInicio);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("min", ctx.fechaMinima)("max", ctx.fechaMaxima);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.touched.fechaInicio && ctx.errores.fechaInicio);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("input-valid", ctx.getFieldStatus("fechaFin") === "valid")("input-invalid", ctx.getFieldStatus("fechaFin") === "invalid");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.fechaFin);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("min", ctx.fechaMinima)("max", ctx.fechaMaxima);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.touched.fechaFin && ctx.errores.fechaFin);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("input-valid", ctx.getFieldStatus("horaInicio") === "valid")("input-invalid", ctx.getFieldStatus("horaInicio") === "invalid");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.horaInicio);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.touched.horaInicio && ctx.errores.horaInicio);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("input-valid", ctx.getFieldStatus("horaFin") === "valid")("input-invalid", ctx.getFieldStatus("horaFin") === "invalid");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.horaFin);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.touched.horaFin && ctx.errores.horaFin);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.metodoPago);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.metodoPago);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.validandoDisponibilidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.espacioNombre || "Espacio " + ctx.espacioId);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("text-error", ctx.calcularDuracion() === "Horario inv\u00E1lido");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.calcularDuracion(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("$", ctx.espacioPrecio || 50, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.metodoPago);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("$", ctx.calcularTotal(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.esFormularioValido() && (ctx.touched.fechaInicio || ctx.touched.fechaFin || ctx.touched.horaInicio || ctx.touched.horaFin));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.validandoDisponibilidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.esFormularioValido() || ctx.validandoDisponibilidad)("title", ctx.getMensajeBotonDeshabilitado());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.validandoDisponibilidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.validandoDisponibilidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isVisibleForm", ctx.mostrarLogin);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _form_login_form_login_component__WEBPACK_IMPORTED_MODULE_0__.FormLoginComponent],
    styles: ["\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  display: contents;\n}\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n\n\n.modal-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-2xl);\n  box-shadow: var(--shadow-xl);\n  width: 100%;\n  max-width: 520px;\n  max-height: 90vh;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_slideIn 0.2s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateY(-10px) scale(0.98);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n  }\n}\n\n\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: var(--spacing-6);\n  background: linear-gradient(135deg, var(--primary-50) 0%, var(--primary-100) 100%);\n  border-bottom: 1px solid var(--primary-200);\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n  font-weight: 700;\n  color: var(--primary-800);\n  margin: 0;\n}\n\n.btn-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: var(--spacing-2);\n  border-radius: var(--radius-lg);\n  color: var(--gray-500);\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.btn-close[_ngcontent-%COMP%]:hover {\n  background: var(--gray-100);\n  color: var(--gray-700);\n}\n\n\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: var(--spacing-6);\n  max-height: calc(90vh - 200px);\n  overflow-y: auto;\n}\n\n\n\n\n\n\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-6);\n}\n\n.section-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--primary-700);\n  margin-bottom: var(--spacing-4);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-2);\n}\n\n.section-title[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 3px;\n  height: 1rem;\n  background: var(--primary-600);\n  border-radius: var(--radius-full);\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--spacing-4);\n  grid-template-columns: 1fr;\n}\n\n@media (min-width: 480px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--gray-700);\n  margin-bottom: var(--spacing-2);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-1);\n}\n\n.required[_ngcontent-%COMP%] {\n  color: var(--error);\n  font-weight: 700;\n}\n\n.form-input[_ngcontent-%COMP%] {\n  padding: var(--spacing-3);\n  border: 2px solid var(--gray-200);\n  border-radius: var(--radius-lg);\n  font-size: var(--font-size-sm);\n  transition: all 0.2s ease;\n  background: white;\n}\n\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-500);\n  box-shadow: 0 0 0 3px rgb(59 130 246 / 0.1);\n}\n\n\n\n.input-valid[_ngcontent-%COMP%] {\n  border-color: var(--success) !important;\n  background: rgba(16, 185, 129, 0.02);\n}\n\n.input-valid[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1) !important;\n}\n\n.input-invalid[_ngcontent-%COMP%] {\n  border-color: var(--error) !important;\n  background: rgba(239, 68, 68, 0.02);\n}\n\n.input-invalid[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;\n}\n\n\n\n.error-message[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--font-size-xs);\n  color: var(--error);\n  margin-top: var(--spacing-2);\n  animation: _ngcontent-%COMP%_slideDown 0.2s ease-out;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-1);\n}\n\n.error-message[_ngcontent-%COMP%]::before {\n  content: \"\u26A0\";\n  font-size: 14px;\n}\n\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n\n\n\n\n\n.payment-options[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-3);\n  flex-wrap: wrap;\n}\n\n.radio-option[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 140px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  padding: var(--spacing-3);\n  border: 2px solid var(--gray-200);\n  border-radius: var(--radius-lg);\n  transition: all 0.2s ease;\n}\n\n.radio-option[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-400);\n  background: var(--primary-50);\n}\n\n.radio-option[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%] {\n  margin-right: var(--spacing-2);\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n  accent-color: var(--primary-600);\n}\n\n.radio-option[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked    + .radio-label[_ngcontent-%COMP%] {\n  color: var(--primary-700);\n  font-weight: 600;\n}\n\n.radio-option[_ngcontent-%COMP%]:has(input[type=\"radio\"]:checked) {\n  border-color: var(--primary-600);\n  background: var(--primary-50);\n}\n\n.radio-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-2);\n  font-size: var(--font-size-sm);\n  color: var(--gray-700);\n}\n\n.radio-label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--gray-500);\n}\n\n\n\n\n\n\n.reservation-summary[_ngcontent-%COMP%] {\n  background: var(--gray-50);\n  border: 1px solid var(--gray-200);\n  border-radius: var(--radius-xl);\n  padding: var(--spacing-5);\n  margin-bottom: var(--spacing-4);\n}\n\n.summary-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--spacing-4);\n}\n\n.summary-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-base);\n  font-weight: 600;\n  color: var(--gray-800);\n  margin: 0;\n}\n\n.btn-limpiar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-2);\n  padding: var(--spacing-2) var(--spacing-3);\n  font-size: var(--font-size-xs);\n  font-weight: 500;\n  color: var(--gray-600);\n  background: white;\n  border: 1px solid var(--gray-300);\n  border-radius: var(--radius-lg);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.btn-limpiar[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--gray-100);\n  color: var(--gray-700);\n  border-color: var(--gray-400);\n}\n\n.btn-limpiar[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.btn-limpiar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n\n.summary-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-3);\n}\n\n.summary-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.summary-label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  color: var(--gray-600);\n}\n\n.summary-value[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--gray-800);\n}\n\n.text-error[_ngcontent-%COMP%] {\n  color: var(--error) !important;\n}\n\n.summary-total[_ngcontent-%COMP%] {\n  padding-top: var(--spacing-3);\n  border-top: 1px solid var(--gray-200);\n  margin-top: var(--spacing-2);\n}\n\n.summary-total[_ngcontent-%COMP%]   .summary-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--gray-800);\n}\n\n.summary-total[_ngcontent-%COMP%]   .summary-value[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  color: var(--primary-600);\n  font-weight: 700;\n}\n\n\n\n\n\n\n.help-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--spacing-3);\n  padding: var(--spacing-3);\n  background: var(--warning);\n  background: linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(251, 191, 36, 0.1) 100%);\n  border: 1px solid rgba(245, 158, 11, 0.3);\n  border-radius: var(--radius-lg);\n  margin-bottom: var(--spacing-4);\n  animation: _ngcontent-%COMP%_slideDown 0.2s ease-out;\n}\n\n.help-message[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: var(--warning);\n  margin-top: 2px;\n}\n\n.help-message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  color: #92400e;\n  line-height: 1.5;\n}\n\n\n\n\n\n\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-3);\n  justify-content: flex-end;\n  padding: var(--spacing-6);\n  border-top: 1px solid var(--gray-200);\n  background: var(--gray-50);\n}\n\n.btn-modal[_ngcontent-%COMP%] {\n  padding: var(--spacing-3) var(--spacing-6);\n  border-radius: var(--radius-lg);\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: none;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  min-height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.btn-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-2);\n}\n\n.btn-cancelar[_ngcontent-%COMP%] {\n  background: white;\n  color: var(--gray-600);\n  border: 1px solid var(--gray-300);\n}\n\n.btn-cancelar[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--gray-50);\n  color: var(--gray-700);\n  border-color: var(--gray-400);\n}\n\n.btn-confirmar[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--primary-600), var(--primary-700));\n  color: white;\n  position: relative;\n}\n\n.btn-confirmar[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: linear-gradient(135deg, var(--primary-700), var(--primary-800));\n  transform: translateY(-1px);\n  box-shadow: var(--shadow-md);\n}\n\n.btn-confirmar[_ngcontent-%COMP%]:disabled {\n  background: var(--gray-400);\n  cursor: not-allowed;\n  transform: none;\n  opacity: 0.6;\n}\n\n\n\n.spinner[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n  display: inline-block;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n\n\n\n\n\n@media (max-width: 640px) {\n  .modal-container[_ngcontent-%COMP%] {\n    margin: var(--spacing-4);\n    max-width: calc(100vw - 2rem);\n  }\n  \n  .modal-header[_ngcontent-%COMP%], .modal-body[_ngcontent-%COMP%], .modal-actions[_ngcontent-%COMP%] {\n    padding: var(--spacing-4);\n  }\n  \n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  \n  .modal-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  \n  .btn-modal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .payment-options[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .radio-option[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n}\n\n\n\n\n\n\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--gray-100);\n  border-radius: var(--radius-sm);\n}\n\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--gray-300);\n  border-radius: var(--radius-sm);\n}\n\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--gray-400);\n}\n\n\n\n\n\n\n.btn-modal[_ngcontent-%COMP%]:focus-visible, .btn-close[_ngcontent-%COMP%]:focus-visible, .btn-limpiar[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--primary-500);\n  outline-offset: 2px;\n}\n\n.form-input[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n}\n\n\n\n@media (prefers-reduced-motion: reduce) {\n  *[_ngcontent-%COMP%] {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9ybS1yZXNlcnZhL2Zvcm0tcmVzZXJ2YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztrREFFa0Q7O0FBRWxELDBDQUEwQztBQUMxQztFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSx3Q0FBd0M7QUFDeEM7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsT0FBTyxVQUFVLEVBQUU7RUFDbkIsS0FBSyxVQUFVLEVBQUU7QUFDbkI7O0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0UsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFO0lBQ0Usd0NBQXdDO0lBQ3hDLFVBQVU7RUFDWjtFQUNBO0lBQ0UsaUNBQWlDO0lBQ2pDLFVBQVU7RUFDWjtBQUNGOztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixrRkFBa0Y7RUFDbEYsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMkJBQTJC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O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBOztrREFFa0Q7O0FBRWxEOzs7RUFHRSxxQ0FBcUM7RUFDckMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLGtEQUFrRDtBQUNsRDtFQUNFO0lBQ0UscUNBQXFDO0lBQ3JDLHVDQUF1QztJQUN2QyxzQ0FBc0M7RUFDeEM7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBNT0RBTCBERSBSRVNFUlZBIC0gVkVSU0nDg8KTTiBNRUpPUkFEQSBDT04gVVhcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vKiBFbGltaW5hciB3cmFwcGVyIGV4dHJhIGRlbCBjb21wb25lbnRlICovXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBjb250ZW50cztcclxufVxyXG5cclxuLyogT3ZlcmxheSBzaW1wbGUgc2luIGVmZWN0b3MgZXh0cmHDg8Kxb3MgKi9cclxuLm1vZGFsLW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4ycyBlYXNlLW91dDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgdG8geyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuXHJcbi8qIENvbnRhaW5lciBkZWwgbW9kYWwgKi9cclxuLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTJ4bCk7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDUyMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDkwdmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBhbmltYXRpb246IHNsaWRlSW4gMC4ycyBlYXNlLW91dDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZUluIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCkgc2NhbGUoMC45OCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLyogSGVhZGVyIGRlbCBtb2RhbCAqL1xyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctNik7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHJpbWFyeS01MCkgMCUsIHZhcigtLXByaW1hcnktMTAwKSAxMDAlKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS0yMDApO1xyXG59XHJcblxyXG4ubW9kYWwtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhsKTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LTgwMCk7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uYnRuLWNsb3NlIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy0yKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xyXG4gIGNvbG9yOiB2YXIoLS1ncmF5LTUwMCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4tY2xvc2U6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMTAwKTtcclxuICBjb2xvcjogdmFyKC0tZ3JheS03MDApO1xyXG59XHJcblxyXG4vKiBCb2R5IGRlbCBtb2RhbCAqL1xyXG4ubW9kYWwtYm9keSB7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy02KTtcclxuICBtYXgtaGVpZ2h0OiBjYWxjKDkwdmggLSAyMDBweCk7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIEZPUk1VTEFSSU9cclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4uZm9ybS1zZWN0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLTYpO1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZSB7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktNzAwKTtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLTQpO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLTIpO1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiAzcHg7XHJcbiAgaGVpZ2h0OiAxcmVtO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktNjAwKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtZnVsbCk7XHJcbn1cclxuXHJcbi5mb3JtLXJvdyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBnYXA6IHZhcigtLXNwYWNpbmctNCk7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xyXG4gIC5mb3JtLXJvdyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiB2YXIoLS1ncmF5LTcwMCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy0yKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLTEpO1xyXG59XHJcblxyXG4ucmVxdWlyZWQge1xyXG4gIGNvbG9yOiB2YXIoLS1lcnJvcik7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmZvcm0taW5wdXQge1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctMyk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JheS0yMDApO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5mb3JtLWlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS01MDApO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2IoNTkgMTMwIDI0NiAvIDAuMSk7XHJcbn1cclxuXHJcbi8qIEVzdGFkb3MgZGUgdmFsaWRhY2nDg8KzbiAqL1xyXG4uaW5wdXQtdmFsaWQge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc3VjY2VzcykgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxODUsIDEyOSwgMC4wMik7XHJcbn1cclxuXHJcbi5pbnB1dC12YWxpZDpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMTYsIDE4NSwgMTI5LCAwLjEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbnB1dC1pbnZhbGlkIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWVycm9yKSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM5LCA2OCwgNjgsIDAuMDIpO1xyXG59XHJcblxyXG4uaW5wdXQtaW52YWxpZDpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjM5LCA2OCwgNjgsIDAuMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogTWVuc2FqZXMgZGUgZXJyb3IgKi9cclxuLmVycm9yLW1lc3NhZ2Uge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzKTtcclxuICBjb2xvcjogdmFyKC0tZXJyb3IpO1xyXG4gIG1hcmdpbi10b3A6IHZhcigtLXNwYWNpbmctMik7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZURvd24gMC4ycyBlYXNlLW91dDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLTEpO1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIsOiwprCoFwiO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZURvd24ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBNw4PCiVRPRE8gREUgUEFHT1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5wYXltZW50LW9wdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLTMpO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnJhZGlvLW9wdGlvbiB7XHJcbiAgZmxleDogMTtcclxuICBtaW4td2lkdGg6IDE0MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy0zKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ncmF5LTIwMCk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4ucmFkaW8tb3B0aW9uOmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktNDAwKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LTUwKTtcclxufVxyXG5cclxuLnJhZGlvLW9wdGlvbiBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tc3BhY2luZy0yKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIGFjY2VudC1jb2xvcjogdmFyKC0tcHJpbWFyeS02MDApO1xyXG59XHJcblxyXG4ucmFkaW8tb3B0aW9uIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgLnJhZGlvLWxhYmVsIHtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS03MDApO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5yYWRpby1vcHRpb246aGFzKGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkKSB7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTYwMCk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS01MCk7XHJcbn1cclxuXHJcbi5yYWRpby1sYWJlbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogdmFyKC0tc3BhY2luZy0yKTtcclxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XHJcbiAgY29sb3I6IHZhcigtLWdyYXktNzAwKTtcclxufVxyXG5cclxuLnJhZGlvLWxhYmVsIHN2ZyB7XHJcbiAgY29sb3I6IHZhcigtLWdyYXktNTAwKTtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIFJFU1VNRU4gREUgUkVTRVJWQVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5yZXNlcnZhdGlvbi1zdW1tYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTUwKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5LTIwMCk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXhsKTtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLTUpO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctNCk7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLTQpO1xyXG59XHJcblxyXG4uc3VtbWFyeS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogdmFyKC0tZ3JheS04MDApO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmJ0bi1saW1waWFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLTIpO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctMikgdmFyKC0tc3BhY2luZy0zKTtcclxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14cyk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogdmFyKC0tZ3JheS02MDApO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXktMzAwKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uYnRuLWxpbXBpYXI6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMTAwKTtcclxuICBjb2xvcjogdmFyKC0tZ3JheS03MDApO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZ3JheS00MDApO1xyXG59XHJcblxyXG4uYnRuLWxpbXBpYXI6ZGlzYWJsZWQge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4uYnRuLWxpbXBpYXIgc3ZnIHtcclxuICB3aWR0aDogMTRweDtcclxuICBoZWlnaHQ6IDE0cHg7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IHZhcigtLXNwYWNpbmctMyk7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LWxhYmVsIHtcclxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XHJcbiAgY29sb3I6IHZhcigtLWdyYXktNjAwKTtcclxufVxyXG5cclxuLnN1bW1hcnktdmFsdWUge1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XHJcbn1cclxuXHJcbi50ZXh0LWVycm9yIHtcclxuICBjb2xvcjogdmFyKC0tZXJyb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LXRvdGFsIHtcclxuICBwYWRkaW5nLXRvcDogdmFyKC0tc3BhY2luZy0zKTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZ3JheS0yMDApO1xyXG4gIG1hcmdpbi10b3A6IHZhcigtLXNwYWNpbmctMik7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LXRvdGFsIC5zdW1tYXJ5LWxhYmVsIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LXRvdGFsIC5zdW1tYXJ5LXZhbHVlIHtcclxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sZyk7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktNjAwKTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgTUVOU0FKRSBERSBBWVVEQVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5oZWxwLW1lc3NhZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLTMpO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctMyk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0td2FybmluZyk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNDUsIDE1OCwgMTEsIDAuMSkgMCUsIHJnYmEoMjUxLCAxOTEsIDM2LCAwLjEpIDEwMCUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjQ1LCAxNTgsIDExLCAwLjMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy00KTtcclxuICBhbmltYXRpb246IHNsaWRlRG93biAwLjJzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uaGVscC1tZXNzYWdlIHN2ZyB7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgY29sb3I6IHZhcigtLXdhcm5pbmcpO1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5cclxuLmhlbHAtbWVzc2FnZSBzcGFuIHtcclxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XHJcbiAgY29sb3I6ICM5MjQwMGU7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIEFDQ0lPTkVTIERFTCBNT0RBTFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5tb2RhbC1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogdmFyKC0tc3BhY2luZy0zKTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctNik7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWdyYXktMjAwKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTUwKTtcclxufVxyXG5cclxuLmJ0bi1tb2RhbCB7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy0zKSB2YXIoLS1zcGFjaW5nLTYpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICBtaW4taGVpZ2h0OiA0NHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLTIpO1xyXG59XHJcblxyXG4uYnRuLWNhbmNlbGFyIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogdmFyKC0tZ3JheS02MDApO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXktMzAwKTtcclxufVxyXG5cclxuLmJ0bi1jYW5jZWxhcjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS01MCk7XHJcbiAgY29sb3I6IHZhcigtLWdyYXktNzAwKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWdyYXktNDAwKTtcclxufVxyXG5cclxuLmJ0bi1jb25maXJtYXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktNjAwKSwgdmFyKC0tcHJpbWFyeS03MDApKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYnRuLWNvbmZpcm1hcjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHJpbWFyeS03MDApLCB2YXIoLS1wcmltYXJ5LTgwMCkpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xyXG59XHJcblxyXG4uYnRuLWNvbmZpcm1hcjpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS00MDApO1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgdHJhbnNmb3JtOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuLyogU3Bpbm5lciBkZSBsb2FkaW5nICovXHJcbi5zcGlubmVyIHtcclxuICB3aWR0aDogMTRweDtcclxuICBoZWlnaHQ6IDE0cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBhbmltYXRpb246IHNwaW4gMC42cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgUkVTUE9OU0lWRVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gIC5tb2RhbC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiB2YXIoLS1zcGFjaW5nLTQpO1xyXG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gMnJlbSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1oZWFkZXIsXHJcbiAgLm1vZGFsLWJvZHksXHJcbiAgLm1vZGFsLWFjdGlvbnMge1xyXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy00KTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tcm93IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuICBcclxuICAubW9kYWwtYWN0aW9ucyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tbW9kYWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAucGF5bWVudC1vcHRpb25zIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAucmFkaW8tb3B0aW9uIHtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBTQ1JPTExCQVIgQ1VTVE9NXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLm1vZGFsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogNHB4O1xyXG59XHJcblxyXG4ubW9kYWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMTAwKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMzAwKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktNDAwKTtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIEFDQ0VTSUJJTElEQURcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4uYnRuLW1vZGFsOmZvY3VzLXZpc2libGUsXHJcbi5idG4tY2xvc2U6Zm9jdXMtdmlzaWJsZSxcclxuLmJ0bi1saW1waWFyOmZvY3VzLXZpc2libGUge1xyXG4gIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LTUwMCk7XHJcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcclxufVxyXG5cclxuLmZvcm0taW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLyogUmVkdWNpciBhbmltYWNpb25lcyBzaSBlbCB1c3VhcmlvIGxvIHByZWZpZXJlICovXHJcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XHJcbiAgKiB7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1013:
/*!******************************************************!*\
  !*** ./src/app/pages/catalogo/catalogo.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CatalogoComponent: () => (/* binding */ CatalogoComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var src_app_espacios_espacios_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/espacios/espacios.component */ 3712);
/* harmony import */ var src_app_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/footer/footer.component */ 5473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




class CatalogoComponent {
  static ɵfac = function CatalogoComponent_Factory(t) {
    return new (t || CatalogoComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CatalogoComponent,
    selectors: [["app-catalogo"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 0,
    template: function CatalogoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Cat\u00E1logo de Espacios");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-espacios")(3, "app-footer");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, src_app_espacios_espacios_component__WEBPACK_IMPORTED_MODULE_0__.EspaciosComponent, src_app_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8939:
/*!************************************************!*\
  !*** ./src/app/pages/error/error.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorComponent: () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6320);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/auth0-angular */ 7989);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);






function ErrorComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "An error was returned from Auth0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Something went wrong when trying to authorize your application. Please inspect the error below and ensure ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "auth_config.json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " is configured correctly.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const error_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r1.error_description, " ");
  }
}
class ErrorComponent {
  auth;
  router;
  error$;
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
    this.error$ = this.auth.error$;
  }
  ngOnInit() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.timer)(0).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.error$)).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
  static ɵfac = function ErrorComponent_Factory(t) {
    return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ErrorComponent,
    selectors: [["app-error"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 3,
    consts: [[1, "container", "mt-5"], [4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"]],
    template: function ErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ErrorComponent_ng_container_1_Template, 10, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.error$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
    encapsulation: 2
  });
}

/***/ }),

/***/ 5047:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/footer/footer.component */ 5473);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var src_app_form_reserva_form_reserva_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/form-reserva/form-reserva.component */ 3120);
/* harmony import */ var src_app_form_login_form_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/form-login/form-login.component */ 6266);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/auth0-angular */ 7989);










const _c0 = (a0, a1, a2) => ({
  "estado-disponible": a0,
  "estado-ocupado": a1,
  "estado-mantenimiento": a2
});
const _c1 = (a0, a1) => ({
  "btn-no-disponible": a0,
  "btn-mantenimiento": a1
});
function HomeComponent_article_100_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const servicio_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", servicio_r2.nombre, " ");
  }
}
function HomeComponent_article_100_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Reservar Espacio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function HomeComponent_article_100_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No Disponible");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function HomeComponent_article_100_span_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "En Mantenimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function HomeComponent_article_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "article", 35)(1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 39)(6, "h2", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 41)(9, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "svg", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "svg", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 46)(20, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "/hora");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 49)(25, "h3", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Servicios Incluidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, HomeComponent_article_100_span_28_Template, 2, 1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 53)(30, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_article_100_Template_button_click_30_listener() {
      const espacio_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.toggleForm(espacio_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, HomeComponent_article_100_span_31_Template, 2, 0, "span", 55)(32, HomeComponent_article_100_span_32_Template, 2, 0, "span", 55)(33, HomeComponent_article_100_span_33_Template, 2, 0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const espacio_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", espacio_r3.imagen || "https://wearecloudworks.com/wp-content/uploads/2022/01/beneficios-coworking.jpeg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", "Imagen del " + espacio_r3.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](14, _c0, espacio_r3.estado === "disponible", espacio_r3.estado === "ocupado", espacio_r3.estado === "mantenimiento"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", espacio_r3.estado, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](espacio_r3.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](espacio_r3.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", espacio_r3.capacidad, " personas");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("$", espacio_r3.precio, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", espacio_r3.servicios);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](18, _c1, espacio_r3.estado === "ocupado", espacio_r3.estado === "mantenimiento"))("disabled", espacio_r3.estado !== "disponible");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", espacio_r3.estado === "disponible");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", espacio_r3.estado === "ocupado");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", espacio_r3.estado === "mantenimiento");
  }
}
function HomeComponent_app_form_reserva_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-form-reserva", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cerrarForm", function HomeComponent_app_form_reserva_102_Template_app_form_reserva_cerrarForm_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.mostrarFormId = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("espacioId", ctx_r3.mostrarFormId)("espacioNombre", ctx_r3.getEspacioNombre(ctx_r3.mostrarFormId))("espacioPrecio", ctx_r3.getEspacioPrecio(ctx_r3.mostrarFormId));
  }
}
class HomeComponent {
  auth;
  http;
  constructor(auth, http) {
    this.auth = auth;
    this.http = http;
  }
  espacios_list = [];
  ngOnInit() {
    this.cargarEspacios();
  }
  mostrarFormId = null;
  cargarEspacios() {
    this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl}/api/componente/espacios`).subscribe({
      next: data => {
        this.espacios_list = data;
      },
      error: error => {
        console.error('Error al cargar espacios:', error);
      }
    });
  }
  /**
   * Toggle del formulario de reserva
   */
  toggleForm(espacioId) {
    if (this.mostrarFormId === espacioId) {
      this.mostrarFormId = null;
    } else {
      this.mostrarFormId = espacioId;
    }
  }
  /**
  * Obtiene el nombre del espacio por ID
  */
  getEspacioNombre(id) {
    const espacio = this.espacios_list.find(e => e.id === id);
    return espacio ? espacio.nombre : '';
  }
  /**
   * Obtiene el precio del espacio por ID
   */
  getEspacioPrecio(id) {
    const espacio = this.espacios_list.find(e => e.id === id);
    return espacio ? espacio.precio : 50;
  }
  /**
   * Verifica si un espacio tiene un servicio específico
   */
  tieneServicio(espacio, nombreServicio) {
    return espacio.servicios.some(servicio => servicio.nombre.toLowerCase().includes(nombreServicio.toLowerCase()));
  }
  static ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 103,
    vars: 3,
    consts: [[1, "no-scroll"], [1, "hero"], [1, "content"], [1, "highlight"], [1, "buttons"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "btn", "btn-secondary"], [1, "card"], [1, "features-section"], [1, "header"], [1, "features-grid"], [1, "feature-card"], [1, "icon"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], ["d", "M12 2L2 7l10 5 10-5-10-5z"], ["d", "M2 17l10 5 10-5"], ["d", "M2 12l10 5 10-5"], ["x", "2", "y", "3", "width", "20", "height", "14", "rx", "2"], ["x1", "8", "y1", "21", "x2", "16", "y2", "21"], ["x1", "12", "y1", "17", "x2", "12", "y2", "21"], [1, "spaces-section"], [1, "section-title"], [1, "spaces-grid"], [1, "space-card"], [1, "card-header"], [1, "card-body"], ["routerLink", "/catalogo", 1, "card-link"], [1, "arrow"], [1, "spaces-section", "spaces-section-carrusel"], [1, "espacios-grid-infinite-carrusel", "carousel-container"], ["id", "carouselWrapper", 1, "carousel-wrapper"], ["class", "espacio-card", 4, "ngFor", "ngForOf"], [3, "espacioId", "espacioNombre", "espacioPrecio", "cerrarForm", 4, "ngIf"], [1, "espacio-card"], [1, "espacio-imagen"], ["loading", "lazy", 3, "src", "alt"], [1, "estado-badge", 3, "ngClass"], [1, "espacio-content"], [1, "espacio-nombre"], [1, "espacio-info-grid"], [1, "info-item"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "info-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m1 0h1m-1 4h1m1 0h1m-1 4h1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"], [1, "espacio-precio"], [1, "precio-valor"], [1, "precio-periodo"], [1, "servicios-section"], [1, "servicios-titulo"], [1, "servicios-list"], ["class", "servicio-tag", 4, "ngFor", "ngForOf"], [1, "card-action"], [1, "btn-reservar", 3, "click", "ngClass", "disabled"], [4, "ngIf"], [1, "servicio-tag"], [3, "cerrarForm", "espacioId", "espacioNombre", "espacioPrecio"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-form-login");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "section", 0)(2, "div", 1)(3, "div", 2)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Tu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Espacio de Trabajo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Flexible, a un Clic. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Reserva escritorios, salas de reuniones y oficinas privadas por hora, d\u00EDa o mes. Enf\u00F3cate en tu productividad, nosotros nos encargamos del resto. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 4)(12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Explorar Espacios");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Ver Beneficios");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 7)(17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "WorkNest");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 8)(20, "div", 9)(21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "La Productividad que Necesitas");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Nuestro espacio est\u00E1 dise\u00F1ado para potenciar tu trabajo con flexibilidad total y la mejor infraestructura.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 10)(26, "div", 11)(27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "circle", 14)(30, "polyline", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Reserva por Horas");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "\u00BFSolo necesitas un par de horas? Reserva y paga solo por el tiempo que realmente utilizas. M\u00E1xima flexibilidad para tu agenda.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 11)(36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "path", 16)(39, "path", 17)(40, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Internet de Alta Velocidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Nunca te desconectes. Contamos con conexiones de fibra \u00F3ptica redundantes y una red Wi-Fi ultra r\u00E1pida y segura.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 11)(46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "rect", 19)(49, "line", 20)(50, "line", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Comunidad e Networking");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Conecta con profesionales de tu sector. Acceso a eventos y talleres exclusivos para miembros de la comunidad. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 22)(56, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Encuentra tu Espacio Ideal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 24)(59, "div", 25)(60, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, " Escritorio Flexible ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "div", 27)(63, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Escritorio Flexible");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Un asiento en la zona com\u00FAn. Ideal para freelancers y n\u00F3madas digitales que buscan un cambio de ambiente. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, " Reservar Escritorio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "\u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 25)(72, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, " Sala de Reuniones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 27)(75, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "Sala de Reuniones");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "Espacios equipados con pantallas y pizarras, perfectos para reuniones de equipo o clientes importantes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, " Reservar Sala ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "\u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 25)(84, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, " Oficina Privada ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 27)(87, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "Oficina Privada");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "Para equipos peque\u00F1os que necesitan privacidad y su propio espacio, con acceso 24/7 y seguridad.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, " Reservar Oficina ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94, "\u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 30)(96, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "Nuestro Catalogo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "div", 31)(99, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](100, HomeComponent_article_100_Template, 34, 21, "article", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](101, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](102, HomeComponent_app_form_reserva_102_Template, 1, 3, "app-form-reserva", 34);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/catalogo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.espacios_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mostrarFormId !== null);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, src_app_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, src_app_form_reserva_form_reserva_component__WEBPACK_IMPORTED_MODULE_1__.FormReservaComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, src_app_form_login_form_login_component__WEBPACK_IMPORTED_MODULE_2__.FormLoginComponent],
    styles: ["\n\n\n\n\n\n\n.espacios-layout[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 64px);\n  background: var(--gray-50);\n  padding: var(--spacing-4);\n}\n\n\n\n.espacios-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-6);\n  max-width: 1280px;\n  margin: 0 auto;\n}\n\n\n\n@media (min-width: 1024px) {\n  .espacios-container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 320px 1fr;\n    gap: var(--spacing-8);\n  }\n\n  .espacios-layout[_ngcontent-%COMP%] {\n    padding: var(--spacing-6) var(--spacing-8);\n  }\n}\n\n\n\n\n\n\n.espacios-main[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-2xl);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--gray-200);\n  overflow: hidden;\n}\n\n.espacios-header[_ngcontent-%COMP%] {\n  padding: var(--spacing-6);\n  border-bottom: 1px solid var(--gray-200);\n  background: linear-gradient(135deg, var(--gray-50) 0%, white 100%);\n}\n\n.espacios-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  font-weight: 700;\n  color: var(--gray-900);\n  margin-bottom: var(--spacing-2);\n}\n\n.espacios-subtitle[_ngcontent-%COMP%] {\n  font-size: var(--font-size-base);\n  color: var(--gray-600);\n  margin: 0;\n}\n\n@media (min-width: 768px) {\n  .espacios-title[_ngcontent-%COMP%] {\n    font-size: var(--font-size-3xl);\n  }\n\n  .espacios-subtitle[_ngcontent-%COMP%] {\n    font-size: var(--font-size-lg);\n  }\n}\n\n\n\n\n\n\n.espacios-grid[_ngcontent-%COMP%] {\n  padding: var(--spacing-6);\n  display: grid;\n  gap: var(--spacing-6);\n  grid-template-columns: 1fr;\n}\n\n\n\n\n\n@media (min-width: 640px) {\n  .espacios-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: var(--spacing-4);\n  }\n}\n\n@media (min-width: 1024px) {\n  .espacios-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: var(--spacing-6);\n  }\n}\n\n@media (min-width: 1280px) {\n  .espacios-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\n\n\n\n\n\n\n\n.espacio-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--gray-200);\n  overflow: hidden;\n  transition: all 0.3s ease;\n  position: relative;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.espacio-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-xl);\n  border-color: var(--primary-300);\n}\n\n\n\n.espacio-imagen[_ngcontent-%COMP%] {\n  position: relative;\n  height: 200px;\n  overflow: hidden;\n}\n\n.espacio-imagen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n\n.espacio-card[_ngcontent-%COMP%]:hover   .espacio-imagen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n\n\n\n.estado-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: var(--spacing-3);\n  right: var(--spacing-3);\n  padding: var(--spacing-1) var(--spacing-3);\n  border-radius: var(--radius-full);\n  font-size: var(--font-size-xs);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  backdrop-filter: blur(8px);\n  box-shadow: var(--shadow-sm);\n}\n\n.estado-disponible[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.9);\n  color: white;\n}\n\n.estado-ocupado[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.9);\n  color: white;\n}\n\n.estado-mantenimiento[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.9);\n  color: white;\n}\n\n\n\n\n\n\n.espacio-content[_ngcontent-%COMP%] {\n  padding: var(--spacing-6);\n}\n\n.espacio-nombre[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n  font-weight: 700;\n  color: var(--gray-900);\n  margin-bottom: var(--spacing-4);\n  line-height: 1.2;\n}\n\n\n\n.espacio-info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  \n\n  gap: var(--spacing-3);\n  margin-bottom: var(--spacing-4);\n}\n\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-2);\n  font-size: var(--font-size-sm);\n  color: var(--gray-600);\n}\n\n.info-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  color: var(--gray-400);\n  flex-shrink: 0;\n}\n\n\n\n.espacio-precio[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: var(--spacing-1);\n  margin-bottom: var(--spacing-4);\n}\n\n.precio-valor[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  font-weight: 700;\n  color: var(--primary-600);\n}\n\n.precio-periodo[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  color: var(--gray-500);\n  font-weight: 500;\n}\n\n\n\n\n\n\n.servicios-section[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-6);\n}\n\n.servicios-titulo[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--gray-700);\n  margin-bottom: var(--spacing-3);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n\n.servicios-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--spacing-2);\n}\n\n.servicio-tag[_ngcontent-%COMP%] {\n  padding: var(--spacing-1) var(--spacing-3);\n  background: var(--primary-50);\n  color: var(--primary-700);\n  border: 1px solid var(--primary-200);\n  border-radius: var(--radius-full);\n  font-size: var(--font-size-xs);\n  font-weight: 500;\n}\n\n\n\n\n\n\n.card-action[_ngcontent-%COMP%] {\n  padding: 0;\n  border-top: 1px solid var(--gray-200);\n}\n\n.btn-reservar[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: var(--spacing-4) var(--spacing-6);\n  background: linear-gradient(135deg, var(--primary-600), var(--primary-700));\n  color: white;\n  border: none;\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  position: relative;\n  overflow: hidden;\n  border-radius: 0;\n}\n\n.btn-reservar[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);\n  transition: left 0.5s;\n}\n\n.btn-reservar[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n\n.btn-reservar[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, var(--primary-700), var(--primary-800));\n  transform: translateY(-1px);\n}\n\n.btn-reservar[_ngcontent-%COMP%]:disabled {\n  background: var(--gray-400);\n  cursor: not-allowed;\n  transform: none;\n}\n\n.btn-reservar[_ngcontent-%COMP%]:disabled::before {\n  display: none;\n}\n\n\n\n.btn-no-disponible[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--error), #dc2626);\n}\n\n.btn-mantenimiento[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--warning), #d97706);\n}\n\n\n\n\n\n\n@media (max-width: 639px) {\n  .espacio-info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .espacio-content[_ngcontent-%COMP%] {\n    padding: var(--spacing-4);\n  }\n\n  .espacio-imagen[_ngcontent-%COMP%] {\n    height: 160px;\n  }\n}\n\n@media (min-width: 640px) and (max-width: 1023px) {\n  .espacio-imagen[_ngcontent-%COMP%] {\n    height: 180px;\n  }\n}\n\n\n\n\n\n\n.espacios-grid[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n\n.espacios-grid[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--gray-100);\n  border-radius: var(--radius-sm);\n}\n\n.espacios-grid[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--gray-300);\n  border-radius: var(--radius-sm);\n}\n\n.espacios-grid[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--gray-400);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXNwYWNpb3MvZXNwYWNpb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7a0RBRWtEOztBQUVsRCxvQ0FBb0M7QUFDcEM7RUFDRSw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLHlCQUF5QjtBQUMzQjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQSx5Q0FBeUM7QUFDekM7RUFDRTtJQUNFLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsMENBQTBDO0VBQzVDO0FBQ0Y7O0FBRUE7O2tEQUVrRDs7QUFFbEQ7RUFDRSxpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1QixpQ0FBaUM7RUFDakMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHdDQUF3QztFQUN4QyxrRUFBa0U7QUFDcEU7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFO0lBQ0UsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0UsOEJBQThCO0VBQ2hDO0FBQ0Y7O0FBRUE7O2tEQUVrRDs7QUFFbEQ7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQiwwQkFBMEI7QUFDNUI7Ozs7QUFJQSwyQkFBMkI7QUFDM0I7RUFDRTtJQUNFLHFDQUFxQztJQUNyQyxxQkFBcUI7RUFDdkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUNBQXFDO0lBQ3JDLHFCQUFxQjtFQUN2QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxxQ0FBcUM7RUFDdkM7QUFDRjs7OztBQUlBOztrREFFa0Q7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Q2Y7O0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0UsMERBQTBEO0FBQzVEOztBQUVBO0VBQ0UsNERBQTREO0FBQzlEOztBQUVBOztrREFFa0Q7O0FBRWxEO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7O2tEQUVrRDs7QUFFbEQ7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBFU1BBQ0lPUyBDT01QT05FTlQgLSBSRVNQT05TSVZFIERFU0lHTlxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8qIExheW91dCBwcmluY2lwYWwgLSBNb2JpbGUgRmlyc3QgKi9cclxuLmVzcGFjaW9zLWxheW91dCB7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktNTApO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctNCk7XHJcbn1cclxuXHJcbi8qIE1vYmlsZTogU3RhY2sgdmVydGljYWwgKi9cclxuLmVzcGFjaW9zLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogdmFyKC0tc3BhY2luZy02KTtcclxuICBtYXgtd2lkdGg6IDEyODBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLyogVGFibGV0IHkgRGVza3RvcDogTGF5b3V0IGxhZG8gYSBsYWRvICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAuZXNwYWNpb3MtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMyMHB4IDFmcjtcclxuICAgIGdhcDogdmFyKC0tc3BhY2luZy04KTtcclxuICB9XHJcblxyXG4gIC5lc3BhY2lvcy1sYXlvdXQge1xyXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy02KSB2YXIoLS1zcGFjaW5nLTgpO1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIMODwoFSRUEgREUgQ09OVEVOSURPIFBSSU5DSVBBTFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5lc3BhY2lvcy1tYWluIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtMnhsKTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXktMjAwKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZXNwYWNpb3MtaGVhZGVyIHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLTYpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ncmF5LTIwMCk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tZ3JheS01MCkgMCUsIHdoaXRlIDEwMCUpO1xyXG59XHJcblxyXG4uZXNwYWNpb3MtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTJ4bCk7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogdmFyKC0tZ3JheS05MDApO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctMik7XHJcbn1cclxuXHJcbi5lc3BhY2lvcy1zdWJ0aXRsZSB7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7XHJcbiAgY29sb3I6IHZhcigtLWdyYXktNjAwKTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5lc3BhY2lvcy10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0zeGwpO1xyXG4gIH1cclxuXHJcbiAgLmVzcGFjaW9zLXN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxnKTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBHUklEIERFIEVTUEFDSU9TXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLmVzcGFjaW9zLWdyaWQge1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctNik7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBnYXA6IHZhcigtLXNwYWNpbmctNik7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbn1cclxuXHJcblxyXG5cclxuLyogUmVzcG9uc2l2ZSBicmVha3BvaW50cyAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcclxuICAuZXNwYWNpb3MtZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgZ2FwOiB2YXIoLS1zcGFjaW5nLTQpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gIC5lc3BhY2lvcy1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICBnYXA6IHZhcigtLXNwYWNpbmctNik7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XHJcbiAgLmVzcGFjaW9zLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIENBUkRTIERFIEVTUEFDSU9TXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLmVzcGFjaW8tY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXhsKTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXktMjAwKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5lc3BhY2lvLWNhcmQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cteGwpO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS0zMDApO1xyXG59XHJcblxyXG4vKiBJbWFnZW4gZGVsIGVzcGFjaW8gKi9cclxuLmVzcGFjaW8taW1hZ2VuIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZXNwYWNpby1pbWFnZW4gaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmVzcGFjaW8tY2FyZDpob3ZlciAuZXNwYWNpby1pbWFnZW4gaW1nIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcblxyXG4vKiBCYWRnZSBkZSBlc3RhZG8gKi9cclxuLmVzdGFkby1iYWRnZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogdmFyKC0tc3BhY2luZy0zKTtcclxuICByaWdodDogdmFyKC0tc3BhY2luZy0zKTtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLTEpIHZhcigtLXNwYWNpbmctMyk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWZ1bGwpO1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xyXG59XHJcblxyXG4uZXN0YWRvLWRpc3BvbmlibGUge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTYsIDE4NSwgMTI5LCAwLjkpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmVzdGFkby1vY3VwYWRvIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjkpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmVzdGFkby1tYW50ZW5pbWllbnRvIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMTU4LCAxMSwgMC45KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBDT05URU5JRE8gREUgTEEgQ0FSRFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5lc3BhY2lvLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctNik7XHJcbn1cclxuXHJcbi5lc3BhY2lvLW5vbWJyZSB7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteGwpO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHZhcigtLWdyYXktOTAwKTtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLTQpO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbn1cclxuXHJcbi8qIEluZm8gZ3JpZCAqL1xyXG4uZXNwYWNpby1pbmZvLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgLyoqZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyoqL1xyXG4gIGdhcDogdmFyKC0tc3BhY2luZy0zKTtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLTQpO1xyXG59XHJcblxyXG4uaW5mby1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLTIpO1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcclxuICBjb2xvcjogdmFyKC0tZ3JheS02MDApO1xyXG59XHJcblxyXG4uaW5mby1pY29uIHtcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgY29sb3I6IHZhcigtLWdyYXktNDAwKTtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLyogUHJlY2lvICovXHJcbi5lc3BhY2lvLXByZWNpbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLTEpO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctNCk7XHJcbn1cclxuXHJcbi5wcmVjaW8tdmFsb3Ige1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTJ4bCk7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS02MDApO1xyXG59XHJcblxyXG4ucHJlY2lvLXBlcmlvZG8ge1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcclxuICBjb2xvcjogdmFyKC0tZ3JheS01MDApO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBTRVJWSUNJT1NcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4uc2VydmljaW9zLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctNik7XHJcbn1cclxuXHJcbi5zZXJ2aWNpb3MtdGl0dWxvIHtcclxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogdmFyKC0tZ3JheS03MDApO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctMyk7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG59XHJcblxyXG4uc2VydmljaW9zLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogdmFyKC0tc3BhY2luZy0yKTtcclxufVxyXG5cclxuLnNlcnZpY2lvLXRhZyB7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy0xKSB2YXIoLS1zcGFjaW5nLTMpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktNTApO1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LTcwMCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS0yMDApO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1mdWxsKTtcclxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14cyk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIEJPVMODwpNOIERFIFJFU0VSVkFcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4uY2FyZC1hY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWdyYXktMjAwKTtcclxufVxyXG5cclxuLmJ0bi1yZXNlcnZhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy00KSB2YXIoLS1zcGFjaW5nLTYpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktNjAwKSwgdmFyKC0tcHJpbWFyeS03MDApKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uYnRuLXJlc2VydmFyOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogLTEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgdHJhbnNwYXJlbnQpO1xyXG4gIHRyYW5zaXRpb246IGxlZnQgMC41cztcclxufVxyXG5cclxuLmJ0bi1yZXNlcnZhcjpob3Zlcjo6YmVmb3JlIHtcclxuICBsZWZ0OiAxMDAlO1xyXG59XHJcblxyXG4uYnRuLXJlc2VydmFyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5LTcwMCksIHZhcigtLXByaW1hcnktODAwKSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcblxyXG4uYnRuLXJlc2VydmFyOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTQwMCk7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB0cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbi5idG4tcmVzZXJ2YXI6ZGlzYWJsZWQ6OmJlZm9yZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogRXN0YWRvcyBlc3BlY8ODwq1maWNvcyAqL1xyXG4uYnRuLW5vLWRpc3BvbmlibGUge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWVycm9yKSwgI2RjMjYyNik7XHJcbn1cclxuXHJcbi5idG4tbWFudGVuaW1pZW50byB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0td2FybmluZyksICNkOTc3MDYpO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgUkVTUE9OU0lWRSBBREpVU1RNRU5UU1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MzlweCkge1xyXG4gIC5lc3BhY2lvLWluZm8tZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcblxyXG4gIC5lc3BhY2lvLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy00KTtcclxuICB9XHJcblxyXG4gIC5lc3BhY2lvLWltYWdlbiB7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XHJcbiAgLmVzcGFjaW8taW1hZ2VuIHtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgU0NST0xMQkFSIENVU1RPTVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5lc3BhY2lvcy1ncmlkOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDZweDtcclxufVxyXG5cclxuLmVzcGFjaW9zLWdyaWQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTEwMCk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcclxufVxyXG5cclxuLmVzcGFjaW9zLWdyaWQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTMwMCk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcclxufVxyXG5cclxuLmVzcGFjaW9zLWdyaWQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTQwMCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */section[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 60px 20px;\n    background: #f9f9fb;\n    gap: 60px;\n}\n\n.hero[_ngcontent-%COMP%] {\n    max-width: 1200px;\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 60px;\n    align-items: center;\n}\n\n.content[_ngcontent-%COMP%] {\n    padding: 20px;\n}\n\n.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 3.5rem;\n    line-height: 1.1;\n    margin-bottom: 20px;\n    color: #1a1a1a;\n    font-weight: 800;\n}\n\n.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n    color: #5b4ff5;\n}\n\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    line-height: 1.6;\n    color: #666;\n    margin-bottom: 30px;\n}\n\n.buttons[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 15px;\n}\n\n.btn[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n    padding: 15px 30px;\n    font-size: 1rem;\n    border: none;\n    border-radius: 8px;\n    cursor: pointer;\n    font-weight: 600;\n    transition: all 0.3s ease;\n    text-decoration: none;\n    display: inline-block;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n    background: #5b4ff5;\n    color: white;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n    background: #4a3ed4;\n    transform: translateY(-2px);\n    box-shadow: 0 10px 25px rgba(91, 79, 245, 0.3);\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n    background: white;\n    color: #5b4ff5;\n    border: 2px solid #5b4ff5;\n}\n\n.btn-secondary[_ngcontent-%COMP%]:hover {\n    background: #f0efff;\n    transform: translateY(-2px);\n}\n\n.card[_ngcontent-%COMP%] {\n    background: linear-gradient(135deg, #6359f8 0%, #5b4ff5 100%);\n    border-radius: 20px;\n    padding: 80px 60px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: 0 20px 60px rgba(91, 79, 245, 0.3);\n    min-height: 350px;\n}\n\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 2.5rem;\n    font-weight: 700;\n    text-align: center;\n}\n\n@media (max-width: 768px) {\n    .hero[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n        gap: 40px;\n    }\n\n    .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 2.5rem;\n    }\n\n    .buttons[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n\n    .btn[_ngcontent-%COMP%] {\n        width: 100%;\n        text-align: center;\n    }\n\n    .card[_ngcontent-%COMP%] {\n        padding: 60px 40px;\n    }\n\n    .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 2rem;\n    }\n}\n\n\n\n\n\n\n.features-section[_ngcontent-%COMP%] {\n    max-width: 1200px;\n    margin: 0 auto;\n}\n\n.header[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 60px;\n}\n\n.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n    color: #1a1a1a;\n    font-weight: 700;\n    margin-bottom: 15px;\n}\n\n.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    color: #666;\n    line-height: 1.6;\n    max-width: 700px;\n    margin: 0 auto;\n}\n\n.features-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 30px;\n}\n\n.feature-card[_ngcontent-%COMP%] {\n    background: white;\n    border-radius: 12px;\n    padding: 40px 30px;\n    transition: all 0.3s ease;\n    border-top: 4px solid transparent;\n}\n\n.feature-card[_ngcontent-%COMP%]:hover {\n    transform: translateY(-5px);\n    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);\n}\n\n.feature-card[_ngcontent-%COMP%]:nth-child(1) {\n    border-top-color: #5b4ff5;\n}\n\n.feature-card[_ngcontent-%COMP%]:nth-child(2) {\n    border-top-color: #00d9b1;\n}\n\n.feature-card[_ngcontent-%COMP%]:nth-child(3) {\n    border-top-color: #5b4ff5;\n}\n\n.icon[_ngcontent-%COMP%] {\n    width: 48px;\n    height: 48px;\n    margin-bottom: 20px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n}\n\n.feature-card[_ngcontent-%COMP%]:nth-child(1)   .icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    stroke: #5b4ff5;\n}\n\n.feature-card[_ngcontent-%COMP%]:nth-child(2)   .icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    stroke: #00d9b1;\n}\n\n.feature-card[_ngcontent-%COMP%]:nth-child(3)   .icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    stroke: #5b4ff5;\n}\n\n.feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n    color: #1a1a1a;\n    font-weight: 700;\n    margin-bottom: 15px;\n}\n\n.feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    color: #666;\n    line-height: 1.6;\n}\n\n@media (max-width: 968px) {\n    .features-grid[_ngcontent-%COMP%] {\n        grid-template-columns: repeat(2, 1fr);\n    }\n}\n\n@media (max-width: 640px) {\n    .features-grid[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n    }\n\n    .header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 2rem;\n    }\n\n    .feature-card[_ngcontent-%COMP%] {\n        padding: 30px 25px;\n    }\n}\n\n\n\n.spaces-section[_ngcontent-%COMP%] {\n    max-width: 1200px;\n    margin: 0 auto;\n}\n\n.section-title[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 2.5rem;\n    color: #1a1a1a;\n    font-weight: 700;\n    margin-bottom: 50px;\n}\n\n.spaces-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 30px;\n}\n\n.space-card[_ngcontent-%COMP%] {\n    background: white;\n    border-radius: 12px;\n    overflow: hidden;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n    transition: all 0.3s ease;\n}\n\n.space-card[_ngcontent-%COMP%]:hover {\n    transform: translateY(-8px);\n    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);\n}\n\n.card-header[_ngcontent-%COMP%] {\n    padding: 80px 30px;\n    text-align: center;\n    color: white;\n    font-size: 1.75rem;\n    font-weight: 700;\n}\n\n.space-card[_ngcontent-%COMP%]:nth-child(1)   .card-header[_ngcontent-%COMP%] {\n    background: linear-gradient(135deg, #ff9f43 0%, #f39c12 100%);\n}\n\n.space-card[_ngcontent-%COMP%]:nth-child(2)   .card-header[_ngcontent-%COMP%] {\n    background: linear-gradient(135deg, #1dd1a1 0%, #10ac84 100%);\n}\n\n.space-card[_ngcontent-%COMP%]:nth-child(3)   .card-header[_ngcontent-%COMP%] {\n    background: linear-gradient(135deg, #6c5ce7 0%, #5b4ff5 100%);\n}\n\n.card-body[_ngcontent-%COMP%] {\n    padding: 30px;\n}\n\n.card-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n    color: #1a1a1a;\n    font-weight: 700;\n    margin-bottom: 12px;\n}\n\n.card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    color: #666;\n    line-height: 1.6;\n    margin-bottom: 20px;\n}\n\n.card-link[_ngcontent-%COMP%] {\n    display: inline-flex;\n    align-items: center;\n    gap: 8px;\n    font-size: 1rem;\n    font-weight: 600;\n    text-decoration: none;\n    transition: all 0.3s ease;\n}\n\n.space-card[_ngcontent-%COMP%]:nth-child(1)   .card-link[_ngcontent-%COMP%] {\n    color: #f39c12;\n}\n\n.space-card[_ngcontent-%COMP%]:nth-child(2)   .card-link[_ngcontent-%COMP%] {\n    color: #10ac84;\n}\n\n.space-card[_ngcontent-%COMP%]:nth-child(3)   .card-link[_ngcontent-%COMP%] {\n    color: #5b4ff5;\n}\n\n.card-link[_ngcontent-%COMP%]:hover {\n    gap: 12px;\n}\n\n.arrow[_ngcontent-%COMP%] {\n    transition: transform 0.3s ease;\n}\n\n.card-link[_ngcontent-%COMP%]:hover   .arrow[_ngcontent-%COMP%] {\n    transform: translateX(4px);\n}\n\n@media (max-width: 968px) {\n    .spaces-grid[_ngcontent-%COMP%] {\n        grid-template-columns: repeat(2, 1fr);\n    }\n}\n\n@media (max-width: 640px) {\n    .spaces-grid[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n    }\n\n    .section-title[_ngcontent-%COMP%] {\n        font-size: 2rem;\n    }\n\n    .card-header[_ngcontent-%COMP%] {\n        padding: 60px 30px;\n        font-size: 1.5rem;\n    }\n}\n\n\n\n\n\n.carousel-container[_ngcontent-%COMP%] {\n    max-width: 100%;\n    overflow: hidden;\n    position: relative;\n    padding: 20px 0;\n}\n\n.carousel-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 20px;\n    animation: _ngcontent-%COMP%_scroll 30s linear infinite;\n    width: -moz-fit-content;\n    width: fit-content;\n}\n@media (max-width: 767px) {\n    .spaces-section-carrusel[_ngcontent-%COMP%]{\n        width: 100%;      \n    }\n}\n\n\n.carousel-wrapper[_ngcontent-%COMP%]:hover {\n    animation-play-state: paused;\n}\n\n@keyframes _ngcontent-%COMP%_scroll {\n    0% {\n        transform: translateX(0);\n    }\n\n    100% {\n        transform: translateX(-50%);\n    }\n}\n\n\n.espacio-card[_ngcontent-%COMP%] {\n    min-width: 300px;\n    flex: 0 0 auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQiw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSw2REFBNkQ7SUFDN0QsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qiw4Q0FBOEM7SUFDOUMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJ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Q0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0k7UUFDSSxxQ0FBcUM7SUFDekM7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixpQkFBaUI7SUFDckI7QUFDSjs7Ozs7O0FBTUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxxQ0FBcUM7SUFDckMsdUJBQWtCO0lBQWxCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7QUFDSjs7O0FBR0E7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSTtRQUNJLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLDJCQUEyQjtJQUMvQjtBQUNKOzs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoLi4vLi4vZXNwYWNpb3MvZXNwYWNpb3MuY29tcG9uZW50LmNzcyk7XHJcblxyXG5zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDYwcHggMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmOWY5ZmI7XHJcbiAgICBnYXA6IDYwcHg7XHJcbn1cclxuXHJcbi5oZXJvIHtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgZ2FwOiA2MHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmNvbnRlbnQgaDEge1xyXG4gICAgZm9udC1zaXplOiAzLjVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGNvbG9yOiAjMWExYTFhO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLmNvbnRlbnQgaDEgLmhpZ2hsaWdodCB7XHJcbiAgICBjb2xvcjogIzViNGZmNTtcclxufVxyXG5cclxuLmNvbnRlbnQgcCB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDE1cHg7XHJcbn1cclxuXHJcbi5idG4sXHJcbmEge1xyXG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNWI0ZmY1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzRhM2VkNDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyNXB4IHJnYmEoOTEsIDc5LCAyNDUsIDAuMyk7XHJcbn1cclxuXHJcbi5idG4tc2Vjb25kYXJ5IHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6ICM1YjRmZjU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNWI0ZmY1O1xyXG59XHJcblxyXG4uYnRuLXNlY29uZGFyeTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjBlZmZmO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjM1OWY4IDAlLCAjNWI0ZmY1IDEwMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IDgwcHggNjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDIwcHggNjBweCByZ2JhKDkxLCA3OSwgMjQ1LCAwLjMpO1xyXG4gICAgbWluLWhlaWdodDogMzUwcHg7XHJcbn1cclxuXHJcbi5jYXJkIGgyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuaGVybyB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgZ2FwOiA0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50IGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9ucyB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIHBhZGRpbmc6IDYwcHggNDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZCBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiBzZWd1bmRvIGJsb3F1ZSAqL1xyXG4uZmVhdHVyZXMtc2VjdGlvbiB7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXIgaDIge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBjb2xvcjogIzFhMWExYTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uaGVhZGVyIHAge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5mZWF0dXJlcy1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gICAgZ2FwOiAzMHB4O1xyXG59XHJcblxyXG4uZmVhdHVyZS1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHBhZGRpbmc6IDQwcHggMzBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5mZWF0dXJlLWNhcmQ6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uZmVhdHVyZS1jYXJkOm50aC1jaGlsZCgxKSB7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjNWI0ZmY1O1xyXG59XHJcblxyXG4uZmVhdHVyZS1jYXJkOm50aC1jaGlsZCgyKSB7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjMDBkOWIxO1xyXG59XHJcblxyXG4uZmVhdHVyZS1jYXJkOm50aC1jaGlsZCgzKSB7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjNWI0ZmY1O1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaWNvbiBzdmcge1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbn1cclxuXHJcbi5mZWF0dXJlLWNhcmQ6bnRoLWNoaWxkKDEpIC5pY29uIHN2ZyB7XHJcbiAgICBzdHJva2U6ICM1YjRmZjU7XHJcbn1cclxuXHJcbi5mZWF0dXJlLWNhcmQ6bnRoLWNoaWxkKDIpIC5pY29uIHN2ZyB7XHJcbiAgICBzdHJva2U6ICMwMGQ5YjE7XHJcbn1cclxuXHJcbi5mZWF0dXJlLWNhcmQ6bnRoLWNoaWxkKDMpIC5pY29uIHN2ZyB7XHJcbiAgICBzdHJva2U6ICM1YjRmZjU7XHJcbn1cclxuXHJcbi5mZWF0dXJlLWNhcmQgaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBjb2xvcjogIzFhMWExYTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uZmVhdHVyZS1jYXJkIHAge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTY4cHgpIHtcclxuICAgIC5mZWF0dXJlcy1ncmlkIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAgIC5mZWF0dXJlcy1ncmlkIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmZlYXR1cmUtY2FyZCB7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCAyNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiB0ZXJjZXIgYmxvcXVlICovXHJcbi5zcGFjZXMtc2VjdGlvbiB7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIGNvbG9yOiAjMWExYTFhO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5zcGFjZXMtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgIGdhcDogMzBweDtcclxufVxyXG5cclxuLnNwYWNlLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLnNwYWNlLWNhcmQ6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCAyMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDgwcHggMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5zcGFjZS1jYXJkOm50aC1jaGlsZCgxKSAuY2FyZC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmOWY0MyAwJSwgI2YzOWMxMiAxMDAlKTtcclxufVxyXG5cclxuLnNwYWNlLWNhcmQ6bnRoLWNoaWxkKDIpIC5jYXJkLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMWRkMWExIDAlLCAjMTBhYzg0IDEwMCUpO1xyXG59XHJcblxyXG4uc3BhY2UtY2FyZDpudGgtY2hpbGQoMykgLmNhcmQtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2YzVjZTcgMCUsICM1YjRmZjUgMTAwJSk7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxufVxyXG5cclxuLmNhcmQtYm9keSBoMyB7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIGNvbG9yOiAjMWExYTFhO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkgcCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZC1saW5rIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogOHB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5zcGFjZS1jYXJkOm50aC1jaGlsZCgxKSAuY2FyZC1saW5rIHtcclxuICAgIGNvbG9yOiAjZjM5YzEyO1xyXG59XHJcblxyXG4uc3BhY2UtY2FyZDpudGgtY2hpbGQoMikgLmNhcmQtbGluayB7XHJcbiAgICBjb2xvcjogIzEwYWM4NDtcclxufVxyXG5cclxuLnNwYWNlLWNhcmQ6bnRoLWNoaWxkKDMpIC5jYXJkLWxpbmsge1xyXG4gICAgY29sb3I6ICM1YjRmZjU7XHJcbn1cclxuXHJcbi5jYXJkLWxpbms6aG92ZXIge1xyXG4gICAgZ2FwOiAxMnB4O1xyXG59XHJcblxyXG4uYXJyb3cge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmNhcmQtbGluazpob3ZlciAuYXJyb3cge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NjhweCkge1xyXG4gICAgLnNwYWNlcy1ncmlkIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAgIC5zcGFjZXMtZ3JpZCB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDYwcHggMzBweDtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5jYXJvdXNlbC1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxufVxyXG5cclxuLmNhcm91c2VsLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMjBweDtcclxuICAgIGFuaW1hdGlvbjogc2Nyb2xsIDMwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuc3BhY2VzLXNlY3Rpb24tY2FycnVzZWx7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7ICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uY2Fyb3VzZWwtd3JhcHBlcjpob3ZlciB7XHJcbiAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNjcm9sbCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5lc3BhY2lvLWNhcmQge1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgIGZsZXg6IDAgMCBhdXRvO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2683:
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-highlightjs */ 4891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ 7989);





function ProfileComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8)(1, "pre", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx_r0.profileJson);
  }
}
function ProfileComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5)(5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileComponent_div_0_div_9_Template, 3, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r2 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r2.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.profileJson);
  }
}
class ProfileComponent {
  auth;
  profileJson = null;
  constructor(auth) {
    this.auth = auth;
  }
  ngOnInit() {
    this.auth.user$.subscribe(profile => this.profileJson = JSON.stringify(profile, null, 2));
  }
  static ɵfac = function ProfileComponent_Factory(t) {
    return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__.AuthService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProfileComponent,
    selectors: [["app-profile"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [["class", "container mt-5", 4, "ngIf"], [1, "container", "mt-5"], [1, "row", "align-items-center", "profile-header", "mb-5", "text-center", "text-md-left"], [1, "col-md-2"], [1, "rounded-circle", "img-fluid", "profile-picture", "mb-3", "mb-md-0", 3, "src"], [1, "col-md"], [1, "lead", "text-muted"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "rounded"], [1, "json", 3, "highlight"]],
    template: function ProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileComponent_div_0_Template, 10, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.auth.user$));
      }
    },
    dependencies: [ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__.HighlightModule, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__.Highlight, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
    styles: [".userImg[_ngcontent-%COMP%] {\n  border-radius: 100px;\n  display: block;\n  height: 100px;\n  margin: 0 auto;\n  width: 100px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGFBQWE7RUFDYixjQUFjO0VBQ2QsWUFBWTtBQUNkIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJJbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9607:
/*!********************************************************************!*\
  !*** ./src/app/pages/reservasusuario/reservasusuario.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReservasusuarioComponent: () => (/* binding */ ReservasusuarioComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var src_app_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/footer/footer.component */ 5473);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var src_app_form_editar_reserva_form_editar_reserva_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/form-editar-reserva/form-editar-reserva.component */ 1832);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/auth0-angular */ 7989);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notification.service */ 7473);
 // Importa CommonModule








function ReservasusuarioComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 8)(6, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 10)(9, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\uD83D\uDCCB");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 12)(14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "path", 15)(17, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "path", 15)(23, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 18)(27, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 22)(38, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 26)(49, "div", 27)(50, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReservasusuarioComponent_div_4_Template_button_click_56_listener() {
      const reserva_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.filtrarRerserva(reserva_r2.reservaId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, " GESTIONAR RESERVA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const reserva_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", reserva_r2.editable ? "no_ocupado" : "ocupado");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", reserva_r2.estadoReserva, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](reserva_r2.nombreEspacio);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](reserva_r2.tipoEspacio);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](reserva_r2.zona);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](reserva_r2.direccion);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](reserva_r2.nombreUsuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](reserva_r2.emailUsuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Inicio: ", ctx_r2.formatearFecha(reserva_r2.fechaInicio), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Fin: ", ctx_r2.formatearFecha(reserva_r2.fechaFin), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](reserva_r2.monto);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](reserva_r2.estadoReserva);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !reserva_r2.editable);
  }
}
function ReservasusuarioComponent_app_form_editar_reserva_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-form-editar-reserva", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cerrarModal", function ReservasusuarioComponent_app_form_editar_reserva_5_Template_app_form_editar_reserva_cerrarModal_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.selectedReserva = null);
    })("reservaActualizada", function ReservasusuarioComponent_app_form_editar_reserva_5_Template_app_form_editar_reserva_reservaActualizada_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.handleReservaActualizada($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("reservaId", ctx_r2.selectedReserva.reservaId)("espacioId", ctx_r2.selectedReserva.espacioId)("espacioNombre", ctx_r2.selectedReserva.nombreEspacio)("fechaInicioOriginal", ctx_r2.selectedReserva.fechaInicio)("fechaFinOriginal", ctx_r2.selectedReserva.fechaFin);
  }
}
class ReservasusuarioComponent {
  http;
  auth;
  notificationService;
  reservas_usuario = [];
  email = null;
  selectedReserva = null;
  constructor(http, auth, notificationService) {
    this.http = http;
    this.auth = auth;
    this.notificationService = notificationService;
    // Recuperamos la data de auth
    this.auth.user$.subscribe(user => {
      if (user) {
        this.email = user.email;
        this.getReservarUsser();
      } else {
        // ´posbible caso que solo haya iniciado en el login
        const usuarioLocal = JSON.parse(localStorage.getItem('usserAutenticado') || '{}');
        if (usuarioLocal) {
          this.email = usuarioLocal.email;
          this.getReservarUsser();
        }
      }
    });
  }
  // buscamos las reservas del usuario
  getReservarUsser() {
    // validamos si el email que se recupero es valido
    if (!this.email) {
      this.notificationService.error('No te has registrado aun');
      return;
    }
    // extraemos el token jwt
    this.auth.getAccessTokenSilently().subscribe({
      next: token => {
        console.log(token);
        // preparamos el formto de json que recibe el backend
        const data = {
          email: this.email
        };
        // hacemos peticion al backend con el tocken que recuperamos
        this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/api/componente/reservas/usuario`, data, {
          // agregamos el encabezado
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).subscribe({
          next: reservas => {
            // obtenemos las respuestas 
            this.reservas_usuario = reservas;
            // en dado caso que no se obtenga ninguna reserva registrada el usuario que se autentico mostramos un mensaje
            if (reservas.length == 0) {
              this.notificationService.error('Actualmente no tienes reservas registradas');
            }
          },
          error: err => {
            // en caso que se pase un erro con la peticion del backed mostramos alerta
            console.error(err);
            this.notificationService.error('Error al cargar tus reservas');
          }
        });
      },
      error: err => {
        // en caso de que tengamos un error al obtener el tocken
        console.error(err);
        this.notificationService.error('No se pudo autenticar la sesión, error en el token');
      }
    });
  }
  formatearFecha(fecha) {
    return fecha.replace('T', ' ');
  }
  filtrarRerserva(reservaId) {
    //  buscamos en la lista que hemos cargado
    const reserva = this.reservas_usuario.find(r => r.reservaId === reservaId);
    // validamos si se encontro la reserva
    if (reserva) {
      this.selectedReserva = reserva;
    } else {
      this.notificationService.error('No se encontro tu reserva seleccionada');
    }
  }
  /**
   *
   * @param event recibe un objeto
   */
  handleReservaActualizada(event) {
    // extraemos el token jwt
    this.auth.getAccessTokenSilently().subscribe({
      next: token => {
        // validamos si la accion que se intenta procesar es actualizar como horas o fechas
        if (event.accion === 'actualizar') {
          this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/api/reserva/actualizar/tiempo`, event, {
            // agregamos el encabezado
            headers: {
              Authorization: `Bearer ${token}`
            }
          }).subscribe({
            next: response => {
              // mostramos mensaje que nos devolvio el backend
              this.notificationService.success(response.message, 'Reserva actualizada');
              // actualizamos la interfaz sin recargar la pagina
              this.getReservarUsser();
            },
            error: err => {
              // mostramos error que nos devolvio el backend
              this.notificationService.error(err.error.error || 'Hubo un error al actualizar la reserva.');
            }
          });
        } else if (event.accion === 'cancelar') {
          // validamos si solo se quiere cancelar
          // solo habilitamos el espacio y cambiamos estado de la reserva
          const body = {
            reservaId: event.reservaId,
            espacioId: event.espacioId
          };
          this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/api/reserva/actualizar/cancelar`, body, {
            // agregamos el encabezado
            headers: {
              Authorization: `Bearer ${token}`
            }
          }).subscribe({
            next: response => {
              // mostramos mensaje que nos devolvio el backend
              this.notificationService.success(response.message, 'Reserva actualizada');
              // actualizamos la interfaz sin recargar la pagina
              this.getReservarUsser();
            },
            error: err => {
              // mostramos error que nos devolvio el backend
              this.notificationService.error(err.error.error || 'Hubo un error al actualizar la reserva.');
            }
          });
        }
      },
      error: err => {
        // en caso de que tengamos un error al obtener el tocken
        console.error(err);
        this.notificationService.error('No se pudo autenticar la sesión, error en el token');
      }
    });
  }
  static ɵfac = function ReservasusuarioComponent_Factory(t) {
    return new (t || ReservasusuarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ReservasusuarioComponent,
    selectors: [["app-reservasusuario"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 2,
    consts: [[1, "reservas-container"], [1, "grid-reservas"], ["class", "card-reserva", 4, "ngFor", "ngForOf"], [3, "reservaId", "espacioId", "espacioNombre", "fechaInicioOriginal", "fechaFinOriginal", "cerrarModal", "reservaActualizada", 4, "ngIf"], [1, "card-reserva"], [1, "card-imagen"], [1, "imagen-placeholder"], [1, "badge-estado", 3, "ngClass"], [1, "card-contenido"], [1, "nombre-espacio"], [1, "tipo-espacio"], [1, "icon"], [1, "info-ubicacion"], [1, "ubicacion-item"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "icon-svg"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], [1, "ubicacion-item", "secondary"], [1, "info-usuario"], [1, "usuario-item"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], [1, "info-fechas"], [1, "fecha-item"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "info-precio"], [1, "precio"], [1, "signo"], [1, "monto"], [1, "estado-reserva"], [1, "btn-accion", "disponible", 3, "click", "disabled"], [3, "cerrarModal", "reservaActualizada", "reservaId", "espacioId", "espacioNombre", "fechaInicioOriginal", "fechaFinOriginal"]],
    template: function ReservasusuarioComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Mis Reservas");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ReservasusuarioComponent_div_4_Template, 58, 13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ReservasusuarioComponent_app_form_editar_reserva_5_Template, 1, 5, "app-form-editar-reserva", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-footer");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.reservas_usuario);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedReserva);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, src_app_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, src_app_form_editar_reserva_form_editar_reserva_component__WEBPACK_IMPORTED_MODULE_2__.FormEditarReservaComponent],
    styles: ["\n\n\n\n.reservas-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #f9fafb;\n  padding: 1.5rem;\n}\n\n.reservas-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin-bottom: 2rem;\n  max-width: 80rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n\n\n.grid-reservas[_ngcontent-%COMP%] {\n  max-width: 80rem;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n  gap: 1.5rem;\n}\n\n@media (min-width: 768px) {\n  .grid-reservas[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (min-width: 1024px) {\n  .grid-reservas[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n\n\n\n.card-reserva[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n  transition: box-shadow 0.3s ease;\n}\n\n.card-reserva[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n\n\n\n.card-imagen[_ngcontent-%COMP%] {\n  position: relative;\n  height: 12rem;\n  background-image: url(https://wearecloudworks.com/wp-content/uploads/2022/01/beneficios-coworking.jpeg);\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.imagen-placeholder[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n\n\n\n\n\n.badge-estado[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  color: white;\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  text-transform: uppercase;\n}\n\n.badge-estado.ocupado[_ngcontent-%COMP%] {\n  background-color: #ef4444;\n}\n.badge-estado.no_ocupado[_ngcontent-%COMP%] {\n  background-color: #7c67db;\n}\n\n.badge-estado.disponible[_ngcontent-%COMP%] {\n  background-color: #10b981;\n}\n\n\n\n.card-contenido[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n}\n\n\n\n.nombre-espacio[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin-bottom: 0.25rem;\n}\n\n\n\n.tipo-espacio[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #6b7280;\n  font-size: 0.875rem;\n  margin-bottom: 1rem;\n}\n\n.tipo-espacio[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n\n\n\n.info-ubicacion[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.ubicacion-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  font-size: 0.875rem;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n\n.ubicacion-item.secondary[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n\n\n\n.info-usuario[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n\n.usuario-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 0.875rem;\n  color: #374151;\n  margin-bottom: 0.5rem;\n  overflow: hidden;\n}\n\n.usuario-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n\n\n.icon-svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  margin-right: 0.5rem;\n  flex-shrink: 0;\n  color: #6b7280;\n}\n\n\n\n.info-fechas[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.fecha-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 0.75rem;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n\n\n\n.info-precio[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n\n.precio[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #2563eb;\n}\n\n.precio[_ngcontent-%COMP%]   .signo[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n}\n\n.precio[_ngcontent-%COMP%]   .monto[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n}\n\n.estado-reserva[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  background-color: #f3f4f6;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem;\n}\n\n\n\n.btn-accion[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n\n.btn-accion.disponible[_ngcontent-%COMP%] {\n  background-color: #2563eb;\n  color: white;\n}\n\n.btn-accion.disponible[_ngcontent-%COMP%]:hover {\n  background-color: #1d4ed8;\n}\n\n.btn-accion.no-disponible[_ngcontent-%COMP%] {\n  background-color: #d1d5db;\n  color: #9ca3af;\n  cursor: not-allowed;\n}\n\n.btn-accion[_ngcontent-%COMP%]:disabled {\n  background-color: #d1d5db;\n  color: #9ca3af;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcmVzZXJ2YXN1c3VhcmlvL3Jlc2VydmFzdXN1YXJpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVc7QUFDWCx5QkFBeUI7QUFDekI7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0RBQWdEO0VBQ2hELFdBQVc7QUFDYjs7QUFFQTtFQUNFO0lBQ0UsZ0RBQWdEO0VBQ2xEO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdEQUFnRDtFQUNsRDtBQUNGOztBQUVBLHVCQUF1QjtBQUN2QjtFQUNFLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsMkVBQTJFO0VBQzNFLGdCQUFnQjtFQUNoQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxxRkFBcUY7QUFDdkY7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1R0FBdUc7RUFDdkcsNEJBQTRCO0VBQzVCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCOzs7OztBQUtBLG9CQUFvQjtBQUNwQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsNEJBQTRCO0FBQzVCO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLHVCQUF1QjtBQUN2QjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHNCQUFzQjtBQUN4Qjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBLDZCQUE2QjtBQUM3QjtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBLDRCQUE0QjtBQUM1QjtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHR1IGNzcyAqL1xyXG4vKiBDb250ZW5lZG9yIHByaW5jaXBhbCAqL1xyXG4ucmVzZXJ2YXMtY29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxufVxyXG5cclxuLnJlc2VydmFzLWNvbnRhaW5lciBoMSB7XHJcbiAgZm9udC1zaXplOiAxLjg3NXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMWYyOTM3O1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgbWF4LXdpZHRoOiA4MHJlbTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi8qIEdyaWQgZGUgdGFyamV0YXMgKi9cclxuLmdyaWQtcmVzZXJ2YXMge1xyXG4gIG1heC13aWR0aDogODByZW07XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBtaW5tYXgoMCwgMWZyKSk7XHJcbiAgZ2FwOiAxLjVyZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5ncmlkLXJlc2VydmFzIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAuZ3JpZC1yZXNlcnZhcyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBUYXJqZXRhIGluZGl2aWR1YWwgKi9cclxuLmNhcmQtcmVzZXJ2YSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uY2FyZC1yZXNlcnZhOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDIwcHggMjVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxMHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG59XHJcblxyXG4vKiBTZWNjacODwrNuIGRlIGltYWdlbiAqL1xyXG4uY2FyZC1pbWFnZW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEycmVtO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3dlYXJlY2xvdWR3b3Jrcy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjIvMDEvYmVuZWZpY2lvcy1jb3dvcmtpbmcuanBlZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uaW1hZ2VuLXBsYWNlaG9sZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaW5zZXQ6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qIEJhZGdlIGRlIGVzdGFkbyAqL1xyXG4uYmFkZ2UtZXN0YWRvIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxcmVtO1xyXG4gIHJpZ2h0OiAxcmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5iYWRnZS1lc3RhZG8ub2N1cGFkbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDQ0NDtcclxufVxyXG4uYmFkZ2UtZXN0YWRvLm5vX29jdXBhZG8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3YzY3ZGI7XHJcbn1cclxuXHJcbi5iYWRnZS1lc3RhZG8uZGlzcG9uaWJsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwYjk4MTtcclxufVxyXG5cclxuLyogQ29udGVuaWRvIGRlIGxhIHRhcmpldGEgKi9cclxuLmNhcmQtY29udGVuaWRvIHtcclxuICBwYWRkaW5nOiAxLjI1cmVtO1xyXG59XHJcblxyXG4vKiBOb21icmUgZGVsIGVzcGFjaW8gKi9cclxuLm5vbWJyZS1lc3BhY2lvIHtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzFmMjkzNztcclxuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xyXG59XHJcblxyXG4vKiBUaXBvIGRlIGVzcGFjaW8gKi9cclxuLnRpcG8tZXNwYWNpbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiAjNmI3MjgwO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLnRpcG8tZXNwYWNpbyAuaWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbn1cclxuXHJcbi8qIEluZm9ybWFjacODwrNuIGRlIHViaWNhY2nDg8KzbiAqL1xyXG4uaW5mby11YmljYWNpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi51YmljYWNpb24taXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGNvbG9yOiAjMzc0MTUxO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLnViaWNhY2lvbi1pdGVtLnNlY29uZGFyeSB7XHJcbiAgY29sb3I6ICM2YjcyODA7XHJcbn1cclxuXHJcbi8qIEluZm9ybWFjacODwrNuIGRlbCB1c3VhcmlvICovXHJcbi5pbmZvLXVzdWFyaW8ge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU3ZWI7XHJcbn1cclxuXHJcbi51c3VhcmlvLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGNvbG9yOiAjMzc0MTUxO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udXN1YXJpby1pdGVtIHNwYW4ge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLyogSWNvbm9zIFNWRyAqL1xyXG4uaWNvbi1zdmcge1xyXG4gIHdpZHRoOiAxcmVtO1xyXG4gIGhlaWdodDogMXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICBmbGV4LXNocmluazogMDtcclxuICBjb2xvcjogIzZiNzI4MDtcclxufVxyXG5cclxuLyogSW5mb3JtYWNpw4PCs24gZGUgZmVjaGFzICovXHJcbi5pbmZvLWZlY2hhcyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmZlY2hhLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgY29sb3I6ICMzNzQxNTE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4vKiBJbmZvcm1hY2nDg8KzbiBkZSBwcmVjaW8gKi9cclxuLmluZm8tcHJlY2lvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5wcmVjaW8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogIzI1NjNlYjtcclxufVxyXG5cclxuLnByZWNpbyAuc2lnbm8ge1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ucHJlY2lvIC5tb250byB7XHJcbiAgZm9udC1zaXplOiAxLjg3NXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uZXN0YWRvLXJlc2VydmEge1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgY29sb3I6ICM2YjcyODA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjtcclxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG59XHJcblxyXG4vKiBCb3TDg8KzbiBkZSBhY2Npw4PCs24gKi9cclxuLmJ0bi1hY2Npb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLmJ0bi1hY2Npb24uZGlzcG9uaWJsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1NjNlYjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4tYWNjaW9uLmRpc3BvbmlibGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDRlZDg7XHJcbn1cclxuXHJcbi5idG4tYWNjaW9uLm5vLWRpc3BvbmlibGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWQ1ZGI7XHJcbiAgY29sb3I6ICM5Y2EzYWY7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuLmJ0bi1hY2Npb246ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWQ1ZGI7XHJcbiAgY29sb3I6ICM5Y2EzYWY7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7473:
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationService: () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 4285);


class NotificationService {
  toastr;
  constructor(toastr) {
    this.toastr = toastr;
  }
  success(message, title = 'Éxito', duration = 5000) {
    this.toastr.success(message, title, {
      timeOut: duration,
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-top-right'
    });
  }
  error(message, title = 'Error', duration = 6000) {
    this.toastr.error(message, title, {
      timeOut: duration,
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-top-right'
    });
  }
  warning(message, title = 'Advertencia', duration = 5000) {
    this.toastr.warning(message, title, {
      timeOut: duration,
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-top-right'
    });
  }
  info(message, title = 'Información', duration = 4000) {
    this.toastr.info(message, title, {
      timeOut: duration,
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-top-right'
    });
  }
  reservaExitosa(nombreEspacio, duracion, total) {
    const message = `${nombreEspacio} reservado por ${duracion}. Total: $${total}`;
    this.success(message, 'Reserva Confirmada', 7000);
  }
  espacioNoDisponible(nombreEspacio, fechaInicio, fechaFin) {
    const message = `${nombreEspacio} no está disponible. Ya existe una reserva desde ${fechaInicio} hasta ${fechaFin}`;
    this.warning(message, 'Espacio No Disponible', 8000);
  }
  validacionFechas(tipo) {
    const mensajes = {
      pasado: 'La fecha de inicio no puede ser en el pasado',
      invalido: 'La fecha de fin debe ser posterior a la fecha de inicio',
      maximo: 'La reserva no puede exceder 30 días en el futuro'
    };
    this.warning(mensajes[tipo], 'Fechas Inválidas');
  }
  errorServidor(mensaje) {
    const mensajeDefault = 'Ocurrió un error en el servidor. Por favor intenta nuevamente.';
    this.error(mensaje || mensajeDefault, 'Error del Servidor', 7000);
  }
  autenticacionRequerida() {
    this.warning('Debes iniciar sesión para realizar una reserva', 'Autenticación Requerida');
  }
  validandoDisponibilidad() {
    this.info('Verificando disponibilidad del espacio...', 'Validando', 2000);
  }
  static ɵfac = function NotificationService_Factory(t) {
    return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: NotificationService,
    factory: NotificationService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
/* harmony import */ var _auth_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auth_config.json */ 5899);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const {
  domain,
  clientId,
  authorizationParams: {
    audience
  },
  apiUri,
  errorPath
} = _auth_config_json__WEBPACK_IMPORTED_MODULE_0__;
const environment = {
  production: false,
  apiUrl: apiUri,
  auth: {
    domain,
    clientId,
    authorizationParams: {
      ...(audience && audience !== '{yourApiIdentifier}' ? {
        audience
      } : null),
      redirect_uri: window.location.origin
    },
    errorPath
  },
  httpInterceptor: {
    allowedList: [`${apiUri}/*`]
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app-routing.module */ 4114);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/auth0-angular */ 7989);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 5312);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-highlightjs */ 4891);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 4285);










(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, {
  providers: [(0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.provideAnimations)(), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.withInterceptors)([_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__.authHttpInterceptorFn])), (0,_angular_router__WEBPACK_IMPORTED_MODULE_7__.provideRouter)(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.routes), (0,_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__.provideAuth0)({
    ..._environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.auth,
    httpInterceptor: {
      ..._environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.httpInterceptor
    }
  }), (0,ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.provideToastr)({
    timeOut: 5000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    progressBar: true,
    closeButton: true,
    newestOnTop: true,
    tapToDismiss: true,
    maxOpened: 3,
    autoDismiss: true
  }), {
    provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_9__.HIGHLIGHT_OPTIONS,
    useValue: {
      coreLibraryLoader: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_core_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/core */ 2885)),
      languages: {
        json: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_languages_json_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/json */ 1428))
      }
    }
  }]
});

/***/ }),

/***/ 5899:
/*!**************************!*\
  !*** ./auth_config.json ***!
  \**************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"domain":"dev-l4x7cl5jwzv51tep.us.auth0.com","clientId":"oITo5ocgxu4mRn62MPmLCgHONv3vDCec","authorizationParams":{"audience":"https://worknest-u0uz.onrender.com"},"apiUri":"https://worknest-u0uz.onrender.com","appUri":"https://worknest-71nj.onrender.com","errorPath":"/error"}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map