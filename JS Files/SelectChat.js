

function openChat(index) {
    let chatPage = document.getElementById('ChatHead');
    chatPage.classList.add("bg-[#21012A]",  "flex")
    chatPage.innerHTML = ""
    let image = document.createElement('img');
    image.src = "../images/UserIcon.png"
    image.classList.add('size-[45px]', 'mx-5', "mt-2");
    let div = document.createElement("div");
    div.textContent = names[index]
    div.classList.add('text-2xl', 'ml-5', "text-white", "mt-4")
    chatPage.appendChild(image)
    chatPage.appendChild(div)
}

// Chat Names Array
let names = ["vinay","Padhu", "Phani","Amina", "pragna", "swaroop", "nagendra", "srujana", "pavan", "mounika", "sirisha", "nageswari", "jasmika", "satya", "srilaxmi"];
let chatList = document.getElementById('chatList');

// Load Initial Chats
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
    li.addEventListener("click", () => openChat(index))
})

// function to check names are same or not
function isEqualIgnoreCase(str1,str2){
    let st1 = str1.toLowerCase()
    let st2 = str2.toLowerCase()
    return (st1 === st2) 
}

document.getElementById("chatName").addEventListener("keypress", function(event) {
    if (event.key === "Enter") { // Check if Enter is pressed
        findChat();
    }
});
// Function to Find Chat
function findChat() {
    let Name = document.getElementById('chatName').value.trim();
    if (Name !== "") {
        for (let name of names) {
            if (isEqualIgnoreCase(name,Name)) {
                openChat(names.indexOf(name))
                document.getElementById("chatName").value = ""
                break;
            }
        }
    }
}