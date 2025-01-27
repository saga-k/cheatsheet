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
    selectedTitles(newVal, oldVal){
      if(newVal.length>oldVal.length){
      let emit = this.findSame(newVal)
      this.$emit('cardAdded', emit)
      }
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

        for (let i = 0; i<this.localData.length; i++){

          let index = newVal.length-1
          let dropdownTitle = newVal[index]
          let objectTitle = this.localData[i].title
          let object = this.localData[i]

          if(objectTitle === dropdownTitle){
            console.log('to emit', object)
            return object
          }
        }
      },
    /*
    keepforlater(newVal){
      let selected = []
        for (let i = 0; i<this.localData.length; i++){

            for (let j=0; j<newVal.length; j++){

              let titleOne = this.localData[i].title
              let titleTwo = newVal[j]

                if(titleOne === titleTwo){
                selected.push(this.localData[i])
                }
            }
        }

      this.selectedPrinciples = selected
      console.log('to emit',this.selectedPrinciples)
    },
    */
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
