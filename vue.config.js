const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
//别名设置
const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtorem({
                        rootValue: 37.5,
                        propList: ['*'],
                        selectorBlackList: ['van-circle__layer']
                    })
                ]
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src"))
            .set("assets", resolve("src/assets"))
            .set("components", resolve("src/components"))
            .set("views", resolve("src/views"))
        // .set("base", resolve("baseConfig"))
        // .set("public", resolve("public"));
    },
};