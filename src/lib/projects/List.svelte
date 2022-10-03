<script lang="ts">
	const projects = [
		{
			id: 1,
			name: 'This',
			description: 'something something built with svelte',
			start: '2022',
			end: '_now'
		},
		{
			id: 2,
			name: 'Supplier Platform',
			description: 'something something built with C# .Net Core and Angular',
			start: '2021',
			end: '2022'
		}
	];
</script>

<ul class="flex flex-col gap-2">
	{#each projects as project (project.id)}
		<li>
			<div class="grid grid-cols-3 gap-1">
				<span
					class="capitalize overflow-hidden whitespace-nowrap text-ellipsis col-span-2"
					title={project.name}
				>
					{project.name}
				</span>
				<span class="text-right font-mono">{project.start}/{project.end}</span>
			</div>
			<p class="text-sm">{project.description}</p>
		</li>
	{/each}
</ul>
