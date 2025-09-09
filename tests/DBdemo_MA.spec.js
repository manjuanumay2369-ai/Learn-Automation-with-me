import {test, expect} from '@playwright/test';

import data from "../Data_variables/MA.json"

test('verify dbdemo logins', async ({ page }) => {

    await page.goto("https://demoqa.com")
    await page.locator ("(//div[contains(@class,'avatar mx-auto')])[1]").click()
    await page.locator ("//span[normalize-space(text())='Text Box']").click()
    await page.locator ("//input[@placeholder='Full Name']").fill (data['Full Name'])
    await page.locator("//input[@placeholder='name@example.com']").fill (data['email'])
    await page.locator("//textarea[@placeholder='Current Address']").fill(data['present address'])
    await page.locator("//label[normalize-space(text())='Permanent Address']/following::textarea").fill(data['Permanent Address'])
    await  page.locator ("//button[normalize-space(text())='Submit']").click()
    


})