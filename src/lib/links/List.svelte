<script lang="ts">
	const links = [
		{
			id: 1,
			name: 'Github',
			url: 'https://github.com/nikiskaarup'
		},
		{
			id: 2,
			name: 'Linkedin',
			url: 'https://linkedin.com/in/nikiskaarup'
		},
		{
			id: 3,
			name: '',
			url: ''
		}
	];
</script>

<ul class="flex flex-col gap-1">
	{#each links as link (link.id)}
		<li class="font-mono">
			<a
				href={link.url}
				target="_blank"
				rel="noreferrer"
				referrerpolicy="no-referrer"
				class="flex flex-row flex-nowrap justify-between gap-1 hover:text-indigo-900 dark:hover:text-indigo-400 py-1"
			>
				<span
					class="overflow-hidden whitespace-nowrap text-ellipsis hover:underline"
					title={link.name}
				>
					{link.name}
				</span>
			</a>
		</li>
	{/each}
</ul>
