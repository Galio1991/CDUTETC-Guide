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

function getCategoryMeta(dirPath: string): CategoryMeta {
  const categoryFile = path.join(dirPath, '_category.md')
  const defaults: CategoryMeta = {
    title: path.basename(dirPath),
    order: 99,
    collapsed: false
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

function getMdFiles(dirPath: string, basePath: string): SidebarItem[] {
  const files = fs.readdirSync(dirPath)
  const items: { order: number; item: SidebarItem }[] = []

  for (const file of files) {
    const fullPath = path.join(dirPath, file)
    const stat = fs.statSync(fullPath)

    if (
      stat.isFile() &&
      file.endsWith('.md') &&
      file !== '_category.md' &&
      file !== 'index.md'
    ) {
      const content = fs.readFileSync(fullPath, 'utf-8')
      const { data } = matter(content)
      const name = file.replace(/\.md$/, '')

      items.push({
        order: data.order ?? 99,
        item: {
          text: data.title || name,
          link: path.join(basePath, name)
        }
      })
    }
  }

  items.sort((a, b) => a.order - b.order || a.item.text!.localeCompare(b.item.text!))
  return items.map(i => i.item)
}

export function getSidebar(dirPath: string): SidebarItem[] {
  const fullDirPath = path.resolve(dirPath)
  const entries = fs.readdirSync(fullDirPath)
  const groups: { order: number; item: SidebarItem }[] = []

  for (const entry of entries) {
    const fullPath = path.join(fullDirPath, entry)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      const meta = getCategoryMeta(fullPath)
      const basePath = '/' + path.join(path.basename(dirPath), entry)
      const children = getMdFiles(fullPath, basePath)

      if (children.length > 0) {
        groups.push({
          order: meta.order,
          item: {
            text: meta.title,
            collapsed: meta.collapsed,
            items: children
          }
        })
      }
    }
  }

  groups.sort((a, b) => a.order - b.order)
  return groups.map(g => g.item)
}
