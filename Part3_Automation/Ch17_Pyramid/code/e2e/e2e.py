# 範例：使用 Playwright for Python 執行 E2E 登入測試
import re
from playwright.sync_api import Page, expect
from pages.login_page import LoginPage

def test_user_can_login_successfully(page: Page):
    # 準備工作：初始化 LoginPage 物件
    login_page = LoginPage(page)

    # 1. (Given) 導航至登入頁
    login_page.goto()

    # 2. (When) 執行 UI 操作 (填寫並點擊)
    login_page.login("user01", "pass123")

    # 3. (Then) 驗證 UI 結果 (頁面跳轉)
    expect(page).to_have_url(re.compile(r"/home"))
