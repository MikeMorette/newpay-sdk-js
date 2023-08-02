declare class SlideUpWidget {
    private _localStorage;
    private _platform;
    private _stylesMobile;
    private _stylesPC;
    storageName: string;
    constructor(storage: Storage, nav: Navigator);
    private initStyles;
    saveInLocalStorage(data: any): void;
    loadFromLocalStorage(): string | null;
    loadBankDictionary(url: string): Promise<any>;
    getBankList(url: string): Promise<any>;
    showQRCode(url: string): Promise<void>;
    showBankSelector(url: string): Promise<void>;
    closeWidget(): void;
    closeQRCode(): void;
}
export default SlideUpWidget;
