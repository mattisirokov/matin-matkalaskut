<script lang="ts">
	import { urlParams } from '../../stores/urlParams';
	import { allowanceCalculations } from '../../stores/allowanceCalculations';

	import { dailyAllowances } from '../../dailyAllowances';

	import Printable from '../../components/Printable.svelte';

	const props = {
		country: $urlParams.get('country'),
		startDate: $urlParams.get('startDate'),
		endDate: $urlParams.get('endDate'),
		person: $urlParams.get('person'),
		reason: $urlParams.get('reason'),
		startingPoint: $urlParams.get('startingPoint'),
		registerNumber: $urlParams.get('registerNumber'),
		distanceDriven: $urlParams.get('distanceDriven'),
		amountOfMeals: $urlParams.get('amountOfMeals'),
		peopleInCar: $urlParams.get('peopleInCar'),
		totalDays: $allowanceCalculations.calculateTimeBetweenDates(
			$urlParams.get('startDate'),
			$urlParams.get('endDate')
		),
		allowance: $allowanceCalculations.getCurrentCountryAllowance($urlParams.get('country') || '', [
			...dailyAllowances
		]),
		get totalPayout() {
			return $allowanceCalculations.calculateInternationalAllowance(this.totalDays, this.allowance);
		}
	};
</script>

<Printable {...props} />
