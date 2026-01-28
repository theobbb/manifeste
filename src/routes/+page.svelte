<script lang="ts">
	import { create_canvas } from './canvas';

	import Chars from './chars.svelte';

	function init(element: HTMLCanvasElement) {
		const instance = create_canvas(element);
		// return () => {
		//     instance.destroy()
		// }
	}
</script>

<div class="mx-12 my-6 text-5xl">
	<div class="ml-24 border-0 -indent-24 outline-0" contenteditable="true">
		<div class="mb-12 underline decoration-wavy">Manifeste</div>
		<div>
			1. Ne pas laisser les craintes<br /> du long terme affecter son <br />bonheur à court terme.
		</div>
		<div>2. Rêver</div>
		<div>3. Mais pas trop. <br /> être pragmatique</div>
		<div>4. Penser à l'argent.</div>
		<div>5. Mais pas trop.<br /> Juste assez pour se botter le cul.</div>
	</div>
</div>
<!-- <Chars /> -->
<!-- <div class="text-8xl">Fuck React</div> -->
<!-- <canvas class="mx-auto my-12 h-200 w-200 border" use:init></canvas> -->
