class Menu extends Phaser.Scene {
    constructor() {
      super("menuScene");
    }
    preload() {
      // load audio
      this.load.audio('sfx_select', './assets/blip_select12.wav');
      this.load.audio('sfx_explosion', './assets/explosion38.wav');
      this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
      this.load.image('starfield', './assets/starfield.png');
    }

    create() {
      this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);
      let menuConfig = {
        fontFamily: 'Whisper',
        fontSize: '40px',
        //backgroundColor: '#F3B141',
        color: '#000000',
        align: 'right',
        padding: {
          top: 5,
          bottom: 5,
        },
        fixedWidth: 0
      }
      
      //show menu text
      this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Dragon Shooter',menuConfig).setOrigin(0.5);
      this.add.text(game.config.width/2, game.config.height/2, 'Use mouse to move and shoot', menuConfig).setOrigin(0.5);
      //menuConfig.backgroundColor = '#00FF00';
      menuConfig.color = '#000';
      this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Trainee or → for Paladin', menuConfig).setOrigin(0.5);
      // define keys
      keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
      this.starfield.tilePositionX -= 4;
      if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
        // easy mode
        game.settings = {
          spaceshipSpeed: 3,
          gameTimer: 60000  
        }
        this.sound.play('sfx_select');
        this.scene.start('playScene');    
      }
      if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
        // hard mode
        game.settings = {
          spaceshipSpeed: 4,
          gameTimer: 45000    
        }
        this.sound.play('sfx_select');
        this.scene.start('playScene');    
      }
    }  
}

  
