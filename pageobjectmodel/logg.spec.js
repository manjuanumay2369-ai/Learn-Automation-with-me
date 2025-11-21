import { expect } from "@playwright/test";

exports.createaccountpage = class createaccountpage{

     constructor(page){

        this.page = page
        this.signuplink = page.locator('//a[@href="https://app.playonereal.com/agent-signup"]')
        this.firstnameInput = page.getByPlaceholder('Enter your first name')
        this.lastnameInput = page.getByPlaceholder('Enter your last name')
        this.usernameInput = page.locator('//input[@name="username"]')
        this.emailInput = page.locator('//input[@name="emailAddress"]')
        this.passwordInput = page.locator('//input[@name="password"]')
        this.confirmPasswordInput = page.locator('//input[@name="confirmPassword"]')
        this.policycheckbox = page.getByTestId('consentedToTerms')
        this.consentcheckbox = page.getByTestId('consentedToCallMessage')
        this.createAccountBtn = page.locator("//span[text()='Create Account']")

     }

    async launchURl(){

      await  this.page.goto('/login')
    }

    async navigate_CreateAccount(){

    await this.signuplink.click()
     
    }

    async createAccount(firstname, lastname, username, email, password){

        await this.firstnameInput.fill(firstname)
        await this.lastnameInput.fill(lastname)
        await this.usernameInput.fill(username)
        await this.emailInput.fill(email)
        await this.passwordInput.fill(password)
        await this.confirmPasswordInput.fill(password)
        await this.policycheckbox.check()
        await this.consentcheckbox.check()
        await this.createAccountBtn.click()

    }

    async verifyaccount_Created(){

        await expect(this.page).toHaveURL('https://app.playonereal.com/agent-onboarding')
    }

}