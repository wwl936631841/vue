import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'
import ElementUI from 'element-ui'

// 注册全局组件
import NvInput from '../package/input'
Vue.component('nv-input', NvInput)

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