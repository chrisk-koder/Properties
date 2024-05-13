// Notification functions, definitely not needed but a fun little addition
export function notification(type) {

    // Get the character creator
    const charCreator = document.querySelector("#charCreator");
    // Create the notification div
    const notif = document.createElement("div");
    notif.id = "notification";

    // Set the text
    if (type == "success") {
        notif.textContent = "Successfully created character!";
    } else if (type == "error") {
        notif.textContent = "Incorrect input.";
    }

    // Add the correct class
    // Success class gives it a green border
    // Error class gives it a red border
    notif.classList.add(type);

    // Append the notif to the character creator section
    charCreator.appendChild(notif);

    // Set a timeout to wait 5 seconds before deleting the notification
    setTimeout(() => {
        charCreator.removeChild(notif);
    }, 5000);
}
