<template>
  <input type="text" :value="currentValue" @input="handleInput">
</template>
<script>
  export default {
    
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