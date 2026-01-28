// export class Canvas {
// 	canvas: HTMLCanvasElement;
// 	ctx: CanvasRenderingContext2D;

// 	width: number;
// 	height: number;

// 	text = 'HELLO';
// 	fontSize = 150;
// 	step = 10;

// 	init() {
// 		console.log('ss');
// 		this.ctx.font = `bold ${this.fontSize}px Arial`;
// 		this.ctx.textAlign = 'center';
// 		this.ctx.textBaseline = 'middle';

// 		// 2. Draw text briefly to "capture" it, then clear
// 		this.ctx.fillText(this.text, this.width / 2, this.height / 2);
// 		const imageData = this.ctx.getImageData(0, 0, this.width, this.height).data;
// 		this.ctx.clearRect(0, 0, this.width, this.height); // Clear so we only see the dots

//         for (let y = 0; y < height; y += step) {
// 					for (let x = 0; x < width; x += step) {
// 						// Formula to find the index of the Red channel for a specific (x, y)
// 						// Each pixel has 4 values: R, G, B, and A
// 						const index = (y * width + x) * 4;
// 						const alpha = imageData[index + 3];

// 						// 4. If alpha > 128 (it's not transparent), draw a dot
// 						if (alpha > 128) {
// 							ctx.beginPath();
// 							ctx.arc(x, y, 2, 0, Math.PI * 2);
// 							ctx.fillStyle = '#00ffcc';
// 							ctx.fill();
// 						}
// 					}
// 				}
// 	}

// 	constructor(canvas: HTMLCanvasElement) {
// 		this.canvas = canvas;
// 		this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
// 		this.width = canvas.width;
// 		this.height = canvas.height;
// 		this.init();
// 	}
// }

export function create_canvas(ref: HTMLCanvasElement) {
	let canvas: HTMLCanvasElement = ref;
	const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
	const width = canvas.width;
	const height = canvas.height;

	canvas.width = width;
	canvas.height = height;

	// 1. Set up text properties
	const text = 'Manifeste';
	const fontSize = 40;
	const step = 8; // The interval between dots

	ctx.font = `${fontSize}px Manifest59`;
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';

	ctx.fillText(text, width / 2, height / 2);
	const imageData = ctx.getImageData(0, 0, width, height).data;
	//ctx.clearRect(0, 0, width, height); // Clear so we only see the dots

	// 3. Scan the pixel data
	// for (let y = 0; y < height; y += step) {
	// 	for (let x = 0; x < width; x += step) {
	// 		// Formula to find the index of the Red channel for a specific (x, y)
	// 		// Each pixel has 4 values: R, G, B, and A
	// 		const index = (y * width + x) * 4;
	// 		const alpha = imageData[index + 3];

	// 		// 4. If alpha > 128 (it's not transparent), draw a dot
	// 		if (alpha > 128) {
	// 			ctx.beginPath();
	// 			ctx.arc(x, y, 2, 0, Math.PI * 2);
	// 			ctx.fillStyle = '#00ffcc';
	// 			ctx.fill();
	// 		}
	// 	}
	// }
}
