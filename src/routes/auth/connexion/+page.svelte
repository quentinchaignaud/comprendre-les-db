<script lang="ts">
  import { pb } from "$lib/pocketbase";
  import { goto } from '$app/navigation';

  let username : string;
  let password : string;
  let fail : string;

  async function login() {
    await pb.collection('users').authWithPassword(username, password)
    .then(() =>
      goto(`/cours`) 
    ).catch((e) => fail = `Echec de l'authentification.`)
  }
</script>

<div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Se connecter</h2>
    <p class="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
      L'accès au cours est limité le temps du développement. Vous pouvez vous inscrire sur 
      <a href="/waitlist" class="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 hover:dark:text-indigo-300">la liste d'attente.</a>
    </p>
  </div>

  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white dark:bg-gray-800 px-4 py-8 shadow sm:rounded-lg sm:px-10">
      <form on:submit|preventDefault class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">Adresse mail</label>
          <div class="mt-2">
            <input bind:value={username} id="email" name="email" type="email" autocomplete="email" required class="px-2 block dark:bg-gray-700 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 place dark:ring-gray-500 holder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indig5-600 sm:text-sm sm:leading-6 dark:text-white">
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">Mot de passe</label>
          <div class="mt-2">
            <input bind:value={password} id="password" name="password" type="password" autocomplete="current-password" required class="px-2 dark:bg-gray-700 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-white">
          </div>
        </div>

        <div class="text-sm">
          <a href="/auth/mot-de-passe-oublie" class="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 hover:dark:text-indigo-300">Mot de passe oublié?</a>
        </div>
        <div>
          <button on:click={login} type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 dark:bg-indigo-700 hover:dark:bg-indigo-600 transition px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Se connecter</button>
        </div>
        {#if fail != undefined}
        <p class="text-sm text-red-600">{fail}</p>
        {/if}
      </form>
        </div>
      </div>
</div>
