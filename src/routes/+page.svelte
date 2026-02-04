<script lang="ts">
	import Letter from './letter.svelte';

	const lines = [
		'Le web artisanal: Un manifeste',
		'',
		'1. Le contenu avant le spectacle',
		'2. Performance & accessibilité = bon design',
		'3. Pas de smooth scrolling et cursor effects',
		'4. Zéro dépendance externe',
		'5. Fuck l’AI'
	];

	let mounted = $state(false);
	$effect(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<div class="mx-8 my-6">
		<div class="whitespace-pre- border-0 outline-0">
			<div>
				{#each lines as line, line_i}
					<div class="flex flex-wrap items-center">
						{#each line.split('') as letter, letter_i}
							<Letter {letter} />
						{/each}
					</div>
					{#if line == ''}
						<div class="mt-16"></div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
{/if}
