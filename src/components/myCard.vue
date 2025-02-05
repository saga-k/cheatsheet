<script>
export default {
  name: "myCard",

  created() {
    window.addEventListener("keydown", this.closeOverlay);
  },

  props: {
    cardProp: {
      type: Object,
      required: true,
    }
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
      selectedTextColor: null,
    };
  },

  methods: {
    toggleBgColorPicker() {
      if (this.bgColorPicker === false) {
        this.bgColorPicker = true;
      }
      else {
        this.bgColorPicker = false;
      }
      if (this.borderColorPicker) {
        this.borderColorPicker = false
      }
      if (this.textColorPicker) {
        this.textColorPicker = false
      }
    },

    toggleBorderColorPicker() {
      if (this.borderColorPicker === false) {
        this.borderColorPicker = true;
      }
      else {
        this.borderColorPicker = false
      }
      if (this.bgColorPicker) {
        this.bgColorPicker = false
      }
      if (this.textColorPicker) {
        this.textColorPicker = false
      }
    },

    toggleTextColorPicker() {
      if (this.textColorPicker === false) {
        this.textColorPicker = true;
      }
      else {
        this.textColorPicker = false
      }
      if (this.bgColorPicker) {
        this.bgColorPicker = false
      }
      if (this.borderColorPicker) {
        this.borderColorPicker = false
      }
    },

    closeOverlay(event) {
      if (event.key === 'Escape' || event.key === 'enter') {
        this.textColorPicker = false
        this.bgColorPicker = false
        this.borderColorPicker = false
      }
    }
  }
};
</script>

<template>

  <section v-bind:style="{
    'background-color': selectedBackgroundColor || '#eff3f6',
    'border-color': selectedBorderColor || '#c9c9c9'
  }">

    <div class="overlay" v-if="bgColorPicker === true">
      <div class="colorPickerTitle">
        <h4>Select Background Color</h4>
      </div>
      <v-color-picker hide-canvas show-swatches id="bgColorPicker" v-model="selectedBackgroundColor" mode="hex"
        elevation="0">
      </v-color-picker>
    </div>

    <div class="overlay" v-if="borderColorPicker === true">
      <div class="colorPickerTitle">
        <h4>Select Border Color</h4>
      </div>
      <v-color-picker hide-canvas show-swatches id="borderColorPicker" v-model="selectedBorderColor" mode="hex"
        elevation="0">
      </v-color-picker>
    </div>

    <div class="overlay" v-if="textColorPicker === true">
      <div class="colorPickerTitle">
        <h4>Select Text Color</h4>
      </div>
      <v-color-picker hide-canvas show-swatches id="textColorPicker" v-model="selectedTextColor" mode="hex"
        elevation="0">
      </v-color-picker>
    </div>

    <div id="cardLayout">
      <div id="firstRow">
        <h3 :style="{ 'color': selectedTextColor }">{{ cardTitle }}</h3>

        <div id="icons">
          <button id="bgColorButton" class="colorButton" @click="toggleBgColorPicker"
            :style="{ 'backgroundColor': selectedTextColor || 'black' }">

            <font-awesome-icon v-if="bgColorPicker === false" id="fillIcon" :icon="['fas', 'palette']"
              :style="{ 'color': selectedBackgroundColor || 'white' }" />

            <font-awesome-icon v-else id="borderIcon" :icon="['fas', 'times']"
              :style="{ 'color': selectedBackgroundColor || 'white' }" />
          </button>

          <button id="borderColorButton" class="colorButton" @click="toggleBorderColorPicker"
            :style="{ 'border-color': selectedTextColor || 'black' }">

            <font-awesome-icon v-if="borderColorPicker === false" id="borderIcon" :icon="['fas', 'palette']"
              :style="{ 'color': selectedTextColor || 'black' }" />

            <font-awesome-icon v-else id="borderIcon" :icon="['fas', 'times']"
              :style="{ 'color': selectedTextColor || 'black' }" />
          </button>

          <button id="textColorButton" class="colorButton" @click="toggleTextColorPicker"
            :style="{ 'backgroundColor': selectedTextColor || 'black' }">
            <strong v-if="textColorPicker === false" :style="{ 'color': selectedBackgroundColor || 'white' }">T</strong>
            <font-awesome-icon v-else class="closeIcon" :icon="['fas', 'times']"
              :style="{ 'color': selectedBackgroundColor || 'white' }" />
          </button>
        </div>

      </div>
      <p v-if="description !== null" :style="{ 'color': selectedTextColor }">{{ description }}</p>
      <div id="codeBlock" :style="{ 'border-color': selectedBorderColor || '#c9c9c9' }">
        <pre><code>{{ code }}</code></pre>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  border: solid 1px;
  padding: 0.5rem;
  height: fit-content;
  border-radius: 5px;
  display: flex;
  justify-content: flex-end;
  gap: 0.2rem;
}

#codeBlock {
  background-color: white;
  padding: 0.5rem;
  border-radius: 5px;
  border: solid 1px;
}

.overlay {
  position: absolute;
  margin-top: 2rem;
  z-index: 1;
  box-shadow: 0px 0px 34px 8px rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  background-color: white;
}

#cardLayout {
  flex-grow: 1;
}

#icons {
  display: flex;
  gap: 1rem;
}

.colorButton {
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;

  &:focus {
    outline: none;
  }
}

#firstRow {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.colorPickerTitle {
  padding: 0.5rem;
}

#borderColorButton {
  border: solid 1px;
}
</style>
