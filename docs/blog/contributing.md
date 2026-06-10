---
title: 贡献指南
order: 3
description: 如何参与项目贡献
---

# 贡献指南

## 方式一：Fork + PR（推荐）

### 1. Fork 仓库

点击仓库右上角 **Fork** 按钮，将仓库复制到你的账号下。

### 2. 克隆你的 Fork

```bash
git clone https://github.com/你的用户名/CDUTETC-Guide.git
cd CDUTETC-Guide
```

### 3. 添加上游仓库

```bash
git remote add upstream https://github.com/cdutetc-tieba/CDUTETC-Guide.git
```

### 4. 创建分支并修改

```bash
git checkout -b feature/你的功能
# 修改内容...
```

### 5. 提交前检查

```bash
pnpm format    # 格式化
pnpm lint      # 检查规范
pnpm docs:build  # 验证构建
```

### 6. 提交并推送

```bash
git add .
git commit -m "描述你的修改"
git push origin feature/你的功能
```

### 7. 提交 Pull Request

在 GitHub 上创建 PR，等待审核合并。

## 方式二：直接提交

如果你已被添加为仓库协作者，可以直接克隆仓库并推送：

```bash
git clone https://github.com/cdutetc-tieba/CDUTETC-Guide.git
# 修改内容后
git add .
git commit -m "描述你的修改"
git push origin main
```

## 文件规范

- 文件名使用英文短横线命名（kebab-case）
- 每个 Markdown 文件必须包含 frontmatter
- 使用 `pnpm format` 格式化后再提交
- 代码块需指定语言（如 ` ```bash `、` ```text `）

## 常见 CI 问题

### Prettier 格式检查失败

运行 `pnpm format` 自动修复。

### Markdownlint 规范检查失败

运行 `pnpm lint:fix` 自动修复，或查看错误提示手动修改。

### 构建失败

运行 `pnpm docs:build` 查看具体错误信息。

## 内容审核

所有内容提交后会经过审核：

- 技术正确性
- 格式规范性
- 内容适当性

审核通过后会合并到主分支并自动部署。
