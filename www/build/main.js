webpackJsonp([0],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__caseiro_caseiro__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__receita_receita__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bula_bula__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, auth) {
        this.navCtrl = navCtrl;
        this.auth = auth;
    }
    HomePage.prototype.irremedio = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__receita_receita__["a" /* ReceitaPage */]);
    };
    HomePage.prototype.ircaseiro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__caseiro_caseiro__["a" /* CaseiroPage */]);
    };
    HomePage.prototype.irbula = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__bula_bula__["a" /* BulaPage */]);
    };
    HomePage.prototype.signOut = function () {
        this.auth.auth.signOut();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\rafae\OneDrive\Documentos\bulario\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title style=" float: left; margin-left: 32%; text-align: center;">\n    Meu Bulário\n    </ion-title>\n    <button color="primary" ion-button icon-only (click)="signOut()" style="float: right;">\n      <ion-icon (click)="signOut()" color="danger" name="power"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="home">\n\n  <img src="assets/imgs/icone_principal.png" class="logo"/>\n\n  <button ion-button block class="button1" (click)="irremedio()">cadastrar remedio</button>\n  <button ion-button block class="button2" (click)="ircaseiro()">Cadastrar Remedio Caseiro</button>\n  <button ion-button block class="button3" (click)="irbula()">Bula</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\rafae\OneDrive\Documentos\bulario\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaseiroProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CaseiroProvider = (function () {
    function CaseiroProvider(db) {
        this.db = db;
        this.PATH = 'caseiros/';
    }
    CaseiroProvider.prototype.getAll = function () {
        return this.db.list(this.PATH, function (ref) { return ref.orderByChild('problema'); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    CaseiroProvider.prototype.get = function (key) {
        return this.db.object(this.PATH + key).snapshotChanges()
            .map(function (c) {
            return __assign({ key: c.key }, c.payload.val());
        });
    };
    CaseiroProvider.prototype.save = function (caseiro) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (caseiro.key) {
                _this.db.list(_this.PATH)
                    .update(caseiro.key, { problema: caseiro.problema, ingredientes: caseiro.ingredientes })
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            }
            else {
                _this.db.list(_this.PATH)
                    .push({ problema: caseiro.problema, ingredientes: caseiro.ingredientes })
                    .then(function () { return resolve(); });
            }
        });
    };
    CaseiroProvider.prototype.remove = function (key) {
        return this.db.list(this.PATH).remove(key);
    };
    CaseiroProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], CaseiroProvider);
    return CaseiroProvider;
}());

//# sourceMappingURL=caseiro.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceitaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReceitaProvider = (function () {
    function ReceitaProvider(db) {
        this.db = db;
        this.PATH = 'receitas/';
    }
    ReceitaProvider.prototype.getAll = function () {
        return this.db.list(this.PATH, function (ref) { return ref.orderByChild('problema'); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    ReceitaProvider.prototype.get = function (key) {
        return this.db.object(this.PATH + key).snapshotChanges()
            .map(function (c) {
            return __assign({ key: c.key }, c.payload.val());
        });
    };
    ReceitaProvider.prototype.save = function (receita) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (receita.key) {
                _this.db.list(_this.PATH)
                    .update(receita.key, { problema: receita.problema, bula: receita.bula,
                    horario: receita.horario, quantidade: receita.quantidade })
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            }
            else {
                _this.db.list(_this.PATH)
                    .push({ problema: receita.problema, bula: receita.bula,
                    horario: receita.horario, quantidade: receita.quantidade })
                    .then(function () { return resolve(); });
            }
        });
    };
    ReceitaProvider.prototype.remove = function (key) {
        return this.db.list(this.PATH).remove(key);
    };
    ReceitaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ReceitaProvider);
    return ReceitaProvider;
}());

