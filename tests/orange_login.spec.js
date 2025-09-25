import { test, expect } from '@playwright/test';



test('Login to Orange HRM', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Wait for the username field to be visible and fill it
  await page.locator('//input[@name="username"]').fill("admin");

  // Fill in the password
  await page.locator('//input[@type="password"]').fill("admin123");

  // Click the login button
  await page.locator('//button[@type="submit"]').click();

  // Optional: Add verification that login was successful
  // For example, check if the dashboard is visible
//  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
await  expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

await page.locator("//span[text()='Admin']").click()



});