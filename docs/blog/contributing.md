---
title: 贡献指南
order: 3
description: 如何参与项目贡献
---

# 贡献指南

## 方式一：Fork + PR（推荐）

1. 点击仓库右上角 **Fork** 按钮，将仓库复制到你的账号下
2. 在你的 Fork 中修改内容
3. 提交 Pull Request 到原仓库的 `main` 分支
4. 等待审核合并后自动部署

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

## 内容审核

所有内容提交后会经过审核：

- 技术正确性
- 格式规范性
- 内容适当性

审核通过后会合并到主分支并自动部署。
