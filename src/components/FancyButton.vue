<script>
export default {
  name: 'FancyButton'
}

</script>

<template>
  <div id="outerContainer">
    <button id='fancyButton'>Fancy button</button>
    <div id='container'>
      <div id='purple' class='fill'></div>
      <div id='blue' class='fill'></div>
      <div id='green' class='fill'></div>
      <div id='yellow' class='fill'></div>
      <div id='orange' class='fill'></div>
      <div id='red' class='fill'></div>
    </div>
  </div>

  <button>
    <slot>
      Fancy Button
    </slot>
  </button>
</template>

<style scoped>
#outerContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

#fancyButton {
  background-color: white;
  position: absolute;
  z-index: 1;
}

#container {
  height: 40px;
  width: 100px;
  border: solid black 1px;
  margin: 2rem;
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

7px -5px 0px 0px #4B0082,
11px -9px 0px 0px #0000FF,
16px -14px 0px 0px #00FF00,
20px -17px 0px 0px #FFFF00,
24px -19px 0px 0px #FF7F00,
27px -23px 0px 0px #FF0000,
0px 0px 0px 0px rgba(0,0,0,0);