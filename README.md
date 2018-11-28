# SpringBoot with Ng-Alain using JWT

SpringBoot与Ng-Alain集成，使用JWT作为TOKEN

### [Ng-Alain](https://ng-alain.com/zh)

一个基于 [Antd](https://ant.design/index-cn) 中后台前端解决方案，提供更多通用性业务模块，让开发者更加专注于业务。

在Ng-Alain的[用户认证](https://ng-alain.com/auth/getting-started/zh)模块中，我们使用JWT作为Token

### [JWT: JSON Web Token](https://blog.csdn.net/kangkanglou/article/details/78669688)

JSON Web Token(JWT)是一种基于RFC7519的开放标准，它定义了一种紧凑且独立的方式用以安全地在各个对象之间以JSON对象传递信息的方式。JWT可以使用HMAC算法或使用RSA公私钥来进行数字签名。

- 紧凑：信息非常小，可通过URL，Post参数，Header参数来传递

- 独立：包含了用户的所有相关信息，避免了额外的数据库查询开销

### 构建与发布

- 使用`ng build`[打包](https://ng-alain.com/docs/deploy/zh)Ng-Alain应用


- 之后，执行`mvn clean install`命令将dist包中的文件拷贝值`resources\public`
目录下

### 启动SpringBoot应用，访问localhost:8090端口
