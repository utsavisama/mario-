function preload() {
	mario_jump = loadSound("jump.wav")
	mario_coin = loadSound("coin.wav")	
	mario_kick = loadSound("kick.wav")	
	mario_die = loadSound("mariodie.wav")	
	mario_gameover = loadSound("gameover.wav")	
	
	
	
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();

}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	video = createCapture(VIDEO)
	video.size(600, 300) 
	video.parent('game_console')
	posenet = ml5.poseNet(video, modalLoaded)
	posenet.on('pose', gotposes)
	instializeInSetup(mario)
}

function draw() {
	game()
}

function modalLoaded(){
	console.log('Model is Loaded')
}

function gotposes(results){
		if(results.length > 0 ){
				nosex = results[0].pose.nose.x
				nosey = results[0].pose.nose.y

		}
}





