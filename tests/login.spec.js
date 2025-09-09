import { test, expect } from '@playwright/test';

test('Verify log in with valid credentials', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator("//input[@placeholder='Username']"). fill ('admin')
    await page. locator("//input[@type='password']").fill('admin123') 
    await page.locator ("//button[@type='submit']").click()
    await expect(page).toHaveURL ("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    //or
    await expect(page.locator ("//h6[text()='Dashboard']")).toBeVisible()

} )


test('Verify log in with valid username invalid password', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator("//input[@placeholder='Username']"). fill ('admin')
    await page. locator("//input[@type='password']").fill('admin183') 
    await page.locator ("//button[@type='submit']").click()
    // verify method 1
   await  expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

} )

test('Verify log in with invalid username valid password', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator("//input[@placeholder='Username']"). fill ('mandmin')
    await page. locator("//input[@type='password']").fill('admin123') 
    await page.locator ("//button[@type='submit']").click()
    // verify method 1
   await  expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

} )



test('Verify log in with invalid username invalid password', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator("//input[@placeholder='Username']"). fill ('mandmin')
    await page. locator("//input[@type='password']").fill('admin183') 
    await page.locator ("//button[@type='submit']").click()
    // verify method 1
   await  expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

} )