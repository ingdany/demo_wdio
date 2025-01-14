export default class basePage {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public async open(path: string): Promise<string> {
        await browser.maximizeWindow()
        return browser.url(`https://demoqa.com/${path}`)
    }
}