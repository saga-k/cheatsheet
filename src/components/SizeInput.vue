<script>
export default {
  name: "SizeInput",

  data() {
    return {
      width: null,
      height: null,
    };
  },

  methods: {
    onClick() {
      this.$emit("emitSize", {
        height: Number(this.height),
        width: Number(this.width),
      });
    },
  },

  emits: {
    emitSize: (payload) => {
      return (
        typeof payload === "object" &&
        typeof payload.height === "number" &&
        typeof payload.width === "number"
      );
    },
  },
};
</script>

<template>
  <div id="wrapper">
    <input v-model="width" id="input-width" type="number" />
    <input v-model="height" id="input-height" type="number" />
    <button @click="onClick">Set Dimensions</button>
    <div class="block shadow"></div>
  </div>
</template>

<style scoped>
#wrapper {
  display: flex;
  gap: 1rem;
}

input {
  background-color: white;
  border: 1px solid #c9c9c9;
  border-radius: 3px;
  padding: 0.3rem;
}

button {
  background-color: lightgrey;
  width: fit-content;
  padding: 0.3rem 1rem;
  border-radius: 3px;
  font-size: 14px;
}
</style>
