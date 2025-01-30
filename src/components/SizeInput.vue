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
    <div class="vertical-flex">
      <label for="input-width">Set Width</label>
      <input v-model="width" id="input-width" type="number" />
    </div>
    <div class="vertical-flex">
      <label for="input-height">Set Height</label>
      <input v-model="height" id="input-height" type="number" />
    </div>
    <button @click="onClick">Set Dimensions</button>
  </div>
</template>

<style scoped>
#wrapper {
  display: flex;
  gap: 1rem;
  align-items: flex-end;
}

.vertical-flex {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 14px;
}

input {
  background-color: white;
  border: 1px solid #c9c9c9;
  border-radius: 3px;
  padding: 0.3rem;
}
</style>
