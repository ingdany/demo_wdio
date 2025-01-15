describe('Spying an API request', ()=>{

    it('spying the existing to-dos', async ()=>{
        const helloWorldGet = await browser.mock('**/', {method: 'get'})

        await browser.url(`http://localhost:9000/`);
        console.log(helloWorldGet.calls[0].response.status)
        // console.log(helloWorldGet.calls[0].body)
        expect(helloWorldGet.calls[0].response.status).toEqual(200)
        // await browser.debug()

    })

})