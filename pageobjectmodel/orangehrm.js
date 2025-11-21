
import { expect } from "@playwright/test";


exports.createaccountpage =class loginpageofornghrm {

constructor (page){
this.page=page

this.username=page.locator()
this.password= page.locator()
this.loginbtn= page.locator()
this. dashboradheader = page.locator()
}
 async launchurl (){
    await this.page.goto('')
 }

 async login (usernames, passward){
await this.username.fill(usernames)
await this.password.fill(passward)
await this.loginbtn.click()
 }
 async isdaschboradvisable(){
return await this.dashboradheader.isVsible()

 }
 
} 
