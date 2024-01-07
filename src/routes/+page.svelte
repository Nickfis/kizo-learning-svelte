<script lang="ts">
</script>

<div class="flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
	<div class="md:w-1/2">
		<h1 class="font-bold text-2xl">Mission Statement</h1>
		<p class="text-gray-700 mt-2">
			Briefly describe your mission and the goals of your platform here.
		</p>
		<form class="mt-4">
			<input
				type="email"
				placeholder="Sign up for our newsletter!"
				class="px-4 py-2 border border-gray-300 rounded-md"
			/>
			<button type="submit" class="ml-2 bg-pink-600 text-white px-4 py-2 rounded-md">
				Subscribe
			</button>
		</form>
	</div>
	<div class="md:w-1/2 flex flex-col items-center">
		<!-- <img src="/your-picture.jpg" alt="Your Name" class="rounded-full h-48 w-48" /> -->
		<span class="mt-2 text-lg">Your Name</span>
	</div>
</div>
<div class="mt-10">
	<h2 class="font-bold text-xl mb-6">Promotions</h2>
	<!-- Replace this part with your promotions component -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		<!-- Example of a single promotion card -->
		<div class="border border-gray-300 rounded-lg p-4 flex flex-col items-center">
			<!-- <img src="/course-thumbnail.jpg" alt="Course Thumbnail" class="mb-4" /> -->
			<h3 class="text-lg font-semibold">Course Title</h3>
			<p class="text-pink-600">Voucher Code</p>
			<p class="text-gray-700 line-through">Original Price</p>
			<p class="font-bold">Discounted Price</p>
		</div>
		<!-- Repeat for other courses -->
	</div>
</div>
