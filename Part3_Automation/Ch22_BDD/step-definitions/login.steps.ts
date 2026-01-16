// step-definitions/login.steps.ts

import { Given, When, Then } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


// =======================
// Given（前置條件）
// =======================
Given('我在登入頁面', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
});


// =======================
// When（行為）
// =======================
When(
    '我輸入帳號 {string} 和密碼 {string}',
    async ({ page }, username, password) => {
        const loginPage = new LoginPage(page);
        await loginPage.login(username, password);
    }
);

When('我點擊 "登入" 按鈕', async ({ page }) => {
    // 在我們的 POM 中，login() 已經包含點擊按鈕，
    // 因此此 step 可刻意留空，或將 login() 拆成更細的動作
    // 此處僅作語意對齊示例
});


// =======================
// Then（驗證）
// =======================
Then('我應該被導向到 {string} 頁面', async ({ page }, path) => {
    await expect(page).toHaveURL(new RegExp(path));
});

Then('我應該看到 {string} 的訊息', async ({ page }, message) => {
    // 假設歡迎訊息的 ID 是 #welcome-message
    await expect(page.locator('#welcome-message')).toHaveText(message);
});