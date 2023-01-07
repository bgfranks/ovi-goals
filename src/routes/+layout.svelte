<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<Header />

<main
	class="bg-gray-900 h-screen text-white bg-ovi bg-cover bg-no-repeat bg-center overflow-hidden flex items-center justify-center"
>
	<slot />
</main>

<Footer />
