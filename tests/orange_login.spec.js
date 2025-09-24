const { test, expect } = require('@playwright/test');

test('Login to Orange HRM', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Wait for the username field to be visible and fill it
  await page.getByPlaceholder('Username').fill('Admin');

  // Fill in the password
  await page.getByPlaceholder('Password').fill('admin123');

  // Click the login button
  await page.getByRole('button', { name: 'Login' }).click();

  // Optional: Add verification that login was successful
  // For example, check if the dashboard is visible
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});