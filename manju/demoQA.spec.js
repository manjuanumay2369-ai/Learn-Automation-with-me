import {test,expect} from '@playwright/test';

test('verify dbdemo logins', async ({ page }) => {
    await page.goto("https://demoqa.com")
    await page.locator("//img[@alt='Selenium Online Training']").click()
    await page.locator("//span[normalize-space(text())='Tutorials']").click()
    await page.locator ("//li[@class='active']//span[1]").click()
    await expect(page).toHaveURL("https://www.toolsqa.com/selenium-training/")
    await page.locator("(//a[@title='Software Testing'])[2]").click()
    await expect(page).toHaveURL("https://www.toolsqa.com/software-testing/software-testing-tutorial/")


}) 