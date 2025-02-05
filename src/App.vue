<script setup>
import { RouterView } from "vue-router";
</script>


<template>
  <nav>
    <RouterLink to="/">Generator</RouterLink>
    <routerLink to="about">About</routerLink>
  </nav>

  <RouterView />
</template>