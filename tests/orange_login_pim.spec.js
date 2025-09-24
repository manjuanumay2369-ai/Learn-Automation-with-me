const { test, expect } = require('@playwright/test');

test('Login to Orange HRM and navigate to PIM', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Wait for the username field to be visible and fill it
  await page.getByPlaceholder('Username').fill('Admin');

  // Fill in the password
  await page.getByPlaceholder('Password').fill('admin123');

  // Click the login button
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify that login was successful by checking for Dashboard heading
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

  // Click on PIM module
  await page.getByRole('link', { name: 'PIM' }).click();

  // Verify that we are on PIM page
  await expect(page.getByRole('heading', { name: 'PIM' })).toBeVisible();
});