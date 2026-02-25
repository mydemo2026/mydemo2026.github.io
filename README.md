# mydemo2026.github.io

极简风格工业零件外贸企业官网，含首页、产品目录、联系表单。HTML + Tailwind CSS。

## 本地开发

```bash
make install   # 安装依赖
make build     # 构建 CSS（产出 css/style.css）
make watch     # 监听文件变化并自动构建
```

浏览器打开 `index.html` 或使用任意本地静态服务查看。

## 使用 Docker 构建（无需本地安装 Node）

```bash
make docker-image   # 构建镜像 industrial-parts-builder（仅需一次或依赖变更后）
make docker-build   # 在容器内执行 npm install + build，产出写入当前目录
```

构建完成后，`css/style.css` 与 `node_modules/` 会出现在项目目录中。

## 构建与部署

```bash
make all       # install + build
make clean     # 删除 node_modules 与构建产物
```

- **通过 GitHub Actions 部署**：推送 `main` 分支后，工作流会自动构建并部署到 GitHub Pages。请在仓库 **Settings → Pages** 中将 “Build and deployment” 来源选为 **GitHub Actions**。
- **本地构建后推送**：运行 `make build` 后提交并推送，若 Pages 来源为 “Deploy from a branch”，则需将 `css/style.css` 一并提交。

## 目录说明

- `index.html` — 首页
- `products.html` — 产品目录
- `contact.html` — 联系表单
- `src/input.css` — Tailwind 源码
- `css/style.css` — 构建生成的样式（由 `make build` 或 CI 生成）
