# 測試案例：測試刪除使用者功能
def test_delete_user_successfully():
    user_id = None

    try:
        # 1. (SETUP) 呼叫 TDM 服務取得一個全新的使用者帳號
        response = api.post("/api/test-data/create-user", {"role": "guest"})
        new_user = response.json()
        user_id = new_user["id"]  # 儲存 ID，用於後續清理

        # 2. (EXECUTION) 登入並執行刪除操作（測試業務邏輯）
        ui.login(new_user["email"], new_user["password"])
        ui.navigate_to_profile()
        ui.click("#delete-account-button")

        # 3. (VERIFICATION) 驗證刪除結果（業務邏輯）
        assert ui.get_message() == "帳號已成功刪除"
        # 4. (VERIFICATION) 再次呼叫應用服務驗證使用者確實被刪除
        assert api.get(f"/api/app/user/{user_id}").status_code == 404
    finally:
        # 5. (TEARDOWN / CLEANUP) 無論測試成功或失敗，都必須執行清理
        if user_id:
        # 呼叫 TDM 服務的刪除使用者的 API
        # 確保測試環境的乾淨，避免資料污染 [cite: 1785, 1786]
        api.delete(f"/api/test-data/user/{user_id}")
