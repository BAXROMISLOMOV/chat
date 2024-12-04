
// // let userName = "";  
// // let messagesContainer = document.getElementById("messages");
// // let messageInput = document.getElementById("messageInput");
// // let chatContainer = document.getElementById("chatContainer");
// // let nameSelection = document.getElementById("nameSelection");

// // let lastSender = ""; 

// // function setUserName(name) {
// //   userName = name;
// //   nameSelection.style.display = "none"; 
// //   chatContainer.style.display = "block";
// // }

// // function sendMessage() {
// //   let message = messageInput.value.trim();  

// //   if (message) {
// //     let messageDiv = document.createElement("div");
// //     messageDiv.classList.add("message");

// //     if (userName === "Alice") {
// //       messageDiv.classList.add("alice"); 
// //     } else if (userName === "Bob") {
// //       messageDiv.classList.add("bob"); 
// //     }

// //     messageDiv.innerHTML = `<strong class="sender">${userName}:</strong> ${message}`;

// //     messagesContainer.appendChild(messageDiv);

// //     lastSender = userName;

// //     messageInput.value = "";

// //     messagesContainer.scrollTop = messagesContainer.scrollHeight;
// //   }
// // }

// // function changeUserName() {
// //   chatContainer.style.display = "none"; 
// //   nameSelection.style.display = "block";
// //   lastSender = "";  
// // }
// let userName = "";  // Current user's name
// let messagesContainer = document.getElementById("messages");
// let messageInput = document.getElementById("messageInput");
// let chatContainer = document.getElementById("chatContainer");
// let nameSelection = document.getElementById("nameSelection");

// let lastSender = "";  // To keep track of the last message sender

// function setUserName(name) {
//   userName = name;
//   nameSelection.style.display = "none";  // Hide name selection
//   chatContainer.style.display = "block"; // Show the chat container
// }

// function sendMessage() {
//   let message = messageInput.value.trim();  // Get the message input value

//   if (message) {
//     // Create a new div element for the message
//     let messageDiv = document.createElement("div");
//     messageDiv.classList.add("message");

//     // Assign background color based on the user
//     if (userName === "Alice") {
//       messageDiv.classList.add("alice");  // Alice's background
//     } else if (userName === "Bob") {
//       messageDiv.classList.add("bob");   // Bob's background
//     }

//     // Add the message content
//     messageDiv.innerHTML = `<strong class="sender">${userName}:</strong> ${message}`;

//     // Create a delete button
//     let deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.classList.add("delete-button");
//     deleteButton.onclick = function () {
//       // Remove the message when the delete button is clicked
//       messagesContainer.removeChild(messageDiv);
//     };

//     // Append the delete button to the message div
//     messageDiv.appendChild(deleteButton);

//     // Append the message to the messages container
//     messagesContainer.appendChild(messageDiv);

//     // Update the last sender to the current user
//     lastSender = userName;

//     // Clear the input field
//     messageInput.value = "";

//     // Scroll to the bottom of the message container
//     messagesContainer.scrollTop = messagesContainer.scrollHeight;
//   }
// }

// function changeUserName() {
//   chatContainer.style.display = "none";  // Hide the chat container
//   nameSelection.style.display = "block"; // Show name selection
//   lastSender = "";  // Reset the last sender
// }
let userName = "";  // Current user's name
let messagesContainer = document.getElementById("messages");
let messageInput = document.getElementById("messageInput");
let chatContainer = document.getElementById("chatContainer");
let nameSelection = document.getElementById("nameSelection");

let lastSender = "";  // To keep track of the last message sender

function setUserName(name) {
  userName = name;
  nameSelection.style.display = "none";  // Hide name selection
  chatContainer.style.display = "block"; // Show the chat container
}

function sendMessage() {
  let message = messageInput.value.trim();  // Get the message input value

  if (message) {
    // Create a new div element for the message
    let messageDiv = document.createElement("div");
    messageDiv.classList.add("message");

    // Assign background color based on the user
    if (userName === "Alice") {
      messageDiv.classList.add("alice");  // Alice's background
    } else if (userName === "Bob") {
      messageDiv.classList.add("bob");   // Bob's background
    }

    // Add the message content
    messageDiv.innerHTML = `<strong class="sender">${userName}:</strong> ${message}`;

    // Create a delete button with a trash icon
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");

    // Add the trash icon to the delete button
    deleteButton.innerHTML = '<i class="ri-delete-bin-line"></i>'; // Trash icon using Remix Icon
    deleteButton.onclick = function () {
      // Remove the message when the delete button is clicked
      messagesContainer.removeChild(messageDiv);
    };

    // Append the delete button to the message div
    messageDiv.appendChild(deleteButton);

    // Append the message to the messages container
    messagesContainer.appendChild(messageDiv);

    // Update the last sender to the current user
    lastSender = userName;

    // Clear the input field
    messageInput.value = "";

    // Scroll to the bottom of the message container
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
}

function changeUserName() {
  chatContainer.style.display = "none";  // Hide the chat container
  nameSelection.style.display = "block"; // Show name selection
  lastSender = "";  // Reset the last sender
}
