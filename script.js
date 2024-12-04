
let userName = "";  
let messagesContainer = document.getElementById("messages");
let messageInput = document.getElementById("messageInput");
let chatContainer = document.getElementById("chatContainer");
let nameSelection = document.getElementById("nameSelection");

let lastSender = ""; 

function setUserName(name) {
  userName = name;
  nameSelection.style.display = "none"; 
  chatContainer.style.display = "block"; 
}

function sendMessage() {
  let message = messageInput.value.trim();  

  if (message) {
    let messageDiv = document.createElement("div");
    messageDiv.classList.add("message");

    if (userName === "Alice") {
      messageDiv.classList.add("alice"); 
    } else if (userName === "Bob") {
      messageDiv.classList.add("bob");  
    }

    messageDiv.innerHTML = `<strong class="sender">${userName}:</strong> ${message}`;

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");

    deleteButton.innerHTML = '<i class="ri-delete-bin-line"></i>';
    deleteButton.onclick = function () {
      messagesContainer.removeChild(messageDiv);
    };

    messageDiv.appendChild(deleteButton);

    messagesContainer.appendChild(messageDiv);

    lastSender = userName;

    messageInput.value = "";

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
}

function changeUserName() {
  chatContainer.style.display = "none";  
  nameSelection.style.display = "block"; 
  lastSender = "";  
}
