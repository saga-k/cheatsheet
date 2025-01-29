<script>
export default {
  name: "myCard",

  props: {
    cardProp: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      cardTitle: this.cardProp.title,
      code: this.cardProp.code,
      description: this.cardProp.description,
    };
  },
};
</script>

<template>
  <section>
    <h3>{{ cardTitle }}</h3>
    <p v-if="description !== null">{{ description }}</p>
    <div>
      <pre><code>{{ code }}</code></pre>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: #eff3f6;
  border: solid #c9c9c9 1px;
  padding: 0.5rem;
  height: fit-content;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

p {
  font-size: 14px;
}
code {
  font-size: 14px;
}

div {
  background-color: white;
  padding: 0.5rem;
  border-radius: 5px;
  border: solid 1px #c9c9c9;
}
</style>
