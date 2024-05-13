import { create } from "./character.js";

const createButton = document.querySelector("button");

createButton.addEventListener('click', function() {
    create();
});
