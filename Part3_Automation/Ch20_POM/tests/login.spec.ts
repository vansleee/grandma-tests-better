// tests/login.spec.ts
import { test, expect } from '@playwright/test';
test('成功使用有效帳號登入', async ({ page }) => {
    await page.goto('/login');
    // 元素定位和操作邏輯混在一起
    await page.locator('#username-input').fill('valid_user');
    await page.locator('input[type="password"]').fill('correct_pass');
    await page.click('.login-btn-v2');
    // 驗證導向正確的 dashboard
    await expect(page).toHaveURL('/dashboard');
});

test('使用錯誤密碼登入應該失敗', async ({ page }) => {
    await page.goto('/login');
    // 定位器再次重複出現
    await page.locator('#username-input').fill('valid_user');
    await page.locator('input[type="password"]').fill('wrong_pass');
    await page.click('.login-btn-v2'); // 這裡也重複了
    // 驗證錯誤訊息是否有顯示
    await expect(page.locator('.error-message')).toBeVisible();
});