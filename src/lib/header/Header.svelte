<script lang="ts">
	import portrait from '../../images/portrait-greyscale.png';
	import { page } from '$app/stores';
</script>

<header class="flex justify-between">
	<div class="h-12 w-12 corner">
		<a class="flex justify-center items-center h-full w-full text-center" href="/#">
			<img class="h-8 w-8 object-contain" src="" alt="?" />
		</a>
	</div>

	<div class="flex flex-col flex-nowrap p-4">
		<nav class="flex justify-center" data-sveltekit-prefetch>
			<ul>
				<li class:active={$page.url.pathname === '/'}>
					<a href="/">Home</a>
				</li>
			</ul>
		</nav>

		<div class="flex flex-col-reverse md:flex-row flex-nowrap items-center gap-4">
			<h1 class="capitalize">Niki Wix Skaarup</h1>
			<img
				class="rounded-full w-48 h-48 md:w-32 md:h-32 backdrop-blur-sm border-solid border-transparent border-8"
				src={portrait}
				alt="Portrait"
			/>
		</div>
	</div>

	<div class="h-12 w-12 corner">
		<a class="flex justify-center items-center h-full w-full text-center" href="/#">
			<img class="h-8 w-8 object-contain" src="" alt="?" />
		</a>
	</div>
</header>
