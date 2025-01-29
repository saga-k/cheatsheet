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
    width: 1440,
    height: 900,
    scrollHeight: null,
    scrollWidth: null
  },

  cards:[],

  viewportWidth: window.innerWidth,

  hasWindowOverflow: true,

  scalePercentage: null

}
},

created(){
this.fetchData()
window.addEventListener('resize', this.updateViewportWidth)
},

methods:{
  updateCanvasSize(Size){
  this.canvasSize.height = `${Size.height}`;
  this.canvasSize.width = `${Size.width}`;
  },

  async fetchData(){
    const promise = await fetch('/data.json');
    const data = await promise.json()
    this.fetchedData = data
    this.isFetched = true
  },

  addCard(added){
    this.cards.push(added)
    this.canvasSize.scrollHeight = this.$refs.MyCanvas.$refs.canvasSection.scrollHeight
    this.canvasSize.scrollWidth = this.$refs.MyCanvas.$refs.canvasSection.scrollWidth
    //console.log('canvasSize', this.canvasSize)
  },

  removeCard(removed){

    let found = this.cards.find(value => value.title === removed)
    let index = this.cards.indexOf(found)
    this.cards.splice(index, 1)
    this.canvasSize.scrollHeight = this.$refs.MyCanvas.$refs.canvasSection.scrollHeight
    this.canvasSize.scrollWidth = this.$refs.MyCanvas.$refs.canvasSection.scrollWidth
    //console.log('canvasSize', this.canvasSize)
  },

  updateViewportWidth(){
    this.viewportWidth = window.innerWidth
    this.calculateScale()
  },

  calculateScale(){
    let percentage = (this.viewportWidth/this.canvasSize.width)*100
    this.scalePercentage = Math.floor(percentage)

    if(percentage < 100){
      this.hasWindowOverflow = true
    } else {
      this.hasWindowOverflow = false
    }

    console.log('wibdowoverflow', this.hasWindowOverflow)
    console.log('percentage', this.scalePercentage)
  }
},

computed:{
  checkOverflow(){
    return this.canvasSize.scrollWidth > Number(this.canvasSize.width) ||
    this.canvasSize.scrollHeight > Number(this.canvasSize.height)
  }
}

}
</script>

<template>
<h1>test</h1>
<SizeInput @emitSize="updateCanvasSize"/>
<MultiSelectDropdown
@cardAdded="addCard"
@cardRemoved="removeCard"
v-if="isFetched"
:data-prop="fetchedData"/>

<p v-if="checkOverflow">Testing error</p>

<MyCanvas
:style="{
  height:canvasSize.height + 'px',
  width: canvasSize.width + 'px',
  }"
ref="MyCanvas"
:class="canvasSize.width > viewportWidth ? 'scaleDown':'resetScale'">

  <myCard
  v-if="cards!==null"
  v-for="card in cards"
  :key="card.id"
  :card-prop="card"/>

</MyCanvas>

</template>

<style scoped>
.scaleDown{
  transform-origin: top left;
}
</style>
