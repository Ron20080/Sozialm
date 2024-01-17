let currentUser = "";

function signup() {
    const usernameInput = document.getElementById("username");
    const username = usernameInput.value.trim();

    if (username !== "") {
        currentUser = username;
        document.getElementById("loggedInUser").innerText = currentUser;
        document.getElementById("signup").style.display = "none";
        document.getElementById("chat").style.display = "block";
    }
}

function addFriend() {
    const friendInput = document.getElementById("friend");
    const friend = friendInput.value.trim();

    if (friend !== "") {
        const friendList = document.getElementById("friendList");
        const friendItem = document.createElement("li");
        friendItem.innerText = friend;
        friendList.appendChild(friendItem);
        friendInput.value = "";
    }
}

function sendMessage() {
    const messageInput = document.getElementById("message");
    const message = messageInput.value.trim();

    if (message !== "") {
        const chatMessages = document.getElementById("chatMessages");
        const messageItem = document.createElement("li");
        messageItem.innerText = `${currentUser}: ${message}`;
        chatMessages.appendChild(messageItem);
        messageInput.value = "";
    }
}
