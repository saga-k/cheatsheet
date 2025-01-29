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
  display: flex;
  background-color: white;
  border: solid 1px #c9c9c9;
  overflow: hidden;
  padding: 1rem;
  border-radius: 8px;
}
</style>
