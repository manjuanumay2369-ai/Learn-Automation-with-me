class Loginpage{

constructure(page){
this.page=page 

this.logo = page.locator('//img[@alt="company-branding"]')
this.username =page.locator('//input[@name="username"]')
this.password =page.getByLabel('Password')
this.loginbtn = page.locator('//button[@type="submit"]')
this.errorMsg = page.locator('//p[@class="oxd-text oxd-text--p oxd-alert-content-text"]')   


}async validateLogo(){
    return await this.logo.isVisible()}





}