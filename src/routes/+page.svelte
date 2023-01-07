<script lang="ts">
	type Data = {
		totalGoals: number;
	};

	export let data: Data;

	$: ({ totalGoals } = data);
</script>

<h1 class="text-2xl">Ovi Goals</h1>
<p>{totalGoals}</p>
