import { derived } from 'svelte/store';

export const allowanceCalculations = derived([], () => {
	// Constants for the calculations 2024 rendition:

	const FINNISH_KILOMETER_ALLOWANCE = 0.57;
	const FINNISH_MEAL_ALLOWANCE = 10;
	const FINNISH_DAILY_ALLOWANCE = 53;

	return {
		// Get the number of days between two dates (ie. start and end date)
		calculateTimeBetweenDates: (startDate: string | null, endDate: string | null): number => {
			if (!startDate || !endDate) return 0;
			const startDateTime = new Date(startDate);
			const endDateTime = new Date(endDate);
			const timeDiff = endDateTime.getTime() - startDateTime.getTime();
			const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
			return daysDiff + 1;
		},

		// Get the allowance for the current country
		getCurrentCountryAllowance: (
			country: string,
			dailyAllowances: Array<{ name: string; allowance: number }>
		) => {
			return dailyAllowances.find((c) => c.name === country)?.allowance ?? FINNISH_DAILY_ALLOWANCE;
		},

		// Total payout is the total days * country allowance
		calculateInternationalAllowance: (totalDays: number, countryAllowance: number) => {
			return totalDays * countryAllowance;
		},

		// KM korvaus, 0.57€ per km
		calculateKilometerAllowance: (distanceDriven: string | null) =>
			Number(distanceDriven ?? 0) * FINNISH_KILOMETER_ALLOWANCE,

		// Meal comp, 10€ per day
		calculateMealAllowance: (totalDays: number, mealsProvided: number) =>
			totalDays * FINNISH_MEAL_ALLOWANCE - mealsProvided
	};
});
