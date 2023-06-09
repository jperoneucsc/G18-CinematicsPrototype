class Intro extends Phaser.Scene {
    constructor() {
        super('Intro')
    }

    preload(){
        this.load.image("background", "src/assets/titleMenu/menuBackground.png");
        this.load.image("logo", "src/assets/titleMenu/logo.png")
        this.load.audio("board", ['src/assets/titleMenu/skateboard_rolling.mp3']);
    }

    create() {

        let scaleRatio = window.devicePixelRatio / 3;
        this.cameras.main.fadeIn(2000);
        let skateSound = this.sound.add('board',
        {
            volume: .15, 
            delay: 1
        });


        let background = this.add.image(0, 0, 'background').setOrigin(0,0).setInteractive();

        // fonts
        var style = { font: "Bold 132px Arial", fill: '0x000000', boundsAlignH: 'center', boundsAlignV: 'middle'};
        var style2 = { font: "Bold 42px Arial", fill: '0x000000', boundsAlignH: 'center', boundsAlignV: 'middle'};
        // add title and movement anim
        let logo = this.add.image(960, 490, 'logo').setOrigin(0,0).setInteractive().setOrigin(.5,.5).setScale(scaleRatio * 40, scaleRatio * 30);
        // tween chain
        var tween = this.tweens.chain({
            targets: logo,
            tweens: [
                {
                y: { start: 500, from: 500, to: 400},
                ease:'Linear',
                yoyo: true,
                repeat: 1,
                delay: 500,
                duration: 2000,
                },
                {
                    angle: 360,
                    ease: 'expo.out',
                    duration: 500,
                    onComplete: () => {
                        skateSound.play();
                        this.cameras.main.fadeOut(2000);
                        
                    }
                }
            ]    
        })
        tween.play();
    
        this.cameras.main.on('camerafadeoutcomplete', () => {
            this.scene.start('Title');
        });
    }
}