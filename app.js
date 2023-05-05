//初始化git:git init
//查看git文件状态:git status
//把文件工作区提交到暂存区:git add 文件名 或者 git add .
//把文件从暂存区提交到git本地仓库:git commit -m '提交信息'
//查看提交记录:git log
//把文件从暂存区覆盖到工作区:git checkout 文件名
//把文件从暂存区删除:git rm --cached 文件名
//把文件从仓库中恢复且覆盖到暂存区和工作区:git reset head 文件名
//查看分支:git branch
//创建分支:git branch 分支名
//切换分支:git checkout 要切换的分支名
//合并分支:git merge 要合并分支名
//删除分支:git branch -d 要删除分支名 (分支被合并后才允许删除)(-D 强制删除)

//git的三个分区:工作区、暂存区、本地git仓库
//git的三个状态:已提交(committed)、已修改(modified)、已缓存(staged)

//git恢复到指定版本
//git checkout [版本哈希值]

//临时保存分支:git stash  分支名
//回复改动:git stash pop

//git提交远程仓库
//创建远程仓库别名:git remote add 别名 远程git仓库地址
//提交:git push -u 别名 分支名

//使用ssh登录
//1、创建公共key：ssh-keygen

//git拉取远程仓库:git pull 远程git仓库地址

//克隆远程仓库:git clone 远程git仓库地址