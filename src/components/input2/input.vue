<template>
  <input type="text" :value="currentValue" @input="handleInput">
</template>
<script>
  export default {
//     Vue页面引用
// 			
// 		import { getExampleData } from 'services'
// 		​
// 		beforeCreate() {
// 		    getExampleData({ name: 'xxx'} ).then(res => {
// 		        this.exampleData = res // 绑定到data里
// 		        consonle.log(res) // 这里返回的是你根据http.js拦截器中定义的返回数据
// 		    }).catch(err => console.log(err)) // 处理报错信息
// 		}
		
    data () {
      return {
        currentValue: this.value //不直接绑定prop，而是在data 或者 computed 里面根据prop初始化自己领域的值
      }
    },
    props: { 
      value: [String, Number] // key code 
    },
    methods: {
      handleInput() {
        const value = event.target.value
        this.currentValue = value
        this.$emit('input', value) // key code 
      }
    }
  }
</script>