<script lang="ts">
	import { Input, Label, Alert, Button, Link } from '$lib/components';
</script>

<div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
			Se connecter
		</h2>
		<p class="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
			L'accès au cours est limité le temps du développement. Vous pouvez vous inscrire sur
			<Link url="/waitlist" text="la liste d'attente." />
		</p>
	</div>

	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="bg-white dark:bg-gray-800 px-4 py-8 shadow sm:rounded-lg sm:px-10">
			<form action="?/login" method="POST" class="space-y-6">
				<div>
					<Label forId="email" text="Adresse mail" />
					<div class="mt-2">
						<Input id="email" type="email" />
					</div>
				</div>

				<div>
					<Label forId="password" text="Mot de passe" />
					<div class="mt-2">
						<Input id="password" type="password" />
					</div>
				</div>
				<div class="text-sm">
					<Link url="/auth/changer-mot-de-passe" text="Mot de passe oublié?" />
				</div>
				<div>
					<Button text="Se connecter" />
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
