function toggleChat() {
    var chatContainer = document.getElementById("chat-container");
    chatContainer.style.display = chatContainer.style.display === "none" || chatContainer.style.display === "" ? "flex" : "none";
}

 async function sendMessage() {
    var inputField = document.getElementById("chat-input");
    var message = inputField.value.trim().toLowerCase();
    if (message === "") return;
    
    var chatBody = document.getElementById("chat-body");
    var userMessage = document.createElement("div");
    userMessage.className = "message user-message";
    userMessage.textContent = inputField.value;
    chatBody.appendChild(userMessage);
    inputField.value = "";
    
    setTimeout(async () => {
        var botMessage = document.createElement("div");
        botMessage.className = "message bot-message";
        
        if (message.startsWith("play ")) {
            let songName = message.replace("play ", "").trim();
            let trackId = await searchSong(songName);
            botMessage.innerHTML = `Playing: ${songName}<br><iframe class='spotify-player' src='https://open.spotify.com/embed/track/${trackId}' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>`;
        } else if (message.includes("8d audio music production")) {
    botMessage.textContent = "8D Audio Music Production, founded by Ayan Singh, is revolutionizing music with immersive 8D experiences. Collaborations include T-Series, Zee Music Company, and DJ NYK. Contact us on - 8daudiomusicproductionr@gmail.com";
} else if (message.includes("lata mangeshkar")) {
    botMessage.textContent = "Lata Mangeshkar was an Indian playback singer and occasional music composer. She is widely considered one of the greatest and most influential singers in India...";
} else if (message.includes("arijit singh")) {
    botMessage.textContent = "Arijit Singh, a leading Indian playback singer and music composer celebrated for his emotive vocals and diverse musicality...";
} else if (message.includes("jubin nautiyal")) {
    botMessage.textContent = "Jubin Nautiyal is a popular Indian playback singer and live performer known for his soulful voice...";
} else if (message.includes("udit narayan")) {
    botMessage.textContent = "Udit Narayan is a celebrated Indian playback singer renowned for his versatile voice...";
} else if (message.includes("armaan malik")) {
    botMessage.textContent = "Armaan Malik is a popular Indian singer, songwriter, and actor known for his versatile vocals...";
} else if (message.includes("thanks")) {
    botMessage.textContent = "You're welcome! 😊";
} else if (message.includes("hello")) {
    botMessage.textContent = "Hello! How can I help you? 😊";
} else if (message.includes("hi")) {
    botMessage.textContent = "Hi! How can I help you? 😊";
} else {
    botMessage.textContent = "I am Byte AI, your music assistant! How can I help you?";
}
        
        chatBody.appendChild(botMessage);
    }, 1500);


const CLIENT_ID = '63699e41233347cebad1bc4fe559d650';
const CLIENT_SECRET = 'e5fc54aafe454cf7aa853290ef7d35ce';
let accessToken = '';

async function getSpotifyToken() {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
        },
        body: 'grant_type=client_credentials'
    });
    const data = await response.json();
    accessToken = data.access_token;
}

async function searchSong(songName) {
    const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(songName)}&type=track&limit=1`, {
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    });
    const data = await response.json();
    return data.tracks.items[0]?.id || '';
}

function toggleChat() {
    var chatContainer = document.getElementById("chat-container");
    chatContainer.style.display = chatContainer.style.display === "none" || chatContainer.style.display === "" ? "flex" : "none";
}

async function sendMessage() {
    var inputField = document.getElementById("chat-input");
    var message = inputField.value.trim().toLowerCase();
    if (message === "") return;
    
    var chatBody = document.getElementById("chat-body");
    var userMessage = document.createElement("div");
    userMessage.className = "message user-message";
    userMessage.textContent = inputField.value;
    chatBody.appendChild(userMessage);
    inputField.value = "";
    
    setTimeout(async () => {
        var botMessage = document.createElement("div");
        botMessage.className = "message bot-message";
        
        if (message.includes("play")) {
            let songName = message.replace("play", "").trim();
            let trackId = await searchSong(songName);
            botMessage.innerHTML = `Playing: ${songName}<br><iframe class='spotify-player' src='https://open.spotify.com/embed/track/${trackId}' width='100%' height='80' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>`;
        } else {
            botMessage.textContent = "I am Byte AI, your music assistant! How can I help you?";
        }
      

        chatBody.appendChild(botMessage);
    }, 1500);
}
getSpotifyToken();
}