
describe.skip("Locators Test Scenarios", () => {
    it("Should login with valid credentials", async () => {
        await browser.url("https://demoqa.com/links");
    });

    it("CSS Example", async () => {
        const createdLink = await $("#created");
        const responseLink = await $("#linkResponse");

        createdLink.scrollIntoView();
        createdLink.click();

        responseLink.scrollIntoView();
        // expect(await responseLink.getText()).toContain("Link has responded with status 201 and status text Created");
        expect(await responseLink).toHaveText("Link has responded with status 201 and status text Created");
    });

    it("CSS By Index Example", async () => {
        const noContentLink = await $("#linkWraper p:nth-child(6) a");
        const responseLink = await $("#linkResponse");

        noContentLink.scrollIntoView();
        noContentLink.click();

        responseLink.scrollIntoView();
        // expect(await responseLink.getText()).toContain("Link has responded with status 201 and status text Created");
        expect(await responseLink).toHaveText("Link has responded with status 204 and status text No Content");
    });

    it("Partial LinkText", async () => {
        const movedLink = await $("a=Moved");
        const responseLink = await $("#linkResponse");

        movedLink.scrollIntoView();
        movedLink.click();

        responseLink.scrollIntoView();
        // expect(await responseLink.getText()).toContain("Link has responded with status 201 and status text Created");
        expect(await responseLink).toHaveText("Link has responded with status 301 and status text Moved Permanently");
    });

    it("Partial Element Text", async () => {
        const movedLink = await $("a*=Mov");
        const responseLink = await $("#linkResponse");

        movedLink.scrollIntoView();
        movedLink.click();

        responseLink.scrollIntoView();
        // expect(await responseLink.getText()).toContain("Link has responded with status 201 and status text Created");
        expect(await responseLink).toHaveText("Link has responded with status 301 and status text Moved Permanently");
    });

    it("XPath Example", async () => {
        const xpathLink = await $("//*[@id='bad-request']");
        const responseLink = await $("#linkResponse");

        xpathLink.scrollIntoView();
        xpathLink.click();

        responseLink.scrollIntoView();
        // expect(await responseLink.getText()).toContain("Link has responded with status 201 and status text Created");
        expect(await responseLink).toHaveText("Link has responded with status 400 and status text Bad Request");
    });
});