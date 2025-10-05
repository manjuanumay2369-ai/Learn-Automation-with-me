import { test, expect } from '@playwright/test'

const employees = {
    emp1: {

        Empname: "Manju",
        lname: "manu"
    },

    emp2: {

        Empname: "Manjunath",
        lname: "manusri"
    },

    emp3: {
        Empname: "Manju gowda",
        lname: "manukumar"
    }

}

for (let addemp in employees) {


    test(`looping the add emp - ${addemp}`, async ({ page }) => {


        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        let URname = (await page.locator("//p[text()='Username : Admin']").textContent()).slice(11)
        let PSword = (await page.locator("//p[text()='Password : admin123']").textContent()).slice(11)
        await page.locator("input[placeholder='Username']").fill(URname)
        await page.locator("input[placeholder='Password']").fill(PSword)
        await page.locator("//button[@type='submit']").click()

        await page.locator("(//a[@class='oxd-main-menu-item'])[2]").click()
        await page.locator("//a[normalize-space(text())='Add Employee']").click()
        await page.locator("//input[@placeholder='First Name']").fill(employees[addemp].Empname)
        await page.locator("//input[@placeholder='Last Name']").fill(employees[addemp].lname)
        await page.locator("//button[contains(.,'Save')]").click()
    })
}