<script>
	import Link from '$lib/components/ui/link.svelte';
	import List from '$lib/components/ui/list.svelte';
	import PageHeading from '$lib/components/ui/page-heading.svelte';
	import UsesSection from '$lib/components/ui/uses-section.svelte';
</script>

<article class="content grid">
	<PageHeading>
		<svelte:fragment slot="title">Uses</svelte:fragment>
		<p class="text-balance text-center">
			This is a <Link href="https://github.com/wesbos/awesome-uses/">/uses</Link> page with a list
			of tools and software I use as a developer.
		</p>
	</PageHeading>
	<UsesSection id="editor" class="breakout content grid bg-gray-900">
		<svelte:fragment slot="title">Editor</svelte:fragment>
		<List>
			<li>
				<Link href="https://code.visualstudio.com">Visual Studio Code</Link>
			</li>
			<li>
				Theme -
				<Link href="https://github.com/catppuccin/vscode">Catppuccin mocha</Link>
				/
				<Link href="https://github.com/dhedgecock/radical-vscode">Radical</Link>
				<span class="inline-block text-sm">(either one depending on my mood)</span>
			</li>
			<li>
				Font - <Link href="https://vercel.com/font/mono">Geist Mono</Link>
			</li>
		</List>
	</UsesSection>
	<UsesSection id="terminal" class="ultrawide content grid bg-gray-700/40">
		<svelte:fragment slot="title">Terminal</svelte:fragment>
		<List>
			<li><Link href="https://github.com/alacritty/alacritty">Alacritty</Link></li>
			<li>
				Theme -
				<Link href="https://github.com/catppuccin/alacritty">Catppuccin mocha</Link>
			</li>
			<li>
				Shell - <Link href="https://github.com/fish-shell/fish-shell">Fish</Link>
			</li>
			<li>
				Prompt - <Link href="https://github.com/starship/starship">Starship</Link>
			</li>
			<li>
				Font - <Link
					href="https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts/GeistMono"
				>
					Geist Mono Nerd Font
				</Link>
			</li>
		</List>
	</UsesSection>
	<UsesSection id="browser-extensions" class="breakout content grid bg-gray-900">
		<svelte:fragment slot="title">Browser extensions</svelte:fragment>
		<List>
			<li><Link href="https://github.com/gorhill/uBlock">uBlock Origin</Link></li>
			<li><Link href="https://github.com/darkreader/darkreader">Dark Reader</Link></li>
			<li>
				<Link href="https://github.com/violentmonkey/violentmonkey">Violentmonkey</Link>
			</li>
			<li><Link href="https://github.com/openstyles/stylus">Stylus</Link></li>
		</List>
	</UsesSection>
	<UsesSection id="desktop-apps" class="ultrawide content grid bg-gray-700/40">
		<svelte:fragment slot="title">Desktop Apps</svelte:fragment>
		<List>
			<li><Link href="https://spotify.com">Spotify</Link></li>
			<li><Link href="https://desktop.github.com">Github Desktop</Link></li>
			<li>
				<Link href="https://www.mozilla.org/en-US/firefox/new">Firefox</Link>
			</li>
			<li>
				<Link href="https://www.mozilla.org/en-US/firefox/developer">
					Firefox Developer Edition
				</Link>
			</li>
			<li><Link href="https://sqlitebrowser.org">DB Browser for SQLite</Link></li>
			<li><Link href="https://etcher.balena.io">Balena Etcher</Link></li>
			<li><Link href="https://discord.com">Discord</Link></li>
			<li><Link href="https://obsproject.com">OBS Studio</Link></li>
			<li>
				<Link href="https://github.com/responsively-org/responsively-app">
					Responsively App
				</Link>
			</li>
		</List>
	</UsesSection>
	<UsesSection id="cli" class="breakout content grid bg-gray-900">
		<svelte:fragment slot="title">CLIs</svelte:fragment>
		<List>
			<li>
				Node Version Manager - <Link href="https://github.com/Schniz/fnm">fnm</Link>
			</li>
			<li><Link href="https://pnpm.io/">pnpm</Link></li>
			<li><Link href="https://bun.sh">bun</Link></li>
			<li>
				<Link href="https://github.com/aristocratos/btop">btop</Link> - <Link
					href="https://github.com/catppuccin/btop"
				>
					Catppuccin mocha
				</Link>
			</li>
			<li>
				Localhost reverse proxy - <Link href="https://github.com/caddyserver/caddy">
					caddy
				</Link>
			</li>
			<li>
				<Link href="https://github.com/shssoichiro/oxipng">Oxipng</Link> optimize png images
			</li>
			<li>
				<Link href="https://unlighthouse.dev">unlighthouse</Link>
			</li>
		</List>
	</UsesSection>
	<UsesSection id="inspiration" class="ultrawide content grid bg-gray-700/40">
		<svelte:fragment slot="title">Inspiration</svelte:fragment>
		<List>
			<li>
				<Link href="https://uses.tech/">What is a /uses page</Link>
			</li>
		</List>
	</UsesSection>
</article>
