# use-state-vue

Simple replica of React `useState()` for Vue 3.

## Install

``` bash
npm install use-state-vue
```

## Usage

``` typescript
import useState from 'use-state-vue';

const [count, setCount] = useState(0);
setCount(count + 1);
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
