import loginPage from '../pageobjects/bookStore/loginPage'


describe.skip('Login Module Test Suite', () => {
    beforeEach(async () => {
        loginPage.open()
    })

    it('should login', async() =>{
        loginPage.login('dperez', 'M1P@$$w0rd')
        // await expect(loginPage.usernameLabel).toBeDisplayed({ timeout: 5000 });
        console.log(await loginPage.usernameLabel.getText())
        await expect(loginPage.usernameLabel).toHaveTextContaining('dperez');
        
        // loginPage.open()
        // loginPage.clickLogout()
        // await expect(loginPage.usernameLabel).not.toBeExisting()
    })

    it('should not login', async() =>{
        loginPage.login('dperez', 'Test1234**')
        await expect(loginPage.usernameLabel).not.toBeDisplayed()
    })
})