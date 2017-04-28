console.log("hihi");

// No way! We can't give Darth Vader the resistance location! Don't have a variable with sensitive information out into the public!

	// var resistanceLocation = "D'Qar";

	// let getLocation = document.getElementById("btn-getLocation");

	// getLocation.addEventListener("click", function(){
	// 	console.log("Hey Darth, we are located at: ", resistanceLocation);
	// });

let objButton = document.getElementById("btn-checkObject");
objButton.addEventListener("click", introduceStarwars);

function introduceStarwars(event){
	console.log("Star Wars IIFE", Starwars);
}

let locbtn = document.getElementById("btn-getRLocation");
locbtn.addEventListener("click", function(event){
	Starwars.getLocation(locbtn.getAttribute("whoIsIt"));
});

let locbtn2 = document.getElementById("btn-getRLocation2");
locbtn2.addEventListener("click", function(event){
	Starwars.getLocation(locbtn2.getAttribute("whoIsIt"));
});

let addPlayer = document.getElementById("btn-signup");
addPlayer.addEventListener("click", function(){
	let newPlayerName = document.getElementById("newperson").value;
	// which side
	var whichselected;
	var radios = document.getElementsByName("whichside");
	for (var i = 0; i < radios.length; i++){
		// 1 = Good, 2 = Evil, 0 = Jedi
		if (radios[i].checked){
			whichselected = radios[i].value;
			break;
		}
	}
	console.log("whichselected", whichselected);

	if (whichselected == 0){
		Starwars.addJedi(newPlayerName);
	}else if (whichselected == 1){
		Starwars.setPlayer(newPlayerName);
		console.log("one is good");
	}else if (whichselected == 2){
		Starwars.setEvil(newPlayerName);
	}
});

let removeJedi = document.getElementById("btn-removeanakin");
removeJedi.addEventListener("click", function(event){
	Starwars.removeJedi("Anakin Skywalker", "Darth Vader");
});

let removeJedi2 = document.getElementById("btn-removeobiwan");
removeJedi2.addEventListener("click", function(event){
	Starwars.removeJedi("Obi-Wan Kenobi");
});