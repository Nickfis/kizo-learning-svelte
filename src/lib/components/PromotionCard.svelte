<script lang="ts">
	import type { Course } from '$lib/types';
	export let item: Course;
</script>

<a
	href={item.linkWithPromoCode}
	target="_blank"
	rel="noreferrer"
	class="flex flex-col sm:flex-row border-b border-gray-300 items-center justify-center"
>
	<img src={item.thumbnail} alt="Go to course" class="sm:w-1/2" />
	<div class="py-2 sm:p-8">
		<h3 class="text-xl lg:text-2xl mb-4 lg:mb-12 font-semibold">
			{item.name}
		</h3>
		<p class="text-lg lg:text-xl font-semibold text-pink-600">Voucher Code:</p>
		<p class="text-lg lg:text-xl font-semibold text-pink-600">{item.code}</p>
		<div class="flex">
			<p class="text-xl mr-2 font-bold">{item.discountedPrice}$</p>
			<p class="text-lg text-gray-700 line-through">{item.originalPrice}$</p>
		</div>
	</div>
</a>
