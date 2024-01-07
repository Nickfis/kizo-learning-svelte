<script>
	import Footer from '$components/Footer.svelte';
	import Header from '$components/Header.svelte';
	import '../app.css';
</script>

<div>
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
