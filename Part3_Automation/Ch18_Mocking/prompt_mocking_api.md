我正在使用 Playwright。請幫我寫一段page.route() 程式碼，用來 Mock
GET /api/products/123 的請求。 
* 如果請求成功，回傳 200 OK，JSON body 為 { "id": 123, "name": "阿嬤的菜刀" }。 
* 如果請求失敗（例如 404），則讓請求 route.abort()。