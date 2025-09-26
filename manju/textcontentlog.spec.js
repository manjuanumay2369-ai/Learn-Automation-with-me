import { test, expect } from '@playwright/test';
 
test('should select an option from dropdown', async ({ page }) => {



  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Step 1: Extract sample credentials from the page
  const SUsername = await page.locator("//p[text()='Username : Admin']").evaluate(el => el.nextSibling.textContent.trim());
  const SPassword = await page.locator("//p[text()='Password : admin123']").evaluate(e2 => e2.nextSibling.textContent.trim());

  // Optional: Log to verify
  console.log(`Extracted credentials -> Username: ${SUsername}, Password: ${SPassword}`);

  // Step 2: Fill the actual login form
  await page.locator("//input[@placeholder='Username']").fill(SUsername);
  await page.locator("//input[@placeholder='Password']").fill(SPassword);

  // Step 3: Click the login button
  await page.locator('button:has-text("Login")').click();

  // Add any post-login checks or assertions here

  // await browser.close(); // Uncomment if you want to close after execution
})