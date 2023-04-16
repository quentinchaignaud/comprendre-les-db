<script lang="ts">
	import Alert from '../../components/Alert.svelte';
	import Button from '../../components/Button.svelte';
	import Input from '../../components/Input.svelte';
	import Label from '../../components/Label.svelte';
	import Switch from '../../components/Switch.svelte';

	let showAlert = false;
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
							<form action="?/updateUsername" method="POST" class="sm:col-span-4 lg:col-span-6">
								<Label forId="username" text="Changer le pseudo" />
								<div class="mt-2 flex flex-row">
									<Input id="username" type="text" />
									<Button text="Sauvegarder" />
								</div>
							</form>
							<form action="?/updateMail" method="POST" class="sm:col-span-4 lg:col-span-6">
								<Label forId="email" text="Changer l'adresse mail" />
								<div class="mt-2 flex flex-row">
									<Input id="email" type="email" />
									<Button text="Sauvegarder" />
								</div>
							</form>
							<div class="sm:col-span-4 lg:col-span-6">
								<Label forId="password" text="Changer le mot de passe" />
								<div class="mt-2 flex flex-row">
									<Input id="password" type="password" />
									<Button text="Sauvegarder" />
								</div>
							</div>
						</div>
					</div>

					<div class="border-b border-gray-900/10 pb-12">
						<div class="flex items-center justify-between">
							<span class="flex flex-grow flex-col">
								<Label text="Notification" />
								<span class="text-sm text-gray-500 dark:text-gray-300" id="availability-description"
									>Je souhaite recevoir des updates sur le cours :</span
								>
							</span>
							<Switch notificationActivated />
						</div>
						<div class="flex items-center justify-between mt-10">
							<span class="flex flex-grow flex-col">
								<Label text="Supprimer le compte" />
								<span class="text-sm text-gray-500 dark:text-gray-300" id="availability-description"
									>Toute suppression est définitive.</span
								>
							</span>
							<Button
								on:click={() => (showAlert = !showAlert)}
								type="button"
								color="red-600"
								text="Supprimer le compte"
							/>
						</div>
						{#if showAlert}
							<!-- <Alert bind:quit={showAlert} /> -->
						{/if}
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
