【輸入條件/原因】（C - Cause）：
1. C1：會員等級為VIP（True/False）
2. C2：歷史購買金額超過$10,000（True/False）
3. C3：使用「促銷代碼A」（True/False）
4. C4：訂單商品屬於「清倉類別」（True/False）

【結果/效果】（E - Effect）：
1. E1：獲得20%折扣
2. E2：獲得10%折扣
3. E3：獲得5%折扣
4. E4：無折扣

【邏輯約束條件】（Constraints）：
* 互斥（Exclusive）： 
  * C3（使用促銷代碼A）和 C4（清倉類別）不能同時為True。（促銷代碼不適用於清倉品）
* 必選（Required）：
  * 如果C1（VIP）為True，則結果必須至少獲得E3（5%折扣）。

【因果關係】（Rules）：
* Rule 1：如果 C1 AND C2 皆為 True，則結果為 E1（20% 折扣）。
* Rule 2：如果 C1 OR C3 為 True，但 Rule 1 不適用，則結果為 E2（10%
  折扣）。
* Rule 3：如果 C4 為 True 且 Rule 1, 2 都不適用，則結果為 E3（5% 折扣）。
* Rule 4：所有不符合上述規則的情境，結果為 E4（無折扣）。

請根據上述條件、約束和規則，產生一個完整決策表（Decision Table）。在表
中，請明確標示哪些組合因違反邏輯約束而為「N/A（無效情境）」。