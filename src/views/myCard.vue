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
      code: this.cardProp.code,
      description: this.cardProp.description
    }
  }

}
</script>

<template>
  <section>
    <h2>{{cardTitle}}</h2>
    <p v-if="description!==null">{{ description }}</p>
    <pre>
  <code>
 {{ code }}
  </code>
</pre>
  </section>
</template>

<style scoped>
section{
  border: solid black 1 px;
}

</style>
