import { test, expect } from '@playwright/test'

test("verifying locators", async ({ page, browserName }) => {
    test.skip(browserName !== 'chromium', 'Only run on Chromium');
    
    // navigate to a real URL
    await page.goto("https://classic.freecrm.com/register/")
    await page.locator('id=email-input').fill('manjjunath@getMaxListeners.com')
    //await page.locator()
    //await page.close()
    await page.locator("//span[normalize-space(text())='I agree to the']").click()
    //await page.locator("[.'recaptcha-checkbox-border']").click()
    await page.locator('id=sign-in-btn').click()
    await expect(page.locator("//button['Invalid email']")).toBeVisible()
await expect (page.locator('//div[text()="Errors"]')).toBeVisible()    




});

test("verifying locators in flipcart", async ({ page }) => {
await page.goto('https://www.flipkart.com/')
await page.locator("//span[text()='Login']").click()
await page.locator('//button["id=me8rrt"][1]').click()
await page.locator('//button["id=me8rrt"][1]').fill("iphone 16, white, 128")
await page.locator("MJG8Up").click() 

})

test('open new tab on OrangeHRM, print its title, close it and return to parent', async ({ page, context }) => {
    // Navigate parent page to the OrangeHRM demo site
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    // Try to find a link that opens in a new tab (target="_blank"); if none, fallback to window.open
    const newTabLink = await page.$('a[target="_blank"]');

    let newPage;
    if (newTabLink) {
        // Click the link and wait for the new page event
        const [, opened] = await Promise.all([
            newTabLink.click(),
            context.waitForEvent('page')
        ]);
        newPage = opened;
    } else {
        // Fallback: open a new tab via window.open from the OrangeHRM page
        const [, opened] = await Promise.all([
            page.evaluate(() => window.open('https://www.wikipedia.org', '_blank')),
            context.waitForEvent('page')
        ]);
        newPage = opened;
    }

    // Wait for the new page to load and get its title
    await newPage.waitForLoadState();
    const newTitle = await newPage.title();
    console.log('New tab title:', newTitle);

    // Close the newly opened tab
    await newPage.close();

    // Bring focus back to the parent tab and ensure it's still available
    await page.bringToFront();
    const parentTitle = await page.title();
    console.log('Back to parent tab title:', parentTitle);
    expect(parentTitle).toBeTruthy();

    //await page.close()
});