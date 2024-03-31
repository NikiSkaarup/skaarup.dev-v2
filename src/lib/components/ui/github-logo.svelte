<script>
	import GithubLogoWhite from '$lib/../images/github-mark-white.svg';
	import GithubLogoDark from '$lib/../images/github-mark.svg';

	/** @type {{dark?: boolean; class?: string | undefined | null;}} */
	let { dark = false, class: className } = $props();
</script>

<img
	class="aspect-square {className}"
	src={dark ? GithubLogoDark : GithubLogoWhite}
	loading="eager"
	alt="gh"
/>
