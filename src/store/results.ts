import { writable, Writable } from "svelte/store"

export interface ResultBoule {
    id: string;
    num: string;
    distance: number;
}

const customResults:Writable<ResultBoule[]> = writable([]);

export const resultsBoule = {
    subscribe: customResults.subscribe,

    addResult: (result: {num: string, distance: number}) => {
        const newResult = {
            ...result,
            id:Math.random().toString()
        };
        customResults.update(r => {
            return [newResult, ...r];
        });
    }
};
