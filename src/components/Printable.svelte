<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import Button from './Button.svelte';

	let {
		person,
		reason,
		startingPoint,
		country,
		startDate,
		endDate,
		registerNumber,
		distanceDriven,
		amountOfMeals,
		peopleInCar,
		totalDays,
		allowance,
		totalPayout
	} = $props();
</script>

<div class="a4-paper mx-auto my-8 max-w-2xl bg-white p-8">
	<div class="mb-8 text-center">
		<h1 class="text-3xl font-bold">Travel Expense Report</h1>
		<p class="text-gray-600">Generated on {new Date().toLocaleDateString()}</p>
	</div>

	<div class="mb-6 text-center">
		<p class="text-gray-600">Prepared for</p>
		<p class="text-xl font-semibold">{person || 'Unknown Person'}</p>
	</div>

	<div class="space-y-6">
		<div class="grid grid-cols-2 gap-4">
			<div class="border-b pb-2">
				<p class="text-gray-600">Start Date</p>
				<p class="font-semibold">{startDate}</p>
				˜
			</div>
			<div class="border-b pb-2">
				<p class="text-gray-600">End Date</p>
				<p class="font-semibold">{endDate}</p>
			</div>
		</div>

		<div class="grid grid-cols-2 gap-4">
			<div class="border-b pb-2">
				<p class="text-gray-600">Starting Point</p>
				<p class="font-semibold">{startingPoint || 'Not specified'}</p>
			</div>
			<div class="border-b pb-2">
				<p class="text-gray-600">Register Number</p>
				<p class="font-semibold">{registerNumber || 'Not specified'}</p>
			</div>
		</div>

		{#if country !== 'null'}
			<div class="border-b pb-2">
				<p class="text-gray-600">Country</p>
				<p class="font-semibold">{country}</p>
			</div>
		{/if}

		<div class="border-b pb-2">
			<p class="text-gray-600">Reason for Trip</p>
			<p class="font-semibold">{reason || 'Not specified'}</p>
		</div>

		<div class="grid grid-cols-2 gap-4">
			<div class="border-b pb-2">
				<p class="text-gray-600">Distance Driven</p>
				<p class="font-semibold">{distanceDriven || 0} km</p>
			</div>
			<div class="border-b pb-2">
				<p class="text-gray-600">People in Car</p>
				<p class="font-semibold">{peopleInCar || 1}</p>
			</div>
		</div>

		<div class="border-b pb-2">
			<p class="text-gray-600">Amount of Meals</p>
			<p class="font-semibold">{amountOfMeals || 0}</p>
		</div>

		<div class="border-b pb-2">
			<p class="text-gray-600">Daily Allowance</p>
			<p class="font-semibold">{allowance}€</p>
		</div>

		<div class="mt-8 pt-4">
			<div class="flex items-center justify-between">
				<p class="text-lg">Total Days:</p>
				<p class="text-lg font-semibold">{totalDays}</p>
			</div>
			<div class="mt-2 flex items-center justify-between">
				<p class="text-xl font-bold">Total Payout:</p>
				<p class="text-xl font-bold">{totalPayout}€</p>
			</div>
		</div>
	</div>
	<div class="print-hide mt-8 flex justify-between">
		<Button
			buttonType="reset"
			buttonText="Edit"
			onClick={() => {
				goto(`/?${$page.url.searchParams.toString()}`);
			}}
		/>
		<Button
			buttonType="submit"
			buttonText="Print"
			onClick={() => {
				window.print();
			}}
		/>
	</div>
</div>

<style>
	@media print {
		:global(.print-hide) {
			display: none;
		}
	}

	.a4-paper {
		width: 210mm;
		min-height: 297mm;
		padding: 20mm;
		margin: 0 auto;
	}

	@page {
		size: A4;
		margin: 0;
	}
</style>
