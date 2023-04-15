<script lang="ts">
    export let form
</script>

<div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
			Mot de passe oublié
		</h2>
		<p class="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
			Vous recevrez un mail de réinitialisation à l'adresse indiquée.
		</p>
	</div>

	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="bg-white dark:bg-gray-800 px-4 py-8 shadow sm:rounded-lg sm:px-10">
			<form action="?/resetPassword" method="POST" class="space-y-6">
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
					<button
						type="submit"
						class="flex w-full justify-center rounded-md bg-indigo-600 dark:bg-indigo-700 hover:dark:bg-indigo-600 transition px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>Envoyer un mail de récupération</button
					>
				</div>
                {#if form?.success}
                <div class="rounded-md bg-green-50 p-4">
                    <div class="flex">
                      <div class="flex-shrink-0">
                        <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <div class="ml-3">
                        <h3 class="text-sm font-medium text-green-800">Un e-mail a bien été envoyé.</h3>
                      </div>
                    </div>
                  </div>
                {/if}
			</form>
		</div>
	</div>
</div>
