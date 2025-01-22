<script>
import MyCanvas from '@/components/MyCanvas.vue';
import SizeInput from '@/components/SizeInput.vue';

export default{

name: 'HomeView',

components:{
  SizeInput,
  MyCanvas
},

data(){
return{
  canvasSize:{
    height: null,
    width: null
  }
}
},

methods:{
  onSetSize(Size){
  this.canvasSize.height = `${Size.height}px`;
  this.canvasSize.width = `${Size.width}px`;
  }
}
}
</script>

<template>
<h1>test</h1>
<SizeInput @SetSize="onSetSize"/>
<MyCanvas :style="{height:canvasSize.height, width: canvasSize.width}"/>
</template>
