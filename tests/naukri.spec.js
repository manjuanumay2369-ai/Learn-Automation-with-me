import path from 'path';
import {test, expect} from "@playwright/test"


test ('verify naukri',async ({page})=>{

await page.goto('https://www.naukri.com/')

await page.locator('//a[@id="login_Layer"]').click()

//await page.setInputFiles('input[type="file"]', 'e2e/MANJUNATH R.docx')

await expect(page.locator('//div[text()="Login"]')).toBeVisible()

await page.locator("//input[@placeholder='Enter your active Email ID / Username']").fill('manjunathramachandrappa70@gmail.com')

await page.locator("//input[@placeholder='Enter your password']").fill('Manju@1431')
await page.locator("//button[text()='Login']").click()
//await page.waitForLoadState('networkidle')

// ensure profile area is visible and click it
await page.waitForSelector('div.view-profile-wrapper', { state: 'visible' })
await page.locator('div.view-profile-wrapper').click()

// wait for the file input to be attached and upload using a resolved path
const resumePath = path.resolve('tests/uploadfiles/MANJUNATH R.docx')
await page.waitForSelector('input[type="file"]', { state: 'attached' })
await page.setInputFiles('input[type="file"]', resumePath)
//await page.locator('//input[@Class="dummyUpload typ-14Bold"]').setInputFiles('tests/uploadfiles/MANJUNATH R.docx')



})