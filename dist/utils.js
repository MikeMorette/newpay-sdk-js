"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDboLink = exports.isPC = exports.getProvider = void 0;
function getProvider(url) {
    if (!/https:\/\/(qr|sub).nspk.ru\/\w{0,32}(\?)?/.test(url)) {
        throw new Error("invalidURLString");
    }
    return -1 === url.indexOf("sub.nspk.ru") ? "qr" : "sub";
}
exports.getProvider = getProvider;
function isPC(url) {
    if (!/https:\/\/online.tester.newpay.pro\/(\?)?/.test(url)) {
        return false;
    }
    return true;
}
exports.isPC = isPC;
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
