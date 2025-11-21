const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageobjectmodel/newloginsnew');
const { users } = require('../Utilties/testdata');

test('OrangeHRM login using POM', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login(users.admin.username, users.admin.password);

  expect(await loginPage.isDashboardVisible()).toBeTruthy();
});
