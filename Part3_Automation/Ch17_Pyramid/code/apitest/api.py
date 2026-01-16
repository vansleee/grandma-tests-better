import requests
# 假設我們的登入 API 端點是 /api/login
API_ENDPOINT = "https://your-app.example.com/api/login"

def test_login_api_success():
    """ 測試：使用正確帳密登入 """
    # 1. 準備請求的資料 (Payload)
    login_data = {
        "email": "user@example.com",
        "password": "correct_password123"
    }

    # 2. 發送 POST 請求
    response = requests.post(API_ENDPOINT, json=login_data)

    # 3. 驗證回應 (Response)
    assert response.status_code == 200
    assert response.json()["message"] == "登入成功"
    assert "token" in response.json() # 檢查是否收到了 token
