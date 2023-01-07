<script lang="ts">
	type Data = {
		totalGoals: number;
	};

	export let data: Data;

	$: ({ totalGoals } = data);
</script>

<div
	class="text-center w-[80%] md:w-[60%] h-[60%] px-10 py-10 bg-black bg-opacity-50 rounded-lg backdrop-blur-sm flex flex-col gap-4 justify-center"
>
	<h3 class="text-3xl md:text-4xl text-gray-200 font-bold">Ovi Goals</h3>
	<span class="logo text-8xl md:text-[10rem] font-bold">{totalGoals}</span>
	<p class="text-xl text-gray-200">{894 - totalGoals} goals until #1</p>
</div>
