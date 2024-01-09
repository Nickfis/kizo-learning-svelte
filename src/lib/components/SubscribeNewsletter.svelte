<script lang="ts">
	import { validateEmail } from '$lib/utils/helper';
	import { addDoc, collection, db } from '$lib/utils/firebase';

	let email = '';
	let errorMessage = '';
	let hasSubscribed = false;
	let isEmailValid = true;

	async function submitNewsletter(e: SubmitEvent) {
		e.preventDefault();
		if (email && validateEmail(email)) {
			try {
				await addDoc(collection(db, 'newsletterEmail'), { email });
				hasSubscribed = true;
			} catch (err: any) {
				errorMessage = 'Could not subscribe to newsletter';
				hasSubscribed = false;
			}
		} else {
			isEmailValid = false;
		}
	}
</script>

<div
	class="flex mx-16 px-6 py-4 rounded-lg justify-between bg-gray-100 mt-12 lg:w-3/4 lg:m-auto xl:w-2/3"
>
	{#if !hasSubscribed}
		{#if errorMessage}
			<h3 class="text-xl font-bold">{errorMessage}</h3>
		{:else}
			<div class="mr-32">
				<h3 class="text-xl font-bold mb-2">Subscribe to our newsletter</h3>
				<p>
					You'll only receive important updates when new courses are launched or any promotions are
					happening.
				</p>
			</div>
			<div class="flex flex-col justify-center">
				<form class="mt-4 flex items-center" on:submit={submitNewsletter}>
					<!-- give input more space for longer emails -->
					<input
						type="text"
						bind:value={email}
						on:input={() => (isEmailValid = true)}
						placeholder="Email"
						class="px-4 py-3 border border-gray-300 rounded-l-md {!isEmailValid && 'bg-red-300'}"
					/>
					<button type="submit" class="bg-pink-600 text-white px-4 py-3 rounded-r-md"
						>Subscribe</button
					>
				</form>
				{#if !isEmailValid}
					<p class="text-red-600 text-sm mt-2">Please provide a valid email.</p>
				{/if}
			</div>
		{/if}
	{:else}
		<h3 class="text-xl font-bold py-4 m-auto">You've successfully signed up to our newsletter</h3>
	{/if}
</div>