//# sourceMappingURL=receita.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BulaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BulaProvider = (function () {
    function BulaProvider(db) {
        this.db = db;
        this.PATH = 'bulas/';
    }
    BulaProvider.prototype.getAll = function () {
        return this.db.list(this.PATH, function (ref) { return ref.orderByChild('bula'); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    BulaProvider.prototype.get = function (key) {
        return this.db.object(this.PATH + key).snapshotChanges()
            .map(function (c) {
            return __assign({ key: c.key }, c.payload.val());
        });
    };
    BulaProvider.prototype.save = function (bula) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (bula.key) {
                _this.db.list(_this.PATH)
                    .update(bula.key, { remedio: bula.remedio,
                    descricao: bula.descricao, quantidade: bula.quantidade })
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            }
            else {
                _this.db.list(_this.PATH)
                    .push({ remedio: bula.remedio,
                    descricao: bula.descricao, quantidade: bula.quantidade })
                    .then(function () { return resolve(); });
            }
        });
    };
    BulaProvider.prototype.remove = function (key) {
        return this.db.list(this.PATH).remove(key);
    };
    BulaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], BulaProvider);
    return BulaProvider;
}());

//# sourceMappingURL=bula.js.map

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 208;

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Login = (function () {
    function Login(ofAuth, navCtrl, navParams) {
        this.ofAuth = ofAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    Login.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.user.password && this.user.email) {
                    this.ofAuth.auth.signInWithEmailAndPassword(user.email, user.password)
                        .then(function (auth) {
                        // Do custom things with auth
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                    })
                        .catch(function (err) {
                        // Handle error
                        document.getElementById('msgError').style.display = 'block';
                        return;
                    });
                }
                else {
                    document.getElementById('msgError').style.display = 'block';
                    return [2 /*return*/];
                }
                return [2 /*return*/];
            });
        });
    };
    Login.prototype.voltar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* Welcome */]);
    };
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\rafae\OneDrive\Documentos\bulario\src\pages\login\login.html"*/'<ion-content padding id="login">\n  <img src="assets/imgs/icone_principal.png" class="logo"/>\n  <h1> Meu bulário </h1>\n  <h4> Efetue seu login ! </h4>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label fixed>Email</ion-label>\n      <ion-input id="email" type="text" [(ngModel)]="user.email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed>Senha</ion-label>\n      <ion-input id="password" type="password" [(ngModel)]="user.password"></ion-input>\n    </ion-item>\n\n    <div id="msgError" style="display: none" class="message-alert-error">\n      <span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span>\n      E-mail ou senha incorretos !\n    </div>\n\n    <button ion-button block color="primary" class="marginTop" (click)="login(user)">Entrar</button>\n    <button ion-button block color="danger" class="button2" (click)="voltar()">Cancelar</button>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\rafae\OneDrive\Documentos\bulario\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaseiroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_caseiro_caseiro__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__remedio_caseiro_remedio_caseiro__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CaseiroPage = (function () {
    function CaseiroPage(navCtrl, provider, toast) {
        this.navCtrl = navCtrl;
        this.provider = provider;
        this.toast = toast;
        this.caseiros = this.provider.getAll();
    }
    CaseiroPage.prototype.novaCaseiro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__remedio_caseiro_remedio_caseiro__["a" /* RemedioCaseiroPage */]);
    };
    CaseiroPage.prototype.editCaseiro = function (caseiro) {
        // Maneira 1
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__remedio_caseiro_remedio_caseiro__["a" /* RemedioCaseiroPage */], { caseiro: caseiro });
        // Maneira 2
        // this.navCtrl.push('RemedioCaseiroPage', { key: caseiro.key });
    };
    CaseiroPage.prototype.removeCaseiro = function (key) {
        var _this = this;
        if (key) {
            this.provider.remove(key)
                .then(function () {
                _this.toast.create({ message: 'Receita caseira removida com sucesso.', duration: 3000 }).present();
            })
                .catch(function () {
                _this.toast.create({ message: 'Erro ao remover a receita caseira.', duration: 3000 }).present();
            });
        }
    };
    CaseiroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-caseiro',template:/*ion-inline-start:"C:\Users\rafae\OneDrive\Documentos\bulario\src\pages\caseiro\caseiro.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Caseiro\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let caseiro of caseiros | async">\n      <ion-item>\n        <h1>{{ caseiro.problema }}</h1>\n        <p>{{ caseiro.ingredientes }}</p>\n        <button ion-button color="secondary" (click)="editCaseiro(caseiro)">\n          <ion-icon name="create"></ion-icon>\n        </button>\n        <button ion-button color="danger" (click)="removeCaseiro(caseiro.key)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab bottom right>\n     <button ion-fab color="primary" (click)="novaCaseiro()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\rafae\OneDrive\Documentos\bulario\src\pages\caseiro\caseiro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_caseiro_caseiro__["a" /* CaseiroProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */]])
    ], CaseiroPage);
    return CaseiroPage;
}());

