<script>
	import Footer from '$components/Footer.svelte';
	import Header from '$components/Header.svelte';
	import Analytics from '$components/Analytics.svelte';
	import '../app.css';
</script>

<Analytics />
<div>
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
