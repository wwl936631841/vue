<template>
  <div>
    menu2
    <nv-input v-foucs v-model="name" @input="handleInput"></nv-input>
    <div class="top" @click="login">登陆</div>
    <p>{{num}}</p>
    <scroll-view>
      <template slot-scope="visible">
      <div>1234
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
      </div><div>1234
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
      </div><div>1234
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
      </div><div>1234
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
      </div><div>1234
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
      </div><div>1234
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
      </div><div>1234
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
      </div><div>1234
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
      </div><div>1234
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
      </div><div>1234
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
      </div><div>1234
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
      </div><div>1234
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
        <p>1234</p>
      </div>
      </template>
    </scroll-view>
  </div>
</template>
<script>
import NvInput from '../components/input2/input.vue'
import mixin from '../mixins/mixin.js'
import { mapState } from 'vuex'
export default {
  components:{NvInput},
  mixins:[mixin],
  data(){
    return{
      name:''
    }
  },
  computed: {
    ...mapState({
      num:state=>state.number
    })
  },
  methods:{
    handleInput(name){
      console.log(name)
    }
  }
};
</script>
<style lang="scss" scoped>
    .top{
      margin: 10px;
    }
</style>
