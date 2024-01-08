<script lang="ts">
	import profilePicture from '$assets/profile-picture.jpeg';
	import courseThumbnail from '$assets/course_thumbnail.jpeg';
</script>

<!-- Headline -->
<div class="mx-16 mt-16">
	<h2 class="font-bold text-3xl mb-2">Mission</h2>
	<div class="w-16 h-1 bg-pink-600 mb-6" />
</div>
<!-- Mission Statement -->
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
	<div class="mr-32">
		<h3 class="text-xl font-bold mb-2">Subscribe to our newsletter</h3>
		<p>
			You'll only receive important updates when new courses are launched or any promotions are
			happening.
		</p>
	</div>
	<form class="mt-4 flex items-center">
		<input type="email" placeholder="Email" class="px-4 py-3 border border-gray-300 rounded-l-md" />
		<button type="submit" class="bg-pink-600 text-white px-4 py-3 rounded-r-md">Subscribe</button>
	</form>
</div>

<!-- Headline -->
<div class="mx-16 mt-16">
	<h2 id="promotions" class="font-bold text-3xl mb-2">Promotions</h2>
	<div class="w-16 h-1 bg-pink-600 mb-6" />
</div>

<!-- Promotion Voucher Container -->
<div class="m-auto flex flex-col items-center px-16 mb-12 space-y-4 md:space-y-0 w-2/3 mb-12">
	<!-- Promotion Card -->
	<div class="flex border-b border-gray-300 items-center justify-center">
		<img src={courseThumbnail} alt="Course Thumbnail" class="w-1/2" />
		<div class="p-8">
			<h3 class="text-2xl mb-12 font-semibold">
				The Freelance Stack: Real project with NextJS13 and Strapi
			</h3>
			<p class="text-xl font-semibold text-pink-600">Voucher Code:</p>
			<div class="flex">
				<p class="text-xl mr-2 font-bold">Discounted Price</p>
				<p class="text-lg text-gray-700 line-through">Original Price</p>
			</div>
		</div>
	</div>
</div>
