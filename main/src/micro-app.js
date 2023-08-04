const microApps = [
    {
        name: 'sub-vue',
        entry: '//localhost:7777/',
        activeRule: '/sub-vue',
        container: '#container', // 子应用挂载的div
        props: {
            routerBase: '/sub-vue' // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
        }
    },
    {
        name: 'sub-vue-ts',
        entry: '//localhost:8090/',
        activeRule: '/sub-vue-ts',
        container: '#container', // 子应用挂载的div
        props: {
            routerBase: '/sub-vue-ts' // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
        }
    },
    {
        name: 'sub-react',
        entry: '//localhost:7788',
        activeRule: '/sub-react',
        container: '#container',
        props: {
            routerBase: '/sub-react' // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
        }
    },
    {
        name: 'sub-react-ts',
        entry: '//localhost:3000',
        activeRule: '/sub-react-ts',
        container: '#container',
        props: {
            routerBase: '/sub-react-ts' // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
        }
    },
]

export default microApps
