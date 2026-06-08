import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

interface SidebarItem {
  text: string
  link?: string
  items?: SidebarItem[]
  collapsed?: boolean
}

interface CategoryMeta {
  title: string
  order: number
  collapsed: boolean
}

interface OrderedItem {
  order: number
  item: SidebarItem
}

function getCategoryMeta(dirPath: string): CategoryMeta {
  const categoryFile = path.join(dirPath, '_category.md')
  const defaults: CategoryMeta = {
    title: path.basename(dirPath),
    order: 99,
    collapsed: true
  }

  if (!fs.existsSync(categoryFile)) {
    return defaults
  }

  const content = fs.readFileSync(categoryFile, 'utf-8')
  const { data } = matter(content)

  return {
    title: data.title || defaults.title,
    order: data.order ?? defaults.order,
    collapsed: data.collapsed ?? defaults.collapsed
  }
}

function getSidebarItems(dirPath: string, basePath: string): SidebarItem[] {
  const entries = fs.readdirSync(dirPath)
  const items: OrderedItem[] = []

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry)
    const stat = fs.statSync(fullPath)

    if (stat.isFile() && entry.endsWith('.md') && entry !== '_category.md' && entry !== 'index.md') {
      const content = fs.readFileSync(fullPath, 'utf-8')
      const { data } = matter(content)
      const name = entry.replace(/\.md$/, '')

      items.push({
        order: data.order ?? 99,
        item: {
          text: data.title || name,
          link: path.join(basePath, name)
        }
      })
    } else if (stat.isDirectory()) {
      const meta = getCategoryMeta(fullPath)
      const subBasePath = path.join(basePath, entry)
      const children = getSidebarItems(fullPath, subBasePath)

      if (children.length > 0) {
        const hasIndex = fs.existsSync(path.join(fullPath, 'index.md'))
        items.push({
          order: meta.order,
          item: {
            text: meta.title,
            link: hasIndex ? path.join(subBasePath, 'index') : undefined,
            collapsed: meta.collapsed,
            items: children
          }
        })
      }
    }
  }

  items.sort((a, b) => a.order - b.order || a.item.text!.localeCompare(b.item.text!))
  return items.map(i => i.item)
}

export function getSidebar(dirPath: string): SidebarItem[] {
  const fullDirPath = path.resolve(dirPath)
  const basePath = '/' + path.basename(dirPath)
  return getSidebarItems(fullDirPath, basePath)
}
