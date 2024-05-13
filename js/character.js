import { notification } from "./notification.js";

function character(name, occupation, goodTrait, badTrait) {
    this.name = name;
    this.occupation = occupation;
    this.goodTrait = goodTrait;
    this.badTrait = badTrait;
}

// Create the character
export function create() {
    const name = document.querySelector("#charName").value.trim();
    const occupation = document.querySelector("#charOccupation").value.trim();
    const goodTrait = document.querySelector("#charGoodTraits").value.trim();
    const badTrait = document.querySelector("#charBadTraits").value.trim();

    if (!name || occupation === "none" || goodTrait === "none" || badTrait === "none") {
        notification("error");
    } else {
        const newCharacter = new character(name, occupation, goodTrait, badTrait);
        notification("success");
        console.log(newCharacter);
    }
}
