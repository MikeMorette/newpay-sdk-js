import Browser from "./browser"
import Dict from "./dict"
import { getProvider, getDboLink, isPC } from "./utils"

import QRCodeStyling from "qr-code-styling"

class SlideUpWidget {

  private _localStorage: Storage
  private _platform: string
  private _navigator: Navigator

  private _stylesMobile: string = `.slide-up-widget {overflow-x: hidden;overflow-y: auto;position: fixed;bottom: 0;left: 1px;right: 1px;height: 99%;max-width: 100vw;background: #fff;z-index: 999999999;color: #000;padding: 20px 15px;font-weight: 700;border-radius: 25px 25px 0 0;-webkit-box-shadow: 0 0 10px -5px #000;box-shadow: 0 0 10px -5px #000;font-size: 13px;font-family: \"Helvetica Neue\", Helvetica, sans-serif;-webkit-box-sizing: border-box;box-sizing: border-box}.slide-up-widget__header {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;-webkit-box-align: center;-ms-flex-align: center;align-items: center;font-weight: 400;margin-bottom: 7px}.slide-up-widget__title {text-decoration: none;margin: 20px 10px 10px;font-size: 13px}.slide-up-widget__header-close-btn {width: 25px;height: 25px;background: #e4e4e4;position: absolute;right: 20px;content: '1';border-radius: 50%;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;-webkit-box-align: center;-ms-flex-align: center;align-items: center;line-height: 1;font-size: 15px;cursor: pointer;color: rgba(72, 72, 72, .6);font-family: serif}.slide-up-widget__header-image {max-width: 100px;margin-bottom: 5px;border-radius: 10px}.slide-up-widget__header-text {max-width: 240px;text-align: center;line-height: 16px}.slide-up-widget__bank {display: -webkit-box;display: -ms-flexbox;display: flex;background: red;-webkit-box-align: center;-ms-flex-align: center;align-items: center;background: #f4f4f4;padding: 10px;border-radius: 15px;margin-bottom: 10px;min-height: 60px;color: #000}.slide-up-widget__bank--hide,.slide-up-widget__title--hide {display: none}.slide-up-widget__bank-logo {margin-right: 10px;max-width: 50px;border-radius: 10px}.slide-up-widget__input {width: 100%;-webkit-box-sizing: border-box;box-sizing: border-box;margin-bottom: 10px;background-color: #f4f4f4;padding: 15px 8px;outline: 0;border: none;border-radius: 8px}.slide-up-widget__empty {font-size: 12px;font-weight: 400;padding: 0 10px}`;
  private _stylesPC: string = `.shown{opacity: 1 !important;}.newpay{opacity: 0;position:fixed;top:0;bottom:0;left:0;right:0;width:100%;z-index:9999999999999;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,.89);animation-name:appear;animation-duration:.3s;transition:all .3s ease;backdrop-filter:blur(15px);background-color:rgba(0,0,0,.2) !important}.newpay_close{position:absolute;top:24px;right:44px;color:#fff;font-size:64px;cursor:pointer;width: 52px;}.newpay_dialog{width:100%;max-width:400px;background:linear-gradient(90deg,#d000a5,#004ddb);border-radius:12px;position:relative;margin:0 20px;max-height:calc(100vh - 60px);text-align:left;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 4px 38px 0 rgb(0 0 0/20%),0 6px 20px 0 rgba(0,0,0,.2);-webkit-animation-name:slide-in;-webkit-animation-duration:.3s;animation-name:slide-in;animation-duration:.3s}h6{text-align:center;color:#fff;font-size:14px;padding:24px 0;margin-bottom:0}.newpay_body__content{background-color:#fff;border-top-left-radius:12px;border-top-right-radius:12px;padding:32px}.nbc_qr{margin-bottom:10px;text-align:center}.nbc_qr div{text-align:center}.nbc_logos{display:flex;flex-direction:column;align-items:center}.nbc_logos div{width:fit-content;display:flex;flex-direction:row;align-items:center}.nbc_logos div img{height:28px}.nbc_logos div img:nth-child(2){height:52px;margin-left:20px}`;

  public storageName: string = "slideUpWidget.v1"

  constructor(
    storage: Storage,
    nav: Navigator
  ) {
    this._localStorage = storage;
    this._navigator = nav;
    this._platform = new Browser(nav || { userAgent: "", platform: "" }).getOS()

    this.initStyles()
  }

  private initStyles() {
    const head = document.head, 
      meta = document.createElement("meta"),
      style = document.createElement("style")

    meta.setAttribute("id", "widget-nspk")
    meta.setAttribute("name", "viewport")
    meta.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no")

    style.setAttribute("type", "text/css")
    style.innerText = `${this._stylesMobile}\n${this._stylesPC}`

    head.appendChild(meta)
    head.appendChild(style)
  }

