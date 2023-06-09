class Intro extends Phaser.Scene {
    constructor() {
        super('Intro')
    }

    preload(){
        this.load.image("background", "src/assets/titleMenu/menuBackground.png");
        this.load.image("logo", "src/assets/titleMenu/logo.png")
    }

    create() {

        let scaleRatio = window.devicePixelRatio / 3;
        this.cameras.main.fadeIn(2000);


        let background = this.add.image(0, 0, 'background').setOrigin(0,0).setInteractive();

        // fonts
        var style = { font: "Bold 132px Arial", fill: '0x000000', boundsAlignH: 'center', boundsAlignV: 'middle'};
        var style2 = { font: "Bold 42px Arial", fill: '0x000000', boundsAlignH: 'center', boundsAlignV: 'middle'};
        // add title and movement anim
        let title = this.add.image(960, 490, 'logo').setOrigin(0,0).setInteractive().setOrigin(.5,.5).setScale(scaleRatio * 50, scaleRatio * 40);
        var tween = this.tweens.add({
            targets: title,
            y: { start: 500, from: 500, to: 400},
            ease:'Linear',
            yoyo: true,
            repeat: 1,
            duration: 4000,
            onComplete: () => {this.cameras.main.fadeOut(2000)}
        })
    
        this.cameras.main.on('camerafadeoutcomplete', () => {
            this.scene.start('Title');
        });
    }
}