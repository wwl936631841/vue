<template>
  <div>
    login1
    <!-- <we-input></we-input>  -->
    <WeInput :userName="userName" @getUserName='getUserName'></WeInput>
  </div>
</template>

<script>
import WeInput from './../components/input2/input.vue'
export default {
  components: {WeInput},
  data () {
    return {
      userName: ''
    }
  },
  methods: {
    getUserName (value) {
      console.log(value||'user')
    }
  }
}
</script>
