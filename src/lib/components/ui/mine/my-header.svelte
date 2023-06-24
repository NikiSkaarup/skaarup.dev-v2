<script>
	import MyAvatar from './my-avatar.svelte';
</script>

<header class="sticky top-0 bg-black drop-shadow font-mono z-20">
	<div class="container mx-auto grid grid-cols-3 py-2 px-4">
		<div class="flex gap-8 items-center">Developer</div>

		<div class="flex justify-center items-center">
			<a href="/"> Niki Wix Skaarup </a>
		</div>

		<div class="flex gap-8 justify-end items-center">
			<a
				class="uppercase"
				href="https://github.com/nikiskaarup"
				target="_blank"
				referrerpolicy="no-referrer"
			>
				github
			</a>
			<MyAvatar id="avatar" />
		</div>
	</div>
</header>
