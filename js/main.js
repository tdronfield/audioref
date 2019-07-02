(() => {
  console.log('fired!');

  function logKeyCode(event) {

    console.log(event.keyCode);

    const currentKey = document.querySelector(`div[data-key="${event.keyCode}"]`)

    if (!currentKey) { return; } //if there's no matching div with that key, exit

    //apply the ".playing" class to current div
    currentKey.classList.add('playing');

    //play the audio that goes with the div
    let currentAudioClip = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    currentAudioClip.currentTime = 0
    currentAudioClip.play();
  }

  function removePlayingClass(event) {
    //Listen for the transition to end then remove the playing class from "key" div

    // I need a transition that only fires once so that I only run this function once
    if (event.propertyName !== "transform") { return; }

      console.log('transform transition is done');
      event.target.classList.remove('playing'); //grab div we are targeting(corresponds to key we are pressing) and remove the 'playing' div from it.

  }

  const key = Array.from(document.querySelectorAll('.key'));
  key.forEach(key => key.addEventListener('transitionend', removePlayingClass));

    // this conditional statement means:
    //if we make a match, play the matching audio element
    //if (currentAudioClip) {
      //currentAudioClip.play();
    //if we do not find a match, or there is no audio element to play -> do nothing
    //} else {
      // a return will make a function exit without breaking
      //return; //ends the function
    //}
  //}

  //function resetSound(event){
    //return;
    //let currentAudioClip = document.querySelector(`audio[data-key="${event.keyCode}"]`)

    //if (currentAudioClip) {
      //currentAudioClip.currentTime = 0; //resets sound so we can replay it even if it hasnt finished
    //} else {
    //  let currentAudioClip = document.querySelector(`audio[data-key="${event.keyCode}"]`);
      //currentAudioClip = 0;
      //currentAudioClip.play();
    //}
  //}

  //get keyboard press
  window.addEventListener("keydown", logKeyCode);
  //window.addEventListener("keyup", resetSound);
})();
