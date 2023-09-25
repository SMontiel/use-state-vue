<template>
  <div class="p-4 rounded border space-y-2">
    <h2 class="text-2xl font-semibold">Native option</h2>
    <div class="flex justify-between items-center">
      <p>Count: <span class="font-bold text-xl">{{ count }}</span></p>
      <div class="space-x-4">
        <button class="bg-white border hover:border-blue-500 px-2 py-1 rounded shadow hover:shadow-md font-mono"
                @click="count++">
          <b>+</b>
        </button>
        <button class="bg-white border hover:border-blue-500 px-2 py-1 rounded shadow hover:shadow-md font-mono"
                @click="count--">
          <b>-</b>
        </button>
      </div>
    </div>

    <hr>
    <h3 class="text-lg font-semibold">Code:</h3>
    <article class="prose">
      <pre>
import { ref } from 'vue';

const count = ref(0);
const increment = () => {
  count.value += 1;
};</pre>
    </article>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>
