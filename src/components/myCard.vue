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
      selectedBorderColor: null,

      textColorPicker: false,
      selectedTextColor: null
    };
  },

  methods: {
    toggleBgColorPicker() {
      if(this.bgColorPicker === false){
      this.bgColorPicker = true;} 
      else {
        this.bgColorPicker = false
      }
    },

    toggleBorderColorPicker() {
      if(this.borderColorPicker === false){
      this.borderColorPicker = true;} 
      else {
        this.borderColorPicker = false
      }
    },

    toggleTextColorPicker() {
      if(this.textColorPicker === false){
      this.textColorPicker = true;} 
      else {
        this.textColorPicker = false
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

    <div class="overlay"
      v-if="bgColorPicker === true">
      <div class="colorPickerTitle">
        <h4>Select Background Color</h4>
      </div>
      <v-color-picker  
      id="bgColorPicker"
      v-model="selectedBackgroundColor" 
      mode="hsl"
      elevation="0"
      >
      </v-color-picker>
    </div>

    <div class="overlay"
    v-if="borderColorPicker === true" >
      <div class="colorPickerTitle">
        <h4>Select Border Color</h4>
      </div>
      <v-color-picker 
      id="borderColorPicker"
      v-model="selectedBorderColor" 
      mode="hsl"
      >
      </v-color-picker>
    </div>

    <div class="overlay"
    v-if="textColorPicker === true" >
      <div class="colorPickerTitle">
        <h4>Select Text Color</h4>
      </div>
      <v-color-picker 
      id="textColorPicker"
      v-model="selectedTextColor" 
      mode="hsl"
      >
      </v-color-picker>
    </div>

    <div id="layout">
      <div id="firstRow">
          <h3 :style="{'color': selectedTextColor || 'black'}">{{ cardTitle }}</h3>

          <div id="icons">
          <button id="bgColorButton"
          class="colorButton"
          @focusin="toggleBgColorPicker"
          @focusout="toggleBgColorPicker"
          >
          <font-awesome-icon id="fillIcon" :icon="['fas', 'palette']" />
          </button>

          <button id="borderColorButton" 
          class="colorButton" 
          @focusin="toggleBorderColorPicker"
          @focusout="toggleBorderColorPicker"
          >
          <font-awesome-icon id="borderIcon" :icon="['fas', 'palette']" />
        </button>
        
        <button 
        id="textColorButton" 
        class="colorButton" 
        @focusin="toggleTextColorPicker"
        @focusout="toggleTextColorPicker"
        >
        <strong>T</strong>
        </button>
      </div>

      </div>
        <p 
        v-if="description !== null"
        :style="{'color': selectedTextColor || 'black'}"
        >{{ description }}</p>
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
  box-shadow: 0px 0px 34px 8px rgba(0,0,0,0.19);
  border-radius: 5px;
  background-color: white;
}

#layout{
  flex-grow: 1;
}

#icons{
  display: flex;
  gap: 1rem;
}

.colorButton{
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
}

#firstRow{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.colorPickerTitle{
  padding: 0.5rem;
}

#fillIcon{
  color: white;
}

#bgColorButton{
  background-color: black;
}

#borderIcon{
  color: black;
}

#borderColorButton{
  border: solid black 1px;
}

#textColorButton{
  background-color: black;
  color: white;
}

</style>