//# sourceMappingURL=caseiro.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemedioCaseiroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_caseiro_caseiro__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RemedioCaseiroPage = (function () {
    function RemedioCaseiroPage(navCtrl, navParams, formBuilder, provider, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.provider = provider;
        this.toast = toast;
        this.caseiro = this.navParams.data.caseiro || {};
        this.createForm();
        this.setupPageTitle();
    }
    RemedioCaseiroPage.prototype.setupPageTitle = function () {
        this.title = this.navParams.data.caseiro ? 'Alterando receita caseira' : 'Nova receita caseira';
    };
    RemedioCaseiroPage.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            key: [this.caseiro.key],
            problema: [this.caseiro.problema, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            ingredientes: [this.caseiro.ingredientes, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
    };
    RemedioCaseiroPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.provider.save(this.form.value)
                .then(function () {
                _this.toast.create({ message: 'Receita caseira salva com sucesso.', duration: 3000 }).present();
                _this.navCtrl.pop();
            })
                .catch(function (e) {
                _this.toast.create({ message: 'Erro ao salvar a receita caseira.', duration: 3000 }).present();
                console.error(e);
            });
        }
    };
    RemedioCaseiroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-remedio-caseiro',template:/*ion-inline-start:"C:\Users\rafae\OneDrive\Documentos\bulario\src\pages\remedio-caseiro\remedio-caseiro.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ title }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]="form">\n    <ion-item>\n      <ion-label stacked>Problema</ion-label>\n      <ion-input type="text" formControlName="problema"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.problema.valid && (form.controls.problema.dirty || form.controls.problema.touched)" color="danger">\n      <div [hidden]="!form.controls.problema.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Ingredientes</ion-label>\n      <ion-input type="text" formControlName="ingredientes"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.ingredientes.valid && (form.controls.ingredientes.dirty || form.controls.ingredientes.touched)" color="danger">\n      <div [hidden]="!form.controls.ingredientes.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n\n    <div padding>\n      <button ion-button block type="submit" [disabled]="!form.valid" (click)="onSubmit()">Salvar</button>\n    </div>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\rafae\OneDrive\Documentos\bulario\src\pages\remedio-caseiro\remedio-caseiro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__providers_caseiro_caseiro__["a" /* CaseiroProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], RemedioCaseiroPage);
    return RemedioCaseiroPage;
}());

