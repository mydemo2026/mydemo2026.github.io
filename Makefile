.PHONY: install build watch clean deploy docker-image docker-build

# 安装依赖
install:
	npm install

# 构建生产 CSS（Tailwind 压缩输出）
build:
	npm run build

# 开发时监听 CSS 变更
watch:
	npm run watch

# 产出站点目录 _site（供 CI 部署用）
site: build
	@mkdir -p _site
	@cp *.html _site/
	@cp -r css _site/

# 清理构建产物与依赖
clean:
	rm -rf node_modules css/style.css _site

# 完整构建（安装 + 构建），用于 CI 或发布前
all: install build

# 部署说明：构建后推送到 GitHub 即可由 GitHub Pages 发布
deploy: build
	@echo "已构建完成。请将当前分支推送到 GitHub 以触发 Pages 更新。"
	@echo "  git add . && git commit -m 'build' && git push"

# Docker：构建用于站点构建的镜像
docker-image:
	docker build -t industrial-parts-builder .

# Docker：在容器内执行安装依赖 + 构建，产出写入当前目录（无需本地安装 Node）
docker-build: docker-image
	docker run --rm -v "$$(pwd):/app" -w /app industrial-parts-builder
