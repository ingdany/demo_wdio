describe.only('Mock an API request', ()=>{

    it('ui should display mocked to-dos', async ()=>{
        const helloWorldMock = await browser.mock('**/', {method: 'get', statusCode: (statusCode) => statusCode == 200})
        await browser.url(`http://localhost:9000/`);

        
        helloWorldMock.respond([{
            hello: 'World',
        }])
        // await browser.refresh()
        // await browser.debug()
    })
})