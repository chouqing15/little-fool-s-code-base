### git删除远程分支
  git push origin --delete `branch-name`
### 删除本地分支
  git branch -d <branch_name> `-D 删除当前正在使用的分支  -d 删除除当前分支以外的分支`
### 恢复已删除的分支
  git branch <branch_name> <hash_val>
### 查看日志
  git reflog
### 查看分支
  git branch -a  `-a代表查看远程分支`
### 查看某人的提交记录
git log --author=username  `username - 某人的名字`

### reset版本
git reset hard <版本hash> 

## ssh 
  生成ssh `ssh-keygen` 带有文件名`.pub` 是公钥， 另一个是私钥 ，私钥是要秘密保存的