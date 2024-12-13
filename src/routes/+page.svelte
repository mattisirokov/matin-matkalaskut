<script lang="ts">
	import { goto } from '$app/navigation';

	import CountrySelector from '../components/CountrySelector.svelte';
	import Button from '../components/Button.svelte';
	import DateSelector from '../components/DateSelector.svelte';
	import TextInput from '../components/TextInput.svelte';
	import AmountSelector from '../components/AmountSelector.svelte';

	import { urlParams } from '../stores/urlParams';

	let activeTab = 0;
	const tabs = ['Work trip inside Finland (km korvaus)', 'Work trip abroad'];

	const submit = () => {
		const name = $urlParams.get('person');
		const reasonForTrip = $urlParams.get('reason');
		const startingPoint = $urlParams.get('startingPoint');
		const country = $urlParams.get('country');
		const endDate = $urlParams.get('endDate');
		const startDate = $urlParams.get('startDate');
		const registerNumber = $urlParams.get('registerNumber');
		const distanceDriven = $urlParams.get('distanceDriven');
		const amountOfMeals = $urlParams.get('amountOfMeals');
		const peopleInCar = $urlParams.get('peopleInCar');

		goto(
			`/matkalasku?person=${name}&reason=${reasonForTrip}&startingPoint=${startingPoint}&country=${country}&startDate=${startDate}&endDate=${endDate}&registerNumber=${registerNumber}&distanceDriven=${distanceDriven}&amountOfMeals=${amountOfMeals}&peopleInCar=${peopleInCar}`
		);
	};
</script>

<div class="min-h-screen bg-gray-400 p-8 text-white">
	<div class="mb-12 text-center">
		<h1 class="mb-4 text-5xl font-bold">Matin matkalaskut</h1>
	</div>

	<div class="mx-auto mb-8 flex max-w-3xl justify-center rounded-full bg-gray-600 p-1">
		{#each tabs as tab, index}
			<button
				class="flex-1 rounded-full px-6 py-2 transition-colors {activeTab === index
					? 'bg-gray-800 text-white'
					: 'text-gray-200 hover:bg-gray-700'}"
				on:click={() => (activeTab = index)}
			>
				{tab}
			</button>
		{/each}
	</div>

	<div class="tab-content">
		<!-- Work trip inside Finland (km korvaus) -->
		{#if activeTab === 0}
			<div class="mx-auto max-w-3xl rounded-lg bg-gray-800 p-8">
				<div class="mb-8 flex gap-8">
					<TextInput label="Name of person" placeholder="Matti Meikäläinen" urlParam="person" />
					<TextInput label="Reason for trip" placeholder="Messut in Helsinki" urlParam="reason" />
				</div>
				<div class="mb-4 mt-2">
					<TextInput
						label="Trip starting point"
						placeholder="Satamakatu 17, C15, 33200, Tampere"
						urlParam="startingPoint"
					/>
				</div>
				<div class="mb-8 flex flex-row justify-center gap-8">
					<DateSelector selectorType={'startDate'} />
					<DateSelector selectorType={'endDate'} />
				</div>
				<div class="mb-4 mt-2 flex flex-row gap-4">
					<TextInput
						label="Car registration number"
						placeholder="ABC-123"
						urlParam="registerNumber"
					/>
					<TextInput label="Kilometers driven" placeholder="80" urlParam="distanceDriven" />
					<AmountSelector
						options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
						onChange={(e: any) => {
							$urlParams.set('peopleInCar', e);
						}}
						value={Number($urlParams.get('peopleInCar'))}
						label={'Amount of people in car'}
					/>
				</div>

				<div class="mb-8">
					<AmountSelector
						options={[1, 2]}
						onChange={(e: any) => {
							$urlParams.set('amountOfMeals', e);
						}}
						value={Number($urlParams.get('amountOfMeals'))}
						label={'Amount of meals provided'}
					/>
				</div>
				<div class="mt-10 flex justify-center gap-4">
					<Button
						buttonType="reset"
						buttonText="Reset form"
						onClick={() => {
							$urlParams.clear();
						}}
					/>
					<Button
						buttonType="submit"
						buttonText="Create matkalasku"
						onClick={() => {
							submit();
						}}
					/>
				</div>
			</div>
		{:else if activeTab === 1}
			<!-- Work trip abroad -->
			<div class="mx-auto max-w-3xl rounded-lg bg-gray-800 p-8">
				<div class="mb-8 flex gap-8">
					<TextInput label="Name of person" placeholder="Matti Meikäläinen" urlParam="person" />
					<TextInput label="Reason for trip" placeholder="Messut in Helsinki" urlParam="reason" />
				</div>
				<div class="mb-4 mt-2">
					<TextInput
						label="Trip starting point"
						placeholder="Satamakatu 17, C15, 33200, Tampere"
						urlParam="startingPoint"
					/>
				</div>
				<div class="mb-8 flex flex-row justify-center gap-8">
					<DateSelector selectorType={'startDate'} />
					<DateSelector selectorType={'endDate'} />
				</div>
				<div class="mb-8 flex items-center gap-4">
					<div class="flex-1">
						<h3 class="mb-2 text-xl">Country</h3>
						<CountrySelector />
					</div>
				</div>
				<div class="mt-10 flex justify-center gap-4">
					<Button
						buttonType="reset"
						buttonText="Reset form"
						onClick={() => {
							$urlParams.clear();
						}}
					/>
					<Button
						buttonType="submit"
						buttonText="Create matkalasku"
						onClick={() => {
							submit();
						}}
					/>
				</div>
			</div>
		{/if}
	</div>
</div>
