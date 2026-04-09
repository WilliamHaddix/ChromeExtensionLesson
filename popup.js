const button = document.querySelector(".button");
const circle = document.querySelector(".circle");

let buttonOn = false;

// async lets us use await inside — like a Blueprint latent node, it won't block
// while waiting for a result, it just resumes once the result is ready
button.addEventListener("click", async ()=>{

    // chrome.tabs.query is async (like a latent node with an "On Success" pin).
    // await pauses here until Chrome returns the result, then [ ] destructures
    // the array to grab index 0 — equivalent to tabs[0] but inline.
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if(!buttonOn)
    {
        buttonOn = true;
        circle.style.animation = "moveCircleRight 0.5s forwards";
        button.style.animation = "transformToBlue 0.5s forwards";

        // Inject appOn.js into the active tab's DOM context
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["appOn.js"]
        });
    }
    else{
        buttonOn = false;
        circle.style.animation = "moveCircleLeft 0.5s forwards";
        button.style.animation = "transformToYellow 0.5s forwards";

        // Inject appOff.js into the active tab's DOM context
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["appOff.js"]
        });
    }
});