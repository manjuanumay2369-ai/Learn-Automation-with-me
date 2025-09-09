import {test, expect} from '@playwright/test';

test('verify dbdemo logins', async ({ page }) => {
    await page.goto("https://demoqa.com")
    await page.locator ("(//div[contains(@class,'avatar mx-auto')])[1]").click()
    await page.locator ("//span[normalize-space(text())='Text Box']").click()
    await page.locator ("//input[@placeholder='Full Name']").fill ('Manju')
    await page.locator("//input[@placeholder='name@example.com']").fill ('manju123@gmail.com')
    await page.locator("//textarea[@placeholder='Current Address']").fill('Bangalore')
    await page.locator("//label[normalize-space(text())='Permanent Address']/following::textarea").fill('Hyderabad')
    await  page.locator ("//button[normalize-space(text())='Submit']").click()
    await expect (page.locator("//div[contains(@class,'border col-md-12')]")).toBeVisible()
    await expect (page.locator("//p[@id='name']")).toHaveText('Name:Manju')
    
})
   
    // However, Playwright does not natively support database operations.
    // You would need to use a separate library for database interactions.