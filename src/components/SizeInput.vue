<script>
export default{
  name:'SizeInput',

  data(){
    return{
      width: null,
      height: null
    }
  },

  methods:{
    onClick(){
      this.$emit('SetSize', {
      height: Number(this.height),
      width:Number(this.width)
      })
    }
  },

  emits:{
    SetSize: (payload) => {
      return(
        typeof payload === 'object' &&
        typeof payload.height === 'number' &&
        typeof payload.width === 'number'
      )
    }
  }
}

</script>

<template>
<input v-model="width" id="input-width" type="number">
<input v-model="height" id="input-height" type="number">
<button @click="onClick">Set</button>
</template>
