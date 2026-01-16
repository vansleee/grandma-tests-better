# Playwright：Mock `GET /api/products/123`

以下示範使用 `page.route()` 來攔截並 Mock  
`GET /api/products/123` 的請求，依情境回傳成功或失敗。

---

## 成功情境：回傳 200 OK 與指定 JSON

```ts
await page.route('**/api/products/123', async route => {
  await route.fulfill({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify({
      id: 123,
      name: '阿嬤的菜刀'
    })
  });
});
```

## 失敗情境：請求失敗時中斷（模擬 404 / Network Error）
```ts
await page.route('**/api/products/123', async route => {
  await route.abort();
});
```

## 進階用法：依測試條件動態決定成功或失敗

```ts
const shouldFail = true; // 由測試情境控制

await page.route('**/api/products/123', async route => {
  if (shouldFail) {
    await route.abort();
  } else {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        id: 123,
        name: '阿嬤的菜刀'
      })
    });
  }
});
```