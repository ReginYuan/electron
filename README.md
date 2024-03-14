# electron-practice 练手项目

electron学习练手代码,记录每个项目的成长

## 将修改 git 全局配置文件，让 GitHub 和 gitee 同时可以个更新代码 文件路径: .git/config

```javascript
[core]
repositoryformatversion = 0
filemode = false
bare = false
logallrefupdates = true
symlinks = false
ignorecase = true
[remote "origin"]
url = https://github.com/ReginYuan/v2024.git
fetch = +refs/heads/_:refs/remotes/origin/_
[remote "gitee"]
url = https://gitee.com/ReginYuan/v2024.git
fetch = +refs/heads/_:refs/remotes/origin/_
[branch "main"]
remote = origin
merge = refs/heads/main
```

## 将代码提交到两个远程仓库

```javascript
PS D:\Code\Electron\v2024> git  add .  //提交全部代码
PS D:\Code\Electron\v2024> git  commit -m 'feat: 修改代码'  //代码备注
[main 2694cf6] feat: 修改代码
 1 file changed, 1 insertion(+), 1 deletion(-)
PS D:\Code\Electron\v2024> git push origin main //提交github分支的命令
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 325 bytes | 325.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/ReginYuan/v2024.git
   6525394..2694cf6  main -> main
PS D:\Code\Electron\v2024> git push gitee main //提交gitee分支的命令
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 325 bytes | 325.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Powered by GITEE.COM [GNK-6.4]
To https://gitee.com/ReginYuan/v2024.git
   64af868..8547e06  main -> main
```
