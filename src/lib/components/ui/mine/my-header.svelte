<script>
	import MyAvatar from './my-avatar.svelte';
</script>

<header class="sticky top-0 z-20 bg-black font-mono drop-shadow">
	<div class="container mx-auto grid grid-cols-3 px-4 py-2">
		<div class="flex items-center gap-8">Developer</div>

		<div class="flex items-center justify-center">
			<a href="/"> Niki Wix Skaarup </a>
		</div>

		<div class="flex items-center justify-end gap-8">
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