//# sourceMappingURL=remedio-caseiro.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceitaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_receita_receita__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__receita_edit_receita_edit__ = __webpack_require__(315);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReceitaPage = (function () {
    function ReceitaPage(navCtrl, provider, toast) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.provider = provider;
        this.toast = toast;
        this.receitas = this.provider.getAll();
        this.receitaRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/receitas');
        this.receitaRef.on('value', function (receitaList) {
            var receitas = [];
            receitaList.forEach(function (receita) {
                var newObj = receita.val();
                newObj['key'] = receita.key;
                receitas.push(newObj);
                return false;
            });
            _this.receitaList = receitas;
            _this.loadedReceitaList = receitas;
        });
    }
    ReceitaPage.prototype.initializeItems = function () {
        this.receitaList = this.loadedReceitaList;
    };
    ReceitaPage.prototype.getItems = function (searchbar) {
        // Reset items back to all of the items
        this.initializeItems();
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.receitaList = this.receitaList.filter(function (v) {
            if (v.problema && q) {
                if (v.problema.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        console.log(q, this.receitaList.length);
    };
    ReceitaPage.prototype.novaReceita = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__receita_edit_receita_edit__["a" /* ReceitaEditPage */]);
    };
    ReceitaPage.prototype.editReceita = function (receita) {
        // Maneira 1
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__receita_edit_receita_edit__["a" /* ReceitaEditPage */], { receita: receita });
        // Maneira 2
        // this.navCtrl.push('ReceitaEditPage', { key: receita.key });
    };
    ReceitaPage.prototype.removeReceita = function (key) {
        var _this = this;
        if (key) {
            this.provider.remove(key)
                .then(function () {
                _this.toast.create({ message: 'Receita removida com sucesso.', duration: 3000 }).present();
            })
                .catch(function () {
                _this.toast.create({ message: 'Erro ao remover a receita.', duration: 3000 }).present();
            });
        }
    };
    ReceitaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-receita',template:/*ion-inline-start:"C:\Users\rafae\OneDrive\Documentos\bulario\src\pages\receita\receita.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Receitas\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <ion-list>\n    <ion-item-sliding *ngFor="let receita of receitaList">\n      <ion-item>\n        <h1>{{ receita.problema }}</h1>\n        <p>{{ receita.bula }}</p>\n        <p>{{ receita.horario }}</p>\n        <p>{{ receita.quantidade }}</p>\n        <button ion-button color="secondary" (click)="editReceita(receita)">\n          <ion-icon name="create"></ion-icon>\n        </button>\n        <button ion-button color="danger" (click)="removeReceita(receita.key)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab bottom right>\n    <button ion-fab color="primary" (click)="novaReceita()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\rafae\OneDrive\Documentos\bulario\src\pages\receita\receita.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_receita_receita__["a" /* ReceitaProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */]])
    ], ReceitaPage);
    return ReceitaPage;
}());

//# sourceMappingURL=receita.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceitaEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_receita_receita__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReceitaEditPage = (function () {
    function ReceitaEditPage(navCtrl, navParams, formBuilder, provider, toast) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.provider = provider;
        this.toast = toast;
        this.bulas = [];
        // maneira 1
        this.receita = this.navParams.data.receita || {};
        var bulasRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('/bulas');
        bulasRef.on('value', function (bulas) {
            console.log("bulas", bulas);
            bulas.forEach(function (bula) {
                _this.bulas.push(bula.val());
                return false;
            });
        });
        this.createForm();
        // // maneira 2
        // this.receita = { };
        // this.createForm();
        // if (this.navParams.data.key) {
        //   const subscribe = this.provider.get(this.navParams.data.key).subscribe((c: any) => {
        //     subscribe.unsubscribe();
        //     this.receita = c;
        //     this.createForm();
        //   })
        // }
        this.setupPageTitle();
    }
    ReceitaEditPage.prototype.setupPageTitle = function () {
        this.title = this.navParams.data.receita ? 'Alterando receita' : 'Nova receita';
    };
    ReceitaEditPage.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            key: [this.receita.key],
            problema: [this.receita.problema, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            bula: [this.receita.bula, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            horario: [this.receita.horario, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            quantidade: [this.receita.quantidade, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
    };
    ReceitaEditPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.provider.save(this.form.value)
                .then(function () {
                _this.toast.create({ message: 'Receita salva com sucesso.', duration: 3000 }).present();
                _this.navCtrl.pop();
            })
                .catch(function (e) {
                _this.toast.create({ message: 'Erro ao salvar a receita.', duration: 3000 }).present();
                console.error(e);
            });
        }
    };
    ReceitaEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-receita-edit',template:/*ion-inline-start:"C:\Users\rafae\OneDrive\Documentos\bulario\src\pages\receita-edit\receita-edit.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ title }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]="form">\n    <ion-item>\n      <ion-label stacked>Problema</ion-label>\n      <ion-input type="text" formControlName="problema"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.problema.valid && (form.controls.problema.dirty || form.controls.problema.touched)" color="danger">\n      <div [hidden]="!form.controls.problema.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Bulas</ion-label>\n      <!--<ion-input type="text" formControlName="bula"></ion-input>-->\n      <ion-select [(ngModel)]="receita.bula" formControlName="bula">\n        <ion-option *ngFor="let bula of bulas" value="{{bula.remedio}}">{{bula.remedio}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.bula.valid && (form.controls.bula.dirty || form.controls.bula.touched)" color="danger">\n      <div [hidden]="!form.controls.bula.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Horario</ion-label>\n      <ion-input type="text" formControlName="horario"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.horario.valid && (form.controls.horario.dirty || form.controls.horario.touched)" color="danger">\n      <div [hidden]="!form.controls.horario.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Quantidade</ion-label>\n      <ion-input type="text" formControlName="quantidade"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.quantidade.valid && (form.controls.quantidade.dirty || form.controls.quantidade.touched)" color="danger">\n      <div [hidden]="!form.controls.quantidade.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n\n    <div padding>\n      <button ion-button block type="submit" [disabled]="!form.valid" (click)="onSubmit()">Salvar</button>\n    </div>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\rafae\OneDrive\Documentos\bulario\src\pages\receita-edit\receita-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__providers_receita_receita__["a" /* ReceitaProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */]])
    ], ReceitaEditPage);
    return ReceitaEditPage;
}());

