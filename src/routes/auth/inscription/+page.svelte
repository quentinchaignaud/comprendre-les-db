<div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
			S'inscrire
		</h2>
		<p class="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
			L'accès au cours est limité le temps du développement. Vous devez disposez d'une invitation
			reçue par mail. Si ce n'est pas le cas, vous pouvez vous inscrire sur
			<a
				href="/waitlist"
				class="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 hover:dark:text-indigo-300"
				>la liste d'attente.</a
			>
		</p>
	</div>

	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="bg-white dark:bg-gray-800 px-4 py-8 shadow sm:rounded-lg sm:px-10">
			<form action="?/register" method="POST" class="space-y-6">
				<div>
					<label
						for="name"
						class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
						>Pseudo</label
					>
					<div class="mt-2">
						<input
							id="name"
							name="name"
							type="text"
							autocomplete="name"
							required
							class="px-2 block dark:bg-gray-700 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 place dark:ring-gray-500 holder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indig5-600 sm:text-sm sm:leading-6 dark:text-white"
						/>
					</div>
				</div>
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
					<label
						for="password"
						class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
						>Confirmer le mot de passe</label
					>

					<div class="mt-2">
						<input
							id="passwordConfirm"
							name="passwordConfirm"
							type="password"
							required
							class="px-2 dark:bg-gray-700 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-white"
						/>
					</div>
				</div>
				<div>
					<button
						type="submit"
						class="mt-6 flex w-full justify-center rounded-md bg-indigo-600 dark:bg-indigo-700 hover:dark:bg-indigo-600 transition px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>S'inscrire</button
					>
				</div>
			</form>
		</div>
	</div>
</div>
