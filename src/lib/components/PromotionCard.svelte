<script lang="ts">
	import type { Course } from '$lib/types';
	export let item: Course;

	$: console.log(item);
</script>

<a
	href={item.linkWithPromoCode}
	target="_blank"
	rel="noreferrer"
	class="flex border-b border-gray-300 items-center justify-center"
>
	<img src={item.thumbnail} alt="Go to course" class="w-1/2" />
	<div class="p-8">
		<h3 class="text-2xl mb-12 font-semibold">
			The Freelance Stack: Real project with NextJS13 and Strapi
		</h3>
		<p class="text-xl font-semibold text-pink-600">Voucher Code:</p>
		<p class="text-xl font-semibold text-pink-600">{item.code}</p>
		<div class="flex">
			<p class="text-xl mr-2 font-bold">{item.discountedPrice}$</p>
			<p class="text-lg text-gray-700 line-through">{item.originalPrice}$</p>
		</div>
	</div>
</a>
