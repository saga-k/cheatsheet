<script>
import MyCanvas from '@/components/MyCanvas.vue';
import SizeInput from '@/components/SizeInput.vue';
import MultiSelectDropdown from '@/components/MultiSelectDropdown.vue';
import myCard from './myCard.vue';

export default{

name: 'HomeView',

components:{
  SizeInput,
  MyCanvas,
  MultiSelectDropdown,
  myCard
},

data(){
return{
  fetchedData:null,

  isFetched: false,

  canvasSize:{
    height: null,
    width: null
  },

  cards:null
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
  },

  updateCards(newValue){
    console.log('updated')
    this.cards = newValue
    console.log('cards', this.cards)
  }
}

}
</script>

<template>
<h1>test</h1>
<SizeInput @emitSize="updateCanvasSize"/>
<MultiSelectDropdown @selectionUpdated="updateCards" v-if="isFetched" :data-prop="fetchedData"/>
<MyCanvas :style="{height:canvasSize.height, width: canvasSize.width}"/>
<myCard v-for="(card, index) in cards" :key="index" :card-prop="card"/>

</template>
