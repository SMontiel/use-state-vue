import { readonly, Ref, ref } from 'vue';

const useState = <T>(initialState: T) => {
    const state = ref<T>(initialState) as Ref<T>;
    const setState = (newState: T) => {
        state.value = newState;
    };

    return [readonly(state), setState];
};

export default useState;
