<script>
import { VNumberInput } from 'vuetify/labs/VNumberInput'

export default {
  name: "SizeInput",

  components: {
    VNumberInput,
  },

  data() {
    return {
      width: 1400,
      height: 900,
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
  <div id="mainWrapper">

    <v-number-input :reverse="false" controlVariant="default" label="Width (px)" :hideInput="false" inset
      variant="outlined" v-model="width" id="input-width" :style="{ 'minWidth': '200px' }" density="comfortable"
      bg-color="white" hide-details color="black">
    </v-number-input>

    <v-number-input :reverse="false" controlVariant="default" label="Height (px)" :hideInput="false" inset
      variant="outlined" v-model="height" id="input-height" :style="{ 'minWidth': '200px' }" density="comfortable"
      bg-color="white" hide-details color="black"></v-number-input>

    <button id="setSizeButton" class="basicButton" @click="onClick">Set Dimensions</button>
    <div id="fancyButtonSlot">
      <slot>add button here</slot>
    </div>
  </div>
</template>

<style scoped>
#mainWrapper {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 4fr;
}

#input-width {
  grid-column: 1;
}

#input-height {
  grid-column: 2;
}

#setSizeButton {
  grid-column: 3;
}

#fancyButtonSlot {
  grid-column: 4;
  justify-self: flex-end;
}


@media screen and (max-width: 850px) {

  #mainWrapper {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 1.5rem;
  }

  #setSizeButton {
    grid-column: 1;
    justify-self: center;
  }

  #fancyButtonSlot {
    grid-column: 2;
    justify-self: center;
  }
}
</style>
