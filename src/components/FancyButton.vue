<script>
export default{
  name: 'FancyButton'
}
</script>

<template>
  <div id='container'>
    <div></div>
  </div>

<button id='fancyButton'>
  <slot>
    Fancy Button
  </slot>
</button>
</template>

<style scoped>
#fancyButton{
  margin: 3rem /*remove later, this is for test*/;

  background-color: white;

  box-shadow: 
  0px 0px 10px 10px #4B0082, 
  0px 0px 0px 0px #0000FF, 
  0px 0px 0px 0px #00FF00, 
  0px 0px 0px 0px #FFFF00, 
  0px 0px 0px 0px #FF7F00, 
  0px 0px 0px 0px #FF0000,
  0px 0px 0px 0px rgba(0,0,0,0);

}

#container{
  height: 40px;
  width: 100px;
  border: solid black 1px;
  margin: 2rem
}
</style>

7px -5px 0px 0px #4B0082, 
  11px -9px 0px 0px #0000FF, 
  16px -14px 0px 0px #00FF00, 
  20px -17px 0px 0px #FFFF00, 
  24px -19px 0px 0px #FF7F00, 
  27px -23px 0px 0px #FF0000,
  0px 0px 0px 0px rgba(0,0,0,0);