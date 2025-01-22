<script>
import SizeInput from '@/components/SizeInput.vue';

export default{
name: 'HomeView',
components:{
  SizeInput,
},
methods:{
  onSetSize(Size){
  console.log('size', Size)
  }
}
}
</script>

<template>
<h1>test</h1>
<SizeInput @SetSize="onSetSize"/>
</template>
