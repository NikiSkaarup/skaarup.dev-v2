<script>
	import MyAvatar from './avatar.svelte';
</script>

<header class="sticky top-0 z-20 bg-black font-mono drop-shadow">
	<div class="mx-auto grid grid-cols-3 py-2 px-4 xl:max-w-7xl">
		<div class="flex items-center gap-8">
			<a href="/uses"> Developer </a>
		</div>

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
