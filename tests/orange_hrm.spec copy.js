
import {test, expect} from '@playwright/test';
import orhr from '../Data_variables/orange.json'

test ('ADD EMPLOYEE', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator ("//input[@name='username']").fill (orhr.username)
    await page.locator ("//input[@name='password']").fill (orhr.password)
    await  page.locator ("//button[@type='submit']").click()
    await expect (page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await page.locator("//span[text()='PIM']").click()
    await expect (page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
    await page.locator("//a[normalize-space(text())='Add Employee']").click()
    await expect (page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee")
    await page.locator("(//label[normalize-space(text())='Employee Full Name']/following::input)[1]").fill (orhr.Firstname)
    await page.locator ("input[name='middleName']").fill (orhr.middleName)
    await page.locator ("input[name='lastName']").fill (orhr.Lastname)
    await page.locator ("(//label[normalize-space(text())='Employee Id']/following::input)[1]").fill ('99004')
    await page.locator ("//button[contains(.,'Save')]").click()
    await page.locator("//a[normalize-space(text())='Personal Details']").click()
    await expect(page.locator("//a[normalize-space(text())='Personal Details']")).toBeVisible()
         
})