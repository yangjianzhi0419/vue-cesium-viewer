import Viewer from "./viewer";

const components = {Viewer}

const install = Vue => {
    // 判断组件是否安装，如果已经安装了就不在安装。
    if (install.installed) return
    install.installed = true
    // 遍历的方式注册所有的组件
    for (let key in components) {
        Vue.use(components[key])
    }
}

export {
    Viewer
}

export default {
    install
}
