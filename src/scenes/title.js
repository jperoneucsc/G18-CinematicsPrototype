
class Title extends Phaser.Scene {
    constructor() {
        super('Title')
    }

    preload(){
        this.load.image("background", "src/assets/titleMenu/menuBackground.png");
        this.load.image("playButtonBack", "src/assets/titleMenu/PlayButtonBack.png");
        this.load.image("playButtonText", "src/assets/titleMenu/PlayButtonFront.png");
        this.load.image("creditsButtonBack", "src/assets/titleMenu/CreditsButtonBack.png");
        this.load.image("creditsButtonText", "src/assets/titleMenu/CreditsButtonText.png");
        this.load.image("tempMenuAsset", "src/assets/titleMenu/tempMenuAsset.png");
    }

    create() {
        this.cameras.main.fadeIn(2000);


        let background = this.add.image(0, 0, 'background').setOrigin(0,0).setInteractive();

        // Initialize fonts
        var style = { font: "Bold 132px Arial", fill: '0x000000', boundsAlignH: 'center', boundsAlignV: 'middle'};
        var style2 = { font: "Bold 42px Arial", fill: '0x000000', boundsAlignH: 'center', boundsAlignV: 'middle'};

        let title = this.add.text(700, 300, "[GAME TITLE]", style).setOrigin(.5,.5);       // Title 
        // Highscore and floating animation
        let highScore = this.add.text(1400, 275, "Your high score: ~", style2).setOrigin(.5,.5).setRotation(.6);
        var tween = this.tweens.add({
            targets: highScore,
            y: { start: 275, from: 280, to: 260},
            ease:'Power1',
            yoyo: true,
            repeat: -1,
            duration: 1000,
        })

        // Temporary asset in bottom right and rotating animation
        let tempAsset = this.add.plane(1450, 700, 'tempMenuAsset');
        var tween = this.tweens.add({
            targets: tempAsset,
            angle: {from: 0, to: 360},
            ease:'Linear',
            yoyo: false,
            repeat: -1,
            duration: 5000,
        })

        // Create play button back and text layer
        let playButtonBack = this.add.image(700, 1080/1.8, 'playButtonBack').setScale(1.6).setInteractive().on('pointerover', () => {
            playButtonText.setScale(1.3);
        });;
        let playButtonText = this.add.image(700, 1080/1.8, 'playButtonText').setScale(1.6).setInteractive().on('pointerover', () => {
            playButtonText.setScale(1.3);
        });


        // Create Credits Button Back Layer
        let creditsButtonBack = this.add.image(700, 1080/1.35, 'creditsButtonBack').setScale(1.25).setInteractive().on('pointerover', () => {
            creditsButtonText.setScale(1);
        }).on('pointerdown', () => {
            this.cameras.main.fadeOut("1000");
            this.cameras.main.on('camerafadeoutcomplete', () => {
                this.scene.start('Credits');
            });
        }); // Create Credits Button Text Layer
        let creditsButtonText = this.add.image(700, 1080/1.35, 'creditsButtonText').setScale(1.25).setInteractive().on('pointerover', () => {
            creditsButtonText.setScale(1);
        }).on('pointerdown', () => {
            this.cameras.main.fadeOut("1000");
            this.cameras.main.on('camerafadeoutcomplete', () => {
                this.scene.start('Credits');
            });
        });

        // If the background is being hovered over, reset button scales
        background.on('pointerover', () => {
            playButtonText.setScale(1.6);
            creditsButtonText.setScale(1.25);
        });

        // WIP: When the camera fades in, scale in all of the buttons and stuff
        this.cameras.main.on('camerafadeincomplete', () => {
            
        });
    }
}