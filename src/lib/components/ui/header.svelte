<script>
	import Avatar from './avatar.svelte';
	import GithubLogo from './github-logo.svelte';
</script>

<header class="content sticky top-0 z-20 grid bg-gray-900 py-2 font-mono drop-shadow sm:px-2">
	<a
		href="#main-content"
		class="absolute top-0 left-0 z-50 rounded-b-sm bg-indigo-500 pt-0.5 px-1 text-xs text-gray-100 not-focus:sr-only"
	>
		Skip to main content
	</a>
	<div class="grid grid-cols-3">
		<div class="flex items-center gap-8">Developer</div>

		<div class="flex items-center justify-center">
			<a href="/" class="text-center"> Niki Wix Skaarup </a>
		</div>

		<div class="flex items-center justify-end gap-2 md:gap-4">
			<a
				class="uppercase"
				href="https://github.com/nikiskaarup"
				target="_blank"
				referrerpolicy="no-referrer"
			>
				<GithubLogo class="h-8" />
			</a>
			<Avatar id="avatar" class="h-12" />
		</div>
	</div>
</header>
