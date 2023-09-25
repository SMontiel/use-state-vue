# use-state-vue

Simple replica of React `useState()` and `useReducer()` for Vue 3.

## Install

``` bash
npm install use-state-vue
```

## Usage

### `useState()`

``` typescript
import { useState } from 'use-state-vue';

const [count, setCount] = useState(0);

setCount(count + 1);
```

### `useReducer()`

``` typescript
import { useReducer } from 'use-state-vue';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Action not implemented');
  }
};

const [state, dispatch] = useReducer(reducer, initialState);

dispatch({ type: 'increment' });
```

## Idea behind this library

This library tries to replicate the [`useState()` hook present in React](https://react.dev/reference/react/useState).

The equivalent in Vue 3 is something like:

``` typescript
import { ref } from 'vue';

const count = ref(0);

const increment = () => {
  count.value += 1;
};
```
