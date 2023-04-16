<script lang="ts">
	import { Alert, Button } from '$lib/components';

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
					<Button text="Envoyer un mail de récupération" />
				</div>
                {#if form?.success}
					<Alert type="success" text="Un e-mail a bien été envoyé." />
                {/if}
			</form>
		</div>
	</div>
</div>
