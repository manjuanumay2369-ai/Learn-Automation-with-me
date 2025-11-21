import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://api.cogmento.com/register/?lang=en-GB');
  await page.getByLabel('detail-button').click();
  await page.getByRole('textbox', { name: 'email-input' }).click();
  await page.getByRole('textbox', { name: 'email-input' }).fill('manjunath34@gmail.com');
  await page.getByLabel('checkbox-label').click();
  await page.locator('body > div:nth-child(2) > div').first().click();
  await page.locator('iframe[name="a-55vgc0cvbdny"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('body > div:nth-child(2) > div').first().click();
  await page.getByLabel('errors-title').click();
  await page.getByLabel('error', { exact: true }).click();
  await expect(page.getByLabel('errors-title')).toBeVisible();
  await expect(page.getByLabel('email-button')).toBeVisible();
  await expect(page.getByText('I agree to the')).toBeVisible();
  await page.locator('iframe[name="a-zf5j1p13xqy7"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-zf5j1p13xqy7"]').contentFrame().getByRole('button', { name: 'Next' }).click();
await page.locator('iframe[name="c-zf5j1p13xqy7"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await expect(page.locator('iframe[name="a-zf5j1p13xqy7"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'sign-up-button' })).toBeVisible();
});