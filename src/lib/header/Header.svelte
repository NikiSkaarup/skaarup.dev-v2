<script lang="ts">
	import { page } from '$app/stores';
</script>

<header class="flex justify-between">
	<div class="h-12 w-12 corner">
		<a class="flex justify-center items-center h-full w-full" href="/#">
			<img class="h-8 w-8 object-contain" src="" alt="?" />
		</a>
	</div>

	<nav class="flex justify-center" data-sveltekit-prefetch>
		<ul>
			<li class:active={$page.url.pathname === '/'}>
				<a href="/">Home</a>
			</li>
		</ul>
	</nav>

	<div class="h-12 w-12 corner">
		<a class="flex justify-center items-center h-full w-full" href="/#">
			<img class="h-8 w-8 object-contain" src="" alt="?" />
		</a>
	</div>
</header>
