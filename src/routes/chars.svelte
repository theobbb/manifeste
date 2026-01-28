<script>
	const chars = [...'abcdefghijklmnopqrstuvwxyz'];
</script>

<div class="grid- m-8 grid-cols-16 gap-4 text-[10vw]">
	<div class="uppercase">
		{#each chars as char}
			{char}
			<!-- <img class="invert" src="/chars/{char.toUpperCase()}.svg" alt="Logo" /> -->
		{/each}
	</div>
	<div class="">
		{#each chars as char}
			{char}
			<!-- <img class="invert" src="/chars/{char.toUpperCase()}.svg" alt="Logo" /> -->
		{/each}
	</div>
	<div>012345678</div>
	<div>.,;'!?*/|-_#@%©&+→←</div>
</div>
