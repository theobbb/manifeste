<script lang="ts">
	const { letter }: { letter: string } = $props();

	const random_min_max = (min: number, max: number) => Math.random() * (max - min) + min;

	const LINE_HEIGHT = 0.9;
	const SPACING = 0.3;

	let style = $state('');

	const unvailable_chars = ['É=’'];

	function generate_style() {
		console.log();
		let str = '';

		const translate_y = (Math.random() - 0.5) * 10;
		const rotate = (Math.random() - 0.5) * 20;

		const colors = ['bg-orange-500', 'bg-red-500', 'bg-green-500'];
		//const color = colors[Math.floor(Math.random() * colors.length)];

		//const bg_color = `hsla(${random_min_max(0, 360)}, 30%, 40%, 30%)`;
		const bg_color = `rgba(255,255,255,${random_min_max(0, 0.3)})`;
		const text_color = `hsl(${random_min_max(0, 360)}, 70%, 80%)`;
		const uppercase = Math.floor(Math.random() * 2);
		const font_serif = Math.floor(Math.random() * 1.5);

		const size = random_min_max(30, 70);

		str += `transform: translateY(${translate_y}px) rotate(${rotate}deg); `;
		str += `font-size: ${size}px; `;
		str += `background-color: ${bg_color}; `;
		//str += `color: ${text_color}; `;
		str += `line-height: ${size * LINE_HEIGHT}px; `;
		str += `margin: ${(SPACING * size) / 10}px ${(SPACING * size) / 20}px; `;

		if (uppercase) {
			str += `text-transform: uppercase; `;
		}
		if (font_serif || unvailable_chars.includes(letter)) {
			str += 'font-family: Instrument Serif; ';
		}

		style = str;
	}

	generate_style();
</script>

<div
	onmouseenter={generate_style}
	class={[
		'hover:text-6xl- hover:m-8- transition-none-  px-0.5- block h-fit cursor-default transition-all duration-200 hover:translate-0! hover:rotate-0!'
		//color,
	]}
	{style}
>
	{letter}
</div>
{#if letter == ' '}
	<span class="invisible">___</span>
{/if}
