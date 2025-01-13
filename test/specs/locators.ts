
describe("Locators Test Scenarios", () => {
    it("should login with valid credentials", async () => {
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

    
});