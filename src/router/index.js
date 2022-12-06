import {
    createRouter,
    createWebHashHistory,
} from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/huaweiYun',
        name: '华为云',
        meta: {
            link: 'https://is5-ssl.mzstatic.com/image/thumb/Purple122/v4/7e/80/a5/7e80a571-642b-f96e-c4c4-9caf51350981/AppIcon-0-0-1x_U007emarketing-0-0-0-2-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png'
        },
        component: () => import('@/views/huaweiYun.vue') //
    },
    {
        path: '/wallet',
        name: '华为钱包',
        meta: {
            link: 'https://is2-ssl.mzstatic.com/image/thumb/Purple122/v4/19/44/9f/19449fab-c29b-7af5-4c80-4216e4aecfdb/AppIcon-1x_U007emarketing-0-7-0-0-85-220.png/246x0w.png'
        },
        component: () => import('@/views/wallet.vue') //
    },
    {
        path: '/ygWeb',
        name: '央广网',
        meta: {
            link: 'https://is3-ssl.mzstatic.com/image/thumb/Purple122/v4/70/c9/a9/70c9a907-9971-cd83-c9b9-91a746e14300/AppIcon-0-0-1x_U007emarketing-0-0-0-4-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png'
        },
        component: () => import('@/views/ygWeb.vue') //
    },
    {
        path: '/zhdx',
        name: '智慧党校',
        meta: {
            link: 'https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/cf/4b/9b/cf4b9ba3-8b64-219e-656b-d62cec97bd75/AppIcon-0-1x_U007emarketing-0-0-85-220-0-6.jpeg/246x0w.jpg'
        },
        component: () => import('@/views/zhdx.vue') //
    },
    {
        path: '/rmrb',
        name: '人民日报',
        meta: {
            link: 'https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/90/18/52/90185204-197e-ffb8-7dea-50139b588806/AppIcon-1x_U007emarketing-0-5-0-0-85-220.png/246x0w.png'
        },
        component: () => import('@/views/rmrb.vue') //
    },
    {
        path: '/xxqg',
        name: '学习强国',
        meta: {
            link: 'https://is5-ssl.mzstatic.com/image/thumb/Purple112/v4/dc/dc/c2/dcdcc258-e258-34ac-f81f-e1a8c15c54f6/StudyAppIcon-1x_U007emarketing-0-6-0-0-85-220.png/246x0w.png'
        },
        component: () => import('@/views/xxqg.vue') //
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
    // to将要访问的路径
    // from代表从哪个路径跳转而来
    // next是一个函数，表示放行
    // next() 放行 next('/login) 强制跳转
    document.title = to.name
    //网页图标更换
    let head = document.getElementsByTagName('head')[0];
    //删除之前的图标
    head.removeChild(document.getElementsByTagName('link')[0])

    let linkTag = document.createElement('link');
    linkTag.setAttribute("rel", "apple-touch-icon")
    linkTag.href = to.meta.link;
    head.appendChild(linkTag)
    console.log(to.meta.link)
    console.log(head)
    next()
})
export default router