  public isMobileCheck() {
    return new RegExp(/webOS|(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i).test(this._navigator.userAgent) || new RegExp("/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i").test(this._navigator.userAgent.substring(0, 4))
  }

  public saveInLocalStorage(data: any) {
    this._localStorage.setItem(this.storageName, JSON.stringify(data))
  }

  public loadFromLocalStorage() {
    return this._localStorage.getItem(this.storageName)
  }

  public async loadBankDictionary(url: string) {
    try {
      return (await fetch(url)).json()
    } catch (err) {
      throw new Error("banksCacheIsEmpty")
    }
  }

  public async getBankList(url: string) {
    try {
      const requset_url: string = `https://${getProvider(url)}.nspk.ru/proxyapp/c2bmembers.json`

      return (await this.loadBankDictionary(requset_url)).dictionary.map((
        (t: any) => ({ 
          bankName: t.bankName, 
          logoURL: t.logoURL, 
          dboLink: getDboLink(t, url, this._platform) 
        })
      ))
    } catch (err) {
      console.error(err)
    }
  }

  public async showQRCode(url: string) {
    if (!isPC(url)) {
      return false;
    }

    const qrcoder = new QRCodeStyling({
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
    })

    const widgetDiv = document.createElement("div")
    widgetDiv.className = "newpay"
    widgetDiv.id = "newpay_pc_widget"
    widgetDiv.style.opacity = "0";

    const close = document.createElement("div"),
      dialog = document.createElement("div"),
      dialog_body = document.createElement("div"),
      dialog_title = document.createElement("h6"),
      body_content = document.createElement("div"),
      nbc_qr = document.createElement("div"),
      qr_canvas = document.createElement("div"),
      nbc_logos = document.createElement("div"),
      nbc_logos_div = document.createElement("div"),
      nbc_logos_a = document.createElement("img"),
      nbc_logos_b = document.createElement("img")

    close.className = "newpay_close"
    dialog.className = "newpay_dialog"
    dialog_body.className = "newpay_body"
    dialog_title.className = "newpay_title"
    body_content.className = "newpay_body__content"
    nbc_logos.className = "nbc_logos"
    nbc_logos_a.src = "https://plumbum.shop/assets/images/newpay/logo_b.png"
    nbc_logos_b.src = "https://sbp.nspk.ru/i/logo-black.svg"

    dialog_title.innerHTML = `Отсканируйте QR - код камерой телефона<br/>или мобильным приложением <b>NewPay</b>`

    nbc_qr.className = "nbc_qr"
    qr_canvas.id = "qr_canvas"

    nbc_qr.appendChild(qr_canvas)

    nbc_logos_div.appendChild(nbc_logos_a)
    nbc_logos_div.appendChild(nbc_logos_b)

    nbc_logos.appendChild(nbc_logos_div)

    body_content.appendChild(nbc_qr)
    body_content.appendChild(nbc_logos)

    dialog_body.appendChild(dialog_title)
    dialog_body.appendChild(body_content)
    dialog.appendChild(dialog_body)

    close.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M315.3 411.3c-6.253 6.253-16.37 6.253-22.63 0L160 278.6l-132.7 132.7c-6.253 6.253-16.37 6.253-22.63 0c-6.253-6.253-6.253-16.37 0-22.63L137.4 256L4.69 123.3c-6.253-6.253-6.253-16.37 0-22.63c6.253-6.253 16.37-6.253 22.63 0L160 233.4l132.7-132.7c6.253-6.253 16.37-6.253 22.63 0c6.253 6.253 6.253 16.37 0 22.63L182.6 256l132.7 132.7C321.6 394.9 321.6 405.1 315.3 411.3z" fill="#fff" style="fill: #fff;" /></svg>`
    close.addEventListener("click", () => {
      this.closeQRCode()
    })

    widgetDiv.appendChild(close)
    widgetDiv.appendChild(dialog)
    document.body.appendChild(widgetDiv)

    await new Promise((resolve, reject) => {
      setTimeout(() => {
        const wrapper = document.getElementById("qr_canvas");
        const widget = document.getElementById("newpay_pc_widget");
        if (wrapper != null && widget != null) {
          qrcoder.append(wrapper);

          widget.classList.add("shown");
        }
        resolve(true)
      }, 500);
    })

    return true;
  }

  public async showBankSelector(url: string) {
    this.closeWidget();

    const bankList = await this.getBankList(url);
    
    const widgetDiv = document.createElement("div");
    widgetDiv.className = "slide-up-widget";

    const header = document.createElement("div"),
      logo = document.createElement("img"),
      title = document.createElement("div"),
      close = document.createElement("div");

    title.innerText = "sub" === getProvider(url) ? Dict.SUBSCRIPTION_TITLE : Dict.PAYMENT_TITLE;
    close.innerText = "×";
    logo.src = "https://sbp.nspk.ru/i/logo-black.svg"
    header.className = "slide-up-widget__header"
    logo.className = "slide-up-widget__header-image"
    title.className = "slide-up-widget__header-text"
    close.className = "slide-up-widget__header-close-btn"
    close.addEventListener("click", (() => { this.closeWidget() }))

    header.appendChild(logo)
    header.appendChild(close)
    header.appendChild(title)
    widgetDiv.appendChild(header)

    const search = document.createElement("input");
    search.setAttribute("placeholder", Dict.ENTER_BANK_NAME)
    search.className = "slide-up-widget__input"
    search.addEventListener("input", ((event: any) => {
      const value = event.target.value
      if (value && value.length > 1) {
        document.querySelectorAll(".slide-up-widget__bank-title").forEach(((element) => {
          const bank = element.closest(".slide-up-widget__bank")
          if (bank != null) {
            const cn = bank.className;
            if (element.innerHTML.toLowerCase().indexOf(value.toLowerCase()) === -1 || bank.className.indexOf("used") !== -1) {
              if (cn.indexOf("hide") === -1) {
                bank.className = cn + " slide-up-widget__bank--hide"
              } else {
                bank.classList.remove("slide-up-widget__bank--hide")
              }
            }
          }
        }));
        const e = document.querySelector(".slide-up-widget__title--used");
        e && -1 === e.className.indexOf("hide") && (e.className = e.className + " slide-up-widget__title--hide")
      } else {
        document.querySelectorAll(".slide-up-widget__bank--hide").forEach((e => { e.classList.remove("slide-up-widget__bank--hide") }));
        const e = document.querySelector(".slide-up-widget__title--used")
        e && e.classList.remove("slide-up-widget__title--hide")
      }

      const suw_empty = document.querySelector(".slide-up-widget__empty");
      if (suw_empty != null) {
        if (document.querySelectorAll(".slide-up-widget__bank--hide:not(.slide-up-widget__bank--used)").length >= bankList.length) {
          if (!document.querySelector(".slide-up-widget__empty")) {
            const t = document.createElement("div")
            t.innerText = Dict.NO_MATCHING_ITEMS
            t.className = "slide-up-widget__empty"
            widgetDiv.appendChild(t)
          }
        } else {
          suw_empty.remove()
        }
      }
    }))

    widgetDiv.appendChild(search);
    
    const savedData = this.loadFromLocalStorage()

    let links = bankList;
    if (savedData) {
      const parsedData = JSON.parse(savedData),
        temp: any[] = []

      parsedData.forEach((e: any) => {
        const n = links.find(((t: any) => t.bankName === e));
        n && temp.push(n)
      })

      links = [...temp, ...bankList.filter(((t: any) => parsedData.every(((e: any) => t.bankName !== e))))]
    }

    links.forEach(((e: any) => {
      const link = document.createElement("a"),
      linkLogo = document.createElement("img"),
        linkTitle = document.createElement("div"),
        dboLink = e.dboLink;
      
      link.className = "slide-up-widget__bank"
      linkLogo.className = "slide-up-widget__bank-logo"
      linkTitle.className = "slide-up-widget__bank-title"
      link.setAttribute("href", dboLink)
      linkLogo.src = e.logoURL
      linkTitle.innerText = e.bankName
      link.appendChild(linkLogo)
      link.appendChild(linkTitle)
      widgetDiv.appendChild(link)
    }))

    widgetDiv.addEventListener("click", ((e: any) => {
      console.log(e);
      const t = e.target.closest(".slide-up-widget__bank");
      if (t) {
        const e = t.querySelector(".slide-up-widget__bank-title").innerText,
          n = JSON.parse(this.loadFromLocalStorage()!);
        if (!n || n.some(((t: any) => t === e)))
          if ((null == n ? void 0 : n.length) > 0) {
            const t = n.splice(n.indexOf(e), 1);
            this.saveInLocalStorage([...t, ...n])
          } else this.saveInLocalStorage([e]);
        else(null == n ? void 0 : n.length) > 2 && n.pop(), this.saveInLocalStorage([e, ...n])
      }
    }))

    document.body.appendChild(widgetDiv)
  }
  
  public closeWidget() {
    const t = document.querySelector(".slide-up-widget");
    t && t.parentNode && t.parentNode.removeChild(t)
  }

  public closeQRCode() {
    const t = document.querySelector(".newpay");
    t && t.parentNode && t.parentNode.removeChild(t)
  }

}

export default SlideUpWidget