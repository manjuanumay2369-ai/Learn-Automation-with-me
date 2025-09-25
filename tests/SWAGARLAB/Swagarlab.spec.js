import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Login first
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Wait for inventory page to load
  await page.waitForSelector('.inventory_item');

  // Extract product names, prices, and add-to-cart buttons
  const products = await page.$$eval('.inventory_item', items =>
    items.map(item => {
      const name = item.querySelector('.inventory_item_name')?.innerText;
      const priceText = item.querySelector('.inventory_item_price')?.innerText;
      const price = parseFloat(priceText.replace('$', ''));
      const buttonSelector = item.querySelector('button')?.getAttribute('id');
      return { name, price, buttonSelector };
    })
  );

  // Sort products by price descending
  const sorted = products.sort((a, b) => b.price - a.price);

  // Get the second highest priced product
  const secondHighest = sorted[1];
  console.log(`Adding to cart: ${secondHighest.name} - $${secondHighest.price}`);

  // Click the corresponding "Add to Cart" button
  await page.click(`#${secondHighest.buttonSelector}`);

  // Optional: Confirm item added to cart
  await page.click('.shopping_cart_link');
  await page.waitForSelector('.cart_item');
  const cartItems = await page.$$eval('.cart_item', items =>
    items.map(item => item.querySelector('.inventory_item_name')?.innerText)
  );
  console.log('Cart contains:', cartItems);

  //await browser.close();
})
