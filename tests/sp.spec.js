const { test, expect } = require('@playwright/test');

test('Launch OrangeHRM URL', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/');
});