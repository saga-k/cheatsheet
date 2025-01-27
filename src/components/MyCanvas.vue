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

<section>
<slot><p>Select cards to add</p></slot>
</section>

</template>

<style scoped>
section{
  overflow: hidden;
  border: 1px solid black;
}
</style>
