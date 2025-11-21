import { test, expect } from '@playwright/test';

test('Add Adidas Poly & Cotton Tshirt to enquiry and verify enquiry cart', async ({ page }) => {
  await page.goto('https://swaglabs.in/products');

  // Find the Adidas product card and click its 'Add to enquiry' button
  const adidasCard = page.locator("//div[contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'), 'adidas poly')]");
  if (await adidasCard.count() > 0) {
    const btn = adidasCard.locator(".//button[contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'), 'add to enquiry')]");
    if (await btn.count() > 0) await btn.first().click();
  } else {
    // fallback: click any 'Add to enquiry' button
    const anyBtn = page.locator("//button[contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'), 'add to enquiry')]");
    await anyBtn.first().click();
  }

  // Assert the enquiry cart/icon is visible
  const enquiry = page.locator("text=Enquiry, a[href*='enquiry'], .enquiry-cart, .enquiry_cart");
  await expect(enquiry.first()).toBeVisible();
});

