<template>
  <div>
    menu2
    <NvInput v-model="name" @input="handleInput"></NvInput>
  </div>
</template>
<script>
import NvInput from '../components/input2/input.vue'
export default {
  components:{NvInput},
  data(){
    return{
      name:''
    }
  },
  methods:{
    handleInput(name){
      console.log(name)
    }
  }
};
</script>