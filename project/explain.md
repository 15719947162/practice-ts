运行命令是gulp

持续更新、热部署使用插件Watchify，它能在后台持续编译

typescript，gulp和gulp-typescript这三种依赖是基础依赖

browserify tsify和vinyl-source-stream，其中tsify是Browserify的一个插件，就像gulp-typescript一样，它能够访问TypeScript编译器。 vinyl-source-stream会将Browserify的输出文件适配成gulp能够解析的格式，它叫做 vinyl。