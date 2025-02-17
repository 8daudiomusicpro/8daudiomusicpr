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

} else if (message.includes("arijit singh")) {
    botMessage.textContent = "🎤Arijit Singh, a leading Indian playback singer and music composer celebrated for his emotive vocals and diverse musicality...";
} else if (message.includes("jubin nautiyal")) {
    botMessage.textContent = "Jubin Nautiyal is a popular Indian playback singer and live performer known for his soulful voice...";
} else if (message.includes("udit narayan")) {
    botMessage.textContent = "Udit Narayan is a celebrated Indian playback singer renowned for his versatile voice...";
} else if (message.includes("armaan malik")) {
    botMessage.textContent = "Armaan Malik is a popular Indian singer, songwriter, and actor known for his versatile vocals...";
} else if (message.includes("thanks")) {
    botMessage.textContent = "You're welcome! 😊";
} else if (message.includes("hello")) {
    botMessage.textContent = "Hello! How can I help you? 👋";
} else if (message.includes("hi")) {
    botMessage.textContent = "Hi! How can I help you? 👋 ";

} else if (message.includes("what is 8d audio")) { 
    botMessage.textContent = "🎧 8D audio is a sound effect that makes music feel like it’s moving around your head, creating an immersive experience.";
} else if (message.includes("8d audio work")) { 
    botMessage.textContent = "🔊 8D audio works by applying special effects that make the sound move between your left and right ears, creating a 360-degree experience.";
} else if (message.includes("who created 8d audio")) { 
    botMessage.textContent = "🎶 8D audio isn’t created by one person. It’s an effect applied by sound engineers and producers to enhance the listening experience.";
} else if (message.includes("can i listen to 8d audio without headphones")) { 
    botMessage.textContent = "🎧 8D audio is best experienced with headphones. Without them, the effect won’t be as immersive.";
} else if (message.includes("what is binaural audio")) { 
    botMessage.textContent = "🎼 Binaural audio is a recording technique that mimics how we naturally hear sound, creating a 3D-like effect when using headphones.";
} else if (message.includes("what is the difference between 8d and binaural audio")) { 
    botMessage.textContent = "🤔 8D audio is an effect that moves sound between channels, while binaural audio uses special recording techniques to capture natural 3D sound.";
} else if (message.includes("does 8d audio improve music quality")) { 
    botMessage.textContent = "🎵 8D audio doesn’t improve the quality of the music itself, but it enhances the listening experience by adding depth and movement.";
} else if (message.includes("is 8d audio safe for ears")) { 
    botMessage.textContent = "👂 Yes, 8D audio is safe if you listen at a normal volume. Just avoid excessive loudness to protect your ears.";
} else if (message.includes("where can i find 8d music")) { 
    botMessage.textContent = "🔎 You can find 8D music on YouTube, Spotify, and other streaming platforms. Check out '8D Audio Music Production' for amazing tracks!";
} else if (message.includes("can any song be converted to 8d audio")) { 
    botMessage.textContent = "🎶 Yes! Any song can be converted into 8D audio using special mixing techniques and effects.";
} else if (message.includes("who owns 8d audio music production")) { 
    botMessage.textContent = "🎼 8D Audio Music Production was founded by Ayan Singh, bringing immersive sound experiences to music lovers worldwide.";
} else if (message.includes("how can i create 8d audio")) { 
    botMessage.textContent = "🎛️ You can create 8D audio using DAWs like FL Studio or Adobe Audition, applying panning and reverb effects.";
} else if (message.includes("what is the future of 8d audio")) { 
    botMessage.textContent = "🚀 The future of 8D audio is promising! With advancements in spatial audio and VR, immersive sound experiences will continue to evolve.";
} else if (message.includes("what is spatial audio")) { 
    botMessage.textContent = "🎧 Spatial audio is a technology that makes sound feel like it’s coming from all around you, creating an immersive 3D effect.";
} else if (message.includes("8d audio the same as spatial audio")) { 
    botMessage.textContent = "🔊 No, 8D audio is a panning effect applied to stereo tracks, while spatial audio is a more advanced technology that simulates real-world sound positioning.";
} else if (message.includes("8d audio work on speakers")) { 
    botMessage.textContent = "🔉 8D audio works best with headphones because it relies on stereo separation. On speakers, the effect is less noticeable.";
} else if (message.includes("best software to create 8d audio")) { 
    botMessage.textContent = "🎛️ You can use software like FL Studio, Adobe Audition, or Audacity to create 8D audio by applying panning and reverb effects.";
} else if (message.includes("make 8d audio on my phone")) { 
    botMessage.textContent = "📱 Yes! Apps like Dolby On and Wavelet allow you to experiment with spatial and 8D effects on your mobile device.";
} else if (message.includes("artists use 8d audio")) { 
    botMessage.textContent = "🎶 Many artists use immersive audio effects, but 8D versions of songs are usually created by remix artists and producers on YouTube.";
} else if (message.includes("16d audio")) { 
    botMessage.textContent = "🔊 16D audio is similar to 8D but adds more layers of panning and reverb effects, creating a more immersive experience.";
} else if (message.includes("is 8d audio a genre")) { 
    botMessage.textContent = "🎼 No, 8D audio is not a genre. It’s a sound effect that can be applied to any genre of music.";
} else if (message.includes("need to make 8d audio")) { 
    botMessage.textContent = "🎚️ You only need a computer, a DAW (like FL Studio or Audacity), and good headphones to mix 8D audio properly.";
} else if (message.includes("8d audio on spotify")) { 
    botMessage.textContent = "🎧 Just search for '8D Audio' on Spotify! There are many playlists featuring 8D versions of popular songs.";
} else if (message.includes("difference between 8d and 360 reality audio")) { 
    botMessage.textContent = "🔁 Yes! 8D audio is a simple panning effect, while 360 Reality Audio is an advanced format developed by Sony to create fully immersive sound.";
} else if (message.includes("apple music support 8d audio")) { 
    botMessage.textContent = "🍏 Apple Music doesn’t have an official 8D format, but you can find tracks with 8D effects uploaded by remix artists.";
} else if (message.includes("dolby atmos")) { 
    botMessage.textContent = "🎵 Dolby Atmos Music is an advanced audio format that places sound in a 3D space, making music more immersive than stereo or 8D audio.";
} else if (message.includes("is 8d audio a trend or the future")) { 
    botMessage.textContent = "🚀 8D audio is popular as a trend, but immersive audio technologies like Dolby Atmos and spatial audio are shaping the future of music.";
} else if (message.includes("8d audio affect the brain")) { 
    botMessage.textContent = "🧠 8D audio can create a relaxing or stimulating effect, as it tricks the brain into perceiving motion and depth in sound.";
} else if (message.includes(" best way to experience 8d audio")) { 
    botMessage.textContent = "🎧 Use high-quality headphones, close your eyes, and sit in a quiet space to fully enjoy the 8D effect.";
} else if (message.includes(" 8d audio be used in movies and games")) { 
    botMessage.textContent = "🎮 Yes! Game developers and filmmakers use similar spatial effects to create immersive sound experiences.";
} else if (message.includes("where can i learn to produce 8d audio")) { 
    botMessage.textContent = "📚 You can find tutorials on YouTube, online courses, or learn through trial and error using DAWs like FL Studio.";

} else if (message.includes("created 8d audio")) { 
    botMessage.textContent = "⏳ It depends on the complexity. A simple 8D remix can take 10-30 minutes, while advanced versions may take hours.";
} else if (message.includes("ragas")) {
    botMessage.textContent = "🎶 A raga is a melodic framework in Indian classical music, often associated with specific times of day, moods, and emotions.";
} else if (message.includes("tala")) {
    botMessage.textContent = "🕰️ Tala is a rhythmic cycle in Indian classical music, made up of a series of beats that are repeated throughout a composition.";
} else if (message.includes("bhangra")) {
    botMessage.textContent = "💃 Bhangra is a lively and energetic folk dance and music genre originating from Punjab, known for its upbeat rhythms and vibrant performances.";
} else if (message.includes("hindustani classical music")) {
    botMessage.textContent = "🎵 Hindustani classical music is one of the two main traditions of Indian classical music, focusing on melody and improvisation, originating from North India.";
} else if (message.includes("carnatic music")) {
    botMessage.textContent = "🎼 Carnatic music is the classical music tradition of South India, characterized by complex rhythms, intricate melodies, and devotional themes.";
} else if (message.includes("bollywood music")) {
    botMessage.textContent = "🎥 Bollywood music refers to the popular music of Indian cinema, blending various genres like classical, folk, and contemporary styles.";
} else if (message.includes("symphony")) {
    botMessage.textContent = "🎶 A symphony is a large-scale orchestral composition, usually consisting of multiple movements, that is often complex and emotionally expressive.";
} else if (message.includes("octave")) {
    botMessage.textContent = "🎵 An octave is the interval between one musical pitch and another with half or double its frequency, forming a fundamental building block of music.";
} else if (message.includes("scale")) {
    botMessage.textContent = "🎶 A scale is a set of musical notes arranged in ascending or descending order, forming the foundation for melodies and harmonies.";
} else if (message.includes("armaan malik")) {
    botMessage.textContent = "🎤 Armaan Malik is a popular Indian playback singer known for his soulful voice and hits in both Hindi and international music. He has sung for various Bollywood films and won multiple awards.";

   
} else if (message.includes("shreya ghoshal")) {
    botMessage.textContent = "🎵 Shreya Ghoshal is an iconic Indian playback singer, renowned for her versatile voice and her ability to sing in multiple languages, including Hindi, Bengali, and Marathi.";
} else if (message.includes("sonu nigam")) {
    botMessage.textContent = "🎤 Sonu Nigam is a celebrated Indian playback singer, known for his melodious voice and contributions to Bollywood music, spanning multiple decades.";
} else if (message.includes("atif aslam")) {
    botMessage.textContent = "🎶 Atif Aslam is a Pakistani singer who gained immense popularity in India for his romantic ballads in Bollywood films, with his soulful voice being a fan favorite.";
} else if (message.includes("neha kakkar")) {
    botMessage.textContent = "🎤 Neha Kakkar is a popular Indian playback singer known for her energetic voice and numerous hit songs in Bollywood, particularly in the dance music genre.";
} else if (message.includes("kishore kumar")) {
    botMessage.textContent = "🎵 Kishore Kumar was a legendary Indian playback singer, composer, and actor, renowned for his distinctive voice and timeless songs in Hindi cinema.";
} else if (message.includes("lata mangeshkar")) {
    botMessage.textContent = "🎶 Lata Mangeshkar was an iconic Indian playback singer, regarded as one of the greatest and most influential vocalists in the history of Indian music.";
} else if (message.includes("kumar sanu")) {
    botMessage.textContent = "🎤 Kumar Sanu is a well-known Indian playback singer, famous for his romantic ballads in Hindi cinema during the 90s and his exceptional vocal range.";
} else if (message.includes("playback singing")) {
    botMessage.textContent = "🎤 Playback singing is when a singer records a song in the studio, and their voice is later used for a film or television performance, while actors lip-sync to the track on screen.";
} else if (message.includes("fusion music")) {
    botMessage.textContent = "🎶 Fusion music is a genre that blends different musical traditions, styles, or genres, such as combining Indian classical music with jazz, rock, or electronic elements.";
} else if (message.includes("classical music")) {
    botMessage.textContent = "🎼 Classical music is a broad term that includes various traditions of music with a rich heritage, such as Western classical, Indian classical, and other regional forms, often characterized by complex structures and formalized techniques.";
} else if (message.includes("chord")) {
    botMessage.textContent = "🎶 A chord is a combination of three or more musical notes played together, typically forming the harmony of a piece of music.";
} else if (message.includes("melody")) {
    botMessage.textContent = "🎵 A melody is a sequence of musical notes that are perceived as a single entity, typically forming the main tune of a piece of music.";
} else if (message.includes("rhythm")) {
    botMessage.textContent = "🕺 Rhythm is the pattern of beats or time intervals in music, giving the music structure and determining the flow of time in a composition.";
} else if (message.includes("beat")) {
    botMessage.textContent = "🎵 A beat is a basic unit of time in a piece of music, typically represented by a regular pulse that serves as the foundation for rhythm.";
} else if (message.includes("scale in music")) {
    botMessage.textContent = "🎶 A scale is a series of notes arranged in ascending or descending order, typically within an octave, that forms the basis for melodies and harmonies in music.";
} else if (message.includes("what is an interval in music")) {
    botMessage.textContent = "🎵 An interval is the distance between two musical notes, measured in terms of pitch. Intervals can be harmonic (simultaneous) or melodic (sequential).";
} else if (message.includes("what is harmony in music")) {
    botMessage.textContent = "🎶 Harmony is the combination of different musical notes played or sung simultaneously to create a pleasing effect, adding depth and texture to music.";
} else if (message.includes("music production")) {
    botMessage.textContent = "🎧 Music production is the process of creating, recording, arranging, and producing music. It involves various techniques such as sound mixing, editing, and mastering to produce a final track.";
}




else {
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
