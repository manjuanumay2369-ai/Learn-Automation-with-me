const { test, expect } = require('@playwright/test');

test('Add New Employee with Login Credentials', async ({ page }) => {
    // Test Data
    const employeeData = {
        firstName: 'manju',
        lastName: 'gowda',
        employeeId: '94918',
        username: 'Manjugowda',
        password: 'Manju@123'
    };

    // 1. Login to Orange HRM
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify successful login
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

    // 2. Navigate to PIM module
    await page.getByRole('link', { name: 'PIM' }).click();
    await expect(page.getByRole('heading', { name: 'PIM' })).toBeVisible();

    // 3. Click Add Employee button
    await page.getByRole('button', { name: 'Add' }).click();

    // 4. Fill Employee Details
    await page.locator("//input[@placeholder='First Name']").fill(employeeData.firstName);
    await page.locator("//input[@placeholder='Last Name']").fill(employeeData.lastName);
    
    // Clear and set employee ID
    const empIdInput = page.getByName('employeeId');
    await empIdInput.clear();
    await empIdInput.fill(employeeData.employeeId);

    // 5. Create Login Details
    await page.getByRole('switch', { name: 'Create Login Details' }).click();

    // Fill login credentials
    await page.getByRole('textbox', { name: 'Username' }).fill(employeeData.username);
    await page.getByRole('textbox', { name: 'Password' }).fill(employeeData.password);
    await page.getByRole('textbox', { name: 'Confirm Password' }).fill(employeeData.password);

    // 6. Set Status to Enabled
    await page.getByRole('radio', { name: 'Enabled' }).check();

    // 7. Save Employee Record
    await page.getByRole('button', { name: 'Save' }).click();

    // 8. Verify Save was Successful
    await expect(page.getByText('Personal Details')).toBeVisible();
    
    // Additional verification - check if name appears in header
    await expect(page.getByText(`${employeeData.firstName} ${employeeData.lastName}`)).toBeVisible();
});