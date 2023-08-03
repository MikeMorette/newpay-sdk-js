# @newpay/sdk-js
#### Официальное JS SDK эквайринг сервиса NewPay

##### ✅ Установка через [NPM](https://www.npmjs.com/package/@newpay/sdk-js)
##### ✅ Установка подключением через [script](https://github.com/MikeMorette/newpay-sdk-js/blob/main/build/main-bundle.js)
##### ✅  [Виджет](https://github.com/MikeMorette/newpay-sdk-js/blob/8eee52d4964162c9c4c36820b29fbbe5ecda5f99/build/main-bundle.js#L265) для мобильных устройств
##### ✅  [Виджет](https://github.com/MikeMorette/newpay-sdk-js/blob/8eee52d4964162c9c4c36820b29fbbe5ecda5f99/build/main-bundle.js#L193) для ПК
#
#
## Установка и использование

Чтобы установить SDK с помощью NPM, введите следующую команду:
```sh
npm i @newpay/sdk-js
```

```js
import SlideUpWidget from "@newpay/sdk-js";

const widget = new SlideUpWidget();

// На мобильном устройстве
if (widget.isMobileCheck()) {
  widget.showBankSelector("https://qr.nspk.ru/AD10006C35FBF1GA9IUAGIF6JCU23NVE?type=02&bank=100000000061&sum=2200&cur=RUB&crc=04A3");
} else {
  // На ПК
  widget.showQRCode("https://online.tester.newpay.pro/?sale_token=111121");
}

```