import { writable } from "svelte/store"

const customLoaderLayoutComplete = writable(false);

export const loaderLayoutComplete = {
    subscribe: customLoaderLayoutComplete.subscribe,

    setTrue: () => {
        customLoaderLayoutComplete.update(b => true);
    }
};

const customCanSpin = writable(false);

export const canSpin = {
    subscribe: customCanSpin.subscribe,

    setTrue: () => {
        customCanSpin.update(b => true);
    },

    setFalse: () => {
        customCanSpin.update(b => false);
    }
};
