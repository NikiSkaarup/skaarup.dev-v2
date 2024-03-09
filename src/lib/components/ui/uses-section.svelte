<script>
	/** @type {string}*/
	export let id;

	/** @type {string}*/
	let myClass = '';

	export { myClass as class };
</script>

<section class="space-y-4 hyphens-auto break-words py-8 px-4 {myClass}">
	<h2 {id} class="scroll-m-24 text-2xl">
		<a href="#{id}"><slot name="title" /></a>
	</h2>

	<slot />
</section>
