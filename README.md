# 👵 我阿嬤都比你會測試：從生活智慧建立測試思維，到自動化與AI的完整進化

![License](https://img.shields.io/badge/license-MIT-green)
![Python](https://img.shields.io/badge/python-3.9+-blue)
![TypeScript](https://img.shields.io/badge/typescript-5.0+-blue)
![Playwright](https://img.shields.io/badge/testing-playwright-orange)
![k6](https://img.shields.io/badge/load%20testing-k6-purple)

> **「食譜（書）是用來學功夫的，廚房（GitHub）是用來練手藝的。想吃好料，就動手自己炒！」—— 阿嬤**

歡迎來到 **「阿嬤的測試廚房」**！這裡是書籍《我阿嬤都比你會測試》的官方範例程式碼倉庫 (Repository)。

## 📖 關於本專案

這本書不只教你測試理論，更強調實戰應用。為了不佔用書本篇幅，書中提到的 **AI Prompt (提示詞)**、**自動化腳本**、**測試資料集** 以及 **完整專案結構**，都完整收錄在這裡。
這裡提供的不是書上的「截圖」，而是真正可以執行、可以跑出結果的程式碼。

## 📂 專案結構 (Menu)

資料夾結構完全對應書籍章節，方便您一邊閱讀一邊對照：

```text
Grandma-Tests-Everything/
├── .gitignore                  # 忽略不必要的檔案 (如 __pycache__, node_modules)
├── README.md                   # 專案首頁說明 (阿嬤的歡迎詞)
├── LICENSE                     # 授權條款 (建議 MIT License)
├── requirements.txt            # Python 套件依賴清單 (給 Python 範例用)
├── package.json                # Node.js 套件依賴清單 (給 Playwright/JS 範例用)
│
├── 📂 Part1_Mindset/           # Part 1: 生活智慧與測試思維 (Ch1-Ch8)
│   ├── 📂 Ch01_Strategy/       # Ch1 測試策略
│   ├── 📂 Ch02_TestCase/       # Ch2 測試案例與 Gherkin
│   ├── 📂 Ch03_Analysis/       # Ch3 測試分析 (旅行水逆)
│   ├── 📂 Ch04_Equivalence/    # Ch4 等價類劃分 (洗衣機)
│   ├── 📂 Ch05_Boundary/       # Ch5 邊界值分析 (騎腳踏車)
│   ├── 📂 Ch06_DecisionTable/  # Ch6 決策表 (信用卡優惠)
│   ├── 📂 Ch07_ErrorGuessing/  # Ch7 錯誤推測 (第六感)
│   └── 📂 Ch08_CauseEffect/    # Ch8 因果圖 (邏輯推理)
│
├── 📂 Part2_Advanced/          # Part 2: 進階分析與設計 (Ch9-Ch14)
│   ├── 📂 Ch09_State/          # Ch9 狀態轉換 (情緒化球員)
│   ├── 📂 Ch10_ACC_Model/      # Ch10 ACC 模型 (特質/元件/能力)
│   ├── 📂 Ch11_Pairwise/       # Ch11 組合測試 (穿搭術)
│   ├── 📂 Ch12_FIT_Model/      # Ch12 FIT 模型 (故障/互動)
│   ├── 📂 Ch13_UseCase/        # Ch13 使用案例測試
│   └── 📂 Ch14_SoapOpera/      # Ch14 肥皂劇測試 (艾蜜莉劇本)
│
├── 📂 Part3_Automation/        # Part 3: 自動化與策略 (Ch15-Ch25)
│   ├── 📂 Ch15_ROI/            # Ch15 自動化 ROI 計算
│   ├── 📂 Ch16_OnePagePlan/    # Ch16 一頁式測試計畫
│   ├── 📂 Ch17_Pyramid/        # Ch17 測試金字塔 (單元測試實作)
│   ├── 📂 Ch18_Mocking/        # Ch18 Mocking 替身術 (素三牲)
│   ├── 📂 Ch19_DDT/            # Ch19 資料驅動測試 (包水餃)
│   ├── 📂 Ch20_POM/            # Ch20 Page Object Model (收納術)
│   ├── 📂 Ch21_TDM/            # Ch21 測試資料管理 (冰箱學)
│   ├── 📂 Ch22_BDD/            # Ch22 行為驅動開發 (講古)
│   ├── 📂 Ch23_Performance/    # Ch23 效能測試 (圍爐大餐)
│   ├── 📂 Ch24_Chaos/          # Ch24 混沌工程 (防颱演習)
│   └── 📂 Ch25_Strategy/       # Ch25 自動化策略總結
│
└── 📂 Resources/               # 共用資源
    ├── 📂 images/              # 書中使用的圖表原檔 (Mermaid/PNG)
    └── 📂 datasets/            # 跨章節共用的測試資料 (如 User Data)
```

## 🚀 快速開始 (Quick Start)
想要在自己的電腦上重現阿嬤的測試成果嗎？請依照以下步驟：

1. 準備工具 (Prerequisites)
   請確保你的電腦已安裝以下工具：

* Python 3.9+
* Node.js 16+ (用於 Playwright 與 K6)
* Git

2. 下載專案 (Clone)
``` Bash
git clone [https://github.com/vansleee/ithome-qa-engineer-fullstack-guide.git](https://github.com/vansleee/ithome-qa-engineer-fullstack-guide.git)
cd ithome-qa-engineer-fullstack-guide
```
3. 安裝依賴 (Install Dependencies)
   Python 環境:
```Bash
pip install -r requirements.txt
```
Node.js 環境 (用於 Playwright, k6):

```Bash
npm install
```

## 🤖 關於 AI 提示詞 (Prompts)
在每個章節資料夾中，你會找到 prompt_*.md 檔案。 這些是書中使用的原始提示詞，你可以直接複製貼上到 ChatGPT、Claude 或 Gemini，體驗與 AI 協同工作的樂趣。
> 💡 阿嬤的小撇步： 「AI 吐出來的東西有時候會『臭灰搭』（不準確），記得要用書裡教的方法去檢查喔！」

## 🤝 貢獻與回饋
如果你發現程式碼有 Bug，或是想分享你用 AI 生成的更棒的測試 Prompt，歡迎提交 Pull Request 或 Issue。

## 📄 授權 (License)
本專案採用 MIT License。這意味著你可以自由地使用、修改這些程式碼，甚至用在你的公司專案中（阿嬤說：有好東西要跟大家分享）。