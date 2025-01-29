<script>
export default {
  name: "MyCanvas",

  data() {
    return {
      height: null,
      width: null,
    };
  },

  props: {
    sizeProp: {
      type: Object,
    },
  },
};
</script>

<template>
  <section ref="canvasSection">
    <slot><p>Select cards to add</p></slot>
  </section>
</template>

<style scoped>
section {
  background-color: white;
  border: solid 1px #c9c9c9;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  column-gap: 1rem;
  row-gap: 1rem;
  overflow: hidden;
  padding: 1rem;
  border-radius: 8px;
}
</style>
