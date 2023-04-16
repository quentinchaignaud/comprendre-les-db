<script lang="ts">
	export let notificationActivated: boolean;
</script>

<button
	on:click={() => (notificationActivated = !notificationActivated)}
	type="button"
	class={`${
		notificationActivated ? 'bg-indigo-600 dark:bg-indigo-500' : 'bg-gray-200 dark:bg-gray-300'
	} relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2`}
	role="switch"
	aria-checked="false"
	aria-labelledby="availability-label"
	aria-describedby="availability-description"
>
	<span
		aria-hidden="true"
		class={`${
			notificationActivated ? 'translate-x-5' : 'translate-x-0'
		} translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
	/>
</button>
