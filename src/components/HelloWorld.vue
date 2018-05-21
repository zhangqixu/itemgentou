<template>
  <div class="hello">
    <h1 class="h1">{{ msg }}</h1>

  </div>
</template>

<script>
  import Ajax from '@/service/api'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    Ajax.getuser().then(res=>{
      console.log(res)
    })
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@function torem($px) {
  @return ($px / 100px)+rem;
}

.h1{
  font-size: torem(20px)
}
</style>
