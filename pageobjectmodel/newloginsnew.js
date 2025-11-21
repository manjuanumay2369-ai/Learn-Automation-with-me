class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('input[name="username"]');
    this.password = page.locator('input[name="password"]');
    this.loginBtn = page.locator('button[type="submit"]');
    this.dashboardHeader = page.locator('h6:has-text("Dashboard")');
  }

  async open() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async login(user, pass) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }

  async isDashboardVisible() {
    return await this.dashboardHeader.isVisible();
  }
}

module.exports = { LoginPage };