//# sourceMappingURL=receita-edit.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BulaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_bula_bula__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bula_edit_bula_edit__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BulaPage = (function () {
    function BulaPage(navCtrl, provider, toast) {
        this.navCtrl = navCtrl;
        this.provider = provider;
        this.toast = toast;
        this.bulas = this.provider.getAll();
    }
    BulaPage.prototype.novaBula = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__bula_edit_bula_edit__["a" /* BulaEditPage */]);
    };
    BulaPage.prototype.editBula = function (bula) {
        // Maneira 1
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__bula_edit_bula_edit__["a" /* BulaEditPage */], { bula: bula });
        // Maneira 2
        // this.navCtrl.push('BulaEditPage', { key: bula.key });
    };
    BulaPage.prototype.removeBula = function (key) {
        var _this = this;
        if (key) {
            this.provider.remove(key)
                .then(function () {
                _this.toast.create({ message: 'Bula removida com sucesso.', duration: 3000 }).present();
            })
                .catch(function () {
                _this.toast.create({ message: 'Erro ao remover a bula.', duration: 3000 }).present();
            });
        }
    };
    BulaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-bula',template:/*ion-inline-start:"C:\Users\rafae\OneDrive\Documentos\bulario\src\pages\bula\bula.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Bulas\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let bula of bulas | async">\n      <ion-item>\n        <h1>{{ bula.remedio }}</h1>\n        <p>{{ bula.descricao }}</p>\n        <p>{{ bula.quantidade }}</p>\n        <button ion-button color="secondary" (click)="editBula(bula)">\n          <ion-icon name="create"></ion-icon>\n        </button>\n        <button ion-button color="danger" (click)="removeBula(bula.key)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab bottom right>\n    <button ion-fab color="primary" (click)="novaBula()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\rafae\OneDrive\Documentos\bulario\src\pages\bula\bula.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_bula_bula__["a" /* BulaProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */]])
    ], BulaPage);
    return BulaPage;
}());

