<script lang="ts">
	import type { PageData } from './$types';
	import profilePicture from '$assets/profile-picture.jpeg';
	import PromotionCard from '$components/PromotionCard.svelte';
	import ProjectCard from '$components/ProjectCard.svelte';
	import Headline from '$components/Headline.svelte';
	import { validateEmail } from '$lib/utils/helper';
	import { addDoc, collection, db } from '$lib/utils/firebase';

	export let data: PageData;
	let email = '';
	let errorMessage = '';
	let subscribed = false;

	$: courses = data.courses || [];
	$: projects = data.projects || [];

	async function submitNewsletter(e: SubmitEvent) {
		e.preventDefault();
		if (email && validateEmail(email)) {
			try {
				await addDoc(collection(db, 'newsletterEmail'), { email });
				subscribed = true;
			} catch (err: any) {
				errorMessage = 'Could not subscribe to newsletter';
				subscribed = false;
			}
		} else {
			errorMessage = 'Please enter a valid email address.';
		}
	}
</script>

<Headline title="Mission" marginTop={'mt-16'} />
<div
	class="m-auto flex flex-col md:flex-row items-center md:justify-between px-16 mb-12 space-y-4 md:space-y-0 w-2/3 border-gray-300"
>
	<div class="md:w-2/3">
		<h1 class="leading-normal lg:leading-relaxed text-2xl">
			My goal is to make you <span class="font-bold">learn by doing</span>. In my courses you'll see
			<span class="font-bold">proven tools</span> that work in production, things I learned by
			<span class="font-bold">building them myself.</span>
		</h1>
		<p class="text-gray-700 mt-4">Niklas Fischer</p>
	</div>
	<img src={profilePicture} alt="Niklas Fischer" class="rounded-full h-48 w-48" />
</div>

<!-- Subscribe to newsletter -->
<div
	class="flex mx-16 px-6 py-4 rounded-lg justify-between bg-gray-100 mt-12 lg:w-3/4 lg:m-auto xl:w-2/3"
>
	{#if !subscribed}
		<div class="mr-32">
			<h3 class="text-xl font-bold mb-2">Subscribe to our newsletter</h3>
			<p>
				You'll only receive important updates when new courses are launched or any promotions are
				happening.
			</p>
		</div>
		<form class="mt-4 flex items-center" on:submit={submitNewsletter}>
			<input
				type="email"
				bind:value={email}
				placeholder="Email"
				class="px-4 py-3 border border-gray-300 rounded-l-md"
			/>
			<button type="submit" class="bg-pink-600 text-white px-4 py-3 rounded-r-md">Subscribe</button>
		</form>
	{:else}
		<div>
			<h1 class="text-xl">You've successfully signed up to our newsletter</h1>
		</div>
	{/if}
</div>

<Headline title="Promotions" />
<div class="m-auto flex flex-col items-center px-16 mb-12 space-y-4 md:space-y-0 w-2/3 mb-12">
	{#each courses as course}
		<PromotionCard item={course} />
	{/each}
</div>

<Headline title="Projects" />
<!-- Projects container -->
<div class="m-auto flex flex-col items-center px-16 mb-12 space-y-4 md:space-y-0 w-2/3 mb-12">
	{#each projects as project}
		<ProjectCard {project} />
	{/each}
</div>
