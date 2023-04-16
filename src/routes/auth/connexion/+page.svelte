<script lang="ts">
	import Input from '../../../components/Input.svelte';
	import Label from '../../../components/Label.svelte';
	import Alert from '../../../components/Alert.svelte';
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

	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md text-gray-900 dark:text-gray-50">
		<div class="bg-white dark:bg-gray-800 px-4 py-8 shadow sm:rounded-lg sm:px-10">
			<form action="?/login" method="POST" class="space-y-6">
				<div>
					<Label forId="email" text="Adresse mail" />
					<div class="mt-2">
						<Input name="email" id="email" type="email" />
					</div>
				</div>

				<div>
					<Label forId="password" text="Mot de passe" />
					<div class="mt-2">
						<Input name="password" id="password" type="password" />
					</div>
				</div>

				<div>
					<button
						type="submit"
						class="mt-6 flex w-full justify-center rounded-md bg-indigo-600 dark:bg-indigo-700 hover:dark:bg-indigo-600 transition px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>Se connecter</button
					>
				</div>
				{#if true}
					<Alert
						type="error"
						text="Vous devez vérifier votre email afin de pouvoir vous connecter."
					/>
				{/if}
			</form>
		</div>
	</div>
</div>
