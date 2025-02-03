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
      selectedBackgroundColor: null 
    };
  },

  methods: {
    openColorPicker() {
      if(this.colorPicker === false){
      this.colorPicker = true;} 
      else {
        this.colorPicker = false
      }
    }
  },

  watch:{
    selectedColor(newVal, oldVal){
      console.log('newval', newVal);
      console.log('oldval', oldVal)
    }
  }
};
</script>

<template>
  <section
  v-bind:style="{'background-color' : selectedBackgroundColor || '#eff3f6'}"
  >

    <div id="overlay">
      <v-color-picker 
      v-if="colorPicker === true" 
      class="colorPicker"
      v-model="selectedBackgroundColor" >
      >
      </v-color-picker>
    </div>

    <div id="layout">
      <div id="firstRow">
        <h3>{{ cardTitle }}</h3>
        <button class="colorButton" @click="openColorPicker"><!--Add icon here--></button>
      </div>
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
  justify-content: flex-end;
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
  position:absolute;
  margin-top: 2rem;
  z-index: 1;
}

#layout{
  flex-grow: 1;
}

.colorButton{
  height: 20px;
  width: 20px;
  background-color: black;
}

#firstRow{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
