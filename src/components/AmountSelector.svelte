<script lang="ts">
	let { options, onChange, value, label } = $props();
</script>

<div class="w-full">
	<label for={label} class="mb-1 block text-xl font-medium"> {label} </label>
	<select
		id={label}
		{value}
		onchange={(e) => onChange(Number(e.currentTarget.value))}
		class="w-full rounded-md border px-6 py-4 text-black"
	>
		{#each [0, ...options] as option}
			<option value={option}>{option}</option>
		{/each}
	</select>
</div>
