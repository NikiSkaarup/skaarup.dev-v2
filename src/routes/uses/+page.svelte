<script lang="ts">
	import MyLink from '$lib/components/ui/mine/my-link.svelte';
	import MyUsesSection from '$lib/components/ui/mine/my-uses-section.svelte';
</script>

<article>
	<header class="container mx-auto w-full space-y-4 px-4 py-8">
		<h1 class="mx-auto max-w-prose hyphens-auto break-words text-center text-3xl">Uses</h1>
		<p class="mx-auto max-w-prose hyphens-auto break-words text-center">
			This page is a list of tools and software I use as a developer.
		</p>
	</header>

	<MyUsesSection id="editor">
		<svelte:fragment slot="title">
			<a href="#editor"> Editor </a>
		</svelte:fragment>
		<ul>
			<li>
				<MyLink href="https://code.visualstudio.com">Visual Studio Code</MyLink>
			</li>
			<li>
				Theme -
				<MyLink href="https://github.com/catppuccin/vscode">Catppuccin mocha</MyLink>
				/
				<MyLink href="https://github.com/dhedgecock/radical-vscode">Radical</MyLink>
				<span class="text-sm">(either one depending on my mood)</span>
			</li>
			<li>
				Font - <MyLink href="https://github.com/microsoft/cascadia-code">
					Cascadia code
				</MyLink>
			</li>
		</ul>
	</MyUsesSection>
	<MyUsesSection id="terminal">
		<svelte:fragment slot="title">
			<a href="#terminal"> Terminal </a>
		</svelte:fragment>
		<ul>
			<li><MyLink href="https://github.com/alacritty/alacritty">Alacritty</MyLink></li>
			<li>
				Theme -
				<MyLink href="https://github.com/catppuccin/alacritty">Catppuccin mocha</MyLink>
			</li>
			<li>
				Shell - <MyLink href="https://github.com/fish-shell/fish-shell">Fish</MyLink>
			</li>
			<li>
				Prompt - <MyLink href="https://github.com/starship/starship">Starship</MyLink>
			</li>
			<li>
				Font - <MyLink
					href="https://github.com/ryanoasis/nerd-fonts/blob/master/patched-fonts/CascadiaCode"
				>
					Caskaydia Cove Nerd Font
				</MyLink>
			</li>
		</ul>
	</MyUsesSection>
	<MyUsesSection id="browser-extensions">
		<svelte:fragment slot="title">
			<a href="#browser-extensions"> Browser extensions </a>
		</svelte:fragment>
		<ul>
			<li><MyLink href="https://github.com/gorhill/uBlockp">uBlock Origin</MyLink></li>
			<li><MyLink href="https://github.com/darkreader/darkreader">Dark Reader</MyLink></li>
			<li>
				<MyLink href="https://github.com/violentmonkey/violentmonkey">Violentmonkey</MyLink>
			</li>
			<li><MyLink href="https://github.com/openstyles/stylus">Stylus</MyLink></li>
		</ul>
	</MyUsesSection>
	<MyUsesSection id="desktop-apps">
		<svelte:fragment slot="title">
			<a href="#desktop-apps"> Desktop Apps </a>
		</svelte:fragment>
		<ul>
			<li><MyLink href="https://spotify.com/">Spotify</MyLink></li>
			<li><MyLink href="https://desktop.github.com/">Github Desktop</MyLink></li>
			<li>
				<MyLink href="https://www.mozilla.org/en-US/firefox/new/">Firefox</MyLink>
			</li>
			<li>
				<MyLink href="https://www.mozilla.org/en-US/firefox/developer/">
					Firefox Developer Edition
				</MyLink>
			</li>
			<li><MyLink href="https://sqlitebrowser.org/">DB Browser for SQLite</MyLink></li>
			<li><MyLink href="https://etcher.balena.io/">Balena Etcher</MyLink></li>
			<li><MyLink href="https://discord.com/">Discord</MyLink></li>
			<li><MyLink href="https://obsproject.com/">OBS Studio</MyLink></li>
			<li>
				<MyLink href="https://github.com/responsively-org/responsively-app">
					Responsively App
				</MyLink>
			</li>
		</ul>
	</MyUsesSection>
	<MyUsesSection id="cli">
		<svelte:fragment slot="title">
			<a href="#cli"> CLIs </a>
		</svelte:fragment>
		<ul>
			<li>
				Node Version Manager - <MyLink href="https://github.com/Schniz/fnm">fnm</MyLink>
			</li>
			<li><MyLink href="https://github.com/pnpm/pnpm">pnpm</MyLink></li>
			<li>
				<MyLink href="https://github.com/aristocratos/btop">btop</MyLink> - <MyLink
					href="https://github.com/catppuccin/btop"
				>
					Catppuccin mocha
				</MyLink>
			</li>
			<li>
				Localhost reverse proxy - <MyLink href="https://github.com/caddyserver/caddy">
					caddy
				</MyLink>
			</li>
			<li>
				<MyLink href="https://github.com/shssoichiro/oxipng">Oxipng</MyLink> optimize png images
			</li>
			<li>
				<MyLink href="https://github.com/harlan-zw/unlighthouse">unlighthouse</MyLink>
			</li>
			<li>
				<MyLink href="https://github.com/ScoopInstaller/Scoop">scoop</MyLink> (basically apt
				for windows)
			</li>
		</ul>
	</MyUsesSection>
	<!-- <MyUsesSection id="setup">
		<svelte:fragment slot="title">
			<a href="#setup"> Setups </a>
		</svelte:fragment>
		<ul>
			<li><MyLink href="https://github.com/Schniz/fnm">fnm</MyLink></li>
		</ul>
	</MyUsesSection>
	<MyUsesSection id="servers">
		<svelte:fragment slot="title">
			<a href="#servers"> Servers </a>
		</svelte:fragment>
		<ul>
			<li><MyLink href="https://github.com/Schniz/fnm">fnm</MyLink></li>
		</ul>
	</MyUsesSection>
	<MyUsesSection id="browser">
		<svelte:fragment slot="title">
			<a href="#browser"> Browser </a>
		</svelte:fragment>
		<ul>
			<li><MyLink href="https://github.com/Schniz/fnm">fnm</MyLink></li>
		</ul>
	</MyUsesSection> -->
</article>

<style lang="postcss">
	article :global(a) {
		@apply underline decoration-indigo-500 underline-offset-4 transition-all hover:decoration-2;
	}
	ul {
		@apply list-inside list-disc space-y-2;
	}
</style>
