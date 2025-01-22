<script>
export default {
  name: 'MultiSelectDropdown',

  created(){
    this.localData = this.titleProp
    console.log('fromprop', this.localData)
  },

  data(){
    return {
    localData: null
    }
  },

  props:{
    titleProp: {
      type: Array,
      required: true
    }
  }
}

</script>

<template>
  <p v-for="item in localData">{{item.title}}</p>
</template>
