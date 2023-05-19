//your JS code here. If required.
const buttonsContainer = document.getElementById("buttons");


const sounds = ["sound1.mp3", "sound2.mp3", "sound3.mp3", "sound4.mp3"];


sounds.forEach(sound => {
  const audioElement = new Audio(`sounds/${sound}`);
  buttonsContainer.appendChild(audioElement);
});


function playSound(soundFile) {

  stopSound();

  
  const audioElement = buttonsContainer.querySelector(`audio[src="sounds/${soundFile}"]`);

 
  audioElement.play();
}


function stopSound() {
  
  const audioElements = buttonsContainer.querySelectorAll("audio");

 
  audioElements.forEach(audioElement => {
    audioElement.pause();
    audioElement.currentTime = 0;
  });
}