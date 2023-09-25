import { readonly, Ref, ref } from 'vue';

export default function useState<T>(initialState: T) {
    const state = ref<T>(initialState) as Ref<T>;
    const setState = (newState: T) => {
        state.value = newState;
    };

    return [readonly(state), setState];
}
