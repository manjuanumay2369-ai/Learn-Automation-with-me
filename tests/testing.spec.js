import{test, expect} from '@playwright/test'

test ('', async ({page})=>{


    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")


    let URname = (await page.locator("//p[text()='Username : Admin']").textContent()).slice(11)
    let PSword = (await page.locator("//p[text()='Password : admin123']").textContent()).slice(11)

    console.log(URname)
    console.log(PSword)
    await page.locator("input[placeholder='Username']"). fill(URname)

   
    await page.locator("input[placeholder='Password']"). fill(PSword)
 

    await page.locator("//button[@type='submit']").click()
})