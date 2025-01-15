describe('Browser & Windows Scenarios', ()=>{
    beforeEach(async()=>{
        await browser.maximizeWindow()
        await browser.url('https://demoqa.com/browser-windows')
    })

    it.only('should open a new tab after clicking a button', async () => {
        //https://webdriver.io/docs/api/browser/switchWindow
        // await browser.waitUntil(
        //     async () => await $('#tabButton').isDisplayed(),
        //     {
        //         timeout: 20000,
        //         timeoutMsg: 'Element was not displayed after 5s'
        //     }
        // );
        const tabButton = $('#tabButton').waitForDisplayed({ timeout: 5000 });
        await tabButton.click();
        browser.debug();
        await browser.switchWindow('sample');
        await expect(tabButton).toHaveTextContaining('This is a sample page');
        await browser.closeWindow();
        await browser.switchWindow('browser-windows');

    })

    it('should open a new tab by command', async () => {
        await browser.newWindow('https://demoqa.com/sample')
        await browser.switchWindow('sample')
        await expect($('#sampleHeading')).toHaveTextContaining('This is a sample page')
        await browser.closeWindow()
        await browser.switchWindow('browser-windows')
    })


    it('should open a new window after clicking a button', async () => {

        //https://webdriver.io/docs/api/browser/newWindow/

        await $('#windowButton').click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await expect($('#sampleHeading')).toHaveTextContaining('This is a sample page')
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
        await expect($('.main-header')).toHaveTextContaining('Browser Windows')
    })

})