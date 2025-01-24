<script>
export default {
  name: 'myCard',

  props:{
    cardProp:{
      type: Object,
      required: true
    }
  },

  data(){
    return {
      cardTitle: this.cardProp.title,
      code: this.cardProp.code
    }
  }

}
</script>

<template>
  <section>
    <h2>{{cardTitle}}</h2>
    <pre>
  <code>
 {{ code }}
  </code>
</pre>
  </section>
</template>

<style scoped>
section{
  outline: solid black 1 px;
}

</style>
