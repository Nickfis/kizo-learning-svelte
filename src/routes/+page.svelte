<script lang="ts">
	import type { PageData } from './$types';
	import profilePicture from '$assets/profile-picture.jpeg';
	import PromotionCard from '$components/PromotionCard.svelte';
	import ProjectCard from '$components/ProjectCard.svelte';
	import Headline from '$components/Headline.svelte';
	import SubscribeNewsletter from '$components/SubscribeNewsletter.svelte';

	export let data: PageData;
	$: courses = data.courses || [];
	$: projects = data.projects || [];
</script>

<svelte:head>
	<title>KIZO Learning | Promotions & Projects</title>
	<meta
		name="description"
		content="Page to find current promotions, coupons and vouchers for all udemy courses created by Niklas Fischer, including vouchers for the new (and so far only) Svelte 5 course out there."
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="google-site-verification" content="s1__Ew0K_CYpD78elxwGcGPd8JMxtHqqGRRY1BybETk" />
</svelte:head>
<Headline title="News" marginTop={'mt-16'} />
<div
	class="m-auto flex flex-col md:flex-row items-center md:justify-between px-16 mb-12 space-y-4 md:space-y-0 lg:w-2/3 border-gray-300"
>
	<div class="md:mr-12 md:w-2/3">
		<h1 class="leading-normal lg:leading-relaxed text-2xl font-bold">
			🚀 New Course Launch: Master Svelte 5 & SvelteKit – Build Real-World Apps 🚀
		</h1>
		<p class="mt-4 text-gray-700 text-lg">
			I’m excited to announce the release of my latest course,
			<span class="font-bold">"Master Svelte 5 & SvelteKit – Build & Deploy Real-World Apps"!</span>
			This course is one of the first to cover the brand-new
			<span class="font-bold">Svelte 5</span> syntax, helping you stay ahead of the curve. If you've
			been waiting for the right time to dive into Svelte, now’s your chance!
		</p>
		<p class="mt-4 text-gray-700">
			Get hands-on experience by building real-world projects, from a Stripe-integrated landing page
			to a fully functional app with
			<span class="font-bold">Supabase</span> authentication and
			<span class="font-bold">OpenAI</span> integration. You’ll learn everything from scratch with practical,
			project-based lessons designed to get you building fast.
		</p>
		<p class="mt-4 text-gray-700 font-bold">🎉 You can get the course discounted here: 🎉</p>
		<p class="mt-2 text-gray-700">
			Use this link to get the course for $9.99:
			<a
				href="https://www.udemy.com/course/practical-sveltekit-guide-build-and-deploy-real-world-apps/?couponCode=SVELTE5-KIZO"
				class="block text-blue-600 underline"
				>Master Svelte 5 & SvelteKit – Build & Deploy Real-World Apps</a
			>
		</p>
	</div>
</div>

<Headline title="Mission" marginTop={'mt-16'} />
<div
	class="m-auto flex flex-col md:flex-row items-center md:justify-between px-16 mb-12 space-y-4 md:space-y-0 lg:w-2/3 border-gray-300"
>
	<div class="md:mr-12 md:w-2/3">
		<h1 class="leading-normal lg:leading-relaxed text-2xl">
			My goal is to make you <span class="font-bold">learn by doing</span>. In my courses you'll see
			<span class="font-bold">proven tools</span> that work in production, things I learned by
			<span class="font-bold">building them myself.</span>
		</h1>
		<p class="text-gray-700 mt-4">Niklas Fischer</p>
	</div>
	<img src={profilePicture} alt="Niklas Fischer" class="rounded-full h-48 w-48" />
</div>

<SubscribeNewsletter />

<Headline title="Promotions" id="promotions" />
<div
	class="m-auto px-16 md:px-0 flex flex-col items-center mb-12 space-y-4 md:space-y-0 md:w-[70%] lg:w-2/3"
>
	{#each courses as course}
		<PromotionCard item={course} />
	{/each}
</div>

<Headline title="Projects" id="projects" />
<div
	class="m-auto px-16 md:px-0 flex flex-col items-center mb-12 space-y-4 md:space-y-0 md:w-[70%] lg:w-2/3"
>
	{#each projects as project}
		<ProjectCard {project} />
	{/each}
</div>
