//Sean Lee
//Dragon Shooter
//4/19/22
//12 hours to complete
//Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (60)
//Implement mouse control for player movement and mouse click to fire (20)
let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  scene: [ Menu, Play ]
}
let game = new Phaser.Game(config);
// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;
let mouse;
// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
