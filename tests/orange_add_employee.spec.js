const { test, expect } = require('@playwright/test');

test('Login to Orange HRM and add new employee', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Login with admin credentials
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify successful login
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

  // Navigate to PIM module
  await page.getByRole('link', { name: 'PIM' }).click();
  await expect(page.getByRole('heading', { name: 'PIM' })).toBeVisible();

  // Click on Add Employee
  await page.getByRole('button', { name: 'Add' }).click();

  // Fill in employee details
  await page.getByName('firstName').fill('manju');
  await page.getByName('lastName').fill('gowda');
  await page.getByName('employeeId').clear(); // Clear existing ID
  await page.getByName('employeeId').fill('94918');

  // Enable Create Login Details
  await page.getByRole('switch', { name: 'Create Login Details' }).click();

  // Fill in login details
  await page.getByRole('textbox', { name: 'Username' }).fill('Manjugowda');
  await page.getByRole('textbox', { name: 'Password' }).fill('Manju@123');
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Manju@123');

  // Ensure status is enabled (visible)
  await page.getByRole('radio', { name: 'Enabled' }).check();

  // Click Save button
  await page.getByRole('button', { name: 'Save' }).click();

  // Verify the save was successful by checking for the profile page
  await expect(page.getByText('Personal Details')).toBeVisible();
});