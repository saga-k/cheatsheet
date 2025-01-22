<script>
import MyCanvas from '@/components/MyCanvas.vue';
import SizeInput from '@/components/SizeInput.vue';
import MultiSelectDropdown from '@/components/MultiSelectDropdown.vue';

export default{

name: 'HomeView',

components:{
  SizeInput,
  MyCanvas,
  MultiSelectDropdown
},

data(){
return{
  fetchedData:null,

  isFetched: false,

  canvasSize:{
    height: null,
    width: null
  }
}
},

created(){
this.fetchData()
},

methods:{
  updateCanvasSize(Size){
  this.canvasSize.height = `${Size.height}px`;
  this.canvasSize.width = `${Size.width}px`;
  },

  async fetchData(){
    const promise = await fetch('/data.json');
    const data = await promise.json()
    this.fetchedData = data
    this.isFetched = true
  }
}

}
</script>

<template>
<h1>test</h1>
<SizeInput @emitSize="updateCanvasSize"/>
<MultiSelectDropdown v-if="isFetched" :title-prop="fetchedData"/>
<MyCanvas :style="{height:canvasSize.height, width: canvasSize.width}"/>

</template>
