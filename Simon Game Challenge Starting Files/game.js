// alert("Hello");
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];
var randomChosenColour;
var flag = true;
var level = 0;

$("*").on("keydown", () => {
	if (flag) {
		$("h1").html("Level: " + level);
		nextSequence();
		flag = false;
	}
});

function playSound(sound) {
	var audioplay = new Audio("sounds/" + sound + ".mp3");
	audioplay.play();
}

function addAnimation(colour) {
	$("#" + colour).addClass("pressed");
	setTimeout(() => {
		$("#" + colour).removeClass("pressed");
	}, 100);
}

$(".btn").on("click", function () {
	if (flag === false) {
		var userClicked = this.id;
		userPattern.push(userClicked);
		// playSound(userClicked);
		addAnimation(userClicked);
		checkUser(userPattern.length - 1);
		console.log(userPattern);
	}
});

function nextSequence() {
	var randomNumber = Math.floor(Math.random() * 4);
	randomChosenColour = buttonColours[randomNumber];
	gamePattern.push(randomChosenColour);
	$("#" + randomChosenColour + "")
		.fadeOut(100)
		.fadeIn(100);
	playSound(randomChosenColour);
	console.log(gamePattern);
	level++;
	userPattern = [];
}

function checkUser(value) {
	if (userPattern[value] != gamePattern[value]) {
        $("body").addClass("game-over");
        playSound("wrong");
		setTimeout(() => {
			$("body").removeClass("game-over");
		}, 100);
		level = 0;
        gamePattern = [];
        
					$("h1").html("Oops!!, Try again!!");
				
        setTimeout(() => {
					$("h1").html("Level:" + level);
					nextSequence();
				}, 1000);
	}
    else{
        playSound(userPattern[value]);
        if(userPattern.length==gamePattern.length){
            setTimeout(()=>{$("h1").html("Level:" + level);
            nextSequence();}, 800);
        }
    }
}
// var valid = true;
// while(true){
//     nextSequence();
//     $('.btn').on('click',()=>{
//         if(userPattern!=gamePattern){
//             valid = false;
//             playSound("wrong");
//             if(!valid) break;
//         }
//     })
// }
