mgraphics.init();
mgraphics.relative_coords = 0;
mgraphics.autofill = 0;

const MAX_LAYER = 9;

class GenericSprite {
	public theImage: Image;
	public theLayer: number;
	private theScale: number;
	public x: number;
	public y: number;

	constructor (file: string, layer: number) {
		this.theImage = new Image(file);
		this.theLayer = layer;
		this.theScale = 1.0;
		this.x = 0;
		this.y = 0;
	}

	setPosition (x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	setScale (s: number) {
		this.theScale = s;
	}

	draw () {
		mgraphics.save();
		mgraphics.translate(this.x, this.y);
		mgraphics.scale(this.theScale, this.theScale);
		mgraphics.image_surface_draw(this.theImage);
	}

}

class ShipSprite extends GenericSprite {
	direction: number

	constructor (file: string, layer: number) {
		super(file, layer);
		this.direction = 0;
	}

	move () {
		const width = (box.rect[2] - box.rect[0]) - ship.theImage.size[0];
		this.x = this.x + this.direction;
		if ((this.x > width) || (this.x < 0)) {
			this.direction = this.direction * -1;
		}
	}
}


// set up the tree sprites
const trees = new Array<GenericSprite>(10);
trees[0] = new GenericSprite("Tree-1.png", 9);
trees[1] = new GenericSprite("Tree-2.png", 8);
trees[2] = new GenericSprite("Tree-3.png", 7);
trees[3] = new GenericSprite("Tree-1.png", 6);
trees[4] = new GenericSprite("Tree-2.png", 5);
trees[5] = new GenericSprite("Tree-3.png", 4);
trees[6] = new GenericSprite("Tree-1.png", 3);
trees[7] = new GenericSprite("Tree-2.png", 2);
trees[8] = new GenericSprite("Tree-3.png", 1);
trees[9] = new GenericSprite("Tree-1.png", 0);

// set up a special case ship object by augmenting the GenericSprite
const ship = new ShipSprite("SpaceShip.png", 5);
ship.y = ((box.rect[3] - box.rect[1]) - ship.theImage.size[1]) / 2.0;
ship.direction = 5;


resetTrees();
mgraphics.redraw();

function bang() {
	ship.move();
	mgraphics.redraw();
}

function resetTrees() {
	// calculate the current width and height
	const width = (box.rect[2] - box.rect[0]);
	const height = (box.rect[3] - box.rect[1]);

	for (let i = 0; i < trees.length; i++) {
		trees[i].setPosition(Math.random() * (width - 120), ((MAX_LAYER - trees[i].theLayer) / MAX_LAYER) * (height - 150));
		trees[i].setScale(((MAX_LAYER - trees[i].theLayer) / MAX_LAYER) + .5);
	}
}

function shipLayer(v: number) {
	ship.theLayer = v;
	ship.theLayer = Math.max(0, Math.min(MAX_LAYER, ship.theLayer)); 	// CLIP function...
}

function paint() {
	// calculate the current width and height
	const width = (box.rect[2] - box.rect[0]);
	const height = (box.rect[3] - box.rect[1]);

	// tan out the background
	mgraphics.set_source_rgb(.8, .7, .6);
	mgraphics.rectangle(0, 0, width, height);
	mgraphics.fill();

	// draw sprites in reverse layer order
	for (let l = MAX_LAYER; l >= 0; l--) {
		for (let i = 0; i < trees.length; i++) {
			if (trees[i].theLayer == l) {
				trees[i].draw();
			}
			if (ship.theLayer == l) {
				ship.draw();
			}
		}
	}
}

export {}