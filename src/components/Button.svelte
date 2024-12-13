<script lang="ts">
	import type { ButtonType } from '../types';

	let { buttonType, buttonText, onClick } = $props<{
		buttonType: ButtonType;
		buttonText: string;
		onClick: () => void;
	}>();
</script>

<button
	onclick={onClick}
	aria-label={buttonType === 'reset' ? 'reset button' : 'submit button'}
	class="rounded-md p-4 {buttonType === 'reset'
		? 'bg-gray-300 text-black'
		: 'bg-green-500 text-white'}"
>
	{buttonText}
</button>
