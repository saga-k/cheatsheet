<script>
export default {
  name: 'MultiSelectDropdown',

  created(){
    this.createTitles()
  },

  data(){
    return {
    titles: []
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
      console.log(this.titles)
    }
  }
}

</script>

<template>
  <v-autocomplete
  v-if="titles.length>0"
  label="choosePrinciple"
  :items = "titles"
   > 0"></v-autocomplete>
</template>
