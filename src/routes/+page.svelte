<script lang="ts">
	type Data = {
		totalGoals: number;
	};

	export let data: Data;

	$: ({ totalGoals } = data);
</script>

<div class="text-center absolute bg-black bg-opacity-50 px-40 py-28 rounded-lg backdrop-blur-sm">
	<h3 class="text-2xl text-gray-200 pb-5 font-bold">Ovi Goals</h3>
	<span class="text-6xl font-bold">{totalGoals}</span>
	<p class="text-lg pt-5 text-gray-200">{894 - totalGoals} goals until #1</p>
</div>
