<script setup>
import { RouterView } from "vue-router";
import FancyNavBar from "./components/FancyNavBar.vue";
</script>


<template>
  <FancyNavBar></FancyNavBar>
  <RouterView />
</template>
