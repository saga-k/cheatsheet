<script>
export default {
  name: 'FancyButton',

  methods: {
    onClick() {
      this.$emit('clicked')
    }
  },
  emits: ['clicked']
}

</script>

<template>
  <div id="outerContainer">
    <button id='fancyButton' @click="onClick">
      <slot>Fancy button</slot>
    </button>
    <div id='container'>
      <div id='purple' class='fill'></div>
      <div id='blue' class='fill'></div>
      <div id='green' class='fill'></div>
      <div id='yellow' class='fill'></div>
      <div id='orange' class='fill'></div>
      <div id='red' class='fill'></div>
    </div>
  </div>
</template>

<style scoped>
#outerContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 48px;
}

#fancyButton {
  background-color: white;
  position: absolute;
  z-index: 1;
}

#container {
  height: 35px;
  width: 100px;
  border: solid black 1px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}

.fill {
  height: 100%;
  width: 100%;
  opacity: 70%;
}

#purple {
  grid-column: 1;
  background-color: #4B0082;
  box-shadow: -5px 0px 20px 10px #4B0082;
}

#blue {
  grid-column: 2;
  background-color: #0000FF;
  box-shadow: 0px 0px 20px 10px #0000FF;
}

#green {
  grid-column: 3;
  background-color: #00FF00;
  box-shadow: 0px 0px 20px 10px #00FF00;
}

#yellow {
  grid-column: 4;
  background-color: #FFFF00;
  box-shadow: 0px 0px 20px 10px #FFFF00;
}

#orange {
  grid-column: 5;
  background-color: #FF7F00;
  box-shadow: 0px 0px 20px 10px #FF7F00;
}

#red {
  grid-column: 6;
  background-color: #FF0000;
  box-shadow: 5px 0px 20px 10px #FF0000;
}
</style>