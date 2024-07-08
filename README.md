# Picture Search Website Side Project

# 作品說明
這是一個圖片搜尋網，使用者可以在搜尋欄位輸入想要的圖片，按下Search後顯示在下方。點選Download picture即可開啟分頁下載圖片。點選More picture可以看到更多同類型圖片顯示在網頁下方。

## 功能
* 上方欄為Nav bar
* About website - 此網站開發所用到的工具和軟體。
* 首頁欄search input可以搜尋到免費授權的圖片。
* 首頁欄最下方More picture可以找到更多相關圖片。
* Download Picture 點選後另開分頁放大圖片，可點選右鍵下載圖片。

## 畫面
![PictureSearch1](https://i.ibb.co/9pX7bRw/Picture-Search4.png)
![PictureSearch2](https://i.ibb.co/dWM2T8L/Picture-Search5.png)

## 安裝
Node.js 版本建議為: v20.12.0 以上
React.js 版本建議為: v18.3.1 以上

### 安裝套件
npm install
react-router-dom@6.24.0
axios@1.7.2
dotenv@16.4.5

### 環境變數設定
請在終端機輸入 `cp .env.example .env` 來複製 .env.example 檔案，並依據 `.env` 內容調整相關欄位。

### 運行專案
Terminal cmd picsearch> node index.js

### 開啟專案
專案運行後，在瀏覽器輸入以下即可看到畫面
http://localhost:3000/

### 環境變數說明

```env
REACT_APP_PEXELS_API_KEY= #Pexels給予的用戶端密鑰
```

### 資料夾說明
- modules - 模組放置處
- public - 靜態資源(Bootstrap)連結放置處
- src - source放置處
  - component - 註腳、搜尋的圖片、搜尋欄、Layout
  - img - 圖片放置處
  - pages - React渲染頁面放置處
  - styles - css樣式放置處

### 專案技術
- Node.js v20.12.0
- Bootstrap v5.3.3

### 第三方服務
 - Pexels

## 聯絡作者
您可以透過以下的方式與我聯繫
我的Gmail信箱: uuya153@gmail.com
