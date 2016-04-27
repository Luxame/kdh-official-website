# kdh-official-website

## 開發環境

- Node.js
- Git

## 專案設定
- 在 `專案/config` 裡面增加 `mail.js` 檔案，可以複製 `mail.default.js` 檔案內容
- 把網址映射到 `localhost:9001` 設定範例
```
server {
        server_name preview.kdhservice.com alpha.kdhservice.com www.kdhservice.com kdhservice.com jarvish.com www.jarvish.com;
        location / {
                proxy_pass http://localhost:9001;
        }
}
```

## 執行步驟

#### Linux :

- 安裝 [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- 安裝 [NVM](https://github.com/creationix/nvm)
- 安裝 Node.js (4.x latest)
```
nvm install v4.X
```
- 安裝完 Node.js 後，使用 git 下載或是下載專案 ZIP 檔
- 在專案目錄下，下 `npm i` 指令來安裝需要的套件
- 以上步驟完成後下 `npm start` 來啟動執行專案
- 使用瀏覽器查看，在網址列打上 `http://localhost:9001/`

#### Mac :

- 安裝 [Homebrew](http://brew.sh/)
- 安裝 Git：Xode 內建已有 Git
- 安裝 NVM：可以使用 `brew install nvm` 安裝，其他相關設定可以查詢 [nvm](https://github.com/creationix/nvm)
- 安裝 Node.js (4.x latest)
```
nvm install v4.X
```
- 安裝完 Node.js 後，使用 git 下載或是下載專案 ZIP 檔
- 在專案目錄下，下 `npm i` 指令來安裝需要的套件
- 以上步驟完成後下 `npm start` 來啟動執行專案
- 使用瀏覽器查看，在網址列打上 `http://localhost:9001/`

#### Windows :

- 安裝 [Node.js](https://nodejs.org/en/)
- 安裝 [Git](https://git-scm.com/downloads)
- git clone 專案或是下載專案 ZIP檔
- 在專案目錄下，下 `npm i` 安裝程式所需套件
- 以上步驟完成後下 `npm start` 來啟動執行專案
- 使用瀏覽器查看，在網址列打上 `http://localhost:9001/`
