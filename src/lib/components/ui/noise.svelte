<script>
	/** @type {string} */
	export let id;
	/** @type {string} */
	export let begin;
	/** @type {string | number} */
	export let dur = 0.8;
	/** @type {string | number} */
	export let repeatCount = 1;
	/** @type {string | number} */
	export let seed = 0;
	/** @type {string | number} */
	export let scale = 0;
	/** @type {string} */
	export let seeds = '0;200;0';
	/** @type {string} */
	export let scales = '0;20;0';
	/** @type {string} */
	export let baseFrequency = '0.7,0.8';
</script>

<svg class="pointer-events-none absolute -top-full -left-full h-0 w-0 overflow-hidden opacity-0">
	<defs>
		<filter {id}>
			<feTurbulence type="fractalNoise" {baseFrequency} {seed}>
				<animate attributeName="seed" values={seeds} {dur} {repeatCount} {begin} />
			</feTurbulence>
			<feDisplacementMap in="SourceGraphic" in2="warp" {scale}>
				<animate attributeName="scale" values={scales} {dur} {repeatCount} {begin} />
			</feDisplacementMap>
		</filter>
	</defs>
</svg>
