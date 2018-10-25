<template>
   
      <input type="text" v-model="text" :value="currentValue" @input="handle">
        
</template>
<script>
export default {
  props: ['value'], // 接收一个 value prop
  computed: {
    text: {
      get: function() {
        return this.value;
      },
      set: function(val) {
        this.$emit("input", val);// 利用 $emit 触发 input 事件
      }
    },
  },
};
</script>