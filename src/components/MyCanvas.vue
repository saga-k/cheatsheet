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
    <slot></slot>
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
  justify-content: center;
}

h1, h2, h3, h4, h5, h6, p, li, button{
  color: #414141;
}
</style>
