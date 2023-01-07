<script>
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<Header />
<main
	class="bg-gray-900 h-screen text-white bg-ovi bg-cover bg-no-repeat bg-center overflow-hidden"
>
	<slot />
</main>
