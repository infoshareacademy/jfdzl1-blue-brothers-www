var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload: preload, create: create, update: update, render: render});
function preload() {
    game.load.image('obrazek', 'obrazek.jpg');
}
function create() {
    game.add.image(100, 100, 'obrazek');
}
function update() {}
function render() {}