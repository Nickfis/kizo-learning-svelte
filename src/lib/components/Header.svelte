<script lang="ts">
	import logo from '$assets/logo.png';
</script>

<nav class="flex justify-between items-center bg-white px-12 py-4 shadow">
	<a href="/" class="block">
		<img src={logo} alt="Go to home" class="h-10" />
	</a>
	<ul class="flex items-center mr-8">
		<li>
			<a href="/promotions" class="text-gray-900 hover:text-pink-600 text-xl">Promotions</a>
		</li>
		<li class="ml-14">
			<a href="/projects" class="text-gray-900 hover:text-pink-600 text-xl">Projects</a>
		</li>
	</ul>
</nav>
