// 
function character(name, occupation, goodTrait, badTrait) {
    this.name = name;
    this.occupation = occupation;
    this.goodTrait = goodTrait;
    this.badTrait = badTrait;
}

function createCharacter() {

    const name = document.querySelector("#charName").value.trim();
    const occupation = document.querySelector("#charOccupation").value.trim();
    const goodTrait = document.querySelector("#charGoodTraits").value.trim();
    const badTrait = document.querySelector("#charBadTraits").value.trim();

    if (!name || occupation === "none" || goodTrait === "none" || badTrait === "none") {
        notification("incorrectInput");
    } else {
        const newCharacter = new character(name, occupation, goodTrait, badTrait);
        console.log(newCharacter);
    }
}

function addCharacter() {
    
}

// Notification functions, definitely not needed but a fun little addition
/*function notification(type) {

    const categories = {
        success: ["charCreated"],
        error: ["incorrectInput", "charExists"]
    }

    const messages = {
        incorrectInput: "Incorrect character input, make sure to specify a name, occupation, good and bad trait.",
        charExists: "Character with this name already exists",
        charCreated: "Character has been created!"
    }

}*/