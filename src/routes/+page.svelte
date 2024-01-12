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
		content="Page to find current promotions, coupons and vouchers for all udemy courses created by Niklas Fischer."
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="google-site-verification" content="s1__Ew0K_CYpD78elxwGcGPd8JMxtHqqGRRY1BybETk" />
</svelte:head>
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
