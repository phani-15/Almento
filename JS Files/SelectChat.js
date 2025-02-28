

function openChat(index) {
    let chatPage = document.getElementById('chatSpace');
    chatPage.innerHTML = ""
    let head = document.createElement("div");
    head.classList.add("bg-[#21012A]", "h-16", "w-[75vw]", "flex")
    let image = document.createElement('img');
    image.src = "../images/UserIcon.png"
    image.classList.add('size-[45px]', 'mx-5', "mt-2");
    let div = document.createElement("div");
    div.textContent = names[index]
    div.classList.add('text-2xl', 'ml-5', "text-white", "mt-4")
    head.appendChild(image)
    head.appendChild(div)
    chatPage.appendChild(head)
}

// Chat Names Array
let names = ["vinay", "phani", "pragna", "swaroop", "nagendra", "srujana", "pavan", "mounika", "sirisha", "nageswari", "jasmika", "satya", "srilaxmi"];
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

// Function to Find Chat
function findChat() {
    let Name = document.getElementById('chatName').value.trim();
    if (Name !== "") {
        for (let index of names) {
            if (index.trim() === Name) {
                openChat(names.indexOf(index))
                document.getElementById("chatName").value = ""
                break;
            }
        }
    }
}