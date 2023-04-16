<script lang="ts">
    export let text = '';
    export let color = 'indigo-600'
    export let type : ('submit' | 'button') = 'submit'
</script>

<button
	type={type}
	class="ml-2 rounded-md bg-{color} px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-{color} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
	>{text}</button
>
