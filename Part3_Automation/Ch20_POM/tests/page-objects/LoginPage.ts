import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#username-input');
        this.passwordInput = page.locator('input[type="password"]');
        this.loginButton = page.locator('.login-btn-v2'); 
    }

    async goto() {
        await this.page.goto('/login');
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
    
    async getErrorMessage() {
        return this.page.locator('.error-message');
    }
}
