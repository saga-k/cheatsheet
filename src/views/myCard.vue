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
    <h3>{{cardTitle}}</h3>
    <p v-if="description!==null">{{ description }}</p>
    <div>
    <pre><code>{{ code }}</code></pre>
    </div>

  </section>
</template>

<style scoped>

section{
  border: solid black 1px;
  padding: 0.5rem;
  height: fit-content;
}

p{
  font-size: 14px;
}
code{
  font-size: 14px;
}

div{
  background-color: lightgray;
  padding: 0.5rem;
}


</style>
