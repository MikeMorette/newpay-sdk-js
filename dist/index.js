var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Browser from "./browser";
import Dict from "./dict";
import { getProvider, getDboLink } from "./utils";
class SlideUpWidget {
    constructor(storage, nav) {
        this.storageName = "slideUpWidget.v1";
        this._localStorage = storage;
        this.platform = new Browser(nav || { userAgent: "", platform: "" }).getOS();
    }
    saveInLocalStorage(data) {
        this._localStorage.setItem(this.storageName, JSON.stringify(data));
    }
    loadFromLocalStorage() {
        return this._localStorage.getItem(this.storageName);
    }
    loadBankDictionary(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (yield fetch(url)).json();
            }
            catch (err) {
                throw new Error("banksCacheIsEmpty");
            }
        });
    }
    getBankList(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const requset_url = `https://${getProvider(url)}.nspk.ru/proxyapp/c2bmembers.json`;
                return (yield this.loadBankDictionary(requset_url)).dictionary.map(((t) => ({
                    bankName: t.bankName,
                    logoURL: t.logoURL,
                    dboLink: getDboLink(t, url, this.platform)
                })));
            }
            catch (err) {
                console.error(err);
            }
        });
    }
    showBankSelector(url) {
        return __awaiter(this, void 0, void 0, function* () {
            this.closeWidget();
            const head = document.head, meta = document.createElement("meta");
            meta.setAttribute("id", "widget-nspk");
            meta.setAttribute("name", "viewport");
            meta.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no");
            head.appendChild(meta);
            const bankList = yield this.getBankList(url);
            const widgetDiv = document.createElement("div");
            widgetDiv.className = "slide-up-widget";
            const header = document.createElement("div"), logo = document.createElement("img"), title = document.createElement("div"), close = document.createElement("div");
            title.innerText = "sub" === getProvider(url) ? Dict.SUBSCRIPTION_TITLE : Dict.PAYMENT_TITLE;
            close.innerText = "×";
            logo.src = "https://sbp.nspk.ru/i/logo-black.svg";
            header.className = "slide-up-widget__header";
            logo.className = "slide-up-widget__header-image";
            title.className = "slide-up-widget__header-text";
            close.className = "slide-up-widget__header-close-btn";
            close.addEventListener("click", (() => { this.closeWidget(); }));
            header.appendChild(logo);
            header.appendChild(close);
            header.appendChild(title);
            widgetDiv.appendChild(header);
            const search = document.createElement("input");
            search.setAttribute("placeholder", Dict.ENTER_BANK_NAME);
            search.className = "slide-up-widget__input";
            search.addEventListener("input", ((event) => {
                const value = event.target.value;
                if (value && value.length > 1) {
                    document.querySelectorAll(".slide-up-widget__bank-title").forEach(((element) => {
                        const bank = element.closest(".slide-up-widget__bank");
                        if (bank != null) {
                            const cn = bank.className;
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
                    const e = document.querySelector(".slide-up-widget__title--used");
                    e && -1 === e.className.indexOf("hide") && (e.className = e.className + " slide-up-widget__title--hide");
                }
                else {
                    document.querySelectorAll(".slide-up-widget__bank--hide").forEach((e => { e.classList.remove("slide-up-widget__bank--hide"); }));
                    const e = document.querySelector(".slide-up-widget__title--used");
                    e && e.classList.remove("slide-up-widget__title--hide");
                }
                const suw_empty = document.querySelector(".slide-up-widget__empty");
                if (suw_empty != null) {
                    if (document.querySelectorAll(".slide-up-widget__bank--hide:not(.slide-up-widget__bank--used)").length >= bankList.length) {
                        if (!document.querySelector(".slide-up-widget__empty")) {
                            const t = document.createElement("div");
                            t.innerText = Dict.NO_MATCHING_ITEMS;
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
            const savedData = this.loadFromLocalStorage();
            let links = bankList;
            if (savedData) {
                const parsedData = JSON.parse(savedData), temp = [];
                parsedData.forEach((e) => {
                    const n = links.find(((t) => t.bankName === e));
                    n && temp.push(n);
                });
                links = [...temp, ...bankList.filter(((t) => parsedData.every(((e) => t.bankName !== e))))];
            }
            links.forEach(((e) => {
                const link = document.createElement("a"), linkLogo = document.createElement("img"), linkTitle = document.createElement("div"), dboLink = e.dboLink;
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
            widgetDiv.addEventListener("click", ((e) => {
                console.log(e);
                const t = e.target.closest(".slide-up-widget__bank");
                if (t) {
                    const e = t.querySelector(".slide-up-widget__bank-title").innerText, n = JSON.parse(this.loadFromLocalStorage());
                    if (!n || n.some(((t) => t === e)))
                        if ((null == n ? void 0 : n.length) > 0) {
                            const t = n.splice(n.indexOf(e), 1);
                            this.saveInLocalStorage([...t, ...n]);
                        }
                        else
                            this.saveInLocalStorage([e]);
                    else
                        (null == n ? void 0 : n.length) > 2 && n.pop(), this.saveInLocalStorage([e, ...n]);
                }
            }));
            document.body.appendChild(widgetDiv);
        });
    }
    closeWidget() {
        const e = document.head.querySelector("#widget-nspk");
        e && e.remove();
        const t = document.querySelector(".slide-up-widget");
        t && t.parentNode && t.parentNode.removeChild(t);
    }
}
export default SlideUpWidget;
