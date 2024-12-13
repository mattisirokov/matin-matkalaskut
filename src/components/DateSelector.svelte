<script lang="ts">
	import { urlParams } from '../stores/urlParams';
	import AmountSelector from './AmountSelector.svelte';

	import type { DateSelectorType } from '../types';

	let { selectorType }: { selectorType: 'startDate' | 'endDate' } = $props();

	const handleDateChange = (date: string, time: string, type: DateSelectorType) => {
		const dateTime = `${date}T${time}`;
		$urlParams.set(type, dateTime);
	};

	const currentDateTime = new Date().toISOString();
	const currentDate = currentDateTime.split('T')[0];
	const currentTime = currentDateTime.split('T')[1].substring(0, 5);
</script>

<div class="flex w-full flex-col gap-2">
	<label for="date-select" class="mb-1 block text-xl font-medium"
		>{selectorType === 'startDate'
			? 'Select start date and time'
			: 'Select end date and time'}</label
	>
	<div class="flex gap-2">
		<input
			type="date"
			id="date-select"
			value={$urlParams.get(selectorType)?.split('T')[0] || currentDate}
			onchange={(e) => {
				const target = e.target as HTMLInputElement;
				const timeInput = e.currentTarget.nextElementSibling as HTMLInputElement;
				handleDateChange(target.value, timeInput.value, selectorType);
			}}
			class="flex-1 rounded border p-4 text-black"
		/>
		<input
			type="time"
			id="time-select"
			step="60"
			value={$urlParams.get(selectorType)?.split('T')[1]?.substring(0, 5) || currentTime}
			onchange={(e) => {
				const target = e.target as HTMLInputElement;
				const dateInput = e.currentTarget.previousElementSibling as HTMLInputElement;
				handleDateChange(dateInput.value, target.value, selectorType);
			}}
			class="rounded border p-4 text-black"
		/>
	</div>
</div>
