<script>
export default {
  name: 'MultiSelectDropdown',

  created(){
    this.createTitles()
  },

  watch:{
    selectedTitles(newVal, oldVal){
      console.log(newVal)

    }
  },

  data(){
    return {
    titles: [],

    selectedTitles:[]
    }
  },

  props:{
    titleProp: {
      type: Array,
      required: true
    }
  },

  methods:{
    createTitles(){
      for(let i = 0; i<this.titleProp.length;i++){
        this.titles.push(this.titleProp[i].title)
      }
      //console.log(this.titles)
    },

    onClick(){

    }
  }
}

</script>

<template>
  <v-autocomplete
  label="choosePrinciple"
  :items = "titles"
  v-model="selectedTitles"
  chips
  multiple
  >
  <v-list-item>{{ titles }}</v-list-item>
   </v-autocomplete>
</template>
