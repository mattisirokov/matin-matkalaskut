<script lang="ts">
	import { urlParams } from '../stores/urlParams';

	let { label, placeholder, urlParam }: { label: string; placeholder: string; urlParam: string } =
		$props();

	let value = $derived($urlParams.get(urlParam) || '');

	function handleInput(e: any) {
		const newValue = e.target.value;

		if (newValue) {
			$urlParams.set(urlParam, newValue);
		} else {
			$urlParams.delete(urlParam);
		}
	}
</script>

<div class="w-full">
	<label for={label} class="mb-1 block text-xl font-medium"> {label} </label>
	<input
		id={label}
		type="text"
		onchange={handleInput}
		{value}
		{placeholder}
		class="w-full rounded-md border px-6 py-4 text-black"
	/>
</div>
