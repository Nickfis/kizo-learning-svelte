<script lang="ts">
	import logo from '$assets/logo.png';
	import youtubeLogo from '$assets/youtube.png';
	import twitterLogo from '$assets/twitter.png';
</script>

<footer class="bg-black px-7 sm:px-12 py-6 shadow-inner text-white">
	<div class="flex-col justify-between items-center">
		<div class="flex flex-row justify-between items-center">
			<img src={logo} alt="" class="h-8 sm:h-12 mr-4 sm:mr-12 md:mr-24" />
			<div
				class="flex flex-grow ml-4 sm:mr-4 sm:ml-8 md:ml-24 md:mr-28 lg:ml-64 lg:mr-32 justify-evenly items-center space-x-4 mr-12
				text-base sm:text-xl md:text-2xl lg:text-3xl"
			>
				<a href="/#promotions" class="hover:text-pink-600">Promotions</a>
				<a href="/data" class="hover:text-pink-600">Projects</a>
			</div>
		</div>
		<div class="flex items-center space-x-4 text-white mt-8">
			<a href="/imprint" class="text-gray-300 text-sm">Imprint</a>
			<a href="/data-privacy" class="text-gray-300 hover:text-pink-600 text-sm">Data Privacy</a>
			<a href="https://twitter.com" class="ml-2 text-gray-700 hover:text-pink-600">
				<img src={twitterLogo} alt="Twitter" class="h-4 ml-2" />
			</a>
			<a href="https://youtube.com" class="text-gray-700 hover:text-pink-600">
				<img src={youtubeLogo} alt="YouTube" class="h-5 ml-2" />
			</a>
		</div>
	</div>
</footer>
