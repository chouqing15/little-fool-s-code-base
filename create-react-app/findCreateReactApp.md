# 存在create-react-app 却在npm中找不到
使用 `npm uninstall -g create-react-app` 时找不到 `create-react-app` ，使用 `npm list -g --depth 0` 查找全局模块也没有
解决办法如下：
- 使用 `sudo find / -type d -name <文件名>` 我这里是create-react-app
！[image text](../static/find_file.png)
- 找到了文件的位置`open <路径>`, 发现在nvm管理中的另一个node版本里面。
- `nvm use <版本号>`, 进入指定node版本在执行`npm uninstall -g create-react-app`

以为完事大吉了,执行`create-react-app` 还在 ....

继续通过上述方式查找
结果发现同时有3个地方存在create-react-app,  2处是在已经删除了`yarn`的`cache`文件里面.
最后采用了暴力手动， `open <path>` 直接删除了文件加 . 
也可以使用`yarn cache clean` 清空缓存, `yarn cache dir` 查找路径
npm 则是 `npm cache clean -f` -f === --force
事情完美解决😂
done