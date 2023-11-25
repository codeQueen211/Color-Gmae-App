function speakWord(button) {
    var word = button.innerText; // Get the text inside the button

    // Find a German voice
    var germanVoice = speechSynthesis.getVoices().find(function(voice) {
      return voice.lang === 'de-DE'; // German language code
    });
  
    if (germanVoice) {
      var speech = new SpeechSynthesisUtterance(word);
      speech.voice = germanVoice; // Set the voice to German
      speech.lang = 'de-DE'; // Specify the language as German
      speechSynthesis.speak(speech); // Speak the word in German
    } else {
      console.error('German voice not found.');
    }
  }
  