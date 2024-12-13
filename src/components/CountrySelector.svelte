<script lang="ts">
	import { urlParams } from '../stores/urlParams';

	import { dailyAllowances } from '../dailyAllowances';

	const handleCountrySelector = (country: string) => {
		$urlParams.set('country', country);
	};
</script>

<select
	onchange={(e) => {
		const target = e.target as HTMLSelectElement;
		handleCountrySelector(target.value);
	}}
	value={$urlParams.get('country') || ''}
	class={'w-full rounded-md p-4 text-black'}
>
	<option value="">Please select a country</option>
	{#each dailyAllowances as country}
		<option value={country.name}>{country.name} {country.icon} - {country.allowance}€</option>
	{/each}
</select>
