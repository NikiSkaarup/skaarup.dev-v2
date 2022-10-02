<script lang="ts">
	const employers = [
		{
			id: 3,
			name: 'Umakers',
			start: '2022',
			end: '_now'
		},
		{
			id: 2,
			name: 'Edora A/S',
			start: '2021',
			end: '2022'
		},
		{
			id: 1,
			name: 'SabreCMS',
			start: '2018',
			end: '2019'
		}
	];
</script>

<ul class="flex flex-col gap-2">
	{#each employers as employer}
		<li class="grid grid-cols-3 gap-1">
			<span
				class="capitalize overflow-hidden whitespace-nowrap text-ellipsis"
				title={employer.name}
			>
				{employer.name}
			</span>
			<span class="text-center">-</span>
			<span class="text-right font-mono">{employer.start}/{employer.end}</span>
		</li>
	{/each}
</ul>
