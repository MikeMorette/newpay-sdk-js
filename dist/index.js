"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = __importDefault(require("./browser"));
var dict_1 = __importDefault(require("./dict"));
var utils_1 = require("./utils");
var qr_code_styling_1 = __importDefault(require("qr-code-styling"));
var SlideUpWidget = /** @class */ (function () {
    function SlideUpWidget(storage, nav) {
        this._stylesMobile = ".slide-up-widget {overflow-x: hidden;overflow-y: auto;position: fixed;bottom: 0;left: 1px;right: 1px;height: 99%;max-width: 100vw;background: #fff;z-index: 999999999;color: #000;padding: 20px 15px;font-weight: 700;border-radius: 25px 25px 0 0;-webkit-box-shadow: 0 0 10px -5px #000;box-shadow: 0 0 10px -5px #000;font-size: 13px;font-family: \"Helvetica Neue\", Helvetica, sans-serif;-webkit-box-sizing: border-box;box-sizing: border-box}.slide-up-widget__header {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;-webkit-box-align: center;-ms-flex-align: center;align-items: center;font-weight: 400;margin-bottom: 7px}.slide-up-widget__title {text-decoration: none;margin: 20px 10px 10px;font-size: 13px}.slide-up-widget__header-close-btn {width: 25px;height: 25px;background: #e4e4e4;position: absolute;right: 20px;content: '1';border-radius: 50%;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;-webkit-box-align: center;-ms-flex-align: center;align-items: center;line-height: 1;font-size: 15px;cursor: pointer;color: rgba(72, 72, 72, .6);font-family: serif}.slide-up-widget__header-image {max-width: 100px;margin-bottom: 5px;border-radius: 10px}.slide-up-widget__header-text {max-width: 240px;text-align: center;line-height: 16px}.slide-up-widget__bank {display: -webkit-box;display: -ms-flexbox;display: flex;background: red;-webkit-box-align: center;-ms-flex-align: center;align-items: center;background: #f4f4f4;padding: 10px;border-radius: 15px;margin-bottom: 10px;min-height: 60px;color: #000}.slide-up-widget__bank--hide,.slide-up-widget__title--hide {display: none}.slide-up-widget__bank-logo {margin-right: 10px;max-width: 50px;border-radius: 10px}.slide-up-widget__input {width: 100%;-webkit-box-sizing: border-box;box-sizing: border-box;margin-bottom: 10px;background-color: #f4f4f4;padding: 15px 8px;outline: 0;border: none;border-radius: 8px}.slide-up-widget__empty {font-size: 12px;font-weight: 400;padding: 0 10px}";
        this._stylesPC = ".shown{opacity: 1 !important;}.newpay{opacity: 0;position:fixed;top:0;bottom:0;left:0;right:0;width:100%;z-index:9999999999999;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,.89);animation-name:appear;animation-duration:.3s;transition:all .3s ease;backdrop-filter:blur(15px);background-color:rgba(0,0,0,.2) !important}.newpay_close{position:absolute;top:24px;right:44px;color:#fff;font-size:64px;cursor:pointer}.newpay_dialog{width:100%;max-width:400px;background:linear-gradient(90deg,#d000a5,#004ddb);border-radius:12px;position:relative;margin:0 20px;max-height:calc(100vh - 60px);text-align:left;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 4px 38px 0 rgb(0 0 0/20%),0 6px 20px 0 rgba(0,0,0,.2);-webkit-animation-name:slide-in;-webkit-animation-duration:.3s;animation-name:slide-in;animation-duration:.3s}h6{text-align:center;color:#fff;font-size:14px;padding:24px 0;margin-bottom:0}.newpay_body__content{background-color:#fff;border-top-left-radius:12px;border-top-right-radius:12px;padding:32px}.nbc_qr{margin-bottom:10px;text-align:center}.nbc_qr div{text-align:center}.nbc_logos{display:flex;flex-direction:column;align-items:center}.nbc_logos div{width:fit-content;display:flex;flex-direction:row;align-items:center}.nbc_logos div img{height:28px}.nbc_logos div img:nth-child(2){height:52px;margin-left:20px}";
        this.storageName = "slideUpWidget.v1";
        this._localStorage = storage;
        this._platform = new browser_1.default(nav || { userAgent: "", platform: "" }).getOS();
        this.initStyles();
    }
    SlideUpWidget.prototype.initStyles = function () {
        var head = document.head, meta = document.createElement("meta"), style = document.createElement("style");
        meta.setAttribute("id", "widget-nspk");
        meta.setAttribute("name", "viewport");
        meta.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no");
        style.setAttribute("type", "text/css");
        style.innerText = "".concat(this._stylesMobile, "\n").concat(this._stylesPC);
        head.appendChild(meta);
        head.appendChild(style);
    };
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
                            dboLink: (0, utils_1.getDboLink)(t, url, _this._platform)
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
            var qrcoder, widgetDiv, close, dialog, dialog_body, dialog_title, body_content, nbc_qr, qr_canvas, nbc_logos, nbc_logos_div, nbc_logos_a, nbc_logos_b;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qrcoder = new qr_code_styling_1.default({
                            width: 320,
                            height: 320,
                            type: "svg",
                            data: url,
                            //image: "https://plumbum.shop/assets/images/newpay/logo_min_b.svg",
                            dotsOptions: {
                                color: "#000",
                                type: "rounded"
                            },
                            cornersSquareOptions: {
                                color: "#000",
                                type: "extra-rounded"
                            },
                            backgroundOptions: {
                                color: "#fff",
                            },
                            imageOptions: {
                                crossOrigin: "anonymous",
                                margin: 6
                            }
                        });
                        widgetDiv = document.createElement("div");
                        widgetDiv.className = "newpay";
                        widgetDiv.style.opacity = "0";
                        close = document.createElement("div"), dialog = document.createElement("div"), dialog_body = document.createElement("div"), dialog_title = document.createElement("h6"), body_content = document.createElement("div"), nbc_qr = document.createElement("div"), qr_canvas = document.createElement("div"), nbc_logos = document.createElement("div"), nbc_logos_div = document.createElement("div"), nbc_logos_a = document.createElement("img"), nbc_logos_b = document.createElement("img");
                        close.className = "newpay_close";
                        dialog.className = "newpay_dialog";
                        dialog_body.className = "newpay_body";
                        dialog_title.className = "newpay_title";
                        body_content.className = "newpay_body__content";
                        nbc_logos.className = "nbc_logos";
                        //nbc_logos_a.src = "https://plumbum.shop/assets/images/newpay/logo_b.png"
                        nbc_logos_b.src = "https://sbp.nspk.ru/i/logo-black.svg";
                        nbc_qr.className = "nbc_qr";
                        qr_canvas.id = "qr_canvas";
                        nbc_qr.appendChild(qr_canvas);
                        nbc_logos_div.appendChild(nbc_logos_a);
                        nbc_logos_div.appendChild(nbc_logos_b);
                        nbc_logos.appendChild(nbc_logos_div);
                        body_content.appendChild(nbc_qr);
                        dialog_body.appendChild(dialog_title);
                        dialog_body.appendChild(body_content);
                        close.addEventListener("click", function () {
                            _this.closeQRCode();
                        });
                        widgetDiv.appendChild(close);
                        widgetDiv.appendChild(dialog);
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                setTimeout(function () {
                                    var wrapper = document.getElementById("qr_canvas");
                                    if (wrapper != null) {
                                        qrcoder.append(wrapper);
                                        widgetDiv.classList.add("shown");
                                    }
                                    resolve(true);
                                }, 700);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SlideUpWidget.prototype.showBankSelector = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var bankList, widgetDiv, header, logo, title, close, search, savedData, links, parsedData_1, temp_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.closeWidget();
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
        var t = document.querySelector(".slide-up-widget");
        t && t.parentNode && t.parentNode.removeChild(t);
    };
    SlideUpWidget.prototype.closeQRCode = function () {
        var t = document.querySelector(".newpay");
        t && t.parentNode && t.parentNode.removeChild(t);
    };
    return SlideUpWidget;
}());
exports.default = SlideUpWidget;