//# sourceMappingURL=bula.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BulaEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_bula_bula__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BulaEditPage = (function () {
    function BulaEditPage(navCtrl, navParams, formBuilder, provider, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.provider = provider;
        this.toast = toast;
        this.bula = this.navParams.data.bula || {};
        this.createForm();
        this.setupPageTitle();
    }
    BulaEditPage.prototype.setupPageTitle = function () {
        this.title = this.navParams.data.bula ? 'Alterando bula' : 'Nova bula';
    };
    BulaEditPage.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            key: [this.bula.key],
            remedio: [this.bula.remedio, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            descricao: [this.bula.descricao, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            quantidade: [this.bula.quantidade, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
    };
    BulaEditPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.provider.save(this.form.value)
                .then(function () {
                _this.toast.create({ message: 'Bula salva com sucesso.', duration: 3000 }).present();
                _this.navCtrl.pop();
            })
                .catch(function (e) {
                _this.toast.create({ message: 'Erro ao salvar a bula.', duration: 3000 }).present();
                console.error(e);
            });
        }
    };
    BulaEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bula-edit',template:/*ion-inline-start:"C:\Users\rafae\OneDrive\Documentos\bulario\src\pages\bula-edit\bula-edit.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ title }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]="form">\n    <ion-item>\n      <ion-label stacked>Remedio</ion-label>\n      <ion-input type="text" formControlName="remedio"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.remedio.valid && (form.controls.remedio.dirty || form.controls.remedio.touched)" color="danger">\n      <div [hidden]="!form.controls.remedio.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Descricao</ion-label>\n      <ion-input type="text" formControlName="descricao"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.descricao.valid && (form.controls.descricao.dirty || form.controls.descricao.touched)" color="danger">\n      <div [hidden]="!form.controls.descricao.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Quantidade</ion-label>\n      <ion-input type="text" formControlName="quantidade"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.quantidade.valid && (form.controls.quantidade.dirty || form.controls.quantidade.touched)" color="danger">\n      <div [hidden]="!form.controls.quantidade.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n\n    <div padding>\n      <button ion-button block type="submit" [disabled]="!form.valid" (click)="onSubmit()">Salvar</button>\n    </div>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\rafae\OneDrive\Documentos\bulario\src\pages\bula-edit\bula-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__providers_bula_bula__["a" /* BulaProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], BulaEditPage);
    return BulaEditPage;
}());

