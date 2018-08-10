# scss 报错问题

## 实列
```html
<style lang="scss" scoped>
@import './style.scss';
</style>
```

如果上面报以下错误
![](./images/1.scss.png)

解决办法：
删除
node_modules package-lock.json 然后重新安装依赖

即

npm install
