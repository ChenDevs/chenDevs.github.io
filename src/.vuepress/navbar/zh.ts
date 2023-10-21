import { navbar } from 'vuepress-theme-hope'
// https://cn.vitejs.dev/guide/features.html#glob-import
import fs from 'fs'
import path from 'path'

// 读取内容目录中的文件列表
const contentDir = path.resolve(__dirname, '../../posts')

function readDir(dir: string, depth: number): any {
  const files = fs.readdirSync(dir) // 读取文件夹中的所有内容
  const folderName = path.basename(dir)
  const folderItem = {
    text: dir,
    prefix: `${folderName}`,
    icon: 'pen-to-square',
    depth,
    children: []
  }
  if (depth === 0) {
    folderItem.text = '博文'
    folderItem.prefix = '/' + folderItem.prefix + '/'
  }
  files.forEach(file => {
    const filePath = path.join(dir, file) // 获取文件的完整路径
    const stat = fs.statSync(filePath) // 判断文件是否是一个文件夹
    depth++
    if (stat.isDirectory()) {
      const item: any = readDir(filePath, depth)
      item.prefix += '/'
      item.depth = depth
      const fileName = file.split('/')
      item.text = fileName[fileName.length - 1]
      folderItem.children.push(item) // 递归处理子文件夹 // 如果是一个文件夹，继续递归遍历子文件夹
    } else {
      const fileName = file.replace('.md', '')
      const fileItem = {
        text: fileName,
        link: fileName + '.html',
        depth: folderItem.depth + 1
      }
      folderItem.children.push(fileItem)
    }
  })
  return folderItem
}
const routes = readDir(contentDir, 0)
console.log(['route', JSON.stringify(routes)])
export const zhNavbar = navbar(['/zh/', routes])
