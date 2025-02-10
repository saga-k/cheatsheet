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
    },

    hideIcons: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      cardTitle: this.cardProp.title,
      code: this.cardProp.code,
      description: this.cardProp.description,
      id: this.cardProp.id,

      selectedBackgroundColor: null,

      selectedBorderColor: null,

      selectedTextColor: null,
    }
  },

  mounted() {
    console.log(this.cardProp);
  }
}
</script>

<template>

  <section v-bind:style="{
    'background-color': selectedBackgroundColor || '#eff3f6',
    'border-color': selectedBorderColor || '#c9c9c9'
  }">

    <v-overlay :activator="`#bgColorButton${id}`" location-strategy="connected" scrim="rgba(0, 0, 0, 0)">
      <div class="overlayBG">
        <div class="colorPickerTitle">
          <h4>Select Background Color</h4>
        </div>
        <v-color-picker id="bgColorPicker" v-model="selectedBackgroundColor" mode="hex" elevation="0">
        </v-color-picker>
      </div>
    </v-overlay>

    <v-overlay :activator="`#borderColorButton${id}`" location-strategy="connected" scrim="rgba(0, 0, 0, 0)">
      <div class="overlayBG">
        <div class="colorPickerTitle">
          <h4>Select Border Color</h4>
        </div>
        <v-color-picker id="borderColorPicker" v-model="selectedBorderColor" mode="hex" elevation="0">
        </v-color-picker>
      </div>
    </v-overlay>

    <v-overlay :activator="`#textColorButton${id}`" location-strategy="connected" scrim="rgba(0, 0, 0, 0)">
      <div class="overlayBG">
        <div class="colorPickerTitle">
          <h4>Select Text Color</h4>
        </div>
        <v-color-picker id="textColorPicker" v-model="selectedTextColor" mode="hex" elevation="0">
        </v-color-picker>
      </div>
    </v-overlay>

    <div id="cardLayout">
      <div id="firstRow">
        <h3 :style="{ 'color': selectedTextColor }">{{ cardTitle }}</h3>

        <div id="icons" v-if="hideIcons === false">
          <button :id="`bgColorButton${id}`" class="colorButton"
            :style="{ 'backgroundColor': selectedTextColor || 'black' }">

            <font-awesome-icon id="fillIcon" :icon="['fas', 'palette']"
              :style="{ 'color': selectedBackgroundColor || 'white' }" />
          </button>

          <button :id="`borderColorButton${id}`" class="colorButton borderColorButton"
            :style="{ 'border-color': selectedTextColor || 'black' }">

            <font-awesome-icon id="borderIcon" :icon="['fas', 'palette']"
              :style="{ 'color': selectedTextColor || 'black' }" />
          </button>

          <button :id="`textColorButton${id}`" class="colorButton"
            :style="{ 'backgroundColor': selectedTextColor || 'black' }">
            <strong :style="{ 'color': selectedBackgroundColor || 'white' }">T</strong>
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
  background-color: white;
  border-radius: 5px 5px 0 0;
}

.borderColorButton {
  border: solid 1px;
}

.overlayBG {
  background-color: white;
  box-shadow: 0px 0px 34px 8px rgba(0, 0, 0, 0.19);
  border-radius: 5px;
}

p {
  max-width: 600px;
}
</style>
