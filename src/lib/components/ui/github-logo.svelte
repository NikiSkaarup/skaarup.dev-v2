<script>
	import GithubLogoWhite from '$lib/../images/github-mark-white.svg';
	import GithubLogoDark from '$lib/../images/github-mark.svg';

	export let dark = false;

	/** @type {string}*/
	let myClass = '';

	export { myClass as class };
</script>

<img
	class="aspect-square {myClass}"
	src={dark ? GithubLogoDark : GithubLogoWhite}
	loading="eager"
	alt="Github logo"
/>
