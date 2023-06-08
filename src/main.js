let config ={
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    scale:{
        mode:Phaser.Scale.FIT,
        autoCenter:Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y:2000 },
        }
    },
    scene: [Intro, Title]
};

let game = new Phaser.Game(config);