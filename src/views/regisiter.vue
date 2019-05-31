<template>
  <div>
    regisiter
    <p>{{number}}</p>
    <p>{{num}}</p>
    <span @click="add">增加number</span>
    <p @click="dele">减少number</p>
  </div>
</template>
<script>
import { mapState , mapGetters , mapMutations , mapActions } from 'vuex'
  export default{
    data(){
      return{

      }
    },
    computed:{
      ...mapState({
        number:state=>state.number
      }),
      // 获取
      ...mapGetters({
        num:'getNum'
      }),
      
    },
    methods: {
      ...mapMutations({
        add:'addNum'
      }),
      ...mapActions({
        dele:'addNumShow'
      }),
      dele:''
    },
    created() {
      console.log(this.$store.state.number)
    },
    mounted() {
      this.$store.dispatch('addNumShow')
    },
  }
</script>
