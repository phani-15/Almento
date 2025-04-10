// Define names array first
var names = ["vinay", "Padhu", "Phani", "Noor", "pragna", "swaroop", "nagendra"];

// Initialize chats object dynamically
const chats = {};
chats[0] =[
    { sender: "Vinay", text: "Hey, how are you?", time: getCurrentTime() },
    { sender: "You", text: "I'm good, thanks!", time: getCurrentTime() }
]
chats[1]= [
    { sender: "Padhu", text: "Hello", time: getCurrentTime() },
    { sender: "You", text: "hii", time: getCurrentTime() }
]
chats[2]=[
    { sender: "Phani", text: "Did you see the game?", time: getCurrentTime() },
    { sender: "You", text: "Yeah, it was amazing!", time: getCurrentTime() }
]
chats[3]=[
    { sender: "Noor", text: "Want to grab lunch?", time: getCurrentTime() },
    { sender: "You", text: "Sure, where?", time: getCurrentTime() }
]
chats[4]=[
    { sender: "You", text: "What are you doing ?", time: getCurrentTime() },
    { sender: "Pragna", text: "Nothing", time: getCurrentTime() }
]
chats[5]=[
    { sender: "Swaroop", text: "What's your aim", time: getCurrentTime() },
    { sender: "You", text: "To become a Successfull person", time: getCurrentTime() }
]
chats[6]=[
    { sender: "You", text: "What's your favourite place", time: getCurrentTime() },
    { sender: "Nagendra", text: "Kullu Manali", time: getCurrentTime() }
]

// Function to send a message
function sendMessage() {
    let inputField = document.getElementById("messageInput");
    let message = inputField.value.trim();
   
    if(message){
        let chatBox = document.getElementById("chats");

        // Add the message to the chats object
        let activeChatIndex = names.indexOf(document.getElementById("ChatHead").textContent.trim());
        chats[activeChatIndex].push({ sender: "You", text: message, time: getCurrentTime() });
    
        // Append the message to the chatbox
        let newMessage = document.createElement("div");
        newMessage.className = "flex justify-end"; // Align to the right for "You"
        newMessage.innerHTML = `
            <div class="text-white p-2 rounded-lg max-w-xs">
                ${message}<br />
                <small class="text-gray-500 text-xs">${getCurrentTime().toLocaleTimeString()}</small>
            </div>`;
        chatBox.appendChild(newMessage);
    
        inputField.value = "";
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
        }
}

// Function to get the current time
function getCurrentTime() {
    const now = new Date();
    return now; // Returns the current time in a readable format
}

// Function to open a chat
function openChat(index) {
    if (index < 0 || index >= names.length) {
        console.error("Invalid chat index");
        return;
    }

    let chatPage = document.getElementById('ChatHead');
    chatPage.classList.add("bg-[#21012A]", "flex");
    chatPage.innerHTML = "";

    let image = document.createElement('img');
    image.src = "../images/UserIcon.png";
    image.classList.add('size-[45px]', 'mx-5', "mt-2");

    let div = document.createElement("div");
    div.textContent = names[index];
    div.classList.add('text-2xl', 'ml-5', "text-white", "mt-4");

    chatPage.appendChild(image);
    chatPage.appendChild(div);

    document.getElementById("typeSpace").classList.remove("hidden");
    const chatBox = document.getElementById("chats");
    chatBox.innerHTML = "";

    chats[index].forEach(msg => {
        const messageDiv = document.createElement("div");
        messageDiv.className = msg.sender === "You" ? "flex justify-end" : "flex justify-start";
        messageDiv.innerHTML = `
            <div class='text-white bg-opacity-30 p-2 rounded-full max-w-xs'>
                ${msg.text}<br />
                <small class='text-gray-500 text-xs'>${msg.time.toLocaleTimeString()}</small>
            </div>`;
        chatBox.appendChild(messageDiv);
    });

    chatBox.scrollTop = chatBox.scrollHeight;
}

// Load Initial Chats
let chatList = document.getElementById('chatList');
names.forEach((name, index) => {
    let li = document.createElement('li');
    li.classList.add('flex', 'bg-[#310e3b]', 'h-16', 'rounded-full', 'items-center', 'px-5', 'hover:cursor-pointer');

    let img = document.createElement('img');
    img.src = "../images/UserIcon.png";
    img.classList.add('size-[45px]');

    let div = document.createElement('div');
    div.textContent = name;
    div.classList.add('text-xl', 'ml-5');

    li.appendChild(img);
    li.appendChild(div);
    chatList.appendChild(li);

    // Add click event to open the chat
    li.addEventListener("click", () => openChat(index));
});

// Function to compare strings case-insensitively
function isEqualIgnoreCase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}

// Event listener for sending messages
document.getElementById("messageInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Event listener for searching chats
document.getElementById("chatName").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        findChat();
    }
});

// Function to find a chat
function findChat() {
    let Name = document.getElementById('chatName').value.trim();
    let alert = document.getElementById('Alert');
    let found = false;

    if (Name !== "") {
        for (let i = 0; i < names.length; i++) {
            if (isEqualIgnoreCase(names[i], Name)) {
                alert.textContent = "";
                openChat(i);
                document.getElementById("chatName").value = "";
                found = true;
                break;
            }
        }
    }

    if (!found) {
        alert.textContent = "Chat not found";
    }
}

// Open the first chat by default
// openChat(0);