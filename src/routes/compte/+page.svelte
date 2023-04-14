<script lang="ts">
    import { currentUser, token, pb } from "$lib/pocketbase";
    import { goto } from '$app/navigation';
    import {browser} from '$app/environment';
	import Alert from "../../components/alert.svelte";

	let notificationActivated : boolean;
    let showAlert = false;

    $: {
        if(browser && $currentUser == null){
            goto(`/auth/connexion`) 
        }
    }

    let resetPassword = async () => {
        await pb.collection('users').confirmPasswordReset($token, '1234567890', '1234567890');
    }
</script>

<div class="py-24 sm:py-32 min-h-screen text-gray-900 dark:text-gray-50">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">Compte</h2>
        </div>
        <form>
        <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-4 lg:col-span-6">
                        <label for="pseudo" class="block text-sm font-medium leading-6">Changer le pseudo</label>
                        <div class="mt-2 flex flex-row">
                        <input id="pseudo" name="pseudo" type="text" autocomplete="pseudo" class="px-2 block dark:bg-gray-800 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 place dark:ring-gray-500 holder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indig5-600 sm:text-sm sm:leading-6 dark:text-white">
                        <button type="button" class="ml-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sauvegarder</button>
                        </div>
                    </div>
                    <div class="sm:col-span-4 lg:col-span-6">
                        <label for="email" class="block text-sm font-medium leading-6">Changer l'adresse mail</label>
                        <div class="mt-2 flex flex-row">
                        <input id="email" name="email" type="email" autocomplete="email" class="px-2 block dark:bg-gray-800 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 place dark:ring-gray-500 holder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indig5-600 sm:text-sm sm:leading-6 dark:text-white">
                        <button type="button" class="ml-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sauvegarder</button>
                        </div>
                    </div>
                    <div class="sm:col-span-4 lg:col-span-6">
                        <label for="password" class="block text-sm font-medium leading-6">Changer le mot de passe</label>
                        <div class="mt-2 flex flex-row">
                            <input id="password" name="password" type="password" autocomplete="password" class="px-2 mx-1 block dark:bg-gray-800 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 place dark:ring-gray-500 holder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indig5-600 sm:text-sm sm:leading-6 dark:text-white">
                        <button on:click={resetPassword} type="button" class="ml-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sauvegarder</button>
                        </div>
                    </div>
                </div>
            </div>
        
            <div class="border-b border-gray-900/10 pb-12">
                <div class="flex items-center justify-between">
                    <span class="flex flex-grow flex-col">
                    <span class="text-sm font-medium leading-6" id="availability-label">Notification</span>
                    <span class="text-sm text-gray-500 dark:text-gray-300" id="availability-description">Je souhaite recevoir des updates sur le cours :</span>
                    </span>
                    <button on:click={() => notificationActivated = !notificationActivated} type="button" class={`${notificationActivated ? "bg-indigo-600 dark:bg-indigo-500" : "bg-gray-200 dark:bg-gray-300"} relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2`} role="switch" aria-checked="false" aria-labelledby="availability-label" aria-describedby="availability-description">
                    <span aria-hidden="true" class={`${notificationActivated ? "translate-x-5" : "translate-x-0"} translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}></span>
                    </button>
                </div>
                <div class="flex items-center justify-between mt-10">
                    <span class="flex flex-grow flex-col">
                    <span class="text-sm font-medium leading-6" id="availability-label">Supprimer le compte</span>
                    <span class="text-sm text-gray-500 dark:text-gray-300" id="availability-description">Toute suppression est définitive.</span>
                    </span>
                    <button on:click={() => showAlert = !showAlert} type="button" class="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700">Supprimer le compte</button>
                </div>
                {#if showAlert}
                    <Alert bind:quit={showAlert} />
                {/if}
            </div>
        </div>
    </form>
    </div>
    </div>
</div>