# features/login.feature
Feature: 網站登入功能
  Scenario: 使用者使用有效帳密成功登入
    Given 我在登入頁面
    When 我輸入帳號 "user01" 和密碼 "pass123"
    And 我點擊 "登入" 按鈕
    Then 我應該被導向到 "/home" 頁面
    And 我應該看到 "歡迎, user01" 的訊息