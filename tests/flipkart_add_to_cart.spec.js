import { test, expect } from '@playwright/test';

test('Flipkart - search iPhone 14 pro 256, add to cart and check payment', async ({ page, context }) => {
  // Go to Flipkart
  await page.goto('https://www.flipkart.com/');

  // Close login modal if it appears
  try {
    const closeBtn = page.locator('button._2KpZ6l._2doB4z');
    if (await closeBtn.count() > 0) {
      await closeBtn.first().click();
    }
  } catch (e) {
    // ignore
  }
  // extra fallback
  await page.keyboard.press('Escape');

  // Search for the product
  const search = page.locator('input[name="q"]');
  await expect(search).toBeVisible({ timeout: 5000 });
  await search.fill('iPhone 14 pro 256');
  await search.press('Enter');

  // Wait for results to load
  await page.waitForLoadState('networkidle');

  // Try to click the first product result. Flipkart uses different layouts; probe a few selectors.
  const productSelector = 'a._1fQZEK, a.s1Q9rs, a.IRpwTa';
  const product = page.locator(productSelector).first();
  if (await product.count() === 0) {
    throw new Error('No product results found for the search');
  }

  // Click the product. If it opens a new tab, capture it within a short timeout,
  // otherwise assume the product opened in the same page.
  let productPage = page;
  await product.click();
  try {
    const newPage = await context.waitForEvent('page', { timeout: 3000 });
    await newPage.waitForLoadState('load');
    productPage = newPage;
  } catch (e) {
    // No new tab — product opened in the same page
    await page.waitForLoadState('networkidle');
    productPage = page;
  }

  // Wait briefly to ensure product page UI stabilized
  await productPage.waitForTimeout(1500);

  // Click 'Add to cart' (or fallback to 'Buy Now')
  const addToCart = productPage.locator('text=/ADD TO CART/i').first();
  if (await addToCart.count() > 0) {
    await addToCart.click();
  } else {
    const buyNow = productPage.locator('text=/BUY NOW|Buy Now|Buy now/i').first();
    if (await buyNow.count() > 0) {
      await buyNow.click();
    } else {
      console.log('Add to cart / Buy Now button not found on product page');
    }
  }

  // Navigate to cart page to verify payment/checkout options
  // Using direct url to cart to be robust across layouts
  await productPage.goto('https://www.flipkart.com/viewcart?otracker=Cart_Icon_Click');
  await productPage.waitForLoadState('networkidle');

  // Check for presence of checkout/payment buttons like 'PLACE ORDER' or 'Proceed to pay'
  const proceedButton = productPage.locator('text=/PLACE ORDER|Proceed to pay/i');
  const isProceedVisible = await proceedButton.first().isVisible().catch(() => false);

  console.log('Payment/checkout available:', isProceedVisible);
  expect(isProceedVisible).toBeTruthy();
});
