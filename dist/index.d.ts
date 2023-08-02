declare class SlideUpWidget {
    private _localStorage;
    private platform;
    storageName: string;
    constructor(storage: Storage, nav: Navigator);
    saveInLocalStorage(data: any): void;
    loadFromLocalStorage(): string | null;
    loadBankDictionary(url: string): Promise<any>;
    getBankList(url: string): Promise<any>;
    showQRCode(url: string): Promise<void>;
    showBankSelector(url: string): Promise<void>;
    closeWidget(): void;
}
export default SlideUpWidget;
