const messageInput = document.querySelector('#problem-4 #message-input');
const messageFeedback = document.querySelector('#problem-4 #message-feedback')

const MAX_CHARACTERS = 50;

// Write your code here
messageInput.addEventListener("value", displayMessage())

function displayMessage(){
    if (messageInput.value.length <= MAX_CHARACTERS){
        let under = MAX_CHARACTERS - messageInput.value.length;
        messageInput.classList.remove("is-invalid");
        messageInput.classList.add("is-valid");
        messageFeedback.classList.remove("invalid-feedback");
        messageFeedback.classList.add("valid-feedback");
        messageFeedback.textContent = under + " characters left";
    }
    else{
        let over = messageInput.value.length <= MAX_CHARACTERS
        messageInput.classList.remove("is-valid");
        messageInput.classList.add("is-invalid");
        messageFeedback.classList.remove("valid-feedback");
        messageFeedback.classList.add("invalid-feedback");
        messageFeedback.textContent = over + " characters too many";
    }
}
