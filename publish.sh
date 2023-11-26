#!/bin/bash
#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e

# 定义错误处理函数
handle_error() {
  git checkout $source_branch
  rm -rf dist
  git branch -d stage_2
 echo "脚本发生错误,已回退 $source_branch 分支。"

}

# 设置错误处理函数
trap handle_error ERR

# 检出临时分支
git checkout -b stage_2
# # 生成静态文件
npm run build 
# 设置源分支和目标分支
source_branch="master"
target_branch="develop"
# 设置变量
source_dir="dist" # VuePress打包后的目录

# 删除除了gitignore和dist文件夹之外所有文件
find . ! -path "./.github/*" ! -path "./.git/*" ! -path "./dist/*" ! -path "./node_modules/*" ! -name ".gitignore" ! -name "publish.sh" ! -name "publish.cjs" -type f -delete
# 复制dist文件夹内所有文件 到当前目录
cp -R dist/* .
# 添加所有文件到Git暂存区

# cd $source_dir
git add  -A -f
# 提交到本地仓库
git commit -m "Add package from $source_dir"

# 切换到模板分支 develop
git checkout $target_branch

git merge --no-ff --no-commit stage_2


# 推送到远程仓库
git push -f https://gitee.com/magicBegin/vuepress-blog.git develop
git branch -d stage_2

# 打印操作完成信息
# echo "Pushed to $target_branch successfully"
echo "打包目录已成功提交到 $target_branch 分支"

# 切换到代码分支master 执行后续自动部署
git checkout $source_branch