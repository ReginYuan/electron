# v2024

向后盾人学习技术练习代码

# 将修改 git 全局配置文件，让 GitHub 和 gitee 同时可以个更新代码 文件 .git/config

```git
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
