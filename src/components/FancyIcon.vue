<script>
export default {
  name: 'FancyIcon'
}

</script>

<template>
  <div id="outerContainer">
    <div id='whiteContainer'>
      <slot>
        icon
      </slot>
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
  width: 50px;
  height: 50px;
}

#whiteContainer {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  width: 60px;
  height: 60px;
  border-radius: 60px;
}

#container {
  height: 40px;
  width: 40px;
  border-radius: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: solid black 1px
}

.fill {
  height: 100%;
  width: 100%;
  opacity: 70%;
}

#purple {
  grid-column: 1;
  background-color: #4B0082;
  box-shadow: 0px 0px 20px 10px #4B0082;
  border-radius: 100% 0px 0 0px;
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
  border-radius: 0 100% 0 0px;
}

#yellow {
  grid-column: 1;
  background-color: #FFFF00;
  box-shadow: 0px 0px 20px 10px #FFFF00;
  border-radius: 0 0 0 100%;
}

#orange {
  grid-column: 2;
  background-color: #FF7F00;
  box-shadow: 0px 0px 20px 10px #FF7F00;
}

#red {
  grid-column: 3;
  background-color: #FF0000;
  box-shadow: 5px 0px 20px 10px #FF0000;
  border-radius: 0px 0px 100% 0px;
}
</style>