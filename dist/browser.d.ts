declare class Browser {
    private _browser;
    constructor(browser: Navigator);
    getOS(): string;
    isMobile(): boolean;
}
export default Browser;
