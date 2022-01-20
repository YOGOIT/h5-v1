import Vue from 'vue'
import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '首页'
    },
    component: () => import('../views/index/index.vue'),

  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '快捷登录/注册',
    },
    component: () => import('../views/auth/login.vue'),

  },
  {
    path: '/login-password',
    name: 'LoginPassword',
    meta: {
      title: '密码登录'
    },
    component: () => import('../views/auth/login-password.vue'),

  },
  {
    path: '/search',
    name: 'Search',
    meta: {
      title: '搜索'
    },
    component: () => import('../views/search/index.vue'),

  },
  {
    path: '/vod',
    name: 'Vod',
    meta: {
      title: '录播课程'
    },
    component: () => import('../views/vod/index.vue'),

  },
  {
    path: '/role',
    name: 'Role',
    meta: {
      title: 'VIP会员',
      auth: true,
    },
    component: () => import('../views/role/index.vue'),

  },
  {
    path: '/order',
    name: 'Order',
    meta: {
      title: '收银台',
      auth: true,
    },
    component: () => import('../views/order/index.vue'),

  },
  {
    path: '/order/pay',
    name: 'OrderPay',
    meta: {
      title: "支付中",
      auth: true,
    },
    component: () => import('../views/order/pay.vue'),

  },
  {
    path: '/order/success',
    name: 'OrderSuccess',
    meta: {
      title: "支付成功",
      auth: true,
    },
    component: () => import('../views/order/success.vue'),

  },
  {
    path: '/messages',
    name: 'Messages',
    meta: {
      title: '我的消息',
      auth: true,
    },
    component: () => import('../views/messages/index.vue'),

  },
  {
    path: '/zhengshus',
    name: 'Zhengshus',
    meta: {
      title: '我的证书',
      auth: true,
    },
    component: () => import('../views/member/zhengshu.vue'),

  },
  {
    path: '/vod/detail',
    name: 'VodDetail',
    meta: {
      title: '课程详情'
    },
    component: () => import('../views/vod/detail.vue'),

  },
  {
    path: '/vod/video',
    name: 'VodVideo',
    meta: {
      title: '视频播放',
      auth: true,
    },
    component: () => import('../views/vod/play.vue'),

  },
  {
    path: '/study',
    name: 'Study',
    meta: {
      title: '我的课程',
    },
    component: () => import('../views/study/index.vue'),

  },
  {
    path: '/member',
    name: 'Me',
    meta: {
      title: '会员中心',
    },
    component: () => import('../views/member/index.vue'),

  },
  {
    path: '/member/order',
    name: 'MemberOrder',
    meta: {
      title: '我的订单',
      auth: true,
    },
    component: () => import('../views/member/order.vue'),

  },
  {
    path: '/member/setting',
    name: 'MemberSetting',
    meta: {
      title: '设置'
    },
    component: () => import('../views/member/setting.vue'),

  },
  {
    path: '/member/profile',
    name: 'MemberProfile',
    meta: {
      title: '个人资料',
      auth: true,
    },
    component: () => import('../views/member/profile.vue'),

  },
  {
    path: '/member/promocode',
    name: 'MemberPromoCode',
    meta: {
      title: '我的邀请码',
      auth: true,
    },
    component: () => import('../views/member/promocode.vue'),

  },

]

const router = new VueRouter({
  routes
})

export default router