import {test, expect} from "@playwright/test"

test('open browser based on websites using Switch', async ({ page, browserName }) => {

    await page.goto ("https://rahulshettyacademy.com/AutomationPractice/")
    await page.locator('//input[@value="radio1"]').check()
    // await page.locator('//input[@value="radio2"]').click()
    // await page.locator('//input[@value="radio3"]').click()
    



})