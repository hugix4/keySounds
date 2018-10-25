function alguna(e) {
    // console.log(e);
    // console.log(e.target.dataset.tecla);
    var clickB = e.target.dataset.tecla;
    if (!clickB) return;
    addTransition('', clickB);


}


function addTransition(e, code) {
    let audio = '';
    let key = '';
    //console.log('code es: ' + code);
    if (code) {
        audio = document.querySelector(`audio[data-tecla="${code}"]`);
        key = document.querySelector(`.key[data-tecla="${code}"]`);
        // console.log('entra al if del code ');
        // e.keyCode = code;
        // console.log(' result: ' + e.keyCode);
    } else {
        // console.log(e.keyCode);
        audio = document.querySelector(`audio[data-tecla="${e.keyCode}"]`);
        key = document.querySelector(`.key[data-tecla="${e.keyCode}"]`);
    }
    // console.log(e);
    // console.log(key);
    // document.getElementById('prKey').innerHTML = e.keyCode + " " + e.code;

    if (!audio) return;
    //console.log(audio);
    //console.log(key);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    //key.classList.remove('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
window.addEventListener('keydown', addTransition);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('click', alguna);