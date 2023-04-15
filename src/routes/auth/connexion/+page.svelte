<script lang="ts">
  export let form;
</script>

<div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
			Se connecter
		</h2>
		<p class="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
			L'accès au cours est limité le temps du développement. Vous pouvez vous inscrire sur
			<a
				href="/waitlist"
				class="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 hover:dark:text-indigo-300"
				>la liste d'attente.</a
			>
		</p>
	</div>

	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="bg-white dark:bg-gray-800 px-4 py-8 shadow sm:rounded-lg sm:px-10">
			<form action="?/login" method="POST" class="space-y-6">
				<div>
					<label
						for="email"
						class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
						>Adresse mail</label
					>
					<div class="mt-2">
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							required
							class="px-2 block dark:bg-gray-700 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 place dark:ring-gray-500 holder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indig5-600 sm:text-sm sm:leading-6 dark:text-white"
						/>
					</div>
				</div>

				<div>
					<label
						for="password"
						class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
						>Mot de passe</label
					>
					<div class="mt-2">
						<input
							id="password"
							name="password"
							type="password"
							autocomplete="current-password"
							required
							class="px-2 dark:bg-gray-700 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-white"
						/>
					</div>
				</div>
			
				<div>
					<button
						type="submit"
						class="mt-6 flex w-full justify-center rounded-md bg-indigo-600 dark:bg-indigo-700 hover:dark:bg-indigo-600 transition px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>Se connecter</button
					>
				</div>
        {#if form?.notVerified}
        <div class="rounded-md bg-red-50 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-red-800">Vous devez vérifier votre email afin de pouvoir vous connecter.</h3>
            </div>
          </div>
        </div>
        {/if}
			</form>
		</div>
	</div>
</div>
