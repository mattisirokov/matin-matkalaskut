import { derived } from 'svelte/store';

import { page } from '$app/stores';
import { goto } from '$app/navigation';

export interface UrlParams {
	person: string | null;
	reason: string | null;
	startingPoint: string | null;
	country: string | null;
	endDate: string | null;
	startDate: string | null;
	registerNumber: string | null;
	distanceDriven: string | null;
	amountOfMeals: string | null;
	peopleInCar: string | null;
};

export const urlParams = derived(page, ($page) => ({
	get: (key: keyof UrlParams) => $page.url.searchParams.get(key),

	set: (key: keyof UrlParams, value: string) => {
		const url = new URL($page.url);
		url.searchParams.set(key, value);
		return goto(`?${url.searchParams.toString()}`);
	},

	delete: (key: keyof UrlParams) => {
		const url = new URL($page.url);
		url.searchParams.delete(key);
		return goto(`?${url.searchParams.toString()}`);
	},

	getAll: () => Object.fromEntries($page.url.searchParams.entries()),

	clear: () => {
		return goto('/');
	}
}));
