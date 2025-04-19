# Base Image
FROM node:20

# 設定工作目錄
WORKDIR /app

# 複製後端
COPY app/server ./server
WORKDIR /app/server
RUN npm install

# 複製前端
WORKDIR /app
COPY app/client ./client
WORKDIR /app/client
RUN npm install && npm run build

# 最終啟動後端
WORKDIR /app/server
CMD ["node", "index.js"]