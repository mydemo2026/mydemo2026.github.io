FROM node:20-alpine

WORKDIR /app

# 仅复制依赖描述，便于在 Docker 内单独构建时使用
COPY package*.json ./
RUN npm ci 2>/dev/null || npm install

COPY . .

# 默认命令：在挂载目录下执行完整安装与构建（见 Makefile docker-build）
CMD ["sh", "-c", "npm ci 2>/dev/null || npm install && npm run build"]
