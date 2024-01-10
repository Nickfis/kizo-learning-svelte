<script lang="ts">
	import type { Project } from '$lib/types';
	export let project: Project;
</script>

<div class="flex flex-col sm:flex-row border-b border-gray-300 items-center justify-center">
	<img src={project.thumbnail} alt="YouTube Thumbnail" class="sm:w-1/2" />
	<div class="py-4 sm:p-8">
		<h3 class="text-xl lg:text-2xl mb-4 sm:mb-12 font-semibold">
			Building a Bookshelf Scanner with AI in 36 Hours!
		</h3>
		<a
			href={project.videoLink}
			target="_blank"
			rel="noreferrer"
			class="text-xl font-semibold text-pink-600">Check out the video</a
		>
		{#if project.sourceCode}
			<a href={project.sourceCode} class="block text-xl mr-2 font-bold">Source Code</a>
		{/if}
	</div>
</div>
