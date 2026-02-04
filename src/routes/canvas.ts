const lines = [
	'LE WEB ARTISANAL : UN MANIFESTE',
	'',
	'1. LE CONTENU AVANT LE SPECTACLE',
	'2. PERFORMANCE & ACCESSIBILITE = BON DESIGN',
	'3. PAS DE SMOOTH SCROLLING & CURSOR EFFECTS',
	'4. ZÉRO DEPENDENCE EXTERNES',
	'5. FUCK L’AI'
];

export function create_canvas(ref: HTMLCanvasElement) {
	const canvas: HTMLCanvasElement = ref;
	const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

	const canvas_rect = canvas.getBoundingClientRect();
	const { width, height } = canvas_rect;

	canvas.width = width;
	canvas.height = height;

	// 1. Set up text properties
	const text = 'Manifeste';
	const fontSize = 40.5;
	const lineHeight = fontSize * 1.3;
	const letter_width = fontSize * 0.45;

	ctx.fillStyle = 'white';

	ctx.font = `${fontSize}px Instrument Serif`;
	// ctx.font = `${fontSize}px Manifest59`;
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';

	lines.forEach((line, line_i) => {
		const letters = line.split('');

		letters.forEach((letter, letter_i) => {
			const offset_y = (Math.random() - 0.5) * 4;
			const rotation = (Math.random() - 0.5) * 0.4; // radians (~±23°)

			const x = letter_width + letter_i * letter_width;
			const y = lineHeight / 2 + line_i * lineHeight + offset_y;

			ctx.save();

			// move origin to letter position
			ctx.translate(x, y);

			// rotate around that point
			ctx.rotate(rotation);

			// draw letter at origin
			ctx.fillText(letter, 0, 0);

			ctx.restore();
		});
	});

	type Vector2 = { x: number; y: number };
	const distance = (a: Vector2, b: Vector2) => Math.hypot(b.x - a.x, b.y - a.y);

	const PIXEL_SIZE = 3;

	const step = 2; // The interval between dots
	const imageData = ctx.getImageData(0, 0, width, height).data;

	function draw() {
		ctx.clearRect(0, 0, width, height); // Clear so we only see the dots

		for (let y = 0; y < height; y += step) {
			for (let x = 0; x < width; x += step) {
				const index = (y * width + x) * 4;
				const alpha = imageData[index + 3];
				// no pixel there
				if (alpha < 128) continue;

				const pos = { x: x - PIXEL_SIZE / 2, y: y - PIXEL_SIZE / 2 };
				//const mouse_distance = distance(mouse, pos);
				//if (mouse_distance > 100) continue;
				const size = PIXEL_SIZE;
				ctx.fillStyle = 'white';
				ctx.fillRect(pos.x, pos.y, size, size); // square dot
			}
		}
	}
	//draw();

	let update_frame;

	const mouse: Vector2 = { x: 0, y: 0 };

	function update() {
		draw();
		update_frame = requestAnimationFrame(update);
	}

	//requestAnimationFrame(update);

	function onmousemove(event: MouseEvent) {
		mouse.x = event.clientX - canvas_rect.left;
		mouse.y = event.clientY - canvas_rect.top;
	}

	canvas.addEventListener('mousemove', onmousemove);
}
