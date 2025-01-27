<script>
export default {
  name: 'MyCanvas',

  data(){
    return{
      height:null,
      width: null
    }
  },

  props:{
    sizeProp:{
      type: Object
    }
  }
}

</script>

<template>
  <section ref="canvasSection">
    <slot><p>Select cards to add</p></slot>
  </section>
</template>

<style scoped>
section{
  border: solid 1px black;
  overflow: hidden;
}
</style>
