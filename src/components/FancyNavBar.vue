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
    <div id="whiteContainer">
      <routerLink to="/">Generator</RouterLink>
      <routerLink to="about">About</routerLink>
    </div>
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
  width: 100%
}


#container {
  height: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}

#whiteContainer {
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 70px;
  background-color: white;
  display: flex;
  justify-content: flex-end;
  gap: 3rem;
  align-items: center;
  padding-right: 3rem;

}

.fill {
  height: 100%;
  width: 100%;
  opacity: 70%;
}

#purple {
  grid-column: 1;
  background-color: #4B0082;
  box-shadow: -10px 10px 30px 20px #4B0082;
}

#blue {
  grid-column: 2;
  background-color: #0000FF;
  box-shadow: -10px 10px 30px 20px #0000FF;
}

#green {
  grid-column: 3;
  background-color: #00FF00;
  box-shadow: -10px 10px 30px 20px #00FF00;
}

#yellow {
  grid-column: 4;
  background-color: #FFFF00;
  box-shadow: -10px 10px 30px 20px #FFFF00;
}

#orange {
  grid-column: 5;
  background-color: #FF7F00;
  box-shadow: -10px 10px 30px 20px #FF7F00;
}

#red {
  grid-column: 6;
  background-color: #FF0000;
  box-shadow: -10px 10px 30px 20px #FF0000;
}
</style>