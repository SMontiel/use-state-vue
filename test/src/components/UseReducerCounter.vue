<template>
  <div class="p-4 rounded border space-y-2">
    <h2 class="text-2xl font-semibold">
      <code class="bg-gray-200 px-2 rounded text-orange-600 font-mono">useReducer()</code> function
    </h2>
    <div class="flex justify-between items-center">
      <p>Count: <span class="font-bold text-xl">{{ state.count }}</span></p>
      <div class="space-x-4">
        <button class="bg-white border hover:border-blue-500 px-2 py-1 rounded shadow hover:shadow-md font-mono"
                @click="dispatch({ type: 'increment' })">
          <b>+</b>
        </button>
        <button class="bg-white border hover:border-blue-500 px-2 py-1 rounded shadow hover:shadow-md font-mono"
                @click="dispatch({ type: 'decrement' })">
          <b>-</b>
        </button>
      </div>
    </div>

    <hr>
    <h3 class="text-lg font-semibold">Code:</h3>
    <article class="prose">
      <pre>
import { useReducer } from 'use-state-vue';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Wrong action type!');
  }
}

const [state, dispatch] = useReducer(reducer, initialState);

dispatch({ type: 'increment' });</pre>
    </article>
  </div>
</template>

<script setup lang="ts">
import { useReducer } from 'use-state-vue-sm';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Wrong action type!');
  }
}

const [state, dispatch] = useReducer(reducer, initialState);
</script>
