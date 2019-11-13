function textTo() {
    $('#speak').click(function(){
    var text = `I’m truly passionate about my work and always eager to learn hands on with new technologies. While I enjoy all aspects of my work, I think my favourite stage of a work is interacting with the client or business unit leader to understand his or her business objectives. As we go through that collaborative process, the ideas start to flow and that’s always the fun part to start them implemented using computer science technology.`;
    
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[10];
    msg.voiceURI = "native";
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 0.8;
    msg.lang = 'en-US';
    msg.text = text;

    speechSynthesis.speak(msg);

    })
};