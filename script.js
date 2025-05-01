import { showNotification } from "./notofication.js";

document.getElementById("success-btn").addEventListener("click", () => {
    showNotification("success", "Well done!");
});

document.getElementById("fail-btn").addEventListener("click", () => {
    showNotification("fail", "Oh snap! Something went wrong.");
});

document.getElementById("warning-btn").addEventListener("click", () => {
    showNotification("warning", "Warning!");
});
