import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import yuangong from '@/views/modules/yuangong/list'
    import xiangmuleixing from '@/views/modules/xiangmuleixing/list'
    import xingyeleixing from '@/views/modules/xingyeleixing/list'
    import xiangmushouyi from '@/views/modules/xiangmushouyi/list'
    import kehuxinxi from '@/views/modules/kehuxinxi/list'
    import xiangmuxinxi from '@/views/modules/xiangmuxinxi/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
          ,{
	path: '/yuangong',
        name: '员工',
        component: yuangong
      }
          ,{
	path: '/xiangmuleixing',
        name: '项目类型',
        component: xiangmuleixing
      }
          ,{
	path: '/xingyeleixing',
        name: '行业类型',
        component: xingyeleixing
      }
          ,{
	path: '/xiangmushouyi',
        name: '项目收益',
        component: xiangmushouyi
      }
          ,{
	path: '/kehuxinxi',
        name: '客户信息',
        component: kehuxinxi
      }
          ,{
	path: '/xiangmuxinxi',
        name: '项目信息',
        component: xiangmuxinxi
      }
        ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
