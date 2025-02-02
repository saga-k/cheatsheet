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
      colorPicker: false,
    };
  },

  methods: {
    openColorPicker() {
      this.colorPicker = true;
    },
  },
};
</script>

<template>
  <section>
    <div id="overlay">
  <v-color-picker class="colorPicker"></v-color-picker>
</div>
<div id="layout">
    <h3>{{ cardTitle }}</h3>
    <div style="height: 20px; width: 20px" @click="openColorPicker"></div>
    <p v-if="description !== null">{{ description }}</p>
    <div id="codeBlock">
      <pre><code>{{ code }}</code></pre>
    </div>
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

#codeBlock {
  background-color: white;
  padding: 0.5rem;
  border-radius: 5px;
  border: solid 1px #c9c9c9;
}

#overlay{
  position: absolute;
  z-index: 1;
}
</style>
