// tests/login.spec.ts (重構後)
import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';

test('使用合法帳號登入成功', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    
    // 只專於登入動作
    await loginPage.login('valid_user', 'correct_pass');
    
    // 驗證是否正確導向 dashboard
    await expect(page).toHaveURL(/.*dashboard/);
});

test('使用錯誤密碼應該登入失敗', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    
        // 只專於登入動作
    await loginPage.login('valid_user', 'wrong_pass'); 
    
    // 驗證是否顯示錯誤訊息
    const errorMessage = await loginPage.getErrorMessage();
    await expect(errorMessage).toBeVisible();
});
