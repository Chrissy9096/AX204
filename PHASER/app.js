console.log("OSAMA BILADIN");

//Declare the varibles
var game = new Phaser.Game(800,600, Phaser.AUTO, '',{preload: preload, create:create, update:update});
var score= 0;

function preload(){
game.load.image('sky','assets/sky.png');
game.load.image('ground', 'assets/platform.png')
game.load.image('star', 'asset/star.png');
game.load.spritesheet('dude','asset/dude.png',32,48)
game.load.spritesheet('baddie','asset/baddie.png',32,32)
}

function create(){
	//give gam physics engyine
	game.physics.startSystem(Phaser.Physics.ARCADE);
	//add sky
	game.add.sprite(0,0,'sky');
	//physics groupe
	platforms = game.add.physicsGroup();
	pladforms.enableBody=true;
	//ground
	var ground= platforms.create(0,game.world.height - 64,'ground');
	ground.scale.setTo(2,2);
	ground.body.immovable =true;

	//1ledges
	var ledge= platforms.create(400,400,'ground');
	ledge.body.immovable =true;
	ledge= platforms.create(-150,250,'ground');
	ledge.body.immovable =true;
	//player
	player = game.add.sprite(32,game.world.height -150, 'dude');
	//animate the sprite
	player.animations.add('left',[0,1,2,3], 10, true);
	player.animations.add('right',[5,6,7,8], 10, true);
	game.physics.arcade.enable(player);
	//physics propertys
	player.body.bounce.y = 0.4;
	player.body.gravity.y = 300;
	player.body.collideWorldBounds;

	//Baddie
	Baddie = game.add.sprite(750,20, 'baddie');
	//animate the sprite
	Baddie.animations.add('left',[0,1], 10, true);
	Baddie.animations.add('right',[2,3], 10, true);
	game.physics.arcade.enable(Baddie);
	//physics propertys
	Baddie.body.bounce.y = 0.4;
	Baddie.body.gravity.y = 300;
	Baddie.body.collideWorldBounds;
}


//keyboard events
cursors = game.imput.keyboard.createCursorKeys();

function update(){
	//make payer sprite collide wth platform
	game.physics.archade.collide(player,platforms);
	game.physics.archade.collide(Baddie,platforms);
	// player sppeed reset to 0
	player.body.velocity.x = 0;
	//keyboard events
	if (cursors.left.isDown){
		player.body.velocity.x = -150
		player.animations.play('left');
	}else if (cursor.right down){
		player.body.velocity.x = -150
		player.animations.play('right');

	}else{
		player.animations.stop();
		player.frame= 4;

	}
	//allow player to jump
	if(cursors.up.isDown && player.body.touching.down){
		player.body.velocity.y = -300
	}
//Enimy AI
if (baddie.x > 749){
	baddie.animations.play('left');
	baddie.body.veocity.z = -120;
}else if (baddie.x < 405){
	baddie.animations.play('right');
	baddie.body.veocity.z = 120;
    }
}