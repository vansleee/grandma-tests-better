## 折扣計算－決策表（依 Constraints 過濾後的「有效組合」）

> Constraints
> - 互斥：C3=True 與 C4=True **不可同時成立**（已排除）
> - 必選：若 C1=True（VIP），結果必須至少 E3（5%）  
    >   （依規則優先序，C1=True 時一定命中 Rule1 或 Rule2，故滿足）

> 規則優先序：Rule 1 → Rule 2 → Rule 3 → Rule 4

| 規則編號 | C1 VIP | C2 歷史金額>10k | C3 促銷代碼A | C4 清倉 | 對應規則命中 | 結果（Effect） |
|---|---|---|---|---|---|---|
| R1 | F | F | F | F | Rule 4 | E4 無折扣 |
| R2 | F | F | F | T | Rule 3 | E3 5% 折扣 |
| R3 | F | F | T | F | Rule 2 | E2 10% 折扣 |
| R4 | F | T | F | F | Rule 4 | E4 無折扣 |
| R5 | F | T | F | T | Rule 3 | E3 5% 折扣 |
| R6 | F | T | T | F | Rule 2 | E2 10% 折扣 |
| R7 | T | F | F | F | Rule 2 | E2 10% 折扣 |
| R8 | T | F | F | T | Rule 2（優先於 Rule3） | E2 10% 折扣 |
| R9 | T | F | T | F | Rule 2 | E2 10% 折扣 |
| R10 | T | T | F | F | Rule 1 | E1 20% 折扣 |
| R11 | T | T | F | T | Rule 1 | E1 20% 折扣 |
| R12 | T | T | T | F | Rule 1 | E1 20% 折扣 |

### 已排除的「無效組合」（不列入決策表）
- C3=True 且 C4=True（促銷代碼不適用清倉品），共 4 種：
    - (C1,C2) = (F,F), (F,T), (T,F), (T,T) 且 C3=T,C4=T