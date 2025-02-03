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
      bgColorPicker: false,
      selectedBackgroundColor: null,
      borderColorPicker: false,
      selectedBorderColor: null
    };
  },

  methods: {
    openBgColorPicker() {
      if(this.bgColorPicker === false){
      this.bgColorPicker = true;} 
      else {
        this.bgColorPicker = false
      }
    },

    closeBgColorPicker() {
      if(this.bgColorPicker === true){
      this.bgColorPicker = false;} 
    },

    openBorderColorPicker() {
      if(this.borderColorPicker === false){
      this.borderColorPicker = true;} 
      else {
        this.borderColorPicker = false
      }
    }
  }
};
</script>

<template>
  <section
  v-bind:style="
  {'background-color' : selectedBackgroundColor || '#eff3f6',
    'border-color': selectedBorderColor || '#c9c9c9'
  }"
  >

    <div class="overlay">
      <v-color-picker 
      v-if="bgColorPicker === true" 
      id="bgColorPicker"
      v-model="selectedBackgroundColor" 
      mode="hsl"
      >
      </v-color-picker>
    </div>

    <div class="overlay">
      <v-color-picker 
      v-if="borderColorPicker === true" 
      id="borderColorPicker"
      v-model="selectedBorderColor" 
      mode="hsl"
      >
      </v-color-picker>
    </div>

    <div id="layout">
      <div id="firstRow">
          <h3>{{ cardTitle }}</h3>

          <div id="icons">
          <button id="bgColorButton" class="colorButton" @click="openBgColorPicker">
            <!--add icon here-->
          </button>
          <button id="borderColorButton" class="colorButton" @click="openBorderColorPicker">
          <!--add icon here-->
        </button>
      </div>

      </div>
        <p v-if="description !== null">{{ description }}</p>
      <div 
      id="codeBlock"
      :style="{'border-color': selectedBorderColor}"
      >
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

.overlay{
  position:absolute;
  margin-top: 2rem;
  z-index: 1;
}

#layout{
  flex-grow: 1;
}

#icons{
  display: flex;
  gap: 1rem;
}

.colorButton{
  height: 20px;
  width: 20px;
}

#bgColorButton{
  background-color: rgb(0, 0, 0);
}

#borderColorButton{
  background-color: aqua;
}



#firstRow{
  display: flex;
  justify-content: space-between;
  align-items: center;
}



</style>
