/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/browser.ts":
/*!************************!*\
  !*** ./src/browser.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Browser = /** @class */ (function () {
    function Browser(browser) {
        this._browser = browser;
    }
    Browser.prototype.getOS = function () {
        var e = this._browser.userAgent, t = this._browser.platform;
        var n = "Other";
        return this.isMobile() && (-1 !== ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod", "MacIntel"].indexOf(t) || /iPhone/.test(e) ? n = "iOS" : /Android/.test(e) && (n = "Android")), n;
    };
    Browser.prototype.isMobile = function () {
        return new RegExp(/webOS|(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i).test(this._browser.userAgent) || new RegExp("/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i").test(this._browser.userAgent.substring(0, 4));
    };
    return Browser;
}());
exports["default"] = Browser;


/***/ }),

/***/ "./src/dict.ts":
/*!*********************!*\
  !*** ./src/dict.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Dict = /** @class */ (function () {
    function Dict() {
    }
    Dict.ENTER_BANK_NAME = "Введите название банка";
    Dict.PAYMENT_TITLE = "Выберите банк для подтверждения оплаты";
    Dict.SUBSCRIPTION_TITLE = "Выберите банк для привязки счёта";
    Dict.NO_MATCHING_ITEMS = "По Вашему запросу результатов не найдено";
    return Dict;
}());
exports["default"] = Dict;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var browser_1 = __importDefault(__webpack_require__(/*! ./browser */ "./src/browser.ts"));
var dict_1 = __importDefault(__webpack_require__(/*! ./dict */ "./src/dict.ts"));
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var SlideUpWidget = /** @class */ (function () {
    function SlideUpWidget(storage, nav) {
        this.storageName = "slideUpWidget.v1";
        this._localStorage = storage;
        this.platform = new browser_1.default(nav || { userAgent: "", platform: "" }).getOS();
    }
    SlideUpWidget.prototype.saveInLocalStorage = function (data) {
        this._localStorage.setItem(this.storageName, JSON.stringify(data));
    };
    SlideUpWidget.prototype.loadFromLocalStorage = function () {
        return this._localStorage.getItem(this.storageName);
    };
    SlideUpWidget.prototype.loadBankDictionary = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fetch(url)];
                    case 1: return [2 /*return*/, (_a.sent()).json()];
                    case 2:
                        err_1 = _a.sent();
                        throw new Error("banksCacheIsEmpty");
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SlideUpWidget.prototype.getBankList = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var requset_url, err_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        requset_url = "https://".concat((0, utils_1.getProvider)(url), ".nspk.ru/proxyapp/c2bmembers.json");
                        return [4 /*yield*/, this.loadBankDictionary(requset_url)];
                    case 1: return [2 /*return*/, (_a.sent()).dictionary.map((function (t) { return ({
                            bankName: t.bankName,
                            logoURL: t.logoURL,
                            dboLink: (0, utils_1.getDboLink)(t, url, _this.platform)
                        }); }))];
                    case 2:
                        err_2 = _a.sent();
                        console.error(err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SlideUpWidget.prototype.showQRCode = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    SlideUpWidget.prototype.showBankSelector = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var head, meta, bankList, widgetDiv, header, logo, title, close, search, savedData, links, parsedData_1, temp_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.closeWidget();
                        head = document.head, meta = document.createElement("meta");
                        meta.setAttribute("id", "widget-nspk");
                        meta.setAttribute("name", "viewport");
                        meta.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no");
                        head.appendChild(meta);
                        return [4 /*yield*/, this.getBankList(url)];
                    case 1:
                        bankList = _a.sent();
                        widgetDiv = document.createElement("div");
                        widgetDiv.className = "slide-up-widget";
                        header = document.createElement("div"), logo = document.createElement("img"), title = document.createElement("div"), close = document.createElement("div");
                        title.innerText = "sub" === (0, utils_1.getProvider)(url) ? dict_1.default.SUBSCRIPTION_TITLE : dict_1.default.PAYMENT_TITLE;
                        close.innerText = "×";
                        logo.src = "https://sbp.nspk.ru/i/logo-black.svg";
                        header.className = "slide-up-widget__header";
                        logo.className = "slide-up-widget__header-image";
                        title.className = "slide-up-widget__header-text";
                        close.className = "slide-up-widget__header-close-btn";
                        close.addEventListener("click", (function () { _this.closeWidget(); }));
                        header.appendChild(logo);
                        header.appendChild(close);
                        header.appendChild(title);
                        widgetDiv.appendChild(header);
                        search = document.createElement("input");
                        search.setAttribute("placeholder", dict_1.default.ENTER_BANK_NAME);
                        search.className = "slide-up-widget__input";
                        search.addEventListener("input", (function (event) {
                            var value = event.target.value;
                            if (value && value.length > 1) {
                                document.querySelectorAll(".slide-up-widget__bank-title").forEach((function (element) {
                                    var bank = element.closest(".slide-up-widget__bank");
                                    if (bank != null) {
                                        var cn = bank.className;
                                        if (element.innerHTML.toLowerCase().indexOf(value.toLowerCase()) === -1 || bank.className.indexOf("used") !== -1) {
                                            if (cn.indexOf("hide") === -1) {
                                                bank.className = cn + " slide-up-widget__bank--hide";
                                            }
                                            else {
                                                bank.classList.remove("slide-up-widget__bank--hide");
                                            }
                                        }
                                    }
                                }));
                                var e = document.querySelector(".slide-up-widget__title--used");
                                e && -1 === e.className.indexOf("hide") && (e.className = e.className + " slide-up-widget__title--hide");
                            }
                            else {
                                document.querySelectorAll(".slide-up-widget__bank--hide").forEach((function (e) { e.classList.remove("slide-up-widget__bank--hide"); }));
                                var e = document.querySelector(".slide-up-widget__title--used");
                                e && e.classList.remove("slide-up-widget__title--hide");
                            }
                            var suw_empty = document.querySelector(".slide-up-widget__empty");
                            if (suw_empty != null) {
                                if (document.querySelectorAll(".slide-up-widget__bank--hide:not(.slide-up-widget__bank--used)").length >= bankList.length) {
                                    if (!document.querySelector(".slide-up-widget__empty")) {
                                        var t = document.createElement("div");
                                        t.innerText = dict_1.default.NO_MATCHING_ITEMS;
                                        t.className = "slide-up-widget__empty";
                                        widgetDiv.appendChild(t);
                                    }
                                }
                                else {
                                    suw_empty.remove();
                                }
                            }
                        }));
                        widgetDiv.appendChild(search);
                        savedData = this.loadFromLocalStorage();
                        links = bankList;
                        if (savedData) {
                            parsedData_1 = JSON.parse(savedData), temp_1 = [];
                            parsedData_1.forEach(function (e) {
                                var n = links.find((function (t) { return t.bankName === e; }));
                                n && temp_1.push(n);
                            });
                            links = __spreadArray(__spreadArray([], temp_1, true), bankList.filter((function (t) { return parsedData_1.every((function (e) { return t.bankName !== e; })); })), true);
                        }
                        links.forEach((function (e) {
                            var link = document.createElement("a"), linkLogo = document.createElement("img"), linkTitle = document.createElement("div"), dboLink = e.dboLink;
                            link.className = "slide-up-widget__bank";
                            linkLogo.className = "slide-up-widget__bank-logo";
                            linkTitle.className = "slide-up-widget__bank-title";
                            link.setAttribute("href", dboLink);
                            linkLogo.src = e.logoURL;
                            linkTitle.innerText = e.bankName;
                            link.appendChild(linkLogo);
                            link.appendChild(linkTitle);
                            widgetDiv.appendChild(link);
                        }));
                        widgetDiv.addEventListener("click", (function (e) {
                            console.log(e);
                            var t = e.target.closest(".slide-up-widget__bank");
                            if (t) {
                                var e_1 = t.querySelector(".slide-up-widget__bank-title").innerText, n = JSON.parse(_this.loadFromLocalStorage());
                                if (!n || n.some((function (t) { return t === e_1; })))
                                    if ((null == n ? void 0 : n.length) > 0) {
                                        var t_1 = n.splice(n.indexOf(e_1), 1);
                                        _this.saveInLocalStorage(__spreadArray(__spreadArray([], t_1, true), n, true));
                                    }
                                    else
                                        _this.saveInLocalStorage([e_1]);
                                else
                                    (null == n ? void 0 : n.length) > 2 && n.pop(), _this.saveInLocalStorage(__spreadArray([e_1], n, true));
                            }
                        }));
                        document.body.appendChild(widgetDiv);
                        return [2 /*return*/];
                }
            });
        });
    };
    SlideUpWidget.prototype.closeWidget = function () {
        var e = document.head.querySelector("#widget-nspk");
        e && e.remove();
        var t = document.querySelector(".slide-up-widget");
        t && t.parentNode && t.parentNode.removeChild(t);
    };
    return SlideUpWidget;
}());
exports["default"] = SlideUpWidget;


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getDboLink = exports.getProvider = void 0;
function getProvider(url) {
    if (!/https:\/\/(qr|sub).nspk.ru\/\w{0,32}(\?)?/.test(url)) {
        throw new Error("invalidURLString");
    }
    return -1 === url.indexOf("sub.nspk.ru") ? "qr" : "sub";
}
exports.getProvider = getProvider;
function getDboLink(e, t, n) {
    var i = t.replace("https://", "".concat(e.schema, "://"));
    var r = e.isWebClientActive && (!0 === e.isWebClientActive || "true" === e.isWebClientActive);
    if ("iOS" === n && r) {
        var n_1 = t.split("/").pop().split("?")[0];
        i = "".concat(e.webClientUrl, "/").concat(n_1);
    }
    return i;
}
exports.getDboLink = getDboLink;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsMEJBQTBCO0FBQzdGO0FBQ0EsNkJBQTZCO0FBQzdCLG1IQUFtSCwwQ0FBMEMsMEJBQTBCLEtBQUs7QUFDNUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsbUJBQW1CO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsa0JBQWU7Ozs7Ozs7Ozs7O0FDaFBGO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGtCQUFrQixHQUFHLG1CQUFtQjtBQUN4QztBQUNBLHlDQUF5QyxLQUFLO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjs7Ozs7OztVQ25CbEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BuZXdwYXkvc2RrLWpzLy4vc3JjL2Jyb3dzZXIudHMiLCJ3ZWJwYWNrOi8vQG5ld3BheS9zZGstanMvLi9zcmMvZGljdC50cyIsIndlYnBhY2s6Ly9AbmV3cGF5L3Nkay1qcy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9AbmV3cGF5L3Nkay1qcy8uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly9AbmV3cGF5L3Nkay1qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AbmV3cGF5L3Nkay1qcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL0BuZXdwYXkvc2RrLWpzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9AbmV3cGF5L3Nkay1qcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQnJvd3NlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCcm93c2VyKGJyb3dzZXIpIHtcbiAgICAgICAgdGhpcy5fYnJvd3NlciA9IGJyb3dzZXI7XG4gICAgfVxuICAgIEJyb3dzZXIucHJvdG90eXBlLmdldE9TID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZSA9IHRoaXMuX2Jyb3dzZXIudXNlckFnZW50LCB0ID0gdGhpcy5fYnJvd3Nlci5wbGF0Zm9ybTtcbiAgICAgICAgdmFyIG4gPSBcIk90aGVyXCI7XG4gICAgICAgIHJldHVybiB0aGlzLmlzTW9iaWxlKCkgJiYgKC0xICE9PSBbXCJpUGFkIFNpbXVsYXRvclwiLCBcImlQaG9uZSBTaW11bGF0b3JcIiwgXCJpUG9kIFNpbXVsYXRvclwiLCBcImlQYWRcIiwgXCJpUGhvbmVcIiwgXCJpUG9kXCIsIFwiTWFjSW50ZWxcIl0uaW5kZXhPZih0KSB8fCAvaVBob25lLy50ZXN0KGUpID8gbiA9IFwiaU9TXCIgOiAvQW5kcm9pZC8udGVzdChlKSAmJiAobiA9IFwiQW5kcm9pZFwiKSksIG47XG4gICAgfTtcbiAgICBCcm93c2VyLnByb3RvdHlwZS5pc01vYmlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoL3dlYk9TfChhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgKGNlfHBob25lKXx4ZGF8eGlpbm8vaSkudGVzdCh0aGlzLl9icm93c2VyLnVzZXJBZ2VudCkgfHwgbmV3IFJlZ0V4cChcIi8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3LShufHUpfGM1NS98Y2FwaXxjY3dhfGNkbS18Y2VsbHxjaHRtfGNsZGN8Y21kLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkYy1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZi01fGctbW98Z28oLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGQtKG18cHx0KXxoZWktfGhpKHB0fHRhKXxocCggaXxpcCl8aHMtY3xodChjKC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHwtfC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8Lyl8a2xvbnxrcHQgfGt3Yy18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfC8oa3xsfHUpfDUwfDU0fC1bYS13XSl8bGlid3xseW54fG0xLXd8bTNnYXxtNTAvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bS1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dCgtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSktfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3wtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdC1nfHFhLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8LVsyLTddfGktKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NS98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGgtfG9vfHAtKXxzZGsvfHNlKGMoLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2gtfHNoYXJ8c2llKC18bSl8c2stMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoLXx2LXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbC18dGRnLXx0ZWwoaXxtKXx0aW0tfHQtbW98dG8ocGx8c2gpfHRzKDcwfG0tfG0zfG01KXx0eC05fHVwKC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118LXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhcy18eW91cnx6ZXRvfHp0ZS0vaVwiKS50ZXN0KHRoaXMuX2Jyb3dzZXIudXNlckFnZW50LnN1YnN0cmluZygwLCA0KSk7XG4gICAgfTtcbiAgICByZXR1cm4gQnJvd3Nlcjtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBCcm93c2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRGljdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEaWN0KCkge1xuICAgIH1cbiAgICBEaWN0LkVOVEVSX0JBTktfTkFNRSA9IFwi0JLQstC10LTQuNGC0LUg0L3QsNC30LLQsNC90LjQtSDQsdCw0L3QutCwXCI7XG4gICAgRGljdC5QQVlNRU5UX1RJVExFID0gXCLQktGL0LHQtdGA0LjRgtC1INCx0LDQvdC6INC00LvRjyDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjyDQvtC/0LvQsNGC0YtcIjtcbiAgICBEaWN0LlNVQlNDUklQVElPTl9USVRMRSA9IFwi0JLRi9Cx0LXRgNC40YLQtSDQsdCw0L3QuiDQtNC70Y8g0L/RgNC40LLRj9C30LrQuCDRgdGH0ZHRgtCwXCI7XG4gICAgRGljdC5OT19NQVRDSElOR19JVEVNUyA9IFwi0J/QviDQktCw0YjQtdC80YMg0LfQsNC/0YDQvtGB0YMg0YDQtdC30YPQu9GM0YLQsNGC0L7QsiDQvdC1INC90LDQudC00LXQvdC+XCI7XG4gICAgcmV0dXJuIERpY3Q7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gRGljdDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF9fc3ByZWFkQXJyYXkgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXkpIHx8IGZ1bmN0aW9uICh0bywgZnJvbSwgcGFjaykge1xuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGJyb3dzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9icm93c2VyXCIpKTtcbnZhciBkaWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZGljdFwiKSk7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xudmFyIFNsaWRlVXBXaWRnZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2xpZGVVcFdpZGdldChzdG9yYWdlLCBuYXYpIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlTmFtZSA9IFwic2xpZGVVcFdpZGdldC52MVwiO1xuICAgICAgICB0aGlzLl9sb2NhbFN0b3JhZ2UgPSBzdG9yYWdlO1xuICAgICAgICB0aGlzLnBsYXRmb3JtID0gbmV3IGJyb3dzZXJfMS5kZWZhdWx0KG5hdiB8fCB7IHVzZXJBZ2VudDogXCJcIiwgcGxhdGZvcm06IFwiXCIgfSkuZ2V0T1MoKTtcbiAgICB9XG4gICAgU2xpZGVVcFdpZGdldC5wcm90b3R5cGUuc2F2ZUluTG9jYWxTdG9yYWdlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5zdG9yYWdlTmFtZSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIH07XG4gICAgU2xpZGVVcFdpZGdldC5wcm90b3R5cGUubG9hZEZyb21Mb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnN0b3JhZ2VOYW1lKTtcbiAgICB9O1xuICAgIFNsaWRlVXBXaWRnZXQucHJvdG90eXBlLmxvYWRCYW5rRGljdGlvbmFyeSA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGVycl8xO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAyLCAsIDNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKHVybCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCAoX2Euc2VudCgpKS5qc29uKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImJhbmtzQ2FjaGVJc0VtcHR5XCIpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTbGlkZVVwV2lkZ2V0LnByb3RvdHlwZS5nZXRCYW5rTGlzdCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlcXVzZXRfdXJsLCBlcnJfMjtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzAsIDIsICwgM10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdXNldF91cmwgPSBcImh0dHBzOi8vXCIuY29uY2F0KCgwLCB1dGlsc18xLmdldFByb3ZpZGVyKSh1cmwpLCBcIi5uc3BrLnJ1L3Byb3h5YXBwL2MyYm1lbWJlcnMuanNvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMubG9hZEJhbmtEaWN0aW9uYXJ5KHJlcXVzZXRfdXJsKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIChfYS5zZW50KCkpLmRpY3Rpb25hcnkubWFwKChmdW5jdGlvbiAodCkgeyByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYW5rTmFtZTogdC5iYW5rTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvVVJMOiB0LmxvZ29VUkwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGJvTGluazogKDAsIHV0aWxzXzEuZ2V0RGJvTGluaykodCwgdXJsLCBfdGhpcy5wbGF0Zm9ybSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pOyB9KSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJfMiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyXzIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFNsaWRlVXBXaWRnZXQucHJvdG90eXBlLnNob3dRUkNvZGUgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTbGlkZVVwV2lkZ2V0LnByb3RvdHlwZS5zaG93QmFua1NlbGVjdG9yID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaGVhZCwgbWV0YSwgYmFua0xpc3QsIHdpZGdldERpdiwgaGVhZGVyLCBsb2dvLCB0aXRsZSwgY2xvc2UsIHNlYXJjaCwgc2F2ZWREYXRhLCBsaW5rcywgcGFyc2VkRGF0YV8xLCB0ZW1wXzE7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVdpZGdldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZCA9IGRvY3VtZW50LmhlYWQsIG1ldGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWV0YVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3aWRnZXQtbnNwa1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGEuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInZpZXdwb3J0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWV0YS5zZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIsIFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIG1heGltdW0tc2NhbGU9MSwgbWluaW11bS1zY2FsZT0xLCB1c2VyLXNjYWxhYmxlPW5vXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChtZXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZ2V0QmFua0xpc3QodXJsKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhbmtMaXN0ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldERpdi5jbGFzc05hbWUgPSBcInNsaWRlLXVwLXdpZGdldFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiksIHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJzdWJcIiA9PT0gKDAsIHV0aWxzXzEuZ2V0UHJvdmlkZXIpKHVybCkgPyBkaWN0XzEuZGVmYXVsdC5TVUJTQ1JJUFRJT05fVElUTEUgOiBkaWN0XzEuZGVmYXVsdC5QQVlNRU5UX1RJVExFO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2UuaW5uZXJUZXh0ID0gXCLDl1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nby5zcmMgPSBcImh0dHBzOi8vc2JwLm5zcGsucnUvaS9sb2dvLWJsYWNrLnN2Z1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyLmNsYXNzTmFtZSA9IFwic2xpZGUtdXAtd2lkZ2V0X19oZWFkZXJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ28uY2xhc3NOYW1lID0gXCJzbGlkZS11cC13aWRnZXRfX2hlYWRlci1pbWFnZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUuY2xhc3NOYW1lID0gXCJzbGlkZS11cC13aWRnZXRfX2hlYWRlci10ZXh0XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZS5jbGFzc05hbWUgPSBcInNsaWRlLXVwLXdpZGdldF9faGVhZGVyLWNsb3NlLWJ0blwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChmdW5jdGlvbiAoKSB7IF90aGlzLmNsb3NlV2lkZ2V0KCk7IH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChjbG9zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0RGl2LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2guc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgZGljdF8xLmRlZmF1bHQuRU5URVJfQkFOS19OQU1FKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaC5jbGFzc05hbWUgPSBcInNsaWRlLXVwLXdpZGdldF9faW5wdXRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlLXVwLXdpZGdldF9fYmFuay10aXRsZVwiKS5mb3JFYWNoKChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJhbmsgPSBlbGVtZW50LmNsb3Nlc3QoXCIuc2xpZGUtdXAtd2lkZ2V0X19iYW5rXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhbmsgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjbiA9IGJhbmsuY2xhc3NOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlubmVySFRNTC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsdWUudG9Mb3dlckNhc2UoKSkgPT09IC0xIHx8IGJhbmsuY2xhc3NOYW1lLmluZGV4T2YoXCJ1c2VkXCIpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY24uaW5kZXhPZihcImhpZGVcIikgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYW5rLmNsYXNzTmFtZSA9IGNuICsgXCIgc2xpZGUtdXAtd2lkZ2V0X19iYW5rLS1oaWRlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZS11cC13aWRnZXRfX2JhbmstLWhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlLXVwLXdpZGdldF9fdGl0bGUtLXVzZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgJiYgLTEgPT09IGUuY2xhc3NOYW1lLmluZGV4T2YoXCJoaWRlXCIpICYmIChlLmNsYXNzTmFtZSA9IGUuY2xhc3NOYW1lICsgXCIgc2xpZGUtdXAtd2lkZ2V0X190aXRsZS0taGlkZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGUtdXAtd2lkZ2V0X19iYW5rLS1oaWRlXCIpLmZvckVhY2goKGZ1bmN0aW9uIChlKSB7IGUuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlLXVwLXdpZGdldF9fYmFuay0taGlkZVwiKTsgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGUtdXAtd2lkZ2V0X190aXRsZS0tdXNlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZSAmJiBlLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZS11cC13aWRnZXRfX3RpdGxlLS1oaWRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3V3X2VtcHR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZS11cC13aWRnZXRfX2VtcHR5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdXdfZW1wdHkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZS11cC13aWRnZXRfX2JhbmstLWhpZGU6bm90KC5zbGlkZS11cC13aWRnZXRfX2JhbmstLXVzZWQpXCIpLmxlbmd0aCA+PSBiYW5rTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZS11cC13aWRnZXRfX2VtcHR5XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuaW5uZXJUZXh0ID0gZGljdF8xLmRlZmF1bHQuTk9fTUFUQ0hJTkdfSVRFTVM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5jbGFzc05hbWUgPSBcInNsaWRlLXVwLXdpZGdldF9fZW1wdHlcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXREaXYuYXBwZW5kQ2hpbGQodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXdfZW1wdHkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXREaXYuYXBwZW5kQ2hpbGQoc2VhcmNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVkRGF0YSA9IHRoaXMubG9hZEZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtzID0gYmFua0xpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2F2ZWREYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkRGF0YV8xID0gSlNPTi5wYXJzZShzYXZlZERhdGEpLCB0ZW1wXzEgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWREYXRhXzEuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IGxpbmtzLmZpbmQoKGZ1bmN0aW9uICh0KSB7IHJldHVybiB0LmJhbmtOYW1lID09PSBlOyB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4gJiYgdGVtcF8xLnB1c2gobik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua3MgPSBfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoW10sIHRlbXBfMSwgdHJ1ZSksIGJhbmtMaXN0LmZpbHRlcigoZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHBhcnNlZERhdGFfMS5ldmVyeSgoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIHQuYmFua05hbWUgIT09IGU7IH0pKTsgfSkpLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtzLmZvckVhY2goKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKSwgbGlua0xvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLCBsaW5rVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCBkYm9MaW5rID0gZS5kYm9MaW5rO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NOYW1lID0gXCJzbGlkZS11cC13aWRnZXRfX2JhbmtcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rTG9nby5jbGFzc05hbWUgPSBcInNsaWRlLXVwLXdpZGdldF9fYmFuay1sb2dvXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua1RpdGxlLmNsYXNzTmFtZSA9IFwic2xpZGUtdXAtd2lkZ2V0X19iYW5rLXRpdGxlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGRib0xpbmspO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtMb2dvLnNyYyA9IGUubG9nb1VSTDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rVGl0bGUuaW5uZXJUZXh0ID0gZS5iYW5rTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmFwcGVuZENoaWxkKGxpbmtMb2dvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmFwcGVuZENoaWxkKGxpbmtUaXRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0RGl2LmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIuc2xpZGUtdXAtd2lkZ2V0X19iYW5rXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlXzEgPSB0LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGUtdXAtd2lkZ2V0X19iYW5rLXRpdGxlXCIpLmlubmVyVGV4dCwgbiA9IEpTT04ucGFyc2UoX3RoaXMubG9hZEZyb21Mb2NhbFN0b3JhZ2UoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbiB8fCBuLnNvbWUoKGZ1bmN0aW9uICh0KSB7IHJldHVybiB0ID09PSBlXzE7IH0pKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgobnVsbCA9PSBuID8gdm9pZCAwIDogbi5sZW5ndGgpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0XzEgPSBuLnNwbGljZShuLmluZGV4T2YoZV8xKSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2F2ZUluTG9jYWxTdG9yYWdlKF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShbXSwgdF8xLCB0cnVlKSwgbiwgdHJ1ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNhdmVJbkxvY2FsU3RvcmFnZShbZV8xXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChudWxsID09IG4gPyB2b2lkIDAgOiBuLmxlbmd0aCkgPiAyICYmIG4ucG9wKCksIF90aGlzLnNhdmVJbkxvY2FsU3RvcmFnZShfX3NwcmVhZEFycmF5KFtlXzFdLCBuLCB0cnVlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh3aWRnZXREaXYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFNsaWRlVXBXaWRnZXQucHJvdG90eXBlLmNsb3NlV2lkZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZSA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIiN3aWRnZXQtbnNwa1wiKTtcbiAgICAgICAgZSAmJiBlLnJlbW92ZSgpO1xuICAgICAgICB2YXIgdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGUtdXAtd2lkZ2V0XCIpO1xuICAgICAgICB0ICYmIHQucGFyZW50Tm9kZSAmJiB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCk7XG4gICAgfTtcbiAgICByZXR1cm4gU2xpZGVVcFdpZGdldDtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBTbGlkZVVwV2lkZ2V0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldERib0xpbmsgPSBleHBvcnRzLmdldFByb3ZpZGVyID0gdm9pZCAwO1xuZnVuY3Rpb24gZ2V0UHJvdmlkZXIodXJsKSB7XG4gICAgaWYgKCEvaHR0cHM6XFwvXFwvKHFyfHN1YikubnNway5ydVxcL1xcd3swLDMyfShcXD8pPy8udGVzdCh1cmwpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImludmFsaWRVUkxTdHJpbmdcIik7XG4gICAgfVxuICAgIHJldHVybiAtMSA9PT0gdXJsLmluZGV4T2YoXCJzdWIubnNway5ydVwiKSA/IFwicXJcIiA6IFwic3ViXCI7XG59XG5leHBvcnRzLmdldFByb3ZpZGVyID0gZ2V0UHJvdmlkZXI7XG5mdW5jdGlvbiBnZXREYm9MaW5rKGUsIHQsIG4pIHtcbiAgICB2YXIgaSA9IHQucmVwbGFjZShcImh0dHBzOi8vXCIsIFwiXCIuY29uY2F0KGUuc2NoZW1hLCBcIjovL1wiKSk7XG4gICAgdmFyIHIgPSBlLmlzV2ViQ2xpZW50QWN0aXZlICYmICghMCA9PT0gZS5pc1dlYkNsaWVudEFjdGl2ZSB8fCBcInRydWVcIiA9PT0gZS5pc1dlYkNsaWVudEFjdGl2ZSk7XG4gICAgaWYgKFwiaU9TXCIgPT09IG4gJiYgcikge1xuICAgICAgICB2YXIgbl8xID0gdC5zcGxpdChcIi9cIikucG9wKCkuc3BsaXQoXCI/XCIpWzBdO1xuICAgICAgICBpID0gXCJcIi5jb25jYXQoZS53ZWJDbGllbnRVcmwsIFwiL1wiKS5jb25jYXQobl8xKTtcbiAgICB9XG4gICAgcmV0dXJuIGk7XG59XG5leHBvcnRzLmdldERib0xpbmsgPSBnZXREYm9MaW5rO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9