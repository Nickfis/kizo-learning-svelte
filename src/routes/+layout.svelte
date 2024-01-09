<script>
	import Footer from '$components/Footer.svelte';
	import Header from '$components/Header.svelte';
	import '../app.css';
	import { inject } from '@vercel/analytics';
	import { dev } from '$app/environment';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<div>
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
