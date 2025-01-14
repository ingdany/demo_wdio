describe.skip('Assertions - Browser Matchers', () => {
    
    

    beforeEach(async () => {
        await browser.maximizeWindow()
        await browser.url('https://demoqa.com/')
    })

    it.skip('To Have Url', async() =>{
        await expect(browser).toHaveUrl('https://demoqa.com/')
    })

    it.skip('To Have Url Containing', async() =>{
        await expect(browser).toHaveUrl(expect.stringContaining('demoqa.com'))
    })

    it.skip('To Have Title', async() =>{
        await expect(browser).toHaveTitle('DEMOQA')
    })

    it.skip('To Have Title Containing', async() =>{
        await expect(browser).toHaveTitle(expect.stringContaining('qa'), {ignoreCase: true})
    })
})