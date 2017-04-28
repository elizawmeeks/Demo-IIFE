console.log("Lightside Loaded");

// Now we're making the Light Side additions to the Starwars object. But we don't want to overwrite the Dark Side additions, so we are passing Starwars into it, which adds the original functionality defined in Darkside to it.

var Starwars = (function(originalStarwars){

	var location = "D'Qar";
	var keyplayers = ["Princess Leia", "Han Solo", "Chewbacca", "Admiral Ackbar", "Jar Jar Binks", "Ahsoka Tano", "Bail Organa", "Mon Mothma", "Jyn Erso", "Saw Garerra", "Cassian Andor", "R2-D2", "Hera Syndulla", "Ezra Bridger", "Sabine Wren", "Garazeb Orrelius", "C1-10P", "K-2SO", "AP-5", "C-3PO"];
	var jedi = ["Luke Skywalker", "Yoda", "Obi-Wan Kenobi", "Anakin Skywalker", "Mace Windu", "Deepa Billaba", "Kanan Jarrus", "Luminara Unduli", "Kit Fisto"];

	originalStarwars.getLocation = function(whoAsks){
		console.log("whoAsks", whoAsks);
		let tell = true;
		let evilPlayers = Starwars.getEvil();
		evilPlayers.forEach(function(item){
			if (item === whoAsks){
				tell = false;
			}
		});

		if (tell){
			console.log(whoAsks, " is on the good side. Location: ", location);
		} else {
			console.log("You are evil, cannot tell you.");
		}
	};

	originalStarwars.addJedi = function(who){
		jedi.push(who);
		console.log("jedi list: ", jedi);
	};

	originalStarwars.setPlayer = function(who){
		keyplayers.push(who);
		console.log("Key Players: ", keyplayers);
	}

	originalStarwars.removeJedi = function(deadJedi, babySith){
		let whichIndex;
		jedi.forEach(function(item, index){
			if (item === deadJedi){
				whichIndex = index;
			}
		});

		jedi.splice(whichIndex, 1);
		console.log("Jedi after death ", jedi);

		if(babySith){
			Starwars.setEvil(babySith);
		}
	};

	return originalStarwars;

})(Starwars);