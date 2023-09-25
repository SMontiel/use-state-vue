import { readonly, Ref, ref } from 'vue';

const useReducer = <S, A>(reducer: (state: S, action: A) => S, initialState: S, initialize: (state: S) => S) => {
    const state = ref<S>(initialize ? initialize(initialState) : initialState) as Ref<S>;
    const dispatch = (action: A) => {
        state.value = reducer(state.value, action);
    };

    return [readonly(state), dispatch];
};

const useState = <T>(initialState: T) => {
    const state = ref<T>(initialState) as Ref<T>;
    const setState = (newState: T) => {
        state.value = newState;
    };

    return [readonly(state), setState];
};

export { useReducer, useState };
