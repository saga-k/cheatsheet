<script>
import { VNumberInput } from 'vuetify/labs/VNumberInput'

export default {
  name: "SizeInput",

  components: {
    VNumberInput,
  },

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
    <v-number-input :reverse="false" controlVariant="default" label="Width (px)" :hideInput="false" inset
      variant="outlined" v-model="width" id="input-width" :style="{ 'width': '200px' }" density="comfortable"
      bg-color="white" hide-details color="#2E5A78"></v-number-input>

    <v-number-input :reverse="false" controlVariant="default" label="Height (px)" :hideInput="false" inset
      variant="outlined" v-model="height" id="input-height" :style="{ 'width': '200px' }" density="comfortable"
      bg-color="white" hide-details color="#2E5A78"></v-number-input>

    <button class="basicButton" @click="onClick">Set Dimensions</button>
  </div>
</template>

<style scoped>
#wrapper {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

input {
  background-color: white;
  border: 1px solid #c9c9c9;
  border-radius: 3px;
  padding: 0.3rem;
}
</style>
