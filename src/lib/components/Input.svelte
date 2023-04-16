<script lang="ts">
	export let value = '';
	export let placeholder = '';
	export let id = '';
	export let type: 'password' | 'text' | 'email' = 'text';
	export let name = '';
	export let disabled = false;
	export let required = false;
</script>

<input
	{id}
	{type}
	{value}
	{disabled}
	{required}
	{placeholder}
    {name}
	class="px-2 block dark:bg-gray-800 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 place dark:ring-gray-500 holder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indig5-600 sm:text-sm sm:leading-6 dark:text-gray-50"
/>
