import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import index from '../package/index'

// 自定义指令
import directive from '../src/directive/foucs'

import unfetch from './unfetch'

// 测试scrollview
import ScrollView from 'vue-scrollview'
// import { $scrollview } from 'vue-scrollview'
Vue.use(ScrollView)
Vue.component(ScrollView)
// 引入mock.js
require('./assets/mock');

// 全局声明ajax库
window.unfetch = unfetch

// 在vue的原型链上注入fetch库，用法 this.$fetch
Vue.prototype.$unfetch = unfetch

// 注册全局组件
// import NvInput from '../package/input'
// Vue.component('nv-input', NvInput)

Vue.use(ElementUI)

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

// 非父子组件通信
const bus = new Vue()
Vue.prototype.$bus = bus

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')