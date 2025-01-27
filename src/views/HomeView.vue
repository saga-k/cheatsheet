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

  cards:[]
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

  addCard(added){
    console.log('updated', added)
    this.cards.push(added)
    console.log('cards', this.cards)
  },

  removeCard(removed){

    let found = this.cards.find(value => value.title === removed)
    console.log('found', found)
    let index = this.cards.indexOf(found)
    console.log(index)
    this.cards.splice(index, 1)
    console.log('this.cards:',this.cards)
  }
}

}
</script>

<template>
<h1>test</h1>
<SizeInput @emitSize="updateCanvasSize"/>
<MultiSelectDropdown @cardAdded="addCard" @cardRemoved="removeCard" v-if="isFetched" :data-prop="fetchedData"/>
<MyCanvas :style="{height:canvasSize.height, width: canvasSize.width}"/>
<myCard v-if="cards!==null" v-for="card in cards"  :key="card.id" :card-prop="card"/>

</template>