//# sourceMappingURL=bula-edit.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Signup = (function () {
    function Signup(navCtrl, navParams, alertCtrl, ofAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.ofAuth = ofAuth;
        this.user = {};
        this.user.email = this.navParams.get('email');
    }
    Signup.prototype.signup = function () {
        var _this = this;
        if (this.user.password && this.user.passwordRetyped) {
            if (this.user.password !== this.user.passwordRetyped) {
                var alert_1 = this.alertCtrl.create({
                    title: 'Erro !',
                    message: 'As senhas não conferem, por favor digite-as novamente !',
                    buttons: ['Confirmar']
                });
                alert_1.present();
                return;
            }
            if (this.user.password.length < 6) {
                var alert_2 = this.alertCtrl.create({
                    title: 'Erro !',
                    message: 'A senha deve conter no mínimo 6 dígitos !',
                    buttons: ['Confirmar']
                });
                alert_2.present();
                return;
            }
            // Firebase Signup Code
            this.ofAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password)
                .then(function (auth) {
                // Could do something with the Auth-Response
                var alert = _this.alertCtrl.create({
                    title: 'Bem-vindo ao Meu Bulário!',
                    message: 'Usuário cadastrado com sucesso !',
                    buttons: ['Confirmar']
                });
                alert.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            })
                .catch(function (err) {
                // Handle error
                if (err.code == "auth/invalid-email") {
                    var alert_3 = _this.alertCtrl.create({
                        title: 'Erro',
                        message: 'Endereço de e-mail inválido !',
                        buttons: ['Confirmar']
                    });
                    alert_3.present();
                    return;
                }
                var alert = _this.alertCtrl.create({
                    title: 'Error',
                    message: err.message,
                    buttons: ['Confirmar']
                });
                alert.present();
                return;
            });
        }
        else {
            var alert_4 = this.alertCtrl.create({
                title: 'Error',
                message: 'Todos os campos são obrigatórios!',
                buttons: ['Confirmar']
            });
            alert_4.present();
            return;
        }
    };
    Signup.prototype.voltar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* Welcome */]);
    };
    Signup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\rafae\OneDrive\Documentos\bulario\src\pages\signup\signup.html"*/'<ion-content padding id="signup">\n  <img src="assets/imgs/icone_principal.png" class="logo"/>\n  <h1> Meu bulário </h1>\n  <h4> Cadastre-se ! </h4>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label fixed>Email</ion-label>\n      <ion-input id="email" type="text" [(ngModel)]="user.email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed>Senha</ion-label>\n      <ion-input id="password" type="password" [(ngModel)]="user.password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed>Confirme a senha</ion-label>\n      <ion-input type="password" [(ngModel)]="user.passwordRetyped"></ion-input>\n    </ion-item>\n\n    <button class="marginTop" ion-button block color="primary" (click)="signup(user)">Cadastrar</button>\n    <button class="button2" ion-button block color="danger" (click)="voltar()">Cancelar</button>\n\n  </ion-list>\n</ion-content>\n<script>\n  $(\'\')\n</script>\n'/*ion-inline-end:"C:\Users\rafae\OneDrive\Documentos\bulario\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], Signup);
    return Signup;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(340);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_firebase_config__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_receita_receita__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_receita_receita__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_receita_edit_receita_edit__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_caseiro_caseiro__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_bula_bula__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_caseiro_caseiro__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_bula_bula__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_bula_edit_bula_edit__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_remedio_caseiro_remedio_caseiro__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_remedio_caseiro_remedio_caseiro__["a" /* RemedioCaseiroPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_caseiro_caseiro__["a" /* CaseiroPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* Welcome */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* Signup */],
                __WEBPACK_IMPORTED_MODULE_21__pages_bula_bula__["a" /* BulaPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_bula_edit_bula_edit__["a" /* BulaEditPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_receita_receita__["a" /* ReceitaPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_receita_edit_receita_edit__["a" /* ReceitaEditPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_14__app_firebase_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_remedio_caseiro_remedio_caseiro__["a" /* RemedioCaseiroPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_caseiro_caseiro__["a" /* CaseiroPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* Welcome */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* Signup */],
                __WEBPACK_IMPORTED_MODULE_21__pages_bula_bula__["a" /* BulaPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_bula_edit_bula_edit__["a" /* BulaEditPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_receita_receita__["a" /* ReceitaPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_receita_edit_receita_edit__["a" /* ReceitaEditPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_receita_receita__["a" /* ReceitaProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_caseiro_caseiro__["a" /* CaseiroProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_bula_bula__["a" /* BulaProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, afAuth, statusBar, splashScreen) {
        var _this = this;
        this.afAuth = afAuth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* Welcome */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.afAuth.authState.subscribe(function (auth) {
            if (!auth)
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* Welcome */];
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\rafae\OneDrive\Documentos\bulario\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\rafae\OneDrive\Documentos\bulario\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\rafae\OneDrive\Documentos\bulario\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\rafae\OneDrive\Documentos\bulario\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyCfPZP3hJ28ERclDsmMRuuVJwKbJ7Xkxk4",
    authDomain: "bulario-fcf82.firebaseapp.com",
    databaseURL: "https://bulario-fcf82.firebaseio.com",
    projectId: "bulario-fcf82",
    storageBucket: "bulario-fcf82.appspot.com",
    messagingSenderId: "108097571445"
};
//# sourceMappingURL=app.firebase.config.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Welcome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Welcome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Welcome = (function () {
    function Welcome(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Welcome.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* Login */]);
    };
    Welcome.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* Signup */], {}, { animate: false });
    };
    Welcome = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\rafae\OneDrive\Documentos\bulario\src\pages\welcome\welcome.html"*/'<ion-content padding id="welcome">\n\n  <img src="assets/imgs/icone_principal.png" class="logo"/>\n\n  <div>\n    <h1> Bem vindo ao meu bulário </h1>\n    <h6>Crie suas receitas e rotinas repassadas pelo médico!</h6>\n  </div>\n\n  <button ion-button block class="marginTop" (click)="login()">Entrar</button>\n  <button ion-button block class="button2" (click)="signup()">Cadastrar-se!</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\rafae\OneDrive\Documentos\bulario\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Welcome);
    return Welcome;
}());

//# sourceMappingURL=welcome.js.map

/***/ })

},[319]);
//# sourceMappingURL=main.js.map