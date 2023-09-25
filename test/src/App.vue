<template>
  <div class="w-full sm:w-3/5 md:w-2/5 lg:w-1/3 px-8 sm:px-0 sm:mx-auto py-4 space-y-4">
    <h1 class="text-4xl text-center">Counter implementations</h1>

    <div class="space-y-4">
      <UseStateCounter />
      <UseReducerCounter />

      <NativeCounter />
    </div>
  </div>
</template>

<script setup lang="ts">
import NativeCounter from './components/NativeCounter.vue';
import UseReducerCounter from "./components/UseReducerCounter.vue";
import UseStateCounter from './components/UseStateCounter.vue';
</script>
