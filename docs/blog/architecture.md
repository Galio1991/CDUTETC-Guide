---
title: 技术架构
order: 1
description: 项目技术栈与架构设计
---

# 技术架构

## 技术栈

| 类别 | 技术 | 说明 |
|------|------|------|
| 框架 | VitePress 1.x | 基于 Vite + Vue 3 的静态网站生成器 |
| 托管 | GitHub Pages | 免费静态托管，自动 HTTPS |
| 包管理 | pnpm | 快速、严格的依赖管理 |
| CI/CD | GitHub Actions | 自动构建部署 |
| 代码质量 | Prettier + markdownlint | 格式化与规范检查 |

## 项目结构

```
CDUTETC-Guide/
├── .github/workflows/     # CI/CD 工作流
├── docs/
│   ├── .vitepress/        # VitePress 配置
│   │   ├── config.ts      # 主配置
│   │   ├── utils/sidebar.ts # 侧边栏自动生成
│   │   └── theme/         # 主题定制
│   ├── index.md           # 首页
│   ├── survival/          # 生存指南
│   ├── leap/              # 飞跃手册
│   ├── blog/              # 技术文档
│   ├── contribute.md      # 投稿指南
│   └── templates/         # 投稿模板
├── package.json
└── .prettierrc.yaml
```

## 设计风格

采用**简约 + 构成主义**设计风格：

- 主色深蓝 `#1a237e`，强调色红 `#d32f2f`
- 几何装饰元素作为点缀
- 支持暗色模式
- 移动端优先的响应式设计

## 侧边栏自动生成

侧边栏通过扫描目录结构自动生成，无需手动维护配置：

- 每个子目录放置 `_category.md` 定义分类元信息
- 内容文件通过 frontmatter 的 `order` 字段控制排序
- 添加新文件即自动出现在侧边栏

详见 `docs/.vitepress/utils/sidebar.ts`。
