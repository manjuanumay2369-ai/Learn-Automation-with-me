import {test, expect} from '@playwright/test';

test('verify dbdemo logins', async ({ page }) => {

    await page.goto("https://demoqa.com")
    await page.locator("(//div[contains(@class,'avatar mx-auto')])[1]").click()
    await page.locator("//li[contains(.,'Text Box')]").click()
    await page.locator("#userName").fill("manju")
    await page.locator("input[type='email']").fill("manju@gmail.com")
    await page.locator("#currentAddress").fill("Bangalore")
    await page.locator("#permanentAddress").fill("Hydarabad")
    await page.locator("#submit").click()
    await expect(page.locator("#name")).toHaveText("Name:manju")
    await expect(page).toHaveURL("https://demoqa.com/text-box")


  
    

})