import PocketBase from 'pocketbase';

import { writable } from 'svelte/store';

export const pb = new PocketBase('https://comprendre-les-bases-de-donnees.quentinchaignaud.com');

export const currentUser = writable(pb.authStore.model)
export const token = writable<string>()

pb.authStore.onChange((auth) => {
    currentUser.set(pb.authStore.model)
    token.set(pb.authStore.token)
})