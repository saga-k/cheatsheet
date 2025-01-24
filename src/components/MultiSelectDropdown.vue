<script>
export default {
  name: 'MultiSelectDropdown',

  props:{
    dataProp: {
      type: Array,
      required: true
    }
  },

  data(){
    return {
    localData: this.dataProp,

    titles: [],

    selectedTitles:[],

    selectedPrinciples:[]


    }
  },

  created(){
    this.populateDropdown()
  },

  watch:{
    selectedTitles(newVal){
      this.findSame(newVal)
      this.$emit('selectionUpdated', this.selectedPrinciples)
    }
  },

  methods:{
    populateDropdown(){
      for (let i = 0;i < this.localData.length; i++){
        let title = this.localData[i].title
        this.titles.push(title)
      }
    },

    findSame(newVal){
      let selected = []
        for (let i = 0; i<this.localData.length; i++){

            for (let j=0; j<newVal.length; j++){

              let titleOne = this.localData[i].title
              let titleTwo = newVal[j]

                if(titleOne === titleTwo){
                selected.push(titleOne)
                }
            }
        }

      this.selectedPrinciples = selected
      console.log('to emit',this.selectedPrinciples)
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
