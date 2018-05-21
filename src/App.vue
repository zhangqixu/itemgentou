<template>
  <div id="app">
    <div  id="img" >
        <img src="./assets/item.jpg">
    </div>
   
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped lang="scss">
@function torem($px) {
  @return ($px /100px)+rem;
}
#img{
  width: 100%;
  height: torem(357px) ;
}
#img img{
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  padding: torem(20px);
}
</style>