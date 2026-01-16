根據這個函式撰寫單元測試，並且使用 pytest 框架，其測試必須包含：
1. 模擬（Mock）：使用 unittest.mock 來模擬 user_service。
2. 驗證行為：驗證當密碼錯誤時，有呼叫 logging.warning
