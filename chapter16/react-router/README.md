
## 启动步骤

* 1、npm install

* 2、构建命令 <br />
&emsp;&emsp;npm start &emsp;&emsp;然后在浏览器中输入:localhost:8080 <br />
&emsp;&emsp;npm run prod  //生产环境构建包

* **

### 基于《webpack构建React应用》对webpack构建包**更改**的地方如下

* [《webpack构建React应用》](../../chapter14/webpack)

* 1、删除bower前端管理包相关(bower.json)

* 2、npm install --save-dev react &emsp;//(react-router依赖)

* 3、npm install --save-dev react-dom &emsp;//(因react和react-dom已分离)

* 4、npm install --save-dev react-router &emsp;//(react-router路由)

* 5、webpack构建包修改，因为es6编码格式，需要安装相应编译器
    * a、npm install --save-dev babel-preset-es2015 &emsp;//(编译es6)
    * b、修改babel编译的.babelr文件；&emsp;{ "presets": ['es2015', 'react'] }

* **
## 更多学习参考

* [本人写的另外的demo](https://github.com/mqy1023/react-basejs/tree/master/src/demo6)

* [《React Router 使用教程》](http://www.ruanyifeng.com/blog/2016/05/react_router.html)

* [《react-router-tutorial》](https://github.com/reactjs/react-router-tutorial/tree/master/lessons)

